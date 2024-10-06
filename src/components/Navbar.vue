<template>
    <div class="navbar">
      <div class="icon">
        <router-link class="link" to="/"><Icon name='material-symbols:neurology-outline'/></router-link>
      </div>
      <div class="links">
        <router-link class="link" to="/search"><Icon name='material-symbols:search'/></router-link>
        <router-link class="link" to="/boards"><Icon name='material-symbols:menu'/></router-link>
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
    
    height: 100vh;
    width: 70px;
    position: sticky;
    box-sizing: border-box;

    background-color: #1f1f1f;
    font-size: 30px;
    border-right: 1px solid #04da83;
    padding: 1rem 0;

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5rem;
    }

    .link {
      color: #04da83;

      &:hover {
        color: #fff;
      }
    }
  }
</style>