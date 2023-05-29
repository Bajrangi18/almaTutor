import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image,Button } from 'react-bootstrap';

const FeatureView = () => {
    return(
    <Container style={{color:'#0d1718',fontFamily:'Work Sans',maxWidth: '80%', padding: '0px',borderRadius:10,backgroundSize:"cover",backgroundPosition:"center"}}>
        <Row onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.02)';}}onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)';}} style={{backgroundColor:"#e1ebf5",borderRadius:10,width:"70%",boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)',marginBottom:20,marginLeft: 'auto',position:'relative',top:-10,transition: 'transform 0.3s ease'}} >
          <Col md={8} style={{padding:20}}>
            <h2>Ready-Made Projects</h2>
            <p>Choose from a variety of pre-built engineering projects for practical learning</p>
            <Button  style={{backgroundColor:'#0848b9'}}>Check Out Latest Projects</Button>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-center" style={{padding:10,}}><Image src={require("../Helpers/readymade.png")} style={{height: 150,width: 150,aspectRatio: '1/1',objectFit:'contain'}} /></Col>
        </Row>

        <Row onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.02)';}}onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)';}} style={{backgroundColor:"#e1ebf5",borderRadius:10,width:"70%",boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)',marginBottom:20,transition: 'transform 0.3s ease'}} >
          <Col md={8} style={{padding:20}}>
            <h2>Step-by-Step Tutorials</h2>
            <p>Follow easy-to-understand tutorials guiding you through project implementation and concepts</p>
            <Button  style={{backgroundColor:'#0848b9'}}>View Tutorials</Button>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-center" style={{padding:10}}><Image src={require("../Helpers/tutorials.png")} style={{height: 150,width: 150,aspectRatio: '1/1',objectFit:'contain'}}/></Col>
        </Row>

        <Row onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.02)';}}onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)';}} style={{backgroundColor:"#e1ebf5",borderRadius:10,width:"70%",boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)',marginBottom:20,marginLeft: 'auto',position:'relative',bottom:-10,transition: 'transform 0.3s ease'}} >
          <Col md={8} style={{padding:20}}>
            <h2>Specialized Engineering Courses</h2>
            <p>Enhance your knowledge with focused courses tailored to different engineering domains</p>
            <Button  style={{backgroundColor:'#0848b9'}}>Register to a Course</Button>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-center" style={{padding:10}}><Image src={require("../Helpers/course.png")} style={{height:150,width:150,aspectRatio: '1/1',objectFit:'contain'}} /></Col>
        </Row>
    </Container>
    )
}
export default FeatureView