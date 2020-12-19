import './shared.css';
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div>
      <div id="navbar" className="navbar">
        <label className="name">deepak</label>
        <div className='navbar-buttons'>
          <a href="#home"><button className="btn btn-sm btn-outline-light">Home</button></a>
          <a href="#about"><button className="btn btn-sm btn-outline-light">About</button></a>
          <a href="#project"><button className="btn btn-sm btn-outline-light">Projects</button></a>
          <a href="#photo"><button className="btn btn-sm btn-outline-light">Gallary</button></a>
          {/* <a href="Resume_Deepak_kumar.pdf" download><button className="btn btn-sm btn-outline-light">Resume</button></a> */}
          <a href="#contact"><button className="btn btn-sm btn-outline-light">Contact</button></a>
        </div>
      </div>
      {/* <div style={{backgroundColor:'indigo'}}>
        <label className="name">deepak</label> 
       </div> */}
    </div>
  );
}

export default Navbar;
