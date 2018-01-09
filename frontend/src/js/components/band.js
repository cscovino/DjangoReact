import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { getBand } from '../actions/bandActions'
import { connect } from 'react-redux'

@connect((store,ownprops) => {
	return {
		id: ownprops.label,
		band: store.band.band
	};
})
class Band extends React.Component{

   componentDidMount(){
        this.props.dispatch(getBand(this.props.label));
    }

	render(){
		const data = this.props.band;
		try{
			return(
					<div>
						<img src={data.image} alt={data.name} className='band-image'/>
						<div className='band-content'>
							<h2>{data.name}</h2>
							<p className='band-bio'>{data.bio}</p>
						</div>
					</div>
			);
		}
		catch(err){
			return(
				<div>
					<ul></ul>
				</div>
			);
		}	
	}
}

export default Band;