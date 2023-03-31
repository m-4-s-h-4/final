import { BackBtn } from '@/components/BackBtn';
import { gql } from 'graphql-request';
import { client } from '../../../lib/client';
import styles from './Project.module.css';

type ProjectParam = {
  params: { projectId: string };
}

interface ProjectsDetails {
  title: string;
  description: string;
  skills: string;
  image: {
    url: string;
  }
}

const GET_PROJECT_DETAILS = gql`
  query allProjects($projectId: ID!) {
    allProjects(where: { id: $projectId }) {
      title
      description
      skills
      image {
        url
      }
    }
  }
`;

async function page({ params: { projectId } }: ProjectParam) {
  const { allProjects } = await client.request<{ allProjects: ProjectsDetails }>(
    GET_PROJECT_DETAILS,
    { projectId }
  );

  return (
    <div> <BackBtn />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{allProjects.title}</h1>
          <p className={styles.description}>{allProjects.description}</p>
          <p className={styles.skills}>Skills: {allProjects.skills}</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={allProjects.image.url} alt={allProjects.title} className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default page;
