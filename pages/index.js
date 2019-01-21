// jshint esversion: 6

import Link from "next/link";

import Layout from "../components/Layout";

const Index = () => (
  <div>
    <h1>Home</h1>
    <Link href="/about">
      <a>Go to about</a>
      </Link>
      <p>Welcome to the Home Page</p>
  </div>
);

export default Index;
