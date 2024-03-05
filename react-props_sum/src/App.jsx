import "./App.css";

export default function App() {
  return <Sum valueA={3} valueB={3} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      The result of the sum of {valueA} and {valueB} is: {sum}
    </h1>
  );
}
