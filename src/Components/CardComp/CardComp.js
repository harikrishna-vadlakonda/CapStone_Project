import React    from "react";
import template from "./CardComp.jsx";

class CardComp extends React.Component {
  render() {
    return template.call(this);
  }
}

export default CardComp;
