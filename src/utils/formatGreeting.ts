export const getGreeting = (gender: string | null) => {
  switch (gender) {
    case "male":
      return "Дорогой";
    case "female":
      return "Дорогая";
    case "plural":
      return "Дорогие";
    default:
      return "Дорогой(ая)";
  }
};
