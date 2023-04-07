import { InferGetStaticPropsType } from 'next';

import Container from '@/ui/Container';
import { projects } from '@/lib/projects';
import ProjectLink from '@/ui/ProjectLink';

export default function ProjectsPage({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="space-y-6 font-mono">
        <div className="space-y-8">
          <div className="mt-12 max-w-screen-md space-y-4 prose">
            <h1>Projects</h1>
            <h4>
              Things I've made over the years while trying to learn programming.
            </h4>
          </div>

          <div className="flex-col space-y-2">
            {projects.map((project) => (
              <ProjectLink key={project.id} {...project} />
            ))}
            {!projects.length && <div>No Project found.</div>}
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  return { props: { projects } };
}
