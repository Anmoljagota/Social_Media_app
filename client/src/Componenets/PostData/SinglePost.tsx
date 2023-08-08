import React from "react";
import PostProfile from "./PostProfile";
import PostImage from "./PostImage";
import Like_Comments from "./Like_Comments";
import { postdataobject } from "../../Types/Types";
import Content from "./Content";
const SinglePost = ({ data }: { data: postdataobject }) => {
  return (
    <>
      <section className="min-h-screen bg-white"       style={{
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
         
      }}>
        <PostProfile name={data.name} />
        <Content description={data.description} />
        <PostImage image={data.image} />
        <Like_Comments />
      </section>
      <br />
    </>
  );
};

export default SinglePost;
