<template>
    <div class="navbar">
      <div class="icon">
        <router-link class="link" to="/"><Icon name='material-symbols:neurology-outline'/></router-link>
      </div>
      <div class="links">
        <router-link class="link" to="/search"><Icon name='material-symbols:search'/></router-link>
        <router-link class="link" to="/"><Icon name='material-symbols:home'/></router-link>
        <router-link class="link" to="/notifications"><Icon name='material-symbols:notifications'/></router-link>
      </div>
      <div class="profile">
        <router-link class="link" to="/profile"><Icon name='material-symbols:person'/></router-link>
      </div>
    </div>
  </template>
  
<style>
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 70px;
    position: fixed;
    background-color: #1f1f1f;
    font-size: 30px;

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5rem;
    }

    .link {
      color: #04da83;
    }

    .icon {
      margin-top: 2rem;
    }

    .profile {
      margin-bottom: 1rem;
    }
  }
</style>