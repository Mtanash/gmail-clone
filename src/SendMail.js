import React, { useState } from "react";
import "./SendMail.css";
import MinimizeIcon from "@material-ui/icons/Minimize";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import CloseIcon from "@material-ui/icons/Close";
import MaximizeIcon from "@material-ui/icons/Maximize";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSendMessage,
  selectMaximize,
  selectMinimize,
  toggleMaximize,
  toggleMinimize,
} from "./features/mailSlice";
import { useForm } from "react-hook-form";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
  const dispatch = useDispatch();
  const minimize = useSelector(selectMinimize);
  const maximize = useSelector(selectMaximize);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    db.collection("emails")
      .add({
        ...formData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch((error) => console.log(error));
    dispatch(closeSendMessage());
  };

  return (
    <div
      className={`sendMail ${minimize && "minimized"} ${
        maximize && "maximized"
      }`}
    >
      <div></div>
      <div className="sendMail__header">
        <div
          className="sendMail__headerTitle"
          onClick={() => dispatch(toggleMinimize())}
        >
          <h4>New Message</h4>
        </div>
        <div className="sendMail__headerIcons">
          <button title="Minimize" onClick={() => dispatch(toggleMinimize())}>
            {!minimize ? <MinimizeIcon /> : <MaximizeIcon />}
          </button>
          <button
            title="Full screen"
            onClick={() => {
              dispatch(toggleMaximize());
            }}
          >
            {maximize ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </button>
          <button
            title="Save &#38; close"
            onClick={() => dispatch(closeSendMessage())}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
      <div className="sendMail__body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              className="toInput"
              placeholder="Recipients"
              {...register("to", { required: true })}
            />
            {errors.to && (
              <p className="sendMail__error">
                Please specify at least on recipient.
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              className="subjectInput"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <p className="sendMail__error">Please enter a subject.</p>
            )}
          </div>
          <textarea
            className="messageInput"
            {...register("message", { required: true })}
          ></textarea>
          <button type="submit" className="mailSendBtn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendMail;
