import { gql } from 'graphql-request';
import { client } from '../../../lib/client';
import styles from './project.module.css';

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
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>{allProjects.title}</h1>
        <p className={styles.description}>{allProjects.description}</p>
        <p className={styles.skills}>Skills: {allProjects.skills}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={allProjects.image.url} alt={allProjects.title} className={styles.image} />
      </div>
    </div>
  );
}

export default page;
