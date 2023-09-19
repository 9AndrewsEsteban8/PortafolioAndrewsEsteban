import React from "react";

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../images/Project_Sabuja.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("../images/Project_Pookemos.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("../images/Project_Lading.png"),
    altText: "",
    caption: "",
    header: "",
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
                <div className="carousel">
                  <UncontrolledCarousel items={items} />
                </div>
      </>
    );
  }
}

export default Carousel;
