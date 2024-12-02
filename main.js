// 슬라이더 관련 변수
const slider = document.querySelector('.slider');
const sliderItems = slider.children;
const sliderWidth = sliderItems[0].offsetWidth +30;
let currentIndex = 0;
        
function slideLeft() {
 // currentIndex 0이면 마지막으로 이동
    if (currentIndex === 0) {
        currentIndex = sliderItems.length - 2; // 마지막으로 돌아감
    } else {
        currentIndex--; // 1개 앞으로 이동
    }
    updateSliderPosition();
}

function slideRight() {
// currentIndex 마지막이면 첫번째로 이동
    if (currentIndex === sliderItems.length - 2) {
        currentIndex = 0; //첫 번째로 이동
    } else {
        currentIndex++; //1개 다음으로 이동
    }
    updateSliderPosition();
    }

// 슬라이드 위치 업뎃 
function updateSliderPosition() {
// translateX 슬라이드 이동
slider.style.transition = 'transform 0.5s ease';
slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
}

// 로그인 버튼
function showLoginPopup() {//팝업,오버레이 열기
    document.querySelector('.login-popup').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function hideLoginPopup() {//팝업,오버레이 숨기기
    document.querySelector('.login-popup').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
 }
        
//검색 버튼
function showSearchPopup() {
    document.querySelector('.search-popup').style.display = 'block';
    document.querySelector('.overlay-1').style.display = 'block';
}
function hideSearchPopup() {
    document.querySelector('.search-popup').style.display = 'none';
    document.querySelector('.overlay-1').style.display = 'none';
}
//검색,검색 결과창
function search() {
const query = document.getElementById('search').value.toLowerCase();  // 입력한 검색어 가지고옴
const results = document.getElementById('results');  // 결과를 출력할 영역

//데이터와 URL
const data = [
    { name: "김동희", url: "https://gjtjdgur0920.github.io/1/" },
    { name: "김한빈", url: "https://gjtjdgur0920.github.io/2/" },
    { name: "김호중", url: "https://gjtjdgur0920.github.io/3/" },
    { name: "승리", url: "https://gjtjdgur0920.github.io/4/" },
    { name: "양팡", url: "https://gjtjdgur0920.github.io/5/" },
    { name: "오킹", url: "https://gjtjdgur0920.github.io/6/" },
    { name: "유아인", url: "https://gjtjdgur0920.github.io/7/" },
    { name: "이근", url: "https://gjtjdgur0920.github.io/8/" },
    { name: "이선균", url: "https://gjtjdgur0920.github.io/9/" },
    { name: "정우성", url: "https://gjtjdgur0920.github.io/10/" },
    { name: "정준영", url: "https://gjtjdgur0920.github.io/11/" },
    { name: "주지훈", url: "https://gjtjdgur0920.github.io/12/" },
    { name: "탑", url: "https://gjtjdgur0920.github.io/13/" },
];

// 검색에 맞는 항목을 필터링
const filteredData = data.filter(item => item.name.toLowerCase().includes(query));

results.innerHTML = '';
// 필터한 데이터가 있을 때
if (filteredData.length > 0) {
    filteredData.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('result-item');
        
         // 링크 생성
        const link = document.createElement('a');
        link.href = item.url;  // 각 항목에 대한 URL
        link.textContent = item.name;  // 링크 텍스트는 항목의 이름

        div.appendChild(link);  // div 안에 링크 추가
        results.appendChild(div);  // 결과 영역에 div 추가
    });
} else {
    results.innerHTML = "<p>결과 없음</p>";  // 검색 결과가 없을 때
}
    }
