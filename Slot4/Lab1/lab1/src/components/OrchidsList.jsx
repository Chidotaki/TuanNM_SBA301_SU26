import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { orchids } from '../data/OrchidsListData';

function OrchidsList() {
    return (
        <Container className="my-5">
      <h2 className="text-center fw-bold text-success mb-1">🌺 Orchid Collection</h2>
      <p className="text-center text-muted mb-4">Explore our handpicked selection of rare and beautiful orchids</p>
      <Row>
        {orchids.map((orchid) => (
          <Col md={3} key={orchid.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded-3">
              <Card.Img
                variant="top"
                src={orchid.image}
                className="rounded-top-3"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-semibold text-dark">{orchid.name}</Card.Title>
                <Card.Text className="text-muted small">
                  Category: <span className="text-success fw-medium">{orchid.category}</span>
                </Card.Text>
                <Button variant="success" size="sm" className="mt-auto rounded-pill">
                  Detail
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    )
}
export default OrchidsList;