<!--Author with Username zanio and fullname ANIEFIOK AKPAN-->
<!--@created 07/04/2021 - 4:58 AM -->
<!--@project  @ quiz In QInput -->

<template>
  <div class="p-2">
    <label
        class="text-sm mb-2 font-light text-primary font-normal tracking-widest"
        :for="name"
    >
      {{ label }}
    </label>
    <label>
      <input
          class="appearance-none border-width box-border border-primary
      rounded w-full py-2 px-3 text-gray-700 leading-tight
      focus:outline-none focus:shadow-outline"
          :id="name"
          :type="type"
          :placeholder="placeholder"
          v-bind="$attrs"
          @input="$emit('input', $event.target.value)"
      />
    </label>

  </div>
</template>

<script>


export default {
  name: "QInput",
  props: {
    label: String,
    type: String,
    placeholder: String,
    name: String,
  },


}
</script>

<style scoped>

</style>