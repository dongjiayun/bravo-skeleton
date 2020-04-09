# bravo-skeleton
```
Extend from element-loading,it means u can use almost most functions of v-loading
```

## install
```
npm i bravo-skeleton

//main.js
import bravoSkeleton from "bravo-skeleton"
Vue.install(bravoSkeleton)
```

### tips
```
As default,the directive will show loading status.
if u use .block .pics .texts .circle modifies,it will show skeleton effect.
```
```html
<div style="background-color: #334880;height: 900px"  v-skeleton.block.texts.circle.pics="loading"></div>
```
### Origin-Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to `document.querySelector` to get the corresponding DOM node | object/string | — | document.body |
| body | same as the `body` modifier of `v-skeleton` | boolean | — | false |
| fullscreen | same as the `fullscreen` modifier of `v-skeleton` | boolean | — | true |
| lock | same as the `lock` modifier of `v-skeleton` | boolean | — | false |
| text | loading text that displays under the spinner | string | — | — |
| spinner | class name of the custom spinner | string | — | — |
| background | background color of the mask | string | — | — |
| customClass | custom class name for Loading | string | — | — |

### Skeleton-Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| block | transform a inline element to inline-block | boolean | — | false |
| circle | a circle prepend to the head of context | boolean | — | false |
| texts | a self-computed component of text style skeleton | boolean | — | false |
| pics | a self-computed component of picture style skeleton | boolean | — | false |

--from dongjiayun
