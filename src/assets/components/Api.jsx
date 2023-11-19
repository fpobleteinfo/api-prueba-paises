import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tags from "./Tags";
import ListGroup from 'react-bootstrap/ListGroup';


export const Api = ({ data, setData }) => {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,unMember,translations";
  //const url = 'https://restcountries.com/v3.1/name/chile?fields=name,capital,region,population,flags'

  //fetch con async/await
  const apiData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Ha habido un error en la API");
      }
      const info = await response.json();
      //setData(info); //datos originales sin ordenar

      const infoOrdenada = info.sort((a, b) => a.name.common.localeCompare(b.name.common));

      setData(infoOrdenada); //datos ordenados

    } catch (error) {
      console.error({ message: error });
    }
  };

  const obtenerColorTag = (region) => {
    switch (region) {
      case "Asia":
        return "danger";
      case "Europe":
        return "success";
      case "Americas":
        return "primary";
      case "Africa":
        return "warning";
      case "Oceania":
        return "info";
      default:
        return "secondary";
    }
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {data.map((c, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={c.flags.svg} />
              <Card.Header>{c.translations.spa.common}</Card.Header>
              <Card.Body>
                <Card.Subtitle>
                  <Tags
                    colorTag={obtenerColorTag(c.region)}
                    region={c.region}
                  />
                </Card.Subtitle>
                <Card.Subtitle className="UN">
                  {c.unMember ? (
                    <img
                      src="/UN_emblem.png"
                      style={{ width: "20%", height: "20%" }}
                      alt="UN Emblem"
                    />
                  ) : null}
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Capital: {c.capital}</ListGroup.Item>
                  <ListGroup.Item>Habitantes: {c.population.toLocaleString('es')}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
