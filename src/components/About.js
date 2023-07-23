import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
// import { Component } from "react";


class About extends React.Component{

    constructor(props){
        super(props);
        console.log(" parentconstructor");
    }

    componentDidMount() {
        console.log("Parent component Did mount");
    }
    render(){
        console.log(" parentrender");
        return(
            <div>
        <h1>About</h1>
        <h2>This is Namaste React WebSeries</h2>
        <UserContext.Consumer>
          {({user}) => <h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4> }  
        </UserContext.Consumer>
        
        <UserClass name={"Asutosh(class)"} location={"Bhubaneswar"}/>
        
           </div>
        );
    }
}

export default About; 