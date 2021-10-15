
const SomeApp = {
    data() {
      return {
        result: {},
        list: [5,6,7,8],
        message: "Waiting ...",
        books: [],
        bookForm: {}
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
        },
        postNewBook(evt) {
            // this.offerForm.studentId = this.selectedStudent.id;        
            console.log("Posting:", this.bookForm);
            // alert("Posting!");
    
            fetch('api/book/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.bookForm = {};
              });
        }
    },
    created() {
        this.fetchUserData();
        this.fetchBookData()
    }

  }
  
  Vue.createApp(SomeApp).mount('#someApp');
