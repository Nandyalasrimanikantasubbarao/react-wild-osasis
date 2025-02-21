import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  const navigate = useNavigate();
  const val = () => navigate(-1);
  return val;
}
