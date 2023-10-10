import "./App.css";
import Header from "./Components/Header/Header";
import "./index.css";
import Banner from "./Components/banner";
import { Container } from "@mui/material";
import Section from "./Components/Section";
import MovieList from "./Components/Movies/MovieList";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Section title="What's Popular" items={["ON TV", "ON Theaters"]} />
        <MovieList />
      </Container>
    </>
  );
}

export default App;
