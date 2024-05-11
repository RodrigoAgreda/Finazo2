import './style.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Aside = () => {
    return <aside className="aside-container">
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Nombre(s)</Form.Label>
                    <Form.Control type="text" placeholder="Nombre completo" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Apellidos completos" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Dirección</Form.Label>
                <Form.Control placeholder="1234 Calle Av." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Dirección 2</Form.Label>
                <Form.Control placeholder="Departamento, estudio, o piso" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Select defaultValue="Elige...">
                        <option>Elige...</option>
                        <option>Amazonas</option>
                        <option>Ancash</option>
                        <option>Apurimac</option>
                        <option>Arequipa</option>
                        <option>Ayacucho</option>
                        <option>Cajamarca</option>
                        <option>Callao</option>
                        <option>Cusco</option>
                        <option>Huancavelica</option>
                        <option>Huanuco</option>
                        <option>Ica</option>
                        <option>Junín</option>
                        <option>La Libertad</option>
                        <option>Lambayeque</option>
                        <option>Lima</option>
                        <option>Loreto</option>
                        <option>Madre de Dios</option>
                        <option>Moquegua</option>
                        <option>Pasco</option>
                        <option>Piura</option>
                        <option>Puno</option>
                        <option>San Martín</option>
                        <option>Tacna</option>
                        <option>Tumbes</option>
                        <option>Ucayali</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>

            <br/><br/><br/>

            <Form.Group as={Row} className="mb-6">
                <Col sm={{ span: 10, offset: 2 }} className="d-flex justify-content-center">
                    <Button type="submit">
                        <i data-feather="send"></i> Enviar
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    </aside>;
}

export default Aside;