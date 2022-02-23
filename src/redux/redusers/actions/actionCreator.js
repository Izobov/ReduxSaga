import { INCREASE_COUNT, DECREASE_COUNT } from "../constans";

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});
export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});
