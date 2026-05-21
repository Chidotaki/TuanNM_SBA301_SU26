import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Myprofile from './components/Myprofile'
import { Container, Row, Col } from 'react-bootstrap';

function App() {

    const students = [
    { name: "Nguyen Minh Tuan", id: "SV001", avatar: '/images/avatar.jpg' },
    { name: "Tran Thi Hang", id: "SV002", avatar: '/images/avatar1.jpg' },
    { name: "Pham Van Nam", id: "SV003", avatar: '/images/avatar2.jpg' },
    { name: "Hoang Thi Linh", id: "SV004", avatar: '/images/avatar3.jpg' },
    { name: "Vu Minh Duc", id: "SV005", avatar: '/images/avatar4.jpg' },
    { name: "Ngo Thi Huong", id: "SV006", avatar: '/images/avatar5.jpg' },
    { name: "Dang Van Phuc", id: "SV007", avatar: '/images/avatar6.jpg' },
    { name: "Ly Thi Kim", id: "SV008", avatar: '/images/avatar7.jpg' },
    { name: "Bui Van Thanh", id: "SV009", avatar: '/images/avatar8.jpg' },
    { name: "Do Minh Hieu", id: "SV010", avatar: '/images/avatar9.jpg' }
  ];

  return (
    <Container>
      <h1 className = "my-4">My Profile</h1>
        <Row className="g-4">
        {students.map((student) => (
          <Col key={student.id} md={4}>
            <Myprofile person={student} />
          </Col>
        ))}
      </Row>
    </Container>

  )
}

export default App
