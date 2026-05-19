import Carousel from 'react-bootstrap/Carousel';
import { orchids } from '../data/OrchidsListData';
import { carouselSlides } from '../data/Banner';


function OrchidsCarousel() {
    return (
        <Carousel>
      {carouselSlides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.title}
            style={{ height: '480px', objectFit: 'contain', backgroundColor: '#212529' }}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default OrchidsCarousel;