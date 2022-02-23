import { SET_LATEST_NEWS } from "./constans";

const initialState = {
  latestNews: []
}

const news = (state = initialState, { type , payload}) => {
  switch (type) {
    case SET_LATEST_NEWS:
      return {
        ...state,
        latestNews: [...state.latestNews, ...payload]
      };
    default:
      return state;
  }
};

export default news;
