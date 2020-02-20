import React, {Component} from 'react'
import Link from 'next/link'
import Layout from '../src/layouts/DefaultLayout'
import styles from '../src/styles/styles.module.css'

let obj_arrs = [];
class Detail extends Component {
  constructor(props) {
    super(props)
  }

  addBookmark = () => {
    const objFilms = JSON.parse(localStorage.getItem("imdbID"));
    if (objFilms && objFilms.some(film => film.id === this.props.data.imdbID)) {
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
      localStorage.setItem("imdbID", JSON.stringify(obj_arrs))
      alert(`Thêm bookmark ${this.props.data.Title} thành công!`)
    }
  }

  static async getInitialProps ({ query }) {
    const res = await fetch(`http://www.omdbapi.com/?i=${query.keyword_id}&apikey=dd31b83b`)
    const data = await res.json()
    return {
        data: data
    }
  }

  render() {
    let btnBookmark;
    let objFilms = JSON.parse(localStorage.getItem("imdbID"));
    if (objFilms && objFilms.some(arr => arr.id === this.props.data.imdbID)) {
      btnBookmark = (
        <div>
          <h4>Đã thêm vào bookmark</h4>
        </div>
      )
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
    
    return (
      <Layout>
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
            <span className={styles.info_films}>ID IMDB : {this.props.data.imdbID}</span><br />
            <span className={styles.info_films}>Title : {this.props.data.Title}</span><br />
            <span className={styles.info_films}>Released : {this.props.data.Released}</span><br />
            <span className={styles.info_films}>Genre : {this.props.data.Genre}</span><br />
            <span className={styles.info_films}>Rated : {this.props.data.Rated}</span><br />
            <span className={styles.info_films}>Runtime : {this.props.data.Runtime}</span><br />
            <span className={styles.info_films}>Writer : {this.props.data.Writer}</span><br />
            <span className={styles.info_films}>Actors : {this.props.data.Actors}</span><br />
            <span className={styles.info_films}>Awards : {this.props.data.Awards}</span><br />
            <span className={styles.info_films}>Type : {this.props.data.Type}</span><br />
            <span className={styles.info_films}>Plot : {this.props.data.Plot}</span><br />
          </div>
        </div>
        <br />
        <hr />
        <Link href='/search'>
          <button type="button" className="btn btn-primary">Quay lại trang tìm kiếm</button>
        </Link>
      </Layout>
    )
  }
}


export default Detail