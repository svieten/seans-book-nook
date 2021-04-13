import { connect } from 'react-redux'
import App from 'components/App'
import { updateExample } from 'actions/example'

const mapStateToProps = state => ({
	greeting: state.example.greeting
})

const mapDispatchToProps = dispatch => ({
	updateExample: () => dispatch(updateExample())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
