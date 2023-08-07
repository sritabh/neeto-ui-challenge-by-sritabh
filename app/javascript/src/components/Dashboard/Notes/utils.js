import dayjs from "dayjs";

export const findElapsedTime = date => dayjs(date).fromNow();

export const formatDate = date => {
  const isSameDay = dayjs(date).isSame(dayjs(), "day");

  return dayjs(date).format(isSameDay ? "dddd, h:mm A" : "dddd, MMM D, h:mm A");
};
