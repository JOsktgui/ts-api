"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var postSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    content: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose.model('Post', postSchema);
//# sourceMappingURL=Post.js.map