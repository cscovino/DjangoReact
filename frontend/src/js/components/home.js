import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { FormGroup,FormControl,ControlLabel,Button } from "react-bootstrap"
import { addBand } from '../actions/bandActions'
import { connect } from 'react-redux'

@connect((store) => {
  return {
    bands: store.bands.bands
  };
})
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameValue:'',
      imageValue:'',
      bioValue:''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e){
    this.setState({nameValue: e.target.value});
  }

  handleChangeImage(e){
    this.setState({imageValue: e.target.value});
  }

  handleChangeBio(e){
    this.setState({bioValue: e.target.value});
  }

  handleSubmit(){
    this.props.dispatch(addBand(this.state.nameValue,this.state.imageValue,this.state.bioValue));
      
    this.setState({
      nameValue:'',
      imageValue:'',
      bioValue:''
    });
  }

  render() {
    return (
      <div className='band-content'>
        <h2>Add New Music Band</h2>
        <form>
          <FormGroup controlId='bandName' className='band-new'>
            <ControlLabel>Band Name</ControlLabel>
            <FormControl type='text' placeholder='Enter text' className='input-form' value={this.state.nameValue} onChange={this.handleChangeName}/>
          </FormGroup>
          <FormGroup controlId='urlImage' className='band-new'>
            <ControlLabel>URL Image</ControlLabel>
            <FormControl type='text' placeholder='Enter url' className='input-form' value={this.state.imageValue} onChange={this.handleChangeImage}/>
          </FormGroup>
          <FormGroup controlId='bandBio' className='band-new'>
            <ControlLabel>Band Bio</ControlLabel>
            <FormControl type='text' placeholder='Enter text' className='input-form' componentClass='textarea' value={this.state.bioValue} onChange={this.handleChangeBio}/>
          </FormGroup>
          <Button type="submit" onClick={this.handleSubmit}>Add</Button>
        </form>
      </div>
    );
  }
}
 
export default Home