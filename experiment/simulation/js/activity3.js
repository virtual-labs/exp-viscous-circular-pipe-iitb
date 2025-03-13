let act3_div;
function activity3() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    maindiv.innerHTML += `
      ${btn_text}
      <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act3-div'>
         <h3>Activity 3</h3>
         <br>
         <br>
         <img src="./images/fig1.png" style="width:50%">
         <br>
         <br>
         <p style="text-align:left">
            A laminar flow is taking place in a pipe of diameter ${D_a3}.<br>
            The maximum velocity is 1.5 m/s.<br>
            Find the average velocity and the radius of maximum velocity.<br>
            Calculate velocity at ${dist} mm from the wall of the pipe.
         </p>
         <br>
         <p class="fs-2vw fb-600" style="text-align:left;">
            Average velocity
         </p>
         <div id="act3-u-bar-div">
            <div class="row justify-content-center" style="align-items:center;">
               <div class="col-md-2">
                  $$\\bar{u} = \\frac{U_{max}}{2} = $$
               </div>
               <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
                  <input  type='number' style="margin:0 5px; width:70%" id='act3-u-bar-inp' class='form-control fs-16px' /><span style="display:contents;"> m/s</span>
               </div>
            </div>
            <br>
            <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_u_bar();' id='act3-vf-btn1'>Verify</button>
         </div>
      </div>
   `;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
    act3_div = document.getElementById('act3-div');
}
function internal_calculation3() {
    D_a3 = random1(150, 251);
    dist = random1(30, 61);
    D_a3 /= 1000;
    avg_u_a3 = U_max / 2;
    r_a3 = Math.sqrt((1 - avg_u_a3 / U_max) * Math.pow((D_a3 / 2), 2));
    u_dist = U_max * (1 - Math.pow((r_a3 / (D_a3 / 2)), 2));
}
function a3_verify_u_bar() {
    let u_bar_inp = (document.getElementById('act3-u-bar-inp'));
    console.log(avg_u_a3);
    if (!verify_values(parseFloat(u_bar_inp.value), avg_u_a3)) {
        u_bar_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        u_bar_inp.style.border = '1px solid #ced4da';
        u_bar_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-u-bar-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\bar{u} = \\frac{U_{max}}{2}   =  ${parseFloat(avg_u_a3.toFixed(3))}\\ \\ m/s $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Location of u
      </p>
      <p>
         $$
            u = - \\frac{1}{4\\mu}\\frac{\∂P}{\∂x}[R^2-r^2]
         $$
         $$
            \∴ \\ \\ \\bar{u} = - \\frac{1}{4\\mu}\\frac{\∂P}{\∂x}[R^2-r^2]
         $$
         $$
            \∵ \\ \\ U_{max} = - \\frac{1}{4\\mu}\\frac{\∂P}{\∂x}R^2
         $$
         $$
            \\bar{u} = U_{max}\\left[1 - \\left(\\frac{r}{R}\\right)^2\\right]
         $$
      </p>
      <p>find r</p>
      <div id="act3-r-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               r =  
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-r-inp' class='form-control fs-16px' /><span style="display:contents;"> m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_r();' id='act3-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_r() {
    let r_inp = (document.getElementById('act3-r-inp'));
    console.log(r_a3);
    if (!verify_values(parseFloat(r_inp.value), r_a3)) {
        r_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        r_inp.style.border = '1px solid #ced4da';
        r_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-r-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         r = ${parseFloat(r_a3.toFixed(3))} m
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Velocity at ${dist} mm
      </p>
      <p>
         $$
            r = R - \\frac{${dist}}{1000} = ${parseFloat(r_a3.toFixed(3))}\\ m
         $$
      
      </p>
      <div id="act3-u-dist-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               $$
                  u = U_{max}\\left[1-\\left(\\frac{r}{R}\\right)^2\\right] = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-u-dist-inp' class='form-control fs-16px' /><span style="display:contents;"> m/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_u_dist();' id='act3-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_u_dist() {
    let u_dist_inp = (document.getElementById('act3-u-dist-inp'));
    console.log(u_dist);
    if (!verify_values(parseFloat(u_dist_inp.value), u_dist)) {
        u_dist_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        u_dist_inp.style.border = '1px solid #ced4da';
        u_dist_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-u-dist-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            u = U_{max}\\left[1-\\left(\\frac{r}{R}\\right)^2\\right]= ${parseFloat(u_dist.toFixed(3))} m/s
         $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act3-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity3();
//# sourceMappingURL=activity3.js.map