# 如何開始前端 E2E 測試

使用現成的測試函式庫

<div>
    <p>比較常見的開源方案有：</p>
    <ul>
      <li><a href="https://www.cypress.io/">Cypress</a>-- 有些功能要付費才能用，但免費的功能就很夠用了，另外能透過錄製操作的方式建立測試，對於非程式開發者使用很親民。</li>
    <blockquote><p>但因為公司防火牆的關係，沒辦法安裝完成。</p></blockquote>
      <li v-mark="{ at: 1, color: 'blue', type: 'circle' }">
        <a href="https://playwright.dev/">Playwright</a>
        <span>-- 由微軟開發的自動化庫，測試的寫法上比起 cypress 更 techy，且因為推出日期最晚，教學資源也相對少，但免費能使用所有功能。</span>
        <span v-click=1 color="blue">這次 demo 我們會使用 Playwright</span>
        </li>
      <li><a href="https://www.selenium.dev/">Selenium</a>-- 過去被廣泛使用的自動化庫，也能透過錄製操作建立測試，但功能上沒有 cypress, playwright 這兩個豐富。</li>
    </ul>
    <p pt='2'>See also: <a href="https://dev.to/mteheran/comparison-of-automation-frameworks-selenium-playwright-and-cypress-3h8i">Comparison of Automation Frameworks... | Miguel Teheran | Dev.io</a></p>
</div>