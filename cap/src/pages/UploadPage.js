import React, { useState } from 'react';
import './styles.css';

const UploadPage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload</h1>
      <div className="upload-box">
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <p>No image uploaded</p>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        id="upload-input"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
      <label htmlFor="upload-input" className="button">
        Click to Upload image
      </label>
      <p>Upload to Generate AI ORC</p>
    </div>
  );
};

export default UploadPage;
