import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import projectContent from '../Helpers/contentProjects.json'
import { Row,Col,Container,Image,Carousel, Button } from 'react-bootstrap';
import ExplainCards from './ExplainCard';


const ProjectPageView = () => {
    const { projectName } = useParams<{ projectName: string }>();
    const contentHolder = Object.entries(projectContent).filter((element)=>element[0]==projectName)["0"]
    const description = contentHolder[1].description
    const images = contentHolder[1].images
    const [index, setIndex] = useState(0);

    const navigate = useNavigate();

    const handleProjectButtonClick = (projectName:string|undefined) => {
        const projectPath = `/purchase/${projectName}`;
        navigate(projectPath)
      };

    const handleSelect = (selectedIndex:number) => {
      setIndex(selectedIndex);
    };

    return(
        <main>
            <Container fluid style={{backgroundColor:"#f8f9fa",fontFamily:"Work Sans",fontWeight:"600",}} >
                <Container style={{width:"90%",paddingBottom:30,paddingTop:30}}>
                <Row>
                    <Col md={6} xs={12}>
                    <Row>
                        <h1>{contentHolder[1]['Project Name']}</h1>
                    </Row>
                    <Row style={{paddingTop:20}} >
                    <ul>
                        {Object.entries(description).map(([key, value]) => (
                                <h6 key={key} style={{fontWeight:"400",textAlign:'justify',marginBottom:20,fontSize:15}}><strong>✔ {key}:</strong> {value}</h6>
                        ))}
                    </ul>
                    <Button onClick={()=>handleProjectButtonClick(contentHolder[1]['Project Name'])} style={{display:'block',fontSize:20,fontWeight:"600"}}>Order Now!</Button>
                    </Row>
                    </Col>
                    <Col md={6} xs={12} className="d-flex align-items-center">
                    <CarousalView image1={images.image1} image2={images.image2} image3={images.image3} image4={images.image4} />
                    </Col>
                </Row>
                </Container>
            </Container>
            <Container style={{width:"90%",paddingTop:20,paddingBottom:20,fontFamily:"Work Sans"}}>
                    <Row>
                    <Col xs={12} lg={6} xl={6}>
                        <h2 style={{fontWeight:"600"}}>What you'll receive</h2>
                        <ExplainCards image="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-kit-web-design-and-development-flatart-icons-flat-flatarticons.png" heading='All-in-One Kit' text="Your kit, tested & shipped in 24 hours" />
                        <ExplainCards image="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-live-web-design-and-development-flatart-icons-flat-flatarticons.png" heading='Step-by-Step Tutorial' text="Clear and concise step-by-step tutorial for easy learning" />
                        <ExplainCards image="https://img.icons8.com/stickers/100/certificate.png" heading='Authentic Components' text="High-quality and genuine components for reliable project performance" />
                        <ExplainCards image="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-customer-support-female-profession-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png" heading='One-to-One Support' text="Personalized guidance and assistance tailored to your specific needs" />
                    </Col>
                    <Col xs={12} lg={6} xl={6}>
                        <h2 style={{fontWeight:"600"}}>What you'll build</h2>
                        <ExplainCards image="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-kit-web-design-and-development-flatart-icons-flat-flatarticons.png" heading='All-in-One Kit' text="Your kit, tested & shipped in 24 hours" />
                        <ExplainCards image="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-live-web-design-and-development-flatart-icons-flat-flatarticons.png" heading='Step-by-Step Tutorial' text="Clear and concise step-by-step tutorial for easy learning" />
                        <ExplainCards image="https://img.icons8.com/stickers/100/certificate.png" heading='Authentic Components' text="High-quality and genuine components for reliable project performance" />
                        <ExplainCards image="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-customer-support-female-profession-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png" heading='One-to-One Support' text="Personalized guidance and assistance tailored to your specific needs" />
                    </Col>
                    </Row>            
            </Container>
        </main>
    )
}
export default ProjectPageView

const CarousalView = ({image1,image2,image3,image4}:{image1:string,image2:string,image3:string,image4:string}) => {
    return(
    <Carousel style={{fontFamily:'Work Sans',height: '400px', width: '100%'}} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{ objectFit: 'contain', height: '400px', width: '100%' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{ objectFit: 'contain', height: '400px', width: '100%' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{ objectFit: 'contain', height: '400px', width: '100%' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
          style={{ objectFit: 'contain', height: '400px', width: '100%' }}
        />
      </Carousel.Item>
    </Carousel>
  );
    
}
