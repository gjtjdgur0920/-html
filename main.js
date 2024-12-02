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

        function hideLoginPopup() {//팝업,오버레이 닫기
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
            { name: "김한빈", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EA%B9%80%ED%95%9C%EB%B9%88.html" },
            { name: "김호중", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EA%B9%80%ED%98%B8%EC%A4%91.html" },
            { name: "승리", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EC%8A%B9%EB%A6%AC.html" },
            { name: "양팡", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EC%96%91%ED%8C%A1.html" },
            { name: "오킹", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EC%98%A4%ED%82%B9.html" },
            { name: "유아인", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EC%9C%A0%EC%95%84%EC%9D%B8.html" },
            { name: "이근", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EC%9D%B4%EA%B7%BC.html" },
            { name: "이선균", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EC%9D%B4%EC%84%A0%EA%B7%A0.html" },
            { name: "정우성", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EC%A0%95%EC%9A%B0%EC%84%B1.html" },
            { name: "정준영", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EC%A0%95%EC%A4%80%EC%98%81.html" },
            { name: "주지훈", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%EC%A3%BC%EC%A7%80%ED%9B%88.html" },
            { name: "탑", url: "file:///C:/Users/user/Desktop/%EB%82%98%EB%9D%BD%EB%89%B4%EC%8A%A4%ED%8C%80/sub_%EA%B2%80%EC%83%89_%ED%83%91.html" },
        ];

        // 검색에 맞는 항목을 필터링
        const filteredData = data.filter(item => item.name.toLowerCase().includes(query));

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
