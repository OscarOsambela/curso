import { Button } from "./demos/Button";
import { ComponenteClase } from "./demos/ComponenteClase";
import { Greeting, UserCard } from "./demos/Greeting";
import TaskCard, { Task } from "./demos/TaskCard";

import { Post } from "./demos/Post";
import Prueba from "./demos/Prueba";

function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {/* <Greeting title={"React"} name={"Joe"} />
      <Greeting title={"JSX"} />
      <Greeting title={"Javascript"} />
      <Greeting title={"Router"} name={"Jason"} />
      <Greeting title={"ReactDom"} name={"Jill"} />
      <hr />
      <UserCard
        name="Jan Ray"
        amount={3000}
        married={true}
        points={[99, 130, 1250]}
        address={{
          street: "123 Street View",
          city: "New York",
        }}
      />
      <Button text="click" buttonStyle="btn--danger--solid" buttonSize="btn--medium"/>
      <Button text="Declinate" buttonStyle="btn--success--outline" buttonSize="btn--large"/>
      <Button />
      <Button text="Aceptar" buttonStyle="btn--warning--outline"/>

      <UserCard
        name="Cloe Ray"
        amount={1200}
        married={false}
        points={[99, 130, 1250]}
        address={{
          street: "582 Street Avenue",
          city: "Chicago",
        }}
      />
      <hr /> */}
      {/* <TaskCard ready={true} text="Mi primera tarea" />
      <TaskCard ready={false} text="Mi segunda tarea" />
      <Task />
      <ComponenteClase />
      <input onChange={handleChange} />
      <Post /> */}
      <Prueba/>
    </>
  );
}

export default App;
