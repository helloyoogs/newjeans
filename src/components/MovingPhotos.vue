<template>
  <section class="section">
    <div class="main-wrap">
      <main class="main">
        <div class="bg">
          <PhoneBg_home></PhoneBg_home>

          <div class="content-bg">
            <div class="slide slide_wrap">
              <div class="slide_item"  draggable="true" >
                <img :src="무빙민지[이미지넘버].img" alt="무빙민지"  @dragover="handleDrag" draggable="true" />
              </div>
              <div class="slide_item"  draggable="true" >
                <img :src="무빙하니[이미지넘버].img" alt="무빙하니"   @dragover="handleDrag" draggable="true" />
              </div>
              <div class="slide_item"  draggable="true" >
                <img :src="무빙대니얼[이미지넘버].img" alt="무빙대니얼" @dragover="handleDrag" draggable="true" />
              </div>
              <div class="slide_item"  draggable="true" >
                <img :src="무빙해린[이미지넘버].img" alt="무빙해린" @dragover="handleDrag" draggable="true" />
              </div>
              <div class="slide_item"  draggable="true" >
                <img :src="무빙해인[이미지넘버]?.img" alt="무빙해인"   @dragover="handleDrag" draggable="true" />
              </div>
              <div class="slide_prev_button slide_button"></div>
              <div class="slide_next_button slide_button"></div>
            </div>

            <div class="popup" v-if="팝업쇼 == 0">
              <ul>
                <li><img src="../assets/movingphotos/arrow.png" alt="arrow">
                  <img src="../assets/movingphotos/hand.png" alt="hand"></li>
                <li>양 옆으로 드래그하면 해당 멤버의  <br>
                  사진을 움짤처럼 볼수 있어요<br> <br>
                  Swipe up and down to see <br>
                  photos of the other members. <br>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </main>
    </div>
  </section>
</template>
<script>
//import $ from 'jquery';
import PhoneBg_home from './PhoneBg_home.vue';
import MoveHi from "../js/MoveHi";
import MoveMj from "../js/MoveMj";
import MoveHn from "../js/MoveHn";
import MoveDn from "../js/MoveDn";
import MoveHr from "../js/MoveHr";
export default {
  name: 'MovingPhotos',
  components: {
    PhoneBg_home,
  },
  data() {
    return {
      무빙민지: MoveMj,
      무빙하니: MoveHn,
      무빙해인: MoveHi,
      무빙대니얼: MoveDn,
      무빙해린: MoveHr,
      이미지넘버: 100,
      팝업쇼: 0,
    }
  },
  methods: {

    handleDrag(e) {
        e.preventDefault();
        const width = e.target.offsetWidth;
        const x = e.offsetX;
        const ratio = x / width;
        const totalImages = this[e.target.alt].length;
        const index = Math.floor(ratio * totalImages);
        this.이미지넘버 = index;
    }

  }, // Method End
created() {
  setTimeout(() => {
  this.팝업쇼 = 1;
  }, 3000)

},
  mounted() {
    // 슬라이크 전체 크기(width 구하기)
    const slide = document.querySelector(".slide");
    let slideHeight = slide.clientHeight;

    // 버튼 엘리먼트 선택하기
    const prevBtn = document.querySelector(".slide_prev_button");
    const nextBtn = document.querySelector(".slide_next_button");

    // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
    const slideItems = document.querySelectorAll(".slide_item");
    // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
    const maxSlide = slideItems.length;

    // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
    let currSlide = 1;


    function nextMove() {
      currSlide++;
      // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
      if (currSlide <= maxSlide) {
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = slideHeight * (currSlide - 1);
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          i.setAttribute("style", `top: ${-offset}px`);
        });

      } else {
        currSlide--;
      }
    }
    function prevMove() {
      currSlide--;
      // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
      if (currSlide > 0) {
        // 슬라이드를 이동시키기 위한 offset 계산
        const offset = slideHeight * (currSlide - 1);
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          i.setAttribute("style", `top: ${-offset}px`);
        });

      } else {
        currSlide++;
      }
    }

    // 버튼 엘리먼트에 클릭 이벤트 추가하기
    nextBtn.addEventListener("click", () => {
      // 이후 버튼 누를 경우 현재 슬라이드를 변경
      nextMove();
    });
    // 버튼 엘리먼트에 클릭 이벤트 추가하기
    prevBtn.addEventListener("click", () => {
      // 이전 버튼 누를 경우 현재 슬라이드를 변경
      prevMove();
    });

    // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
    window.addEventListener("resize", () => {
      slideHeight = slide.clientHeight;
    });
  },
} //default End
</script>

<style scoped>
.content-bg {
  position: absolute;
  top: 40px;
  bottom: 46px;
  left: 36px;
  right: 37px;
  overflow: hidden;
  background: black;
  text-align: center;
  padding-top: 60px;
}

.list-wrap1 {
  height: 661px;
}

.list-wrap1>img {
  height: 100%;

}

.slide {
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  height: 661px;
  user-select: none;
  flex-direction: column;
}

.slide_item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 661px;
  flex-shrink: 0;
  transition: top 0.15s;
}

.slide_item>img {
  height: 661px;
  -webkit-user-drag: none;
  transition: 1s;
}

.slide_button {
  /* layout */
  display: flex;
  justify-content: center;
  align-items: center;

  /* position */
  position: absolute;
  /* 버튼이 중앙에 위치하게 하기위해 계산 */
  top: calc(50% - 16px);

  /* size */
  width: 32px;
  height: 32px;

  /* style */
  border-radius: 100%;
  cursor: pointer;
  color: aliceblue;
}

.slide_prev_button {
  left: 10px;
  background-image: url('../assets/movingphotos/ico-prev.png');
  height: 40px;
  width: 40px;
}

.slide_next_button {
  right: 10px;
  background-image: url('../assets/movingphotos/ico-next.png');
  height: 40px;
  width: 40px;

}

/* 페이지네이션 스타일 */
ul,
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}


.popup {
  width: 290px;
  height: 120px;
  background: rgba(0, 0, 0, 0.808);
  position: absolute;
  bottom: 140px;
  left: 11%;
  border-radius: 20px;
}

.popup>ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  align-items: center;
  gap: 10px;
}

.popup>ul>li {
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
}

.popup>ul>li:nth-child(1){
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup>ul>li img:nth-child(1) {
  width: 47px;
}

.popup>ul>li:nth-child(3) {
  flex: 0.8;
}
@media screen and (max-width: 500px) {
.slide_item{
  width: 100%;
  height: 100%;
}
.slide_item>img{
height: auto;
width: 100%;
}
.content-bg{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding-top: 0;
}
.slide{
  width: 100%;
  height: 100%;
}
}
</style>