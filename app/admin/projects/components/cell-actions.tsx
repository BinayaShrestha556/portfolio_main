"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProductColumns } from "./columns";

import { Button } from "@/components/ui/button";
import { Copy, Delete, Edit, MoreHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";



interface CellActionProps {
  data: ProductColumns;
}
export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Id Copied");
  };
  const router=useRouter()
  const params=useParams()
  const [loading,setLoading]=useState(false);
  const [open,setOpen]=useState(false);
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/project/${data.id}`);
      router.refresh();
      router.push(`/admin/projects`);
      toast.success("deleted");
    } catch (error) {
      toast.error("error");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  const [mounted,setMounted]=useState(false)
  useEffect(()=>{
    setMounted(true)
  },[])
  if(!mounted) return null

  return (
    <>
   
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>{" "}
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onCopy(data.id)}>
          <Copy className="mr-2 h-4 w-4" /> Copy id
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>router.push(`/admin/projects/${data.id}`)}>
          <Edit className="mr-2 h-4 w-4" /> Update
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>onDelete()}>
          <Delete className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  );
};
