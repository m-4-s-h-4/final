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

    return (
        <div className={styles.container}>
            {aboutMes.map((aboutMe: AboutMe, index: number) => (
                <div key={index}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>About Me</h1>
                        <p className={styles.description}>{aboutMe.info}</p>
                        <div className={styles.imageContainer}>
                            <img src={aboutMe.picture.url} alt="Picture of me" className={styles.image} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
