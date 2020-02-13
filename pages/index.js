import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from './header'

function Index(props) {
    return <div className="container">
        <Head />
        <h1>Danh sách phim hay</h1>
        <Link href='/search'>
            <button type="button" className="btn btn-primary">Tìm phim</button>
        </Link>
        <br/><br/>
        <div className="row">
            {props.shows.Search.map((show, index) => (
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index}>
                    <Link as={`/detail/${show.imdbID}`} href={`/detail?id=${show.imdbID}`}>
                        <img src={show.Poster} style={{ height: 350}} alt="Image" />
                    </Link>
                    <br/>
                    <Link as={`/detail/${show.imdbID}`} href={`/detail?id=${show.imdbID}`}>
                        <h4 style={{ height: 60}}>{show.Title}</h4>
                    </Link>
                </div>
                ))}
        </div>
    </div>
}

Index.getInitialProps = async function () {
    const res = await fetch('http://www.omdbapi.com/?s=batman&apikey=dd31b83b')
    const data = await res.json()
    return {
        shows: data
    }
}

export default Index