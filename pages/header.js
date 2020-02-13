import Header from 'next/head'
import Link from 'next/link'

function Head() {
    return <div>
        <Header>
            <title>Phim IMDB</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        </Header>

        <nav className="navbar navbar-inverse">
            <Link href='/index'>
                <a className="navbar-brand">IMDB</a>
            </Link>
            <ul className="nav navbar-nav">
                <li>
                    <Link href='/about'>
                        <a href="#">About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/bookmark'>
                        <a href="#">Bookmark</a>
                    </Link>
                </li>
            </ul>
        </nav>

    </div>
}
export default Head        