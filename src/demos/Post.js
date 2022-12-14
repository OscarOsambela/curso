import React from "react";
import { Button } from "./Button";
import { BsFillLayersFill } from 'react-icons/bs';

const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error=>console.log(error))
};

export const Post = () => {
  return (
    <div>
      <h1>Post</h1>

      <Button text="Traer datos" onClick={getData} icon={<BsFillLayersFill />}/>
    </div>
  );
};
