export const selectRandomQuotes = (quotes) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}