<template>
  <article class="media" :class="{ 'blue-border': submission.votes >= 20 }">
    <figure class="media-left">
      <img class="image is-64x64"
        :src="submission.submissionImage">
    </figure>
    <SubmissionContent :submission="submission"></SubmissionContent>
    <div class="media-right">
      <span class="icon is-small" @click="upvote(submission.id)">
        <i class="fa fa-chevron-up"></i>
        <strong class="has-text-info">{{ submission.votes }}</strong>
      </span>
    </div>
  </article>
</template>

<script>
import SubmissionContent from './SubmissionContent';

export default {
  name: "SubmissionComponent",
  props: ['submission'],
  methods: {
    upvote() {
      this.submission.votes++;
    }
  },
  components: {
    SubmissionContent
  }
};
</script>
