import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <img
          src={location.state.poster}
          alt={location.state.title}
          className="movie__detail-poster"
        ></img>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
