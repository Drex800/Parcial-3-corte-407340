<template>
  <div>
    <h2>Lista de Fincas</h2>

    <ul>
      <li v-for="farm in farms" :key="farm.id">
        {{ farm.name }} - Propietario: {{ farm.owner }}
      </li>
    </ul>

    <hr />

    <h3>Agregar finca</h3>

    <input v-model="name" placeholder="Nombre" />
    <input v-model="owner" placeholder="Propietario" />
    <button @click="saveFarm">Guardar</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const farms = ref([]);
const name = ref("");
const owner = ref("");

const load = async () => {
  const res = await axios.get("http://localhost:3000/api/farms");
  farms.value = res.data;
};

const saveFarm = async () => {
  await axios.post("http://localhost:3000/api/farms", {
    name: name.value,
    owner: owner.value,
  });

  name.value = "";
  owner.value = "";
  load();
};

onMounted(load);
</script>
