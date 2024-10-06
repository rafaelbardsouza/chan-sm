<template>
    <div class="header">
      <div class="icon"></div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .header {
    .icon::before {
      content: 'neurology';
      font-family: 'family-icons';
      color: aquamarine;
      font-size: 24px; 
    }
  }
  </style>
  