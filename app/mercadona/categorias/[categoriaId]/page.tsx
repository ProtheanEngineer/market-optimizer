import {db} from "@/lib/db"
import ProductHeading from "./components/product-heading";
import CategoriasMenu from "../components/categorias-menu";
import Navbar from "@/components/navbar";
import ProductGallery from "@/components/ui/product-gallery";

interface Categoria {
    id: number;
    name: string;
  }
  
  interface Subcategoria {
    id: number;
    id_category: number;
    name: string;
  }

  interface Agrupacion_Productos {
    id: number;
    id_subcategory: number;
    name: string;
  }

  interface Product {
    id: number;
    name: string;
    price: string;
    image_url: string;
    id_agrupation: number;
    packaging: string | null; 
    unit_size: number | null; 
    reference_format: string;
  }

const ProductosPage = async({
    params
}: {
    params: {subcategoriaId: number}
}) => {

    const checkSubcategoriaId = (params: any) => {
        return params.subcategoriaId;
    }

    const categorias: Categoria[] = await db.mercadona_Categories.findMany({
        orderBy: {
          name: "asc",
        }
      });
      
      const subcategorias: Subcategoria[] = await db.mercadona_Subcategories.findMany({
        orderBy: {
          name: "asc",
        }
      });
      
      const subcategoria = await db.mercadona_Subcategories.findFirst({
        where: {
          id: params.subcategoriaId
        }
      }
      )
      const productos_agrupaciones: Agrupacion_Productos[] = await db.mercadona_Product_Agrupations.findMany({
        where: {
          id_subcategory: {
            equals: params.subcategoriaId
          }
        },
        orderBy: {
            name: "asc",
        }          
        }
      )

      const productos: Product[] = await db.mercadona_Products.findMany({
        orderBy: {
          name: "asc",
        }
      }
      )


    return (
      <div className="">
        <Navbar></Navbar>
        <div className="flex">
          <CategoriasMenu
            categorias={categorias}
            subcategorias={subcategorias}
            query=""
            className="w-[22%] pl-4 text-xs justify-start text-left start-0 py-0"
          />
          <div className="w-[78%]">
            <div className="flex">
              {subcategoria && (
                <ProductHeading
                  classNameTitle="w-[100%] "
                  agrupacion={subcategoria.name}
                  descripcion="Observe todos los productos"
                />
              )}
            </div>
            <div className="">
              {subcategoria && productos_agrupaciones
              .filter((agrupacion) => agrupacion.id_subcategory === subcategoria.id)
              .map((agrupacion) => (
                <div key={agrupacion.id}>
                  <ProductHeading
                    classNameTitle="text-base pl-8 pt-8"
                    agrupacion={agrupacion.name}
                    descripcion=""
                  />
                  <ProductGallery
                    products={productos.filter(
                      (product) => product.id_agrupation === agrupacion.id
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProductosPage