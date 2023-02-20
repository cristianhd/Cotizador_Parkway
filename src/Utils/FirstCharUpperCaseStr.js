export const FirstCharUpperCaseStr = (str) => {
  if (str === undefined) return;
  const word = str.split(" ");
  const FirstUpperCase = word.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return FirstUpperCase;
};
