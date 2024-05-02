import { useEffect, useState } from "react"
const Endpoint_ApiRandomFact = 'https://catfact.ninja/fact'
const URLSUFIX = "?fontSize=80&fontColor=white"

export function App(){
    const [fact,setFact] = useState()
    const [imageURL,setImageURL] = useState()
    useEffect(()=> {
        fetch(Endpoint_ApiRandomFact)
        .then(res => res.json()) /*convertimos a json*/
        .then(data => {
            const {fact} = data
            setFact(fact)
            const threeFirstWords = fact.split(" ",3).join(" ")
            console.log(threeFirstWords)

            fetch(`https://cataas.com/cat/says/${threeFirstWords}`)
            .then(response =>{
                console.log(response)
                const {url} = response
                setImageURL(url)
                console.log(url)
            })
        })
    },[]) /* Array de dependencias vacio para que solo se ejecute una vez*/
    return(
        <main>
        <h1>Prueba React</h1>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={`${imageURL}${URLSUFIX}`} alt={`Image extracted using the first three words for ${fact}`} />}
        
        </main>
    )
}