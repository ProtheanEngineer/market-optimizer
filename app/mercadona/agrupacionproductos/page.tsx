import Navbar from "@/components/navbar";
import {Heading} from "@/components/ui/heading"

export default function Home() {
  return(
    <div>
      <Navbar></Navbar>
      <Heading 
      title="Comparador de supermercados" 
      description="Compara los precios de todos los productos de cada supermercado"
      />
    </div>
  )
}
