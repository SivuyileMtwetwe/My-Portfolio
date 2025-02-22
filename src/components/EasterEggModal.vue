<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">×</button>
        <div class="modal-body">
          <pre v-if="type === 'fsociety'">
            _____
           /     \
           | () () |
           \  ^  /
            |||||
            |||||
          </pre>
          <pre v-if="type === 'hello'">
            Hello, friend.
            That's lame.
            Maybe I should give you a name.
            But that's a slippery slope.
            You're only in my head.
            We have to remember that.
          </pre>
          <pre v-if="type === 'ecorp'">
            Hacking into E Corp...
            [==================          ] 50%
            Accessing financial records...
            [========================    ] 75%
            Decrypting data...
            [============================] 100%
            Access granted.
          </pre>
          <pre v-if="type === 'raspberry'">
            Darlene's Raspberry Pi detected.
            Initializing exploit...
            Exploit successful.
          </pre>
          <pre v-if="type === '59'">
            The 5/9 hack changed everything.
            Evil Corp's data was wiped clean.
            The world will never be the same.
          </pre>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: Boolean,
      type: String,
    },
    methods: {
      closeModal() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background-color: #1a1a1a;
    color: #00ff00;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    width: 90%;
    font-family: "Source Code Pro", monospace;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #00ff00;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .close-button:hover {
    color: #ff0000;
  }
  
  .modal-body pre {
    white-space: pre-wrap;
    color: #00ff00;
  }
  </style>