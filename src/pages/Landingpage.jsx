import ArtikelListe from '../components/ArtikelListe'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

const Landingpage = () =>{

    return(
        <div>
            <NavBar />
            <Header />
            <main>
                <article className='home-description'>
                    < ArtikelListe />
                </article>
                
            </main>
        </div>
    )
}
export default Landingpage