import React from 'react';
import fb from './../files/cc1cf250-f768-11ea-b689-21b57d688c9a.jpg';
import content from './../files/content-writing-1.jpg';
import customer from './../files/customer service.jpg';
import photographer from './../files/photographer.jpeg';
import photoshop from './../files/photoshop.png';
import ecommers from './../files/e commerce.jpg';
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";
const Body = () => {
    return (
        <Container>
        <Row>
          <Col>
            <Card>
              <CardImg top src={fb} />
              <CardBody>
                <p>This is the body of the card.</p>
              </CardBody>
            </Card>
          </Col>
  
          <Col>
            <Card>
              <CardImg top src={content} />
              <CardBody>
                <p>This is the body of the card.</p>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardImg top src={customer} />
              <CardBody>
                <p>This is the body of the card.</p>
              </CardBody>
            </Card>
          </Col>

        </Row>
        <Row style={{marginTop:'10px'}}>
          <Col>
            <Card>
              <CardImg top src={photographer} />
              <CardBody>
                <p>This is the body of the card.</p>
              </CardBody>
            </Card>
          </Col>
  
          <Col>
            <Card>
              <CardImg top src={photoshop} />
              <CardBody>
                <p>This is the body of the card.</p>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardImg top src={ecommers} />
              <CardBody>
                <p>This is the body of the card.</p>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </Container>
    );
};

export default Body;