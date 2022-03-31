import React from 'react';

class Data extends React.Component {
	constructor() {
		super()

		this.state = {
			name: null,
			height: null,
			mass: null,
			gender: null,
			homeworld: null,
			image: null,
			bornLocation: null,
			species: null,
			loaded: false
		}
	}

	getCharacter() {
		const randomNumber = Math.round(Math.random() * 88)
		const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`

		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					name: data.name,
					height: data.height,
					mass: data.mass,
					gender: data.gender,
					homeworld: data.homeworld,
					image: data.image,
					bornLocation: data.bornLocation,
					species: data.species,
					loaded: true
				})
			})
	}

	render() {
		return(
			<div>
				{
					this.state.loaded &&
						<div className='data-container'>
							<div className='img-container'>
								<div className='img-border'>
									<img src={this.state.image} alt="profile"/>
								</div>
							</div>
							<div className='details-container'>
								<p>
									<b>Name: </b> 
									{this.state.name || "-"}
								</p>
								<p>
									<b>Height: </b>
									{this.state.height || "-"}
								</p>
								<p>
									<b>Mass: </b>
									{this.state.mass || "-"}
								</p>
								<p>
									<b>Gender: </b>
									{this.state.gender || "-"}
								</p>
								<p>
									<b>Homeworld: </b>
									{this.state.homeworld || "-"}
								</p>
								<p>
									<b>Born Location: </b>
									{this.state.bornLocation || "-"}
								</p>
								<p>
									<b>Species: </b>
									{this.state.species || "-"}
								</p>
							</div>
						</div>
				}
				<button 
					className='randomize' 
					onClick={() => this.getCharacter()}
				>Randomize</button>
			</div>
		)
	}
}

export default Data;