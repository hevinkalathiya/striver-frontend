import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "./components/ui/button";
import { format } from "date-fns";

export type Table = {
  username: string;
  code: string;
  codeLanguage: string;
  std: string;
  createdAt: string;
};

export const Columns: ColumnDef<Table>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          User Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: (row) => {
      return <p className="truncate w-44">{row.row.original.code}</p>;
    },
  },
  {
    accessorKey: "codeLanguage",
    header: "Code Language",
    cell: (row) => {
      return (
        <div className="">
          <span className="truncate bg-green-500/30 border font-semibold border-green-500 p-2 rounded-md">
            {row.row.original.codeLanguage}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "std",
    header: "Standard Input",
  },
  {
    cell: (row) => {
      const createdAt = row.row.original.createdAt;
      return format(new Date(createdAt), "yyyy-MM-dd HH:mm");
    },
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
