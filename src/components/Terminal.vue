<template>
    <div class="terminal">
      <!-- Welcome message with typing animation -->
      <p class="typing-animation">Welcome, User. Initializing portfolio...</p>
  
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
        />
      </div>
  
      <!-- Autocomplete suggestions -->
      <div v-if="suggestions.length > 0" class="autocomplete">
        <p v-for="suggestion in suggestions" :key="suggestion" @click="selectSuggestion(suggestion)">
          {{ suggestion }}
        </p>
      </div>
  
      <!-- Output display -->
      <p v-if="output" class="output">{{ output }}</p>
  
      <!-- Easter egg for fsociety -->
      <div v-if="showFsociety" class="fsociety">
        <pre>
        _____
       /     \
       | () () |
       \  ^  /
        |||||
        |||||
        </pre>
        <p>fsociety</p>
      </div>
  
      <!-- Fake hacking animation -->
      <div v-if="showHacking" class="hacking-animation">
        <pre>
        Hacking into the mainframe...
        [==================          ] 50%
        Accessing secure files...
        [========================    ] 75%
        Decrypting data...
        [============================] 100%
        Access granted.
        </pre>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        command: "", // Stores the user's command
        output: "", // Stores the output message
        showFsociety: false, // Controls the fsociety Easter egg
        showHacking: false, // Controls the hacking animation
        commandHistory: JSON.parse(localStorage.getItem("commandHistory")) || [], // Load command history from localStorage
        historyIndex: -1, // Tracks the current position in command history
        suggestions: [], // Stores autocomplete suggestions
        availableCommands: ["about", "experience", "projects", "contact", "help", "fsociety", "hack"],
      };
    },
    methods: {
      executeCommand() {
        // Convert command to lowercase for case-insensitive comparison
        const cmd = this.command.toLowerCase().trim();
  
        // Add command to history
        this.commandHistory.push(cmd);
        localStorage.setItem("commandHistory", JSON.stringify(this.commandHistory));
        this.historyIndex = this.commandHistory.length;
  
        // Handle commands
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
            this.output = "Available commands: about, experience, projects, contact, help, fsociety, hack";
            break;
          case "fsociety":
            this.showFsociety = true;
            this.output = "";
            break;
          case "hack":
            this.showHacking = true;
            this.output = "";
            setTimeout(() => {
              this.showHacking = false;
            }, 5000); // Hide the animation after 5 seconds
            break;
          default:
            this.output = `Command '${cmd}' not found. Type 'help' for a list of commands.`;
        }
  
        // Clear the input field
        this.command = "";
        this.suggestions = [];
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
    background-color: #1a1a1a;
    color: #00ff00;
    padding: 20px;
    border-radius: 5px;
    font-family: "Source Code Pro", monospace;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .typing-animation {
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3s steps(40, end);
  }
  
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  
  .command-line {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  
  .prompt {
    color: #00ff00;
    margin-right: 10px;
  }
  
  .command-input {
    background: transparent;
    border: none;
    color: #00ff00;
    font-family: "Source Code Pro", monospace;
    outline: none;
    flex-grow: 1;
  }
  
  .output {
    margin-top: 10px;
    color: #ff0000; /* Red color for error messages */
  }
  
  .fsociety {
    margin-top: 20px;
    text-align: center;
  }
  
  .fsociety pre {
    font-family: "Source Code Pro", monospace;
    color: #00ff00;
  }
  
  .hacking-animation {
    margin-top: 20px;
    color: #00ff00;
  }
  
  .hacking-animation pre {
    font-family: "Source Code Pro", monospace;
  }
  
  .autocomplete {
    margin-top: 10px;
  }
  
  .autocomplete p {
    color: #00ff00;
    cursor: pointer;
  }
  
  .autocomplete p:hover {
    text-decoration: underline;
  }
  </style>