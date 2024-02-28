export function getAnimal(animal) {
  const responses = {
    cats: "I totally love cats!",
    dogs: "I like dogs!",
    default: "I do not like animals at all!",
  };
  return responses[animal] || responses.default;
}
