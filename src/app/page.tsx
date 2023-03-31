import { gql } from 'graphql-request';
import { client } from '@/lib/client';
import styles from './InfoAboutMe.module.css';

type AboutMe = {
  info: string;
  picture: {
    url: string;
  };
};

type AboutMeQueryResult = {
  aboutMes: AboutMe[];
};

const AboutMe = gql`
  query MyQuery {
    aboutMes {
      info
      picture {
        url
      }
    }
  }
`;

export default async function InfoAboutMe() {
  const { aboutMes }: AboutMeQueryResult = await client.request(AboutMe);

  const description = aboutMes[0].info;
  const sentences = description.split(/[.?!]/);
  const thirdSentence = sentences[2].trim();
  const fifthSentence = sentences[4].trim();
  const descriptionWithSpans = description.replace(thirdSentence, `<span class="${styles.thirdSentence}">${thirdSentence}</span>`);
  const finalDescription = descriptionWithSpans.replace(fifthSentence, `<span class="${styles.fifthSentence}">${fifthSentence}</span>`);

  return (
    <div className={styles.container}>
      {aboutMes.map((aboutMe: AboutMe, index: number) => (
        <div key={index} className={styles.row}>
          <div className={styles.imageContainer}>
            <img src={aboutMe.picture.url} alt="Picture of me" className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Welcome to my portfolio.</h1>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: finalDescription }}></p>
          </div>
        </div>
      ))}
    </div>
  );
}


