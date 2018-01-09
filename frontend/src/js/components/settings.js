import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { ListGroup,ListGroupItem } from "react-bootstrap"
import { connect } from 'react-redux'
import { delBand } from '../actions/bandActions'

@connect((store) => {
  return {
    bands: store.bands.bands
  };
})
class Settings extends React.Component {

  deleteBand(key){
    this.props.dispatch(delBand(key));
  }

  render() {
    const data=this.props.bands;
    console.log(data);
    try{
      return(
        <div className='band-list'>
        <div className='band-content'><h4>Click to delete</h4></div>
          <ListGroup>
            {data.map(item => <ListGroupItem key={item.id} onClick={() => this.deleteBand(item.id)}>{item.name}</ListGroupItem>)}
          </ListGroup>
        </div>
      );
    }
    catch(e){
      return(
        <div>
          <ul></ul>
        </div>
      );
    }
  }
}
 
export default Settings