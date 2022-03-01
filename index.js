let c = document.querySelector("#b3");
let d = 0;
let std=200;
let y = document.createElement('div');;
let tw = y.innerHTML;
function func(a) {
    let rt = document.querySelector(`#er${a}`);
    let kt = rt.parentElement;
    kt.replaceWith('');
}
function func1(a) {
    console.log("hi");
    let aw = document.getElementById(`er${a}`).parentElement;
    console.log(aw);
    document.getElementById(`er${a}`).style.background = 'red';
    document.getElementById(`er${a}`).style.color = 'white';
    //  console.log(gh);
}
c.addEventListener('click', function (e) {
    let k, x;
    let v;
    let a = document.querySelector(".b2");
    b = a.value;
    localStorage.setItem(parseInt(d), b);
    x = localStorage.getItem(d);
    y = document.createElement('div');
    y.id = `f kj${d}`;
    y.className = "f";
    y.setAttribute("style", "height: 25vh;,width: 15vw;margin: 20px;", "class")
    let ac = document.querySelector(".bz");
    let bc = ac.value;
    localStorage.setItem(parseInt(std), bc);
    let xc = localStorage.getItem(std);
    if (d == 0) {
        y.innerHTML = `<div id="er${d}" class ="sty"><h4 class="sa" id="e"><b class="yr">${xc}</b></h4>
        <p class="sa">${x}</p>
        <input type="button" class="sa" onclick ="func(${d} )" value="Delete a note" id="b4"><br>
        <input type="button" class="sta" onclick ="func1(${d} )" value="IMP" id="b5"></div>`;
        v = y.innerHTML;
    }
    else {
        y.innerHTML = `<div id="er${d}" class ="sty"><h4 class="sa" ><b class="yr">${xc}</b></h4>
        <p class="sa">${x}</p>
        <input type="button" onclick ="func(${d} )" class="sa" value="Delete a note" id="b4"><br>
        <input type="button" class="sta" onclick ="func1(${d} )" value="IMP" id="b5"></div>`;
    }
    let j = document.querySelector(".ft");
    j.appendChild(y);
    d = d + 1;
    std= std+1;
    a.value = '';
    ac.value = '';
})
if (d == 4) {
    let sd = document.querySelector('.ft');
    let fs = sd.children;
    console.log(sd);
    console.log(fs);
}
let sf = document.querySelector('#s');
sf.addEventListener('input', function (e) {
    let et = sf.value.toLowerCase();
    let sd = document.querySelectorAll('.f');
    Array.from(sd).forEach(function (Element, index) {
        let ds = document.getElementsByClassName('yr');
        let hu = ds[index].innerText;
        console.log(et+"       str1");
        console.log(hu+"    str2");
        if (String(et).includes(String(hu))) {
            Element.style.display = "inline-block";
        }
        else {
            Element.style.display = "none";
            console.log("problem");
            let siu = document.querySelector('#k');
            siu.addEventListener('click', function (e) {
                console.log('hi');
                let sod = document.querySelectorAll('.f');
                Array.from(sod).forEach(function (Element, index) {
                    Element.style.display = 'inline-block';
                    let we = document.querySelector('#s');
                    we.value = '';
                })
            })
        }
    })
})

let we = document.querySelector('#s');
we.value = '';