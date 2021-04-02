<template>
  <div class="nothome">
    <!-- <AppHeader></AppHeader> -->
      <div v-if="user">
         <AuthAppHeader></AuthAppHeader>
      </div>
       <div v-else>
          <UnAuthAppHeader></UnAuthAppHeader>
      </div>
    <div class="main-banner">
      <div class="how_competition_work_top">

        <div class="heading-part">
            <h2 class="work-flow-heading">Tomorrow’s Stars Today</h2>
        </div>
        <div class="container-fluid">

          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
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
          <div class="second_section">
            <div class="left_part">
              <img src="/assets/images/how_competition_work_grapic.png" alt>
            </div>
            <div class="right_part">
              <h2>Contest Starts</h2>
              <ul>
                <li>240 Artists compete-in two rounds-for top 96 slots,</li>
                <li>
                  Then Top 96 compete for top 32 slots
                  <span>
                    A Contest means 3 Artists are in a contest with each other.
                    All 240 Artists Live and Draft compete in their genre (Alternative, Country, POP, etc.)
                  </span>
                </li>
                <li>
                  Tournament Starts with Top 32
                  <span>Tournament is 2 artists head to head until genre winner</span>
                </li>
              </ul>
              <div class="member_vote_div">
                <img src="/assets/images/positive-vote.svg" alt>Only Members Can Vote
              </div>
            </div>
          </div>
            </div>
          </div>
         
        </div>
      </div>
      
      <div class="how_comp_bottom tournament-blue-sec">
        <div class="container">
          <h3>Tournament Starts at Top 32 Artists</h3>
          <span class="sub_title">
            (per genre
            <b>Live</b> and
            <b>Draft</b>)
          </span>
          <div class="pt-75 pl-75">
            <div class="number_div">
              <ul>
                <li><span>32</span></li>
                <li><span>16</span></li>
                <li><span>8</span></li>
                <li><span>4</span></li>
                <li><span>2</span></li>
              </ul>
            </div>
            <div class="tour_left">
              <img src="/assets/images/how_competition_work_02.png" alt>
            </div>
            <div class="tour_right">
              <h6>When the Tournament starts -</h6>
              <ul>
                <li>There are two Artist competing and</li>
                <li>Voting is One Vote for First Place. Everything else is the same.</li>
              </ul>
              <h6>Tournament starts with :</h6>
              <ul>
                <li>Top 32 to decide top 16</li>
                <li>Then Top 16 compete for Top 8 Artists</li>
                <li>Then Top 8 compete for Top 4 Artists</li>
                <li>Then Top 4 compete for Top 2 Artists</li>
                <li>Finals decide # 1 and # 2</li>
                <li>Final for series 1</li>
                <li>All artists are ranked in every genre</li>
              </ul>
              <p>Each Artist in Each Genre Live and Draft are Ranked according to Member Fan Voting. Only Members may Vote.</p>
              <h6>This Concludes the First Series Competition</h6>
              <p>A countdown clock starts in preparation for Series 2. Some Draft artists are eligible to move to the Live section based on fan votes and fan following. The number of contestants remains fixed at 240.</p>
              <div class="member_vote_div">
                <img src="/assets/images/positive-vote.svg" alt>Only Members Can Vote
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="how_comp_blue">
        <div class="container-fluid">

          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
                <h3>Some Contest Details</h3>
          <div class="blue_flex">
            <div class="blue_img_div">
              <img src="/assets/images/blue_chatr.png" alt>
            </div>
            <div class="time_div">
              <img src="/assets/images/timer.png" alt>
            </div>
            <div class="blue_right_text">
              <ul>
                <li>2 Category (Live & Draft)</li>
                <li>8 Genre</li>
                <li>Total Contest : 16</li>
                <li>Each Contest Time : 30 min.</li>
                <li>Time for 1 set = 16*30min = 8 hours</li>
                <li>3 times * 8 = 24 hours</li>
              </ul>
            </div>
          </div>
          <ul>
            <li>A New Contest Starts every 30 minutes in Each genre in Live and Draft.</li>
            <li>So there are 16 New (3-artist) Contests every 30 minutes, (8 genres in Live and 8 genres in Draft). Members can vote in any and all genre contests.</li>
            <li>Every 30 minute voting segment is repeated 3 times or once per 8 hours for 24 hours (world clock, therefor, fair for all)</li>
            <li>There are 2 Rounds of 240 competing artists to get to the Top 96 artists. The top 96 artists also compete in a 3 artist contest to determine Top 32 artists per genre (Live and Draft).</li>
            <li>All Contest Voting is; 3 artists compete in a 30 minute segment. Voting stops after 27 minutes. Artist score is based on; The Contest is worth 70%, and Fan Likes, Love and Followed is worth 10% each. Once Voting is submitted then the vote is final.</li>
          </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <AppFooter></AppFooter>
  </div>
</template>

<script>
// @ is an alias to /src

import UnAuthAppHeader from '@/components/UnauthHeader.vue';
import AuthAppHeader from '@/components/AuthHeader.vue';
import axios from "axios";
import AppFooter from "@/components/ComonFotter.vue";

export default {
  name: "CompetitionWorkFlow",
   data() {
    return {
      user: JSON.parse(localStorage.getItem("User"))
    };
  },
  components: {
    AuthAppHeader,
    UnAuthAppHeader,
    AppFooter
  }
};
</script>