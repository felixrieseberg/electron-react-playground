import * as React from 'react';
import * as actions from '../actions/';
import { store } from '../store';

export interface ComponentProperties {}

export interface ComponentState {
  counter: number;
}

class SimpleReduxTester extends React.Component<
  ComponentProperties,
  ComponentState
> {
  constructor(props: ComponentProperties) {
    super(props);
    this.downClickedHandler = this.downClickedHandler.bind(this);
    this.upClickedHandler = this.upClickedHandler.bind(this);

    this.state = { counter: store.getState().normal.normalCounter };

    store.subscribe(() => {
      const newCount = store.getState().normal.normalCounter;
      this.setState({ counter: newCount });
    });
  }

  upClickedHandler() {
    store.dispatch(actions.incrementCounter());
  }

  downClickedHandler() {
    store.dispatch(actions.decrementCounter());
  }

  render() {
    return (
      <div>
        <div>Normal Redux: {this.state.counter}</div>
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

export default SimpleReduxTester;
