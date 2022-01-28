import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fart';
}


if (typeof Worker !== 'undefined') {

  // works
  // const worker = new Worker(new URL('./app.worker', import.meta.url));

  // does not work
  const url = new URL('./app.worker', import.meta.url);
  const worker = new Worker(url);


  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}
