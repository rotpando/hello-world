import { Card as Rcard, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addCourseToCart } from "../state/cart";

import { setCourse } from "../state/course";



import "../assets/styles/general.css";
import "../assets/styles/card.css";


function Card({ course }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(setCourse(course));
    navigate(`/course/${course.id}`);
  };
  const handleCartClick = () => {
    // courses queda en NULL o con un ARR con contenido
    let courses = JSON.parse(localStorage.getItem("courses"));
    if (!courses) {
      localStorage.setItem(`courses`, JSON.stringify([course]));
    } else {
      courses.push(course);
      localStorage.setItem(`courses`, JSON.stringify(courses))
    }
  };

  const userHandleCartClick = () => {
    dispatch(addCourseToCart({ userId: user.id, courseId: course.id }));
  };
  return (
    <div>
      <div className="card">
        <div id="cardImgCont"><img id="cardImg" onClick={handleClick} variant="top" src={course.image} /></div>
        <div id="cardDesc">
          <Rcard.Title>{course.title}</Rcard.Title>
          <Rcard.Text>{course.description}</Rcard.Text>
        </div>
        <div>${course.price}</div>
        <div id="cardFooter">
          {user.id ? (
            <Button onClick={userHandleCartClick} variant="primary">
              Agregar 
            </Button>
          ) : (
            <Button onClick={handleCartClick} variant="primary">
              Agregar
            </Button>
          )}
          <Link to="/cart">
<<<<<<< HEAD
            <Button variant="primary">Ir al carrito</Button>
=======
            <Button variant="primary">Go to cart</Button> {/* no deberia decir comprar y redirigir a checkout? */}
>>>>>>> d7215305692aac7e8fdd203b33de0aac4c2ee447
          </Link>
          </div>
      </div>
    </div>
  );
}

export default Card;
