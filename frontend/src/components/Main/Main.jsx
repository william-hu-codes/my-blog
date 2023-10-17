import {Routes, Route} from 'react-router-dom'

import IndexPage from '../../pages/PostsIndexPage/PostsIndexPage'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import AuthPage from '../../pages/AuthPage/AuthPage'
import "./Main.css"
import PostsNewPage from '../../pages/PostsNewPage/PostsNewPage'


export default function Main({user, setUser}){


    return(
        <main className="main">
          <Routes>
            <Route path="/" element={<IndexPage user={user}/>} /> 
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="/posts/new" element={<PostsNewPage user={user}/>} />
            <Route path="/*" element={<ErrorPage />} />   
          </Routes>
        </main>
    )
}

