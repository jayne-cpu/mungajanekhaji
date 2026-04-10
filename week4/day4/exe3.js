// Resolve
const resolvedPromise = Promise.resolve(3);

// Reject
const rejectedPromise = Promise.reject("Boo!");

// TEST
resolvedPromise.then(result => console.log(result));
rejectedPromise.catch(error => console.log(error));