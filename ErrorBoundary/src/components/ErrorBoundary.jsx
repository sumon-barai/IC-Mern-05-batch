import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, retryKey: 0 };
    // this.handleRetry = this.handleRetry.bind(this);
  }

  /* state = {
    hasError: false,
    error: null,
  };
 */

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error, retryKey: 0 };
  }

  componentDidCatch(error, info) {
    console.log(error.message);
    console.log(info.componentStack);
  }

  handleRetry = () => {
    this.setState((prev) => {
      return {
        hasError: false,
        error: null,
        retryKey: prev.retryKey + 1,
      };
    });
  };

  render() {
    const { children, fallback: Fallback } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      return <Fallback error={error} onRetry={this.handleRetry} />;
    }

    return children;
  }
}

export default ErrorBoundary;
