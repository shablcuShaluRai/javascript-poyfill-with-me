// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

function fetchDataWithTimeOut(url, timeout) {
  // AbortController: The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired.
  const controller = new AbortController();
  //   The AbortSignal interface represents a signal object that allows you to communicate with a DOM request (such as a fetch request) and abort it if required via an AbortController object.
  const { signal } = controller;
  console.log("controller", controller);

  let timeId = setTimeout(() => {
    //Returns an AbortSignal instance that is already set as aborted.
    controller.abort();
  }, timeout);

  return fetch(url, { signal })
    .then((resp) => {
      if (timeId) {
        clearTimeout(timeId);
      }
      return resp.json();
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        throw new Error("Oh! no call has aborted");
      } else {
        throw err;
      }
    });
}
const url = "https://jsonplaceholder.typicode.com/posts/1";
const timeout = 1000; // 10; // to test abort
fetchDataWithTimeOut(url, timeout)
  .then((data) => console.log(data))
  .catch((e) => console.log("e", e));
