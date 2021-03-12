import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map(
          ({ displayName, username, verified, text, avatar, image }, index) => (
            <Post
              key={index}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              avatar={avatar}
              image={image}
            />
          )
        )}
        <Post
          displayName="Guy Incognito"
          username="guy_incognito"
          verified
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus in reiciendis beatae aspernatur tempore. Saepe praesentium culpa omnis tempore."
          avatar="https://wersm.com/wp-content/uploads/2017/04/wersm-twitter-egg-broken.jpg"
          image="https://i.pinimg.com/originals/48/a0/37/48a037b61ac1dbd4bd2bf90f8e99613d.gif"
        />
      </FlipMove>
    </div>
  );
};

export default Feed;
