import { Col, Card } from 'react-bootstrap';

function AnimeCard({ title, description, image, link }) {
  return (
    <Col>
      <Card className=''>
        <Card.Img alt={title} src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href={link} target='_blank' className='btn btn-primary'>Learn more</a>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default AnimeCard;