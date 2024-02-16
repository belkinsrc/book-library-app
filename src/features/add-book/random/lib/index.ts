/* eslint-disable @typescript-eslint/no-explicit-any */
function getRandomBook(booksData: any) {
  const randomIndex = Math.floor(Math.random() * booksData.length);
  return booksData[randomIndex];
}

export { getRandomBook };
