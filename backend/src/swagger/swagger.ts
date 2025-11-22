import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { Express } from "express";

export const setupSwagger = (app: Express) => {
  const swaggerPath = path.join(__dirname, "../docs/swagger.json");
  const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, "utf8"));

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  console.log("📘 Swagger UI disponible en: http://localhost:3000/api-docs");
};
