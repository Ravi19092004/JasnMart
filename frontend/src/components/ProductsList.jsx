// frontend/src/components/ProductsList.jsx
import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
	const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

	return (
		<motion.div
			className='bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>

			{/* Scrollable Table Container */}
			<div className="max-h-[500px] overflow-y-auto">
				<table className='min-w-full divide-y divide-gray-700'>
					<thead className='bg-gray-700 sticky top-0 z-10'>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>
								Product
							</th>

							<th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>
								Price
							</th>

							<th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>
								Category
							</th>

							<th className='px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider w-24'>
								Featured
							</th>

							<th className='px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider w-24'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='bg-gray-800 divide-y divide-gray-700'>
						{products?.map((product) => (
							<tr key={product._id} className='hover:bg-gray-700'>
								
								{/* PRODUCT */}
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='flex items-center'>
										<img
											className='h-10 w-10 rounded-full object-cover'
											src={product.image}
											alt={product.name}
										/>
										<div className='ml-4 text-sm font-medium text-white'>
											{product.name}
										</div>
									</div>
								</td>

								{/* PRICE */}
								<td className='px-6 py-4 whitespace-nowrap text-gray-300'>
									${product.price.toFixed(2)}
								</td>

								{/* CATEGORY */}
								<td className='px-6 py-4 whitespace-nowrap text-gray-300'>
									{product.category}
								</td>

								{/* FEATURED */}
								<td className='px-6 py-4 whitespace-nowrap text-center w-24'>
									<button
										onClick={() => toggleFeaturedProduct(product._id)}
										className={`p-1 rounded-full ${
											product.isFeatured
												? "bg-yellow-400 text-gray-900"
												: "bg-gray-600 text-gray-300"
										} hover:bg-yellow-500 transition`}
									>
										<Star className='h-5 w-5' />
									</button>
								</td>

								{/* ACTION */}
								<td className='px-6 py-4 whitespace-nowrap text-center w-24'>
									<button
										onClick={() => deleteProduct(product._id)}
										className='text-red-400 hover:text-red-300'
									>
										<Trash className='h-5 w-5' />
									</button>
								</td>

							</tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default ProductsList;
