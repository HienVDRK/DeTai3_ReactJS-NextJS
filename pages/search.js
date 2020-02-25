import React, { Component } from 'react'
import Layout from '../src/layouts/DefaultLayout'
import { getFilmsByTitle } from '../src/service/service'
import ListFilm from '../src/components/ListFilms'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { txtTitleFilm: "", fetchData: "" }
    }

    onChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value
        this.setState({
            [name]: value
        })
     }

     onSubmit = (event) => {
        event.preventDefault();
        this.searchFilms()
    }
    
    searchFilms = async () => {
        let keyWord = this.state.txtTitleFilm
        let films = await getFilmsByTitle(keyWord)
        this.setState({fetchData : films})
        // await axios.get(`http://www.omdbapi.com/?s=${keyWord}&apikey=dd31b83b`)
        //     .then(response => {
        //         this.setState({
        //             fetchData: response
        //         })
        //     })
        //     .catch(error => {
        //         console.log('err--', error)
        //     })
    }

    render(){
        let data = this.state.fetchData ? this.state.fetchData : this.props.data
        let showFilm;
        if (data == undefined || data.Response == "False") {
            showFilm = (
                <div><h4>Không có kết quả nào được tìm thấy</h4></div>
            )
        } else {
            showFilm = (
                <div>
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <h4>Số kết quả tìm được: {data.Search.length}</h4>
                        </div>
                    </div>
                    <div className="row">
                        {data.Search.map((value, index) => (
                             <ListFilm value={value} key={index}/>
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
                            name="txtTitleFilm"
                            onChange={this.onChange}
                            value={this.state.txtTitleFilm}
                            className="form-control"
                            placeholder="Nhập tiêu đề phim" />
                    </div>
                    <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                </form>
                <br />
                {showFilm}
            </Layout>
        )
    }
}

export default Search