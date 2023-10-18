<template>
  <div class="list-container">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Ticket ID
                <img
                  src="@/assets/sort-icon.svg"
                  alt=""
                  height="15px"
                  width="12px"
                />
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Title
                <img
                  src="@/assets/sort-icon.svg"
                  alt=""
                  height="15px"
                  width="12px"
                />
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                Status
                <img
                  src="@/assets/sort-icon.svg"
                  alt=""
                  height="15px"
                  width="12px"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="ticket in tickets"
            :key="ticket.id"
            @click="
              $router.push({
                name: 'ticket',
                params: { id: ticket.id, model: ticket },
              })
            "
            class="bg-white border-b cursor-pointer hover:bg-gray-50"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
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
  name: "Tickets",
  components: {},
  data() {
    return {
      tickets: [
        {
          id: 1,
          title: "Ticket 1",
          description: "This is a ticket",
          status: "open",
          messages: [
            {
              id: 1,
              body: "I need some help with this ticket",
              ticketId: 1,
              role: "user",
            },
            {
              id: 2,
              body: `Of course! I'm here to help. What do you need assistance with?`,
              ticketId: 1,
              role: "assistant",
            },
            {
              id: 3,
              body: "I need to find a job",
              ticketId: 1,
              role: "user",
            },
            {
              id: 4,
              body: `I'd be happy to help you with your job search. Here are some steps to get you started:

Update Your Resume: Ensure your resume is current, well-organized, and highlights your skills and experience.

Identify Your Skills and Interests: Determine what type of job you're looking for and what industries or roles align with your skills and interests.

Use Online Job Boards: Websites like LinkedIn, Indeed, Glassdoor, and Monster are great places to search for job openings.

Company Websites: Visit the websites of companies you're interested in to check for job postings. Many organizations post job listings on their career pages.

Networking: Connect with friends, family, and professional contacts. Let them know you're searching for a job; they might have leads or recommendations.

LinkedIn: Create or update your LinkedIn profile. It's a powerful tool for networking and job searching.

Recruitment Agencies: Consider working with recruitment agencies or headhunters. They can help match you with job opportunities.

Local Resources: Check with local job centers, career fairs, or community organizations. They often have job listings and career resources.

Customize Your Applications: Tailor your resume and cover letter for each job application. Highlight relevant skills and experience.

Prepare for Interviews: Practice your interviewing skills. Be ready to discuss your qualifications and why you're a good fit for the position.

Online Training: Consider taking online courses or certifications to enhance your skills and make yourself more marketable.

Persistence: Job searching can take time. Be persistent, and don't get discouraged by rejection. Keep applying and networking.

Follow-Up: After applying for jobs or attending interviews, send a polite follow-up email to express your continued interest.

If you have specific questions or need help with any of these steps, please let me know.`,
              ticketId: 1,
              role: "assistant",
            },
            {
              id: 5,
              body: `In the conversation above, a customer mentioned that they need to find a job. I provided a customer with a list of steps to help with their job search. These steps include updating a customer's resume, identifying their skills and interests, using online job boards, networking, creating or updating a customer's LinkedIn profile, considering recruitment agencies, checking local resources, customizing job applications, preparing for interviews, enhancing skills through online training, being persistent, and following up with potential employers. If a customer has any specific questions or needs further assistance, feel free to ask.`,
              ticketId: 1,
              role: "assistant",
              type: "summary",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scss>
.list-container {
  max-width: 100%;
  overflow-x: auto;
  padding: 5rem;
}
</style>
