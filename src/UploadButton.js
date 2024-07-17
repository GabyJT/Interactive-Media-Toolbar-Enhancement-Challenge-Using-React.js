// src/components/UploadButton.js
import React from 'react';

const UploadButton = ({ onUpload }) => {
  const handleUpload = () => {
    onUpload();
    alert('Uploading image...');
  };

  return <button onClick={handleUpload}>Upload Image</button>;
};

export default UploadButton;
