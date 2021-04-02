<template>
  <div class="support-text">
    <h3>
      <strong>Support</strong>
    </h3>
    <p>
      <strong>
        If you have any issue with this page please contact us immediately at:
        <a
          href="mailto:admin@musicisvivid.com"
        >admin@musicisvivid.com</a>,
        Please Put in subject Line; Issue with Function.
        Please explain the issue. Thank you..&nbsp;&nbsp;
      </strong>
    </p>

    <div>
      <div class="">
        <div class="how_competition_work_top mt-0">
          <div class="container">
            <div class="first_section">
              <div class="left_part">
                <img src="/assets/images/how_competition_work_01.png" alt>
              </div>
              <div class="right_part">
                <h1>How Competitions Works</h1>
                <ul>
                  <li>There are two Artist Competition Sections; Live and Draft</li>
                  <li>There are 8 Genres, and 240 artists total in each genre in Live and Draft.</li>
                  <li>Live and Draft Competitions are Mirror images of each other.</li>
                  <li>In the first Competition, Artists are seeded in Live and Draft based on their total number of Fan Following. The lowest seeded Artist in Live is higher than the top seeded artist in Draft. Seeding is 100% decided by Fan following.</li>
                  <li>The difference for Live is that artists earn pay-out based on competition results. Draft is for Artists gaining traction and building Fan Following. The Draft Artist goal is to place high in their genre competition and be seeded to the Live competition. All Results are decided 100% by Member Fan Voting.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { API } from "@/api/api";
export default {
  name: "Support",
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.support-text {
  margin: 40px;
  box-shadow: 0 1px 6px 0px rgba(0, 0, 0, 0.16);
  padding: 30px;
}
</style>