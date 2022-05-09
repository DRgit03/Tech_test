import React from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PostList from "./components/PostList";
import UserEdit from "./components/UserEdit";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <div className="ui container">

      <Router>
     
      <Navbar/>
      <Routes>
        <Route path="/" exact element={ <UserEdit/>}/>
        <Route path ="/PostList" exact element ={<PostList />}/>
      </Routes>
     
    
    </Router>
    </div>
  );
}
