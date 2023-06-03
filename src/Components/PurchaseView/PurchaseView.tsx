import { useParams } from 'react-router-dom';
import { Container,Row,Col,Form, Button } from 'react-bootstrap';
const PurchaseView = () => {
    const { sku } = useParams<{ sku: string }>();

    return(
        <main>
            <Container style={{backgroundColor:'transparent',fontFamily:"Work Sans"}}>
                <Row style={{marginTop:20,marginBottom:20}}>
                    <Col xs={12} lg={5} style={{backgroundColor:'transparent',marginTop:20,marginBottom:20}}>
                        <h1 style={{fontWeight:"600",fontSize:50}}>You are buying</h1>
                        <h2>{sku}</h2><br></br>
                        <h5 style={{color:'rgba(0,0,0,0.6)'}}>Proceding to Order and Checkout</h5>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <Form  style={{width:"70%",marginTop:20,marginBottom:20}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight:"600"}}>Full Name</Form.Label>
                            <Form.Control type="email" placeholder="Please Provide Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight:"600"}}>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Please Provide a Valid Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight:"600"}}>Phone</Form.Label>
                            <Form.Control type="email" placeholder="Exclude +91" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight:"600"}}>Address Line 1</Form.Label>
                            <Form.Control type="email" placeholder="Flat No, House No, Street Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight:"600"}}>Address Line 2</Form.Label>
                            <Form.Control type="email" placeholder="Locality, Area Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight:"600"}}>City</Form.Label>
                            <Form.Control type="email" placeholder="Please Provide Full Name of City" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight:"600"}}>State</Form.Label>
                            <Form.Control type="email" placeholder="Please Provide Full Name of State" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight:"600"}}>ZipCode</Form.Label>
                            <Form.Control type="email" placeholder="Please Provide Code" />
                        </Form.Group>
                        <Button>Order Now</Button>
                        </Form>
                    </Col>
                </Row>            
    </Container>
        </main>
    )
}
export default PurchaseView