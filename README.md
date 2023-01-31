# express-parameter-polution

this is an express parameter polution sanitize

works array nested in an object query

install it

```
npm i express-parameter-polution
```

and then Just import it

CJS :

```
const EPP = require("express-parameter-polution");
```

or

ES6 :

```
import EPP from "express-parameter-polution";
```

then use it with

```
app.use(EPP());
```

# Options

you can attach an options in the middleware example :

```
app.use(EPP(
    {
        join:false,
        whitelist: ["price"]
    }
))
```

or

```
app.use(EPP(
    {
        join:["price"]
    }
))
```

#### Options Explanation

```
app.use(EPP(
    {
        // Join The Array Parameter
        // Pass an boolean value or pass an Array to customize which parameter you want to join
        // if your join boolean value is false it will take the first element in Array Query value
        // !!! if the parameter name is not within your given array, your parameter will stay in array form BECAREFUL

        join:false,

        // White list just to skip some parameter if the properties name is within your given array
        whitelist: ["price"]
    }
))
```

and done, now your server is protected :)
\*probably

###### may not maintained for a long time Sorry
