"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [image, setImage] = useState(null);

  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImage(e) {
    const file = e.target.files[0];

    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImage}
            required
          />
          <button
            onClick={() => handlePickClick()}
            className={classes.button}
            type="button"
          >
            Pick an image
          </button>
          <div className={classes.preview}>
            {!image ? (
              <p>No image picked yet.</p>
            ) : (
              <Image src={image} alt="selected by user" fill />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
