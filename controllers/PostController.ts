import Post from '../models/Post';

export function getAllPosts(req, res, next) {
  Post.find((err, posts) => {
    if (err) return res.status(500).json({ err });

    res.status(200).json({ posts });
  })
}

export function getPostById(req, res, next) {
  const { id } = req.params;

  Post.findById(id, (err, post) => {
    if (err) return res.status(500).json({ err });

    res.status(200).json({ post });
  })
}

export function createPost(req, res, next) {
  const { title, content } = req.body;

  if (!title) return res.status(422).json({ err: 'Title is required.' });
  if (!content) return res.status(422).json({ err: 'Content is required.' });

  const post = new Post({ title, content });

  post.save((err, post) => {
    if (err) return res.status(500).json({ err });

    res.status(200).json({ post })
  })
}

export function updatePost(req, res, next) {
  const { id } = req.params;

  Post.findByIdAndUpdate(id, req.body, (err, post) => {
    if (err) return res.states(500).json({ err });

    res.status(200).json({ post })
  })
}

export function deletePost(req, res, next) {
  const { id } = req.params;

  Post.findByIdAndDelete(id, (err, post) => {
    if (err) return res.states(500).json({ err: 'Post not found.' });

    res.status(200).json({ post });
  });
}