https://github.com/angular/angular/issues/44836

```
npx ng build --project fart
```

web worker is not compiling to ts when url is constructed outside of Worker 

## see this file:
```
  // projects/fart/src/app/app.component.ts
  
  // works (compiles to ts)
  const worker = new Worker(new URL('./app.worker', import.meta.url));

  // does not work (does not compile to ts.. remains ts in dist folder)
  const url = new URL('./app.worker', import.meta.url);
  const worker = new Worker(url);
```


## why was i modifying the url?
IE11 support is not enabled in this project...

However... the whole reason I wanted to modify the URL of the worker was because the worker URL was apparently not correct in IE11..
The url it was trying to pull worker from was wrong

the code was trying to pull worker from two different spots:
 - Chrome: ...mydomain.local/survey/8230219b602f9582c8b7.js
 - IE11: ...mydomain.local/survey/take/8230219b602f9582c8b7.js
 
this might be another bug... since the worker was being called from a service... 
which was injected into a lazy-loaded module on the `/take` route.
