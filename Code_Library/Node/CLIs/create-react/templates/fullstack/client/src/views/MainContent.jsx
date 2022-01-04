import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Index from './Index'

const MainContent = () => {
  return (
    <div className='main-content'>
      <Routes>
        <Route path="/" element={<Index />}/>
      </Routes>
      </div>
  )
}

export default MainContent;