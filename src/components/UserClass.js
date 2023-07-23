import React from "react";

class UserClass extends React.Component{

    constructor(props){
  
        super(props);
        // console.log(props);
        this.state = {
            userInfo: {
               name: "Dummy",
               location:"Default",
             
            },
        };
        console.log(this.props.name + " child constructor");
    }
   async componentDidMount() {
        console.log(this.props.name +"Child Component Did Mount");
        //Api call

        const data = await fetch("https://api.github.com/users/asudigital");
        const json = await data.json();
       
        this.setState({
           userInfo: json, 
        });
        console.log(json);
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render() {
        console.log(this.props.name +"child render");
        const { name , location , avatar_url } = this.state.userInfo;

        return (
      <div className="user-card">
        <img src= {avatar_url}/>
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
      <h4>Contact:@asudigital</h4>
    </div>

        )
    };
};

export default UserClass;