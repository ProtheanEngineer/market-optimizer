import { db } from "@/lib/db";
import {Mercadona_Categories, Mercadona_Subcategories} from "@prisma/client";

type GetCategories = {
    name?: string
}

export const getCategories = async ({
    name
}: GetCategories) => {
    const categorias =  db.mercadona_Categories.findMany({
      where: {
        name: {
          contains: name
        }
      },
        orderBy: {
          name: "asc",
        }
      }
    )

    const subcategorias =  db.mercadona_Subcategories.findMany({
        orderBy: {
          name: "asc",
        }
      }
    )

    return {
        categorias, 
        subcategorias
    }
}