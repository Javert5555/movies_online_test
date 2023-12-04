import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import NavMenu from './components/NavMenu'

const MainRouter = () => (
    <div>
        <NavMenu />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    </div>

    // <Routes>
    //     <Route exact path='/' element={<Home />} />
    //     <Route path='/users' element={<Users />} />
    //     <Route path='/signup' element={<Signup />} />
    //     <Route path='/signin' element={<Signin />} />
    //     <Route path='/user/edit/:userId' element={<PrivateRoute />}>
    //         <Route path='/user/edit/:userId' element={<EditProfile />} />
    //     </Route>
    //     <Route path='/user/:userId' element={<Profile />} />
    //     <Route path='*' element={<Navigate to='/' />} />
    // </Routes>
)

export default MainRouter