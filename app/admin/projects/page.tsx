
import ProductClient from "./components/client"
import {format} from "date-fns"

import { ProductColumns } from "./components/columns"
import { Project } from "@prisma/client"



const Products = async () => {

  const data=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,{cache:"no-store"})
  const projects=await data.json()
  const formattedProjects:ProductColumns[]=projects.map((e:Project)=>(
    {
      id:e.id,
      title:e.title,
      priority:e.priority,
      createdAt:format(e.createdAt,"MMMM do, yyyy")

    }
  ))
  
  return (
    <div className=" flex-col mt-15">
        <div className="flex-1 space-y-4 p-8 pt-6">
          
            <ProductClient data={formattedProjects}/>
        </div>
    </div>
  )
}

export default Products