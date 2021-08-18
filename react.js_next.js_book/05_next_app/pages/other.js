import { Layout } from '../components/Lauout';
import Link from 'next/link';
export default function Other() {
  return (
    <>
      <Layout header="Next.js" title="Other page">
        <div className="card p-4 text-center">
          <h5 className="mb-4">This is Other page ...</h5>
          <Link href="/">
            <button className="btn btn-primary">&lt;&lt; Back to Top</button>
          </Link>
        </div>
      </Layout>
    </>
  );
}
