import { ADD_TO_CART} from "./constant";

export const cartData = (data = [], action) => {
  // if(action.type===ADD_TO_CART){
  //     console.log("reducer called",action)
  //     return action.data
  // }else{
  //     return "no data found"
  // }

  switch (action.type) {
    case ADD_TO_CART:
      console.log("Add to cart via switch", action);
      return [action.data, ...data];

    //   case Remove_TO_CART:
    //   console.log("Remove to cart via switch", action);
    //   return 1 + 1;

    default:
      return data;
  }
};
