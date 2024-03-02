import "./global.css";
import "./components/post";

document.querySelector<HTMLDivElement>(
  "#app"
)!.innerHTML = `<f-post nickname="Ralph" creationdate="2 Hours Ago" commentcount="10" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id
    unde quisquam enim ullam ex quaerat velit numquam autem temporibus.
    Aut ex vel necessitatibus, optio maxime debitis! Quo, inventore">
</f-post>`;
