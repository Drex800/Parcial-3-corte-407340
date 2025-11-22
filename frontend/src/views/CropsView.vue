<script setup>
import { ref, onMounted } from "vue";
import { getCrops } from "../services/api";

const crops = ref([]);

const newCrop = ref({
  name: "",
  area: "",
  location: ""
});

async function loadCrops() {
  const data = await getCrops();
  crops.value = data;
}

// 👉 FUNCIÓN PARA GUARDAR
async function saveCrop() {
  const response = await fetch("http://localhost:3000/api/crops", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCrop.value)
  });

  const data = await response.json();
  console.log("GUARDADO:", data);

  // agregar al listado local sin recargar
  crops.value.push(data.data);

  // limpiar campos
  newCrop.value = { name: "", area: "", location: "" };
}

onMounted(() => {
  loadCrops();
});
</script>

<template>
  <h1>Lista de Cultivos</h1>

  <ul>
    <li v-for="c in crops" :key="c.id">
      <strong>{{ c.name }}</strong> - {{ c.area }} ha - {{ c.location }}
    </li>
  </ul>

  <h2>Agregar Cultivo</h2>

  <input v-model="newCrop.name" placeholder="Nombre" />
  <input v-model="newCrop.area" placeholder="Área (ha)" />
  <input v-model="newCrop.location" placeholder="Ubicación" />

  <button @click="saveCrop">Guardar</button>
</template>
