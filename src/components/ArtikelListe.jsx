import { useEffect, useState } from "react"
import Artikel from './Artikel'

const ArtikelListe = () => {
    const [artikel, setArtikel] = useState([])

    useEffect(()  => {
        fetch('http://localhost:1989/api/blog')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setArtikel(data)})
    },[])

    return(
        <div>
            {artikel.map((article, key) =>
                <Artikel key={key} article={article} />
            )}
        </div>
    )
}

export default ArtikelListe