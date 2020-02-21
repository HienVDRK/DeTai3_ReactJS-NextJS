import Link from 'next/link'
import Layout from '../src/layouts/DefaultLayout'
import styles from '../src/styles/styles.module.css'
import axios from 'axios'
import { getDetailFilmsById } from '../src/service/service'

function Detail(props) {
  let btnBookmark
  const objFilms = JSON.parse(localStorage.getItem("imdbID"))

  function addBookmark() {
    if (objFilms && objFilms.some(film => film.id === props.data.imdbID)) {
      alert(`Phim ${props.data.Title} đã bookmark rồi!`)
    }
    else {
      objFilms.push({
        id: props.data.imdbID,
        title: props.data.Title,
        poster: props.data.Poster,
        year: props.data.Year,
        type: props.data.Type
      });
      localStorage.setItem("imdbID", JSON.stringify(objFilms))
      alert(`Thêm bookmark ${props.data.Title} thành công!`)
    }
  }

  if (objFilms && objFilms.some(arr => arr.id === props.data.imdbID)) {
    btnBookmark = (
      <div>
        <h4>Đã thêm vào bookmark</h4>
      </div>
    )
  }
  else {
    btnBookmark = (
      <div>
        <button type="button" onClick={addBookmark} className="btn btn-success">Thêm Bookmark</button><br /><br />
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
          <img src={props.data.Poster} className="img-responsive" />
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <span className={styles.info_films}>ID IMDB : {props.data.imdbID}</span><br />
          <span className={styles.info_films}>Title : {props.data.Title}</span><br />
          <span className={styles.info_films}>Released : {props.data.Released}</span><br />
          <span className={styles.info_films}>Genre : {props.data.Genre}</span><br />
          <span className={styles.info_films}>Rated : {props.data.Rated}</span><br />
          <span className={styles.info_films}>Runtime : {props.data.Runtime}</span><br />
          <span className={styles.info_films}>Writer : {props.data.Writer}</span><br />
          <span className={styles.info_films}>Actors : {props.data.Actors}</span><br />
          <span className={styles.info_films}>Awards : {props.data.Awards}</span><br />
          <span className={styles.info_films}>Type : {props.data.Type}</span><br />
          <span className={styles.info_films}>Plot : {props.data.Plot}</span><br />
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

Detail.getInitialProps = async (props) => {
  let getFilms = await getDetailFilmsById(props.query.idFilm)
  return {
    data: getFilms
  }
}


export default Detail