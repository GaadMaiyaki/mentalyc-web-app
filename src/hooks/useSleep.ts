import React from "react";

const sleep = () => {
  const delay = Math.floor(Math.random() * 1500);

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("");
    }, delay)
  );
};

const useSleep = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const sleepFn = async () => {
    setIsLoading(true);
    try {
      await sleep();
    } catch (err: any) {
      throw new Error("sleeping function threw an error");
    } finally {
      setIsLoading(false);
    }
  };

  return { isSleeping: isLoading, sleep: sleepFn };
};

export default useSleep;
