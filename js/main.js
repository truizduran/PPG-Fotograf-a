function loader(){
    document.querySelector('.loader').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader, 6000);
}
window.onload = fadeOut;