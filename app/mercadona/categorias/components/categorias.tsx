"use client"

import Navbar from "@/components/navbar";
import {Heading} from "@/components/ui/heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion" 
import {Button} from "@/components/ui/button"
import {db} from "@/lib/db"
import InputSearch from "@/app/mercadona/categorias/components/search-input";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const SearchCategoryPage = async() => {
  
  const router = useRouter();
  const pathname = usePathname;

  const handleSubcategoryClick = (id: number) => {
    router.push(`${pathname}/${id}`);
  };


  const categorias = await db.mercadona_Categories.findMany({
    orderBy: {
      name: "asc",
    }
  })
  const subcategorias = await db.mercadona_Subcategories.findMany({
    orderBy: {
      name: "asc",
    }
  })

  return(
    <div>
    <Navbar></Navbar>
      <Heading 
      title="Categorías" 
      description="¡Echa un vistazo a todas las categorías de Mercadona!"
      />
      <div className="pl-4 pr-4 w-[100%]">
      <InputSearch/>
      <Accordion type="single" collapsible className="w-full">
      {categorias
      .map((filteredCategoria) => (
        <AccordionItem key={filteredCategoria.id} value={filteredCategoria.name}>
          <AccordionTrigger>{filteredCategoria.name}</AccordionTrigger>
          <AccordionContent>
            {subcategorias
            .filter((subcategoria) => subcategoria.id_category === filteredCategoria.id)
            .map((filteredSubcategoria) => (
              <div key={filteredSubcategoria.id}>
              {/* Wrap the button with a Link component */}
              <Link href={`${pathname}/${filteredSubcategoria.id}`} passHref>
                <Button variant="link" onClick={() => handleSubcategoryClick(filteredSubcategoria.id)}>
                  {filteredSubcategoria.name}
                </Button>
              </Link>
            </div>         
                ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
    </div>
  )
}

export default SearchCategoryPage


