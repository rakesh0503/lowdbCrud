import express, { Express } from "express";
import userProfileRoutes from "./routes/user-profile-routes.js";
import cors from "cors";
import metaType from "./routes/meta-type-routes.js";

const app: Express = express();
app.use("*", cors({ origin: "*" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userProfileRoutes);
app.use("/api", metaType);
export default app;
