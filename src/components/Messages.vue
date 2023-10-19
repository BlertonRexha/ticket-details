<template>
  <div class="messages-conatiner relative w-full max-w-screen-lg flex-1 m-auto p-8 my-4 pb-20">
    <div class="flex flex-col">
      <div class="message summary rounded-lg py-2 px-6 mb-4" :class="getMessageClass({role: 'summary'})">
        <div class="w-full text-left">
          <div class="font-bold"># Summary</div>
          {{ summary }}
        </div>
      </div>
      <div v-for="(message, index) in messages" :key="index" class="message rounded-lg py-2 px-6 mb-4" :class="getMessageClass(message)">
        <div class="w-full text-left">
          <div class="font-bold">{{ getUserLabel(message) }}</div>
          {{ message.message }}
          <!-- <div v-if="message.files" class="image-container">
            <div v-for="file in message.files" class="image-box">
              <img :src="file.blob" alt="" />
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Messages",
  props: {
    messages: {
      type: Array,
      required: true,
    },
    summary: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    getMessageClass({ role }) {
      if(role === 'assistant') {
        return 'assistant self-start bg-blue-200 border-blue-200';
      }
      if (role === 'summary') {
        return 'assistant self-start summary bg-yellow-100 border-yellow-100'
      }

      return 'user bg-green-200 border-green-200 self-end'
    },
    getUserLabel({ role, type }) {
      if (role === 'assistant') {
        if(type === 'summary') {
          return '# Summary';
        } else {
          return 'Assistant';
        }
      }
      if (role === 'user') {
        return 'Customer'
      }
      return 'You';
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.messages-conatiner {
  height: 100%;
  width: 100%;
  overflow-y: auto;

  .message {
    position: relative;
    max-width: 96%;

    &.summary {
      min-width: 100%;
    }

    &::after {
      content: "";
      top: 0;
      position: absolute;
      border: 0.75em solid transparent;
      border-top-color: blue;
      display: block;
    }

    &.assistant::after {
      left: -0.45em;
      border-top-color: inherit;
    }

    &.user::after {
      right: -0.45em;
      border-top-color: inherit;
    }

    .image-container {
      display: flex;
      flex-wrap: wrap;

      .image-box {
        display: inline-block;
        width: 100px;
        height: 100px;
        margin: 0 .5rem 0.5rem 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .type-indicator {
      span {
        display: inline-block;
        padding: 0 0.075em;
        animation: type-indicator 1s ease-in-out infinite;
        transform: translateY(0);
      }

      span:nth-child(2) {
        animation-delay: 150ms;
      }

      span:nth-child(3) {
        animation-delay: 300ms;
      }
    }

    &.blink {
      animation: blink 1.25s infinite;
    }

    @keyframes type-indicator {
      0% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }

      50% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
    }

    @keyframes blink {
      0% {
        opacity: 1;
      }

      69% {
        opacity: 1;
      }

      70% {
        opacity: 0;
      }

      100% {
        opacity: 0;
      }
    }
  }

  .star-rating-container {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;

    >span {
      margin-right: 0.5rem;
      margin-top: 5px;
    }
  }
}
</style>
