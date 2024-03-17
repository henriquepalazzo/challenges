import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 3,
      name: "🥥 Coconut",
      color: "coconut",
    },
    {
      id: 4,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 5,
      name: "🥝 Kiwi",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card fruit={fruit} key={fruit.id} />
      ))}
    </div>
  );
}
