<template>
  <div class="list-container">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Ticket ID
                <img src="@/assets/sort-icon.svg" alt="" height="15px" width="12px">
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Title
                <img src="@/assets/sort-icon.svg" alt="" height="15px" width="12px">
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Status
                <img src="@/assets/sort-icon.svg" alt="" height="15px" width="12px">
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id"
            @click="$router.push({ name: 'ticket', params: { id: ticket.id, model: ticket } })"
            class="bg-white border-b cursor-pointer hover:bg-gray-50">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ ticket.id }}
            </th>
            <td class="px-6 py-4">
              {{ ticket.title }}
            </td>
            <td class="px-6 py-4">
              {{ ticket.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tickets',
  components: {

  },
  data() {
    return {
      tickets: [
        {
          id: 1,
          title: 'Ticket 1',
          description: 'This is a ticket',
          status: 'open',
          messages: [
            {
              id: 1,
              body: 'This is a message',
              ticketId: 1,
              role: 'assistant'
            }, {
              id: 2,
              body: 'This is a message',
              ticketId: 1,
              role: 'user'
            },
            {
              id: 3,
              body: 'This is a message',
              ticketId: 1,
              role: 'assistant'
            },
          ]
        },
        {
          id: 2,
          title: 'Ticket 2',
          description: 'This is a ticket',
          status: 'open',
          messages: [
            {
              id: 1,
              body: 'This is a message',
              ticketId: 1,
              role: 'assistant'
            }, {
              id: 2,
              body: 'This is a message',
              ticketId: 1,
              role: 'user'
            },
            {
              id: 3,
              body: 'This is a message',
              ticketId: 1,
              role: 'assistant'
            },
          ]
        },
        {
          id: 3,
          title: 'Ticket 3',
          description: 'This is a ticket',
          status: 'solved',
          messages: [
            {
              id: 1,
              body: 'This is a message',
              ticketId: 1,
              role: 'assistant'
            }, {
              id: 2,
              body: 'This is a message',
              ticketId: 1,
              role: 'user'
            },
            {
              id: 3,
              body: 'This is a message',
              ticketId: 1,
              role: 'assistant'
            },
          ]
        },
      ],
    }
  },
}
</script>

<style lang="scss" scss>
.list-container {
  max-width: 100%;
  overflow-x: auto;
  padding: 5rem;
}
</style>
