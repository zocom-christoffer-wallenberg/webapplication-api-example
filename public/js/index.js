const button  = document.querySelector('.primary-button');

const removeClass = () => {
    button.classList.remove('animated');
};

const getInsult = () => {
    fetch('http://localhost:8000/api/getInsult', {method: 'GET'})
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            document.querySelector('#message').innerHTML = data.insult;
        });
}

button.addEventListener('click', () => {
    button.classList.add('animated');

    setTimeout(removeClass, 750);
    getInsult();
});