import React, { Component } from 'react'
import Head from './header';
import Link from 'next/link'
import Footer from './footer'
import axios from 'axios'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { txtTieuDePhim: "", fetchData: "" }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
     }

     onSubmit = async (event) => {
        event.preventDefault();
        this.setState({fetchData : await this.getInitialProps()});
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
        const css_search = { cursor: 'pointer', fontWeight: 'bold' };
        let data = this.state.fetchData ? this.state.fetchData : this.props.data ;
        let show_Ketqua;
        if (data == undefined || data.data.Response == "False") {
            show_Ketqua = (
                <div><h4>Không có kết quả nào được tìm thấy</h4></div>
            )
        } else {
            show_Ketqua = (
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
                                    <img src={show.Poster} style={{ height: 350, width: 250, cursor: 'pointer' }} alt="Image" />
                                </Link>
                                <br />
                                <div style={{ height: 100 }}>
                                    <Link as={`/detail/${show.imdbID}`} href={{ pathname: '/detail', query: { keyword_id: `${show.imdbID}` } }}>
                                        <h4 style={css_search}>{show.Title}</h4>
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

        return <div className="container">
            <Head />
            <h1 className="text-center">
                Trang tìm kiếm phim
            </h1>
            <hr />
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Tiêu đề phim</label>
                    <input type="text" name="txtTieuDePhim" onChange={this.onChange} value={this.state.txtTieuDePhim} className="form-control" placeholder="Nhập tiêu đề phim" />
                </div>
                <button type="submit" className="btn btn-primary">Tìm kiếm</button>
            </form>
            <br />
            {show_Ketqua}
            <Footer/>
        </div>
    }
}

export default Search