class TimeWatch {
  static interval = null;

  static start(cb, ms = 15000) {
    const id = setInterval(cb, ms);
    TimeWatch.interval = id;
  }

  static cancel = () => {
    if (TimeWatch.interval !== null) {
      clearInterval(TimeWatch.interval);
      TimeWatch.interval = null;
    }
  };
}

export default TimeWatch;
