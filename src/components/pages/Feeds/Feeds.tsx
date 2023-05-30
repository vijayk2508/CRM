import React, { useCallback, useEffect, useState } from "react";
import CardComponent from "../../common/CardComponent";

import { getPosts } from "../../../services/post";
import { IPost } from "../../../interfaces/IPost";

const progressStatus = {
  toLoad: "toLoad",
  loading: "loading",
  loaded: "loaded",
};

const Feeds: React.FC = () => {
  const [postArray, setPostArray] = useState([]);
  const [loading, setLoading] = useState(progressStatus.toLoad);
  const [resStatus, setResStatus] = useState({
    status: false,
    message: "",
  });

  const getAllPostFn = useCallback(async () => {
    setLoading(progressStatus.loading);

    const { status, data, message } = await getPosts();
    setPostArray(data);
    setLoading(progressStatus.loaded);

    if (!status) {
      setResStatus({ status, message });
    }
  }, []);

  useEffect(() => {
    getAllPostFn();
  }, [getAllPostFn]);

  console.log(postArray);

  return (
    <>
      {loading !== progressStatus.loaded ? (
        "Loading..."
      ) : (
        <div className="flex">
          {postArray.map((post: IPost) => (
            <CardComponent key={post._id} card={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default Feeds;
