import { useParams } from "react-router-dom";
import RugsDetailData from "./RugsDetailData";
import { useQuery } from "@tanstack/react-query";
import { getCarpetDetail } from "../../../services/api/carpets";

const RugsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: rugs } = useQuery({
    queryKey: ["carpet", id],
    queryFn: () => getCarpetDetail(Number(id)),
  });
  if (!rugs) return <h1>Data Not Found ..!</h1>;
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RugsDetailData rugs={rugs?.data} />
    </div>
  );
};

export default RugsDetail;
