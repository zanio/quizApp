<!--Author with Username zanio and fullname ANIEFIOK AKPAN-->
<!--@created 07/04/2021 - 5:43 AM -->
<!--@project  @ quiz In QuizView -->

<template>
<QLayout text="Quiz Section">
  <div v-if="isQuestionPresent">
    <div class="float-right -mb-8">
    <div class="flex items-center py-4 mx-auto">
      <div style="height: 50px; width: 50px;" class="font-bold text-white rounded-full p-4
          bg-blue flex items-center justify-center font-mono">{{ time }}</div>

    </div></div>

    <div class="py-4">
      <p v-text="currentQuestion.question" class="text-md font-bold tracking-wide	pt-6 text-black pb-16 italic"></p>

      <div class="flex  flex-col justify-start" v-for="(value, key) in currentQuestion.choices" :key="key">
        <div class="flex items-center  w-full md:w-1/3 py-1">
          <div :class="['font-bold text-white circle p-4 ' +
           'bg-blue flex items-center justify-center font-mono m-2 cursor-pointer',value['is_correct_choice']&&userClicked && 'bg-green',
           ]" @click="getUserAnswer"
               :data-idx="value['is_correct_choice']">{{ key===0 ? 'A':key===1?'B':'C' }}</div>
          <p :data-idx="value['is_correct_choice']"
             @click="getUserAnswer"
             :class="['text-black cursor-pointer text-base font-normal tracking-wider',
             value['is_correct_choice']&&userClicked && 'text-green',

             ]">{{ value['choice'] }}</p>
        </div>
      </div>

      <div class="flex justify-end justify-center py-12">
        <QButton @click="displayCurrentQuestion" class="h-12" text="Next"></QButton>
      </div>

    </div>
  </div>
  <div class="py-4" v-else>
    <p class="text-center text-2xl text-primary font-bold">Quiz Completed</p>

    <div class="text-center py-5"><QButton class="h-12" @click="collectResultAndPush"  text="See Summary"></QButton></div>

  </div>

</QLayout>
</template>

<script>
import QLayout from "../components/QLayout";
import QButton from "../components/button/QButton";
import Questions from '../api/question.json';
import _ from 'lodash';


export default {
  name: "QuizView",
  data(){
    return {
        time: 120,
      questions: [],
      count: 0,
      currentQuestion :{},
      isQuestionReady: false,
      userAnswerAndCorrect:[],
      userClicked: false,
      eventAnswer: null,
    }
  },
  components:{
    QButton,
    QLayout,
  },
  computed: {
    isQuestionPresent(){
      return !_.isEmpty(this.currentQuestion);
    },

  },
  watch:{
    time: function(val){
      if(val === 0){
        sessionStorage.setItem("options", JSON.stringify(this.userAnswerAndCorrect));
        this.$router.push({name: "Summary",});
      }
    }
  },
  mounted(){
    this.questions = _.shuffle(Object.values(Questions.data));
    if(!_.isEmpty(this.questions)){
      this.currentQuestion = this.questions[this.count]
    }
    this.startTimer();
  },
  methods:{
    isEventAnswer(clz){
      return this.eventAnswer!==this.currentQuestion['choices']
          .find(e=>e['is_correct_choice']===1)['is_correct_choice']?`${clz}-green`:`${clz}-green`
    },
    startTimer(){
      let interval ;
      interval = setInterval(()=>{
        if(this.time < 0)return;
        else if (this.time !== 0){
          this.time -= 1;
        }
        if(this.time ===0 ){
          clearInterval(interval);
        }
      },1000)

    },
    getUserAnswer(e){
      if(!this.userClicked){
        const ele = e.target.getAttribute('data-idx');
        this.eventAnswer = Number(ele);
        this.userClicked = true;
        const obj = this.currentQuestion['choices'].find((el)=>el['is_correct_choice']===1);
        const option = {
          user: Number(ele),
          point: Number(ele) === obj['is_correct_choice'] ? this.currentQuestion['points']: 0,
        }
        this.userAnswerAndCorrect.push(option);

      }

    },
    displayCurrentQuestion(){
      if(!_.isEmpty(this.questions) && this.questions.length !== this.count){
        this.count++;
        this.currentQuestion = this.questions[this.count];
        this.userClicked = false;
      } else{
        console.log(this.userAnswerAndCorrect);
      }
    },
    collectResultAndPush(){
      sessionStorage.setItem("options", JSON.stringify(this.userAnswerAndCorrect));
      this.$router.push({name: "Summary",});

    }
  }
}
</script>

<style scoped>
.circle{
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
</style>