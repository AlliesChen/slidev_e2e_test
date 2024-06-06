---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: 技術分享：E2E 前端畫面測試
info: |
  ## skill sharing for developer team
  Presentation slides for e2e testing demo with developers.

# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---

# E2E 前端畫面測試

如何使用 playwright 進行自動化前端畫面測試-- 表單輸入資料檢查、送出資料檢查、結果檢查

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# Table of Contents

<toc :columns=2 />

---
src: ./pages/what_is_e2e_test.md
hide: false
---
---
src: ./pages/test_pyramid.md
hide: false
---
---
src: ./pages/how_to_start_e2e_test.md
hide: false
---
---
src: ./pages/configure_playwright.md
hide: false
---
---
src: ./pages/e2e_test_demo.md
hide: false
---
---
src: ./pages/e2e_test_code.md
hide: false
---
---

# 測試的成本

與單元測試做比較

```ts {monaco}
import { it, expect } from 'vitest'
import hello from './external'

it('return a string', () => {
  expect(hello()).toBe("Hello from snippets/external.ts");
});
```

Use `{monaco-run}` to create an editor that can execute the code directly in the slide:

```ts {monaco-run}
function fibonacci(n: number): number {
  return n <= 1
    ? n
    : fibonacci(n - 1) + fibonacci(n - 2) // you know, this is NOT the best way to do it :P
}

console.log(Array.from({ length: 10 }, (_, i) => fibonacci(i + 1)))
```
