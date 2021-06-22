var current_step;

document.addEventListener("DOMContentLoaded", () => {
    // load_step(1);

    let params = new URLSearchParams(window.location.search);
    let param_step = Number(params.get("step"));
    if (param_step < 117 && param_step > 0){
        load_step(param_step);
    }
    else{
        load_step(1);
    }
    

    document.querySelector("#prev-step").onclick = () => {
        if (current_step > 1){
            load_step(current_step-1);
        }
    };

    document.querySelector("#next-step").onclick = () => {
        if (current_step < 116){
            load_step(current_step+1);
        }
    };

    document.querySelector("#jump-go").onclick = () => {
        let step = Number(document.querySelector("#jump-step").value);
        if (step < 117 && step > 0){
            load_step(step);
        }
        else{
            alert("ERROR: Enter a step number between 1 and 116.");
        }
    };
});

function load_step(new_step){
    current_step = new_step;
    document.querySelector("#parts").src = `assets/png/claw-parts-${new_step}.png`;
    document.querySelector("#anim-src").src = `assets/mp4/Step${new_step}.mp4`;
    document.querySelector("#anim").load();
    document.querySelector("#this-step").innerHTML = `Step ${new_step}`;
}