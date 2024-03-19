import { useEffect, useState } from "react";
import axios from "axios";
import { StarIcon } from "lucide-react";
import { DataTable } from "./components/Data-table";
import { Columns } from "./components/Columns";

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
