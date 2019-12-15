import React, { Component } from 'react';
import { Button, Collapse, Container, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div>
        <Button
          input="true"
          className="item-details-button"
          value="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <Container>
                <img
                  width={100}
                  height={100}
                  alt="thumbnail"
                  src="https://www.ikea.com/se/sv/images/products/markus-office-chair-glose-black__0724707_PE734589_S5.JPG?f=xxs"
                />

                <Media.Body>
                  <p>Essentials by marcus office black chair</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}> Qty: 1</Col>
                  </Row>
                </Media.Body>
              </Container>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
