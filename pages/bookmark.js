import Link from 'next/link'
import Layout from '../src/layouts/DefaultLayout'
import React, { Component } from 'react'
import styles from '../src/styles/styles.module.css'


function Bookmark() {
    let showBookmark
    const arrObjFilms = JSON.parse(localStorage.getItem("imdbID"))
    if (arrObjFilms && arrObjFilms.length) {
        showBookmark = (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h4>Các bộ phim đã bookmark: {arrObjFilms.length}</h4>
                    </div>
                </div>
                <div className="row">
                    {arrObjFilms.map((val, index) => (
                        // <ListFilm></ListFilm>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ height: 490 }}>
                            <Link as={`/detail/${val.id}`} href={{ pathname: '/detail', query: { idFilm: `${val.id}` } }}>
                                <img src={val.poster} className={styles.poster} alt="Image" />
                            </Link>
                            <br />
                            <div style={{ height: 100 }}>
                                <Link as={`/detail/${val.id}`} href={{ pathname: '/detail', query: { idFilm: `${val.id}` } }}>
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
        showBookmark = (
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
                {showBookmark}
            </Layout>
        </div>
    )
}
export default Bookmark  