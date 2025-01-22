import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    //API Calls
    const data = await fetch("https://api.github.com/users/karthikjohnbabu");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Unmount");
  }

  render() {
    console.log("Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2> Name: {name}</h2>
        <h3> Location: {location}</h3>
        <h4> Contact: @karthiknov22</h4>
      </div>
    );
  }
}

export default UserClass;

/*
* Mounting Life Cycle:
*   Constructor (dummy)
*   Render (dummy)
*   <html Dummy />
*   Component Did Mount 
*   <Api call>
*   <this.setState> -> State variable is updated
* Update Life Cycyle
*   Render (API Data)
*   <html loaded with new API data>
*   ComponentDid Update


*/
