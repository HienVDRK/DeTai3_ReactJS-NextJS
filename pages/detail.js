import Head from './header'
function Detail() {
    return <div className="container">
        <Head/>
        <h3>Chi tiết phim</h3>
      <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <img src="#" className="img-responsive"/>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <h4 style={{ height: 30}}>Tên phim</h4>
                <h4 style={{ height: 30}}>Title</h4>
                <h4 style={{ height: 30}}>Year</h4>
                <h4 style={{ height: 30}}>imdbID</h4>
                <h4 style={{ height: 30}}>Type</h4>
          </div>
      </div>
    </div>
}
export default Detail