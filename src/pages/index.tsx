import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Category from "~/coomponents/home/category";

export default function Home() {
	const [ currProdCat, setCurrProdCat ] = useState<'shirts' | 'pants' | 'sneakers' | 'accessories'>('shirts')

  	return (
		<>
			<Head>
				<title>Ulthra | Store</title>
			</Head>
			<div className="box-border lg:px-20 lg:py-10 w-full max-w-screen-2xl">
				<div className="relative rounded-xl flex justify-center lg:rounded-xl overflow-hidden">
					<img src='/img/hero.jpg' alt="hero" className="w-full"/>
				</div>
			</div>
			<div className="p-10 w-full max-w-6xl">
				<h2 className="text-center">New products</h2>
				<div className="flex flex-wrap mt-10 justify-center">
					<button 
						className={`mx-2 mb-3 border-2 ${currProdCat === 'shirts' ? 'bg-transparent border-orange-500' : 'border-orange-500/0'}`}
						onClick={() => setCurrProdCat('shirts')}
					>
						Shirts
					</button>
					<button 
						className={`mx-2 mb-3 border-2 ${currProdCat === 'pants' ? 'bg-transparent border-orange-500' : 'border-orange-500/0'}`}
						onClick={() => setCurrProdCat('pants')}
					>
						Pants
					</button>
					<button 
						className={`mx-2 mb-3 border-2 ${currProdCat === 'sneakers' ? 'bg-transparent border-orange-500' : 'border-orange-500/0'}`}
						onClick={() => setCurrProdCat('sneakers')}
					>
						Sneakers
					</button>
					<button 
						className={`mx-2 mb-3 border-2 ${currProdCat === 'accessories' ? 'bg-transparent border-orange-500' : 'border-orange-500/0'}`}
						onClick={() => setCurrProdCat('accessories')}
					>
						Accessories
					</button>
				</div>
				<div className="mt-10 w-full">
					<div className="flex bg-gray-900 rounded-xl h-[600px]">
						{currProdCat === 'shirts' && <Category imgsrc='/img/shirts/shirt_1.jpg' imgalt='main-product' title='Shirts'/>}
						{currProdCat === 'pants' && <Category imgsrc='/img/pants/pants_1.jpg' imgalt='main-product' title='Pants'/>}
						{currProdCat === 'sneakers' && <Category imgsrc='/img/sneakers/sneakers_1.jpg' imgalt='main-product' title='Sneakers'/>}
						{currProdCat === 'accessories' && <Category imgsrc='/img/accessories/accessories_1.jpg' imgalt='main-product' title='Accessories'/>}
					</div>
				</div>
			</div>
		</>
  	);
}
