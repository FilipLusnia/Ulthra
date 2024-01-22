import Footer from "./footer";
import Header from "./header";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header/>
			<main className="min-h-screen pt-16 flex flex-col items-center">
				{children}
			</main>
			<Footer/>
		</>
	)
} 

export default Layout;