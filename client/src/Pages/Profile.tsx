import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../Components/Profile/UserInfo/UserInfo";

function Profile() {
    return(
        <Container>
            <Row>
                <Col xs={12} sm={3}>
                    <UserInfo />
                </Col>
                <Col xs={12} sm={9}>

                </Col>
            </Row>
        </Container>
    )
}

export default Profile;