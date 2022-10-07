import { Link } from 'react-router-dom';

const Artikel = ({article}) => {
    return(
        <div>
            <div>
                <img src={`http://localhost:1989/${article.bild_url}`} alt="" />
                <Link key={article} to={`/detail/${article.id}`}><h3>{article.titel}</h3></Link>
            </div>
        </div>
    )
}

export default Artikel