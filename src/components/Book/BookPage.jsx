import React from 'react'
import ImageGallery from 'react-image-gallery'
import images from 'constants/images'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import './style.css'

class BookPage extends React.Component {
	componentDidMount() {
		console.log('I mounted!')
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="container-fluid page-padding">
					<span className="image-gallery-holder">
						<ImageGallery
							items={images}
							showNav={false}
							showPlayButton={false}
						/>
					</span>
					<div className="book-info">
						<h2>Leadership: In Turbulent Times</h2>
						<hr className="title-bar-blue" />
						<br />
						<span>Author: Doris Kearns Goodwin</span>
						<br />
						<span>Year of Publication: 2019</span>
						<br />
						<span>Number of Pages: 378</span>
						<br />
						<span>
							Category(s):{' '}
							<span className="badge badge-primary">History</span>{' '}
							<span className="badge badge-primary">
								Presidential
							</span>{' '}
						</span>
						<br />
						<br />
						<span>
							Brief Summary: This book outlines the leadership
							qualities needed to manage difficult situations. The
							book uses examples from the presidencies of Abraham
							Lincoln, Theodore Roosevelt, Franklin Roosevelt, and
							Lyndon Johnson.{' '}
						</span>
					</div>
				</div>
				<div className="container-fluid page-padding">
					<hr className="bar-blue" />
					<h2 className="section-title">Summary</h2>
					<div className="section-text" />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Dignissim diam quis enim lobortis scelerisque
					fermentum. Hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper. Amet volutpat consequat
					mauris nunc. Sed ullamcorper morbi tincidunt ornare massa.
					Interdum velit laoreet id donec ultrices tincidunt arcu non.
					Pellentesque pulvinar pellentesque habitant morbi tristique
					senectus et netus. Faucibus purus in massa tempor nec
					feugiat. Vulputate odio ut enim blandit. Neque convallis a
					cras semper auctor neque vitae. Arcu felis bibendum ut
					tristique. Nisl tincidunt eget nullam non nisi est sit amet.
					Sodales neque sodales ut etiam sit amet nisl purus in. Odio
					ut sem nulla pharetra diam.
				</div>
				<div className="container-fluid page-padding">
					<hr className="bar-blue" />
					<h2 className="section-title">Overview</h2>
					<div className="section-text" />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Dignissim diam quis enim lobortis scelerisque
					fermentum. Hac habitasse platea dictumst vestibulum rhoncus
					est pellentesque elit ullamcorper. Amet volutpat consequat
					mauris nunc. Sed ullamcorper morbi tincidunt ornare massa.
					Interdum velit laoreet id donec ultrices tincidunt arcu non.
					Pellentesque pulvinar pellentesque habitant morbi tristique
					senectus et netus. Faucibus purus in massa tempor nec
					feugiat. Vulputate odio ut enim blandit. Neque convallis a
					cras semper auctor neque vitae. Arcu felis bibendum ut
					tristique. Nisl tincidunt eget nullam non nisi est sit amet.
					Sodales neque sodales ut etiam sit amet nisl purus in. Odio
					ut sem nulla pharetra diam.
				</div>
			</div>
		)
	}
}

export default BookPage
