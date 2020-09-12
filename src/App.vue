<template>
  <div id="app">
    <app-header />
    <home />
  </div>
</template>

<script>
import Header from './components/Header';
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    Home,
  },
};
</script>

<style></style>
