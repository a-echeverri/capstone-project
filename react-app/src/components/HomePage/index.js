import { React } from 'react';
import './HomePage.css';

export default function HomePage() {

	return (
		<div className="homepage">
			<div className="homepage-content">
                <div className="app-name-div">
				    <h1 className="app-name-container">Welcome to Cocktail Party</h1>
                </div>
                <div className="homepage-text-div">
				    <h2 className="homepage-text">Whether you’re making cocktails at home, ordering drinks at a bar, or browsing shelves at the liquor store, we’ll teach you everything you'll need to know about the drinks you love. We’ve curated the most essential cocktail recipes and bottles so you can learn more about your favorite drinks, and maybe even discover a few new ones. </h2>
                </div>
			</div>
			<div className="homepage-image-div">
				{/* <img src="./Manhattan-Riffs.png" alt="cocktail party"/> */}
			</div>
				<p className="homepage-text2">(Splash Page Work In Progress)</p>
		</div>
	);
};