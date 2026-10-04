import "./styles/about_styles.css";
import React, { Component } from "react";


class About_Video extends Component {
  render() {
    return (
      <div>
        <video
          src="video/Avant-première.mp4"
          className="fullscreen-video"
          autoPlay
          muted
          loop
        ></video>
      </div>
    );
  }
}

export function About() {
  return (
    <div>
      <h1> About </h1>
      <About_Video />
    </div>
  );
}
