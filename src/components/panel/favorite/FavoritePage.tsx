import { useQuery } from "@tanstack/react-query";
import { getFavoriteCarpet } from "../../../services/api/carpets";
import ProfileTable from "../../common/Table";
import { favoriteColumns } from "./columns";

function FavoritePage() {
  const { data } = useQuery({
    queryKey: ["favorite-carpets"],
    queryFn: getFavoriteCarpet,
  });
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">فرش های مورد علاقه</h1>
      <ProfileTable data={data || []} columns={favoriteColumns} />
    </div>
  );
}

export default FavoritePage;
