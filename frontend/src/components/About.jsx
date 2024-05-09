import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi"; 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p className="para">
              The only thing we are serious about is food.
            </p>
          </div>
          <p className="mid">
            We are a group of passionate individuals who believe in the power of food. We are a team of talented chefs who are passionate about creating delicious food. We are a group of foodies who are passionate about eating delicious food. We are a team of food lovers who are passionate about sharing delicious food with the world.
          </p>
          <Link to={'/'}>
            Explore Menu {" "}
            <span>
                <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
