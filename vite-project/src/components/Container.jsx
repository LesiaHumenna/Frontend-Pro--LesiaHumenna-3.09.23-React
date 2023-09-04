import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import './Container.css';

function Container() {
  return (
    <>
      <div className="class-container">
        <Card className="card card1" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img1} style={{ width: "9.50rem" }} />
          <Card.Body>
            <Card.Title className="card-title">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button className='primary' variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card card2" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img2} style={{ width: "12.5rem" }} />
          <Card.Body>
            <Card.Title className="card-title">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button className='primary' variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card card3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img3} style={{ width: "12.5rem" }} />
          <Card.Body>
            <Card.Title className="card-title">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button className='primary' variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card card4" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img4} style={{ width: "12.5rem" }} />
          <Card.Body>
            <Card.Title className="card-title">Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button className='primary' variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Container;
