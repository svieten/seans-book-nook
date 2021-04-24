import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'components/Home'
import OtherPage from 'components/OtherPage'
import BookPage from 'components/Book/BookPage'

const RouterView = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/other-page" component={OtherPage} />
		<Route path="/book-page" component={BookPage} />
	</Switch>
)

export default RouterView
