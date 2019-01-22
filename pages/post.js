// jshint esversion: 6

import Layout from '../components/Layout';

const Post = ({ url }) => (
  <Layout title={url.query.title}>
    <p>
    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </p>
</Layout>
)

export default Post;
