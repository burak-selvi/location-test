import React from "react";

const MyImgPreview = ({ videoUrl }) => {
  return (
    <div>
      <video src={videoUrl}></video>
    </div>
  );
};

export default MyImgPreview;
