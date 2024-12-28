import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowAltCircleRight } from "react-icons/fa";


function Cards({img,title,desc}) {
  return (
    <Card style={{ width: '18rem',margin:'10px',}} >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <FaArrowAltCircleRight style={{height:"30px",width:"30px",margin:"10px"}}/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;