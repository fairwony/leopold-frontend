import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import "./Home.css"

export default function Home() {
	return (
		<div className="Home">
			<Header />
			<Main>
				<Banner></Banner>
			</Main>
			<Footer />
		</div>
	)
}