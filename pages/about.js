// jshint esversion: 6

import Link from 'next/link';
import Layout from '../components/Layout';
import Fetch from "isomorphic-unfetch";
import { Component } from "react";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/jeffreyjarrett");
    const data = await res.json();

  return { user: data };
}

render() {
  const { user } = this.props;

  return (
    <Layout title="About">
      <p>{user.name}</p>
        <img
        src={user.avatar_url}
        alt="Jeff"
        height="200px"
        />

      </Layout>
    );
  }
}
