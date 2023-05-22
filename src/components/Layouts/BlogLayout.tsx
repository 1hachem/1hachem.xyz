import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  meta: { author: string; title: string; description: string };
}

const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
      </Head>
      <div className="w-[90%] mx-auto p-2 select-text">
        <h1 className="text-5xl py-4">{meta.title}</h1>
        {meta.description ? (
          <h2 className="text-3xl">
            {meta.description}
            <br />
          </h2>
        ) : null}

        {meta.author ? <p className="text-md">by {meta.author}</p> : null}
        <br />
        <br />
        {children}
        <br />
      </div>
    </>
  );
};

export default Layout;
