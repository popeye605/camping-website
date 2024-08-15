const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('nav-menu')
        })

    }
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('nav-menu')
        })
    }
    const navLink=document.querySelectorAll('.nav__link')
    const linkAction=()=>{
        const navMenu=document.getElementById('nav-menu')
        navMenu.classList.remove('nav-menu')

    }
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
      
    navLink.forEach(n=>n.addEventListener('click',linkAction))


    const bgHeader =()=>{
        const header=document.getElementById('header')
        this.scrollY>=50?header.classList.add('bg-header')
        :header.classList.remove('bg-header')
    }
    window.addEventListener('scroll',bgHeader)
    gsap.from('.home__img-2',1.2,{opacity:0,y:200,delay:.1})
    gsap.from('.home__img-3',1.2,{opacity:0,y:200,delay:.5})
    gsap.from('.home__data',1.2,{opacity:0,y:-60,delay:1})
    gsap.from('.home__bird-2',1.2,{opacity:0,x:-80,delay:1})
    gsap.from('.home__bird-2',1.2,{opacity:0,x:80,delay:1.2})
    gsap.from('.home__img-1',1.2,{opacity:0,y:200,delay:1.2})
    gsap.from('.home__img-4',1.2,{opacity:0,x:200,delay:1.3})