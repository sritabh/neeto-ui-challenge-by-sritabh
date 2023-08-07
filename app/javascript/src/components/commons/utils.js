export const shortenTitle = ({ title, maxLength = 20 }) => {
  if (title.length !== 0) {
    return `'${
      title.length > maxLength ? `${title.substring(0, maxLength)}...` : title
    }'`;
  }

  return "";
};
