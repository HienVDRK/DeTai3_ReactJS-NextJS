import Link from 'next/link'
import Head from './header'
import Footer from './footer'

function Bookmark() {
    let show_bookmark;
    let id_arrs = JSON.parse(localStorage.getItem("imdbID"));
    if(id_arrs && id_arrs.length){
        show_bookmark = (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h4>Các bộ phim đã bookmark: {id_arrs.length}</h4>
                    </div>
                </div>
                <div className="row">
                    {id_arrs.map((val, index) => (
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ height: 490 }}>
                            <Link as={`/detail/${val.id}`} href={{ pathname: '/detail', query: { keyword_id: `${val.id}` } }}>
                                <img src={val.poster} style={{ height: 350, width: 250, cursor: 'pointer' }} alt="Image" />
                            </Link>
                            <br />
                            <div style={{ height: 100 }}>
                                <Link as={`/detail/${val.id}`} href={{ pathname: '/detail', query: { keyword_id: `${val.id}` } }}>
                                    <h4 style={css_search}>{val.title}</h4>
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
    else{
        show_bookmark= (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h4>Chưa có bộ phim nào được bookmark</h4>
                </div>
            </div>
        )
    }

    const css_search = {cursor: 'pointer', fontWeight: 'bold'}
    return <div className="container">
        <Head />
        <h1 className="text-center">
                Danh sách phim đã bookmark
        </h1>
        <hr/>
        {show_bookmark}
        <Footer />
    </div>
}
export default Bookmark  