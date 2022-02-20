import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialState, UserReducer } from '../reducer'
import './SignUp.css'

function SignUp(props) {
	const navigate = useNavigate()
	const [disabled, setDisabled] = useState(false)

	const [user, dicpatchUser] = useReducer(UserReducer, initialState)
	const NameChangeHandler = (event) => {
		dicpatchUser({ type: 'NAME', value: event.target.value })
	}
	const EmailChangeHandler = (event) => {
		dicpatchUser({ type: 'EMAIL', value: event.target.value })
	}
	const PasswordChangeHandler = (event) => {
		dicpatchUser({ type: 'PASSWORD', value: event.target.value })
	}
	const NameBlurHandler = (event) => {
		dicpatchUser({ type: 'NAME_BLUR' })
	}
	const EmailBlurHandler = () => {
		dicpatchUser({ type: 'EMAIL_BLUR' })
	}
	const PasswordBlurHandler = () => {
		dicpatchUser({ type: 'PASSWORD_BLUR' })
	}
	const SubmitHandler = (event) => {
		event.preventDefault()
		const newData = {
			name: user.nameValue.value,
			email: user.emailValue.value,
			password: user.passwordValue.value,
			id: Math.random().toString(),
		}
		props.onPostHandler(newData)
		return navigate('/Login')
	}
	useEffect(() => {
		const identifer = setTimeout(() => {
			setDisabled(
				user.nameValue.isValid &&
					user.emailValue.isValid &&
					user.passwordValue.isValid,
			)
		}, 500)

		return () => {
			clearTimeout(identifer)
		}
	}, [
		user.nameValue.isValid,
		user.emailValue.isValid,
		user.passwordValue.isValid,
	])
	return (
		<form onSubmit={SubmitHandler} className='input_form'>
			<label>username</label>
			<input
				onChange={NameChangeHandler}
				onBlur={NameBlurHandler}
				type='text'
				placeholder='username'
			/>
			<p className='error'>{user.nameValue.error}</p>

			<label>login</label>
			<input
				onChange={EmailChangeHandler}
				type='email'
				onBlur={EmailBlurHandler}
				placeholder='login'
			/>
			<p className='error'>{user.emailValue.error}</p>

			<label>password</label>
			<input
				onChange={PasswordChangeHandler}
				type='password'
				placeholder='password'
				onBlur={PasswordBlurHandler}
			/>
			<p className='error'>{user.passwordValue.error}</p>
			<button type='submit' disabled={!disabled}>
				OK
			</button>
		</form>
	)
}

export default SignUp
