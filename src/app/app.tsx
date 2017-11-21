import * as React from 'react';
import { Hello, HowAreYou, Mood, TickTock, News, CountUp, SimpleReduxTester, SimpleReduxActTester, CompleteReactReduxTester } from '../components/';
import { store } from '../store';

const content = (
  <div id="container">
    <h2>Welcome to React with Typescript!</h2>
    <Hello />
    <HowAreYou mood={Mood.Happy} />
    <div id="timercontainer"><TickTock /></div>
    <News />
    <CountUp />
    <SimpleReduxTester />
    <SimpleReduxActTester />
    <CompleteReactReduxTester store={store} />
  </div>
);

export class App extends React.Component<undefined, undefined> {
  render() {
    return content;
  }
}
