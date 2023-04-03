import axios from "axios";

const CATEGORY_REST_API_URL = "http://localhost:8080/categories/clothingitems";

class CategoryService {
  getCategories() {
    axios.get(CATEGORY_REST_API_URL);
  }
}

export default new CategoryService();
