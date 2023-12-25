"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors")); //from cors
const express_1 = __importDefault(require("express")); //from express
const student_route_1 = require("./app/modules/student/student.route"); //student routes that is declared in student routes file
const app = (0, express_1.default)(); // app is application type
//parsers
app.use(express_1.default.json()); // that will parse data to json file
app.use((0, cors_1.default)()); // this is middleware, data sending and receiving helper
// application routes
app.use('/api/v1/students', student_route_1.StudentRoutes); //from student routes
const getAController = (req, res) => {
    //this is an example
    const a = 10;
    res.send(a);
};
app.get('/', getAController); //root route
exports.default = app;
