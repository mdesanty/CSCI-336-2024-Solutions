function ChuckJoke({ joke }) {
  return (
    <div className="chuck-joke">
      <div className="joke-text">#{joke.id}: {joke.value}</div>
      <span className="joke-info">in {joke.category} by {joke.author}</span>
    </div>
  );
}

export default ChuckJoke;