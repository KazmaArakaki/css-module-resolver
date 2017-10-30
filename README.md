# css-module-resolver

This package serves smarter way to use multiple classNames for react css module.

## Installation

``` sh
npm install css-module-resolver
```

## Without css-module-resolver

``` js
import React from "react";
import ReactDOM from "react-dom";
import styles from "./style.css";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.heading + " " + styles.bold}>
          Hello
        </h1>

        <p className={`${styles.row} ${styles.italic}`}>
          World
        </p>
      </div>
    );
  }
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById("app")
);
```

## With css-module-resolver

``` js
import React from "react";
import ReactDOM from "react-dom";
import cssResolver from "css-module-resolver";
import styles from "./style.css";

const cr = cssResolver(styles);

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 className={cr("heading", "bold")}>
          Hello
        </h1>

        <p className={cr("row", "italic")}>
          World
        </p>
      </div>
    );
  }
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById("app")
);
```
