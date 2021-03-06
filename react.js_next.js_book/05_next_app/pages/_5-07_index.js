import { Header } from './header';
import Link from 'next/link';

export default function Home() {
  let title = 'Index';

  return (
    <>
      <div>
        <Header title={title} />
        <h1 className="bg-primary px-3 text-white display-4">React</h1>
        <div className="container">
          <h3 className="my-3 text-primary text-center">{title}</h3>
          <div className="card p-3 text-center">
            <p>これは、ページ移動のサンプルです。</p>
            <Link href="/other">
              <a>Go to Other page &gt;&gt;</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
