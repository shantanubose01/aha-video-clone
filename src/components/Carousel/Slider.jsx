import React from 'react'
import ImageSlider from "./ImageSlider";

export default function Slider() {
  const slides=[   
  { url: "http://localhost:3001/Images/img1.jpg", title: "image1" },
  { url: "http://localhost:3001/Images/img2.jpg", title: "image2" },
  { url: "http://localhost:3001/Images/img3.jpg", title: "image3" },
  { url: "http://localhost:3001/Images/img4.jpg", title: "image4" },
  { url: "http://localhost:3001/Images/img5.jpg", title: "image5" },]

  const containerStyles = {
    width: "100%",
    height: "450px",
    margin: "0 auto",
  };

  return(
    <div>
    <div style={containerStyles}>
      <ImageSlider slides={slides} parentWidth={1400} />
    </div>
  </div>
  )
}
