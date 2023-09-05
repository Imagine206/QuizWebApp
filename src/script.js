async function getQuiz(){
    try {
        const response = await fetch('https://quiz-rmlg.onrender.com/questions');

        if(response.ok){
            const data = await response.json();
            return data
            loopIt(data)
        }else {
            throw new Error('Failed to fetch data')
        }


    }catch(error){
        console.error('An error occurred: ', error)
    }
}

getQuiz()
    .then(data => {
        data.forEach(data => console.log(data))
    })
    .catch(error => {
        console.log("an error: ", error)
    })


function loopIt(data){
    for(let i = 0; i < data.length; i++){
        console.log(data[i])
    }
}