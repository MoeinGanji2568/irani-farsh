import { useParams } from "react-router-dom";
import { Rug } from "../../../data/dataTypes";
import rugsData from "../../../data/rugs.json";
import RugsDetailData from "./RugsDetailData";

const RugsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const rugs = rugsData.find((r) => r.id === Number(id));
  if (!rugs) return <h1>Data Not Found ..!</h1>;
  return (
    <div className="w-[1220px] m-auto">
      <RugsDetailData rugs={rugs} />
    </div>
  );
};

export default RugsDetail;
