import MainNavigation from "../mainNavigation/MainNavigation";
import Footer from "../footer/Footer";


function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main >{ props.children }</main>
            <Footer />
        </div>
    )
}

export default Layout;