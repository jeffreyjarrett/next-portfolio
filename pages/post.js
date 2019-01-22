// jshint esversion: 6

import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{width: "80vw"}}>
    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </p>
</Layout>
);

export default withRouter(Post);
