import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const WelcomePage = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="../assets/hello.png" />
        </div>
        <div>
          <img src="../assets/hello2.png" />
        </div>
        <div>
          <img src="../assets/hello3.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default WelcomePage;
