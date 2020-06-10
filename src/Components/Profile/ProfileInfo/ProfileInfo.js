import React from "react";
import ProfileInfoStyles from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

  return (
    <div>
      <div className={ProfileInfoStyles.pageImage}>
        <img src="https://placekitten.com/800/200" />
      </div>
      <div className={ProfileInfoStyles.descriptionBlock}>
          <img  src={props.profile.photos.large} />
        <div>ava + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;