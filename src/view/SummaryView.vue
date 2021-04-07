<!--Author with Username zanio and fullname ANIEFIOK AKPAN-->
<!--@created 07/04/2021 - 6:04 PM -->
<!--@project  @ quiz In SummaryView -->

<template>
  <QLayout text="Summary">

  <ul class="list-reset text-black mb-8 mt-16 p-8 text-grey-darker rounded shadow-lg">
    <li class="flex items-center mb-3 text-black cursor-pointer text-base font-normal tracking-wider">
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-none w-8 mr-2" viewBox="0 0 24 24" fill="#0D8F97">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        /></svg>
      {{ 'Total number of questions answered ' }}
      <span style="width:30px;height: 30px;" class="bg-primary p-4 flex items-center justify-center rounded-full font-bold text-white ml-2">{{ totalNumberOfAnswerQuestion }}</span>

    </li>
    <li class="flex items-center mb-3 text-black cursor-pointer text-base font-normal tracking-wider">
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-none w-8 mr-2" viewBox="0 0 24 24" fill="#0D8F97">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        /></svg>
      {{ 'Total number of correct answers ' }}
      <span style="width:30px;height: 30px;" class="bg-primary p-4 flex items-center justify-center rounded-full font-bold text-white ml-2">{{ totalNumberOfCorrectAnswer }}</span>

    </li>
    <li class="flex items-center mb-3 text-black cursor-pointer text-base font-normal tracking-wider">
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-none w-8 mr-2" viewBox="0 0 24 24" fill="#0D8F97">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        /></svg>
      {{ 'Total number of incorrect answers ' }}
      <span style="width:30px;height: 30px;" class="bg-primary p-4 flex items-center justify-center rounded-full font-bold text-white ml-2">{{ totalNumberOfIncorrectAnswer }}</span>

    </li>
    <li class="flex items-center mb-3 text-black cursor-pointer text-base font-normal tracking-wider">
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-none w-8 mr-2" viewBox="0 0 24 24" fill="#0D8F97">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        /></svg>
      {{ 'Total point accumulated ' }}
    <span style="width:30px;height: 30px;" class="bg-primary p-4 flex items-center justify-center rounded-full font-bold text-white ml-2">{{ totalPointAccumulated }}</span>
    </li>

  </ul>
    <div class="flex items-center justify-center pb-8">
      <QButton @click="startAgain" class="h-12 " text="Play Again"></QButton>

    </div>
  </QLayout>
</template>

<script>
import QLayout from "../components/QLayout";
import QButton from "../components/button/QButton";


export default {
  name: "SummaryView",
  data(){
    return{
      totalPointAccumulated:"",
      totalNumberOfIncorrectAnswer:"",
      totalNumberOfCorrectAnswer:"",
      totalNumberOfAnswerQuestion:"",
    }
  },
  components: {
    QButton,QLayout,
  },
  mounted (){
    const obj = JSON.parse(sessionStorage.getItem('options'));
    this.totalNumberOfAnswerQuestion = obj.length;
    this.totalNumberOfCorrectAnswer = obj.filter(e=>e['user']===1).length;
    this.totalNumberOfIncorrectAnswer = obj.filter(e=>e['user']===0).length;
    this.totalPointAccumulated = obj.reduce((x,y)=>x+Number(y['point']),0);
    console.log(obj);
  },
  methods:{
    startAgain(){
      sessionStorage.removeItem('options');
      this.$router.push({name: "Quiz"});

    }
  }
}
</script>

<style scoped>

</style>