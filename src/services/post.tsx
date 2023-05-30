import Service from "./service";

export async function getPosts(): Promise<any> {
  try {
    const response = await Service.get("/posts");
    return { status: true, data: response.data, message: "Get All" };
  } catch (error: any) {
    return { status: false, data: null, message: "Error" };
  }
}

// export const createPost = async (post: any): Promise<any> => {
//   const response = await axios.post<any>(`${BASE_URL}/posts`, post);
//   return response.data;
// };

// export const updatePost = async (postId: number, post: any): Promise<any> => {
//   const response = await axios.put<any>(`${BASE_URL}/posts/${postId}`, post);
//   return response.data;
// };

// export const deletePost = async (postId: number): Promise<void> => {
//   await axios.delete(`${BASE_URL}/posts/${postId}`);
// };
