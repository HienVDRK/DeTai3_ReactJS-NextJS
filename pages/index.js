import Link from 'next/link'
import Layout from '../src/layouts/DefaultLayout'
import styles from '../src/styles/styles.module.css'
import axios from 'axios'
import { getFilmsByTitle } from '../src/service/service'

function Index(props) {
    return (
        <Layout>
            <h1 className="text-center">
                Danh sách bộ phim trên IMDB
                </h1>
            <hr />
            <Link href='/search'>
                <button type="button" className="btn btn-primary">Tìm phim</button>
            </Link>
            <br />
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <h4>Các bộ phim hiện có: {props.data.Search.length}</h4>
                </div>
            </div>
            <div className="row">
                {props.data.Search.map((show, index) => (
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ height: 490 }}>
                        <Link as={`/detail/${show.imdbID}`} href={{ pathname: '/detail', query: { idFilm: `${show.imdbID}` } }}>
                            <img src={show.Poster} style={{ height: 350, width: 250, cursor: 'pointer' }} alt="Image" />
                        </Link>
                        <br />
                        <div style={{ height: 100 }}>
                            <Link as={`/detail/${show.imdbID}`} href={{ pathname: '/detail', query: { idFilm: `${show.imdbID}` } }}>
                                <h4 className={styles.title_films}>{show.Title}</h4>
                            </Link>
                            <h5>Năm ra mắt: {show.Year}</h5>
                            <h5>Thể loại: {show.Type}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    let getFilms = await getFilmsByTitle("episode")
    return {
        data: getFilms
    }
    // const response = await axios.get(`http://www.omdbapi.com/?s=episode&apikey=dd31b83b`)
    // const data = await response.data

}

export default Index