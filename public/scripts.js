const app = Vue.createApp({
   data() {
       return {
           index: 0,
           selectedAnswer: '',
           correctAnswer: 0,
           wrongAnswer:0,
           count: 3,
           questions: [
               {
                   question: "Rolex is a company that specializes in what type of product?",
                   answers: {a:"Bags", b: "Watches", c: "Shoes", d: "Laptops"},
                   correctAnswer: 'b'
               },
               {
                   question: "When did Facebook launch?",
                   answers: {a:"2005", b: "2008", c: "2003", d: "2004"},
                   correctAnswer: 'b'
               },
               {
                   question: "Albert Einstein had trouble with mathematics when he was in school?",
                   answers: {a:"True", b: "False"},
                   correctAnswer: 'b'
               },
           ]
       }
   },
    methods: {
        answered(e) {
        this.selectedAnswer = e.target.value;
        console.log(this.selectedAnswer);
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults(){
            this.index++;
        }
    },
});
 app.mount("#app");