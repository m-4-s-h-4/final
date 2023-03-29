import { gql } from 'graphql-request';
import { client } from './lib/client';
import Link from 'next/link';
import styles from './styles/Home.module.css';
import {Dots} from './Dots'

type Project = {
  id: string;
  title: string;
  description: string;
  skills: string;
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
      skills
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
    <div className="title">
    <Dots/>
    <h1>My portfolio.</h1>
    <div className={styles.grid}>
      {firstThreeProjects.map((project: Project, projectIndex: number) => {
        return (
          <div key={projectIndex} className={styles.project}>
            <Link href={`/projects/${project.id}`}>
              <div><h1>{project.title}</h1></div>
            </Link>
            <img src={project.image.url} alt={project.title} />
          </div>
        );
      })}
    </div>
    </div>
  );
}
