'use client'

import "sweetalert2/dist/sweetalert2.min.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./ContactForm.module.css";
import { SendBtn } from "../SendBtn/SendBtn";

type FormValues = {
  name: string;
  email: string;
  description: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();
  const [, setIsSent] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setIsSent(true);
    Swal.fire({
      title: "Your message was sent!",
      text: "I will reply never",
      timer: 4000,
      icon: "success"
    });

    console.log("Sent:", data);
  };

  return (
    <div className={styles.contactForm}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.heading}>Contact Me.</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <div className={styles.errorMessage}>Name must be filled.</div>
        )}
        <input
          className={styles.input}
          type="text"
          // check to see @ and something after
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <div className={styles.errorMessage}>Email must include "@"</div>
        )}
        <textarea
          className={styles.input}
          rows={4}
          placeholder="Description"
          {...register("description")}
        ></textarea>
        <SendBtn />
      </form>
    </div>
  );
}
