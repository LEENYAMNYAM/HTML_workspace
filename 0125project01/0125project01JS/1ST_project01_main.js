
// 메인배너 캐러셀
const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const carousel = document.querySelector('.carousel');

let index = 0;
    // 메인배너 페이지 출력 설정
let currentPage = index + 1;
const paginationElement = document.querySelector('.swiper-pagination-current');

paginationElement.textContent = currentPage;

function updatePagination() {
    currentPage = index + 1;
    paginationElement.textContent = currentPage;
}

updatePagination();

prevButton.addEventListener('click',()=>{
    if( index === 0 ){
        index = 5;     
    }else{
        index -= 1;
    };
    carousel.style.transform = `translate3d(-${1260 * index}px, 0, 0)`;
    updatePagination();
});
nextButton.addEventListener('click',()=>{
    if( index === 5 ){
        index = 0;
    }else{
        index += 1;
    }
    carousel.style.transform = `translate3d(-${1260 * index}px, 0, 0)`;
    updatePagination();
});


// 멀티배너1 캐러셀
const prevButton_multi = document.querySelector('.multi-button-prev');
const nextButton_multi = document.querySelector('.multi-button-next');
const swiper_wrapper = document.querySelector('.swiper_wrapper');

index = 0;

prevButton_multi.addEventListener('click',()=>{
    if( index === 0 ){
        index = 1;
    }else{
        index -= 1;
    };
    swiper_wrapper.style.transform = `translate3d(-${1250 * index}px, 0, 0)`;
});
nextButton_multi.addEventListener('click',()=>{
    if( index === 1 ){
        index = 0;
    }else{
        index += 1;
    }
    swiper_wrapper.style.transform = `translate3d(-${1250 * index}px, 0, 0)`;
});


// 로그인 hover시 visible 되는 마이메뉴창 설정(불안정한데 어떻게 고쳐야될지 모르겠음.)
const trigger = document.querySelector('.item-icon2');
const dropdown = document.querySelector('.dropdown-menu-container');

trigger.addEventListener('mouseover', function() {
    dropdown.style.visibility = 'visible';
});

trigger.addEventListener('mouseout', function(event) {
    if (!dropdown.contains(event.relatedTarget)) {
        dropdown.style.visibility = 'hidden';
    }
});

dropdown.addEventListener('mouseover', function() {
    dropdown.style.visibility = 'visible';
});

dropdown.addEventListener('mouseout', function(event) {
    if (!trigger.contains(event.relatedTarget)) {
        dropdown.style.visibility = 'hidden';
    }
});

// 메인배너 좌/우 버튼 오버될때 이미지(hover효과) 변경
document.addEventListener('DOMContentLoaded', function() {
    const main_button_prev = document.querySelector('.swiper-button-prev');
    const main_button_prev_img = main_button_prev.querySelector('img');

    const main_button_prev_img_src = '0125progectimages/pngwing_left.png';
    const main_button_prev_img_src_hover = '0125progectimages/pngwing_left_hover.png';

    main_button_prev.addEventListener('mouseenter', function() {
        main_button_prev_img.src = main_button_prev_img_src_hover;
    });

    main_button_prev.addEventListener('mouseleave', function() {
        main_button_prev_img.src = main_button_prev_img_src;
    });

    const main_button_next = document.querySelector('.swiper-button-next');
    const main_button_next_img = main_button_next.querySelector('img');

    const main_button_next_img_src = '0125progectimages/pngwing_right.png';
    const main_button_next_img_src_hover = '0125progectimages/pngwing_right_hover.png';

    main_button_next.addEventListener('mouseenter', function() {
        main_button_next_img.src = main_button_next_img_src_hover;
    });

    main_button_next.addEventListener('mouseleave', function() {
        main_button_next_img.src = main_button_next_img_src;
    });
});


// 멀티배너1 좌/우 버튼 오버될때 이미지(hover효과) 변경
document.addEventListener('DOMContentLoaded', function() {
    const main_button_prev = document.querySelector('.multi-button-prev');
    const main_button_prev_img = main_button_prev.querySelector('img');

    const main_button_prev_img_src = '0125progectimages/pngwing_left.png';
    const main_button_prev_img_src_hover = '0125progectimages/pngwing_left_hover.png';

    main_button_prev.addEventListener('mouseenter', function() {
        main_button_prev_img.src = main_button_prev_img_src_hover;
    });

    main_button_prev.addEventListener('mouseleave', function() {
        main_button_prev_img.src = main_button_prev_img_src;
    });

    const main_button_next = document.querySelector('.multi-button-next');
    const main_button_next_img = main_button_next.querySelector('img');

    const main_button_next_img_src = '0125progectimages/pngwing_right.png';
    const main_button_next_img_src_hover = '0125progectimages/pngwing_right_hover.png';

    main_button_next.addEventListener('mouseenter', function() {
        main_button_next_img.src = main_button_next_img_src_hover;
    });

    main_button_next.addEventListener('mouseleave', function() {
        main_button_next_img.src = main_button_next_img_src;
    });
});



// 멀티배너2 캐러셀
const prevButton_multi2 = document.querySelector('.multi-button-prev2');
const nextButton_multi2 = document.querySelector('.multi-button-next2');
const swiper_wrapper2 = document.querySelector('.swiper_wrapper2');

index = 0;

prevButton_multi2.addEventListener('click', () => {
    if (index === 0) {
        index = 1;
    } else {
        index -= 1;
    }
    swiper_wrapper2.style.transform = `translate3d(-${1250 * index}px, 0, 0)`;
});

nextButton_multi2.addEventListener('click', () => {
    if (index === 1) {
        index = 0;
    } else {
        index += 1;
    }
    swiper_wrapper2.style.transform = `translate3d(-${1250 * index}px, 0, 0)`;
});

// 멀티배너2 좌/우 버튼 오버될때 이미지(hover효과) 변경
document.addEventListener('DOMContentLoaded', function() {
    const main_button_prev2 = document.querySelector('.multi-button-prev2');
    const main_button_prev_img = main_button_prev2.querySelector('img');

    const main_button_prev_img_src = '0125progectimages/pngwing_left.png';
    const main_button_prev_img_src_hover = '0125progectimages/pngwing_left_hover.png';

    main_button_prev2.addEventListener('mouseenter', function() {
        main_button_prev_img.src = main_button_prev_img_src_hover;
    });

    main_button_prev2.addEventListener('mouseleave', function() {
        main_button_prev_img.src = main_button_prev_img_src;
    });

    const main_button_next2 = document.querySelector('.multi-button-next2');
    const main_button_next_img = main_button_next2.querySelector('img');

    const main_button_next_img_src = '0125progectimages/pngwing_right.png';
    const main_button_next_img_src_hover = '0125progectimages/pngwing_right_hover.png';

    main_button_next2.addEventListener('mouseenter', function() {
        main_button_next_img.src = main_button_next_img_src_hover;
    });

    main_button_next2.addEventListener('mouseleave', function() {
        main_button_next_img.src = main_button_next_img_src;
    });
});



// 멀티배너3 캐러셀
const prevButton_multi3 = document.querySelector('.multi-button-prev3');
const nextButton_multi3 = document.querySelector('.multi-button-next3');
const swiper_wrapper3 = document.querySelector('.swiper_wrapper3');

index = 0;

prevButton_multi3.addEventListener('click', () => {
    if (index === 0) {
        index = 1;
    } else {
        index -= 1;
    }
    swiper_wrapper3.style.transform = `translate3d(-${1250 * index}px, 0, 0)`;
});

nextButton_multi3.addEventListener('click', () => {
    if (index === 1) {
        index = 0;
    } else {
        index += 1;
    }
    swiper_wrapper3.style.transform = `translate3d(-${1250 * index}px, 0, 0)`;
});

// 멀티배너3 좌/우 버튼 오버될때 이미지(hover효과) 변경
document.addEventListener('DOMContentLoaded', function() {
    const main_button_prev3 = document.querySelector('.multi-button-prev3');
    const main_button_prev_img = main_button_prev3.querySelector('img');

    const main_button_prev_img_src = '0125progectimages/pngwing_left.png';
    const main_button_prev_img_src_hover = '0125progectimages/pngwing_left_hover.png';

    main_button_prev3.addEventListener('mouseenter', function() {
        main_button_prev_img.src = main_button_prev_img_src_hover;
    });

    main_button_prev3.addEventListener('mouseleave', function() {
        main_button_prev_img.src = main_button_prev_img_src;
    });

    const main_button_next3 = document.querySelector('.multi-button-next3');
    const main_button_next_img = main_button_next3.querySelector('img');

    const main_button_next_img_src = '0125progectimages/pngwing_right.png';
    const main_button_next_img_src_hover = '0125progectimages/pngwing_right_hover.png';

    main_button_next3.addEventListener('mouseenter', function() {
        main_button_next_img.src = main_button_next_img_src_hover;
    });

    main_button_next3.addEventListener('mouseleave', function() {
        main_button_next_img.src = main_button_next_img_src;
    });
});

// footer notice 공지글 캐러셀 효과
const prevButton_footer = document.querySelector('#swiper-button-prev-footer');
const nextButton_footer = document.querySelector('#swiper-button-next-footer');
const footer_notice_wrapper = document.querySelector('.footer_notice_wrapper');

index = 0;

prevButton_footer.addEventListener('click',()=>{
    if( index === 0 ){
        index = 5;
    }else{
        index -= 1;
    };
    footer_notice_wrapper.style.transform = `translate3d(0, -${50 * index}px,  0)`;
});
nextButton_footer.addEventListener('click',()=>{
    if( index === 5 ){
        index = 0;
    }else{
        index += 1;
    }
    footer_notice_wrapper.style.transform = `translate3d(0, -${50 * index}px, 0)`;
});