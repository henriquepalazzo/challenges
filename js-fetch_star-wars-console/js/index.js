console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const LeiaOrgana = data.results.find(
      (result) => result.name === "Leia Organa"
    );
    console.log(
      `${LeiaOrgana.name} was born in ${LeiaOrgana.birth_year}, is ${LeiaOrgana.height} height and has ${LeiaOrgana.eye_color} eyes. Her hair is ${LeiaOrgana.hair_color} and she participated in ${LeiaOrgana.films.length} films.`
    );
    const r2d2 = data.results.find((result) => result.name === "R2-D2");
    console.log("R2-D2 Eyes color: " + r2d2.eye_color);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
