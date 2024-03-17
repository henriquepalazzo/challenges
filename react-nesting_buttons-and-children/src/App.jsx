import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Click me</Button>
      <Button>Use me</Button>
      <Button>Don't do it</Button>
      <Button>Go for it</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
