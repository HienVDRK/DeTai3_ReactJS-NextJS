import styles from '../styles/styles.module.css'
import Link from 'next/link'

function ListFilm(props) {
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{ height: 490 }}>
            <Link as={`/detail/${props.value.imdbID}`} href={{ pathname: '/detail', query: { idFilm: `${props.value.imdbID}` } }}>
                <img src={props.value.Poster} className={styles.poster} alt="Image" />
            </Link>
            <br />
            <div style={{ height: 100 }}>
                <Link as={`/detail/${props.value.imdbID}`} href={{ pathname: '/detail', query: { idFilm: `${props.value.imdbID}` } }}>
                    <h4 className={styles.title_films}>{props.value.Title}</h4>
                </Link>
                <h5>Năm ra mắt: {props.value.Year}</h5>
                <h5>Thể loại: {props.value.Type}</h5>
            </div>
        </div>
    )
}
export default ListFilm