import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Weekly from './Weekly'

const MainContent = () => {
  return (
    <div className='main-content'>
      <Routes>
        <Route path="/weekly" element={<Weekly />}/>
      </Routes>
      </div>
  )
}

export default MainContent;