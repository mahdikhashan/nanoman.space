import { InferGetStaticPropsType } from 'next';

import Container from '@/ui/Container';
import { Project, projects } from '@/lib/projects';
import ProjectLink from '@/ui/ProjectLink';

const prettyProjects = projects
  .map(function (project) {
    return {
      ['type']: project.type,
      ['projects']: projects.filter((p) => p.type == project.type)
    };
  })
  .reduce((acc, current) => {
    const x = acc.find((item) => item.type === current.type);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

export default function ProjectsPage({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="space-y-6 font-mono">
        <div className="space-y-8">
          <div className="mt-12 max-w-screen-md space-y-4 prose">
            <h1 className="dark:text-white">Projects</h1>
            <p className="dark:text-white">
              Things I've made over the years while trying to learn programming.
            </p>
          </div>

          <div className="flex-col space-y-2">
            {prettyProjects.map(({ type, projects }: { type: string, projects: Project[] }, i) => (
              <div key={i} className="flex flex-col gap-3 mt-6">
                <h3 className="text-lg font-bold text-gray-500 mt-3">{type}</h3>
                {projects.map((project, i) => (
                  <ProjectLink key={i} {...project} />
                ))}
              </div>
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
