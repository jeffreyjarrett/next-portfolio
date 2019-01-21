// jshint esversion: 6

import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout title="Home">
    <Link href="/about">
      <a>Go to about</a>
      </Link>
      <p>Welcome to the Home Page</p>
  </Layout>
);

export default Index;
