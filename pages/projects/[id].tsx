import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Link from 'next/link';

// Mock project data - in a real app, you might fetch this from an API
const projectData = {
  '1': { title: 'Project 1', description: 'Detailed description for Project 1', technologies: ['React', 'TypeScript'] },
  '2': { title: 'Project 2', description: 'Detailed description for Project 2', technologies: ['Next.js', 'TailwindCSS'] },
};

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  
  // Handle loading state
  if (router.isFallback || !id) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  
  // Get project data
  const project = projectData[id as keyof typeof projectData];
  
  // Handle project not found
  if (!project) {
    return (
      <Layout>
        <div>Project not found</div>
        <Link href="/projects" className="text-blue-500">
          Back to Projects
        </Link>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-4">{project.description}</p>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Technologies</h2>
          <ul className="list-disc pl-5">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        
        <Link href="/projects" className="text-blue-500">
          Back to Projects
        </Link>
      </section>
    </Layout>
  );
}