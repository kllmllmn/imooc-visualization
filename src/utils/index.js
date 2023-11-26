const sleep = (t) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), t);
  });
};

export { sleep };
