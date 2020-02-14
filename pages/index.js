import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from './header'
import Footer from './footer'

function Index(props) {
    const css_search = {cursor: 'pointer', fontWeight: 'bold'}
    return <div className="container">
        <Head />
        <h1 className="text-center">
                Danh sách bộ phim trên IMDb
        </h1>
        <hr/>
        <Link href='/search'>
            <button type="button" className="btn btn-primary">Tìm phim</button>
        </Link>
        <br/>
        <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <h4>Các bộ phim hiện có: {props.data.Search.length}</h4>
            </div>
        </div>
        <div className="row">
            {props.data.Search.map((show, index) => (
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ height: 490}}>
                    {/* <Link as={`/detail/${show.imdbID}`} href={`/detail?id=${show.imdbID}`}> */}
                    <Link as={`/detail/${show.imdbID}`} href={{ pathname: '/detail', query: { keyword_id: `${show.imdbID}` }}}>
                        <img src={show.Poster} style={{ height: 350, width: 250, cursor: 'pointer' }} alt="Image" />
                    </Link>
                    <br/>
                    <div style={{ height: 100 }}>
                    <Link as={`/detail/${show.imdbID}`} href={{ pathname: '/detail', query: { keyword_id: `${show.imdbID}` }}}>
                        <h4 style={css_search}>{show.Title}</h4>
                    </Link>
                    <h5>Năm ra mắt: {show.Year}</h5>
                    <h5>Thể loại: {show.Type}</h5>
                    </div>
                </div>
                ))}
        </div>
        <Footer />
    </div>

}

Index.getInitialProps = async function () {
    const res = await fetch('http://www.omdbapi.com/?s=episode&apikey=dd31b83b')
    const data = await res.json()
    return {
        data: data
    }
}

export default Index