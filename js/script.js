var app = new Vue({
    el: '#root',

    data: {
        emailsNumber: 10,
        emails: [],
    },

    methods: {
        getEmails() {
            for(let i = 0; i < this.emailsNumber; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const randomEmail = response.data.response;

                    if(!this.emails.includes(randomEmail)) {
                        this.emails.push(randomEmail);
                    } else {
                        i--;
                    }
                })
            };
        }
    },

    mounted() {
        this.getEmails();
    }
})

