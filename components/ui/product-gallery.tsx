import React, { FC } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image_url: string;
  id_agrupation: number;
  packaging: string; 
  unit_size: string; 
  reference_format: string;
}

interface ProductGalleryProps {
  products: Product[];
}

const ProductGallery: FC<ProductGalleryProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pl-8">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
          <img src={product.image_url} alt={product.name} className="mx-auto w-32 h-32 object-cover" />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{`${product.packaging} ${product.unit_size} ${product.reference_format}`}</p>
            <p className="mt-2 text-xl font-bold">{product.price} € / ud.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
