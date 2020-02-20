import Link from 'next/link'
import Layout from '../src/layouts/DefaultLayout'
import React, { Component } from 'react'
import styles from '../src/styles/styles.module.css'

class Bookmark extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let show_bookmark
        const objFilms = JSON.parse(localStorage.getItem("imdbID"))
        if (objFilms && objFilms.length) {
            show_bookmark = (
                <div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <h4>Các bộ phim đã bookmark: {objFilms.length}</h4>
                        </div>
                    </div>
                    <div className="row">
                        {objFilms.map((val, index) => (
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ height: 490 }}>
                                <Link as={`/detail/${val.id}`} href={{ pathname: '/detail', query: { keyword_id: `${val.id}` } }}>
                                    <img src={val.poster} className={styles.poster} alt="Image" />
                                </Link>
                                <br />
                                <div style={{ height: 100 }}>
                                    <Link as={`/detail/${val.id}`} href={{ pathname: '/detail', query: { keyword_id: `${val.id}` } }}>
                                        <h4 className={styles.title_films}>{val.title}</h4>
                                    </Link>
                                    <h5>Năm ra mắt: {val.year}</h5>
                                    <h5>Thể loại: {val.type}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        else {
            show_bookmark = (
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h4>Chưa có bộ phim nào được bookmark</h4>
                    </div>
                </div>
            )
        }

        return (
            <div className="container">
                <Layout>
                    <h1 className="text-center">
                        Danh sách phim đã bookmark
                    </h1>
                    <hr />
                    {show_bookmark}
                </Layout>
            </div>
        )
    }
}
export default Bookmark  