import React, { useState } from "react";
import SidebarOption from "./SidebarOption";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LabelIcon from "@material-ui/icons/Label";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PeopleIcon from "@material-ui/icons/People";
import InfoIcon from "@material-ui/icons/Info";
import ForumIcon from "@material-ui/icons/Forum";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ChatIcon from "@material-ui/icons/Chat";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MailIcon from "@material-ui/icons/Mail";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";

import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const [showCategory, setShowCategory] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const dispatch = useDispatch();

  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const openMessage = () => dispatch(openSendMessage());
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__botton">
          <button onClick={openMessage}>
            <AddIcon />
            Compose
          </button>
        </div>
      </div>

      <div className="sidebar__middle">
        {/* 
            if you passed toggable as true
            you must pass toggleIcons, toggleFunction, showCategoryState values.
          */}
        <SidebarOption
          Icon={InboxIcon}
          title="Inbox"
          number={10}
          active={true}
        />
        <SidebarOption Icon={StarIcon} title="Starred" />
        <SidebarOption Icon={QueryBuilderIcon} title="Snoozed" number={10} />
        <SidebarOption Icon={LabelImportantIcon} title="Important" />
        <SidebarOption Icon={SendIcon} title="Sent" />
        <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" />
        <SidebarOption
          Icon={LabelIcon}
          title="Categories"
          toggable={true}
          toggleIcons={{
            true: ArrowDropDownIcon,
            false: ArrowRightIcon,
          }}
          toggleFunction={toggleCategory}
          showCategoryState={showCategory}
        />

        {showCategory && (
          <div className="sidebar__subCategories">
            <SidebarOption Icon={PeopleIcon} title="Social" number={20} />
            <SidebarOption Icon={InfoIcon} title="Updates" number={34} />
            <SidebarOption Icon={ForumIcon} title="Forums" />
            <SidebarOption
              Icon={LocalOfferIcon}
              title="Promotions"
              number={360}
            />
          </div>
        )}
        <SidebarOption Icon={LabelIcon} title="Unwanted" />
        <SidebarOption
          Icon={showMore ? ExpandLessIcon : ExpandMoreIcon}
          title="More"
          toggable={true}
          toggleFunction={toggleShowMore}
          showCategoryState={showMore}
        />
        {showMore && (
          <div>
            <SidebarOption Icon={ChatIcon} title="Chats" />
            <SidebarOption Icon={ScheduleIcon} title="Scheduled" />
            <SidebarOption Icon={MailIcon} title="All Mail" />
            <SidebarOption Icon={ReportIcon} title="Spam" />
            <SidebarOption Icon={DeleteIcon} title="Trash" />
            <SidebarOption Icon={SettingsIcon} title="Manage labels" />
            <SidebarOption Icon={AddIcon} title="Create new label" />
          </div>
        )}
      </div>

      <div className="sidebar__bottom">
        <div className="meet">
          <h3>Meet</h3>
          <SidebarOption Icon={VideocamIcon} title="New meeting" />
          <SidebarOption Icon={KeyboardIcon} title="Join a meeting" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
