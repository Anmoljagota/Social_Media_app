import React from "react";
import PostProfile from "./PostProfile";
import SinglePost from "./SinglePost";
import { GET_POST_DATA } from "../redux/SiteDta/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { intial_data } from "../Types/Types";
interface register_data {}
interface detail {
  postData: intial_data;
  register_data: register_data;
}
const Posts = () => {
  const dispatch = useDispatch();
  const { postdata } = useSelector((details: detail) => {
    return details.postData;
  }, shallowEqual);
  console.log("ia m data", postdata);
  React.useEffect(() => {
    dispatch(GET_POST_DATA());
  }, []);

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
      className="w-[44%] h-[auto] cursor-pointer"
    >
      {postdata.map((items) => (
        <SinglePost data={items} key={items.postId} />
      ))}
    </div>
  );
};

export default Posts;
