import './shared.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Phone,MapPin,Mail,ArrowUpCircle, Linkedin,Facebook,Instagram,GitHub } from 'react-feather';


function Contact() {
  return (
    <div id="contact">
            <center>
            <br/><br/><br/><br/>
            <a href="#home"><ArrowUpCircle color="white" size={60}/></a>
            <br/><br/>
            <h4> Address <MapPin color="white" size={30} /></h4>
            <h6>Deepak Kumar<br/>Near Bright career public school<br/>Dudhpura,Samastipur<br/>Bihar 848101 India</h6>
            <br/>
            <h4>Phone number <Phone color="white" size={30} /></h4>
            <h6>
              {/* +91 9709214184 <br/>*/}
              +91 9117927185</h6>
            <br/>
            <h4> Emails <Mail color="white" size={30} /></h4>
            <h6>deepakkumar.dakshana17@gmail.com<br/>B17039@students.iitmandi.ac.in</h6>
            <br/><br/>
            <a href="https://www.linkedin.com/in/deepakjnv880/" target="blank"><Linkedin color="white" size={60} /></a>
            <a  href="https://www.facebook.com/b17039" target="blank"><Facebook color="white" size={60} /></a>
            <a href="https://www.instagram.com/deepak.jnv/"  target="blank"><Instagram color="white" size={60} /> </a>
            <a href="https://github.com/deepakjnv880" target="blank"><GitHub color="white" size={60} /> </a> 
            <br/><br/>
            <label><font size="3" color="silver"> Copyright @ All Rights reserved.</font></label>
            </center>
    </div>
  );
}

export default Contact;
