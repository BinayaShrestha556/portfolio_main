import prismadb from "@/lib/db"
import { NextResponse } from "next/server"

const GET=async ()=>{
try {
        const projects=await prismadb.project.findMany({
            where:{},
            include:{
                images:true
            },
            orderBy:{
                priority:"desc"
            }
        })
     
        return NextResponse.json(projects)
} catch (error) {
    console.log(error)
    return new NextResponse("server error",{status:500})
}
}
export { GET}