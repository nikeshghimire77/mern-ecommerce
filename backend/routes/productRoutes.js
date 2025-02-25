import express from 'express';
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
const router = express.Router();

import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);
router
  .route('/:id')
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
