import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';
export const Layout = (props) => {
  const { title, header, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Header header={header} />
      <div className="container">
        <h3 className="my-3 text-primary text-center">{title}</h3>
        {children}
      </div>
      <Footer footer="copyright hoge" />
    </>
  );
};
