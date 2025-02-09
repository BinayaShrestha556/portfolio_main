"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-actions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductColumns = {
  id: string;
  title: string;
priority:number;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumns>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
  },
  {
    accessorKey:"priority",
    header:"Priority"
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
