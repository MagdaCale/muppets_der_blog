import { useState,useEffect } from "react"
import { useParams, Link } from "react-router-dom" 
import NavBar from "../components/NavBar"



const Detailpage = (props) => {
    const [artikel, setArtikel] = useState({})

    const params = useParams()

    useEffect(() => {
        fetch('http://localhost:1989/api/blog')
        .then(res=> res.json())
        .then(data => setArtikel(data.find(item => item.id == params.id)))
    },[]) 

    const deletIt = () => {
        
    }

    return (

        <div>
            <NavBar />
            
            <header>
                <img src={`http://localhost:1989/${artikel.bild_url}`} alt="" />
            </header>

            <main>
                <section>
                    <h2>{artikel.titel}</h2>
                </section>
                <section>
                    <p>{artikel.text}</p>
                </section>
            </main>
            <button onClick={deletIt}></button>

        </div>
    )
}

export default Detailpage