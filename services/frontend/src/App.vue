<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {getStaticAsset} from './generated/get_static_asset.ts'
import { useApi } from './use/useApi';

async function testApi() {
  const rsp = await useApi('api/dummy/', 'GET');
  console.log(rsp);
}

testApi();
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img :src="getStaticAsset('a.jpg')" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="getStaticAsset('b.jpg')" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
