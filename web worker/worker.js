onmessage = function (msg) {
  if (msg.data === "calculate") {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
      sum += i;
    }
    postMessage(sum);
  }
};
