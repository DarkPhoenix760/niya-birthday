const music = document.getElementById("music");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    music.volume = 0;

    music.play();

    // Smooth fade in
    let vol = 0;

    const fade = setInterval(() => {

        if(vol >= 0.4){
            clearInterval(fade);
        } else {
            vol += 0.02;
            music.volume = vol;
        }

    }, 200);

    document.getElementById("intro").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("intro").style.display = "none";
    }, 1000);

});