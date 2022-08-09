import { Center } from "@chakra-ui/react";
import React, { Component, ErrorInfo } from "react";
import Layout from "./components/Layout/Layout";

type ClassProps = {
  children: React.ReactNode;
};

type ClassState = {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
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

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error);
    console.error("error info", errorInfo);
    this.setState({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <Center>
          <p>{this.state.error?.name}</p>
          <p>{this.state.error?.message}</p>
          <p>{this.state.errorInfo?.componentStack}</p>
        </Center>
      );
    }
    return this.props.children;
  }
}
