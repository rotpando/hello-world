import React      from "react";
import { Link }   from "react-router-dom";
import { Button, Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";


const Admin = () => {
    return (
        <div >
            <Container className="marginContent">
                <div className="centrarTitulo">
                    <Row>
                        <Col><h4> PERFIL DEL ADMIN </h4></Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Link to="/admin/users">
                            <Button variant="dark" className="button"> Administrar Usuarios </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/admin/courses">
                            <Button variant="dark" className="button"> Administrar Cursos </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/admin/categories">
                            <Button variant="dark" className="button"> Administrar Categorías </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/admin/orders">
                            <Button variant="dark" className="button"> Historial de Órdenes </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};


export default Admin;