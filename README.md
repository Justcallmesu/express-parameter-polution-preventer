# express-parameter-polution-preventer

this is an express parameter polution preventer

works array nested in an object query

install it

```
npm i @justcallmesu/express-parameter-polution-preventer
```

and then Just import it

CJS :

```
const EPPP = require("@justcallmesu/express-parameter-polution-preventer");
```

or

ES6 :

```
import EPPP from "@justcallmesu/express-parameter-polution-preventer";
```

then use it with

```
app.use(EPPP());
```

# Options

you can attach an options in the middleware example :

```
app.use(EPPP(
    {
        join:false,
        whitelist: ["price"]
    }
))
```

or

```
app.use(EPPP(
    {
        join:["price"]
    }
))
```

#### Options Explanation

```
app.use(EPPP(
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
