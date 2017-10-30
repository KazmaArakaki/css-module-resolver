# css-module-resolver

This package serves smarter way to use multiple class names for react css module.

## Without css-module-resolver

``` js
import React from "react";
import ReactDOM from "react-dom";
import styles from "./style.css";

class MyComponent extends React.Component {
  render() {
    return (
      <h1 className={styles.heading + " " + styles.bold}>
        Hello
      </h1>

      <p className={`${styles.row} ${styles.italic}`}>
        World
      </p>
    );
  }
}
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
      <h1 className={cr("heading", "styles.bold")}>
        Hello
      </h1>

      <p className={cr("styles.row", "styles.italic"}>
        World
      </p>
    );
  }
}
```

## Installation

``` sh
npm install css-module-resolver
```
