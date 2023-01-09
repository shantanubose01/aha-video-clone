import React from "react";
import ImageSlider from "./ImageSlider";
import './slider.css';

export default function Slider() {
  // const slides=[
  // { url: "http://localhost:3001/Images/img1.jpg", title: "image1" },
  // { url: "http://localhost:3001/Images/img2.jpg", title: "image2" },
  // { url: "http://localhost:3001/Images/img3.jpg", title: "image3" },
  // { url: "http://localhost:3001/Images/img4.jpg", title: "image4" },
  // { url: "http://localhost:3001/Images/img5.jpg", title: "image5" },]

  const slides = [
    { url: "Images/img1.jpg", title: "image1" },
    { url: "Images/img2.jpg", title: "image2" },
    { url: "Images/img3.jpg", title: "image3" },
    { url: "Images/img4.jpg", title: "image4" },
    { url: "Images/img5.jpg", title: "image5" },
  ];

  const containerStyles = {
    width: "100%",
    height: "450px",
    margin: "0 auto",
    marginTop:"50px"
  };

  return (
    <div>
      <div style={containerStyles} className="slider-wrapper">
        <ImageSlider slides={slides} parentWidth={1550} />
      </div>
    </div>
  );
}
