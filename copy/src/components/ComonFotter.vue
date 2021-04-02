<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="footer-colum">
          <img src="/assets/images/Music-Equalizer-v3.png" class="flogo" alt>
          <h3>MiV</h3>
          <h4 class="cursr" @click="$router.push('how-what-why')">How, What and Why</h4>

          <h4 class="cursr" @click="$router.push('artist-signup')">Artist Landing Page</h4>

        </div>
        <div class="footer-colum">
          <h3 class="footer-title">Friends Center for</h3>
          <div class="friends_logo">
            <img src="/assets/images/f_artist.png" class alt>
            <img src="/assets/images/f_fans.png" class alt>
          </div>
          <div class="footer_accor">
            <h6>
              <a href="javascript:;">Members</a>
            </h6>
            <p>
              If you have any interesting and fun comments we
              may add them here send to
              <a href="mailto:admin@musicisvivid.com">admin@musicisvivid.com</a>
              and Please keep this short,
              add a picture if you want.
            </p>
          </div>
          <div class="footer_accor">
            <h6>
               <a href="javascript:;">Artist</a>
            </h6>
            <p>
              If you have any interesting recommendations or a story to share please feel free
              to send us an email at
              <a href="mailto:admin@musicisvivid.com">admin@musicisvivid.com</a> and also
              state if you are a Member or Non-Member. Please keep
              messaging short. If you have a story we may share it here.
            </p>
          </div>
          <div class="footer_accor">
            <h6>
              <a href="javascript:;">Affiliates</a>
            </h6>
            <p>
              We may list Affiliates (for example, aggregators who participate and those that do
              not) and possibly any positive input from affiliates for Members and Artists.
            </p>
          </div>
        </div>
        <div class="footer-colum">
          <h3 class="footer-title">Help</h3>
          <p>
            If you have questions or comments
            regarding Navigation, or Report an Issue.
            Please Send your information to
            <a
              href="mailto:admin@musicisvivid.com"
            >admin@musicisvivid.com</a>.
            Please state in the Subject Line,
            Navigation Issue or Report an Issue.
          </p>
        </div>
        <div class="footer-colum">
          <div class="footer_app">
            <h3 class="footer-title no-border">Download The MiV App</h3>
            <a href="https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en" target="_blank" class="footer-store-btn">
              <img src="assets/images/footer-gplay-btn.png" alt>
            </a>
            <a href="https://apps.apple.com/in/app/music-is-vivid/id1489035451" target="_blank" class="footer-store-btn">
              <img src="assets/images/footer-appstore-btn.png" alt>
            </a>
          </div>
          <div class="social_link">
            <h3 class="footer-title no-border">Follow us</h3>
            <nav class="footer-social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/musicisvivid/" target="_blank">
                    <i class="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/musicisvivid/" target="_blank">
                    <i class="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/musicisvivid" target="_blank">
                    <i class="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://in.pinterest.com/musicisvivid/pins/" target="_blank">
                    <i class="icon-pinterest"></i>
                  </a>
                </li>
                <!-- <li><a href="javascript:;"><i class="icon-pinterest"></i></a></li>
                <li><a href="javascript:;"><i class="icon-youtube"></i></a></li>-->
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <nav class="footer-bottom-menu">
          <ul>
            <li>
              <a href="/user-agreement" target="_blank">Terms of Use</a>
            </li>
            <li>
              <a href="/privacy-cookies-policy" target="_blank">Privacy & Cookies Policy</a>
            </li>
            <!-- <li>
              <a href="javascript:;">Cookies Policy</a>
            </li> -->
            <li>
              <a href="/disclaimer" target="_blank">Disclaimer</a>
            </li>
            <li>
              <a href="http://blog.musicisvivid.com" target="_blank">Blog</a>
            </li>
          </ul>
        </nav>
        <p class="copyright-text">© MiV LLC. {{currentYear}}, All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ComonFotter",
  props: {
    msg: String
  },
  created() {
    this.currentYear = new Date().getFullYear();
  },
};
$('body').on('click','.footer_accor h6 a',function(){
	let thisOne = $(this).parent().parent('.footer_accor');
	// if(!thisOne.hasClass('show')) {
	// 	$('.footer_accor').removeClass('show');
	// 	thisOne.addClass('show');
	// } else {
	// 	thisOne.removeClass('show');
	// }
	if(!thisOne.children('p').is(':visible')) {
		$('.footer_accor p').slideUp(400);
		thisOne.children('p').slideDown(400);
	} else {
		thisOne.children('p').slideUp(400);
	}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cursr {
  cursor: pointer;
}
</style>