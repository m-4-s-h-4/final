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

  console.log(all_Projects);

  return (
    <div>
      {all_Projects.map((project: Project, projectIndex: number) => {
        return (
          <div key={projectIndex}>
            <h1 className="text-3xl font-bold">{project.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
