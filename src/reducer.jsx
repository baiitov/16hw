import { validEmailRegex, nameValidRegExp } from "./Helpers/constants"

export const initialState = {
	nameValue: {
		value: '',
		isValid: null,
		error: '',
	},
	emailValue: {
		value: '',
		isValid: null,
		error: '',
	},
	passwordValue: {
		value: '',
		isValid: null,
		error: '',
	},
}

export const UserReducer = (state, action) => {
	switch (action.type) {
		case 'NAME':
			return {
				...state,
				nameValue: {
					value: action.value,
					isValid: nameValidRegExp.test(action.value),
				},
			}
		case 'EMAIL':
			return {
				...state,
				emailValue: {
					value: action.value,
					isValid: validEmailRegex.test(action.value),
				},
			}
		case 'PASSWORD':
			let a = action.value.split('', 2).join()
			let b = action.value.split('').reverse().join('')
			return {
				...state,
				passwordValue: {
					value: b + a,
					isValid: action.value.length > 5,
				},
			}
		case 'NAME_BLUR':
			return {
				...state,
				nameValue: {
					value: state.nameValue.value,
					isValid: nameValidRegExp.test(state.nameValue.value),
					error: nameValidRegExp.test(state.nameValue.value)
						? ''
						: state.nameValue.value === ''
						? 'введите имя'
						: 'username must have digits',
				},
			}
		case 'EMAIL_BLUR':
			return {
				...state,
				emailValue: {
					value: state.emailValue.value,
					isValid: validEmailRegex.test(state.emailValue.value),
					error: validEmailRegex.test(state.emailValue.value)
						? ''
						: state.emailValue.value === ''
						? 'введите email'
						: 'gmail is not valid',
				},
			}
		case 'PASSWORD_BLUR':
			return {
				...state,
				passwordValue: {
					password: state.passwordValue.value,
					isValid: state.passwordValue.value.trim().length > 5,
					error:
						state.passwordValue.value.trim().length > 5
							? ''
							: state.passwordValue.value === ''
							? 'true'
							: 'not correct',
				},
			}

		default:
			break
	}
}