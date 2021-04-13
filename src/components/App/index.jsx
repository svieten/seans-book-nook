import React from 'react'
// import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes/Routes'

class App extends React.Component {
	componentDidMount() {
		const { updateExample } = this.props
		updateExample()
	}

	render() {
		return (
			<Router>
				<Routes />
			</Router>
		)
	}
}

export default App
