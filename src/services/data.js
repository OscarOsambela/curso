export const getData = async () => {
  const apiResponse = await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())

    return apiResponse;
};


