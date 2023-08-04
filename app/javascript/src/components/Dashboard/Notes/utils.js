export const timesAgo = createdDateAndTime => {
  const currentDateAndTime = new Date();
  const timeDifference = currentDateAndTime - createdDateAndTime;
  const secondsAgo = Math.floor(timeDifference / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const monthsAgo = Math.floor(daysAgo / 30);

  if (monthsAgo > 0) {
    return `${monthsAgo} ${monthsAgo === 1 ? "month" : "months"} ago`;
  } else if (daysAgo > 0) {
    return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
  } else if (hoursAgo > 0) {
    return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
  }

  return `${minutesAgo} ${minutesAgo <= 1 ? "minute" : "minutes"} ago`;
};

export const formatDate = date => {
  const currentDateAndTime = new Date();
  const options = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  if (date.toDateString() !== currentDateAndTime.toDateString()) {
    options.day = "numeric";
  }

  return date.toLocaleString("en-US", options);
};
