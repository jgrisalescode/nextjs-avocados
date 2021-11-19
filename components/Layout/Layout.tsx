import Navbar from "@components/Navbar/Navbar"

const Layout: React.FC = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
            <style jsx>{`
                div {
                    background: salmon
                }
            `}</style>
        </div>
    )
}

export default Layout
