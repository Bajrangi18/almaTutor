import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCards from './ProjectCards';

const ProjectView = () => {
    return(
        <Container>
            <Row gy={1}>
            <Col lg={3} md={4} sm={6} xs={6} className="mb-4"><ProjectCards imageUrl='https://i0.wp.com/srituhobby.com/wp-content/uploads/2020/05/10-1.jpg?resize=1024%2C587&ssl=1' title='LED Blinker Circuit' text='Simple circuit that blinks an LED at a fixed rate' /></Col>
            <Col lg={3} md={4} sm={6} xs={6} className="mb-4"><ProjectCards imageUrl='https://hackster.imgix.net/uploads/attachments/1316159/_Atk29eU2Si.blob?auto=compress&w=900&h=675&fit=min&fm=jpg' title='RFID-based Access Control System' text='Controls access to secure areas using RFID technology and credentials' /></Col>
            <Col lg={3} md={4} sm={6} xs={6} className="mb-4"><ProjectCards imageUrl='https://circuitdigest.com/sites/default/files/projectimage_mic/Arduino-Digital-Thermometer.jpg' title='Digital Thermometer' text='Measures temperature and displays readings on an LCD' /></Col>
            <Col lg={3} md={4} sm={6} xs={6} className="mb-4"><ProjectCards imageUrl='https://www.electronicshub.org/wp-content/uploads/2016/10/Arduino-Home-Automation-1.jpg' title='Arduino Home Automation System' text='Controls home appliances based on user inputs and sensor data' /></Col>
            <Col lg={3} md={4} sm={6} xs={6} className="mb-4"><ProjectCards imageUrl='https://maker.pro/storage/EJFrDnv/EJFrDnvQyl6nO3W7MORJJRlLkI5Mc2hGX0TeyunD.jpeg' title='Audio Amplifier' text='Amplifies sound signal and drives a speaker for enhanced audio' /></Col>
            <Col lg={3} md={4} sm={6} xs={6} className="mb-4"><ProjectCards imageUrl='https://hackster.imgix.net/uploads/attachments/1253866/_bNc5BZAeXI.blob?auto=compress&w=900&h=675&fit=min&fm=jpg' title='Wireless Weather Station' text=' Collects and displays weather data wirelessly from various sensors' /></Col>
            <Col lg={3} md={4} sm={6} xs={6} className="mb-4"><ProjectCards imageUrl='https://www.sciencebuddies.org/TDyuIDEgBTKtN6f_CV_DBudkIMU=/500x375/-/https/www.sciencebuddies.org/cdn/Files/6309/14/line-following-robot.jpg' title='Line Following Robot' text='Robot that autonomously follows a predefined path using infrared sensors' /></Col>
            <Col lg={3} md={4} sm={6} xs={6} className="mb-4"><ProjectCards imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1k4lYSJN07mpil0_xJocCHnccmP0vM_VZMaw-331JK1JfjKGcXdiEprC34EJSsJvzw38&usqp=CAU' title='Digital Oscilloscope' text='Captures and displays waveforms using FPGA or microcontroller technology' /></Col>
            </Row>
        </Container>
    )
}
export default ProjectView