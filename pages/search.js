import React, { Component } from 'react'
import Head from './header';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Footer from './footer'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { txtTieuDePhim: ""}
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
     }

    onSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        const css_search = { cursor: 'pointer', fontWeight: 'bold' };
        console.log('this.props.data', this.props.data);
        let show_Ketqua;
        if (this.props.data == undefined || this.props.data.Response == "False") {
            console.log('vao day')
            show_Ketqua = (
                <div><h4>Không có kết quả nào</h4></div>
            )
        } else {
            console.log('day du')
            show_Ketqua = (
                <div>
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <h4>Số kết quả tìm được: {this.props.data.Search.length}</h4>
                        </div>
                    </div>
                    <div className="row">
                        {this.props.data.Search.map((show, index) => (
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

Search.getInitialProps = async function (context) {
    const res = await fetch(`http://www.omdbapi.com/?s=move&apikey=dd31b83b`)
    const data = await res.json()
    return {
        data: data
    }
}


export default Search