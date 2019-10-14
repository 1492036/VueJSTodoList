# practice-project

> for study

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Vue.CLI

```
 Vue CLI 3는 Vue.js 개발을 위한 시스템으로 Vue.js Core에서 공식으로 제공하는 CLI이다. Vue CLI는 애플리케이션 개발에 집중할 수 있도록 프로젝트의 구성을 도와주는 역할을 한다.

Vue CLI를 통해 프로젝트를 구성하고 구축하지 않는다 하더라도 애플리케이션에 영향을 주지는 않는다. 
Vue CLI를 사용하지 않아도 무방하지만 Vue.js와 관련된 오픈 소스들은 대부분 Vue CLI를 통해 구성이 가능하도록 구현되어 있고 굳이 Git으로 clone하지 않아도 Vue CLI를 통해 더욱더 손쉽게 설치가 가능하기 때문에 Vue CLI을 사용하였다.
```

# skill

## <strong>margin 0 auto</strong> 
``` css
  .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
        width: 400px;
    }
```
 * 좌우 여백의 사이즈를 동일하게 하겠다. Center align 효과

## <strong>moment.js</strong> 

* 날짜 포맷팅위한 라이브러리

>**main.js** 
```javascript
import moment from 'moment'
import VueMoentJS from 'vue-momentjs'

Vue.use(VueMomentJs,moment)
```

>**TodoHeader.vue**
```javascript
this.$moment(new Date()).format('YYYYMMDD');
```

>**TodoHeader** 
```javascript
this.$moment(new Date()).format('YYYYMMDD');
```

## <strong>EventBus</strong>

>**main.js**
```javascript
Vue.prototype.$EventBus = new Vue();
```
**main.js에 EventBus를 정의하였다.**
>**TodoHeader**
```javascript
<div><button v-on:click="$EventBus.$emit('clickFromHeader')">{{country}}</button></div>
```
**Header에서 발생한 'clickFromHeader' 이벤트를 EventBus를 이용하여**

>**TodoFooter**
```javascript
 created(){
        this.$EventBus.$on('clickFromHeader', () => {
            if(this. ClickButton == "Clear All")
            this.ClickButton = "전체 삭제";
            else this.ClickButton = "Clear All";
        })
        
    }
```
**다른 컴포넌트에서 발생시켰다.**