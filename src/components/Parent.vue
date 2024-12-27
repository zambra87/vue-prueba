<template>
    <div>
      <Child @send-text="updateText" />
      <p>Received: {{ receivedText }}</p>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    components: { Child },
    data() {
      return {
        receivedText: '',
      };
    },
    methods: {
      updateText(text) {
        this.receivedText = text;
      },
    },
  };
  </script>
  