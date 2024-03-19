const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
      numberOfItems: '',
      email: null,
      errorMessage: ''
    }
  },
  methods: {
    generateEmails(numberOfEmails) {

      if (this.numberOfItems <= 100) {

        this.emailList = [];

        this.errorMessage = '';

        numberOfEmails = this.numberOfItems;

        for (let i = 0; i < numberOfEmails; i++) {

          axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {

              this.email = response.data.response;

              this.emailList.push(this.email);

            })

        }
      } else {
        this.errorMessage = "The number of emails is too high! Please insert a number between 1 and 100"
      }
    }
  }
}).mount('#app')