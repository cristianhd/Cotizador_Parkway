
 export const UpperCaseStr = (str) => {
    if(str=== undefined) return 
    const words = str.split(" ");
    const titleUpperCase = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return titleUpperCase.join(" ");
  };
  