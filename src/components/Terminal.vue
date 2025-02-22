<template>
  <div class="terminal">
    <!-- Welcome message with flicker animation -->
    <p class="welcome-message">Welcome, User. Initializing portfolio...</p>

    <!-- Command history and output -->
    <div class="output-container">
      <div v-for="(item, index) in commandHistoryWithOutput" :key="index" class="output-item">
        <p class="command-line">
          <span class="prompt">user@portfolio:~$</span>
          <span class="command">{{ item.command }}</span>
        </p>
        <p v-if="item.output" class="output">{{ item.output }}</p>
      </div>
    </div>

    <!-- Command input field -->
    <div class="command-line">
      <span class="prompt">user@portfolio:~$</span>
      <input
        v-model="command"
        @keyup.enter="executeCommand"
        @keyup.up="navigateHistory(-1)"
        @keyup.down="navigateHistory(1)"
        @input="handleInput"
        placeholder="Type a command..."
        class="command-input"
        autofocus
      />
    </div>

    <!-- Autocomplete suggestions -->
    <div v-if="suggestions.length > 0" class="autocomplete">
      <p v-for="suggestion in suggestions" :key="suggestion" @click="selectSuggestion(suggestion)">
        {{ suggestion }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      command: "", // Stores the user's command
      commandHistory: [], // Stores command history
      commandHistoryWithOutput: [], // Stores command history with output
      historyIndex: -1, // Tracks the current position in command history
      suggestions: [], // Stores autocomplete suggestions
      availableCommands: ["about", "experience", "projects", "contact", "help", "fsociety", "hello", "ecorp", "raspberry", "59"],
    };
  },
  methods: {
    executeCommand() {
      // Convert command to lowercase for case-insensitive comparison
      const cmd = this.command.toLowerCase().trim();

      // Add command to history
      this.commandHistory.push(cmd);
      this.historyIndex = this.commandHistory.length;

      // Handle commands
      let output = "";
      switch (cmd) {
        case "about":
          this.$router.push("/about");
          break;
        case "experience":
          this.$router.push("/experience");
          break;
        case "projects":
          this.$router.push("/projects");
          break;
        case "contact":
          this.$router.push("/contact");
          break;
        case "help":
          output = "Available commands: about, experience, projects, contact, help, fsociety, hello, ecorp, raspberry, 59";
          break;
        case "fsociety":
        case "hello":
        case "ecorp":
        case "raspberry":
        case "59":
          this.modalType = cmd;
          this.isModalVisible = true;
          break;
        default:
          output = `Command '${cmd}' not found. Type 'help' for a list of commands.`;
      }

      // Add command and output to history with output
      this.commandHistoryWithOutput.push({ command: cmd, output });

      // Clear the input field
      this.command = "";
      this.suggestions = [];

      // Scroll to the bottom of the output container
      this.$nextTick(() => {
        const outputContainer = this.$el.querySelector(".output-container");
        outputContainer.scrollTop = outputContainer.scrollHeight;
      });
    },
    navigateHistory(direction) {
      if (this.commandHistory.length === 0) return;

      // Update history index
      this.historyIndex = Math.max(
        0,
        Math.min(this.commandHistory.length - 1, this.historyIndex + direction)
      );

      // Set the command input to the selected history item
      this.command = this.commandHistory[this.historyIndex];
    },
    handleInput() {
      if (this.command.length === 0) {
        this.suggestions = [];
        return;
      }

      // Filter available commands based on user input
      this.suggestions = this.availableCommands.filter((cmd) =>
        cmd.startsWith(this.command.toLowerCase())
      );
    },
    selectSuggestion(suggestion) {
      this.command = suggestion;
      this.suggestions = [];
    },
  },
};
</script>

<style scoped>
.terminal {
  background-color: inherit; /* Inherit background color from body */
  color: inherit; /* Inherit text color from body */
  padding: 20px;
  border-radius: 5px;
  font-family: "Source Code Pro", monospace;
  max-width: 800px;
  margin: 0 auto;
  height: 300px; /* Fixed height */
  display: flex;
  flex-direction: column;
}

.welcome-message {
  animation: flicker-4 4s linear infinite both;
}

.output-container {
  flex: 1; /* Take up remaining space */
  overflow-y: auto; /* Enable vertical scrolling */
  margin-bottom: 10px;
}

.output-item {
  margin-bottom: 10px;
}

.command-line {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.prompt {
  color: inherit; /* Inherit text color from body */
  margin-right: 10px;
}

.command-input {
  background: transparent;
  border: none;
  color: inherit; /* Inherit text color from body */
  font-family: "Source Code Pro", monospace;
  outline: none;
  flex-grow: 1;
}

.output {
  color: #ff0000; /* Red color for error messages */
}

.autocomplete {
  margin-top: 10px;
}

.autocomplete p {
  color: inherit; /* Inherit text color from body */
  cursor: pointer;
}

.autocomplete p:hover {
  text-decoration: underline;
}
</style>