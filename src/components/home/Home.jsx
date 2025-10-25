import { mainImg, portfolioImg3 } from '../../assets/images'

export const Home = () => {
	return (
		<div className='home'>
			<h1>Home</h1>
			<p>Welcome to the home page!</p>
			<img src={mainImg} alt='Main' />
			<img src={portfolioImg3} alt='Portfolio 3' />
		</div>
	)
}
