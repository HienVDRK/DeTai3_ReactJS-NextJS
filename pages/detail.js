import Head from './header'
import Footer from './footer'
import Link from 'next/link'

function Detail(props) {

  const style = { lineHeight: '30px', height: '30px', fontSize: "18px"}
    return <div className="container">
        <Head/>
        <h1 className="text-center">
                Trang chi tiết bộ phim 
        </h1>
        <hr/>
      <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <img src={props.data.Poster} className="img-responsive"/>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <span style={style}>ID IMDB : {props.data.imdbID}</span><br/>
                <span style={style}>Title : {props.data.Title}</span><br/>
                <span style={style}>Released : {props.data.Released}</span><br/>
                <span style={style}>Genre : {props.data.Genre}</span><br/>
                <span style={style}>Rated : {props.data.Rated}</span><br/>
                <span style={style}>Runtime : {props.data.Runtime}</span><br/>
                <span style={style}>Writer : {props.data.Writer}</span><br/>
                <span style={style}>Actors : {props.data.Actors}</span><br/>
                <span style={style}>Awards : {props.data.Awards}</span><br/>
                <span style={style}>Type : {props.data.Type}</span><br/>
                <span style={style}>Plot : {props.data.Plot}</span><br/>
          </div>
      </div>
      <br/>
      <hr/>
      <Link href='/search'>
        <button type="button" className="btn btn-primary">Quay lại trang tìm kiếm</button>
      </Link>
      <Footer/>
    </div>
}
Detail.getInitialProps = async function ({ query }) {
  const res = await fetch(`http://www.omdbapi.com/?i=${query.keyword_id}&apikey=dd31b83b`)
  const data = await res.json()
  return {
      data: data
  }
}

export default Detail