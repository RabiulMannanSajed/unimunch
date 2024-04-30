import { useQuery } from "@tanstack/react-query";

const useLike = () => {
  const {
    data: likeFoods = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["likeFoods"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/likeFoods");
      return res.json();
    },
  });
  return [likeFoods, loading, refetch];
};

export default useLike;
