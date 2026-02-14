function User() {
  console.log("user comp");
  if (Math.random() > 0.5) {
    throw new Error("this is User component error");
  }
  return (
    <div style={{ background: "red", padding: "50px" }}>
      <h1>sumon</h1>
      <p>address:khulna</p>
    </div>
  );
}

export default User;
