// "use client"

// import { Input } from "@/components/ui/input"

// import { useState} from 'react';

// export default function InputSearch() {
//     const [search, setSearch] = useState('')
//     return(
//         <Input 
//             placeholder="Buscar categoría..."
//             onChange={(e) => setSearch(e.target.value)}
//             value={search}
//         />
//     )
// }


   // InputSearch
   "use client"
    
   import { Input } from "@/components/ui/input"
   import { useSearchParams, usePathname, useRouter } from 'next/navigation';


   export default function InputSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
          } else {
            params.delete('query');
          }
          replace(`${pathname}?${params.toString()}`);

      }
       
       return(
           <Input 
               placeholder="Buscar categoría..."
               onChange={(e) => {
                handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get('query')?.toString()}
           />
       )
   }