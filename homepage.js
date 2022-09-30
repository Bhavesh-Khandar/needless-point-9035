let nav=document.querySelector(".navbar")
window.onscroll=() =>
{
    if(window.scrollY > 200)
    {
        nav.classList.add('navcolor')
    }
    else{
        nav.classList.remove('navcolor')
    }
}