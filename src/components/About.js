import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {(data) => console.log(data)}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name={"Karthik Babu (classs)"}
          location={"Bangalore Class"}
        />
      </div>
    );
  }
}

/*
- Parent Constructor
- Parent render

    - First Constructor
    - First Render

    - Second Constructor
    - Second Render

  <DOM Updated - IN Single Batch>

    - First ComponentDidMount
    - Second ComponentDidMount

- Parent ComponentDidMount


*/

export default About;
