"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv")); //import by showing doc
const path_1 = __importDefault(require("path")); //this also import
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) }); //directory of env file
exports.default = {
    //export this
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
};
