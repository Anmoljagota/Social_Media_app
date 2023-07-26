import React from "react";
import PostProfile from "./PostProfile";
import PostImage from "./PostImage";
import Like_Comments from "./Like_Comments";
import { postdataobject } from "../Types/Types";
import Content from "./Content";
const SinglePost = ({ data }: { data: postdataobject }) => {
  console.log(data, "kk");
  return (
    <>
      <section className="min-h-screen bg-white">
        <PostProfile name={data.name} />
        <Content description={data.description}/>
        <PostImage image={data.image} />
        <Like_Comments />
      </section>
      <br />
    </>
  );
};

export default SinglePost;
