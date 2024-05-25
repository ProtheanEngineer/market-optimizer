import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CategoryButton from './category-button';

interface Categoria {
  id: number;
  name: string;
}

interface Subcategoria {
  id: number;
  id_category: number;
  name: string;
}

interface Props {
  categorias: Categoria[];
  subcategorias: Subcategoria[];
  query: string;
  className?: string;
}

function CategoriasMenu({ categorias, subcategorias, query, className }: Props) {
  return (
    <Accordion type="single" collapsible className={`${className}`}>
      {categorias
        .filter((categoria) => categoria.name.toLowerCase().includes(query.toLowerCase()))
        .map((filteredCategoria) => (
          <AccordionItem key={filteredCategoria.id} value={filteredCategoria.name}>
            <AccordionTrigger>{filteredCategoria.name}</AccordionTrigger>
            <AccordionContent>
              {subcategorias
                .filter((subcategoria) => subcategoria.id_category === filteredCategoria.id)
                .map((filteredSubcategoria) => (
                  <div key={filteredSubcategoria.id}>
                    <CategoryButton
                      id={filteredSubcategoria.id}
                      subcategoria={filteredSubcategoria.name}
                      className={`${className} pl-0`}
                    />
                  </div>
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}

export default CategoriasMenu;
