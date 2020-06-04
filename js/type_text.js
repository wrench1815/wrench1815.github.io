/****************************************************
 *  Author : Hardeep Kumar
 *  Created On : Thu Jun 04 2020
 *  File : type_text.js
 *
 *  Contains js Code for Text Typing Animations
 ***************************************************/
var typed = new Typed('#welcome_texts_anim', {
  stringsElement: '#welcome_texts',
  smartBackspace: true,
  typeSpeed: 20,
  backSpeed: 20,
  backDelay: 900,
  loop: true,
  loopCount: Infinity,
  autoInsertCss: true,
  // shuffle: true,
});
