<template>
  <div>
    <h2>Lista de Cultivos</h2>

    <ul>
      <li v-for="crop in crops" :key="crop.id">
        {{ crop.name }} - {{ crop.area }} ha - {{ crop.location }}
      </li>
    </ul>

    <hr />

    <h3>Agregar cultivo</h3>

    <input v-model="name" placeholder="Nombre del cultivo" />
    <input v-model="area" type="number" placeholder="Área (ha)" />
    <input v-model="location" placeholder="Ubicación" />

    <button @click="saveCrop">Guardar</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const crops = ref([]);

const name = ref("");
const area = ref("");
const location = ref("");

const load = async () => {
  const res = await axios.get("http://localhost:3000/api/crops");
  crops.value = res.data;
};

const saveCrop = async () => {
  await axios.post("http://localhost:3000/api/crops", {
    name: name.value,
    area: area.value,
    location: location.value,
  });

  name.value = "";
  area.value = "";
  location.value = "";

  load();
};

onMounted(load);
</script>
