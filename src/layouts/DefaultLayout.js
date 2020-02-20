import Header from '../components/Header'
import Footer from '../components/Footer'

function DefaultLayout(props) {
    return (
        <div className="container">
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}
export default DefaultLayout        