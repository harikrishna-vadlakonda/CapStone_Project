import React    from "react";
import template from "./TextComp.jsx";

class TextComp extends React.Component {
  render() {
    return template.call(this);
  }
}

export default TextComp;
