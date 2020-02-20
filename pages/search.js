import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Layout from '../src/layouts/DefaultLayout'
import styles from '../src/styles/styles.module.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { txtTieuDePhim: "", fetchData: "" }
    }

    onChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
     }

     onSubmit = async (event) => {
        event.preventDefault();
        const dataFetch = await this.getInitialProps()
        this.setState({fetchData : dataFetch})
    }

    getInitialProps = async () => {
        let tukhoa = this.state.txtTieuDePhim;
        const response = await axios.get(`http://www.omdbapi.com/?s=${tukhoa}&apikey=dd31b83b`)
        const data = await response.data
        return {
            data: data
        }
    }

    render(){
        let data = this.state.fetchData ? this.state.fetchData : this.props.data
        let show_Result;
        if (data == undefined || data.data.Response == "False") {
            show_Result = (
                <div><h4>Không có kết quả nào được tìm thấy</h4></div>
            )
        } else {
            show_Result = (
                <div>
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <h4>Số kết quả tìm được: {data.data.Search.length}</h4>
                        </div>
                    </div>
                    <div className="row">
                        {data.data.Search.map((show, index) => (
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ height: 490}}>
                                <Link as={`/detail/${show.imdbID}`} href={{ pathname: '/detail', query: { keyword_id: `${show.imdbID}` } }}>
                                    <img src={show.Poster} className={styles.poster} alt="Image" />
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
                </div>
            )
         }

        return (
            <Layout>
                <h1 className="text-center">
                    Trang tìm kiếm phim
                </h1>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tiêu đề phim</label>
                        <input
                            type="text"
                            name="txtTieuDePhim"
                            onChange={this.onChange}
                            value={this.state.txtTieuDePhim}
                            className="form-control"
                            placeholder="Nhập tiêu đề phim" />
                    </div>
                    <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                </form>
                <br />
                {show_Result}
            </Layout>
        )
    }
}

export default Search