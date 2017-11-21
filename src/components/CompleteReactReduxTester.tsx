import { RootState } from '../reducers/';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/';

export interface ComponentProperties {
  increment: () => (dispatch: Dispatch<RootState>) => void;
  decrement: () => (dispatch: Dispatch<RootState>) => void;
  store: any
}

export interface ComponentState {
  counter: number;
}

class CompleteReactReduxTester extends React.Component<
  ComponentProperties,
  ComponentState
> {
  constructor(props: ComponentProperties) {
    super(props);
    this.downClickedHandler = this.downClickedHandler.bind(this);
    this.upClickedHandler = this.upClickedHandler.bind(this);
    this.state = { counter: 0 };
  }

  upClickedHandler() {
    this.props.increment();
  }

  downClickedHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <div>
        <div>React connect to redux: {this.state.counter}</div>
        <div>
          <button onClick={this.upClickedHandler}>Up</button>
        </div>
        <div>
          <button onClick={this.downClickedHandler}>Down</button>
        </div>
        <div />
      </div>
    );
  }
}

function mapStateToProps(state: RootState): ComponentState {
  return {
    counter: state.react.reactCounter
  };
}

function mapDispatchToProps(dispatch: Dispatch<RootState>) {
  return {
    increment: bindActionCreators(actions.incrementReact, dispatch),
    decrement: bindActionCreators(actions.decrementReact, dispatch)
  };
}

export default connect<{}, {}, ComponentProperties>(
  mapStateToProps,
  mapDispatchToProps
)(CompleteReactReduxTester) as React.ComponentClass<{}>;
