import Link from 'next/link';
import ArrowUpIcon from '~/icons/arrowup_icon.svg';
import { CategoryInterface } from "~/types/home";

function Category({ imgsrc, imgalt, title }: CategoryInterface) {

	return (
		<>
			<div>
				<img src={imgsrc} alt={imgalt} className="rounded-xl min-w-[400px]"/>
			</div>
			<div className="px-10 py-20 flex flex-col items-center w-full">
				<h2>{title}</h2>
				<div>
					<div>
						{/* <img/> */}
					</div>
				</div>
				<Link href="/shop/shirts" className="mt-5 flex items-center group">
					<p>See all products</p>
					<ArrowUpIcon className="ml-3 rotate-90 h-5 fill-slate-50 group-hover:fill-orange-500"/>
				</Link>
			</div>
		</>
	)
} 

export default Category;