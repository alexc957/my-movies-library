import React from "react";

export default function withLogger<P, S>(
  WrappedComponent: any,
  logger?: () => void
) {
  class WithLogger extends React.Component<P, S> {
    static displayName: string = `withLogger(${getDisplayName(
      WrappedComponent
    )})`;
    componentDidMount() {
      logger ? logger() : console.log("I am mounting lol");
    }

    render(): React.ReactNode {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
}
function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
