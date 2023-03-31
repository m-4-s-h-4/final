
import { gql } from 'graphql-request';
import { client } from '@/lib/client';
import styles from './AboutMe.module.css';
import Anim from '@/components/Anim/Anim';
import InfoAboutMe from './InfoAboutMe';

type Collage = {
    title: string;
    photos: {
        url: string;
    }[];
};

type AllCollagesQueryResult = {
    collages: Collage[];
};

const AllCollages = gql`
  query MyQuery {
    collages {
      title
      photos {
        url
      }
    }
  }
`;

export default async function Photos() {
    const { collages }: AllCollagesQueryResult = await client.request(
        AllCollages
    );

    return (
        <div>
            <Anim />
            <div className={styles['grid-container']}>
                {collages.map((collage: Collage, collageIndex: number) => {
                    return (
                        <div key={collageIndex} className={styles['grid-item']}>
                            <div className={styles['collage-container']}>
                                {collage.photos.map((photo: { url: string }, photoIndex: number) => {
                                    return (
                                        <div key={photoIndex} className={styles['photo-container']}>
                                            <img
                                                src={photo.url}
                                                alt={collage.title}
                                                className={styles['photo']}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}
