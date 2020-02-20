import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../src/layouts/DefaultLayout'
import React, { Component } from 'react'
import styles from '../src/styles/styles.module.css'

class Index extends Component {
    static async getInitialProps() {
        const res = await fetch('http://www.omdbapi.com/?s=episode&apikey=dd31b83b')
        const data = await res.json()
        return {
            data: data
        }
    }
    
    render() {
        return (
            <Layout>
                <h1 className="text-center">
                    Danh sách bộ phim trên IMDB
                </h1>
                <hr />
                <Link href='/search'>
                    <button type="button" className="btn btn-primary">Tìm phim</button>
                </Link>
                <br />
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <h4>Các bộ phim hiện có: {this.props.data.Search.length}</h4>
                    </div>
                </div>
                <div className="row">
                    {this.props.data.Search.map((show, index) => (
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ height: 490 }}>
                            <Link as={`/detail/${show.imdbID}`} href={{ pathname: '/detail', query: { keyword_id: `${show.imdbID}` } }}>
                                <img src={show.Poster} style={{ height: 350, width: 250, cursor: 'pointer' }} alt="Image" />
                            </Link>
                            <br />
                            <div style={{ height: 100 }}>
                                <Link as={`/detail/${show.imdbID}`} href={{ pathname: '/detail', query: { keyword_id: `${show.imdbID}` } }}>
                                    <h4 className={styles.title_films}>{show.Title}</h4>
                                </Link>
                                <h5>Năm ra mắt: {show.Year}</h5>
                                <h5>Thể loại: {show.Type}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        )
    }
}

export default Index