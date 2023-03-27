import { gql } from 'graphql-request';
import { client } from '../../lib/client';

type ProjectParam = {
  params: { projectId: string };
}

interface ProjectsDetails {
  title: string;
  description: string;
}

const GET_PROJECT_DETAILS = gql`
  query allProjects($projectId: ID!) {
    allProjects(where: { id: $projectId }) {
      title
      description
    }
  }
`;

async function page({ params: { projectId } }: ProjectParam) {
  const { allProjects } = await client.request<{ allProjects: ProjectsDetails }>(
    GET_PROJECT_DETAILS,
    { projectId }
  );

  return (
    <div>
      <div>
        <h1>{allProjects.title}</h1>
        <p>{allProjects.description}</p>
      </div>
    </div>
  );
}

export default page;
