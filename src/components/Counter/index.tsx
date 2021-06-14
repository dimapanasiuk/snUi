import React from "react";
import { connect } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../../redux/actions/counterActions";

interface ICounter {
  counter: number;
  decrementCounter: () => void;
  incrementCounter: () => void;
}

const Counter: React.FC<ICounter> =({incrementCounter, decrementCounter, counter}: any) => {
  
  return (
    <div>
    <button onClick={incrementCounter}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
    <h1>{counter}</h1>
  </div>
  );
}

const mapStateToProps = (state: any) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
