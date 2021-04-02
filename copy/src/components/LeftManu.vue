<template>
	<div class="col col-lg-3 col-md-4 col-xl-2 hidden-small-device custom-column-left-side">
									<div class="side-menu-bar">
										<div class="menu-wraper">
											<ul class="menu-ul">
												<li>
													<a href="#" class="active">
														<i class="icon-avatar"></i>	My Profile
													</a>
												</li>
												<li>
													<a href="#">
														<i class="icon-analytics"></i>
														Analytics
													</a>
												</li>
												<li>
													<a href="#">
														<i class="icon-search"></i>
														Search
													</a>
												</li>
												<li>
													<a href="#">
														<i class="icon-leaderboard"></i>
														Leaderboard
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
</template>

<script>
export default {
  name: 'LeftManu',
  props: {
    msg: String
  },
  mounted(){
	
  },
  updated(){
	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
