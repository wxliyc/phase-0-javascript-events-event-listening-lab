function addingEventListener(click, clickAlert) {

    const input = document.getElementById('input');
    
    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener(click, clickAlert);
    }
    
    const input = document.getElementById('input');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);