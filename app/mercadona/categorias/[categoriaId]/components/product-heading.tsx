"use client"

import React from 'react';
import { Heading } from "@/components/ui/heading";

interface ProductHeadingProps {
  agrupacion: string;
  descripcion: string;
  classNameTitle?: string;
  classNameDescription?: string;
}

const ProductHeading: React.FC<ProductHeadingProps> = ({
  agrupacion,
  descripcion,
  classNameTitle, 
  classNameDescription
}) => {
  return (
    <div>
      <Heading 
        title={agrupacion}
        description={descripcion}
        classNameTitle={classNameTitle}
        classNameDescripcion={classNameDescription}
      />
    </div>
  );
};

export default ProductHeading;
