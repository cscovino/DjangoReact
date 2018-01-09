import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Route,NavLink,HashRouter } from "react-router-dom"
import { MenuItem,Nav,NavItem,NavDropdown } from "react-bootstrap"
import { connect } from 'react-redux'
import { fetchBands } from '../actions/bandActions'
import Band from './band'
import Home from './home'
import Settings from './settings'

@connect((store) => {
	return {
		bands: store.bands.bands
	};
})
class App extends React.Component{

   componentWillMount(){
        this.props.dispatch(fetchBands());
    }

	render(){
		const bands = this.props.bands;
		try{
			return(
				<HashRouter>
				<div>
					<Title />
					<Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
						<NavItem eventKey="1"><NavLink to='/'>Home</NavLink></NavItem>
						<NavDropdown eventKey="4" title="Bands" id="nav-dropdown">
							{bands.map(item => <BandName key={item.name} name={item.name} label={item.id}/>)} 
						</NavDropdown>
						<NavItem eventKey="5"><NavLink to='/settings'>Delete</NavLink></NavItem>
					</Nav>
					<div className='content'>
						<Route exact path='/' component={() => <Home handler={this.handler}/>}/>
						<Route path='/settings' component={() => <Settings/>}/>
						{bands.map(item => <BandRoute key={item.name} name={item.name} label={item.id}/>)}
					</div>
				</div>
				</HashRouter>
			);
		}
		catch(err){
			return(
				<div>
					<ul>{err}</ul>
				</div>
			);
		}
	}
}

class BandRoute extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			key: this.props.label,
			name: this.props.name,
		}
	}

	render(){
		const url = '/band'+this.state.key;
		return(
			<Route path={url} key={this.state.name} component={() => <Band label={this.state.key}/>}/>
		);
	}
}

class BandName extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			key: this.props.label,
			name: this.props.name,
		}
	}

	render(){
		const url = '/band'+this.state.key;
		return(
			<MenuItem ><NavLink to={url}>{this.props.name}</NavLink></MenuItem>
		);
	}
}

class Title extends React.Component{
	render(){
		return(
			<div className='jumbotron jumbotron-fluid'>
				<h1 className='display-3'>Music Bands</h1>
			</div>
		);
	}
}

export default App;