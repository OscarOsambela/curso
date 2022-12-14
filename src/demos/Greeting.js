export function Greeting({ title, name = "" }) {
  console.log(title, name);
  return (
    <h1>
      Soy {name} {title}
    </h1>
  );
}

export function UserCard(props) {
  console.log(props); //Objeto
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.amount}</h2>
      <h3>{props.married ? "Married" : "Single"}</h3>
    </>
  );
}
