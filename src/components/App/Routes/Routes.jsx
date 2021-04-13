import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'components/Home'
import OtherPage from 'components/OtherPage'

const RouterView = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/other-page" component={OtherPage} />
	</Switch>
)

export default RouterView
