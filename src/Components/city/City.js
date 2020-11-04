import React    from "react";
import template from "./City.jsx";

class City extends React.Component {
  render() {
    return template.call(this);
  }
}

export default City;
