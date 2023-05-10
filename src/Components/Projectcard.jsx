
import Card from 'react-bootstrap/Card';
import './Projectcard.css';
import { ProjectListFrontend,ProjectListData } from '../Utils/ProjectList';

const Projectcard = (props) => {
  
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className='cardtext'>
          {props.description}
        </Card.Text>
        <a href={props.link} target="_blank" className='btn btn-warning btn-md' variant="warning">{props.buttontext}</a>
      </Card.Body>
      
    </Card>
  );
}

export default Projectcard;