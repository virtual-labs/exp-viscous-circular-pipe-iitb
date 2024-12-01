importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"bae4887992faac1b630542a22f5298d7","url":"contributors.html"},{"revision":"cf6d58534c3722941231a929fda7bb51","url":"feedback.html"},{"revision":"791464c7eb092d6f0dd9fede7833ff46","url":"images/fig1.png"},{"revision":"fd6c7c0c639c524483740537e8d5a186","url":"images/fig2.png"},{"revision":"3685a3f1e4baf8ab84ea640d9c65c07b","url":"images/fig3.png"},{"revision":"d21daceba5bee44a907e7653009e01b9","url":"images/forceOnElement.png"},{"revision":"7ae6f487d8302dbea92ce8388fd233b9","url":"images/pro1.png"},{"revision":"984c64ffa74cb885a7f8b831de41e308","url":"images/pro10.png"},{"revision":"7f9ae607e81cde0bf3ace04d87654823","url":"images/pro11.png"},{"revision":"7c5b9d609464ec16cc9bac5f3fcedb8a","url":"images/pro12.png"},{"revision":"36e425413d4c103c8db3016b34a95a40","url":"images/pro13.png"},{"revision":"c373266131cc39b5defdc38b226ea079","url":"images/pro14.png"},{"revision":"920eeaa6e2934f8d8f0605a1bfa61136","url":"images/pro15.png"},{"revision":"65f5fc46759564df4be37ba983ddc4bd","url":"images/pro16.png"},{"revision":"3a0cf18a57026eec7edcd84dc31ffb95","url":"images/pro2.png"},{"revision":"1bfc9586781ab712f3869f124fc63761","url":"images/pro3.png"},{"revision":"cba73f9ee82c64ade7d49ab5f12a9b46","url":"images/pro4.png"},{"revision":"623d325c01e1ec0b8f434f0319dda481","url":"images/pro5.png"},{"revision":"626d9b4cb328a02f251701c16d298df9","url":"images/pro6.png"},{"revision":"d4781551632b3a16d1b99460e27471f8","url":"images/pro7.png"},{"revision":"dc38ff8f813f01ce928452ab425f3712","url":"images/pro8.png"},{"revision":"1d450b9b9aca0d2b903ec13f4c273c4c","url":"images/pro9.png"},{"revision":"43043515116f382b269557759b3b146c","url":"images/th1.jpg"},{"revision":"a22717646b55604f4adf4de26e27d6d3","url":"images/th2.jpg"},{"revision":"4598bb4d30af319c287d365580092dbf","url":"images/th3.jpg"},{"revision":"6b43d62031dc7b2aec7b46af040853f4","url":"images/th4.jpg"},{"revision":"90ed326cd3259a860202309299dc9fb5","url":"images/th5.jpg"},{"revision":"a6750c3c148b6d3ca1d9bee35d5e53c5","url":"images/venturimeter.png"},{"revision":"9444f6f9226b6d9481eaba283703b793","url":"index.html"},{"revision":"6ba37dcbfb14ace992fe30bd33055510","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"765f15f5b0f8f9646618db9b914ed875","url":"posttest.html"},{"revision":"e790e030f836c9a88bae55b22dcd4ffe","url":"posttest.json"},{"revision":"46d386d6c04500a43bbac087846e1864","url":"pretest.html"},{"revision":"c2d2d66caf74f8e96a6b19fe3350143f","url":"pretest.json"},{"revision":"0915803952bd9f1e777e4896d1ae1306","url":"procedure.html"},{"revision":"fe872bebf844184677fd5968fcfe1a4e","url":"references.html"},{"revision":"8fe3b68dd7914fa860611d5a16d4221b","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"fd6c7c0c639c524483740537e8d5a186","url":"simulation/images/fig1.png"},{"revision":"5a4714e432e74edd48615f31996da3f7","url":"simulation/index.html"},{"revision":"05b61c8ce1b3a47874fe5b256412878e","url":"simulation/js/activity1.js"},{"revision":"92f6b660db766ce92166d7666c0b9561","url":"simulation/js/activity2.js"},{"revision":"7e8dfaacaffb2b2babfac00271464f98","url":"simulation/js/activity3.js"},{"revision":"3732e3b223e610bf85c3de5c55190376","url":"simulation/js/data.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"2949a0a675e0e2a3c0623669d658936e","url":"simulation/js/screen_size.js"},{"revision":"77f612c60b7064ea393b69299ec12674","url":"theory.html"},{"revision":"e743b72e64690ead7192f5b654e8376e","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );