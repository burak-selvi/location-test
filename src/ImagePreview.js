import React from "react";

import "./imagePreview.css";

export const ImagePreview = ({
  dataUri,
  isFullscreen,
  setDataUri,
  handleSave,
}) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <img src={dataUri} alt="" />
      <div>
        <button onClick={() => setDataUri("")}>Tekrar Çek</button>
      </div>
      <div>
        <button onClick={handleSave}>Kaydet</button>
      </div>
    </div>
  );
};

export default ImagePreview;
