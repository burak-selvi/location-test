import React, { useEffect, useState } from "react";

const MyCamera = ({ setDataUri }) => {
  useEffect(() => {
    getCamera();
  }, []);

  const getCamera = () => {
    navigator.getUserMedia = navigator.getUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ video: true }, streamWebCam, throwError);
    }
  };

  const streamWebCam = (stream) => {
    setDataUri(window.URL.createObjectURL(stream));
  };

  const throwError = (e) => {
    alert(e.name);
  };

  const snap = () => {};

  return <div></div>;
};

export default MyCamera;
