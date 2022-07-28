import React, { Component, ErrorInfo } from "react";

type ClassProps = {
  children: React.ReactNode;
};

type ClassState = {
  hasError: boolean;
};

export default class ErrorBoundaryHandler extends Component<
  ClassProps,
  ClassState
> {
  constructor(props: ClassProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorIfo: ErrorInfo) {
    console.error(error);
    console.error("error info", errorIfo);
  }
  render() {
    if (this.state.hasError) {
      return <h2>I have an error lol</h2>;
    }
    return this.props.children;
  }
}
