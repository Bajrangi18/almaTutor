import { Container,Row,Col } from "react-bootstrap"

const ExplainCards = ({image,heading,text}:{image:string,heading:string,text:string}) => {
    return(
        <Container style={{marginTop:20,marginBottom:20}}>
            <Row>
                <Col xs={2}>
                <img width="50" height="50" src={image} alt="external-kit-web-design-and-development-flatart-icons-lineal-color-flatarticons"/>
                </Col>
                <Col xs={10}>
                    <Row>
                        <h4>{heading}</h4>
                    </Row>
                    <Row>
                        <p>{text}</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default ExplainCards