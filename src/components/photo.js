import './shared.css';
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function Photo() {
  return (
    <div id="photo" className="container-fluid">
        <br/><br/><br/>
        <center><h1>Gallary</h1></center>
        <br/>
        <div className="row no-gutters" >
            <div className="col-sm-3" >
                <center>
                <img className="rounded-circle" style={{width:"200px"}} src={'1.jpg'} alt="My_photo"/>
                </center>
                <br/>
            </div>
            <div className="col-sm-3" >
                <center>
                <img className="rounded-circle" style={{width:"200px"}} src={'2.jpg'} alt="My_photo"/>
                </center>
                <br/>
            </div>
            <div className="col-sm-3" >
                <center>
                <img className="rounded-circle" style={{width:"200px"}} src={'3.jpg'} alt="My_photo"/>
                </center>
                <br/>
            </div>
            <div className="col-sm-3" >
                <center>
                <img className="rounded-circle" style={{width:"200px"}} src={'4.jpg'} alt="My_photo"/>
                </center>
                <br/>
            </div>
        </div>
    </div>
  );
}

export default Photo;
