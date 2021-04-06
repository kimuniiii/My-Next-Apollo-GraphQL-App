import React from 'react';
import Document, { DocumentContext } from 'next/document';

import { DefaultLayout } from 'src/layouts/index';
class CommonDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return <DefaultLayout />;
  }
}

export default CommonDocument;
