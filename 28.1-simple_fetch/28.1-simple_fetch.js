fetch("https://api.jokes.one/jod")
  .then((response) => {
    return response.json();
  })
  .then((val) => {
    console.log(val.contents.jokes[0].joke.text);
  });


