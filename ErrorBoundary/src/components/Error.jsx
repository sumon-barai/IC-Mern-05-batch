function Error({ error, onRetry }) {
  return (
    <div style={{ background: "yellow" }}>
      <h2>{error?.message}</h2>
      <button onClick={onRetry}>try again</button>
    </div>
  );
}

export default Error;
