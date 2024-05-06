import { useQuery } from "@tanstack/react-query";

const useOrder = () => {
  const {
    data: orderFoods = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["orderFoods"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/orderFoods");
      return res.json();
    },
  });
  return [orderFoods, refetch, loading];
};

export default useOrder;
