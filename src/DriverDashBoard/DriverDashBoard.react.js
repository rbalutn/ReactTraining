import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader.react";
import DashBoardGrid from "../DashBoardGrid/DashBoardGrid.react";
import DashboardLinks from "../DashboardLinks/DashboardLinks.react";

class DriverDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likecount: 1, dislikecount: 0, driverList: [{}] };
  }
  componentDidMount() {
    const url = "http://localhost:4040/drivers";
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ driverList: data }));
  }
  driverData = {
    driverName: "Ramesh",
    alttext: "Driver Logo",
    logo: "../Image/driver.png"
  };
  increment = () => {
    this.setState({ likecount: this.state.likecount + 1 });
  };
  dislike = () => {
    this.setState({ dislikecount: this.state.dislikecount + 1 });
  };
  render() {
    return (
      <div>
        <DashboardHeader data={this.driverData} />
        <DashBoardGrid handleChange={this.dislike} />
        <div>
          <div>{this.state.dislikecount} Dislikes</div>
        </div>
        <DashboardLinks />
        <div>
          <i className="fa fa-thumbs-up" onClick={this.increment}>
            Like
          </i>
          <div>{this.state.likecount} Likes</div>
        </div>
        <ul>
          {this.state.driverList.map(item => (
            <li>
              {item.id}
              <td />
              {item.name}
              {item.rating}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DriverDashBoard;
