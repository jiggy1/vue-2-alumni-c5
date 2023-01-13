<template>
  <div class="max-w-[18.75rem] w-full">
    <div class="circle main-image-wrapper bg-main">
      <div class="circle white-circle">
        <div class="circle bg-main image-wrapper">
          <img
            v-if="image"
            :src="'data:image/jpeg;base64,' + image"
            alt="Member"
          />
          <div
            v-else
            class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span class="text-black text-7xl font-bold">{{
              firstLetter + secondLetter
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <div>
        <div class="min-h-[160px]">
          <h2 class="fullname">{{ displayFullname }}</h2>
          <h3 class="position mt-3">{{ cohorte }}</h3>
        </div>
        <p class="mt-6">
          Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis
          glavrid from dolor amet iquam lorem bibendum
        </p>
      </div>

      <button class="btn-profile mt-8">Voir</button>
    </div>
  </div>
</template>

<script>
import { formatFullname } from "../utils/formatName";

export default {
  name: "Card",
  props: ["name", "surname", "cohorte", "image", "firstLetter", "secondLetter"],
  data() {
    return {
      // firstLetter: this.name.charAt(0).toUpperCase(),
      // secondLetter: this.surname.charAt(0).toUpperCase()
    };
  },
  computed: {
    displayFullname() {
      const fullname = this.name + " " + this.surname;
      return formatFullname(fullname);
    },
  },
};
</script>
