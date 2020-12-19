import './shared.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div id="about" class="container-fluid ab">
        <br/><br/><br/>
        <center><h1>About me</h1></center>
        <br/>
        <label >I'm an undergraduate student at Indian Institute of Technology Mandi. I'm currently in my final Semester of my Bachelor's in Technology from Computer Science & Engineering Department at IIT Mandi.</label>
        <label >I am also navodayan and Dakshana alumini.</label>
        <br/>
        <a href="Resume_Deepak_kumar.pdf" download><button style={{backgroundColor:'black',color:'white'}} className="btn" ><i class="fa fa-download"></i> Download Resume</button></a>
        <br/>
        <br/>
        <h2>Education</h2>
        <b><h5>Indian Institute of Technology, Mandi <i>(2017 - present)</i></h5></b>
        <h7><a style={{textDecoration:'none',color:'white'}} href="/academic">B.tech</a> in Computer Science and Engineering with 7.84 CGPA</h7>
        <b><h5>Jawahar navodaya vidyalaya, kottayam, kerala <i>(2015 - 2017)</i></h5></b>
        <h7>12th Standard in Science with 91.4 % .</h7>
        <b><h5>Jawahar navodaya vidyalaya, Muzaffarpur, Bihar <i>(2010 - 2015)</i></h5></b>
        <h7>10th Standard with 10 CGPA.</h7>
        <br/><br/>
        <h2>Technical domain</h2>
        <ul>
          <li>Web development : ReactJs, NodeJs, ExpressJs, MongoDB, Flask, HTML, JavaScript, CSS, MySQL</li>
          <li>Programming Skills : C/C++, Python</li>
          <li>Deep learning : Google Colab, Keras, Tensorflow, Dlib, scikit-learn</li>
          <li>Image processing : OpenCv2, Scipy</li>
          <li>Operating Systems : Linux</li>
          <li>Other Tools : Git, Github</li>
          <li>Other Languages: Bash</li>
        </ul> 
        {/* <br/> */}
        <h2>Hobbies</h2>
        <h6>Playing badminton and cricket</h6>
        <h6>Reading books</h6>
        <br/>
    </div>
  );
}

export default About;
