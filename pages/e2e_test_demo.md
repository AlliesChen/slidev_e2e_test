# E2E 測試 Demo

<div v-click.hide=1>
建立一個簡單的計數元件 `Counter.vue` 實踐如下：

<<< @/components/Counter.vue

</div>

<div v-click=1>

讓我們給這個元件一個起始值 10，現在可以操作看看這個元件

```html
<Counter :count="10" m="t-4" />
```

<!-- ./components/Counter.vue -->
<Counter :count="10" m="t-4" data-testid="counter" />
</div>

<style>
.slidev-vclick-hidden {
  display: none;
}
</style>
