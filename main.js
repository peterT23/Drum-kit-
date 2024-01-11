// const keys = document.querySelectorAll(".key");
// keys.forEach((key) => {
//   key.addEventListener("transitionend", (e) => {
//     if (e.propertyName !== "transform") return;
//     key.classList.remove("playing");
//   });
// });
// window.addEventListener("keydown", function (e) {
//   console.log("e", e);
//   console.log(e.keyCode);
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   console.log(audio);
//   if (!audio) return;
//   audio.currentTime = 0;
//   audio.play();
//   key.classList.add("playing");
//   // setTimeout(function () {
//   //   key.classList.remove("playing");
//   // }, 100);

//   console.log(key);
// });

window.addEventListener("keydown", (e) => {
  console.log("e", e);
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // const audio2 = document.querySelector(
  //   `audio[src="/audio/drum-pack-clap-option.wav"]`
  // );
  // console.log("audio2", audio2);
  console.log("audio", audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log("key", key);
  console.log("audio", audio);
  if (!audio) return;
  audio.currentTime = 0;

  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
console.log("keys", keys);
keys.forEach((akey) => {
  akey.addEventListener("transitionend", (e) => {
    console.log("e", e);
    if (e.propertyName !== "transform") return;
    akey.classList.remove("playing");
  });
});
