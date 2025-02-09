import prismadb from "@/lib/db"
import ProductClient from "./components/client"
import {format} from "date-fns"

import { ProductColumns } from "./components/columns"


const Products = async () => {

  const projects=await prismadb.project.findMany({
    where:{
      
    },
    include:{
   images:true
    },
    orderBy:{
      createdAt:"desc"
    }
  })
  const formattedProjects:ProductColumns[]=projects.map((e)=>(
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