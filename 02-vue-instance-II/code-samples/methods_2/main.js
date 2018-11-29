new Vue({
  el: '#app',
  data: {
    fields: {
      name: '',
      subject: '',
      termsAndConditions: false,
      yesOrNo: 'No',
    },
    fieldErrors: {
      name: undefined,
      subject: undefined,
      termsAndConditions: undefined,
      yesOrNo: undefined,
    },
  },
  methods: {
    submitForm(evt) {
      evt.preventDefault();

      this.fieldErrors = this.validateForm(this.fields);
      if (Object.keys(this.fieldErrors).length) return;

      alert('The form has been submitted! Thank you!');
      this.resetForm();
    },
    validateForm(fields) {
      const errors = {};
      if (!fields.name) errors.name = 'Name is required';
      if (!fields.subject) errors.subject = 'Subject is required';
      if (!fields.termsAndConditions) errors.termsAndConditions = 'Terms and conditions have to be approved';
      if (fields.yesOrNo === 'No') {
        errors.yesOrNo = 'You have to approve this imaginary question';
      }

      return errors;
    },
    resetForm() {
      this.fields.name = '';
      this.fields.subject = '';
      this.fields.termsAndConditions = false;
      this.fields.yesOrNo = 'No';
    },
  },
});
