<template>
    <div>
      <h1>Counter: {{ count }}</h1>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('counter', ['currentCount']),
      count() {
        return this.currentCount;
      },
    },
    methods: {
      ...mapActions('counter', ['increment', 'decrement']),
    },
  };
  </script>
  