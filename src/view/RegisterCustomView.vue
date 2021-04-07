<!--Author with Username zanio and fullname ANIEFIOK AKPAN-->
<!--@created 07/04/2021 - 5:29 AM -->
<!--@project  @ quiz In RegisterCustomView -->

<template>
  <QLayout text="Register To Play">
    <div class="flex items-center flex-col h-full   justify-center ">
    <div class="flex md:items-center py-5 justify-between items-stretch flex-col md:flex-row mx-auto md:mx-0 w-full">
      <div class="select w-full md:w-2/4 my-5 md:my-0">
        <select @change="selectCountry" name="format" id="format" class="text-white text-base border px-2.5 py-1.5 w-full">
          <option selected disabled>country</option>
          <option :key="value.country" :value="value.country" v-for="value in countries">{{ value.country }}</option>
        </select>
      </div>
      <QInput class="w-full"  type="number" name="phone" placeholder="+234 81 77034 541" :errors="[]"/>
      <p v-if="errorText.length > 0" class="text-fancy cursor-pointer text-base font-normal tracking-wider" > {{ errorText }}</p>
    </div>

    </div>
    <div class="flex items-center justify-center pb-8">
      <QButton @click="nextPage" class="h-12 " text="Register"></QButton>

    </div>

  </QLayout>

</template>

<script>
import QButton from "../components/button/QButton";
import QLayout from "../components/QLayout";
import QInput from "../components/input/QInput";

export default {
  name: "RegisterCustomView",
  data(){
    return {
      phone: "",
      countries: [],
      selected: false,
      country:"",
      errorText:"",
    }
  },
  mounted(){
    this.fetchCountry();
  },
  components: {
    QButton,QLayout,QInput,
    },
  methods:{
    getData(){
      sessionStorage.setItem("phoneNumber", JSON.stringify(this.phone));

    },
    nextPage(){
      this.getData();
      console.log(this.phone)
      if(this.phone.toString().length > 10){
        this.$router.push({name: "Quiz"});
      } else{
        this.errorText = "Phone Number must be greater than 11"
      }
    },
    selectCountry(evt){
      this.country = evt.target.value;
      console.log(this.country);

    },
    async fetchCountry(){

      try {
        const countriesList = await fetch("https://api.first.org/data/v1/countries");
        const response = await countriesList.json();
        this.countries = Object.values(response.data);

      } catch (e) {
        console.log(e);
        this.countries = [];
      }
    }
  }
}
</script>

<style scoped>

select {
  -webkit-appearance:none;
  -moz-appearance:none;
  -ms-appearance:none;
  appearance:none;
  outline:0;
  box-shadow:none;
  /*border:0!important;*/
  background: #5c6664;
  /*background-image: none;*/
  flex: 1;
  /*padding: 0 .5em;*/
  /*color:#fff;*/
  cursor:pointer;
  /*font-size: 1em;*/
}
select::-ms-expand {
  display: none;
}
.select {
  position: relative;
  display: flex;
  /*width: 20em;*/
  /*height: 3em;*/
  line-height: 2.3;
  background: #5c6664;
  overflow: hidden;
  border-radius: .25em;
}
.select::after {
  content: '\25BC';
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  right: 0%;
  padding: 0 .5em;
  /*background: #0D8F97;*/
  color: white;
  cursor:pointer;
  pointer-events:none;
  transition:.25s all ease;
}
.select:hover::after {
  color: #dfe9e8;
}
</style>