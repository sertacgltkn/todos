renderHeader();



// GET METHOD EXAMPLE

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data));




// POST METHOD EXAMPLE

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "lorem",
    body: "ipsum",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));




// PUT METHOD EXAMPLE

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));



// PATCH METHOD EXAMPLE

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "foo",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));



// DELETE METHOD EXAMPLE

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});
