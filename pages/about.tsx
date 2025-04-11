import Layout from '../components/layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <section className="p-8">
        <h1>About Me</h1>
        <p>Describe your background and expertise.</p>
        <Link href="/" className="text-blue-500">
          Back to Home
        </Link>
      </section>
    </Layout>
  );
}
