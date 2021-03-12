import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://wersm.com/wp-content/uploads/2017/04/wersm-twitter-egg-broken.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Guy Incognito{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @guy_incognito
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              blanditiis, beatae molestiae necessitatibus laudantium provident
              id esse enim. Non, perspiciatis.
            </p>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/originals/48/a0/37/48a037b61ac1dbd4bd2bf90f8e99613d.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
