import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import root from './index'

/* eslint-disable import/no-mutable-exports */
let store = ''

if (process.env.NODE_ENV === 'local') {
	const logger = createLogger({
		collapsed: true,
		diff: true
	})
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
	store = createStore(root, composeEnhancers(applyMiddleware(thunk, logger)))
} else {
	/* eslint-disable no-multi-assign */
	store = createStore = (root, applyMiddleware(thunk))
}

export default store
