import React from "react";

const PostImage = ({ image }: { image: string }) => {
  return (
    <figure className="h-[80vh] mt-2">
      <img src={image} height="100%" width="100%" />
    </figure>
  );
};

export default PostImage;
