const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
      email: null
    }
  },
  methods: {
    getEmails(numberOfEmails) {

      for (let i = 0; i < numberOfEmails; i++) {

        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {

            this.email = response.data.response;

            this.emailList.push(this.email);

          })

      }
    }
  },
  mounted() {
    this.getEmails(10);
  }
}).mount('#app')