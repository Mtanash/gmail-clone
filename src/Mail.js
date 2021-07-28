import React from "react";
import "./Mail.css";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import LabelIcon from "@material-ui/icons/Label";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSelectedMail } from "./features/mailSlice";

function Mail() {
  const history = useHistory();
  const email = useSelector(selectSelectedMail);
  return (
    <div className="mail">
      <div className="mail__header">
        <div className="mail__header__icons">
          <div>
            <IconButton size="small" onClick={() => history.push("/")}>
              <ArrowBackIcon />
            </IconButton>
          </div>

          <div>
            <IconButton size="small">
              <ArchiveIcon />
            </IconButton>

            <IconButton size="small">
              <ReportIcon />
            </IconButton>

            <IconButton size="small">
              <DeleteIcon />
            </IconButton>
          </div>

          <div>
            <IconButton size="small">
              <MarkunreadIcon />
            </IconButton>

            <IconButton size="small">
              <ScheduleIcon />
            </IconButton>

            <IconButton size="small">
              <AddBoxIcon />
            </IconButton>
          </div>

          <div>
            <IconButton size="small">
              <FileCopyIcon />
            </IconButton>

            <IconButton size="small">
              <LabelIcon />
            </IconButton>

            <IconButton size="small">
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__body__subject">
          <h3>{email?.subject}</h3>
        </div>
        <div className="mail__body__header">
          <Avatar />
          <div className="info">
            <h4>{email?.name}</h4>
            <p>&lt;email@email.com&gt;</p>
          </div>
        </div>

        <div className="mail__body__content">
          <p>{email?.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
