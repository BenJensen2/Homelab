import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NewItem from '../components/NewItem'
import Weekly from './Weekly'

const MainContent = () => {
  return (
    <div className='main-content'>
      <NewItem/>
      <Routes>
        <Route path="/weekly" element={<Weekly />}/>
      </Routes>
      </div>
  )
}

export default MainContent;