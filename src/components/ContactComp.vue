<template>
  <section class="py-20 bg-gray-800 text-white">
    <h2 class="text-3xl font-bold text-center mb-6">Contact Me</h2>
    <form
      @submit.prevent="handleSubmit"
      class="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg space-y-4"
    >
      <input
        type="text"
        v-model="name"
        placeholder="Name"
        required
        class="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        required
        class="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        v-model="message"
        placeholder="Message"
        required
        class="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        class="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
      >
        Send
      </button>
    </form>
    <div class="mt-6 text-center">
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        class="text-blue-400 hover:underline mx-2"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/yourprofile"
        target="_blank"
        class="text-blue-400 hover:underline mx-2"
      >
        GitHub
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactComp',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      alert(`Thank you, ${this.name}! Your message has been sent.`);
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>
