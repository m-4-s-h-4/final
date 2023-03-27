import { gql } from 'graphql-request';
import { client } from '../../lib/client';

type ProjectParam = {
  params: { projectId: string };
}

interface ProjectsDetails {
  title: string;
  description: string;
  image: {
    url: string;
  }
}

const GET_PROJECT_DETAILS = gql`
  query allProjects($projectId: ID!) {
    allProjects(where: { id: $projectId }) {
      title
      description
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
    <div>
      <div>
        <h1>{allProjects.title}</h1>
        <p>{allProjects.description}</p>
        <img src={allProjects.image.url} alt={allProjects.title} style={{ height: '400px', objectFit: 'cover' }} />
      </div>
    </div>
  );
}

export default page;
