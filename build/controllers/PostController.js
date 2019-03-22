"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post_1 = require("../models/Post");
function getAllPosts(req, res, next) {
    Post_1.default.find(function (err, posts) {
        if (err)
            return res.status(500).json({ err: err });
        res.status(200).json({ posts: posts });
    });
}
exports.getAllPosts = getAllPosts;
function getPostById(req, res, next) {
    var id = req.params.id;
    Post_1.default.findById(id, function (err, post) {
        if (err)
            return res.status(500).json({ err: err });
        res.status(200).json({ post: post });
    });
}
exports.getPostById = getPostById;
function createPost(req, res, next) {
    var _a = req.body, title = _a.title, content = _a.content;
    if (!title)
        return res.status(422).json({ err: 'Title is required.' });
    if (!content)
        return res.status(422).json({ err: 'Content is required.' });
    var post = new Post_1.default({ title: title, content: content });
    post.save(function (err, post) {
        if (err)
            return res.status(500).json({ err: err });
        res.status(200).json({ post: post });
    });
}
exports.createPost = createPost;
function updatePost(req, res, next) {
    var id = req.params.id;
    console.log('id', id);
    Post_1.default.findByIdAndUpdate(id, req.body, function (err, post) {
        if (err)
            return res.states(500).json({ err: err });
        res.status(200).json({ post: post });
    });
}
exports.updatePost = updatePost;
function deletePost(req, res, next) {
    var id = req.params.id;
    Post_1.default.findByIdAndDelete(id, function (err, post) {
        if (err)
            return res.states(500).json({ err: 'Post not found.' });
        res.status(200).json({ post: post });
    });
}
exports.deletePost = deletePost;
//# sourceMappingURL=PostController.js.map