import Header from "./header";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header/>
			<main className="flex flex-col justify-center min-h-screen">
				{children}
			</main>
		</>
	)
} 

export default Layout;