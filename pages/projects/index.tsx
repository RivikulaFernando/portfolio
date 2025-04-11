import Link from 'next/link';
import Layout from '../../components/layout';

const projects = [
  { id: '1', title: 'Project 1', description: 'Description for Project 1' },
  { id: '2', title: 'Project 2', description: 'Description for Project 2' },
];

export default function Projects() {
  return (
    <Layout>
      <section className="p-8">
        <h1>My Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Link href={`/projects/${project.id}`}>
                {project.title}
              </Link>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
