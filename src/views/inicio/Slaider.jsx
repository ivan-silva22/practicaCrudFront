import Carousel from 'react-bootstrap/Carousel';

const Slaider = () => {
    return (
        <Carousel>
      <Carousel.Item className="slaiderItem">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg"
          width={50}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="slaiderItem">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="slaiderItem">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default Slaider;