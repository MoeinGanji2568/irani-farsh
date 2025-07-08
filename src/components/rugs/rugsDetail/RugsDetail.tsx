import { useParams } from "react-router-dom";
import { Rug } from "../../../data/dataTypes";
import rugsData from "../../../data/rugs.json";

const RugsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const rugs = rugsData.find((r) => r.id === Number(id));
  if (!rugs) return <h1>Data Not Found ..!</h1>;
  return (
    <div>
      <span>{rugs.title}</span>
    </div>
  );
};

export default RugsDetail;
