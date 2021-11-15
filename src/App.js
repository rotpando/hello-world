import { useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch} from "react-redux"
import Card from "./commons/Card";
import NavbarContainer from "./components/NavbarContainer";
import Grid from "./components/Grid";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./commons/Home";
import Cart from "./components/Cart";
import SingleCourse from "./components/SingleCourse";
import Me from "./components/Me";
import Footer from "./commons/Footer";
import { useEffect } from "react";
import { meRequest } from "./state/user";
import { useDispatch } from "react-redux";
import Checkout from "./commons/Checkout";
import Admin from "./components/Admin"
import AdminCourses from "./components/AdminCourses";
import AdminCoursesAdd from "./components/AdminCoursesAdd";
import AdminCoursesEdit from "./components/AdminCoursesEdit";


function App() {
const dispatch=useDispatch()  

  
useEffect(()=>  {
dispatch(meRequest())

},[])


  return (
    <div>
      <NavbarContainer />
      <Routes>
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/course/:courseId" element={<SingleCourse />} />
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/search" element={<Grid />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/favourites" element={<Grid />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/me" element={<Me />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/admin/courses" element={<AdminCourses />} />
        <Route exact path="/admin/courses/add" element={<AdminCoursesAdd />} />
        <Route exact path="/admin/courses/edit" element={<AdminCoursesEdit />} />
      </Routes>
      <Footer />

    </div>
  );
}
export default App;
