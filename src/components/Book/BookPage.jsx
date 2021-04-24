import React from 'react'
import ImageGallery from 'react-image-gallery'
import images from 'constants/images'
import 'react-image-gallery/styles/css/image-gallery.css'
import './style.css'

class BookPage extends React.Component {
	componentDidMount() {
		console.log('I mounted!')
	}

	render() {
		return (
			<div className="image-gallery-holder">
				<ImageGallery items={images} />
			</div>
		)
	}
}

export default BookPage
