import React from "react";
import ProfileInfoStyles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={ProfileInfoStyles.pageImage}>
        <img src="https://placekitten.com/800/200" />
      </div>
      <div className={ProfileInfoStyles.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;