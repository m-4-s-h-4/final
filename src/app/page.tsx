import { gql } from 'graphql-request';
import { client } from './lib/client';
import styles from './Home.module.css';

type Project = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type AllProjectsQueryResult = {
  all_Projects: Project[];
};

const AllProjects = gql`
  query AllProjects {
    all_Projects {
      id
      title
      description
      image {
        url
      }
    }
  }
`;

export default async function Home() {
  const { all_Projects }: AllProjectsQueryResult = await client.request(
    AllProjects
  );

  const firstThreeProjects = all_Projects.slice(0, 3);

  return (
    <div className={styles.grid}>
      {firstThreeProjects.map((project: Project, projectIndex: number) => {
        return (
          <div key={projectIndex} className={styles.project}>
            <h1>{project.title}</h1>
            <img src={project.image.url} alt={project.title} />
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  );
}
