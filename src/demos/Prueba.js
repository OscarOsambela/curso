import React, { useState, useEffect } from "react";
import { getData } from "../services/data";

const Prueba = () => {
  const [item, setItems] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    getData().then((res) => {
      const aux = res;
      console.log("aux____", aux);
      setItems(aux);
    });
  };

  return (
    <>
      <h1>Prueba</h1>
      <div>
        {item.map((i) => {
          return (
            <div
              style={{
                margin: "10px 20px",
                border: "1px solid",
                padding: "10px",
                width: "20rem",
              }}
            >
              <h3>{i.name}</h3>
              <h4>{i.email}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Prueba;
//https://github.com/ZeroxBit/react-services/tree/master/services