import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpDown, StarIcon } from "lucide-react";
import { DataTable } from "./Data-table";
import { Button } from "./components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

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
      return (
        <div className="flex items-center justify-center">
          <button
            onClick={() => {
              console.log(row.row.original);
            }}
            className="border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0"
          >
            View
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: "codeLanguage",
    header: "Code Language",
  },
  {
    accessorKey: "std",
    header: "Standard Input",
  },
  {
    // cell: (row) => {
    //   return new Date(row.row.original.createdAt);
    // },
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

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://striver-backend-1.onrender.com/api/code"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className=" h-screen flex items-center justify-center">
        <StarIcon className="animate-spin text-red-600" />
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto py-10">
        <DataTable columns={Columns} data={data} />
      </div>
    </div>
  );
};

export default Table;
