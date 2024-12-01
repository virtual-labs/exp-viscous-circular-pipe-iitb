let act2_div;
function activity2() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    maindiv.innerHTML += `
      ${btn_text}
      <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
         <h3>Activity 2</h3>
         <br>
         <br>
         <img src="./images/fig1.png" style="width:50%">
         <br>
         <br>
         <p style="text-align:left">
            An oil of viscousity ${mu_a2} Ns/m<sup>2</sup> and relative density 0.9 is flowing through a circular pipe of diameter ${D_a2 * 1000} mm and of length ${L_a2} m.
         </p>
         <p style="text-align:left;">
            The rate of flow through the pipe is ${Q_ls_a2} lit/s.
         </p>
         <p style="text-align:left;">
            Find the pressure drop and the shear stress at the pipe wall.
         </p>
         <br>
         <p class="fs-2vw fb-600" style="text-align:left;">
            Area
         </p>

         <div id="act2-A-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$A = \\frac{\\pi}{4}D^2 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-A-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_A();' id='act2-vf-btn1'>Verify</button>
      </div>
      </div>
   `;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    D_a2 = random1(50, 61);
    L_a2 = random1(250, 351);
    Q_ls_a2 = parseFloat(random(3.0, 3.5).toFixed(1));
    D_a2 /= 1000;
    Q_ms_a2 = Q_ls_a2 / 1000;
    A_a2 = (Math.PI / 4) * Math.pow(D_a2, 2);
    avg_u_a2 = Q_ms_a2 / A_a2;
    Re_a2 = (rho * avg_u_a2 * D_a2) / mu_a2;
    P_diff_a2 = (32 * mu_a2 * avg_u_a2 * L_a2) / Math.pow(D_a2, 2);
    shear_st = (P_diff_a2 / L_a2) * (D_a2 / 2 / 2);
    console.log(Re_a2);
}
function a2_verify_A() {
    let A_inp = (document.getElementById('act2-A-inp'));
    console.log(A_a2);
    if (!verify_values(parseFloat(A_inp.value), A_a2)) {
        A_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        A_inp.style.border = '1px solid #ced4da';
        A_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A = \\frac{\\pi}{4}D^2 =  ${parseFloat(A_a2.toFixed(4))}\\ \\ m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Average velocity
      </p>
      <div id="act2-u-bar-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$\\bar{u} = \\frac{Q}{A} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-u-bar-inp' class='form-control fs-16px' /><span style="display:contents;"> m/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_u_bar();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_u_bar() {
    let u_bar_inp = (document.getElementById('act2-u-bar-inp'));
    console.log(avg_u_a2);
    if (!verify_values(parseFloat(u_bar_inp.value), avg_u_a2)) {
        u_bar_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        u_bar_inp.style.border = '1px solid #ced4da';
        u_bar_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-u-bar-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\bar{u} = \\frac{Q}{A} =  ${parseFloat(avg_u_a2.toFixed(3))} \\ \\ m/s $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Reynolds number
      </p>
      <div id="act2-Re-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Re = \\frac{\\rho\\bar{u}D}{\\mu} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-Re-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_Re();' id='act2-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_Re() {
    let Re_inp = (document.getElementById('act2-Re-inp'));
    console.log(Re_a2);
    if (!verify_values(parseFloat(Re_inp.value), Re_a2)) {
        Re_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        Re_inp.style.border = '1px solid #ced4da';
        Re_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-Re-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Re = \\frac{\\rho\\bar{u}D}{\\mu} =  ${parseFloat(Re_a2.toFixed(3))} $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Pressure difference
      </p>
      <div id="act2-p-diff-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$P_1 - P_2 = \\frac{32\\mu\\bar{u}L}{D^2} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-p-diff-inp' class='form-control fs-16px' /><span style="display:contents;"> N/m<sup>2</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_p_diff();' id='act2-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_p_diff() {
    let p_diff_inp = (document.getElementById('act2-p-diff-inp'));
    console.log(P_diff_a2);
    if (!verify_values(parseFloat(p_diff_inp.value), P_diff_a2)) {
        p_diff_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        p_diff_inp.style.border = '1px solid #ced4da';
        p_diff_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-p-diff-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$P_1 - P_2 = \\frac{32\\mu\\bar{u}L}{D^2}  =  ${parseFloat(P_diff_a2.toFixed(3))} \\ \\ N/m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Shear stress
      </p>
      <p style="text-align:left;">
         $$
            \τ = -\\frac{∂P}{∂x}\\frac{r}{2}
         $$
      </p>
      <br>
      <p>
         $$
            \\text{At wall} \\ \\ r = \\frac{R}{2}
         $$
      </p>
      <div id="act2-shear-st-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$\\tau_0 = -\\left(\\frac{P_2 - P_1}{x_2 - x_1}\\right)\\left(\\frac{R}{2}\\right) = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-shear-st-inp' class='form-control fs-16px' /><span style="display:contents;"> N/m<sup>2</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_shear_st();' id='act2-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_shear_st() {
    let shear_st_inp = (document.getElementById('act2-shear-st-inp'));
    console.log(shear_st);
    if (!verify_values(parseFloat(shear_st_inp.value), shear_st)) {
        shear_st_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        shear_st_inp.style.border = '1px solid #ced4da';
        shear_st_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-shear-st-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\tau_0 = -\\left(\\frac{P_2 - P_1}{x_2 - x_1}\\right)\\left(\\frac{R}{2}\\right)   =  ${parseFloat(shear_st.toFixed(3))} \\ \\ N/m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity3();' id='act2-btn1'>Next</button>
      
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map