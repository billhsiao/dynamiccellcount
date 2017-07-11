document.getElementById("generate")
      .addEventListener('click', generate);
document.getElementById("list")
      .addEventListener('click', handleClick);


function generate(event) {
  console.log(event.target)
}
function handleClick(event) {

  console.log(event.target)
}

function render() {

}

  //console.log(event.target);
  //
  // var button = {
  //   one: document.querySelector("button1"),
  //   two: document.querySelector("button2")
  // };
  // switch(button) {
  //   case button.one:
  //     console.log('button one was pressed');
  //     break;
  //   case button.two:
  //     console.log('button two was pressed');
  //     break;
  //   default:
  //     console.log('no button was pressed');
  // }
  // console.log('hey');
