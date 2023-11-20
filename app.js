// const express = require('express');
import "dotenv/config";
import session from "express-session";
import express from "express";
import cors from "cors";
import helloRoutes from "./hello.js";
import lab5 from './lab5.js';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
const app = express();
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
helloRoutes(app);
lab5(app);
app.listen(process.env.PORT || 4000);