//var b = document.querySelector("#off");
//let testCss = document.querySelector('#on')
//testCss.addEventListener('click', function() {
//    b.setAttribute("disabled", "enable");
//});

btn = document.querySelector("#button")
link = document.querySelector("#test_css")
btn.oninput = function () {
    if (btn.checked) {
        link.removeAttribute('disabled');
    } else {
        link.setAttribute('disabled',true);
    }
}

//document.querySelector('#off').setAttribute('disabled', true);

//var item = document.getElementById("#test_css");
//if(item.disabled)
//item.disabled = false;
//else
//item.disabled=true;

//function click1() {
//    let input = document.get.ElementById('test_css')
//    input.disabled = true;
//}
//
//function click2() {
//    let input = document.get.ElementById('test_css')
//    input.disabled = false;
//}

