import * as types from 'types/example'
import initialState from './initialState'

export default (state = initialState.example, action = {}) => {
	switch (action.type) {
		case types.UPDATE_EXAMPLE:
			return {
				...state,
				greeting: action.greeting
			}
		default:
			return state
	}
}
