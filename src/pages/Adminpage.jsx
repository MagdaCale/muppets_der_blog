import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Adminpage = () => {
    
    const [bild, setBild] = useState(null)
    const [artikelTitel, setArtikelTitel] = useState('')
    const [artikelText, setArtikelText] = useState('')
    const [objectLength, setObjectLength] = useState(null)
    
    const nav = useNavigate()

    useEffect(()  => {
        fetch('http://localhost:1989/api/blog')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setObjectLength((data.length)+1)})
    },[])

    const sendData = () => {

        const form = new FormData()
        form.append('id', objectLength)
        form.append('bild_url',bild)
        form.append('titel',artikelTitel)
        form.append('text',artikelText)

        fetch('http://localhost:1989/api/blog', {
            method:'POST',
            body:form
        })
        .then(res => res.status === 200 ? nav('/'): null)
    }

    

    return (
        <section className="adminSection">
            <div className="inputTitel">
                <input type="text" name="titel" placeholder="Tietel" onChange={(e) => setArtikelTitel(e.target.value)}/>
            </div>
            <div className="inputBild">
                <input type="file" name="bild_url" placeholder="Bild url" onChange={(e) => setBild(e.target.files[0])} />
            </div>
            <div className="inputArtikelText">
                <textarea name="text" cols="30" rows="10" placeholder="Artikel" onChange={(e) => setArtikelText(e.target.value)}></textarea>
            </div>

            <button onClick={sendData}>Publish</button>

        </section>
    )
}

export default Adminpage