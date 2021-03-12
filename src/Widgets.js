import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="キーワード検索" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>いまどうしてる？</h2>

        <TwitterTweetEmbed tweetId={"1100831364042162176"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 600 }}
        />

        <TwitterShareButton
          url={"https://npmahjong.com/"}
          options={{ text: "#npmahjong", via: "_xkime" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
