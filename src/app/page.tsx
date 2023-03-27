import { gql } from 'graphql-request';
import { client } from './lib/client';

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

  return (
    <div>
      {all_Projects.map((project: Project, projectIndex: number) => {
        return (
          <div key={projectIndex}>
            <h1>{project.title}</h1>
            <img src={project.image.url} alt={project.title} />
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  );
}
