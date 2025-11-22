<template>
  <div id="app">
    <header class="header">
      <h1>ERP Agrícola</h1>
    </header>

    <nav class="navbar">
      <router-link to="/" class="nav-link">Dashboard</router-link>
      <router-link to="/farms" class="nav-link">Agregar Finca</router-link>
      <router-link to="/crops" class="nav-link">Agregar Cultivo</router-link>
    </nav>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.header {
  background: #0e733d;
  padding: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

/* Barra de navegación */
.navbar {
  display: flex;
  gap: 20px;
  background-color: #1a8a4f;
  padding: 12px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}

.content {
  padding: 20px;
}
</style>
