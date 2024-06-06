# E2E 測試程式碼

<div v-click.hide=1>
  <p>先將測試的伺服器啟動，沒錯就是要用這個投影片來測：</p>
  <ul>
    <li><code>npm run dev</code></li>
  </ul>
  <p>新增檔案 e2e/e2e_test_page_spec.ts，檔案內容如下：</p>

<<< @/e2e/e2e_test_page.spec.ts#snippet

</div>

<div v-click=1>
  執行測試

  - `npx playwright test`

    - 在 `package.json` 加入 `"scripts": { "e2e": "npx playwright test" }` 的話，可以改用 `npm run e2e` 執行。
    - 如果只想執行特定檔案：`npx playwright test <file_name.file_extension>`
    - 如果只想用特定環境(瀏覽器)：`npx playwright test --project <project>`，帶入 project 的名稱，可以參考 `playwright.config.ts` 這個檔案中 projects 的屬性內容。

  使用 UI 模式

  - `npx playwright test --ui`

  > 這個功能非常重要，能夠看到測試執行畫面到底長怎樣，在用 Slidev 的 dev 環境測試時有一些詭異的狀況是透過個模式觀察到才解開的。(當然也可能是我誤會了什麼XD)
</div>

<style>
.slidev-vclick-hidden {
  display: none;
}
</style>
