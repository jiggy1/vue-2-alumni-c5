<template>
  <div class="flex divide-x">
    <SideBar />

    <div class="w-full pb-10">
      <div
        class="grid mx-auto grid-cols-1 w-fit gap-x-24 gap-y-32 py-10 md:grid-cols-2 2xl:grid-cols-3 5xl:grid-cols-4"
      >
        <Card
          :key="index"
          v-for="(user, index) in users"
          :name="user.participantNom"
          :surname="user.participantPrenom"
          :image="user.participantPhoto"
          :cohorte="user.sousProgrammeLibelle"
          :first-letter="user.firstLetter"
          :second-letter="user.secondLetter"
        />
      </div>

      <nav class="mx-auto w-fit mt-10">
        <ul class="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight !text-black !bg-main hover:!bg-black hover:!text-white"
              >Précédent</a
            >
          </li>
          <li v-for="index in totalPages" :key="index">
            <a
              href="#"
              class="px-3 py-2 leading-tight !text-black !bg-main hover:!bg-black hover:!text-white"
              @click="() => getPage(index)"
              >{{ index }}</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight !text-black !bg-main hover:!bg-black hover:!text-white"
              >Suivant</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import Card from "./components/Card.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
    SearchBar,
    Card,
  },
  data() {
    return {
      users: [],
      cohortes: [],
      size: 4,
      totalPages: 0,
      currentPage: 1,
      totalElements: Number,
    };
  },
  mounted() {
    this.getAllData();
  },
  updated() {},
  methods: {
    async getAllData() {
      const res = await fetch("https://api.participants.odc.ci/participants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ size: this.size, page: this.currentPage }),
      }).then((data) => data.json());
      this.getData(res);
    },
    async getPage(page) {
      const res = await fetch("https://api.participants.odc.ci/participants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ size: this.size, page }),
      }).then((data) => data.json());
      this.getData(res);
    },

    getData(res) {
      this.users = res.content;

      for (let index = 0; index < this.users.length; index++) {
        const element = this.users[index];
        (element.firstLetter = element.participantNom.charAt(0).toUpperCase()),
          (element.secondLetter = element.participantPrenom
            .charAt(0)
            .toUpperCase());
      }
      this.totalElements = res.totalElements;
      this.totalPages = res.totalPages;
      this.currentPage = res.page;
    },
  },
};
</script>
