import React from "react";
import { Layout } from "../layout/Layout.js";
import { CustomSlide } from "../../components/customSlide/CustomSlide.js";
import { Col, Container, Row } from "react-bootstrap";
import { ProductCard } from "../../components/ProductCard.js";

export const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <CustomSlide />
          </Row>
          <Row className="pt-5 mt-3">
            <h1>Check out our Latest Products</h1>
          </Row>
          <Row className="pt-5 mt-3">
            <Col className="pt-5 mt-3">
              <ProductCard />
            </Col>
            <Col className="pt-5 mt-3">
              {" "}
              <ProductCard />
            </Col>
            <Col className="pt-5 mt-3">
              {" "}
              <ProductCard />
            </Col>
          </Row>
          <Row className="pt-5 mt-3">
            <h2>Selling Fast!!</h2>
          </Row>
          <Row className="pt-5 mt-3">
            <Col className="pt-5 mt-3">
              {" "}
              <ProductCard />
            </Col>
            <Col className="pt-5 mt-3">
              {" "}
              <ProductCard />
            </Col>
            <Col className="pt-5 mt-3">
              {" "}
              <ProductCard />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};
