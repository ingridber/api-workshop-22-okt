/* const url = "https://dog.ceo/api/breeds/image/random"

const dogPic = document.getElementById('dog-pic')
const showDog = document.getElementById('show-dog')

async function getDawg() {

        const config = {
            headers: {
                Accept: 'application/json',
            },
        }


    try {
        const respons = await fetch(url, config)
        console.log(respons)
        if(!respons.ok) {
            throw Error(console.log(`Dawg you got an ${respons.status}`))
        }
        const responsData = await respons.json()
        console.log(responsData)
        dogPic.src = responsData.message
    } catch(error) {
        console.log('catch error: ' + error)
    }
}

getDawg()

showDog.addEventListener('click', getDawg)

*/

const input = document.getElementById('dog-type');


// let hound = input.value;
// let url = `https://dog.ceo/api/breed/${hound}/images`;

const button = document.getElementById('show-dog');
const image = document.getElementById('dog-pic');


async function generateBreed() {
    const configuration = {
        headers: {
            Accept: 'application/json',
        },
    };

    try {
        let hound = input.value;
        let url = `https://dog.ceo/api/breed/${hound}/images`;
        const response = await fetch(url, configuration)
        if(!response.ok) {throw Error( console.log('Dawg u got an error: ' + response.status))}

        const data = await response.json()
        let length = data.message.length
        let randomIndex = Math.floor(Math.random() * length)
        image.src = data.message[randomIndex]
    } catch(error) {console.log('error från try: ' + error)}

}

button.addEventListener('click', generateBreed)
