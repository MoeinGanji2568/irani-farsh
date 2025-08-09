import http from "../../httpService";

export async function getCategory() {
  return http.get(`/categories`).then(({ data }) => data.data);
}

const categoryService = {
  getCategory,
};

export default categoryService;
