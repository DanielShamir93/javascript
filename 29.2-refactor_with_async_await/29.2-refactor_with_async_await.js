const fetchJoke = async () => {
    try {
        const response = await fetch("https://api.jokes.one/jod");
        const data = await response.json();
        console.log(data.contents.jokes[0].joke.text);
    } catch (err) {
        console.log(err);
    }
    
}

fetchJoke();