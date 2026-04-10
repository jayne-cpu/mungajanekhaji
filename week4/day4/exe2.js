const delayedSuccess = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// TEST
delayedSuccess.then(result => console.log(result));