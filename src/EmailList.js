import React, { useEffect, useState } from "react";
import "./EmailList.css";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [selectAll, setSelectAll] = useState(false);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  const bodyHeaderIcon = (Icon, title, color, active = false) => {
    return (
      <div
        className={`bodyHeaderIcon ${active && "active"}`}
        style={{ color: `${color}`, borderBottom: `2px solid ${color}` }}
      >
        <Icon className="bodyHeaderIcon__icon" />
        <p>{title}</p>
        <div className="line"></div>
      </div>
    );
  };

  return (
    <div className="emailList">
      <div className="emailList__header">
        <div className="icons">
          <div onClick={() => setSelectAll(!selectAll)}>
            {selectAll ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
          </div>
          <RefreshIcon />
          <MoreVertIcon />
        </div>
      </div>

      <div className="emailList__body">
        <div className="body__header">
          {bodyHeaderIcon(InboxIcon, "Primary", "red", true)}
          {bodyHeaderIcon(PeopleIcon, "Scoial", "blue")}
          {bodyHeaderIcon(LocalOfferIcon, "Promotions", "green")}
        </div>

        <div className="body__emailRows">
          {emails.map((email) => {
            const {
              id,
              data: { to, subject, message, timestamp },
            } = email;
            return (
              <EmailRow
                key={id}
                id={id}
                name={to}
                subject={subject}
                message={message}
                timestamp={new Date(timestamp?.seconds * 1000).toUTCString()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EmailList;
