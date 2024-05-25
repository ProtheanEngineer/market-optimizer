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


const ProductsPage = async() => {
  
  const productos = await db.mercadona_Products.findMany({
  })
  const categorias = await db.mercadona_Categories.findMany({
    orderBy: {
      NAME: "asc",
    }
  })
  const subcategorias = await db.mercadona_Subcategories.findMany({
    orderBy: {
      name: "asc",
    }
  })
  const agrupaciones = await db.mercadona_Product_Agrupations.findMany({})
  
  return (
    <div>
      <Navbar></Navbar>
      <Heading 
      title="Productos" 
      description="¡Echa un vistazo a todos los productos de Mercadona!"
      />
      <Accordion type="single" collapsible className="w-full">
      {categorias.map((categoria) => (
        <AccordionItem key={categoria.id} value={categoria.NAME}>
          <AccordionTrigger>{categoria.NAME}</AccordionTrigger>
          <AccordionContent>
            {subcategorias
              .filter((subcategoria) => subcategoria.id_category === categoria.id)
              .map((filteredSubcategoria) => (
                <div>
                  <Button variant="link" key={filteredSubcategoria.id}>{filteredSubcategoria.name}</Button>  
                </div>            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </div>
  )
}

export default ProductsPage
