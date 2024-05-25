import React from 'react';
import Navbar from "@/components/navbar";
import { Heading } from "@/components/ui/heading";
import { db } from "@/lib/db";
import InputSearch from "@/app/mercadona/categorias/components/search-input";
import CategoriasMenu from './components/categorias-menu'; 

interface Categoria {
  id: number;
  name: string;
}

interface Subcategoria {
  id: number;
  id_category: number;
  name: string;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

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

  return (
    <div>
      <Navbar></Navbar>
      <Heading
        title="Categorías"
        description="Description"
      />
      <div className="pl-4 pr-4 w-[100%]">
        <InputSearch />
        {/* Pass categorias, subcategorias, and query as props to CategoriasMenu */}
        <CategoriasMenu 
        categorias={categorias} 
        subcategorias={subcategorias} 
        query={query} />
      </div>
    </div>
  );
}
