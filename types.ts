export interface Product {
    id: string;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[]
  };
  
  export interface Image {
    id: string;
    url: string;
  }
  
  export interface Categoria {
    id: string;
    NAME: string;
    imageUrl: string;
  };
  
  export interface Subcategoria {
    id: string;
    name: string;
    id_categoria: string;
  };
  
  export interface Size {
    id: string;
    name: string;
    value: string;
  };
  
  export interface Color {
    id: string;
    name: string;
    value: string;
  };
  