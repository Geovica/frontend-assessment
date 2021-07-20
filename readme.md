# frontend-assessment
- This is made using Vuejs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
# App running at:
  - Local:   http://localhost:8080/ 
### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## BANANA

`'b' + 'a' + + 'a' + 'a'`
...is evaluated as....
`'b' + 'a' + (+'a') + 'a'`


`(+'a')` attempts to convert `'a'` to a number using the unary plus operator. Because `'a'` is not a number, the result is NaN `("Not a Number")`:
`'b'  +  'a'  +  NaN  + 'a'`
Although NaN stands for "Not a Number", it's still a numeric type; when added to strings, it concatenates just as any other number would:
`'b'  +  'a'  +  NaN  + 'a'  =>  'baNaNa'`

Finally, it's lowercased:
`'baNaNa'.toLowerCase()      =>  'banana'`

toLowerCase() results to `"banana"`