import React from "react";
import images from "./GalleryImages";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div>
      <div className={styles.addImages}>
        <h2>Gallery</h2>
        <button>
          Add Image <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className={styles.imageGridDiv}>
        <div className={styles.imagesGrid}>
          <div className={styles.column}>
            <img src={images[0]} alt="" />
          </div>
          <div className={styles.column}>
            <img src={images[1]} alt="" />
          </div>
          <div className={styles.column}>
            <img src={images[2]} alt="" />
          </div>
        </div>
        <div className={styles.imagesGrid}>
          <div className={styles.column}>
            <img src={images[3]} alt="" />
          </div>
          <div className={styles.column}>
            <img src={images[4]} alt="" />
          </div>
          <div className={styles.column}>
            <img src={images[5]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
