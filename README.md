## 3행시 평가 서비스(3행시의 왕)
![title](https://velog.velcdn.com/images/changwoo/post/eba7064f-11ee-456d-b79f-6bc85c01e03d/image.png)   

* 🗓️ 프로젝트 기간 : 2024-04-14 ~ 2024-04-19 ( 5일 )
* 1인 개발

사용자로부터 삼행시를 입력받고 ChatGPT를 통해 이에 대한 평가를 제공하는 서비스입니다. 리액트 합성컴포넌트 및 Hook의 이해 향상과 OpenAI API의 활용을 목적으로 구현하였습니다.

## 구현목표
>  * 합성컴포넌트를 활용한 재활용성 높은 컴포넌트 설계
> * 핵심 기능으로서 GPT-API의 활용
>* 데이터베이스 연동을 통한 개별 데이터 저장
> * 사용자 경험을 고려한 UI ( 애니메이션 및 디자인 패턴 )

## 기술스택
* FE : React
* BE : Node (Express), MySQL
* 핵심 API : OpenAI API

## 기능 소개
### 사용자 로그인
![title](https://velog.velcdn.com/images/changwoo/post/8c082cb7-9c37-4ff1-bb5b-034ae992e4b1/image.gif)  
* 게임 시작 전 사용자 닉네임을 입력받습니다.
* 랭킹 페이지에서 해당 닉네임을 통해 순위를 구분하기 위해 사용됩니다.

### 삼행시 제시어 호출
![title](https://velog.velcdn.com/images/changwoo/post/42c54a6e-3c7e-4dc2-9eac-26cf790ac68d/image.gif)   
* 사용자가 Games 페이지에 접근하면 제시어 요청 통신을 통해 제시어를 받습니다.
* 제시어는 2-4 개수의 단어로 출력되어집니다.
* 제시어는 ChatGPT가 임의로 생성한 값을 바탕으로 합니다.

### 삼행시 제시어 평가
![title](https://velog.velcdn.com/images/changwoo/post/61145492-095b-4ff6-b59e-99b1c63f3409/image.gif) 
* 사용자로부터 입력받은 삼행시를 평가합니다.
* 1-10점 사이 점수로 책정하며, 삼행시 내용을 토대로 점수 산정 이유와 함께 반환합니다.
* 삼행시 내용, 점수, 닉네임 모두 DB에 저장되어 추후 랭킹을 통해 확인이 가능합니다.
### 사용자 랭킹
![title](https://velog.velcdn.com/images/changwoo/post/a23ca073-eaf4-4984-a86d-2bed0b15c6e2/image.gif)   
* 점수를 바탕으로 랭킹을 반환합니다.
* 리스트 클릭 시 해당 사용자가 작성한 삼행시를 확인 할 수 있습니다.

구체적인 트러블 슈팅 및 설계/구현 과정은 <a href="https://velog.io/@changwoo/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%88%9C%EB%B0%9C%EB%A0%A5%EC%9D%84-%ED%8F%89%EA%B0%80%ED%95%B4%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4-%EC%82%BC%ED%96%89%EC%8B%9C%EC%9D%98-%EC%99%95">당신의 순발력을 평가해드립니다, 삼행시의 왕</a> 에서 확인 하실 수 있습니다.
