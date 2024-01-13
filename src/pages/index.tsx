import Head from "next/head";

export default function Home() {
  	return (
		<>
			<Head>
				<title>Ulthra | Store</title>
			</Head>
			<main className=" flex flex-col justify-center min-h-screen bg-gradient-to-br from-slate-950 to-slate-800">
				<div className="container flex flex-col items-center justify-center gap-12 px-4 py-14 ">
					<h1 className="font-bold tracking-tight text-white sm:text-[5rem]">
						Ulthra
					</h1>
				</div>
			</main>
		</>
  	);
}
