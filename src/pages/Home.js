import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"
import "./Home.css"

export default function Home() {
	return (
		<div className="Home">
			<Header />
			<Main>
				<p>home</p>
				<p>서고은 확인</p>
			</Main>
			<Footer />
		</div>
	)
}