import { useEffect, useState } from "react";
import { getFarms } from "../services/api";

export default function FarmsPage() {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getFarms(); // Llamamos al backend
      setFarms(data);               // Guardamos la respuesta
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Lista de Fincas</h1>

      <ul>
        {farms.map(farm => (
          <li key={farm.id}>
            {farm.name} - {farm.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
