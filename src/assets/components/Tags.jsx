import React from "react";
import Badge from "react-bootstrap/Badge";

const Tags = ({colorTag,region}) => {
  return (
    <>
      <Badge bg={colorTag} text="white">{region}</Badge>
    </>
  );
};

export default Tags;
