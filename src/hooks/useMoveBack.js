import { useNavigate } from 'react-dom';

export function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
