let index = 0;

function moveToSlide(slideIndex) {
    const slides = document.querySelectorAll('.slider-images img');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    // 슬라이드 인덱스를 설정하여 범위 내에서 인덱스를 설정
    if (slideIndex < 0) {
        index = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        index = 0;
    } else {
        index = slideIndex;
    }

    // 슬라이드를 이동시키기 위한 transform 설정
    document.querySelector('.slider-images').style.transform = `translateX(-${index * 100}%)`;

    // 모든 동그라미에서 active 클래스 제거 후, 클릭된 동그라미에만 active 클래스 추가
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// 초기 활성화된 동그라미 설정
document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    dots[index].classList.add('active');
});