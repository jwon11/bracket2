// 변수 선언 시작
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

const proj_ecoce = document.querySelector('.proj_ecoce');
const ecoce_word = document.querySelector('.ecoce_word_wrap');
const ecoce_img = document.querySelector('.ecoce_img');
const proj_moado = document.querySelector('.proj_moado');
const moado_word = document.querySelector('.moado_word_wrap');
const moado_img = document.querySelector('.moado_img');
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
// 함수 선언 끝

// 함수 실행 시작
content_function();
proj_ecoce_function();
proj_moado_function();
// 함수 실행 끝