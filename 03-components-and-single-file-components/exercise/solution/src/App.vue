<template>
  <div id="app">
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>
    <div class="section">
      <SubmissionComponent
        v-for="submission in sortedSubmissions"
        :submission="submission"
        :key="submission.id">
      </SubmissionComponent>
    </div>
  </div>
</template>

<script>
import SubmissionComponent from "./components/SubmissionComponent";
import submissions from "./data";

export default {
  name: "App",
  data() {
    return {
      submissions
    }
  },
  computed: {
    sortedSubmissions() {
      const initialSubmissions = this.submissions;
      return initialSubmissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    }
  },
  components: {
    SubmissionComponent
  }
};
</script>

<style lang="css" src="../public/styles.css">
  /* Styles from stylesheet */
</style>
