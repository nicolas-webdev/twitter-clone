import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    if (tweetMessage === "") {
      alert("ツイート内容をに入力して下さい");
      return;
    }
    db.collection("posts").add({
      displayName: "Guy Incognito",
      username: "guy_incognito",
      verified: true,
      timestamp: new Date(),
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://wersm.com/wp-content/uploads/2017/04/wersm-twitter-egg-broken.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://wersm.com/wp-content/uploads/2017/04/wersm-twitter-egg-broken.jpg" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="いまどうしてる？"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="画像URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
