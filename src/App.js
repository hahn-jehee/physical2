import logo from './logo.svg';
import './App.css';
import shinchan from "./shinchan.JPG"
import ato from "./ato.JPG"
import riu from "./riu.jpeg"
import shinchandance from "./shinchandance.gif"
import park from "./park.gif"
import adhd from "./adhd.jpg"
import iu from "./iu.jpg"
import pany from "./pany.png"
import bibibic from "./bibibic.jpg"
import shu from "./shu.png"
import jweb from "./jweb.png"

function App() {
  return (
    <div>
<header className="App-header">
  <br/><br/>
  <p>
    웹 프로그래밍은 아예 처음인
    <br/>
    홍익대학교 시각디자인학과 19학번
    <br/>
    한제희
  </p>
<br/>
  <a
    className="App-link"
    href="https://www.instagram.com/ato_riu_/"
    target="_blank"
    rel="noopener noreferrer">

    <img src={ato} className="App-logo" alt="logo" />
    <img src={riu} className="App-logo" alt="logo" />

    <p> 고양이 두 마리와 함께 사는 중 <br/>
    (운영이 안되고 있지만 링크는 존재하는) Instagram </p>
  </a>
  <br/><br/><br/><br/>

  <p>
    아이유와 같은 고등학교 출신
    <br/>
    (어쩌다보니) 아이유 고등학교 후배
  </p>

  <a
    className="App-link"
    href="https://www.instagram.com/dlwlrma/"
    target="_blank"
    rel="noopener noreferrer">

      <img src={iu} className="App-image" alt="logo" />

    <p> 국힙원탑 아이유 <br/>
    (선배님의) Instagram </p>
  </a>
  <br/><br/><br/><br/>


  <p> 짱구를 좋아하는 편</p>

  <a
    className="App-link"
    href="https://youtu.be/XbcvkfhlhQM"
    target="_blank"
    rel="noopener noreferrer">

    <img src={shinchandance} className="App-image" alt="logo" />

    <br />

    <p> 짱구라데이션
    <br/>
    이렇게 점점 짱구가 되어가는거에요 </p>
  </a>
  <br/><br/><br/><br/>

  <p> 무한도전도 아직 무한하게 보는 중</p>

  <a
    className="App-link"
    href="https://youtu.be/lAhEdj4k6Jk"
    target="_blank"
    rel="noopener noreferrer">

  <img src={adhd} className="App-logo" alt="logo"/>
  <img src={park} className="App-logo" alt="logo" />

    <br />

    <p> 무한상사편 좋아함
    <br/>
    발 없는 말이? 슬퍼.. </p>
  </a>
  <br/><br/><br/><br/>

  <p> 웹에 대한 추억? 내 기억 속 첫 웹은 쥬니어네이버 <br/>랑 야후..?</p>

  <a
    className="App-link"
    href="https://jr.naver.com/?logout=true"
    target="_blank"
    rel="noopener noreferrer">

  <img src={shu} className="App-logo" alt="logo"/>
  <img src={bibibic} className="App-logo" alt="logo" />
  <img src={pany} className="App-logo" alt="logo" />

  <br/>

  <p> 지금은 격변한 <br/> 쥬니어네이버 </p>
  </a>
  <br/><br/><br/><br/>

  <p> 웹 프로그래밍에 대한 능력치는..? </p>

  <a
    className="App-link"
    href="https://hahn-jehee.web.app"
    target="_blank"
    rel="noopener noreferrer">

  <img src={jweb} className="App-image" alt="logo"/>

  <br/>

  <p> 공부 해보려다가 <br/> 멸망한 웹사이트뿐 </p>
  </a>

    <br/>

    <a
      className="App-link2"
      href="https://hahn-jehee.web.app"
      target="_blank"
      rel="noopener noreferrer">

    <br/>

    <p> 그냥 한 번 남겨보는 <br/> 인별 링크 </p>
    </a>

    <br/><br/><br/><br/>

</header>
</div>


  );
}


export default App;
