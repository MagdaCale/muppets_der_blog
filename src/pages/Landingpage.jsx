import ArtikelListe from '../components/ArtikelListe'
import Header from '../components/Header'

const Landingpage = () =>{

    return(
        <div>
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