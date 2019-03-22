"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/blog',
    // test enviroment
    test_env: 'test',
    test_db: 'mongodb://localhost/blog-test',
    test_port: 3001
};
exports.default = config;
//# sourceMappingURL=main.js.map