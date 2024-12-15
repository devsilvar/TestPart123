// State
// The state is a built-in object that stores values that belong to a component. It is managed by a within a component and it similar to a variable declared in a function. When a state changes, It causes a rerender or the react component

// To use States
// We need to first Import a state
import { useState } from 'react';
export const Basics = () => {
  const [count, setcount] = useState<number>(0);

  return (
    <div>
      The count Value is {count}
      <Child countValue={count} />
    </div>
  );
};

// Props
// Props is a way of passing data from parent to child components. The componenets reciving the props cannot change the value of the props making them immutable
const Child = ({ countValue }: { countValue: number }) => {
  return <div>I {countValue} am coming from Basics</div>;
};

// So the Difference is that: State is mutable, it can changed by anycomponents making use of it , As for props, it is immutable. meaning the component reciving the props cannot change the value of the props

// JSX
// 2.
// JSX stands for JavaScript XML. It can also be regarded as Javascript and HTML packed together. JSX allows you to write code that looks like HTML inside JavaScript. The browser. It is used in react due to  its readabilty, efficency and some of its advaced tooling. JSX makes it easy to create and manipulate the DOM in React.However it is not understood by the browser. It si converted to javascript by a tool called babel.
