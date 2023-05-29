import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel style={{fontFamily:'Work Sans'}} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://set.jainuniversity.ac.in/academics/electronics-and-communications/images/m-electronics.jpg"
          alt="First slide"
          style={{objectFit:'cover',height:400,filter:'brightness(60%)'}}
        />
        <Carousel.Caption>
          <h3>Projects</h3>
          <p>We offer readymade engineering projects, spanning various disciplines, to empower students with practical knowledge, time-saving solutions, and academic success, while meeting industry standards and promoting innovation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.elearningindustry.com/wp-content/uploads/2019/09/online-courses-what-students-want.jpg"
          alt="Second slide"
          style={{objectFit:'cover',height:400,filter:'brightness(60%)'}}
        />
        <Carousel.Caption>
          <h3>Courses</h3>
          <p>
We provide specialized courses in Embedded Systems, Software Development, and more, empowering engineering students with practical skills, industry knowledge, and fostering innovation for academic and professional success.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/v2/resize:fit:6992/1*4zSnhMZdCzN-R92RbvM76Q.jpeg"
          alt="Third slide"
          style={{objectFit:'cover',height:400,filter:'brightness(60%)'}}
        />
        <Carousel.Caption>
          <h3>Tutorials</h3>
          <p>We offer free, curated tutorials for engineering students, covering hardware and software aspects, tailored to each branch's specific needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel

