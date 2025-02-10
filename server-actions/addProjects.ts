"use server"


import prismadb from "@/lib/db"

interface Values{
    title:string,
    images:{url:string}[]
    description:string
    liveWebsiteUrl:string
    sourceCodeUrl:string
    password:string
    priority:number

}
const addProjects=async(values:Values)=>{
 try {
    if(values.password===process.env.PASSWORD){
       await prismadb.project.create({
           data:{
               title:values.title,
               description:values.description,
               liveWebsiteUrl:values.liveWebsiteUrl,
               priority:values.priority,
               sourceCodeUrl:values.sourceCodeUrl,
               images:{
                   createMany:{
                       data:values.images
                   }
               }
           }
       })
    return "success"} 
       else return "failed"
 } catch (error) {
    console.log(error)
    return "failed"
 }

}
interface Update extends Values{
    id:string

}
export {addProjects}
export const updateProjects=async(values:Update)=>{
    try{
        if(values.password===process.env.PASSWORD){
            await prismadb.project.update({
                where:{
                    id:values.id
                },
                data:{
                    title:values.title,
                    description:values.description,
                    liveWebsiteUrl:values.liveWebsiteUrl,
                    sourceCodeUrl:values.sourceCodeUrl,
                    priority:values.priority,
                    images:{
                        deleteMany:{}
                    }
                }
            })
            await prismadb.project.update({where:{id:values.id},
                data:{
                    images:{
                        createMany:{
                            data:values.images
                        }
                    }
                }
            })
        return "success"
    }
}catch(error){
console.log(error)
return "failed"
}}