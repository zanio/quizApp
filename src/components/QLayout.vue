<!--Author with Username zanio and fullname ANIEFIOK AKPAN-->
<!--@created 07/04/2021 - 5:02 AM -->
<!--@project  @ quiz In QLayout -->

<template>
  <div class="h-screen	bg-image flex flex-col">
    <p class="text-2xl mx-auto text-primary text-center md:text-left
    md:text-left z-10 mb-12 md:mb-13 font-semibold tracking-wider	bg-white p-2">{{ text }}</p>
  <div class="flex  flex items-center h-4/6  mt-0 md:mt-8">
    <div class="bg-white rounded shadow border  p-5 w-11/12	 md:w-2/4 mx-auto">
      <slot ></slot>
    </div>

  </div>
  </div>

</template>

<script>

export default {
  props: {
    text: String
  },
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-color: #ffffff;
  background-size: cover;
  position: relative;
}

</style>