export default function Article() {
  return (
    <article className="article">
      <h2 className="article__title">That's wunwonderful!</h2>
      <label htmlFor="input_field">That's a input field</label>
      <input type="text" id="input_field" />
      <a className="article__link" href="https://react.dev/">
        React world
      </a>
    </article>
  );
}
