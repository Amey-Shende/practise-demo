import React, { createContext } from "react";
import './App.css';
import EventComponent from "./components/EventComponent ";
import Register from "./components/Register";

export const UserContext = createContext(null);
function App() {
  // This is comment form github
  return (
    <div>
      {/* <EventComponent /> */}

      <UserContext value={{ username: "John Doe", age: 25 }}>
        <Register />
      </UserContext>
    </div>
  )
};

export default App;


