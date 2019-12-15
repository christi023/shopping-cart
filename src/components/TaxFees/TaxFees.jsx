import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class TaxFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est. taxes & fees (Based on 94085)</Col>
        <Col md={6}> {`${this.props.taxes}`}</Col>
      </Row>
    );
  }
}
