import "./App.css";

export default function App() {
  return (
    <>
      <Button color="#ffcc00" text="Click here NOW!" />
      <Button color="#ff0000" text="Don't click me!" disabled />
    </>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button
      style={{
        backgroundColor: color,
        border: 0,
        padding: 20,
        borderRadius: 5,
        fontSize: 20,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
