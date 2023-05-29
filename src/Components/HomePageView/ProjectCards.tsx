import { Card, Button } from 'react-bootstrap';
const ProjectCards = ({imageUrl,title,text}:{imageUrl:string,title:string,text:string}) => {
    return(
        <Card className="w-100 h-100 d-flex flex-column" style={{fontFamily:'Work Sans',backgroundColor:'#f8f8fb',border:'none',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)'}} >
        <Card.Img variant="top" src={imageUrl} alt="Card Image" style={{height:180,objectFit:'cover',filter:'brightness(60%)'}} />
        <div style={{position:'absolute',margin:10}}>
        <Card.Title style={{ color: 'white', fontWeight: '600' }}>{title}</Card.Title>
        </div>
        <Card.Body>
          <Card.Text style={{ fontWeight: '500', flex: '1 0 auto' }}>{text}</Card.Text>
        </Card.Body>
        <Card.Text>
        <Button onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.02)';}}onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)';}}  
        style={{ backgroundColor: '#0848b9',margin:10,transition: 'transform 0.2s ease',fontWeight:"600",display:'inline-block',width:'auto'}}>Buy Now</Button>
        </Card.Text>
      </Card>
    )
}
export default ProjectCards