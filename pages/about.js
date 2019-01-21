// jshint esversion: 6

import Link from 'next/link';
import Layout from '../components/Layout';

export default() => (
  <Layout title="About">
    <Link href="/index">
    <a>Go to home</a>
    </Link>
    <p>A JavaScript Programmer</p>
    <img src="/static/js-logo.png" alt="JavaScript" height="200px"/>
  </Layout>
);
