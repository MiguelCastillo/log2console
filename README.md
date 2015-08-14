## log2console

Helper method to log to console. It looks at the type of the input to figure if it should be logged with `console.log` or `console.error`. It also takes into account the platform (node/browser) to determine the best format for the data to be logged.

log2console is a method, and it only takes one parameter.

``` javascript
log2console({hello: "world"});
log2console(new Error("Some random error"));
```

### Licensed under MIT
