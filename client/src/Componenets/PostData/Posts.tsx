import React, { useState } from "react";
import PostProfile from "./PostProfile";
import SinglePost from "./SinglePost";
import { GET_POST_DATA } from "../../redux/SiteDta/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { intial_data } from "../../Types/Types";
import CustomizedDialogs from "../Modal";

interface register_data {}
interface detail {
  postData: intial_data;
  register_data: register_data;
}
const Posts = () => {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const { postdata } = useSelector((details: detail) => {
    return details.postData;
  }, shallowEqual);

  React.useEffect(() => {
    dispatch(GET_POST_DATA());
    
  }, [change]);
 
  return (
    <div className="w-[44%] h-[auto] cursor-pointer">
      <CustomizedDialogs setChange={setChange} change={change} />
      {postdata.map((items) => (
        <SinglePost data={items} key={items.postId} />
      ))}
    </div>
  );
};

export default Posts;
