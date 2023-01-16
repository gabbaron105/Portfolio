import './App.css';
import React from 'react';
import { BrowserRouter , Route ,Routes }from 'react-router-dom'
import Home from './componets/Home'
import About from './componets/About'
import SinglePost from './componets/SinglePost'
import Post from './componets/Post'
import Project from './componets/Project'
import NavBar from "./componets/NavBar";




function App() {
  return (
    <BrowserRouter> 
    <NavBar></NavBar>  
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/post/:slug' element={<SinglePost></SinglePost>}></Route>
            <Route path='/post' element={<Post></Post>}></Route>
            <Route path='/project' element={<Project></Project>}></Route>
        </Routes> 
    
    </BrowserRouter>
    
  );
}

export default App;
