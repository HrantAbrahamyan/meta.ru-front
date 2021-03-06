const getNameInitials = (name) => {
  return name
    .split(' ')
    .map((x) => x.charAt(0))
    .join('')
    .substr(0, 2)
    .toUpperCase();
};

export default getNameInitials;
