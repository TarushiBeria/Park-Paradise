import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './Footer';
import Navbar from './Navbarr';
import Home from './Pages/Home';
import Hotel_info from './Pages/Hotel_info';
import Our_projects from './Pages/Our_projects';
import Restaurant from './Pages/Restaurant';
import Stay from './Pages/Stay';
import Menu from './Pages/Menu';
import Add_room from './Pages/Add_room';
import Book_room from './Pages/Book_room';
import Free_room from './Pages/Free_room';
import Delete_room from './Pages/Delete_room';
import Edit_booking from './Pages/Edit_booking';
import Add_item from './Pages/Add_item';
import Add_menu from './Pages/Add_menu';
import Home_add_menu from './Pages/Home_add_menu';
import Join from './Join';
import Add from './Add';
import Reserve_table from './Pages/Reserve_table';
import Pick_up from './Pages/Pick_up';
import Home_delivery from './Pages/Home_delivery';
import Refresh from './Pages/Refresh';
import Event_celebration from './Pages/Event_celebration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route index element={<Home />} />
          <Route path="stay" element={<Stay />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="reserve_table" element={<Reserve_table />} />
          <Route path="pick_food" element={<Pick_up />} />
          <Route path="home_delivery" element={<Home_delivery />} />
          <Route path="refresh" element={<Refresh />} />
          <Route path="event_celebration" element={<Event_celebration />} />
          <Route path="hotel_info" element={<Hotel_info />} />
          <Route path="our_projects" element={<Our_projects />} />
          <Route path="join" element={<Join />} />
          <Route path="add" element={<Add />} />
          <Route path="menu" element={<Menu />} />
          <Route path="add_menu" element={<Add_menu />} />
          <Route path="home_add_menu" element={<Home_add_menu />} />
          <Route path="add_item" element={<Add_item />} />
          <Route path="add_room" element={<Add_room />} />
          <Route path="book_room" element={<Book_room />} />
          <Route path="free_room" element={<Free_room />} />
          <Route path="delete_room" element={<Delete_room />} />
          <Route path="/free_room/:id/edit" element={<Edit_booking />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
