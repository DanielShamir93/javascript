
const fetchGithubAPI = async (e) => {

    try {
        const userName = document.querySelector('.user-input').value;
        const response = await fetch(`https://api.github.com/users/${userName}`);
        
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            const dataObject = {
                name: data.login,
                image: data.avatar_url,
                link: data.html_url,
                publicRepoAmount: data.public_repos
            }
        
            appendHTMLCard(dataObject);
        } else {
            alert(response.status + ' problem');
            return;
        }
        
    } catch(err) {
        alert(err)
    }
    
}

document.querySelector('.submit-button').addEventListener('click', fetchGithubAPI);




const appendHTMLCard = (dataObject) => {
    const parent = document.querySelector('.cards');
    const newCard = document.createElement('div');


    newCard.className = 'card';
    newCard.innerHTML = `
        <a href="${dataObject.link}" target="_black">
            <img class="avatar-image" src="${dataObject.image}">
            <div class="details">
                <div>
                    <label for="name">Name: </label>
                    <span id="name" class="name">${dataObject.name}</span>
                </div>
                <div>
                    <label for="public-repo-amount">Public repo amount: </label>
                    <span id="public-repo-amount" class="public-repo-amount">${dataObject.publicRepoAmount}</span>
                </div>
            </div>
        </a>
    `

    parent.appendChild(newCard);
}