import Head from './header'
import Link from 'next/link'


var id="tt0076759";
function Detail(props) {

  const style = { lineHeight: '30px', height: '30px'}
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
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                <h4 style={style}>ID IMDb : {props.data.imdbID}</h4>
                <h4 style={style}>Title : {props.data.Title}</h4>
                <h4 style={style}>Released : {props.data.Released}</h4>
                <h4 style={style}>Genre : {props.data.Genre}</h4>
                <h4 style={style}>Rated : {props.data.Rated}</h4>
                <h4 style={style}>Runtime : {props.data.Runtime}</h4>
                <h4 style={style}>Writer : {props.data.Writer}</h4>
                <h4 style={style}>Actors : {props.data.Actors}</h4>
                <h4 style={style}>Awards : {props.data.Awards}</h4>
                <h4 style={style}>Type : {props.data.Type}</h4>
                <h4 style={style}>Plot : {props.data.Plot}</h4>
          </div>
      </div>
      <br/>
      <hr/>
      <Link href='/search'>
        <button type="button" className="btn btn-primary">Quay lại</button>
      </Link>
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