import {useState, Provider} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {Provider, useSelector} from 'react-redux';

import './App.css'

import navContext from "./context/navContext.jsx";

import HomePage from './pages/HomePage/HomePage.jsx'
import NotFound from './pages/404/404.jsx'
import IndexPage from './pages/IndexPage/IndexPage.jsx'
import DetailPage from "./pages/DetailPage/DetailPage.jsx"
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx"
import EditorPage from "./pages/EditorPage/EditorPage.jsx"

import Header from "./components/Header/Header.jsx";

import store from "./store/index.js";


function App() {
    const [navItems, setNavItem] = useState({
        '前端笔记': 'front-end',
        '读书笔记': 'reading',
        '翻译文章': 'translation',
        'One导航': 'onespace',
        '工具箱': 'onetool'
    })


  return (
      <navContext.Provider value={navContext._currentValue}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Header />}>
                      <Route index element={<HomePage />} />
                      {Object.values(navItems).map(i => {
                          return <Route key={i} path={`/${i}`} element={<IndexPage key={i}/>} />
                      })}
                      {Object.values(navItems).map(i => {
                          return <Route key={i} path={`/${i}/:id`} element={<DetailPage key={i}/>} />
                      })}
                  </Route>
                  <Route path='/login' element={<LoginPage />}/>
                  <Route path='/signup' element={<SignUpPage />}/>
                  <Route path='/ramble' element={<EditorPage/>} />
                  <Route path='*' element={<NotFound />}/>

              </Routes>
          </BrowserRouter>
      </navContext.Provider>

  )
}

export default App
