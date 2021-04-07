<!--Author with Username zanio and fullname ANIEFIOK AKPAN-->
<!--@created 08/03/2021 - 1:13 AM -->
<!--@project  @ joblisting In JButton -->

<template>
  <button
    v-bind="$attrs"
    class="rounded bg-primary hover:bg-primary-200 py-2 px-5 text-white inline-block ml-2 font-bold text-base md:text-lg	"
  >
    {{ text }}
  </button>
</template>

<script>

export default {
  props: {
    text: String
  },
  name: "QButton"
}
</script>

<style scoped></style>
