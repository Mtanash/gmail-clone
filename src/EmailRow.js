import React from "react";
import "./EmailRow.css";
import { IconButton, Checkbox } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedMail } from "./features/mailSlice";

function EmailRow({ id, name, subject, message, timestamp }) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div
      className="emailRow"
      onClick={() => {
        history.push("./mail");
        dispatch(
          setSelectedMail({
            id,
            name,
            subject,
            message,
            timestamp,
          })
        );
      }}
    >
      <div className="emailRow__icons">
        <IconButton>
          <Checkbox />
        </IconButton>
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="emaiRow__title">
        <p>{name}</p>
      </div>
      <div className="emailRow__subject">
        <p>{subject.slice(0, 60) + "..."}</p>
      </div>
    </div>
  );
}

export default EmailRow;
