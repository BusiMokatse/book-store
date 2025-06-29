import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/book/create" element={ <CreateBooks />}/>
    <Route path="/book/delete/:id" element={<DeleteBook />}/>
    <Route path="/book/edit/:id" element={<EditBook />}/>
    <Route path="/book/details/:id" element={<ShowBook />}/>
    
    </Routes>
  )
}

export default App
