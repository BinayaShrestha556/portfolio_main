"use client"

import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { ProductColumns, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

interface ProductProps{
  data: ProductColumns[]
}
const ProductClient: React.FC<ProductProps> = ({data}) => {
    const router = useRouter()
    const params= useParams()

  return (
    <>
    <div className="flex items-center justify-between mt-20">
<h1 className="text-4xl font-bold">project</h1>
<Button onClick={()=>router.push(`/admin/projects/new`)}>
    <Plus className="mr-2 h-4 w-4"/>
    Add new
</Button>
    </div>
    <Separator/>
    <DataTable searchKey="title" columns={columns} data={data}/>

    </>
  )
}

export default ProductClient