import React from 'react';
import Layout from '../components/layout';
import Image from 'next/image';
// If you're importing icons but not using them, either remove the imports or add ESLint disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <Layout>
     {/* Hero Section */}
     <section className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-16">
        <div className="overflow-hidden rounded-[40px] w-[300px] h-[300px]">
          <Image
            src="/guitar.png" // Make sure this image is in the public folder
            alt="Rivikula playing guitar"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-left max-w-md">
          <h1 className="text-2xl font-bold mb-2">HEY I&apos;M <span className="text-white">RIVIKULA...</span></h1>
          <p className="text-gray-400 text-sm mb-4">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
          </p>
          
        </div>
      </section>
    </Layout>
  );
}