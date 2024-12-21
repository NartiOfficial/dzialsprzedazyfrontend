import Image from "next/image";
import { Header } from "./Components/MainPage/Header/Header";
import { Opinion } from "./Components/MainPage/Opinion/Opinion";

export default function Home() {
	return (
		<>
			<Header />
			<Opinion />
		</>
	);
}
