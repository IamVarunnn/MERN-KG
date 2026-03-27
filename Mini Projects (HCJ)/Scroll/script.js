
let progressBar = document.getElementById("progressBar");
let badge = document.getElementById('badge');


function updateProgress(){
    let scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = Math.round((scrollTop / docHeight) * 100);

    progressBar.style.width = progress + '%';
    badge.textContent = progress + '% read';

    if(progress >= 100){
        badge.classList.add('complete');
        badge.textContent = 'Complete'
    }
    else{
        badge.classList.remove('complete');
    }
}

window.addEventListener("scroll", updateProgress);