import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'reducers/store'
import App from 'containers/App'

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
