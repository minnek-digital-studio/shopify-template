
## EXAMPLE of calls to the variables and functions on this carpet

Using global `header.scss`
```scss
@use "../global";

header {
  width: global.rem-calc(10px);
  color: global.$ysw-color-black;
}
```

them create a file for it on `./src/sections/header.ts`

```ts
import "../sass/sections/header.scss";
```
