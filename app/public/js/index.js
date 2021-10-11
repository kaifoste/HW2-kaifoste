
const SomeApp = {
    data() {
      return {
        result: {},
        list: [5,6,7,8],
        message: "Waiting ...",
        books: []
      }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.result.dob.date).format('D MMM YYYY')
        }
    },
    methods:{
        fetchUserData() {
            fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((json) => {
            console.log("Got json back:", json);
            this.result = json.results[0];
            console.log("C");
        })
        .catch( (error) => {
            console.error(error);
        });
        },
        fetchBookData() {
            fetch('/api/book/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        }
    },
    created() {
        this.fetchUserData();
        this.fetchBookData()
    }

  }
  
  Vue.createApp(SomeApp).mount('#someApp');
