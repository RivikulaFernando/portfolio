import Link from 'next/link';
import Layout from "../components/layout";


export default function Home() {
  return (
    <Layout>
      <section className="p-8">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p>Showcase your skills and projects here.</p>
        <Link href="/about" className="text-blue-500">
          Learn more about me
        </Link>
      </section>
    </Layout>
  );
}
