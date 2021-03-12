import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <a href="/">
        <TwitterIcon className="sidebar__twitterIcon" />
      </a>
      <SidebarOption active text="ホーム" Icon={HomeIcon} />
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      <SidebarOption text="もっと見る" Icon={MoreHorizIcon} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        ツイートする
      </Button>
    </div>
  );
};

export default Sidebar;
