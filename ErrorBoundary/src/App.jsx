import Welcome from "./components/Welcome";
import User from "./components/User";
import ErrorBoundary from "./components/ErrorBoundary";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <ErrorBoundary fallback={Error}>
        <Welcome />
      </ErrorBoundary>
      <ErrorBoundary fallback={Error}>
        <User />
      </ErrorBoundary>
    </div>
  );
}

export default App;
