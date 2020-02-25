import Link from 'next/link'
import Layout from '../src/layouts/DefaultLayout'
import { getFilmsByTitle } from '../src/service/service'
import ListFilm from '../src/components/ListFilms'

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
                {props.data.Search.map((value, index) => (
                    <ListFilm value={value} key={index} />
                ))}
            </div>
        </Layout>
    )
}

Index.getInitialProps = async () => {
    let titleFilm = "episode";
    let getFilms = await getFilmsByTitle(titleFilm)
    return {
        data: getFilms
    }
}

export default Index