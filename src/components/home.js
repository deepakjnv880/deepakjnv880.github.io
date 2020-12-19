import './shared.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ArrowDownCircle, Linkedin,Facebook,Instagram,GitHub } from 'react-feather';

function Body() {
  return (
    <div id='home' className="body container-fluid">
      {/* <br/> */}
      <br/>
      <br/>
      <br/>
      <div className="row no-gutters" >
        
        <div className="col-sm-6" >
          <p className="card-text " style={{marginTop:'2vw',marginBottom:'2vw',marginLeft:'14vw',marginRight:'14vw',fontWeight:500}}>
              <label className="magic1" >I'M DEEPAK KUMAR.</label><br/>
              <label className="magic2" ><i>A final year btech student from Computer Science & Engineering Department at IIT Mandi.</i></label>
          </p>
        </div>

        <div className="col-sm-4">
          <center>
          <img className="rounded-circle" src={'photo.jpeg'} style={{marginTop: '5vw',display:'block'}} marginleft="5vw"  margintop="5vw" width='50%' alt="My_photo"/>
          <br/>
          <br/>
          <a href="https://www.linkedin.com/in/deepakjnv880/" target="blank"><Linkedin color="white" size={60} /></a>
          <a  href="https://www.facebook.com/b17039" target="blank"><Facebook color="white" size={60} /></a>
          <a href="https://www.instagram.com/deepak.jnv/"  target="blank"><Instagram color="white" size={60} /> </a>
          <a href="https://github.com/deepakjnv880" target="blank"><GitHub color="white" size={60} /> </a> 
          </center>
          <br/>
          <br/>
        </div>

        <div className="col-sm-2">

        </div>
        
      </div>
      {/* <br/> */}
      <br/>
      <div className="row no-gutters">
        <div className="col-sm-12" >
          <center>
          <a href="#about"><ArrowDownCircle color="white" size={60}/></a>
          </center>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default Body;
