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
        // Join The Array Paramter
        // Pass an boolean value or pass an Array to customize which parameter you only want to join
        join:false,

        // White list just skip parameter if the properties name is same within passed array
        whitelist: ["price"]
    }
))
```

and done, now your server is protected :)
\*probably

# may not maintained for a long time Sorry
