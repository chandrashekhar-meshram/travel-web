import Carousel from 'react-bootstrap/Carousel';
import img_snow from './img_snow.jpg';
import img from './img.jpeg'

function CarouselFade() {
  return (
    <Carousel fade style={{width:'400px', maxHeight:'200px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img_snow}
          alt="First slide"
        />
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>   
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img_snow}
          alt="First slide"
        />
      </Carousel.Item>   
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>       
    </Carousel>
  );
}

export default CarouselFade;