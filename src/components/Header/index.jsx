import React from 'react'

const Header = () => (
	<div>
		<ul className="nav justify-content-center">
			<li className="nav-item">
				<a className="nav-link active" href="#">
					Current Book
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					Top 10 Books
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					All Books
				</a>
			</li>
		</ul>
	</div>
)

export default Header
