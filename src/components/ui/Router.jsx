import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screens/home/home';
import { CarDetail } from '../screens/car-detail/CarDetail';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CarDetail />} path="/car/:id" />
        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
