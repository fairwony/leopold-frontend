import axios from "axios";
import { useEffect } from "react";
import WhiteHeader from "../components/WhiteHeader";

export default function Test() {
	useEffect(() => {
		axios.get('http://localhost:8080/test', { withCredentials: true })
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response.data);
			})
	}, [])

	return (
		<>
			<WhiteHeader />

			<button style={{ display: "flex", margin: "200px auto 0px auto" }} onClick={() => {
				axios.get('http://localhost:8080/test/info', { withCredentials: true })
					.then((response) => {
						console.log(response.data);
					})
					.catch((error) => {
						console.log(error.response.data);
					})
			}}>
				현재 로그인된 유저정보 가져오기
			</button>
		</>
	)
}