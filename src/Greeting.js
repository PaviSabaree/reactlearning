import React from "react";
import UserGreeting from "./Usergreeting";
import GuestGreeting from "./Guestgreeting";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  export default Greeting;