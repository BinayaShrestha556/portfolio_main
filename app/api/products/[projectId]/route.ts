import prismadb from "@/lib/db"
import { NextResponse } from "next/server"

const GET=async ( req: Request,
    { params }: { params: Promise<{ projectId: string } >})=>{
        const {projectId}=await params
        if (!projectId)
            return new NextResponse("id is required", { status: 400 });
    
        const projects=await prismadb.project.findMany({
            where:{id:projectId},
            include:{
                images:true
            },
            orderBy:{
                priority:"desc"
            }
        })
      
        return NextResponse.json(projects)

}
export { GET}