import React, {Component} from 'react'
import Head from './header'
import Footer from './footer'
import Link from 'next/link'
var obj_arrs = [];
class Detail extends Component {
  constructor(props) {
    super(props);
  }

  addBookmark = () => {
    let id_arrs = JSON.parse(localStorage.getItem("imdbID"));
    if (id_arrs && id_arrs.some(arr => arr.id === this.props.data.imdbID)) {
      alert(`Phim ${this.props.data.Title} đã bookmark rồi!`)
    }
    else {
      obj_arrs.push({
        id: this.props.data.imdbID,
        title: this.props.data.Title,
        poster: this.props.data.Poster,
        year: this.props.data.Year,
        type: this.props.data.Type
      });
      localStorage.setItem("imdbID", JSON.stringify(obj_arrs));
      alert(`Thêm bookmark ${this.props.data.Title} thành công!`)
    }
  }

  render() {
    let btnBookmark;
    let id_arrs = JSON.parse(localStorage.getItem("imdbID"));
    if (id_arrs && id_arrs.some(arr => arr.id === this.props.data.imdbID)) {
      btnBookmark = (<div>
        <h4>Đã thêm vào bookmark</h4>
      </div>)
    }
    else {
      btnBookmark = (
        <div>
          <button type="button" onClick={this.addBookmark} className="btn btn-success">Thêm Bookmark</button>
          <br />
          <br />
        </div>
      )
    }
    const style = { lineHeight: '30px', height: '30px', fontSize: "18px" }
    return <div className="container">
      <Head />
      <h1 className="text-center">
        Trang chi tiết bộ phim
        </h1>
      <hr />
      {btnBookmark}
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img src={this.props.data.Poster} className="img-responsive" />
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <span style={style}>ID IMDB : {this.props.data.imdbID}</span><br />
          <span style={style}>Title : {this.props.data.Title}</span><br />
          <span style={style}>Released : {this.props.data.Released}</span><br />
          <span style={style}>Genre : {this.props.data.Genre}</span><br />
          <span style={style}>Rated : {this.props.data.Rated}</span><br />
          <span style={style}>Runtime : {this.props.data.Runtime}</span><br />
          <span style={style}>Writer : {this.props.data.Writer}</span><br />
          <span style={style}>Actors : {this.props.data.Actors}</span><br />
          <span style={style}>Awards : {this.props.data.Awards}</span><br />
          <span style={style}>Type : {this.props.data.Type}</span><br />
          <span style={style}>Plot : {this.props.data.Plot}</span><br />
        </div>
      </div>
      <br />
      <hr />
      <Link href='/search'>
        <button type="button" className="btn btn-primary">Quay lại trang tìm kiếm</button>
      </Link>
      <Footer />
    </div>
  }
}
Detail.getInitialProps = async function ({ query }) {
  const res = await fetch(`http://www.omdbapi.com/?i=${query.keyword_id}&apikey=dd31b83b`)
  const data = await res.json()
  return {
      data: data
  }
}

export default Detail