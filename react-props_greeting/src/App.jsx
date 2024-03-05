import "./App.css";

export default function App() {
  return (
    <>
      <Greeting name="Oswald de Andrade" />
      <Greeting name="Jan" />
    </>
  );
}

function Greeting({ name }) {
  const coaches = ["Jan", "Sven", "Marcell", "Klaus", "Gimena"];
  return <h1>Hello, {coaches.includes(name) ? "coach" : name}! 👋🏻</h1>;
}
