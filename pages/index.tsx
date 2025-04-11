import Link from 'next/link';
import Layout from "../components/layout";


export default function Home() {
  return (
    <Layout>
    {/* Hero Section - Full Height */}
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">Full-stack Developer & Designer</p>
        <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition">
          Get in Touch
        </Link>
      </div>
    </section>
    
    {/* About Section - Full Height */}
    <section className="min-h-screen flex items-center p-8" id="about">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus lacinia odio vitae vestibulum vestibulum.
            </p>
            <p>
              Fusce fringilla tincidunt laoreet. Vestibulum ante ipsum primis in 
              faucibus orci luctus et ultrices posuere cubilia.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Replace with your image */}
            <div className="w-64 h-64 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
    
   {/* Skills Section - Full Height with white background */}
   {/* Skills Section - Full Height with semi-transparent background */}
{/* Skills Section - Full Height with transitioning background */}
<section 
  className="min-h-screen flex items-center p-8 relative" 
  id="skills"
>
  {/* Semi-transparent overlay with transition */}
  <div className="absolute inset-0 bg-white z-0 transition-opacity duration-1000 ease-in-out" 
       style={{ opacity: '0.70' }}></div>
  
  <div className="container mx-auto relative z-10">
    <h2 className="text-3xl font-bold mb-8 text-black transition-colors duration-1000 ease-in-out">My Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Skill cards */}
      {['React', 'TypeScript', 'Node.js', 'Python', 'UI/UX Design', 'Database Management'].map((skill) => (
        <div key={skill} className="bg-gray-800 p-6 rounded-lg text-white transition-transform duration-500 ease-in-out hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">{skill}</h3>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-in-out" 
                 style={{ width: `${Math.floor(Math.random() * 50) + 50}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  </Layout>
  );
}
