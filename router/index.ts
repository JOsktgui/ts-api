import * as express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../controllers/PostController';

export default app => {
  // POST ROUTEs
  const apiRoutes = express.Router();
  const postRoutes = express.Router();

  apiRoutes.use('/posts', postRoutes);

  postRoutes.get('/', getAllPosts);
  postRoutes.get('/:id', getPostById);
  postRoutes.post('/', createPost);
  postRoutes.put('/:id', updatePost);
  postRoutes.delete('/:id', deletePost);

  app.use('/api', apiRoutes);
}