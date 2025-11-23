import express from "express";
import cors from "cors";
import farmRoutes from "./routes/farms.routes";
import cropRoutes from "./routes/crops.routes";



const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:5173" })); // Permitir peticiones desde el frontend
app.use(express.json()); // Permite recibir JSON del frontend

// Rutas API
app.use("/api/farms", farmRoutes);
app.use("/api/crops", cropRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
