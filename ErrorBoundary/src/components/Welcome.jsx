function Welcome() {
  console.log("welcome comp");
  if (Math.random() > 0.5) {
    throw new Error("this is welcome component error");
  }
  return (
    <div style={{ background: "green", padding: "50px" }}>
      this is welcome page
    </div>
  );
}

export default Welcome;
