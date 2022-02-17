import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Routes>
          <Route path = '*' element ={<Navigate to ='/SignUp' replace/>}/>
					<Route path ='/SignUp' element ={<SignUp/>}/>
          <Route path = '/Login' element ={<Login/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
