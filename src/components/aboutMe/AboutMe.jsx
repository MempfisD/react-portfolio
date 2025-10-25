import { aboutImg } from '../../assets/images'
import './AboutMe.css'

export const AboutMe = () => {
	return (
		<div className='about-me'>
			<h1>About Me</h1>
			<img src={aboutImg} alt='About Me' />
		</div>
	)
}
