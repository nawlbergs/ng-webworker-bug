/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});


// /// <reference lib="webworker" />
//
// /**
//  * this needs to be pure javascript until drop IE11
//  * ... one we drop IE11.. we casn update tsconfig.worker.json to include .ts files instead of .js files
//  * ... then convert this to TS.
//  */
// //import { IspLogicPayload, IWebWorkerEvent } from '@sp-survey/shared/workers/worker-interfaces';
// // interface IWebWorkerEvent<T> extends MessageEvent {
// //   data: T;
// // }
// //addEventListener('message', (event: IWebWorkerEvent<IspLogicPayload>) => {
// //  const data = event.data;
//
//
// function handleError(err){
//   const msg = err.hasOwnProperty('toString') ? err.toString() : '' + err;
//   postMessage({ status: 'error', payload: msg });
// }
// function handleSuccess(value){
//   postMessage({ status: 'success', payload: value });
// }
//
//
// const computeNextStepOpen = 'function evalNextStep(self){';
// const computeNextStepClose = '}(this)';
// function computeNextStep(codeString){
//   // tslint:disable-next-line:no-eval
//   const code = computeNextStepOpen + codeString + computeNextStepClose;
//   debugger;
//   const humm = Function(codeString).call(null);
//   debugger;
//   return humm;
// }
//
// addEventListener('message', ({ data }) => {
//   if (!data) {
//     handleError('WEB-WORKER EVENT DATA NOT FOUND');
//   }
//   debugger;
//
//
//   try{
//     switch (data.type) {
//       case 'nextPageJS':
//         const result = computeNextStep(data.payload);
//         handleSuccess(result);
//         return;
//       default:
//         handleError('WEB-WORKER EVENT TYPE NOT FOUND');
//     }
//   } catch (err) {
//     handleError(err);
//   }
// });
