import { Request, Response } from "express";

let crops = [
  { id: 1, name: "Maíz", type: "Grano", farmId: 1, location: "Popayán"  },
  { id: 2, name: "Café", type: "Grano", farmId: 2, location: "Armenia"}
];

export const getCrops = (req: Request, res: Response) => {
  res.json(crops);
};

export const addCrop = (req: Request, res: Response) => {
  const crop = { id: crops.length + 1, ...req.body };
  crops.push(crop);
  res.json({ message: "Cultivo registrado", data: crop });
};

export const getCropById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const crop = crops.find(c => c.id === id);

  if (!crop) {
    return res.status(404).json({ message: "Cultivo no encontrado" });
  }

  res.json(crop);
};

export const updateCrop = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = crops.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Cultivo no encontrado" });
  }

  crops[index] = { ...crops[index], ...req.body };

  res.json({
    message: "Cultivo actualizado",
    data: crops[index]
  });
};

export const deleteCrop = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = crops.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Cultivo no encontrado" });
  }

  const deletedCrop = crops.splice(index, 1);

  res.json({
    message: "Cultivo eliminado",
    data: deletedCrop[0]
  });
};
