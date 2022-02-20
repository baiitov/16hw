import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
	async function postchangeHandler(newData) {
		const response = await fetch(
			'https://react-http-movies-319e4-default-rtdb.firebaseio.com/movies.json',
			{
				method: 'POST',
				body: JSON.stringify(newData),
				headers: {
					'Content-type': 'application/json',
				},
			},
		)
	}
	return (
		<BrowserRouter>
			<div className='app'>
				<Routes>
					<Route
						path='*'
						element={<SignUp onPostHandler={postchangeHandler} />}
					/>
					<Route path='/Login' element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
