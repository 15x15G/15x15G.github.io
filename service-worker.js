/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "52d68fd994507ba019966999edf6e034"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "b8721cdb1f152de3c7037e03c5223693"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "2dd923a3d36faf65a46eddc86f563102"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "a68e51b816905bd290a017906ee93d84"
  },
  {
    "url": "assets/css/0.styles.86ba8c6e.css",
    "revision": "bb9843ac32942cae0f90b5594f749df3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56c5e889.js",
    "revision": "264e5b8706efc55ec2772a524c3714d9"
  },
  {
    "url": "assets/js/11.6169082f.js",
    "revision": "ca9a29f1561b77f570cf900d5995f5b3"
  },
  {
    "url": "assets/js/12.e57633ba.js",
    "revision": "96c3c073165915034a8f163a471e3555"
  },
  {
    "url": "assets/js/13.50b15647.js",
    "revision": "12c6d1efc67d9c712117640b6477b738"
  },
  {
    "url": "assets/js/14.07595196.js",
    "revision": "57cfbdbd7ccfb0389d696b961eb21a07"
  },
  {
    "url": "assets/js/15.3dcafa15.js",
    "revision": "667564e38dc65fb48dab449fcdc85cf1"
  },
  {
    "url": "assets/js/16.ae920adc.js",
    "revision": "8f68122afcbf485689da6f8edb9fd40c"
  },
  {
    "url": "assets/js/17.c7f5c0cc.js",
    "revision": "e7a4f99d3c08f9255291061cbf63c9c0"
  },
  {
    "url": "assets/js/18.75373629.js",
    "revision": "8fbe03377a7cf6c04db8ee69fe58eda8"
  },
  {
    "url": "assets/js/19.fd022249.js",
    "revision": "83c84fb4128d7d603dc66bc830ca6d23"
  },
  {
    "url": "assets/js/2.95035f84.js",
    "revision": "312081e9f4c33dcd24b30af0dc84274b"
  },
  {
    "url": "assets/js/20.a11c1048.js",
    "revision": "6870a66290c65c95292b6c4e55fe36ba"
  },
  {
    "url": "assets/js/21.f281539e.js",
    "revision": "a8e7acb9e7b212ac3089962c636b5c14"
  },
  {
    "url": "assets/js/22.bd5cb3e4.js",
    "revision": "baa77d68a083516fc8eb375185968757"
  },
  {
    "url": "assets/js/3.ee7bf2b8.js",
    "revision": "ee53677207a04f71869e9db2062f2d93"
  },
  {
    "url": "assets/js/4.6c6e7ca3.js",
    "revision": "22dcdc2d59bba62c412b42cae87777b4"
  },
  {
    "url": "assets/js/5.deb8d7b4.js",
    "revision": "44a3011fb48255984c8bf3622142a57e"
  },
  {
    "url": "assets/js/6.f339863b.js",
    "revision": "22695c3260302bb81b0e901577e66566"
  },
  {
    "url": "assets/js/7.aa3c2073.js",
    "revision": "653119fc8ec7172cf114345acf5af50c"
  },
  {
    "url": "assets/js/8.87b47037.js",
    "revision": "c6761f89aa5369ddcffc1871879d1cf1"
  },
  {
    "url": "assets/js/9.76ab1fe9.js",
    "revision": "25c410033ddcc6e401d5aae7b08cefeb"
  },
  {
    "url": "assets/js/app.972ab945.js",
    "revision": "73b5d40685af58708d5c401bf6dffd03"
  },
  {
    "url": "Blog/AboutWebsite.html",
    "revision": "d5a996acbf49745804f28661abf80924"
  },
  {
    "url": "Blog/index.html",
    "revision": "b416555466687348e2a741104582dc15"
  },
  {
    "url": "Blog/miniskills.html",
    "revision": "4e74c559e785b0376df6fdc73c0f13c7"
  },
  {
    "url": "Blog/Star.html",
    "revision": "7f0c9a3dbc91d6481041f020fd035e35"
  },
  {
    "url": "css/eoclock.css",
    "revision": "145e3e7d75b391100817dbc39ea999cc"
  },
  {
    "url": "css/eorzeaclock.min.css",
    "revision": "b5316a4f278dfae1d23f70a3972b3105"
  },
  {
    "url": "css/ffxivfont.css",
    "revision": "3f83b94711a164e76cc633dadba6917d"
  },
  {
    "url": "css/giscus.css",
    "revision": "982db4910fa42a4578a3d0dd0fbc3a22"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "3b7f943c1dd4c923f0f86991a266dc42"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "f9f3033f8f9f0003a620a55ffbb65476"
  },
  {
    "url": "ff14/AtmaClock.html",
    "revision": "c950827128e1f5d1324ebc6e82c1eae8"
  },
  {
    "url": "ff14/Font.html",
    "revision": "e648e1deaad716f7a735a5a515fbe78b"
  },
  {
    "url": "ff14/index.html",
    "revision": "b29d8c73b98629e44d370a95e9340d7d"
  },
  {
    "url": "ff14/Lore.html",
    "revision": "a2cb4fcd6c4723515353d66dd4058c5e"
  },
  {
    "url": "ff14/Map.html",
    "revision": "79acd3204784f4fb42a28aeb06b89292"
  },
  {
    "url": "ff14/Search.html",
    "revision": "5e93d9d6d89b8d906afa18fec55b913c"
  },
  {
    "url": "ff14/Time.html",
    "revision": "27936e911c2fce68a45d872ea7145772"
  },
  {
    "url": "fonts/FFXIV_Lodestone_SSF.ttf",
    "revision": "559f0ed9c63eea205311822681d81ffe"
  },
  {
    "url": "fonts/FFXIV_Lodestone_SSF.woff",
    "revision": "4e8cbf371bb6865727a620e35a108f65"
  },
  {
    "url": "img/01halone.png",
    "revision": "f24a2324b205817609cfd32665041a8f"
  },
  {
    "url": "img/02menphina.png",
    "revision": "8b9b9980b2bd237d0f034ebd8f4140d4"
  },
  {
    "url": "img/03thaliak.png",
    "revision": "c1d3ecc60a66bf964ef235efb546bf5d"
  },
  {
    "url": "img/04nymeia.png",
    "revision": "7afd2438acbeb565fb1a9ea0a9d3975a"
  },
  {
    "url": "img/05llymlaen.png",
    "revision": "600352a267a4e741efe56fa952677436"
  },
  {
    "url": "img/06oschon.png",
    "revision": "d8882f5c3d58fa56db3bf576232113cf"
  },
  {
    "url": "img/07byregot.png",
    "revision": "a832fabd9d75413a0a4b8a0461bf4839"
  },
  {
    "url": "img/08rhalgr.png",
    "revision": "8079908a3619704bb4ea063dcee2d213"
  },
  {
    "url": "img/09azeyma.png",
    "revision": "95df62efee24528239263624a2cd0de1"
  },
  {
    "url": "img/10naldthal.png",
    "revision": "133270a83b36dcaa6fe0fe9cb09d85bc"
  },
  {
    "url": "img/11nophica.png",
    "revision": "d3db0d5ae8ee708d127046a7c5c36f21"
  },
  {
    "url": "img/12althyk.png",
    "revision": "5e2260870808512437063ce514232057"
  },
  {
    "url": "img/earth.png",
    "revision": "700993183ea5a299011f8a4cfacac137"
  },
  {
    "url": "img/fire.png",
    "revision": "1e8c8dc047a8bdec6850b128ce4e8194"
  },
  {
    "url": "img/full.png",
    "revision": "9529a0a690a59270328cbc25efbe2778"
  },
  {
    "url": "img/ice.png",
    "revision": "a56f14c3dfe83aec46f6b6bc1a236e91"
  },
  {
    "url": "img/lightning.png",
    "revision": "c2f53f9059105fe94df6312b8bf8eb07"
  },
  {
    "url": "img/new_crescent.png",
    "revision": "2b9205114279c474e021dc992e1b8b79"
  },
  {
    "url": "img/new_gibbous.png",
    "revision": "db8550b0cdfa06732a62d41c7aa53167"
  },
  {
    "url": "img/new.png",
    "revision": "1f5543fd503459c6b04b37dc8c231c01"
  },
  {
    "url": "img/old_crescent.png",
    "revision": "6eca230d1a534e9ccdd7f5f362d6a2fa"
  },
  {
    "url": "img/old_gibbous.png",
    "revision": "2029f0e96e94c27462b46194762e350b"
  },
  {
    "url": "img/quarter.png",
    "revision": "88caa2f77fe9ef7ee18555b745e3cc1c"
  },
  {
    "url": "img/spirit.png",
    "revision": "3ade2477598c11fe15263b209265a6f3"
  },
  {
    "url": "img/star.png",
    "revision": "994bd24872a8f0f0a0e0d00832b14391"
  },
  {
    "url": "img/waning.png",
    "revision": "75dba5ceebe22bc91aa9e9bfb463858c"
  },
  {
    "url": "img/water.png",
    "revision": "52b00d929502ec4091ab853c97a58c2c"
  },
  {
    "url": "img/wind.png",
    "revision": "4ce2e124233b62d1a203443c498b1779"
  },
  {
    "url": "index.html",
    "revision": "a8c3b01598ee3ebe36db7dd564db4c4b"
  },
  {
    "url": "js/eoclock.js",
    "revision": "4f99c4441255387d03f2d3067de91883"
  },
  {
    "url": "js/eorzeaclock.min.js",
    "revision": "387744783687e46b310ed71296b81ab6"
  },
  {
    "url": "js/fontpage.js",
    "revision": "1586473e04baa2dab2bab79ddf050d96"
  },
  {
    "url": "js/search.js",
    "revision": "e932efd6ae19c2d089cead7817bee84d"
  },
  {
    "url": "js/xivapi.js",
    "revision": "81c955a4d1702ad526d4d05229451210"
  },
  {
    "url": "Tools/index.html",
    "revision": "3f2260b9732c22b05c3196f7229009ef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
