import FoodItem from "../../RestaurantFoods/FoodItem/FoodItem";

const OrderItemTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {items.map((item) => (
        <FoodItem key={item._id} item={item}></FoodItem>
      ))}
    </div>
  );
};

export default OrderItemTab;
