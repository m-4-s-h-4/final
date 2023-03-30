'use client'

import "sweetalert2/dist/sweetalert2.min.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./ContactForm.module.css";

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
  const [isSent, setIsSent] = useState(false);

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
        <h2 className={styles.heading}>Send me a message</h2>
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
       <button className="my-button">
        <div className="svg-wrapper-1">
            <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
            </div>
        </div>
        <span>Send</span>
        </button>
      </form>
    </div>
  );
}
