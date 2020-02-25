import Layout from '../src/layouts/DefaultLayout'
import ListFilm from '../src/components/ListFilms'

function Bookmark() {
    let showBookmark
    const arrObjFilms = JSON.parse(localStorage.getItem("BookmarkFilms"))
    if (arrObjFilms && arrObjFilms.length) {
        showBookmark = (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h4>Các bộ phim đã bookmark: {arrObjFilms.length}</h4>
                    </div>
                </div>
                <div className="row">
                    {arrObjFilms.map((value, index) => (
                        <ListFilm value={value} key={index} />
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