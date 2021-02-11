import React, { Component } from "react";
import img1 from "../Assets/Images/test/2.webp";
import img2 from "../Assets/Images/test/3.webp";
import img3 from "../Assets/Images/test/4.webp";
import img4 from "../Assets/Images/test/5.webp";
import img5 from "../Assets/Images/test/6.webp";
import img6 from "../Assets/Images/test/7.webp";
import img7 from "../Assets/Images/test/8.webp";
import img8 from "../Assets/Images/test/9.webp";
import img9 from "../Assets/Images/test/10.webp";
import img10 from "../Assets/Images/test/11.webp";
import img11 from "../Assets/Images/test/12.webp";
import img12 from "../Assets/Images/test/13.webp";
import img13 from "../Assets/Images/test/14.webp";
import img14 from "../Assets/Images/test/15.webp";
import img15 from "../Assets/Images/test/16.webp";
import img16 from "../Assets/Images/test/17.webp";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      currentImage: img1,
      allImages: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
      ],
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          currentImage: this.state.allImages[this.state.i],
          i: this.state.i + 1,
        }),
      5000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="pageDefault home">
        <img src={this.state.currentImage} />
      </div>
    );
  }
}