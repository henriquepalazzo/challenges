import "./App.css";

export default function App() {
  return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
  return <h1>Someone is {isHappy ? "🥳" : "😥"}</h1>;
}
