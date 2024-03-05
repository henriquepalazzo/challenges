import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import avatar from "./assets/avatar.jpg";
import logo from "./assets/logo.jpg";
import Link from "./components/Link";
import Image from "./components/Image";

export default function App() {
  return (
    <>
      <Header>
        <Link href="#">
          <Image src={logo} alt="logo" />
        </Link>
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Image src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
