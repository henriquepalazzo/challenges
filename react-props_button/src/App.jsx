import "./App.css";

export default function App() {
  function handleClick() {
    alert("Noooo! You did it...");
  }
  return (
    <>
      <Button color="#ffcc00" text="Click here NOW!" onClick={handleClick} />
      <Button
        color="#ff0000"
        text="Don't click me!"
        onClick={handleClick}
        disabled
      />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
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
      onClick={onClick}
    >
      {text}
    </button>
  );
}
