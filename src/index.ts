import './scss/styles.scss';
import { ProductAPI } from './components/model/ProductApi';
import { API_URL, CDN_URL } from './utils/constants';

const api = new ProductAPI(CDN_URL, API_URL);

// Testing Api
// api.getProducts();
// api.getProduct("854cef69-976d-4c2a-a18c-2aa45046c390");
// api.orderProducts();