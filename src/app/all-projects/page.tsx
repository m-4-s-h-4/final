import { gql } from 'graphql-request';
import { client } from '../../lib/client';
import styles from './Projects.module.css';
import Link from 'next/link';

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

export default async function Project() {
  const { all_Projects }: AllProjectsQueryResult = await client.request(
    AllProjects
  );

  return (
    <div className={styles.projectList}>
      {all_Projects.map((project: Project, projectIndex: number) => {
        return (
          <div key={projectIndex} className={styles.project}>
            <Link href={`/projects/${project.id}`}>
              <div>
                <h1>{project.title}</h1>
              </div>
            </Link>
            <img src={project.image.url} alt={project.title} />
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  );
}