let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Viscous flow through circular pipe</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <br>
      <img src="./images/fig1.png" style="width:50%">
      <br>
      <br>
      <p style="text-align:left">
         A crude oil of viscousity 0.97 poise and relative density 0.9 is flowing through a horizontal circular pipe of diameter ${D_a1 * 1000}mm and length of ${L_a1}m .
      </p>

      <p style="text-align:left;">
         Calculate the difference of pressure at the two ends of the pipe, if ${M_a1}kg of oil is collected in a tank in ${t_a1} seconds .
      </p>
      <br>

      <p class="fs-2vw fb-600" style="text-align:left;">
         Mass flow rate
      </p>
      
      <div id="act1-m-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$\\dot{m} = \\frac{M}{t} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-m-inp' class='form-control fs-16px' /><span style="display:contents;"> kg/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_m();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    D_a1 = random1(80, 121);
    L_a1 = parseFloat(random(9.0, 12.0).toFixed(1));
    M_a1 = random1(90, 121);
    t_a1 = random1(40, 51);
    D_a1 /= 1000;
    m_a1 = M_a1 / t_a1;
    Q_a1 = m_a1 / rho;
    A_a1 = (Math.PI / 4) * Math.pow(D_a1, 2);
    avg_u_a1 = Q_a1 / A_a1;
    Re_a1 = (rho * avg_u_a1 * D_a1) / mu_a1;
    P_diff_a1 = (32 * mu_a1 * avg_u_a1 * L_a1) / Math.pow(D_a1, 2);
    console.log('D', D_a1);
    console.log('L', L_a1);
    console.log('M', M_a1);
    console.log('t', t_a1);
    console.log('m', m_a1);
    console.log('Q', Q_a1);
    console.log('A', A_a1);
    console.log('avg_u', avg_u_a1);
    console.log('Re', Re_a1);
    console.log('P_diff', P_diff_a1);
}
function a1_verify_m() {
    let m_inp = (document.getElementById('act1-m-inp'));
    console.log(m_a1);
    if (!verify_values(parseFloat(m_inp.value), m_a1)) {
        m_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        m_inp.style.border = '1px solid #ced4da';
        m_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-m-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\dot{m} = \\frac{M}{t} =  ${parseFloat(m_a1.toFixed(3))} kg/s $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Discharge
      </p>
      <div id="act1-Q-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q = \\frac{\\dot{m}}{\\rho} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>3</sup>/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_Q();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_Q() {
    let Q_inp = (document.getElementById('act1-Q-inp'));
    console.log(Q_a1);
    if (!verify_values(parseFloat(Q_inp.value), Q_a1)) {
        Q_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        Q_inp.style.border = '1px solid #ced4da';
        Q_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = \\frac{\\dot{m}}{\\rho} =  ${parseFloat(Q_a1.toFixed(4))} m^3/s $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Area
      </p>
      <div id="act1-A-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$A = \\frac{\\pi}{4}D^2 = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-A-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_A();' id='act1-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_A() {
    let A_inp = (document.getElementById('act1-A-inp'));
    console.log(A_a1);
    if (!verify_values(parseFloat(A_inp.value), A_a1)) {
        A_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        A_inp.style.border = '1px solid #ced4da';
        A_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-A-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$A = \\frac{\\pi}{4}D^2 =  ${parseFloat(A_a1.toFixed(4))} m^2 $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Avergae velocity
      </p>
      <div id="act1-u-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$\\bar{u} = \\frac{Q}{A} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-u-inp' class='form-control fs-16px' /><span style="display:contents;"> m/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_u();' id='act1-vf-btn4'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_u() {
    let u_inp = (document.getElementById('act1-u-inp'));
    console.log(avg_u_a1);
    if (!verify_values(parseFloat(u_inp.value), avg_u_a1)) {
        u_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        u_inp.style.border = '1px solid #ced4da';
        u_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-u-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\bar{u} = \\frac{Q}{A} =  ${parseFloat(avg_u_a1.toFixed(3))} m/s $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Reynolds number
      </p>
      <div id="act1-Re-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Re = \\frac{\\rho\\bar{u}D}{\\mu} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Re-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_Re();' id='act1-vf-btn5'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_Re() {
    let Re_inp = (document.getElementById('act1-Re-inp'));
    console.log(Re_a1);
    if (!verify_values(parseFloat(Re_inp.value), Re_a1)) {
        Re_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        Re_inp.style.border = '1px solid #ced4da';
        Re_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Re-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Re = \\frac{\\rho\\bar{u}D}{\\mu} =  ${parseFloat(Re_a1.toFixed(3))} $$
      </p>
      <br>
      
   `;
    act1_div.innerHTML += `
      <div id="act1-ques-div">

      </div>
   `;
    let q_div = (document.getElementById('act1-ques-div'));
    let a1_ques = new Question_Options(`<p class="fs-2vw">Is flow laminar?</p>`, ['True', 'False'], '1', q_div, 'a1-ques', load_pressure_diff);
    a1_ques.load_question();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_pressure_diff() {
    act1_div.innerHTML += `
      <p class="fs-2vw fb-600" style="text-align:left;">
         Pressure Difference
      </p>
      <div id="act1-p-diff-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$P_1 - P_2 = \\frac{32\\mu\\bar{u}L}{D^2} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-p-diff-inp' class='form-control fs-16px' /><span style="display:contents;"> N/m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_p_diff();' id='act1-vf-btn6'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function act1_verify_p_diff() {
    let p_diff_inp = (document.getElementById('act1-p-diff-inp'));
    console.log(P_diff_a1);
    if (!verify_values(parseFloat(p_diff_inp.value), P_diff_a1)) {
        p_diff_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        p_diff_inp.style.border = '1px solid #ced4da';
        p_diff_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-p-diff-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$P_1 - P_2 = \\frac{32\\mu\\bar{u}L}{D^2} =  ${parseFloat(P_diff_a1.toFixed(3))} N/m^2 $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <button class='btn btn-info btn-sm std-btn' onclick='activity2();' id='act1-btn2'>Next</button>
	`;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map