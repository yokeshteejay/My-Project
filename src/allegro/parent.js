import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Child_1 from './home';

function Parent_1() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='' element={Child_1}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default Parent_1