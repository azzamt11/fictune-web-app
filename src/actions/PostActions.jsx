import * as PostsApi from "../apiClient/PostApi";

export const getPosts = ({token}) => async (dispatch) => {
  dispatch({ type: "retrieve_processing"});
  try {
    const { data } = await PostsApi.getPosts(token);
    dispatch({ type: "retrieve_success", data: data});
    console.log("post fetched successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "retrieve_failed" });
  }
};