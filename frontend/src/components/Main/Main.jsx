import {Routes, Route} from 'react-router-dom'

import IndexPage from '../../pages/PostsIndexPage/PostsIndexPage'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import AuthPage from '../../pages/AuthPage/AuthPage'
import "./Main.css"


export default function Main({user, setUser}){


    return(
        <main className="main">
          <Routes>
            <Route path="/" element={<IndexPage />} /> 
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="/*" element={<ErrorPage />} />   
          </Routes>
        </main>
    )
}

