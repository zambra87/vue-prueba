<template>
    <div>
      <input v-model="text" placeholder="Enter text" />
      <button @click="sendText">Send to Parent</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text: '',
      };
    },
    methods: {
      sendText() {
        this.$emit('send-text', this.text);
      },
    },
  };
  </script>
  