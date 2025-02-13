const pianoKeys = document.querySelectorAll(".piano-keys .key ")
volumeSlider = document.querySelector(".volume-slider input")
let allkeys = [],
audio = new Audio("tunes");

const playTune = (key) => {
    // audio.src = `tunes/${key}.wav`;
    audio.src = "tunes/" + key + ".wav";
    audio.play();
    // const clickedKey = document.querySelector(`[data-keys="${key}"]`);
    // clickedKey.classList.add("active");
    // setTimeout(() => {
    //     clickedKey.remove("active");
    // }, 150);
}


pianoKeys.forEach(key => {
   allkeys.push(key.dataset.key);
   key.addEventListener
      ("click",() => playTune(key.dataset.key));
   
});

/*** 
("click", event => {
    const clickedKey = event.target;
    if (clickedKey.dataset.key) {
      playTune(clickedKey.dataset.key);
    }
  }); 
*/

const handleVolume = (e) => {
    audio.volume = e.target.value;
}
const pressedKey = (e) => {
    if(allkeys.includes(e.key))playTune(e.key);
}
volumeSlider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedKey);




