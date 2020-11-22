# Shigatsuel Movie App

## Description

Get to Know React JS Fundamentals by Creating Movie APP (2019 Update Version!)

## Demo

[Movie App](https://shigatsuel.github.io/movie-app/#/)

---

## Concept List

- [Set Up](#Set-UP)

  - [Create React App](#Create-React-App)

  - [How React Does Work](#How-React-Does-Work)

- [JSX & Props](#JSX-&-Props)

  - [Create Component](#Create-Component)

  - [Reusable Components with JSX + Props](#Reusable-Components-with-JSX-+-Props)

  - [Dynamic Component Generation](#Dynamic-Component-Generation)

  - [React Uniqueness](#React-Uniqueness)

  - [Protection with PropTypes](#Protection-with-PropTypes)

- [State](#State)

  - [Class Components and State](#Class-Components-and-State)

  - [All I need to know about State](#All-I-need-to-know-about-State)

  - [Component Life Cycle](#Component-Life-Cycle)

- [Routing Bonus](#Routing-Bonus)

  - [Building the Router](#Building-the-Router)

  - [Building the Navigation](#Building-the-Navigation)

  - [Sharing Props Between Routes](#Sharing-Props-Between-Routes)

### Set Up

#### Create React App

기본적으로 리액트를 사용하기 위해서는 몇가지 단계를 거처야 한다.<br>
리액트는 최신기술을 사용하기 때문에 나중에 배포할 때 브라우저가 최신 기술들을 이해하지 못하므로 Webpack / Babel 등을 이용해서 브라우저를 이해시켜야 합니다.<br>
하지만 이제 더 이상 이러한 복잡한 단계를 거치지 않아도 된다.<br>

그 이유는 `create react app`이라는 실행 명령어가 생겼기 때문이다.<br>
create react app을 사용하기 위해서는<br>

```
1️⃣npm & npx가 미리 설치되어 있어야 함!
2️⃣npx create-react-app (내가 만들고자 하는 폴더 이름)
```

위의 `npx create-react-app folderName`한 줄로 리액트 앱을 Set Up 해준다.<br>
package.json 안을 보면 얼마나 scripts -> start(서버시작) build(배포준비) test(테스팅) eject(설정파일 추출) 등 이미 다 준비가 되어있다.<br>

`npm start`명령어를 실행하면 localhost와 On your network에 주소를 하나씩 발급하는데 localhost는 내 컴퓨터에서 돌아가는 서버이고 On your network는 wifi 상에서 돌아가는 서버이다.<br>
원한다면 같은 와이파이에 있는 사람은 얼마든지 On your network의 Url을 사용할 수 있다.<br>

**[⬆ Back to Top](#Concept-List)**

#### How React Does Work

리액트는 우리가 기존에 사용하던 것처럼 HTML에 작성하는 방식이 아닙니다.<br>
우리는 리액트에서 컴포넌트를 사용해 우리가 필요한 가상 엘리먼트들을 따로 작성하고 필요할 때마다 가져와 사용합니다.<br>
때문에 HTML 상에서는 아무것도 없는 것처럼 보이지만 컴포넌트를 사용해 만든 Virtual DOM을 필요할 때마다 추가하거나 제거하며 HTML을 로드시킵니다.<br>

이렇게 리액트는 처음부터 소스코드에 HTML을 넣지않고 Virtual DOM을 생성해 HTML에 따로 render시켜주는 방법을 알고 있기 때문에 속도가 매우 빠릅니다.<br>
이것이 왜 사람들이 리액트를 사용하는지에 대한 이유 중 하나입니다.<br>

**[⬆ Back to Top](#Concept-List)**

### JSX & Props

#### Create Component

`Component`는 HTML을 반환하는 함수이며 사용방법은 자바스크립트에서 HTML 태그 기호<>안에 Component를 위치시키면 Component를 사용할 수 있다. React에서는 Component와 함께 동작하며 모든 것이 Component로 이루어져 있다.<br>
위와 같이 자바스크립트와 HTML을 함께 사용하는 방식을 `JSX`라고 하며 리액트에서만 나온 유일한 개념이다.<br>

리액트에서 Component를 만드는 방법은 간단하다.<br>

```
1️⃣컴포넌트 JS파일을 생성
2️⃣컴포넌트를 작성할 파일마다 import React from "reac"를 꼭 임포트

임포트를 하지 않으면 리액트가 이것이 JSX를 사용한 컴포넌트가 있다는 것을 인지하지 못함!
```

또한 Component를 사용하는 방법은 아래와 같다.<br>

```
ReactDOM.render(<App />, document.getElementById("root"));

중요한 것은 react application이 단 하나의 컴포넌트만 렌더링할 수 있다는 것이다.
예를 들어
ReactDOM.render(<App /><Potato />, document.getElementById("root"));
와 같이 두 개의 컴포넌트를 렌더링 시키려고 한다면 오류가 발생한다.
-> 따라서 컴포넌트 안에 컴포넌트가 들어가는 형식으로 렌더링 시켜야 한다.
마치 DOM과 비슷한 느낌이다.
```

**[⬆ Back to Top](#Concept-List)**

#### Reusable Components with JSX + Props

JSX는 자바스크립트 안의 HTML이며 또한 JSX를 사용해 컴포넌트를 생성할 수도 있다.<br>
컴포넌트에서 알아야 할 점은 컴포넌트 내에서 정보를 보낼 수 있다는 점이다.<br>
컴포넌트에서 정보를 보내는 방법은 property라는 인자를 사용하는데 줄여서 `props`라고 정정하겠다.<br>
컴포넌트에서 props를 사용하는 방법은 아래와 같다.<br>

```
<Food name="kimchi something={bla}" /> -> HTML 내에서 자바스크립트를 사용하는 방법은 {}(컬리 브라켓)을 사용한다.
Food는 컴포넌트 이름이며 여기서 name / something을 props라고 한다.

이것은 HTML과 상당히 비슷한 형태를 하는데
마치 <div data-name="kimchi"></div>와 비슷하다.
즉, data-name="kimchi"를 한 것은 property:value 한 것과 비슷하다.

우리는 어떻게 props를 사용할 수 있을까?
위에서 props를 보내는 방법을 보여줬지만 사용하는 방법은 아직 모른다.

부모 컴포넌트에서 props를 보내게 되면 자식 컴포넌트 첫번째 인자에 props가 객체로 들어가 있게된다.(객체로 들어가있다는 것을 기억!)
이것은 자바스크립트가 한 것이 아니며 리액트가 해준 것이다.

function Food(props) {
  console.log(props);
}

result => {name: "kimchi", something: {bla}}

위와 같이 props를 사용해 정보를 전달할 수 있으며 이는 우리가 전에 dataset을 사용해 자바스크립트에 html 정보를 받아오는 방식과 매우 유사하다.
```

또한 리액트가 멋진 이유는 이러한 컴포넌트를 한 번 만들게 되면 재사용이 가능해서 계속해서 반복 사용이 가능하다는 것이다.<br>

**[⬆ Back to Top](#Concept-List)**

#### Dynamic Component Generation

우리가 리액트를 사용하는 이유가 절대 복사 붙여넣기를 하기 위해서가 아니라는 것을 알고 있다.<br>
예를 들어 데이터가 매우 많고 이것을 동적으로 가져오고 싶다면 어떻게 해야 할까?<br>
리액트에서 동적으로 데이터를 사용하는 방법은 자바스크립트 함수를 이용하는 것이다.<br>

```
foodILike = [방대한 데이터 배열]

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt=""></img>
    </div>
  )
}

function App() {
  return (
    <div>
      {foodILike.map(food => <Food name={food.name} picture={food.picture} />)}
    </div>
  )
}
```

**[⬆ Back to Top](#Concept-List)**

#### React Uniqueness

[Dynamic Component Generation](#Dynamic-Component-Generation)에서 콘솔을 확인해보면 오류가 생기게 되는데 그 이유는 React의 element는 유일해야 하며 list에 집어넣는 순간 유일성을 잃어버리게 되기 때문이다.<br>
앞에서 우리는 map을 사용해 똑같은 div박스를 여러개 생성했다.<br>
리액트에서 div element는 유일해야 하는데 똑같은 구조를 가지기 때문에 다 똑같은 element라고 인식하게 된다.<br>

따라서 우리가 리액트에서 div element 각각을 유일하게 만들어줄 수 있는 방법은 `props` 중 `key`property를 사용하는 것이다.<br>
`key`property는 우리가 실제로 컴포넌트에서 사용을 하지는 않는다.<br>
단지 리액트에게 모든 엘리먼트들이 다름을 알려주기 위해 사용하는 값이다.<br>
보통 key값은 id를 많이 준다.<br>

**[⬆ Back to Top](#Concept-List)**

#### Protection with PropTypes

컴포넌트를 사용하면서 props를 자주 사용하게 될 것이다.<br>
이 말은 그만큼 우리가 props 설정을 자주 실수하게 될 것이라는 말과도 연결된다.<br>
그렇기 때문에 우리는 항상 점검할 것이 있는데 father component로부터 전달받은 props가 우리가 예상한 props인지를 확인해야한다.<br>

prop이 내가 원하는 prop이 맞는지 확인하는 방법은 -> `PropTypes`

```
npm install prop-types
```

prop types가 할일은 내가 전달받은 props가 내가 원하는 props인지를 확인해주는 것이다.<br>
propTypes에 내가 원하는 props에 대한 설명을 적어줄 것이다.(PropTypes도 안됨 무조건 propTypes! 위에서 import한 PropTypes는 안에 설명을 적을 때 사용!)<br>

```
ex)
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

type은 여러 종류가 될 수 있다. value type은 물론 reference type도 가능하다.
마치 타입스크립트와 같은 역할을 해주는 듯 싶다.
```

**[⬆ Back to Top](#Concept-List)**

### Set Up

#### Class Components and State

지금까지 JSX / props / propTypes 에 대해 알아보았다. 다음으로 알아볼 단계는 state이다. `state`는 보통 우리가 `동적 데이터`와 함께 작업할 때 만들어진다.<br>
`동적 데이터`란 변하기도 하며 존재하지 않을수도 있고 생겨났다 사라지는 그런 것이다.<br>
예를 들어 1이 되었다가 2가 되기도 하고 갑자기 0이 되는 그런 데이터를 말한다.(움직이는 데이터) 이런 경우에 props는 필요하지 않고 state가 도움을 줄 것이다.<br>

그렇다면 우리는 여기서 의문을 가져볼 수 있는데 왜 function component를 사용하지 않고 class component를 굳이 만들어 사용해야 하는가?<br>
그것은 바로 class component만 가진 state라고 불리는 녀석 때문이다.<br>
state는 object이고 component의 data를 넣을 공간이며 이 데이터는 변한다.<br>

class component를 만드는 방법

```
class 클래스이름 extends React.Component(이것은 필수 단계이다.){
  state = {
    count: 0
  }

  render() {
    console.log("this is render method");
  }
}

react component는 뒤에 많은 것을 가지고 있기 때문에 상속해서 쓰는 듯함
따라서 '클래스이름'은 React.Compoent 클래스가 사용할 수 있는 모든 것들을 사용할 수 있다.
또한 React.component는 함수가 아니다. return을 반환하지 않으며 메서드를 가지고 있다. 그 중 하나가 React.component가 가지는 render() 메서드이다.

정지하자면 function component는 return 하는 것을 screen에 표시하고
class component는 render() 메서드를 통해 screen에 표시힌다.
react는 자동으로 render() 메서드를 실행시켜주어 항상 screen에 표시된다.
```

**[⬆ Back to Top](#Concept-List)**

#### All I need to know about State

```
class App extends React.Component {
  state = {
    count: 0
  }

  plus = () => {
    this.state.count = 1;
  }

  minus = () => {
    this.state.count = -1;
  }
  render() {
    console.log("this is render method");
  }
}
```

예시이긴 하지만 우리가 직접적으로 state를 변경하려고 하면 Do not mutate directly라며 eslint가 알려준다.<br>
즉. state를 직접적으로 변경하려 한다면 react는 아무것도 하지 않고 오히려 경고를 줄 것이다. state를 사용하지 말고 setState를 사용하라고 말이다.<br>
만약 직접 변경하게 된다면 react는 render function을 refresh하지 않을 것이기 때문에 작동하지 않는다.<br>
이 말의 의미는 매번 state를 변경할 때마다 내가 react render function을 호출해서 바꿔주길 원한다는 것이다.<br>

그렇기 때문에 setState를 사용해서 state를 변경해주어야 한다.<br>
setState는 항상 새로운 State를 취해야 하기 때문에 만약, setState function을 호출하면 react는 매우 똑똑해서 react는 state를 refresh하고 또한 render function을 호출할 것이다.<br>
setState를 사용하지 않는다면 항상 새로운 state를 취하지 않고 render function도 계속해서 호출하지 않을 것이다.<br>

**[⬆ Back to Top](#Concept-List)**

#### Component Life Cycle

React.Component 클래스는 render()메서드 말고도 더 많은 메서드를 가지는데 그 중 하나로 life cycle method를 가진다.<br>
life cycle method는 기본적으로 react가 component를 생성하거나 없애는 방법이다.<br>

Coponent life cycle method는

```
1️⃣Mounting은 생성되는 것을 의미
2️⃣Updating은 일반적인 업데이트를 의미
3️⃣Unmounting은 죽는 것을 의미하는 메서드들이 있다.
```

1. Mounting

```
1️⃣Mounting에서 컴포넌트가 생성되기 전 constructor를 호출
2️⃣그 후 생성하면서 render() 메서드 호출
3️⃣그리고 render() 메서드가 처음 실행되었는지 알려주는 componentDidMount()가 순차적으로 실행된다.
```

2. Updating

```
Updating은 render() -> componentDidUpdtate()대체적으로 두가지 메서드를 사용한다.
setState를 호출하면 component를 호출한 후 render()를 호출한 다음 업데이트가 완료되면 componentDidUpdate를 실행할 것이다.
```

3. Unmounting

```
Unmounting은 component가 죽을 때 실행되며 componentWillUnmount를 호출할 수 있다.
```

**[⬆ Back to Top](#Concept-List)**

Mounting & Updating & Unmounting은 메서드가 실행되는 순서를 잘 알고 있어야 헷갈리지 않습니다.<br>

### Routing Bonus

#### Building the Router

리액트에서 `react-router-dom`를 사용해 라우터를 만드는 것도 가능하며 또한 네비게이션이라는 것도 만들 수 있다.<br>

```
npm install react-router-dom
```

라우터는 url을 가져다가 확인하고 우리가 라우터에게 뭘 명령했느냐에 따라 스크린과 컴포넌트들을 보여줄 것이다.<br>
예를 들어 우리는 HOME 페이지와 ABOUT 페이지 2개를 사용할 것이다.<br>
Home 페이지로 가게되면 라우터는 Home 페이지에서 사용하는 컴포넌트들을 불러올 것이며 About 페이지로 가게되면 라우터가 About 페이지에서 사용하는 컴포넌트들을 불러올 것이다.<br>

```
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes.Home";
import About from "./routes.About";

function App() {
  return <HashRouter>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
}
```

react-router-dom은 많은 종류의 라우터들을 가지고 있다. 그 중에서 우리가 사용할 것은 HashRouter이다.<br>
Route에는 중요한 props가 2개가 들어간다.

```
1️⃣렌더링할 스크린 prop
2️⃣무엇을 할지 정하는 prop
```

중요한 것이 있는데 위처럼 코드를 짜게 되면 문제가 하나 발생하게 된다.<br>
"/"라우터로 들어가면 정상적으로 수행되지만 "/about"라우터로 가는 순간 Home과 About compoent가 겹쳐보이는 것을 볼 수 있다.<br>
이것은 리액트가 렌더링하는 방식 때문인데 리액트는 내 url을 가져와서 매칭되는 url별로 보여줄 것이다.<br>
때문에 "/about"라우터로 가게되면 "/"와 "/about" 두개 다 렌더링하게 되는 것이다.<br>
이것을 해결하기 위해 props를 추가해줘야 하는데 `exact={true}`를 첫번째 라우터에 추가해 주는 것이다.<br>

```
<Route path="/" exact={true} component={Home} />

이 말은 url이 오직 "/" 일때만 Home을 렌더링해주겠다는 의미이다.
```

**[⬆ Back to Top](#Concept-List)**

#### Building the Navigation

네비게이션은 라우트를 이동할 수 있게 도와준다.<br>
여기서는 HOME ABOUT 2가지의 라우트를 가지고 있다.<br>

```
function Navigation() {
  return <div>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
}

위와 같이 네비게이션을 만들면 문제가 생긴다.
위는 HTML코드이기 때문에 a태그를 사용하면 리액트가 죽게되고 HTML이 새로고침되는 것을 볼 수 있다.
우리는 이것을 원하지 않으며 오직 SPA(Single Page Application)으로 한 페이지에서만 작동하길 원한다.
```

따라서 a href -> Link to로 변경!

```
import { Link } from "react-router-dom";

function Navigation() {
  return <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
}

위와 같이 하면 모든 페이지를 죽이고 새 페이지를 새로고침하는 대신에 SPA를 가능하게 하는 네비게이션이 작동한다.
```

우리는 또한 2가지를 기억해야 한다.

```
1️⃣Link를 router 밖에서 사용할 수 없다.
2️⃣Router path와 Link to는 당연히 같아야 동작한다.
```

**[⬆ Back to Top](#Concept-List)**

#### Sharing Props Between Routes

모든 컴포넌트는 props를 가지고 있다.<br>

그리고 라우터에 있는 모든 라우트들은 기본적으로 props를 가진다.<br>
즉, 라우트를 이동하게 되면 정보를 보낼 수 있다는 말도 된다.<br>
예를 들어 react router dom에서 지원하는 Link to는 라우터에서 라우터로 정보를 보낼수도 있다.<br>

중요한 것은 Link를 클릭해야만 props가 전달된다는 것이다.<br>
만약에 인위적으로 url을 변경해서 이동하거나 페이지를 새로고침하게 되면 전달된 props의 안이 비어있는 것을 볼 수 있다.<br>

이 문제를 리다이렉트 시키는 방법으로 해결시키거나 유저들의 네비게이션 방식을 바꾸거나 할 수 있다.<br>

**[⬆ Back to Top](#Concept-List)**

---

## Felt thoughts

리액트의 간단한 개념 부분만 다뤄봤는데 확실히 잘 사용하게 된다면 매우 편리할 것이라고 생각이 들었다.<br>
지금까지 HTML을 로드시키고 새로고침하는 방식으로 사용하다가 SPA를 사용하게 되면서 굉장히 매력적이게 느껴졌다.<br>
큰 프로젝트를 진행하게 된다면 여러 부분이 중복되는 것이 많을텐데 그것을 컴포넌트로 마음대로 가져다 붙이거나 뗄 수 있다는 것이 많은 도움이 되지 않을까 생각이 든다.<br>

이번 리액트 강의를 들으면서 들은 생각은 딱 4이다.

```
1️⃣JavaScript를 잘 해야 한다. 말만 React이고 사실은 JavaScript이다.
2️⃣HTML CSS도 잘 다뤄야 한다.
3️⃣리액트 공식문서를 보아하니 내가 하는 것은 일부분에 불과하다.
4️⃣리덕스 & 리액트 훅 강의도 들어봐야겠다.
```

리액트 챌린지가 끝나면 리액트 공식문서를 보면서 알지 못했던 부분을 채워 나가야겠다.<br>
저번에 리액트 강의를 듣기전에 미리 JavaScript 기본 개념과 ES6를 공부하고 넘어온 탓에 React가 어렵게 느껴지진 않았다.<br>
강의와 챌린지도 매번 도움을 주지만 결국 실력을 높이기 위해서라면 본인 스스로 삽질을 하며 만들어보는 작업 또한 필수적이라고 생각되었다.<br>

(이 글은 노마드 코더 ReactJS로 영화 웹 서비스 만들기 강의를 통해 작성된 컨셉입니다. 자세한 강의를 보고 싶다면 노마드 코더를 방문하시길 바랍니다.)

**[⬆ Back to Top](#Shigatsuel-Movie-App)**
