// menu Show Y Hidden
const nav_menu = document.getElementById('nav-menu');
const nav_toogle = document.getElementById('nav-toogle');
const nav_close = document.getElementById('nav-close');

// Menu, validate if exist
if(nav_toogle) {
    nav_toogle.addEventListener('click', ()=> {
        nav_menu.classList.add('show-menu')
    })
}

//Menu hidden
if(nav_close) {
    nav_close.addEventListener('click', function() {
        nav_menu.classList.remove('show-menu')
    })
}

// Remove Menu mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// SKILLS
const skills_content = document.getElementsByClassName('skills_content');
const skills_header = document.querySelectorAll('.skills_header');

function toogle_skills() {
    let item_class = this.parentNode.className;

    for(i = 0; i < skills_content.length; i++) {
        skills_content[i].className = 'skills_content skills_close'
    }
    if(item_class === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skills_header.forEach((el) => {
    el.addEventListener('click', toogle_skills)
})

// Qualification Tabs
const tabs = document.querySelectorAll('[data-target]');const tab_contents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tab_contents.forEach(tab_content => {
            tab_content.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})


