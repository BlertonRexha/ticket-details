<template>
  <div class="h-full ticket">
    <div class="h-full bg-gray-50 flex flex-col" x-data="chat">
      <div class="relative">
        <div class="flex justify-center p-4" style="background-color: #e30010">
          <span class="text-white text-bold flex content-center">
            <img src="@/assets/_logo.svg" height="40px" width="40px" />
          </span>
        </div>
      </div>
    </div>
    <messages :messages="ticket.messages" />
    <div class="fixed inset-x-0 bottom-0 bg-gray-200">
      <div
        class="max-w-screen-lg m-auto w-full p-4 flex space-x-4 justify-center items-center"
      >
        <div class="user-input-container">
          <input
            id="message"
            type="text"
            autocomplete="off"
            class="border rounded-md p-2 flex-1 border-gray-300"
            v-model="newMessage"
            @keyup.enter="sendMessage"
            placeholder="Your message..."
          />
          <span
            class="icon"
            :class="{ disabled: !newMessage }"
            @click="sendMessage"
          >
            <img src="@/assets/send.svg" height="20px" width="20px" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Messages from "@/components/Messages.vue";
export default {
  name: "TicketDetails",
  components: {
    Messages,
  },
  data() {
    return {
      ticket: null,
      newMessage: null,
    };
  },
  beforeMount() {
    this.ticket = this.$route.params.model;
  },
  methods: {
    sendMessage() {
      console.log("send message");
      this.ticket.messages.push({
        body: this.newMessage,
        role: "agent",
      });
      this.newMessage = null;
      this.scrollToBottom();
    },
    scrollToBottom() {
      setTimeout(() => {
        const container = document.querySelector(".messages-conatiner");
        container.scrollTop = container.scrollHeight;
      }, 100);
    },
  },
};
</script>
<style scoped lang="scss">
.ticket {
  max-width: 100%;
  overflow-x: auto;
  padding: 0 5rem;
  .user-input-container {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: white;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    padding: 2px;
    input {
      border: none;
      &:focus {
        outline: none;
      }
    }
    .icon {
      cursor: pointer;
      padding: 0 2px;
      &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}
</style>
