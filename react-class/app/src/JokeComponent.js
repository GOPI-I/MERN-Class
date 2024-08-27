import React , {useState , useEffect} from 'react'


function JokeComponent(){
    const [joke , setJoke] = useState(null);

    useEffect(() => {

        let url = 'https://official-joke-api.appspot.com/random_joke';

        fetch(url).then(response => response.json())
        .then(data => {
            setJoke(data);
        })
        .catch(error => {
            console.log('Error fetching the joke:',error);
        });
    },[]);

    return(
        <div>
            <h1>Random Joke</h1>
            {joke ? (
                <div>
                    <p><strong>{joke.setup}</strong></p>
                    <p>{joke.punchline}</p>
                    </div>
            ) : (
                <p>Loading ... </p>

            )}
        </div>



    );


}




export default JokeComponent