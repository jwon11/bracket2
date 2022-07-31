// 변수 선언 시작

// resoft news 변수 선언
const contents = document.querySelectorAll('.content');
const content = [];
for(let i = 0; i < contents.length; i++) {
    content.push(contents[i]);
}

const content_imgs = document.querySelectorAll('.content_img');
const content_img = [];
for(let i = 0; i < content_imgs.length; i++) {
    content_img.push(content_imgs[i]);
}

const content_ps = document.querySelectorAll('.content_first');
const content_p = [];
for(let i = 0; i < content_ps.length; i++) {
    content_p.push(content_ps[i]);
}
// resoft news 변수 선언 끝

// resoft project 변수 선언
const proj_ecoce = document.querySelector('.proj_ecoce');
const ecoce_word = document.querySelector('.ecoce_word_wrap');
const ecoce_img = document.querySelector('.ecoce_img');
const proj_moado = document.querySelector('.proj_moado');
const moado_word = document.querySelector('.moado_word_wrap');
const moado_img = document.querySelector('.moado_img');
// resoft project 변수 선언 끝

// resoft service 변수 선언
const serv_app = document.querySelector('.serv_content_app');
const serv_web = document.querySelector('.serv_content_web');
const serv_ai = document.querySelector('.serv_content_ai');
const serv_xr = document.querySelector('.serv_content_xr');

const serv_content_imgs = document.querySelectorAll('.serv_content_img');
const serv_content_img = [];
for(let i = 0; i < serv_content_imgs.length; i++) {
    serv_content_img.push(serv_content_imgs[i]);
}

const content_fronts = document.querySelectorAll('.content_front');
const content_front = [];
for(let i = 0; i < content_fronts.length; i++) {
    content_front.push(content_fronts[i]);
}

const content_behinds = document.querySelectorAll('.content_behind');
const content_behind = [];
for(let i = 0; i < content_behinds.length; i++) {
    content_behind.push(content_behinds[i]);
}
// resoft service 변수 선언 끝

// 변수 선언 끝


// 함수 선언 시작

// resoft news content mouseover & mouseout 기능
const content_function = function() {
    for(let i = 0; i < 4; i++) {
        content[i].addEventListener('mouseover', (e) => {
            e.preventDefault();
            content_img[i].style.transform = 'scale(1.3)';
            content_img[i].style.transitionDuration = '0.5s';
            content_p[i].style.color = '#0064CD';
        });
        
        content[i].addEventListener('mouseout', (e) => {
            e.preventDefault;
            content_img[i].style.transform = 'scale(1.0)';
            content_p[i].style.color = '#1E1E1E';
        });
    }
}

// resoft project Ecoce 이미지 mouseover & mouseout 기능
const proj_ecoce_function = function() {
    proj_ecoce.addEventListener('mouseover', (e) => {
        e.preventDefault();
        ecoce_word.style.display = 'table';
        ecoce_img.style.transform = 'scale(1.3)';
    });

    proj_ecoce.addEventListener('mouseout', (e) => {
        e.preventDefault();
        ecoce_word.style.display = 'none';
        ecoce_img.style.transform = 'scale(1.0)';
    });
}

// resoft project moaDo 이미지 mouseover & mouseout 기능
const proj_moado_function = function() {
    proj_moado.addEventListener('mouseover', (e) => {
        e.preventDefault();
        moado_word.style.display = 'table';
        moado_img.style.transform = 'scale(1.3)';
    });

    proj_moado.addEventListener('mouseout', (e) => {
        e.preventDefault();
        moado_word.style.display = 'none';
        moado_img.style.transform = 'scale(1.0)';
    });
}

// resoft service 이미지 mouseover & mouseout 기능
const serv_function = function() {
    serv_app.addEventListener('mouseover', (e) => {
        e.preventDefault();
        serv_content_img[0].style.transform = 'scale(1.2)';
        content_front[0].style.display = 'none';
        content_behind[0].style.display = 'table';
    });

    serv_app.addEventListener('mouseout', (e) => {
        e.preventDefault();
        serv_content_img[0].style.transform = 'scale(1.0)';
        content_front[0].style.display = 'table';
        content_behind[0].style.display = 'none';
    });

    serv_web.addEventListener('mouseover', (e) => {
        e.preventDefault();
        serv_content_img[1].style.transform = 'scale(1.2)';
        content_front[1].style.display = 'none';
        content_behind[1].style.display = 'table';
    });

    serv_web.addEventListener('mouseout', (e) => {
        e.preventDefault();
        serv_content_img[1].style.transform = 'scale(1.0)';
        content_front[1].style.display = 'table';
        content_behind[1].style.display = 'none';
    });

    serv_ai.addEventListener('mouseover', (e) => {
        e.preventDefault();
        serv_content_img[2].style.transform = 'scale(1.2)';
        content_front[2].style.display = 'none';
        content_behind[2].style.display = 'table';
    });

    serv_ai.addEventListener('mouseout', (e) => {
        e.preventDefault();
        serv_content_img[2].style.transform = 'scale(1.0)';
        content_front[2].style.display = 'table';
        content_behind[2].style.display = 'none';
    });

    serv_xr.addEventListener('mouseover', (e) => {
        e.preventDefault();
        serv_content_img[3].style.transform = 'scale(1.2)';
        content_front[3].style.display = 'none';
        content_behind[3].style.display = 'table';
    });

    serv_xr.addEventListener('mouseout', (e) => {
        e.preventDefault();
        serv_content_img[3].style.transform = 'scale(1.0)';
        content_front[3].style.display = 'table';
        content_behind[3].style.display = 'none';
    });
}
// 함수 선언 끝


// 함수 실행 시작
content_function();
proj_ecoce_function();
proj_moado_function();
serv_function();
// 함수 실행 끝