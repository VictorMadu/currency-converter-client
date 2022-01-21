import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head />
      <body className="font-sans text-neutral-900/70 bg-neutral-200">
        <Main />
        <div id="modal-root"></div>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
