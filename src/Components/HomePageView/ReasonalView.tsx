import { Container, Row, Col, Image } from 'react-bootstrap';

const ReasonalView = () => {
  return (
    <Container fluid style={{backgroundColor:'#f8f8fb',fontFamily:'Work Sans'}}>
            <Container>
            <Row>
                <Col xs={12}><br></br>
                <h3 style={{fontWeight:"700"}}>Experience the joy of building and unleash your engineering potential with Alma-Tutor</h3>
                <br></br>
                <Container>
                    <Row>
                        <Col xl={7} lg={12} md={12} sm={12}>
                        <p style={{textAlign:'justify'}}>
                        Alma-Tutor fuels excitement in education, reigniting hands-on learning and igniting passions for technology. Our captivating courses, projects, and tutorials empower students to envision a remarkable future. Explore diverse engineering domains with ready-made projects and tailored college-level courses.                
                        </p>
                        </Col>
                        <Col xl={5} lg={12} md={12} sm={12} style={{}}>
                        <TriImageComponent image1='https://assets.skyfilabs.com/images/blog/electronics-project.webp' 
                        image2='https://nevonprojects.com/wp-content/uploads/2022/04/8-tho-jansen-spider-smpg.jpg' 
                        image3='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Cr-wgbf-pYm1HYqG8dwMtbBRaI_VC95yyA&usqp=CAU'
                        image4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVKv5y6fb1MLKY3AP68xLGZNb-K24yJCEJ9Q&usqp=CAU"
                        image5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoE3-zIuXDyERsHzXd0-xqg4MxEU1n81flqQ&usqp=CAU" />
                        </Col>
                    </Row>
                </Container>
                </Col>
            </Row>
            <br></br><br></br>
            <Row>
                <Col lg={4} md={4} sm={6}>
                <ReasonalCard title="Hands-on Learning" text='We emphasize hands-on project building, reigniting the joy of experiential learning in engineering education' image={require("../Helpers/handson.png")}  />
                </Col>
                <Col lg={4} md={4} sm={6}>
                <ReasonalCard title="Passion Cultivation" text='Through exciting courses, students cultivate a deep passion for technology, inspiring them to dream big and innovate' image={require("../Helpers/passion.png")}  />
                </Col>
                <Col lg={4} md={4} sm={6}>
                <ReasonalCard title="Extensive Offerings" text='Explore our ready-made projects, tutorials, and specialized courses across engineering domains, crafted for college-level learning.' image={require("../Helpers/comprehensive.png")}  />
                </Col>
            </Row>
            </Container>
    </Container>
  );
};

export default ReasonalView;

const TriImageComponent = ({ image1, image2, image3,image4,image5 }:{image1:string, image2:string, image3:string,image4:string,image5:string}) => {
    return (
      <Container>
        <Row style={{justifyContent:'center',alignItems:'center'}}>
            <Image src={image4} style={{height: '17%',width: '17%',aspectRatio: '1/1',objectFit:'cover',borderRadius:"50%",left:"10%",position:'relative',border: '3px solid #f8f8fb',display:'block',padding:'0'}} />
            <Image src={image3} style={{height: '19%',width: '19%',aspectRatio: '1/1',objectFit:'cover',borderRadius:"50%",left:"5%",position:'relative',zIndex:1,border: '3px solid #f8f8fb',display:'block',padding:'0'}} />
            <Image src={image2} style={{height: '22%',width: '22%',aspectRatio: '1/1',objectFit:'cover',borderRadius:"50%",position:'relative',zIndex:2,border: '3px solid #f8f8fb',display:'block',padding:'0'}} />
            <Image src={image1} style={{height: '19%',width: '19%',aspectRatio: '1/1',objectFit:'cover',borderRadius:"50%",right:"5%",position:'relative',zIndex:1,border: '3px solid #f8f8fb',display:'block',padding:'0'}} />
            <Image src={image5} style={{height: '17%',width: '17%',aspectRatio: '1/1',objectFit:'cover',borderRadius:"50%",right:"10%",position:'relative',border: '3px solid #f8f8fb',display:'block',padding:'0'}} />
        </Row>
      </Container>
    );
  };

const ReasonalCard = ({title,text,image}:{title:string,text:string,image:string}) => {
    return(
        <Container>
            <Row>
                <Col xs={7}>
                <Row>
                    <h5 style={{fontWeight:"600"}}>
                        {title}
                    </h5>
                </Row>
                <Row>
                    <p style={{fontSize:14}}>{text}</p>
                </Row>
                </Col>
                <Col xs={5} style={{justifyContent:'center',alignItems:'center'}}><Image src={image} style={{height: '90%',width: '90%',aspectRatio: '1/1',objectFit:'contain'}}/></Col>
            </Row>
        </Container>
    )
}

