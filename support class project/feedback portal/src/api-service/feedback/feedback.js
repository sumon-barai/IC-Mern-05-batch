function postFeedback(data) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.3) {
      setTimeout(() => {
        console.error(data);
        reject("feedback submit failed");
      }, 3000);
    } else {
      setTimeout(() => {
        console.log(data);
        resolve("feedback submit successfully");
      }, 3000);
    }
  });
}

export { postFeedback };
