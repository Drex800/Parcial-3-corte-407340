import { Request, Response } from "express";

let farms = [
  { id: 1, name: "Finca La Esperanza", owner: "Carlos" },
  { id: 2, name: "Finca El Progreso", owner: "Ana" }
];

export const getFarms = (req: Request, res: Response) => {
  res.json(farms);
};

export const addFarm = (req: Request, res: Response) => {
  const farm = { id: farms.length + 1, ...req.body };
  farms.push(farm);
  res.json({ message: "Finca registrada", data: farm });
};
export const getFarmById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const farm = farms.find(f => f.id === id);

  if (!farm) {
    return res.status(404).json({ message: "Finca no encontrada" });
  }

  res.json(farm);
};

export const updateFarm = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = farms.findIndex(f => f.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Finca no encontrada" });
  }

  farms[index] = { ...farms[index], ...req.body };

  res.json({
    message: "Finca actualizada",
    data: farms[index]
  });
};

export const deleteFarm = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = farms.findIndex(f => f.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Finca no encontrada" });
  }

  const deletedFarm = farms.splice(index, 1);

  res.json({
    message: "Finca eliminada",
    data: deletedFarm[0]
  });
};
