import http from "../../httpService";

interface CarpetFilters {
  page?: number;
  limit?: number;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
}

export async function getCarpet(
  page: number = 1,
  limit: number = 10,
  search: string = "",
  minPrice: number = 0,
  maxPrice: number = 0
) {
  const filters: CarpetFilters = {
    page,
    limit,
  };

  // Add search filter if provided
  if (search.trim()) {
    filters.search = search.trim();
  }

  // Add price filters if provided
  if (minPrice > 0) {
    filters.minPrice = minPrice;
  }

  if (maxPrice > 0) {
    filters.maxPrice = maxPrice;
  }

  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    params.append(key, value.toString());
  });

  return http
    .get(`/carpets?${params.toString()}`)
    .then(({ data }) => data.data);
}

export async function getCarpetDetail(id: number) {
  return http.get(`/carpets/${id}`);
}

export async function likeCarpet(id: number) {
  return http.post(`/carpets/${id}/like`);
}
export async function bookmarkCarpet(id: number) {
  return http.post(`/carpets/${id}/favorite`);
}
export async function removeLikeCarpet(id: number) {
  return http.delete(`/carpets/${id}/reaction`);
}

export async function removeBookmarkCarpet(id: number) {
  return http.delete(`/carpets/${id}/favorite`);
}

export async function getFavoriteCarpet() {
  return http.get(`/carpets/user/favorites`).then(({ data }) => data.data);
}

const carpetService = {
  getCarpet,
  getCarpetDetail,
  likeCarpet,
  bookmarkCarpet,
};

export default carpetService;
