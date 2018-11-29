new Vue({
  el: '#app',
  data: {
    speaker: 'Hassan Djirdeh',
    img: 'https://avatars3.githubusercontent.com/u/12476938?s=460&v=4',
    workshop: 'Intro to Vue',
    city: 'Toronto',
  },
  methods: {
    changeSpeaker() {
      if (this.speaker === 'Hassan Djirdeh') {
        this.speaker = 'Aubrey Graham';
        this.img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/aubrey-graham.png';
      } else {
        this.speaker = 'Hassan Djirdeh';
        this.img = 'https://avatars3.githubusercontent.com/u/12476938?s=460&v=4';
      }
    },
  },
});
