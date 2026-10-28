const shared = {
  contactEmail: "app-dev@almx.cc",
  eulaUrl: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  supportedLanguages: "English · 繁體中文 · 简体中文 · 日本語 · 한국어 · Deutsch · Español · Español (México) · Français · العربية",
  // Cloudflare Web Analytics site token: page-view statistics without cookies. Empty means no statistics are
  // collected and the privacy page carries no notice about them.
  cloudflareToken: "f39859f48b264dcf87afe45c6ebfdfec"
};

// The statistics script, or null when it must not run: no token, a local preview, or a visitor whose browser sends
// Do Not Track or Global Privacy Control. Pure (the environment is passed in) so it can be tested without a page.
function webAnalyticsScript(token, env) {
  if (!token) return null;
  const host = String(env.hostname || "").toLowerCase();
  if (!host || host === "localhost" || host.endsWith(".localhost") || host === "127.0.0.1" || host === "[::1]") return null;
  if (env.doNotTrack === "1" || env.doNotTrack === "yes" || env.globalPrivacyControl === true) return null;
  const script = document.createElement("script");
  script.type = "module";
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.dataset.cfBeacon = JSON.stringify({ token });
  return script;
}

function loadWebAnalytics() {
  const script = webAnalyticsScript(shared.cloudflareToken, {
    hostname: location.hostname,
    doNotTrack: navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack,
    globalPrivacyControl: navigator.globalPrivacyControl
  });
  if (script) document.head.append(script);
}

function supportedLanguageForPreferences(languages) {
  const directLanguages = new Map([
    ["en", "en"],
    ["ar", "ar"],
    ["de", "de"],
    ["es", "es"],
    ["fr", "fr"],
    ["ja", "ja"],
    ["ko", "ko"]
  ]);

  for (const preference of languages) {
    const tag = String(preference || "").replaceAll("_", "-");
    if (/^es-mx(?:-|$)/i.test(tag)) return "es-MX";
    const baseLanguage = tag.split("-")[0].toLowerCase();
    if (directLanguages.has(baseLanguage)) return directLanguages.get(baseLanguage);
    if (baseLanguage !== "zh") continue;

    try {
      const locale = new Intl.Locale(tag).maximize();
      if (locale.script === "Hant" || ["TW", "HK", "MO"].includes(locale.region)) return "zh-Hant";
      return "zh-Hans";
    } catch {
      if (/(?:^|-)Hant(?:-|$)|(?:^|-)(?:TW|HK|MO)(?:-|$)/i.test(tag)) return "zh-Hant";
      return "zh-Hans";
    }
  }

  return "en";
}

const translations = {
  "zh-Hant": {
    htmlLang: "zh-Hant",
    languageLabel: "語言",
    themeLabel: "外觀",
    themeAuto: "自動",
    themeLight: "淺色",
    themeDark: "深色",
    menuLabel: "開啟選單",
    navHome: "首頁",
    navProduct: "功能介紹",
    navSupport: "支援",
    navPrivacy: "隱私權",
    navTerms: "使用條款",
    navGuide: "操作手冊",
    manualLink: "閱讀操作手冊",
    storeCTA: "在 App Store 下載",
    storeShort: "下載 App",
    siteNoticeTitle: "網站統計",
    siteNoticeBody: "本網站（不是 Cam Hub App）使用 Cloudflare, Inc. 提供的 Cloudflare Web Analytics 統計造訪次數。它不會設定 Cookie、不使用本機儲存空間、不會跨網站追蹤您，也不會建立您的個人檔案。統計內容為各頁面的瀏覽數、來源網站、國家或地區、瀏覽器與裝置類型。若您的瀏覽器送出「不追蹤」（Do Not Track）或 Global Privacy Control 訊號，則不會載入。Cam Hub App 本身不含任何分析工具。",
    footer: "Copyright © 2026 ALMX. All rights reserved.",
    home: {
      documentTitle: "Cam Hub — 自己的攝影機，不必被雲端綁住",
      topline: "直接連接．集中監看",
      eyebrow: "直接連接您的設備",
      title: '<span class="hero-line">自己的攝影機，</span><span class="hero-line hero-accent">不必被雲端綁住。</span>',
      summary: "Cam Hub 讓您直接連接相容的攝影機與錄影主機，不需為觀看影像另外註冊品牌雲端帳號。",
      primaryCTA: "查看功能",
      secondaryCTA: "確認相容方式",
      trustAccount: "不需另外建立帳號",
      trustProtocol: "支援 ONVIF 與相容設備協定",
      trustMix: "跨設備 LiveView Mix",
      statusLive: "即時",
      introKicker: "少一層帳號，多一點掌控",
      introTitle: "讓不同來源的影像，回到同一個畫面。",
      introBody: "加入單一攝影機，或連接部分相容的 NVR、DVR 與 NAS 監控系統。Cam Hub 將通道整理在一致的介面中，讓查看與切換更簡單。",
      featureDirectTitle: "直接連接",
      featureDirectBody: "使用設備本身的位址與存取資訊連線，不必為了觀看影像註冊品牌雲端帳號。",
      featureMixBody: "把不同攝影機與錄影主機的通道混合成一面專屬的牆。",
      featureProtocolTitle: "開放協定優先",
      featureProtocolBody: "支援 ONVIF 與 RTSP 串流，並針對部分設備提供相容連接。",
      featurePlaybackTitle: "即時與回放",
      featurePlaybackBody: "查看即時影像，並在支援的設備上搜尋與播放錄影內容。",
      featureTVTitle: "Apple TV 大螢幕監看",
      featureTVBody: "在 Apple TV 上使用 LiveView Mix、各設備的牆面與全螢幕影像；也能從 iPhone 或 iPad 建立加密備份，無需 PIN 即可還原設定。",
      featureWebhookTitle: "Webhook 控制面板",
      featureWebhookBody: "把 LiveView Mix 的空格變成 HTTP Webhook 按鈕，連接您自行管理的門禁、照明、場景或其他網路服務；敏感操作可要求再次確認。",
      compatibilityKicker: "目前相容性",
      compatibilityTitle: "開放協定，加上經過實測的設備連接。",
      compatibilityNote: "* 僅代表部分設備與功能經過相容性測試，不代表與品牌原廠存在合作、贊助或官方認可關係。實際功能依型號、韌體與設定而異。",
      closingTitle: "把監看畫面，重新交回自己掌握。",
      closingCTA: "了解如何使用"
    },
    product: {
      documentTitle: "Cam Hub — 功能介紹",
      topline: "功能介紹",
      eyebrow: "CAM HUB 功能介紹",
      title: '<span class="page-title-line">從加入設備開始，</span><span class="page-title-line">逐步設定 Cam Hub。</span>',
      summary: "依照 App 裡實際出現的入口、選項與操作結果整理；需要調整牆面、回放錄影或移轉設備時，可以直接跳到對應章節。",
      wikiLabel: "快速前往章節",
      wiki: [
        ["devices", "01", "設備與通道", "先完成設備連線，再決定哪些通道要出現在監看畫面。", [
          ["準備連線資訊", [
            "開啟「設備」，按下「新增設備」，進入新增設備表單。",
            "「名稱」可以留白；「IP 位址或主機名稱」、「使用者名稱」為必要欄位。「HTTP 連接埠」預設 80，「RTSP 連接埠」預設 554，若設備使用其他連接埠請依管理介面填寫。",
            "輸入「密碼」後按「新增」。連線期間畫面會顯示「正在連線到設備…」；若失敗，App 會區分無法連線、帳密錯誤或設備不支援。",
            "請只使用您擁有、管理或已獲明確授權的設備與帳號。"
          ]],
          ["自動辨識或使用 ONVIF", [
            "一般情況先保持「透過 ONVIF 連線」關閉，讓 Cam Hub 嘗試相容設備的原生連線，以取得較完整功能。",
            "若無法辨識，或您希望固定使用開放協定，再開啟「透過 ONVIF 連線」後重新加入。",
            "設備端可能需要先啟用 ONVIF、建立具備觀看權限的 ONVIF 帳號，並開放 RTSP。可從「相容性參考」查看連線提示。"
          ]],
          ["整理攝影機通道", [
            "加入成功後展開設備卡片，「通道」會列出設備回報的攝影機。",
            "開啟需要觀看的通道；不使用的通道可以停用。錄影主機通道也可選擇「暫停畫面」，使它停止串流而不是只隱藏。",
            "離線通道仍會保留在設備頁並以灰色呈現；若已開啟「隱藏無訊號攝影機」，它不會出現在即時牆。"
          ]],
          ["查看與更新設備資訊", [
            "設備卡片可展開或收合型號、位址、連接埠、序號、韌體與通道數。",
            "右上角可重新命名設備；下拉重新整理可重新取得通道狀態。",
            "設備頁右上角的黑邊按鈕只改變目前畫面的黑邊處理（預設／等比例放大／不等比例拉伸）；全螢幕按鈕會打開該設備的全螢幕牆。"
          ]]
        ]],
        ["mix", "02", "LiveView Mix 多機牆", "把不同攝影機與錄影主機的通道排在同一個畫面，並依實際螢幕調整密度。", [
          ["選擇 LiveView Mix 的攝影機", [
            "前往「設定」→「LiveView Mix 儀表板」。",
            "在各設備區段勾選要混合的通道；每個通道右側可獨立選 SD 或 HD，也可用「全部 SD」／「全部 HD」一次套用。",
            "回到「即時」分頁並在上方選擇 LiveView Mix。分頁內是方便捲動的預覽；按「全螢幕」才會套用所選的完整牆面版面。"
          ]],
          ["17 種全螢幕版面", [
            "均分網格：2×2、2×3、3×3、3×4、4×4、5×4、6×4、5×5、7×4、6×5、6×6、7×7。",
            "焦點版面：1+3、1+5、1+7、1+21、1+27。第一個攝影機會放入最大的主格。",
            "超過 16 格的版面會顯示螢幕標記，表示密度較高，較適合大尺寸顯示器。"
          ]],
          ["排列攝影機與空格", [
            "在 LiveView Mix 設定按「排列牆面」進入排列頁。",
            "可直接把一格拖到另一格互換；也可按「編輯」，使用清單拖曳排序或滑動刪除。順序會逐頁填入版面的格子。",
            "按「新增空格」可插入刻意保留的空格；點一下該空格可繼續設定它要顯示的內容。"
          ]],
          ["三種畫面填滿方式", [
            "預設：保留完整影像比例，尺寸不合時出現黑邊。",
            "等比例放大：維持比例並放大到填滿格子，超出格子的邊緣會被裁掉。",
            "不等比例拉伸：不裁切並直接填滿格子，但可能拉寬或壓扁影像。這個設定可作為全域預設，也能在個別設備或通道暫時切換。"
          ]],
          ["自訂浮水印", [
            "在「浮水印」開啟「顯示浮水印」，選擇顯示「設備名稱」、「攝影機名稱」與「IP 位址」。",
            "可調整位置、透明度、顏色、文字大小與系統／圓體／等寬／襯線字體。",
            "「文字清晰度」可使用「陰影」、「描邊」、「底色板」或「無」；頁面同時提供明亮與深色背景預覽，確認文字在日夜畫面都看得清楚。"
          ]],
          ["圖片、時鐘、標籤與控制面板", [
            "在「排列」新增「空格」，再點選空格進入編輯頁面。",
            "「圖片」可從照片選擇或直接拍攝；「時鐘」可選擇日期、秒數與 12／24 小時；「標籤」可設定文字、SF Symbol 與顏色。",
            "「控制」可建立 HTTP Webhook 按鈕，內建門、車庫、燈、門鎖、窗簾、場景、警報、風扇、插座與空調範本，也能自訂。涉及開門、解鎖等操作可要求再次確認。",
            "圖片與格子設定會隨支援的加密備份移轉；Webhook 端點仍由您自行建立與保護。"
          ]]
        ]],
        ["viewing", "03", "即時觀看與錄影回放", "單一攝影機著重清晰度與操作；多畫面則可以優先兼顧裝置負載與頻寬。", [
          ["單畫面與多畫面品質", [
            "前往「設定」→「預設畫質」，分別設定「單支攝影機」與「多支攝影機」的 HD／SD 預設值。這兩個預設值只套用於設備畫面：設備頁與「即時」的牆面、設備全螢幕牆，以及從設備開啟的單一攝影機。",
            "打開單一通道後，如果該設備回報可切換主／子串流，控制列會顯示 SD／HD 選擇。",
            "LiveView Mix 不套用上述預設值：多畫面依各通道在清單中指定的畫質播放，可逐一設定，或使用「全部 SD」／「全部 HD」批次設定。多格同時播放時，較低畫質通常能減少頻寬與裝置負載。",
            "在 LiveView Mix 點開單一攝影機（全螢幕或放大）時，一律以 HD 開啟；畫面上的 SD／HD 按鈕只做臨時切換，不會改變任何設定。"
          ]],
          ["縮放與橫向全螢幕", [
            "在單一通道畫面使用雙指縮放；放大後可拖曳查看不同位置。",
            "雙擊可快速切換至 2.5 倍，再次雙擊回到完整畫面。",
            "將裝置旋轉為橫向時，導覽列、控制列與分頁列會隱藏，畫面改為盡量填滿螢幕。"
          ]],
          ["快照與分享", [
            "在單一通道控制列按「快照」，Cam Hub 會向設備要求目前畫面的快照。",
            "取得影像後會開啟預覽頁；按「分享」使用系統分享功能。",
            "快照可能包含人物、地址、時間或其他敏感資訊。送出前請確認影像內容、接收對象與所在地規範。"
          ]],
          ["日期、時間軸與錄影分類", [
            "在通道頁下方選擇要查詢的日期；Cam Hub 會向設備要求該日的錄影片段。",
            "「錄影」可在「連續錄影」與「事件錄影」間切換。拖曳或縮放時間軸，將中央游標移到希望播放的時間；也可以直接點選下方片段。",
            "進入錄影後畫面會顯示「回放」與設備時間；按「回到即時」返回即時串流。部分設備會先下載片段，再由系統播放器播放。"
          ]]
        ], '功能可用性警語：即時串流、快照、<span class="keep-phrase">主／子串流切換</span>、錄影搜尋、<span class="keep-phrase">連續錄影／事件錄影分類</span>、時間軸定位及回放，均以攝影機或錄影主機實際回傳的能力，以及登入帳號被賦予的權限為準。'],
        ["backup", "04", "加密備份與攝影機分享", "iCloud 備份與還原不再使用 PIN；分享攝影機時，可自行決定是否用六位數 PIN 鎖定分享代碼。", [
          ["本機密碼保護", [
            "加入設備成功後，密碼存入 Apple 鑰匙圈；設備名稱、位址、連接埠、通道與 App 設定保留在裝置資料中。",
            "Cam Hub 只在建立您要求的連線、搜尋錄影、擷取快照或進行備份／移轉時使用這些資料。",
            "「刪除所有資料」會移除本機設備資料與已儲存的密碼；刪除 App 也可能使尚未備份的設定無法復原。"
          ]],
          ["不需 PIN 的 iCloud 加密備份", [
            "前往「設定」→「備份到 iCloud」，選擇 iPhone／iPad 或 Apple TV 為目的地後即可建立備份，不需要設定 PIN。",
            "備份內容包括支援的設備、登入資訊、通道、LiveView Mix 與 App 設定，會先加密再保存至您自己的私人 iCloud。",
            "完成後請確認「目前的備份」已顯示新的備份時間與設備數。"
          ]],
          ["從 iCloud 還原", [
            "在「設定」→「從 iCloud 還原」選擇要還原的備份即可繼續；iPhone、iPad 與 Apple TV 都不會要求 PIN 驗證。",
            "建議來源與目標使用相同 App 版本，並先確認登入的是保存該備份的 Apple帳號；舊版本建立的備份可能需要重新備份後才會顯示。",
            "還原會受目前方案可用上限影響。完成後請逐一確認設備位址、通道與 LiveView Mix 是否符合目前網路環境。"
          ]],
          ["分享攝影機與選用 PIN", [
            "前往「設定」→「分享攝影機」，選擇要分享的攝影機並產生加密代碼；分享時可決定是否用 PIN 鎖定。",
            "若啟用 PIN 鎖定，請設定並確認六位數字；接收端匯入或還原分享內容時必須通過 PIN 驗證。未設定 PIN 時，貼上或開啟完整代碼後可直接匯入。",
            "匯入內容包含設備及其登入資訊，並受接收端目前方案限制。完整代碼與 PIN 只應交給可信任的對象，不要張貼到公開聊天室、工單或網站。"
          ]]
        ]],
        ["preferences", "05", "顯示、串流與資料管理", "依網路、裝置效能與日常使用方式調整 App 行為；需要重設時，也可以分開處理設定、本機資料與 iCloud 備份。", [
          ["隱藏離線攝影機", [
            "「設定」→「隱藏無訊號攝影機」開啟後，沒有訊號的攝影機不會出現在「即時」分頁與即時牆。",
            "它仍會保留在「設備」的通道清單並以灰色顯示，因此不會被誤認為已刪除；訊號恢復後可再次出現在監看畫面。"
          ]],
          ["維持畫面外串流", [
            "當 App 偵測到需要較長重新連線時間的相容設備時，「串流」區段會顯示「翻頁時保持攝影機連線」。",
            "開啟後，捲出畫面的通道仍保留連線，回到該畫面時能更快恢復；代價是持續使用網路、電力與系統資源。不需要立即恢復時建議關閉。"
          ]],
          ["選擇啟動首頁", [
            "前往「設定」→「LiveView Mix」→「啟動時開啟」。",
            "「上次檢視」會回到上次選擇；LiveView Mix 直接開啟跨設備牆面；也可以指定某一台設備。",
            "如果指定設備已刪除或 LiveView Mix 尚未設定，App 會回到可用的畫面，而不會保留不存在的入口。"
          ]],
          ["方案與顯示通道", [
            "「設定」→「方案」會顯示目前攝影機方案與 NVR 方案及使用上限。",
            "未完全解鎖時，「選擇顯示哪些攝影機」可選擇有限名額要套用在哪些通道；已完全解鎖時不再需要此清單。",
            "購買與「還原購買」均由 Apple 提供的購買狀態決定。方案不會改變攝影機本身提供的協定、權限或回放能力。"
          ]],
          ["分開重設與刪除", [
            "「還原預設設定」：只把外觀、語言、畫質、LiveView Mix 等設定恢復預設，保留已加入設備。",
            "「刪除所有資料」：移除本機設備、攝影機與鑰匙圈密碼；iCloud 備份與訂閱不受影響。",
            "「刪除 iCloud 備份」：刪除雲端的加密備份，不影響目前裝置上的設備與設定。若尚未登入 iCloud，可能只能清除本機看到的備份狀態。",
            "執行不可逆刪除前，請先確認 iCloud 已完成同步，而且備份版本可供目標裝置還原。"
          ]]
        ]],
        ["tv-control", "06", "Apple TV 與 Webhook 控制", "把牆面帶到電視，也能在 LiveView Mix 中加入由您自行管理的 HTTP 控制按鈕。", [
          ["在 Apple TV 上監看", [
            "tvOS 版提供 LiveView Mix、單一設備的牆面、單一攝影機全螢幕與錄影時間軸，並以 Siri 遙控器的焦點操作方式設計。",
            "高密度版面適合大螢幕；可直接在牆面選取攝影機或 Webhook 按鈕，不必先離開目前畫面。",
            "即時串流、回放、主／子串流與通道功能仍以設備實際回傳能力、帳號權限、編碼及網路條件為準。"
          ]],
          ["從 iPhone 或 iPad 移轉設定", [
            "在 iPhone 或 iPad 開啟「設定」→「備份到 iCloud」，將「目的地」選為 Apple TV，建立 Apple TV 專用加密備份；不需要設定 PIN。",
            "Apple TV 登入保存備份的同一個 Apple帳號，開啟「從 iCloud 還原」並選擇備份，即可直接還原。",
            "Apple TV 只會還原 Apple TV 專用備份。完成後請確認設備位址、通道與 LiveView Mix 符合電視所在的網路環境。"
          ]],
          ["建立 Webhook 控制面板", [
            "前往 LiveView Mix 設定，從「排列牆面」加入「空格」，再將該空格設為「控制」。",
            "可使用門、車庫、照明、門鎖、窗簾、場景、警報、風扇、插座、空調或自訂範本；每個按鈕皆可設定圖示、標籤、顏色與操作前確認。",
            "每個按鈕可向您指定的 HTTP 或 HTTPS 端點傳送 GET、POST、PUT 或 DELETE，並能加入自訂標頭、Content-Type 與 JSON 內容。"
          ]],
          ["在牆面直接執行", [
            "在 iPhone 或 iPad 直接點按按鈕；在 Apple TV 則以遙控器移動焦點並按下執行，畫面會顯示傳送中、成功或失敗狀態。",
            "開門、解鎖、警報等不易復原的操作建議開啟再次確認，並只使用權限與用途受限制的端點。",
            "支援的控制面板設定可隨加密備份移轉；Webhook 端點、憑證、網路存取與實體設備安全仍由您自行建立及管理。"
          ]]
        ], "安全提醒：Webhook 按鈕會直接呼叫您指定的網路端點。Cam Hub 不會替您驗證端點、門禁、門鎖、警報或其他實體設備的安全性；請限制端點權限、保護認證資訊，並為不易復原的操作啟用再次確認。"]
      ],
      note: "Cam Hub 不會繞過設備原有的存取控制。功能會依型號、韌體、協定實作、帳號權限、編碼與網路條件而異。",
      plans: {
        title: "方案與限制",
        summary: "Cam Hub 內含免費額度。攝影機方案與 NVR 方案各自提高不同的上限。",
        caption: "各方案及其解鎖的內容",
        columns: ["方案", "計費", "解鎖的內容"],
        rows: [
          ["免費", "無", "全 App 合計最多啟用 2 個通道（獨立攝影機與錄影主機的通道合併計算），錄影主機最多 1 台。"],
          ["攝影機方案", "按年計費", "將可啟用的獨立攝影機提高到 8 支（<span class='keep-phrase'>Cam Home</span>）、16 支（<span class='keep-phrase'>Cam Plus</span>）或不限數量（<span class='keep-phrase'>Cam Max</span>）。"],
          ["NVR 方案", "按月計費", "將可連接的錄影主機提高到 2 台（<span class='keep-phrase'>NVR Starter</span>）、4 台（<span class='keep-phrase'>NVR Pro</span>）或不限數量（<span class='keep-phrase'>NVR Max</span>），這些主機的所有通道都可使用。"]
        ],
        notes: [
          ["兩組方案各自獨立", "攝影機方案與 NVR 方案互相獨立，可以同時訂閱。攝影機方案不會增加錄影主機的額度，NVR 方案也不會提高獨立攝影機的上限。各方案的費用請見 App 內的方案畫面。"],
          ["組合範例", "同時訂閱 <span class='keep-phrase'>Cam Plus</span> 與 <span class='keep-phrase'>NVR Pro</span>：可使用 4 台錄影主機的所有通道，以及最多 16 支獨立攝影機。"]
        ],
        more: "在操作手冊中查看完整規則與更多範例"
      }
    },
    support: {
      documentTitle: "Cam Hub — 支援與相容性",
      topline: "支援與相容性",
      eyebrow: "SUPPORT",
      title: "支援與相容性",
      summary: "連線問題通常與設備協定、權限、連接埠或網路設定有關。這裡整理了開始檢查的位置。",
      meta: [["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "Cam Hub"], ["支援語言", shared.supportedLanguages]],
      sections: [
        ["相容性", ["Cam Hub 支援 ONVIF 與 RTSP 影像連接，並已針對部分 Hikvision、Dahua 與 Synology 設備或系統進行測試。實際相容性取決於型號、韌體、帳號權限、串流格式與網路設定。", "部分設備可能需要先在管理介面中啟用 ONVIF、RTSP 或相關本機服務。品牌相容性說明不代表與品牌原廠存在合作、贊助或官方認可關係。"], "compatibility"],
        ["回報連線問題前", ["確認攝影機或錄影主機已上線，且 Apple 裝置可以連線至該設備。", "確認設備位址、HTTP 連接埠、RTSP 連接埠、使用者名稱與密碼。", "需要時，請在設備管理介面中啟用 ONVIF 或相關本機服務。", "確認設備帳號具備查看指定通道與錄影內容的權限。", "若主串流的編碼、解析度或流量不相容，可以嘗試使用子串流。"]],
        ["聯絡支援時請提供", ["App 版本、Apple 裝置型號與作業系統版本。", "攝影機或錄影主機的型號與韌體版本。", "使用的連線方式、操作步驟與完整錯誤訊息。", "請勿寄送攝影機密碼、分享攝影機 PIN、完整分享代碼或從網際網路連線到設備所用的公開位址。"]],
        ["常見限制", ["ONVIF 與 RTSP 的實作會因設備品牌、型號與韌體而異，因此支援協定不等於每項功能都能使用。", "遠端連線需要您自行建立並保護適當的 VPN、路由或設備遠端存取設定。Cam Hub 不會自動開放路由器連接埠。", "錄影搜尋與回放需要設備本身支援，並且登入帳號擁有相應權限。"]]
      ]
    },
    privacy: {
      documentTitle: "Cam Hub — 隱私權政策",
      topline: "隱私權政策",
      eyebrow: "PRIVACY POLICY",
      title: "隱私權政策",
      summary: "Cam Hub 以裝置端處理與使用者主動控制為原則，不要求建立服務帳號，也不使用第三方廣告追蹤。",
      meta: [["生效日期", "2026 年 10 月 29 日"], ["App", "Cam Hub"], ["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["政策概要", ["Cam Hub 不要求您建立 Cam Hub 服務帳號，也不整合第三方廣告或廣告追蹤。App 的用途是連接由您設定的攝影機與錄影主機。", "若您加入 YouTube 或 Twitch 直播，會由這些服務自己的播放器播放；播放器可能顯示它們自己的廣告，並接收來自您裝置的資訊，詳見下方「YouTube 與 Twitch 直播」。"]],
        ["設備資料與登入資訊", ["攝影機與錄影主機的名稱、位址、連接埠、使用者名稱、通道資訊及 App 設定會保存在您的裝置上。密碼保存在 Apple 鑰匙圈。Cam Hub 只會為了執行您要求的連線與操作使用這些資訊。"]],
        ["攝影機連線與影像", ["查看即時或錄影影像時，App 會連線至您提供的設備位址。您的設備、網路服務商、VPN 服務商、DNS 服務商或您選擇的任何遠端端點，可能依其政策處理連線資訊。Cam Hub 不會將攝影機影像用於廣告或行為分析。"]],
        ["YouTube 與 Twitch 直播", ["若您加入 YouTube 直播或頻道、或 Twitch 頻道，Cam Hub 會使用該服務自己的嵌入式播放器播放：YouTube 的播放器（YouTube API Services）或 Twitch 的播放器。任一服務的第一個直播播放前，App 會請您同意該服務的條款。若您從未加入這類直播，本節不適用於您。", "播放器從 YouTube 或 Twitch 載入，並直接連線到它們的伺服器。播放時，該服務會收到您的 IP 位址以及裝置與瀏覽器資訊，並可能使用 Cookie 或類似技術、統計播放情形及顯示廣告，詳見下方連結的 Google 隱私權政策（YouTube）或 Twitch 隱私權聲明（Twitch）。Cam Hub 只在 App 執行期間保留播放器的 Cookie 與儲存資料，也不會收到這些資訊。", "Cam Hub 只會在您的裝置上保存您加入的連結與頻道名稱；若您建立分享代碼或 iCloud 備份，也會包含在其中。在 App 中刪除該直播即會移除。", "<a href=\"https://policies.google.com/privacy\">Google 隱私權政策</a>", "<a href=\"https://www.twitch.tv/p/legal/privacy-notice/\">Twitch 隱私權聲明</a>"]],
        ["Webhook 控制面板與第三方端點", ["您可以設定 HTTP 或 HTTPS 方法、端點網址、自訂標頭與請求內容，建立 LiveView Mix 控制按鈕。這些設定可能包含 Authorization 權杖或其他敏感資料，會保存在裝置上的 LiveView Mix 設定中，也可能包含在您主動建立的加密 iCloud 備份內。", "只有在您點按按鈕時，App 才會從您的裝置直接把請求送到您指定的端點，例如 Home Assistant、Node-RED 或其他第三方服務。該端點及網路服務商可能依其政策處理您的來源 IP 位址、標頭與請求內容；Cam Hub 的開發者不會選擇、控制或接收傳送到這些端點的資料。HTTP 傳輸未加密，敏感資料請使用 HTTPS，並自行確認接收端的隱私與安全做法。"]],
        ["區域網路存取與掃描", ["Cam Hub 會請求「區域網路」權限，以直接連接攝影機與錄影主機。當您在「工具」分頁啟動掃描時，App 會探測您選擇的子網路及常見攝影機服務連接埠，並可能讀取回應中的設備位址、開放連接埠與 HTTP Server 名稱，協助您辨識設備。", "掃描由您主動啟動，結果在裝置上處理，不會傳送給 Cam Hub 的開發者。"]],
        ["設備報告（實驗性）", ["若新增攝影機或錄影主機失敗，Cam Hub 會提供一項選用的實驗性設備報告，協助開發者了解原因。此功能只會在新增設備的嘗試失敗之後提供；只有在您點選「將詳細資訊傳送給開發者」並已接受首次使用前顯示的聲明後才會開始，且僅在其畫面開啟期間執行。您可以隨時停止。", "執行時，您的 Apple 裝置會直接向您輸入的設備位址傳送唯讀請求：連至您輸入的連接埠；若設備位於區域網路，另會連至常見的攝影機連接埠。這些請求用於檢查哪些連接埠有回應、讀取設備的型號、韌體與支援的通訊協定（例如 ISAPI、ONVIF 與 RTSP），並簡短測試影像串流是否有資料傳來。這些請求不會變更設備上的任何設定，也都不會傳送給開發者或任何其他伺服器。", "這些請求會以您輸入的使用者名稱與密碼登入，與新增設備時相同。若失敗的嘗試本身就是登入被拒，報告完全不會送出登入請求。登入失敗會由設備計次，也可能被設備記錄。", "報告內容包括：App 版本、iOS 版本、Apple 裝置型號與語言設定；您選擇的連線模式與 App 顯示的錯誤；隱藏最後一段數字的設備位址（網際網路上的位址不會列入）；您輸入的連接埠與有回應的連接埠；設備自行回報的品牌、型號、韌體與支援的通訊協定；狀態碼與設備回應的簡短節錄；Apple 裝置的連線方式（例如 Wi-Fi、行動網路或 VPN）；以及測試影像串流的封包數量與大小，絕不包含畫面。", "在顯示或保存任何內容之前，自動過濾機制會將密碼、使用者名稱、權杖、Cookie、序號、MAC 位址、公開 IP 位址、主機名稱、電子郵件地址、設備與通道名稱、Wi-Fi 網路名稱、電話號碼，以及較長的金鑰或識別碼，替換為可見的佔位標記；網頁文字不會保留。過濾是自動進行的，並非萬無一失，因此送出前請先閱讀報告。", "不會有任何內容自動傳送給開發者。報告會先顯示在畫面上，您可以關閉其中各個部分，或不送出就直接關閉。若要送出，請點選「以電子郵件寄給開發者」：報告會在「郵件」的撰寫視窗中開啟，收件人為支援信箱，內容同時放在郵件本文與文字檔附件中；在該視窗按下「傳送」之前不會寄出任何內容，您也可以改為取消。若「郵件」尚未設定，報告會被複製到剪貼簿，並在您的郵件 App 中開啟已填好收件人的郵件。您也可以複製報告，或透過 iOS 的分享表單分享。", "複製的報告不會透過通用剪貼簿傳到您的其他裝置，並會在 120 秒後從剪貼簿中失效。", "最近的最多五份報告會保存在您的裝置上，方便您稍後傳送。這些報告不會納入裝置備份，也不會納入 Cam Hub 的 iCloud 備份。您可隨時在設備報告畫面以「刪除已儲存的報告」刪除這些報告；儲存第六份時也會刪除最舊的一份，刪除 App 時則會全部移除。", "若您以電子郵件寄出報告，開發者會收到該郵件與您的電子郵件地址。報告僅用於查明您回報的問題，並只會在回覆問題及保留必要支援紀錄所需的期間內保存。", "設備報告為實驗性功能，可能隨時變更或移除。傳送報告並不保證您的設備會獲得支援，也不保證會收到回覆或修正。"]],
        ["照片與相機", ["您可以透過 Apple 的系統照片選擇器挑選特定照片，或授權相機拍攝新照片，放入 LiveView Mix 空格。App 只取得您選取或拍攝的圖片，不會取得整個照片圖庫；圖片會縮小並壓縮後保存在裝置的 LiveView Mix 設定中。", "圖片僅保存在您的裝置上，Cam Hub 開發者不會接收或存取。只有在您自行建立 Cam Hub 加密 iCloud 備份時，圖片才可能隨備份存入您自己的 iCloud，以供裝置還原。您可在 LiveView Mix 中移除圖片，並可在系統設定中變更相機或照片權限。"]],
        ["位置", ["Cam Hub 只在「使用 App 期間」要求位置權限。位置與指南針方向只會在需要它們的畫面開啟期間讀取，例如「工具」分頁中顯示車速與指南針方向的時速表；App 不會在背景追蹤位置。", "位置與指南針方向在您的裝置上處理，用於顯示車速與方向，不會儲存、不會納入備份，也不會傳送給 Cam Hub 開發者或任何其他對象。若時速表以語音報讀車速，語音由您裝置上 iOS 內建的語音合成產生，您可在該畫面中關閉。您可隨時在 Apple 裝置的「設定」中拒絕或撤回定位權限；沒有定位時，App 的其他功能仍可使用。"]],
        ["攝影機分享代碼", ["您可分享含所選攝影機或錄影主機之位址、使用者名稱、通道資訊及密碼的代碼。若您開啟「包含 App 設定」，代碼也會帶有 App 設定，其中可能含有 LiveView Mix 設定，例如可能包含權杖的 Webhook 設定。代碼以 AES-256-GCM 加密，金鑰由 PBKDF2-HMAC-SHA256（600,000 次迭代）衍生。分享時，您可從三種鎖定方式中擇一。", "不鎖定：金鑰來自 Cam Hub 內建的一組祕密值，因此任何相容版本的 Cam Hub 都能開啟代碼。這只能避免內容被一眼看穿，無法防範同時取得代碼與 App 的人。", "六位數 PIN：必須輸入您設定的 PIN 才能開啟代碼。六位數 PIN 只有一百萬種可能，取得代碼的人可在自己的電腦上離線逐一嘗試。", "複雜加密（密碼）：必須輸入您設定的密碼才能開啟代碼；密碼至少八個字元，可使用任何字母、數字與符號。唯有又長又獨一無二的密碼，才能讓猜測在實務上行不通。", "Cam Hub 不會把代碼、PIN 或密碼傳送給開發者，開發者也無法找回忘記的 PIN 或密碼。請把 PIN 或密碼與代碼分開傳送。", "代碼不會自動到期。從來源裝置刪除設備或 App，也不會撤銷已分享的副本；若代碼可能外洩，請更改相關設備的密碼。", "代碼由您選擇的分享對象 App 傳遞，並依該 App 的政策處理。若以連結分享（連至 Cam Hub 網站），代碼位於連結中「#」之後，瀏覽器不會把這部分傳送給網站伺服器。"]],
        ["選用的 iCloud 備份", ["若您選擇使用 iCloud 備份，App 會先加密支援的攝影機與錄影主機設定、登入資訊、通道及 App 設定，再存入您私人的 iCloud Key-Value Store。iPhone、iPad 與 Apple TV 的備份和還原不使用 PIN。備份以 App 內建的金鑰加密，而非您自行設定的密碼；其保護仰賴您的 Apple 帳號與 iCloud。", "備份時間、設備數量與站點名稱會分開保存，供 App 顯示備份狀態。還原時選擇可用備份即可繼續。"]],
        ["購買與訂閱", ["購買與訂閱由 Apple 處理。我們不會取得您的完整付款卡號或銀行資訊。App 只會讀取 Apple 提供的購買狀態，以啟用相應的使用上限或功能。"]],
        ["分享、保留、刪除與選擇", ["我們不販售個人資料。本機設定會保留在您的裝置上，直到您刪除相關內容或移除 App。您可在 App 內刪除設備、LiveView Mix 圖片與控制設定，並可分開刪除 iCloud 備份；系統權限可在 Apple 裝置的「設定」中撤回。", "選用的 iCloud 資料由您的 Apple 帳號與 iCloud 服務管理。您透過電子郵件主動寄給支援信箱的資訊，只會在回覆問題及保留必要支援紀錄所需的期間內保存。"]],
        ["兒童與政策更新", ["Cam Hub 並非以兒童為主要對象，也不會刻意蒐集兒童的個人資料。當 App 功能、法規或商店要求變更時，我們可能更新本政策，並在本頁公布新的修訂日期。"]]
      ]
    },
    terms: {
      documentTitle: "Cam Hub — 使用條款",
      topline: "使用條款",
      eyebrow: "TERMS OF USE",
      title: "使用條款",
      summary: "使用 Cam Hub 代表您同意以下條款，以及 Apple App Store 適用的授權與購買規則。",
      meta: [["生效日期", "2026 年 10 月 29 日"], ["App", "Cam Hub"], ["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["Apple 標準 EULA", ["Cam Hub 採用 Apple 標準終端使用者授權合約。若本條款與 Apple 適用的 EULA 或 App Store 規則衝突，應以 Apple 的適用條款為準。", `<a href="${shared.eulaUrl}">Apple Standard End User License Agreement</a>`]],
        ["用途與授權使用", ["Cam Hub 是相容攝影機與錄影主機的影像查看及管理工具。您只能連接自己擁有、管理或已獲明確授權存取的設備與網路。您有責任遵守所在地適用的隱私、監控、錄影、工作場所及財產相關法規。"]],
        ["設備存取與安全", ["您必須提供有效的設備位址與登入資訊。Cam Hub 不會繞過存取控制。您有責任保護設備、網路、帳號、密碼、遠端存取設定，以及任何匯出或分享的影像。"]],
        ["控制按鈕與連接設備", ["LiveView Mix 的控制按鈕會將您設定的請求送往您指定的端點。Cam Hub 不會驗證該端點的行為、不會確認動作是否完成，也無法保證請求一定送達——按鈕可能在您無意時觸發，也可能在您需要時失敗。", "您必須自行負責按鈕所連接的對象及其運作後果。請勿在動作失敗、延遲、重複或誤觸可能造成人身傷害、受困、財物損害或安全失效的場合使用——包含門、大門、門鎖、鐵捲門，以及任何可能夾住人或車輛的設備。請務必保留獨立的操作方式。"]],
        ["網路掃描", ["「工具」分頁會探測您指定網段上的位址與連接埠。請僅掃描您擁有、管理或已獲明確授權的網路。未經授權的掃描可能違反電腦犯罪相關法律、網路服務業者的條款，或您任職公司或所屬組織的政策。"]],
        ["分享代碼", ["您必須自行負責分享代碼的接收對象，並在代碼可能外洩時負責變更相關設備的密碼。代碼的內容、加密方式與有效期限請參閱隱私權政策。"]],
        ["相容性與可用性", ["功能會受到設備型號、韌體、協定實作、帳號權限、影像編碼、錄影設定與網路狀況影響。支援 ONVIF、RTSP 或特定產品系列，不代表每一型號或功能都能使用。", "部分品牌的支援係依原廠公開文件推導而來，未針對每個型號實機驗證。Cam Hub 會在新增設備時確認可用的串流路徑；在此之前不保證相容。", "Cam Hub 不是緊急監控服務，不保證影像不中斷、錄影一定存在、警報送達或任何特定安全結果。"]],
        ["訂閱與購買", ["App 內購買與訂閱由 Apple 處理。價格、續訂、取消、退款與帳號管理依 Apple 顯示的資訊及您的 Apple 帳號設定為準。App 會依有效的購買權益決定可使用的上限或功能。", "訂閱失效後，超出免費額度的通道會停止串流；您的設備、名稱與設定仍保留在裝置上，續訂適用方案後即可恢復使用。價格與方案內容可能依 Apple 通知及適用法律調整；訂閱價格異動僅會依 Apple 所示於後續續訂時生效。"]],
        ["隱私權", ["資料處理由獨立的隱私權政策說明。", `<a href="privacy.html">Cam Hub 隱私權政策</a>`]],
        ["第三方名稱與服務", ["Hikvision、Dahua、Synology、ONVIF 及其他相關名稱，均為其各自權利人的商標或識別名稱。Cam Hub 為獨立開發的應用程式。", "成功連線代表設備與 Cam Hub 使用的協定或功能在技術上相容，不代表與相關權利人存在隸屬、合作、贊助或官方認可關係。"]],
        ["YouTube 與 Twitch 直播", ["YouTube 與 Twitch 直播由這些服務提供，而非 Cam Hub 開發者，且可能隨時停止、變更或無法使用。在 Cam Hub 中加入或觀看這些直播，即表示您同意受下方連結的 YouTube 服務條款及 Twitch 服務條款約束。", "<a href=\"https://www.youtube.com/t/terms\">YouTube 服務條款</a>", "<a href=\"https://www.twitch.tv/p/legal/terms-of-service/\">Twitch 服務條款</a>"]],
        ["免責聲明與責任限制", ["Cam Hub 依「現狀」及「可提供狀態」提供，除 Apple 標準 EULA 所載免責外，不附任何形式之擔保。在法律允許的範圍內，開發者不對間接、附帶、特殊或衍生性損失負責，包括影像遺失、事件未被記錄、財物損失或營運中斷。本條款之任何內容均不排除或限制依法不得排除或限制的責任、不限制強制性消費者權利，亦不取代 Apple 條款賦予您的權利。"]],
        ["條款更新", ["當 App 功能、法規或商店要求變更時，我們可能更新本條款，並在本頁公布新的修訂日期。"]]
      ]
    },
    guide: {
      documentTitle: "Cam Hub — 操作手冊",
      topline: "操作手冊",
      eyebrow: "OPERATION MANUAL",
      title: "操作手冊",
      summary: "從加入設備、即時畫面與錄影回放，到 LiveView Mix 多機牆、分享與備份，依序說明 Cam Hub 的操作方式。",
      tocLabel: "目錄",
      fallbackNotice: "操作手冊目前提供繁體中文與英文版本，此處顯示英文版。",
      loading: "正在載入操作手冊…",
      loadError: "無法載入操作手冊。請檢查網路連線後再試一次。",
      unavailable: "操作手冊尚未發布。",
      retry: "重試",
      toTop: "回到頂端",
      prevChapter: "上一章",
      nextChapter: "下一章"
    }
  },
  en: {
    htmlLang: "en",
    languageLabel: "Language",
    themeLabel: "Appearance",
    themeAuto: "Auto",
    themeLight: "Light",
    themeDark: "Dark",
    menuLabel: "Open menu",
    navHome: "Home",
    navProduct: "Product",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    navGuide: "Manual",
    manualLink: "Read the operation manual",
    storeCTA: "Download on the App Store",
    storeShort: "Get the app",
    siteNoticeTitle: "Website statistics",
    siteNoticeBody: "This website (not the Cam Hub app) counts visits with Cloudflare Web Analytics, a service provided by Cloudflare, Inc. It sets no cookies, does not use local storage, does not track you across other sites and does not build a profile of you. It reports page views by page, referring site, country, browser and device type. It is not loaded when your browser sends Do Not Track or Global Privacy Control. The Cam Hub app itself contains no analytics.",
    footer: "Copyright © 2026 ALMX. All rights reserved.",
    home: {
      documentTitle: "Cam Hub — Your cameras, without the cloud lock-in",
      topline: "Direct connection · Unified viewing",
      eyebrow: "Connect directly to your equipment",
      title: '<span class="hero-line">Your cameras.</span><span class="hero-line hero-accent">No cloud lock-in.</span>',
      summary: "Cam Hub connects directly to compatible cameras and recorders, without requiring another vendor cloud account just to view your video.",
      primaryCTA: "Explore features",
      secondaryCTA: "Check compatibility",
      trustAccount: "No additional account required",
      trustProtocol: "ONVIF and compatible device protocols",
      trustMix: "Cross-device LiveView Mix",
      statusLive: "Live",
      introKicker: "One less account. More control.",
      introTitle: "Bring video from different sources into one clear view.",
      introBody: "Add an individual camera or connect selected compatible NVR, DVR, and NAS surveillance systems. Cam Hub organizes their channels in one consistent interface for faster viewing and switching.",
      featureDirectTitle: "Direct connection",
      featureDirectBody: "Connect with the address and access information already configured on your equipment, without registering a vendor cloud account just to view video.",
      featureMixBody: "Combine channels from different cameras and recorders into your own monitoring dashboard.",
      featureProtocolTitle: "Open protocols first",
      featureProtocolBody: "Supports ONVIF and RTSP streaming, with compatible connections for selected equipment.",
      featurePlaybackTitle: "Live and playback",
      featurePlaybackBody: "View live video and search or play recordings when the equipment supports those capabilities.",
      featureTVTitle: "Monitoring on Apple TV",
      featureTVBody: "Use LiveView Mix, equipment walls, and full-screen video on Apple TV. Create an encrypted Apple TV backup on iPhone or iPad, then restore it without a PIN.",
      featureWebhookTitle: "Webhook control panels",
      featureWebhookBody: "Turn a LiveView Mix blank slot into HTTP webhook buttons for access, lighting, scenes, or other services you manage. Sensitive actions can require confirmation.",
      compatibilityKicker: "Current compatibility",
      compatibilityTitle: "Open protocols, plus tested equipment connections.",
      compatibilityNote: "* Indicates that selected equipment and features have been compatibility-tested. It does not imply affiliation, sponsorship, or endorsement by the equipment vendor. Features vary by model, firmware, and configuration.",
      closingTitle: "Put your monitoring view back under your control.",
      closingCTA: "Learn how it works"
    },
    product: {
      documentTitle: "Cam Hub — Features",
      topline: "Features",
      eyebrow: "CAM HUB FEATURES",
      title: '<span class="page-title-line">Explore Cam Hub.</span><span class="page-title-line">Feature by feature.</span>',
      summary: "Use the same entry points and controls you see in the app. Jump directly to device setup, LiveView Mix, playback, transfer, or app behaviour.",
      wikiLabel: "Jump to a chapter",
      wiki: [
        ["devices", "01", "Devices and channels", "Connect the equipment first, then decide which channels belong on your monitoring screens.", [
          ["Prepare connection details", [
            "Open Devices, tap Add Device, and enter the Add Device screen.",
            "Name is optional. IP address or hostname and Username are required. HTTP Port defaults to 80 and RTSP Port to 554; use the values shown in the equipment administration interface when they differ.",
            "Enter Password and tap Add. The app displays Connecting to device and distinguishes connection, credential, and unsupported-equipment errors when the attempt fails.",
            "Connect only to equipment and accounts that you own, manage, or are explicitly authorized to use."
          ]],
          ["Auto-detect or use ONVIF", [
            "Normally leave Connect using on Auto-detect first so Cam Hub can try a compatible native connection and request the fullest available feature set.",
            "If the equipment is not identified, or you want to use the open protocol directly, set Connect using to ONVIF and add it again.",
            "You may need to enable ONVIF, create an ONVIF account with viewing permission, and enable RTSP in the equipment settings. Compatibility reference contains connection notes."
          ]],
          ["Organize camera channels", [
            "After the equipment is added, tap it in Devices to open its page. Cameras lists the channels reported by that equipment.",
            "Enable the channels you want to view and disable unused channels. Recorder channels can also use Pause Video to stop streaming instead of merely hiding the tile.",
            "Offline channels stay in the Devices list in a dimmed state. When Hide offline cameras is enabled, they do not appear on live monitoring walls."
          ]],
          ["Review and update equipment", [
            "Expand the equipment card to review its model, address, port, serial number, firmware, and channel count.",
            "Use the control in the upper-right to rename the equipment, or pull to refresh to request updated channel state.",
            "The black-bars control cycles Default, Enlarge to fill, and Stretch to fill for the current view only. The Full Screen Wall control opens that equipment's channel wall."
          ]]
        ]],
        ["mix", "02", "LiveView Mix monitoring wall", "Place channels from different cameras and recorders on one screen, then tune the density for the display you use.", [
          ["Choose cameras for LiveView Mix", [
            "Go to Settings → LiveView Mix.",
            "Select channels under each equipment section. Each channel can use SD or HD independently, and All SD or All HD applies one quality to the complete selection.",
            "Open the LiveView Mix tab. It shows a scrollable preview; tap Full screen to apply the selected monitoring-wall layout."
          ]],
          ["17 full-screen layouts", [
            "Uniform grids: 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6, and 7×7.",
            "Focus layouts: 1+3, 1+5, 1+7, 1+21, and 1+27. The first camera occupies the largest primary tile.",
            "Layouts with more than 16 tiles display a screen marker because their density is better suited to a large display."
          ]],
          ["Arrange the wall and empty slots", [
            "Tap Arrange the wall in LiveView Mix settings.",
            "Drag one tile onto another to swap them, or tap Edit to reorder the list and swipe to delete. The list order fills the layout page by page.",
            "Tap Add empty slot to preserve an intentional gap. Select the empty tile to configure what it displays."
          ]],
          ["Three video fill modes", [
            "Default preserves the complete image and adds black bars when the aspect ratios differ.",
            "Enlarge to fill preserves the aspect ratio and enlarges the picture to fill the tile, trimming the edges that extend beyond it.",
            "Stretch to fill fills the tile without cropping but may widen or compress the image. Set the mode as the global default under Settings → Black bars, or temporarily override it for individual equipment or channels."
          ]],
          ["Custom watermarks", [
            "Open Watermark, enable Show watermark, and choose Device name, Camera name, or IP address.",
            "Adjust position, opacity, colour, text size, and the System, Rounded, Monospaced, or Serif font.",
            "Legibility offers Shadow, Outline, Backdrop, or None. Use the light and dark previews to confirm that the watermark remains readable on day and night footage."
          ]],
          ["Pictures, clocks, labels, and controls", [
            "Use Add empty slot in Arrange, then select that tile to open its slot page (titled Slot 1, Slot 2, and so on), where Shows chooses Empty, Image, Control, Clock, or Label.",
            "Image can use a photo or a new picture. Clock can show the date, seconds, and 12- or 24-hour time. Label supports custom text, an SF Symbol, and colour.",
            "Control creates HTTP Webhook buttons from the Gate / Shutter, Garage Door, Light, Door Lock, Curtain / Blind, Scene / Automation, Alarm / Siren, Fan, Smart Plug, Air Conditioner, and Custom templates. Sensitive actions such as opening or unlocking can require confirmation.",
            "Supported image and slot settings can move with an encrypted backup. You remain responsible for creating and securing every webhook endpoint."
          ]]
        ]],
        ["viewing", "03", "Live viewing and recording playback", "Single-camera viewing can prioritize clarity and interaction; multi-camera walls can prioritize device load and bandwidth.", [
          ["Single and multi-camera quality", [
            "Go to Settings → Default quality and set separate HD or SD defaults for Single camera and Multiple cameras. These defaults apply to device screens only: the device page and Live walls, a device's full-screen wall, and a single camera opened from a device.",
            "When the equipment reports main- and sub-stream switching, the single-channel control bar displays SD and HD choices.",
            "LiveView Mix does not use these defaults: its multi-camera wall plays each channel at the quality assigned to it in the channel list, one by one or with All SD or All HD. Lower quality often reduces network and device load when many tiles play at once.",
            "Opening a single camera from LiveView Mix, full screen or close-up, always starts in HD. The on-screen SD/HD button switches for that viewing only and changes no setting."
          ]],
          ["Zoom and landscape viewing", [
            "Pinch to zoom in the single-channel view, then drag the enlarged picture to inspect another area.",
            "Double-tap to jump to 2.5× zoom, and double-tap again to return to the complete picture.",
            "Rotate the device to landscape to hide the navigation, controls, and tab bar so the video can use as much of the display as possible."
          ]],
          ["Snapshots and sharing", [
            "Tap Snapshot in the single-channel control bar to ask the equipment for its current image.",
            "After the image arrives, Cam Hub opens a preview. Tap Share to use the system share sheet.",
            "A snapshot may contain people, addresses, timestamps, or other sensitive information. Check the image, recipient, and local requirements before sending it."
          ]],
          ["Date, timeline, and recording types", [
            "Choose a date below the channel view. Cam Hub asks the equipment for recordings from that day.",
            "Recordings can switch between Continuous and Events. Drag or zoom the timeline until the centre cursor reaches the desired time, or select a segment from the list.",
            "Playback displays PLAYBACK and the equipment time. Tap Back to Live to return to the live stream. Some equipment downloads a clip before opening it in the system player."
          ]]
        ], 'Availability notice: live streaming, snapshots, <span class="keep-phrase">main/sub-stream selection</span>, recording search, <span class="keep-phrase">Continuous/Events classification</span>, timeline seeking, and playback all depend on the capabilities actually reported by the camera or recorder and the permissions granted to the signed-in equipment account.'],
        ["backup", "04", "Encrypted backup and camera sharing", "iCloud backup and restore no longer use a PIN. When sharing cameras, you can choose whether to lock the sharing code with a six-digit PIN.", [
          ["Local password protection", [
            "After equipment is added, its password is stored in Apple Keychain. The equipment name, address, ports, channels, and app settings remain in device data.",
            "Cam Hub uses this information only for connections, recording searches, snapshots, backups, and transfers that you request.",
            "Delete All Data removes local equipment data and saved passwords. Removing the app can also make configuration that was never backed up unrecoverable."
          ]],
          ["Encrypted iCloud backup without a PIN", [
            "Go to Settings → Back Up to iCloud, choose My Backup (for iPhone and iPad) or Apple TV at the top of the page, and tap Back Up Now without setting a PIN.",
            "The backup includes supported equipment, credentials, channels, LiveView Mix, and app settings. Cam Hub encrypts it before saving it to your private iCloud.",
            "Confirm that Current Backup shows the new time and equipment count."
          ]],
          ["Restore from iCloud", [
            "Open Settings → Restore from iCloud and select the backup to continue. iPhone, iPad, and Apple TV do not require PIN verification.",
            "Use the same app version when possible and confirm that the Apple Account containing the backup is signed in. Backups from an older version may need to be recreated before they appear.",
            "Restore is subject to the current plan limits. Afterwards, verify every equipment address, channel, and LiveView Mix against the current network."
          ]],
          ["Share cameras with an optional PIN", [
            "In Settings, open Export Cameras (in the Share Cameras section), select the cameras, and create an encrypted sharing code. Choose whether to turn on Lock with a PIN.",
            "If Lock with a PIN is on, enter six digits. The recipient must pass PIN verification when importing or restoring the shared cameras. Without a PIN, the complete code imports directly.",
            "The import includes equipment and credentials and is subject to destination plan limits. Send the complete code and PIN only to a trusted recipient; never post them in a public chat, ticket, or website."
          ]]
        ]],
        ["preferences", "05", "Display, streaming, and data controls", "Tune app behaviour for your network and device, and handle preferences, local data, and iCloud backup separately when resetting.", [
          ["Hide offline cameras", [
            "Enable Settings → Hide offline cameras to remove cameras with no signal from Live and live monitoring walls.",
            "They remain in the Devices channel list in a dimmed state, so they are not mistaken for deleted cameras and can reappear when their signal returns."
          ]],
          ["Keep cameras connected between pages", [
            "Go to Settings → LiveView Mix and find Keep cameras connected between pages under Paging; it matters most for equipment that takes longer to reconnect.",
            "When enabled, channels remain connected after scrolling away and resume faster when revisited. This continuously uses network, power, and system resources, so leave it off when immediate resume is not needed."
          ]],
          ["Choose what opens on launch", [
            "Go to Settings → Open on launch, in the LiveView Mix section.",
            "Last viewed returns to the previous selection, LiveView Mix opens the cross-equipment wall, LiveView Mix Full Screen opens that wall full screen, and an individual equipment entry opens that device.",
            "If the selected equipment has been deleted or LiveView Mix has not been configured, the app returns to an available screen instead of preserving an invalid destination."
          ]],
          ["Plans and visible cameras", [
            "Settings → Plans shows the current camera and recorder plan and its usage limits.",
            "When not every channel is unlocked, Choose which cameras show assigns the available slots. The list is unnecessary after the app is fully unlocked.",
            "Purchases and Restore Purchases follow the status provided by Apple. A plan does not change the protocols, permissions, or playback features supplied by the camera itself."
          ]],
          ["Reset and delete separately", [
            "Restore Default Settings resets language, quality, LiveView Mix, and other preferences while keeping added equipment.",
            "Delete All Data removes local equipment, cameras, and Keychain passwords. It does not affect iCloud backups or subscriptions.",
            "Delete iCloud Backup removes the encrypted cloud backup without changing equipment and settings on the current device. When iCloud is unavailable, it may only clear locally displayed backup state.",
            "Before an irreversible deletion, confirm that iCloud has synchronized and that the backup version can be restored on the destination device."
          ]]
        ]],
        ["tv-control", "06", "Apple TV and webhook controls", "Move the monitoring wall to the television and add HTTP control buttons that connect to endpoints you manage.", [
          ["Monitor on Apple TV", [
            "The tvOS app includes LiveView Mix, per-equipment camera walls, full-screen single-camera viewing, and a recording timeline, all designed for focus-based Siri Remote navigation.",
            "Dense layouts are well suited to a large display. Cameras and webhook buttons can be selected directly on the monitoring wall without leaving the current view first.",
            "Live streaming, playback, main/sub-stream selection, and channel features still depend on the capabilities reported by the equipment, account permissions, codec, and network conditions."
          ]],
          ["Transfer setup from iPhone or iPad", [
            "On iPhone or iPad, open Settings → Back Up to iCloud, choose Apple TV as the destination, and create a dedicated encrypted backup without setting a PIN.",
            "Sign in to the same Apple Account on Apple TV, open Restore from iCloud, select the backup, and restore it directly.",
            "Apple TV restores only the dedicated Apple TV backup. Afterwards, verify equipment addresses, channels, and LiveView Mix against the television's current network."
          ]],
          ["Build a webhook control panel", [
            "In LiveView Mix settings, open Arrange the wall, add an empty slot, and set Shows to Control for that slot.",
            "Choose the Gate / Shutter, Garage Door, Light, Door Lock, Curtain / Blind, Scene / Automation, Alarm / Siren, Fan, Smart Plug, Air Conditioner, or Custom template. Every button can have its own icon, label, and Confirm before firing setting; the panel has its own title and colour.",
            "Each button can send GET, POST, PUT, or DELETE to an HTTP or HTTPS endpoint you specify, with optional headers, Content-Type, and JSON body."
          ]],
          ["Run controls from the monitoring wall", [
            "Tap a button on iPhone or iPad. On Apple TV, move focus with the remote and press to run it. The panel reports sending, success, or failure in place.",
            "Use confirmation for opening, unlocking, alarm, and other hard-to-reverse actions, and expose only narrowly scoped endpoints for the required purpose.",
            "Supported control-panel settings move with encrypted backups. You remain responsible for webhook endpoints, credentials, network access, and the safety of connected physical equipment."
          ]]
        ], "Security notice: webhook buttons call the network endpoints you specify. Cam Hub does not validate the security of endpoints, access controls, locks, alarms, or other physical equipment. Restrict endpoint permissions, protect credentials, and require confirmation for hard-to-reverse actions."]
      ],
      note: "Cam Hub does not bypass equipment access controls. Features vary by model, firmware, protocol implementation, account permissions, codec, and network conditions.",
      plans: {
        title: "Plans and limits",
        summary: "Cam Hub includes a free allowance. Camera plans and NVR plans each raise a different limit.",
        caption: "Plans and what each one unlocks",
        columns: ["Plan", "Billing", "What it unlocks"],
        rows: [
          ["Free", "None", "At most 2 enabled channels in the whole app (standalone cameras and recorder channels count together) and at most 1 recorder."],
          ["Camera plans", "Yearly", "Raise the number of standalone cameras you can enable to 8 (<span class='keep-phrase'>Cam Home</span>), 16 (<span class='keep-phrase'>Cam Plus</span>) or unlimited (<span class='keep-phrase'>Cam Max</span>)."],
          ["NVR plans", "Monthly", "Raise the number of recorders to 2 (<span class='keep-phrase'>NVR Starter</span>), 4 (<span class='keep-phrase'>NVR Pro</span>) or unlimited (<span class='keep-phrase'>NVR Max</span>), and every channel of those recorders can be used."]
        ],
        notes: [
          ["Two independent kinds", "Camera plans and NVR plans are independent and can be combined. A camera plan does not raise the recorder allowance, and an NVR plan does not raise the standalone-camera limit. Prices are shown in the app."],
          ["Example", "With <span class='keep-phrase'>Cam Plus</span> and <span class='keep-phrase'>NVR Pro</span>: 4 recorders with all their channels and up to 16 standalone cameras."]
        ],
        more: "See the full rules and more examples in the manual"
      }
    },
    support: {
      documentTitle: "Cam Hub — Support and Compatibility",
      topline: "Support and compatibility",
      eyebrow: "SUPPORT",
      title: "Support and compatibility",
      summary: "Connection issues are usually related to protocols, permissions, ports, or network configuration. Here is where to start checking.",
      meta: [["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "Cam Hub"], ["Languages", shared.supportedLanguages]],
      sections: [
        ["Compatibility", ["Cam Hub supports ONVIF and RTSP-based viewing and has been tested with selected Hikvision, Dahua, and Synology devices or systems. Compatibility varies by model, firmware, account permissions, stream format, and network configuration.", "Some equipment requires ONVIF, RTSP, or another local service to be enabled in its administration interface. Compatibility statements do not imply affiliation, sponsorship, or endorsement by the equipment vendor."], "compatibility"],
        ["Before reporting a connection problem", ["Confirm that the camera or recorder is online and reachable from your Apple device.", "Verify the equipment address, HTTP port, RTSP port, username, and password.", "Enable ONVIF or the required local service in the equipment settings when applicable.", "Use an account that has permission to view the selected channels and recordings.", "Try the camera sub-stream when the main-stream codec, resolution, or bandwidth is not compatible."]],
        ["When contacting support", ["Include the app version, Apple device, and operating system version.", "Include the camera or recorder model and firmware version.", "Describe the connection method, exact steps, and complete error message.", "Never send us your camera password, camera-sharing PIN, complete sharing code, or public connection address."]],
        ["Common limitations", ["ONVIF and RTSP implementations vary across vendors, models, and firmware. Supporting a protocol does not mean every optional feature is available.", "Remote access requires you to configure and secure an appropriate VPN, router, or equipment remote-access method. Cam Hub does not automatically open router ports.", "Recording search and playback require equipment support and an account with the relevant permissions."]]
      ]
    },
    privacy: {
      documentTitle: "Cam Hub — Privacy Policy",
      topline: "Privacy policy",
      eyebrow: "PRIVACY POLICY",
      title: "Privacy Policy",
      summary: "Cam Hub is designed around device-side processing and user control. It does not require a service account or include third-party advertising tracking.",
      meta: [["Effective date", "October 29, 2026"], ["App", "Cam Hub"], ["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["Overview", ["Cam Hub does not require you to create a Cam Hub service account and does not include third-party advertising or advertising tracking. The app is designed to connect to cameras and recorders that you configure.", "If you add YouTube or Twitch streams, they are played by those services’ own players, which may show their own ads and receive information from your device; see “YouTube and Twitch streams” below."]],
        ["Equipment information and credentials", ["Camera and recorder names, addresses, ports, usernames, channel information, and app settings are stored on your device. Passwords are stored in Apple Keychain. Cam Hub uses this information only to perform the connections and actions you request."]],
        ["Camera connections and media", ["When you view live or recorded video, the app connects to the equipment address you provided. Your equipment, network provider, VPN provider, DNS provider, or any remote endpoint you choose may process connection information under its own policies. Cam Hub does not use camera video for advertising or behavioral profiling."]],
        ["YouTube and Twitch streams", ["If you add a YouTube live stream or channel, or a Twitch channel, Cam Hub plays it with that service’s own embedded player: YouTube’s player (YouTube API Services) or Twitch’s player. Before the first stream from either service plays, the app asks you to agree to that service’s terms. If you never add such a stream, this section does not apply to you.", "The player is loaded from YouTube or Twitch and connects directly to their servers. While it plays, the service receives your IP address and information about your device and browser, and may use cookies or similar technologies, measure playback, and show ads, as described in the Google Privacy Policy (YouTube) or the Twitch Privacy Notice (Twitch), linked below. Cam Hub keeps the player’s cookies and stored data only while the app is running and does not receive this information.", "Cam Hub stores only the links and channel names you add, on your device, and in a sharing code or iCloud backup if you create one. Deleting the stream in the app removes them.", "<a href=\"https://policies.google.com/privacy\">Google Privacy Policy</a>", "<a href=\"https://www.twitch.tv/p/legal/privacy-notice/\">Twitch Privacy Notice</a>"]],
        ["Webhook control panels and third-party endpoints", ["You can create LiveView Mix control buttons by configuring an HTTP method, an HTTP or HTTPS endpoint URL, custom headers, and a request body. These settings may contain Authorization tokens or other sensitive data. They are stored in the LiveView Mix configuration on your device and may be included in an encrypted iCloud backup that you choose to create.", "Only when you tap a button does the app send the request directly from your device to the endpoint you specified, such as Home Assistant, Node-RED, or another third-party service. That endpoint and network providers may process your source IP address, headers, and request body under their own policies. The Cam Hub developer does not choose, control, or receive data sent to those endpoints. HTTP is not encrypted in transit; use HTTPS for sensitive data and review the recipient’s privacy and security practices."]],
        ["Local network access and scanning", ["Cam Hub requests Local Network permission to connect directly to cameras and recorders. When you start a scan in the Tools tab, the app probes the subnet you select and common camera service ports, and may read responding equipment addresses, open ports, and HTTP server names to help identify equipment.", "A scan starts only when you request it. Results are processed on your device and are not sent to the Cam Hub developer."]],
        ["Device report (experimental)", ["If adding a camera or recorder fails, Cam Hub offers an optional, experimental device report to help the developer understand why. It is offered only after an attempt to add equipment has failed. It starts only when you tap “Send details to the developer” and have accepted the notice shown before first use, and it runs only while its screen is open. You can stop it at any time.", "While it runs, your Apple device sends read-only requests directly to the equipment address you entered: to the ports you entered and, for equipment on your local network, to common camera ports. The requests check which ports answer, read the equipment’s model, firmware, and supported protocols (such as ISAPI, ONVIF, and RTSP), and briefly test whether a video stream delivers data. They change nothing on the equipment, and none of them goes to the developer or to any other server.", "The requests sign in with the username and password you entered, as adding the equipment does. If the failed attempt was itself a rejected sign-in, the report sends no sign-in at all. Failed sign-ins are counted, and may be logged, by the equipment.", "The report contains: the app version, iOS version, Apple device model, and language settings; the connection mode you chose and the error the app showed; the equipment address with its last number hidden (an address on the internet is left out); the ports you entered and the ports that answered; brand, model, firmware, and supported protocols as the equipment reports them; status codes and short excerpts of the equipment’s answers; how your Apple device is connected (for example, Wi-Fi, cellular, or VPN); and counts and sizes from the test video stream, never pictures.", "Before anything is shown or saved, an automatic filter replaces passwords, usernames, tokens, cookies, serial numbers, MAC addresses, public IP addresses, host names, email addresses, equipment and channel names, Wi-Fi network names, phone numbers, and long keys or identifiers with visible placeholders. Web page text is not kept. The filter is automatic and not perfect, so please read the report before you send it.", "Nothing is sent to the developer automatically. The report is first shown on screen, where you can switch sections off or close it without sending anything. To send it, you choose “Email to developer”: the report opens in a Mail compose window addressed to the support address, both in the message body and as a text file attachment, and nothing is sent until you tap Send there; you can cancel instead. If Mail is not set up, the report is copied to the clipboard and a pre-addressed message opens in your mail app. You can also copy the report or share it with the iOS share sheet.", "A copied report is kept off Universal Clipboard and expires from the clipboard after 120 seconds.", "Up to five of the most recent reports are kept on your device so that you can send one later. They are excluded from device backups and from the Cam Hub iCloud backup. You can delete them at any time with “Delete saved reports” on the device report screen; the oldest is also deleted when a sixth is saved, and all are removed when you delete the app.", "If you email a report, the developer receives that email and your email address. The report is used to look into the problem you reported and is retained only as needed to respond and maintain necessary support records.", "The device report is experimental and may change or be removed at any time. Sending a report does not guarantee support for your equipment, a reply, or a fix."]],
        ["Photos and camera", ["You can use Apple’s system photo picker to select a specific photo, or grant Camera access to capture a new photo, for an empty LiveView Mix slot. The app receives only the image you select or capture, not your entire photo library. It downsizes and compresses the image and stores it in the LiveView Mix configuration on your device.", "Images remain on your device and are not received or accessed by the Cam Hub developer. Only if you choose to create an encrypted Cam Hub iCloud backup may the images be stored with that backup in your own iCloud for device restoration. You can remove an image in LiveView Mix and change Camera or Photos permissions in system Settings."]],
        ["Location", ["Cam Hub asks for location permission only “While Using the App”. Your location and compass heading are read only while a screen that needs them is open, such as the Speedometer in the Tools tab, which shows your speed and compass heading. The app does not track your location in the background.", "Your location and compass heading are processed on your device to show your speed and direction. They are not stored, not included in backups, and not sent to the Cam Hub developer or any other party. If the Speedometer announces your speed aloud, the announcement is produced by the speech voice built into iOS on your device, and you can turn it off on that screen. You can refuse or withdraw location permission at any time in Settings on your Apple device; the rest of the app keeps working without it."]],
        ["Camera sharing codes", ["You can share a code containing the selected cameras’ or recorders’ addresses, usernames, channel information, and passwords. If you turn on “Include app settings”, the code also carries your app settings, which can include LiveView Mix configuration such as webhook settings that may contain tokens. The code is encrypted with AES-256-GCM, using a key derived with PBKDF2-HMAC-SHA256 (600,000 iterations). When you share, you choose one of three ways to lock it.", "Open (no lock): the key comes from a secret built into Cam Hub, so any compatible version of Cam Hub can open the code. This only keeps the contents from being read at a glance; it does not protect them from anyone who holds both the code and the app.", "Six-digit PIN: the code can be opened only with the PIN you choose. A six-digit PIN has only a million possibilities, so someone who obtains the code could try them all offline on their own computer.", "Complex encryption (password): the code can be opened only with the password you choose. It must be at least eight characters long and can use any letters, numbers, or symbols. Only a long, unique password makes guessing impractical.", "Cam Hub does not send the code, the PIN or the password to the developer, and the developer cannot recover a forgotten PIN or password. Send the PIN or password separately from the code.", "Codes do not expire. Deleting the cameras or the app on the source device does not revoke copies already shared; if a code may have been exposed, change the passwords of the equipment concerned.", "The code is passed on by whichever app you share it with, under that app’s own policies. If you share it as a link to the Cam Hub website, the code follows a “#” in the link, which browsers do not send to the website’s server."]],
        ["Optional iCloud backup", ["If you choose iCloud Backup, the app encrypts supported camera and recorder configuration, credentials, channels, and app settings before placing the backup in your private iCloud key-value storage. Backup and restore on iPhone, iPad, and Apple TV do not use a PIN. The backup is encrypted with a key built into the app, not a password you choose; it relies on the protection of your Apple Account and iCloud.", "Backup time, device count, and site name are stored separately so the app can display backup status. To restore, select an available backup and continue directly."]],
        ["Purchases and subscriptions", ["Purchases and subscriptions are processed by Apple. We do not receive your full payment card or bank information. The app reads purchase status supplied by Apple to unlock the corresponding limits or features."]],
        ["Sharing, retention, deletion, and choices", ["We do not sell personal data. Local configuration remains on your device until you delete the relevant content or remove the app. You can delete equipment, LiveView Mix images, and control settings in the app, delete an iCloud backup separately, and withdraw system permissions in Settings on your Apple device.", "Optional iCloud data is managed through your Apple Account and iCloud services. Information you voluntarily email to support is retained only as needed to respond and maintain necessary support records."]],
        ["Children and policy changes", ["Cam Hub is not directed to children and does not intentionally collect children’s personal information. We may update this policy when app features, laws, or store requirements change. The revised date will be published on this page."]]
      ]
    },
    terms: {
      documentTitle: "Cam Hub — Terms of Use",
      topline: "Terms of use",
      eyebrow: "TERMS OF USE",
      title: "Terms of Use",
      summary: "By using Cam Hub, you agree to these terms and the applicable Apple App Store license and purchase rules.",
      meta: [["Effective date", "October 29, 2026"], ["App", "Cam Hub"], ["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["Apple Standard EULA", ["Cam Hub uses Apple’s Standard End User License Agreement. If these terms conflict with Apple’s applicable EULA or App Store rules, Apple’s applicable terms control.", `<a href="${shared.eulaUrl}">Apple Standard End User License Agreement</a>`]],
        ["Purpose and authorized use", ["Cam Hub is a viewing and management tool for compatible cameras and recorders. You may connect only to equipment and networks that you own, manage, or have explicit authorization to access. You are responsible for complying with applicable privacy, surveillance, recording, workplace, and property laws."]],
        ["Equipment access and security", ["You must provide valid equipment addresses and credentials. Cam Hub does not bypass access controls. You are responsible for securing the equipment, network, accounts, passwords, remote-access configuration, and any exported or shared media."]],
        ["Control buttons and connected equipment", ["LiveView Mix control buttons send a request you configure to an endpoint you choose. Cam Hub does not verify what that endpoint does, does not confirm that the action completed, and cannot guarantee that a request is delivered—a button may fire when you did not intend it, or fail when you did.", "You are responsible for what you connect a button to and for the consequences of it operating. Do not use these buttons where a failed, delayed, duplicated, or accidental action could cause injury, entrapment, property damage, or loss of security—including doors, gates, locks, shutters, and any equipment a person or vehicle can be caught in. Always keep an independent means of operating such equipment."]],
        ["Network scanning", ["The Tools tab probes addresses and ports on a network you select. Scan only networks you own, manage, or are expressly authorized to scan. Scanning without authorization may breach computer-misuse laws, your network operator’s terms, or the policies of your employer or organization."]],
        ["Sharing codes", ["You are responsible for who receives a sharing code and for changing the affected equipment passwords if a code may have been exposed. See the Privacy Policy for the code’s contents, encryption, and lifetime."]],
        ["Compatibility and availability", ["Features vary by equipment model, firmware, protocol implementation, permissions, codec, recording configuration, and network conditions. Compatibility with ONVIF, RTSP, or a named product family does not guarantee that every model or feature will work.", "Support for some brands is derived from published vendor documentation and has not been verified against every model. Cam Hub confirms a working stream path when you add equipment; until then, compatibility is not guaranteed.", "Cam Hub is not an emergency monitoring service and does not guarantee uninterrupted video, recording availability, alert delivery, or security outcomes."]],
        ["Subscriptions and purchases", ["In-app purchases and subscriptions are processed by Apple. Pricing, renewal, cancellation, refunds, and account management follow the information shown by Apple and the settings of your Apple Account. Active entitlements determine the limits or features available in the app.", "If a subscription lapses, channels beyond the free allowance stop streaming; your equipment, names, and settings remain on the device and become available again when an applicable subscription is renewed. Prices and plan contents may change subject to Apple’s notices and applicable law. Any subscription price change takes effect only as Apple indicates for a future renewal."]],
        ["Privacy", ["Data handling is described in the separate Privacy Policy.", `<a href="privacy.html">Cam Hub Privacy Policy</a>`]],
        ["Third-party names and services", ["Hikvision, Dahua, Synology, ONVIF, and other related names are trademarks or identifiers of their respective owners. Cam Hub is independently developed.", "A successful connection means that the equipment and the protocols or functions used by Cam Hub are technically compatible; it does not imply affiliation, partnership, sponsorship, or endorsement by those owners."]],
        ["YouTube and Twitch streams", ["YouTube and Twitch streams are provided by those services, not by the Cam Hub developer, and may stop, change, or become unavailable at any time. By adding or watching them in Cam Hub, you agree to be bound by the YouTube Terms of Service and the Twitch Terms of Service, linked below.", "<a href=\"https://www.youtube.com/t/terms\">YouTube Terms of Service</a>", "<a href=\"https://www.twitch.tv/p/legal/terms-of-service/\">Twitch Terms of Service</a>"]],
        ["No warranty and limitation of liability", ["Cam Hub is provided “as is” and “as available,” without warranty of any kind, in addition to the disclaimers in Apple’s Standard EULA. To the extent permitted by law, the developer is not liable for indirect, incidental, special, or consequential loss, including lost footage, missed events, property loss, or business interruption. Nothing in these terms excludes or limits liability that cannot be excluded or limited by law, restricts mandatory consumer rights, or replaces rights provided by Apple’s terms."]],
        ["Changes", ["We may update these terms when app features, laws, or store requirements change. The revised date will be published on this page."]]
      ]
    },
    guide: {
      documentTitle: "Cam Hub — Operation Manual",
      topline: "Operation manual",
      eyebrow: "OPERATION MANUAL",
      title: "Operation manual",
      summary: "Step-by-step instructions for adding devices, live view and recording playback, LiveView Mix walls, sharing, and backup.",
      tocLabel: "Contents",
      fallbackNotice: "The manual is currently available in Traditional Chinese and English. The English version is shown here.",
      loading: "Loading the manual…",
      loadError: "The manual could not be loaded. Check your connection and try again.",
      unavailable: "The manual is not available yet.",
      retry: "Try again",
      toTop: "Back to top",
      prevChapter: "Previous chapter",
      nextChapter: "Next chapter"
    }
  }
};

Object.assign(translations, globalThis.CamHubAdditionalTranslations || {});

function productWikiShape(product) {
  if (!Array.isArray(product?.wiki)) return null;
  return product.wiki.map(([id, , title, summary, topics, warning]) => ({
    id,
    hasTitle: Boolean(title),
    hasSummary: Boolean(summary),
    hasWarning: Boolean(warning),
    steps: Array.isArray(topics)
      ? topics.map(([topicTitle, body]) => ({
          hasTitle: Boolean(topicTitle),
          count: Array.isArray(body) ? body.filter(Boolean).length : 0
        }))
      : []
  }));
}

const completeProductWikiShape = JSON.stringify(productWikiShape(translations["zh-Hant"].product));

function hasCompleteProductTranslation(product) {
  return Boolean(
    product?.documentTitle &&
    product?.topline &&
    product?.eyebrow &&
    product?.title &&
    product?.summary &&
    product?.wikiLabel &&
    product?.note &&
    JSON.stringify(productWikiShape(product)) === completeProductWikiShape
  );
}

function productPageDataWithEnglishFallback(product) {
  if (hasCompleteProductTranslation(product)) return product;

  const englishProduct = translations.en.product;
  const localizedChapters = new Map((product?.wiki || []).map((chapter) => [chapter[0], chapter]));
  return {
    ...englishProduct,
    ...product,
    topicLanguage: "en",
    wiki: englishProduct.wiki.map(([id, number, englishTitle, englishSummary, englishTopics, englishWarning]) => {
      const localized = localizedChapters.get(id);
      return [
        id,
        localized?.[1] || number,
        localized?.[2] || englishTitle,
        localized?.[3] || englishSummary,
        englishTopics,
        localized?.[5] || englishWarning
      ];
    })
  };
}

const languageChoices = [
  ["en", "English"],
  ["zh-Hant", "繁體中文"],
  ["zh-Hans", "简体中文"],
  ["ja", "日本語"],
  ["ko", "한국어"],
  ["de", "Deutsch"],
  ["es", "Español"],
  ["es-MX", "Español (México)"],
  ["fr", "Français"],
  ["ar", "العربية"]
];

const page = document.body.dataset.page || "home";
const languageSelect = document.getElementById("languageSelect");
const themeSelect = document.getElementById("themeSelect");
const menuButton = document.querySelector(".menu-button");
const siteControls = document.getElementById("site-controls");

languageSelect.innerHTML = languageChoices
  .map(([value, label]) => `<option value="${value}">${label}</option>`)
  .join("");

function preferredLanguage() {
  const stored = localStorage.getItem("camHubSiteLanguage");
  const isManual = localStorage.getItem("camHubSiteLanguageManual") === "1";
  if (isManual && stored && translations[stored]) return stored;

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
  return supportedLanguageForPreferences(languages);
}

function preferredTheme() {
  const stored = localStorage.getItem("camHubSiteTheme");
  return ["auto", "light", "dark"].includes(stored) ? stored : "auto";
}

function applyTheme(theme) {
  if (theme === "auto") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.dataset.theme = theme;
  themeSelect.value = theme;
  localStorage.setItem("camHubSiteTheme", theme);
}

function renderMeta(items) {
  return `<div class="meta">${items.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>`;
}

// Best-effort region of the visitor, without a network call, an IP lookup, or
// a permission prompt: the browser's own time zone, with the language tag as a
// fallback. Only used to hide clauses about region-locked features from people
// who cannot reach them — never to unlock anything.
function visitorRegion() {
  try {
    if (Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Taipei") return "TW";
  } catch (error) {
    // Older browsers without resolvedOptions fall through to the language tag.
  }
  const language = (navigator.language || "").toLowerCase();
  if (language === "zh-tw" || language.endsWith("-tw")) return "TW";
  return "";
}

function renderSections(sections) {
  const region = visitorRegion();
  return sections.filter(([, , , onlyRegion]) => !onlyRegion || onlyRegion === region)
    .map(([title, body, id]) => {
    const list = body.length > 2;
    const content = list
      ? `<ul>${body.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : body.map((item) => `<p>${item}</p>`).join("");
    return `<section${id ? ` id="${id}"` : ""}><h2>${title}</h2>${content}</section>`;
  }).join("");
}

function renderPlansChapter(plans, number) {
  const [planHead, billingHead, unlocksHead] = plans.columns;
  return `<article class="wiki-chapter plans-chapter" id="wiki-plans">
        <header class="wiki-chapter-head">
          <span class="wiki-chapter-number">${number}</span>
          <div><h2>${plans.title}</h2><p>${plans.summary}</p></div>
        </header>
        <div class="plans-table-wrap">
          <table class="plans-table" role="table">
            <caption class="sr-only">${plans.caption}</caption>
            <thead role="rowgroup"><tr role="row"><th scope="col" role="columnheader">${planHead}</th><th scope="col" role="columnheader">${billingHead}</th><th scope="col" role="columnheader">${unlocksHead}</th></tr></thead>
            <tbody role="rowgroup">${plans.rows.map(([plan, billing, unlocks]) => `<tr role="row"><th scope="row" role="rowheader">${plan}</th><td role="cell" class="plans-billing">${billing}</td><td role="cell">${unlocks}</td></tr>`).join("")}</tbody>
          </table>
        </div>
        <div class="wiki-topics plans-notes">${plans.notes.map(([noteTitle, noteText], noteIndex) => `
          <section class="wiki-topic">
            <span>${number}.${String(noteIndex + 1).padStart(2, "0")}</span>
            <h3>${noteTitle}</h3>
            <p>${noteText}</p>
          </section>`).join("")}</div>
        <p class="manual-link plans-more"><a href="guide.html#plans">${plans.more}</a></p>
      </article>`;
}

function renderProduct(data) {
  const productVisuals = [
    ["assets/app-add-device.jpg", "DEVICE SETUP", "devices"],
    ["assets/app-channels.jpg", "CHANNEL SELECTION", "channels"],
    ["assets/app-liveview.jpg", "LIVEVIEW MIX", "mix"],
    ["assets/app-playback.jpg", "PLAYBACK", "playback"],
    ["assets/app-backup.jpg", "ENCRYPTED BACKUP", "backup"],
    ["assets/app-layouts.jpg", "LIVEVIEW LAYOUTS", "compatibility"]
  ];

  const wikiVisuals = {
    devices: [
      ["assets/app-add-device.jpg", "ADD DEVICE"],
      ["assets/app-channels.jpg", "CHANNEL MANAGEMENT"]
    ],
    mix: [
      ["assets/app-liveview.jpg", "LIVEVIEW MIX"],
      ["assets/app-layouts.jpg", "17 FULL-SCREEN LAYOUTS"]
    ],
    viewing: [["assets/app-playback.jpg", "LIVE & PLAYBACK"]],
    backup: [["assets/app-backup.jpg", "ENCRYPTED ICLOUD BACKUP"]],
    preferences: [["assets/app-settings.jpg", "APP SETTINGS"]],
    "tv-control": [["assets/app-apple-tv.jpg", "APPLE TV LIVEVIEW MIX"]]
  };

  if (data.wiki) {
    const chapters = data.wiki.map(([id, number, title, summary, topics, warning]) => {
      const visuals = wikiVisuals[id] || [];
      return `<article class="wiki-chapter" id="wiki-${id}">
        <header class="wiki-chapter-head">
          <span class="wiki-chapter-number">${number}</span>
          <div><h2>${title}</h2><p>${summary}</p></div>
        </header>
        <div class="wiki-media-grid wiki-media-${visuals.length}">${visuals.map(([image, label]) => `
          <figure class="wiki-media">
            <div class="wiki-screen"><img src="${image}" alt="" loading="lazy" decoding="async"></div>
            <figcaption>${label}</figcaption>
          </figure>`).join("")}</div>
        ${warning ? `<aside class="wiki-warning"><strong>!</strong><p>${warning}</p></aside>` : ""}
        <div class="wiki-topics"${data.topicLanguage ? ` lang="${data.topicLanguage}"` : ""}>${topics.map(([topicTitle, body], topicIndex) => `
          <section class="wiki-topic">
            <span>${number}.${String(topicIndex + 1).padStart(2, "0")}</span>
            <h3>${topicTitle}</h3>
            ${Array.isArray(body)
              ? `<ol>${body.map((step) => `<li>${step}</li>`).join("")}</ol>`
              : `<p>${body}</p>`}
          </section>`).join("")}</div>
      </article>`;
    }).join("");

    // Short plans-and-limits summary after the chapters; the full rules live in the manual (guide.html#plans).
    const plans = data.plans || translations.en.product.plans;
    const plansNumber = String(data.wiki.length + 1).padStart(2, "0");

    return `<nav class="wiki-nav" aria-label="${data.wikiLabel}">
      <strong>${data.wikiLabel}</strong>
      <div>${data.wiki.map(([id, number, title]) => `<a href="#wiki-${id}"><span>${number}</span>${title}</a>`).join("")}<a href="#wiki-plans"><span>${plansNumber}</span>${plans.title}</a></div>
    </nav>
    <section class="wiki-content">${chapters}${renderPlansChapter(plans, plansNumber)}</section>
    <aside class="guide-note">${data.note}</aside>`;
  }

  return `<section class="guide-grid">${data.steps.map(([number, title, text], index) => {
    const [image, label, visual] = productVisuals[index];
    return `
    <article class="guide-card guide-card-${visual}">
      <figure class="guide-visual">
        <img src="${image}" alt="" loading="lazy" decoding="async">
        <figcaption>${label}</figcaption>
      </figure>
      <div class="guide-copy"><span class="guide-step-number">${number}</span><h2>${title}</h2><p>${text}</p></div>
    </article>`;
  }).join("")}<aside class="guide-note">${data.note}</aside></section>`;
}

// About the website only (the app has no analytics), so it is not part of the privacy sections that the app bundles.
function renderWebsiteNotice(locale) {
  if (!shared.cloudflareToken || !locale.siteNoticeBody) return "";
  return `<section id="website-statistics"><h2>${locale.siteNoticeTitle}</h2><p>${locale.siteNoticeBody}</p></section>`;
}

function renderPage(data, locale) {
  if (page === "product") return renderProduct(data);
  // The app's Settings screen links here as its "User Manual" entry, so the manual is offered first.
  if (page === "support") return `${renderMeta(data.meta)}<p class="manual-cta"><a class="button primary" href="guide.html">${locale.navGuide}</a></p>${renderSections(data.sections)}`;
  if (page === "privacy") return `${renderMeta(data.meta)}${renderSections(data.sections)}${renderWebsiteNotice(locale)}`;
  if (page === "terms") return `${renderMeta(data.meta)}${renderSections(data.sections)}`;
  return null;
}

function applyPhraseWrapping(language) {
  document.querySelectorAll("wbr[data-phrase-break]").forEach((node) => node.remove());
  document.body.normalize();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.data.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest("script, style, select, option, textarea, .sr-only, .eyebrow, .section-kicker, figcaption, .hero-line, .keep-phrase, .guide-article, .guide-toc")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    node.data = node.data.replaceAll("Cam Hub", "Cam\u00a0Hub").replaceAll("CAM HUB", "CAM\u00a0HUB");
  });

  if (!["zh-Hant", "zh-Hans", "ja", "ko"].includes(language) || !Intl.Segmenter) return;

  const segmenter = new Intl.Segmenter(language, { granularity: "word" });

  textNodes.forEach((node) => {
    const segments = [...segmenter.segment(node.data)].map(({ segment }) => segment);
    if (segments.length < 2) return;
    const fragment = document.createDocumentFragment();
    segments.forEach((segment, index) => {
      fragment.append(document.createTextNode(segment));
      if (index < segments.length - 1) {
        const nextSegment = segments[index + 1];
        if (/^[\/／・→‑–—-]$/.test(segment) || /^[\/／・→‑–—-]$/.test(nextSegment)) return;
        if (/^[、，。；：！？）】》」』〕〉]/.test(nextSegment)) return;
        if (/[（【《「『〔〈]$/.test(segment)) return;
        const breakOpportunity = document.createElement("wbr");
        breakOpportunity.dataset.phraseBreak = "";
        fragment.append(breakOpportunity);
      }
    });
    node.replaceWith(fragment);
  });
}

// ---------------------------------------------------------------------------
// Operation manual (guide.html)
//
// The manual exists in every site language. guide/content.<lang>.html (generated by guide/build.py) holds all
// chapters of one language, but the page never shows them all at once: the file is split into its chapters in an
// inert <template>, and only the chapter being read is inserted into #guide-content. Its pictures and clips are
// requested only when they come near the screen and are released again when they leave it; switching to another
// chapter (or language) releases everything of the old one. The contents list always lists every chapter. The URL
// hash names the chapter or any element inside it, so every older link keeps working; Previous / Next links close
// each chapter; the language switch keeps the chapter and the reading position.
// ---------------------------------------------------------------------------
const guideLanguages = ["zh-Hant", "zh-Hans", "en", "ja", "ko", "de", "es", "es-MX", "fr", "ar"];
// Languages whose manual has pictures and clips of its own (guide/img/<lang>/NAME.jpg, guide/vid/<lang>/NAME.mp4: the
// same screens shot with the app in that language). The files named in the fragments are the English ones; for these
// languages the page asks for the local file first and falls back to the English one when it is missing or fails.
const guideLocalMedia = new Set(["ja"]);
// Files a language folder does not have (known gaps): the English file is used without asking for the local one first.
const guideLocalGaps = { ja: new Set(["backup-icloud.jpg"]) };
const guideEls = page === "guide" ? {
  main: document.querySelector("main.guide"),
  article: document.getElementById("guide-content"),
  layout: document.getElementById("guide-layout"),
  side: document.getElementById("guide-side"),
  toc: document.getElementById("guide-toc"),
  toggle: document.getElementById("guide-toc-toggle"),
  current: document.getElementById("guide-toc-current"),
  notice: document.getElementById("guide-notice"),
  top: document.getElementById("guide-top"),
  sentinel: document.getElementById("guide-sentinel")
} : null;
// data: the parsed manual of the displayed language ({ chapters, byId }); chapter: the one in the document (or null);
// targets: the reading-position targets of that chapter (heading + sub-sections), the only ones with an element.
const guide = { token: 0, requested: "", lang: "", cache: new Map(), data: null, chapter: null, targets: [], active: null, observer: null, media: null, printing: null, hash: "", locale: null, labels: null, firstLoad: true };

// Pictures within GUIDE_NEAR px of the screen are loaded; they are released again once GUIDE_FAR px away.
const GUIDE_NEAR = 800;
const GUIDE_FAR = 1800;
const GUIDE_MAX_PLAYING = 2;
const GUIDE_BLANK = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

function guideManualLanguage(language) {
  return guideLanguages.includes(language) ? language : "en";
}

function guideReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function guideHashId() {
  try {
    return decodeURIComponent(location.hash.slice(1));
  } catch {
    return "";
  }
}

function guideText(node) {
  return node ? (node.textContent || "").replace(/\s+/g, " ").trim() : "";
}

function guideHeadingText(heading) {
  const copy = heading.cloneNode(true);
  copy.querySelectorAll(".num, .tag-new").forEach((node) => node.remove());
  return guideText(copy);
}

// Makes a chapter (still inside the inert template) safe to insert: no picture or clip is requested by the markup
// itself. Pictures start as a same-size empty placeholder (the width/height attributes give each its box) and keep
// their address in data-src; clips keep address and poster in data-*; both are filled in by guideMedia().
function guideLocalPath(path, language) {
  // guide/img/NAME.jpg -> guide/img/<lang>/NAME.jpg (not the illustration parts in guide/img/src/), guide/vid/NAME.mp4 likewise
  if (!guideLocalMedia.has(language)) return path;
  const gaps = guideLocalGaps[language];
  if (gaps && gaps.has(path.slice(path.lastIndexOf("/") + 1))) return path;
  return path.replace(/^(guide\/(?:img|vid)\/)([^/]+)$/, `$1${language}/$2`);
}

function guidePrepare(section, language) {
  section.querySelectorAll("img[src]").forEach((img) => {
    const w = img.getAttribute("width");
    const h = img.getAttribute("height");
    if (w && h) img.style.aspectRatio = `${w} / ${h}`;
    const english = img.getAttribute("src");
    const local = guideLocalPath(english, language);
    img.dataset.src = local;
    if (local !== english) img.dataset.fallback = english;
    img.removeAttribute("loading");
    img.setAttribute("src", GUIDE_BLANK);
  });
  section.querySelectorAll("video[src]").forEach((clip) => {
    const english = clip.getAttribute("src");
    const local = guideLocalPath(english, language);
    clip.dataset.src = local;
    if (local !== english) clip.dataset.fallback = english;
    clip.removeAttribute("src");
    if (clip.hasAttribute("poster")) {
      const englishPoster = clip.getAttribute("poster");
      const localPoster = guideLocalPath(englishPoster, language);
      clip.dataset.poster = localPoster;
      if (localPoster !== englishPoster) clip.dataset.fallbackPoster = englishPoster;
      clip.removeAttribute("poster");
    }
    clip.setAttribute("preload", "none");
  });
  // Short on-screen labels inside table cells stay in one piece; only long ones may wrap (human-eye reading).
  section.querySelectorAll("td span.ui, th span.ui").forEach((label) => {
    const width = [...label.textContent].reduce((sum, ch) => sum + (/[⺀-鿿가-힯＀-￯]/.test(ch) ? 1 : 0.55), 0);
    if (width > 15) label.classList.add("ui-long");
  });
  section.querySelectorAll(".table-wrap").forEach((wrap) => wrap.setAttribute("tabindex", "0"));
}

// Splits the manual into chapters (section.chapter > h2) with their sub-sections: h3 headings that carry an id
// (on the heading or on a wrapper whose first heading it is) and SOP blocks (.sop[id]). Only text is kept: the
// chapter's markup, its title and the ids inside it (for deep links). The template's DOM is dropped afterwards.
function guideParse(markup, language) {
  const template = document.createElement("template");
  template.innerHTML = markup; // generated from this repository's own fragments by guide/build.py
  const chapters = [];
  const byId = new Map();
  template.content.querySelectorAll("section.chapter[id]").forEach((section) => {
    const heading = section.querySelector(":scope > h2");
    if (!heading) return;
    const chapter = { id: section.id, num: guideText(heading.querySelector(".num")), title: guideHeadingText(heading), subs: [], targets: [], html: "" };
    section.querySelectorAll(".sop[id], h3").forEach((element) => {
      if (element.matches("h3")) {
        if (element.closest(".sop")) return;
        const wrapper = element.parentElement;
        const holder = element.id ? element : (wrapper !== section && wrapper.id && wrapper.querySelector("h3") === element ? wrapper : null);
        if (holder) chapter.subs.push({ id: holder.id, title: guideHeadingText(element) });
        return;
      }
      const header = element.querySelector("header");
      const title = (header || element).querySelector("h3, h4");
      chapter.subs.push({ id: element.id, title: title ? guideHeadingText(title) : element.id, code: guideText(header && header.querySelector(".id")) });
    });
    byId.set(section.id, chapter);
    section.querySelectorAll("[id]").forEach((element) => { if (!byId.has(element.id)) byId.set(element.id, chapter); });
    guidePrepare(section, language);
    chapter.html = section.outerHTML;
    chapters.push(chapter);
  });
  return { chapters, byId };
}

function guideFetch(manualLanguage) {
  if (!guide.cache.has(manualLanguage)) {
    const request = fetch(`guide/content.${manualLanguage}.html`, { cache: "no-cache" }).then((response) => {
      if (!response.ok) throw Object.assign(new Error(`HTTP ${response.status}`), { status: response.status });
      return response.text();
    }).then((markup) => {
      const data = guideParse(markup, manualLanguage);
      if (!data.chapters.length) throw Object.assign(new Error("no chapters"), { status: 404 });
      return data;
    });
    request.catch(() => guide.cache.delete(manualLanguage)); // so that "Try again" fetches it again
    guide.cache.set(manualLanguage, request);
  }
  return guide.cache.get(manualLanguage);
}

function guideTocLink(id, title, badgeClass, badge) {
  const link = document.createElement("a");
  link.href = `#${id}`;
  if (badge) {
    const mark = document.createElement("span");
    mark.className = badgeClass;
    mark.textContent = badge;
    link.append(mark);
  } else if (badgeClass === "toc-num") {
    link.classList.add("no-num"); // an unnumbered chapter lines up with the numbered ones
  }
  const label = document.createElement("span");
  label.textContent = title;
  link.append(label);
  return link;
}

// The contents list covers every chapter; the sub-sections of the chapter being read unfold (CSS: li.is-current).
function guideBuildToc(chapters) {
  const list = document.createElement("ol");
  guide.targets = [];
  guide.active = null;
  chapters.forEach((chapter) => {
    const item = document.createElement("li");
    const link = guideTocLink(chapter.id, chapter.title, "toc-num", chapter.num);
    item.append(link);
    chapter.targets = [{ id: chapter.id, title: chapter.num ? `${chapter.num}. ${chapter.title}` : chapter.title, el: null, link, item }];
    if (chapter.subs.length) {
      const sub = document.createElement("ol");
      chapter.subs.forEach((entry) => {
        const subItem = document.createElement("li");
        const subLink = guideTocLink(entry.id, entry.title, "toc-code", entry.code);
        subItem.append(subLink);
        sub.append(subItem);
        chapter.targets.push({ id: entry.id, title: entry.title, el: null, link: subLink, item });
      });
      item.append(sub);
    }
    list.append(item);
  });
  guideEls.toc.replaceChildren(list);
  guideEls.layout.classList.toggle("has-toc", chapters.length > 0);
}

function guideSetActive(target) {
  if (!target || guide.active === target) return;
  const previous = guide.active;
  if (previous) {
    previous.link.classList.remove("is-active");
    previous.link.removeAttribute("aria-current");
    previous.item.classList.remove("is-current");
    previous.item.firstElementChild.classList.remove("is-parent");
  }
  guide.active = target;
  target.link.classList.add("is-active");
  target.link.setAttribute("aria-current", "location");
  target.item.classList.add("is-current");
  if (target.item.firstElementChild !== target.link) target.item.firstElementChild.classList.add("is-parent");
  guideEls.current.textContent = target.title;
  guideRevealInToc(target.link);
}

function guideRevealInToc(link) {
  const toc = guideEls.toc;
  if (!toc.getClientRects().length) return;
  const box = toc.getBoundingClientRect();
  const rect = link.getBoundingClientRect();
  if (rect.top < box.top + 8) toc.scrollTop -= box.top + 8 - rect.top;
  else if (rect.bottom > box.bottom - 8) toc.scrollTop += rect.bottom - (box.bottom - 8);
}

// Space taken at the top of the viewport: the sticky site header, plus the contents bar on narrow screens.
function guideOffset() {
  const topbar = document.querySelector(".topbar");
  let offset = topbar ? topbar.getBoundingClientRect().height : 76;
  if (getComputedStyle(guideEls.toggle).display !== "none") offset += guideEls.side.getBoundingClientRect().height;
  return offset + 12;
}

function guideMetrics() {
  const topbar = document.querySelector(".topbar");
  if (topbar) guideEls.main.style.setProperty("--g-topbar", `${topbar.getBoundingClientRect().height}px`);
  guideEls.main.style.setProperty("--g-offset", `${guideOffset()}px`);
}

// The reading line sits just under the sticky header; the section whose top has passed it is "current".
function guideUpdateActive() {
  if (!guide.targets.length) return;
  const line = guideOffset() + 8;
  let current = guide.targets[0];
  for (const target of guide.targets) {
    if (target.el.getBoundingClientRect().top <= line) current = target;
    else break;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) current = guide.targets[guide.targets.length - 1];
  guideSetActive(current);
}

// Every target is watched against a 2px strip at the reading line: it enters or leaves the strip exactly
// when its top edge crosses the line, which is when the current section changes.
function guideObserve() {
  guide.observer?.disconnect();
  guide.observer = null;
  if (!guide.targets.length) return;
  if ("IntersectionObserver" in window) {
    const top = Math.round(guideOffset()) + 6;
    const bottom = Math.max(0, window.innerHeight - top - 2);
    guide.observer = new IntersectionObserver(guideUpdateActive, { rootMargin: `-${top}px 0px -${bottom}px 0px`, threshold: 0 });
    guide.targets.forEach((target) => guide.observer.observe(target.el));
  }
  guideUpdateActive();
}

// Runs fn with the page's smooth scrolling switched off (styles.css sets scroll-behavior: smooth).
function guideInstantly(fn) {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  fn();
  root.style.scrollBehavior = previous;
}

function guideScrollTo(id, smooth) {
  const target = id ? document.getElementById(id) : null;
  if (!target || !guideEls.article.contains(target)) return false;
  const details = target.closest("details");
  if (details && !details.open) details.open = true;
  if (smooth && !guideReducedMotion()) target.scrollIntoView({ behavior: "smooth", block: "start" });
  else guideInstantly(() => target.scrollIntoView({ block: "start" }));
  if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  target.focus({ preventScroll: true });
  return true;
}

// After the first jump, repeat it once if late layout changes moved the target and the reader has not scrolled.
function guideSettle(id) {
  let moved = false;
  const stop = () => { moved = true; };
  ["wheel", "touchstart", "keydown", "mousedown"].forEach((name) => window.addEventListener(name, stop, { once: true, passive: true }));
  window.setTimeout(() => { if (!moved) guideScrollTo(id, false); }, 600);
}

function guideSetToc(open) {
  guideEls.toc.classList.toggle("is-open", open);
  guideEls.toggle.setAttribute("aria-expanded", String(open));
  if (open && guide.active) guideRevealInToc(guide.active.link);
}

// A picture or clip taken from a language folder (guide/img/<lang>/, guide/vid/<lang>/) that is missing or fails to load is
// replaced, once, by the English file named in the fragment; the English file is then retried like any other.
function guideUseFallback(item) {
  if (!item || !item.dataset || !item.dataset.fallback) return false;
  item.dataset.src = item.dataset.fallback;
  delete item.dataset.fallback;
  if (item.tagName === "VIDEO" && item.dataset.fallbackPoster) {
    item.dataset.poster = item.dataset.fallbackPoster;
    delete item.dataset.fallbackPoster;
    if (item.hasAttribute("poster")) item.setAttribute("poster", item.dataset.poster);
  }
  return true;
}

// A picture of another proportion than the English one (a cropped plan page) is shown in its own proportion.
function guideFitPicture(event) {
  const img = event.target;
  if (img && img.tagName === "IMG" && img.dataset.src && img.getAttribute("src") === img.dataset.src && img.naturalWidth > 1 && img.naturalHeight > 1) {
    img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
  }
}

// The pictures and clips of the chapter in the document. Nothing is requested until it comes within GUIDE_NEAR px of
// the screen, and it is released again beyond GUIDE_FAR px (a picture falls back to its empty placeholder, a clip to
// nothing at all). A clip holds its video source only while it is near and plays only while it is on screen (at most
// GUIDE_MAX_PLAYING at a time, never with reduced motion, never in a hidden tab).
function guideMedia(article) {
  const pictures = [...article.querySelectorAll("img[data-src]")];
  const clips = [...article.querySelectorAll("video[data-src]")];
  const reduced = guideReducedMotion();
  const watchers = [];
  const onScreen = new Set();
  const show = (item) => {
    if (item.tagName === "IMG") {
      if (item.getAttribute("src") !== item.dataset.src) item.setAttribute("src", item.dataset.src);
    } else if (item.dataset.poster && item.getAttribute("poster") !== item.dataset.poster) {
      item.setAttribute("poster", item.dataset.poster);
    }
  };
  const hide = (item) => {
    if (item.tagName === "IMG") {
      if (item.getAttribute("src") !== GUIDE_BLANK) item.setAttribute("src", GUIDE_BLANK);
    } else {
      item.removeAttribute("poster");
    }
  };
  const attach = (clip) => { if (!clip.hasAttribute("src")) clip.setAttribute("src", clip.dataset.src); };
  const detach = (clip) => {
    clip.pause();
    if (clip.hasAttribute("src")) {
      clip.removeAttribute("src");
      clip.load(); // with no source this drops the decoder and every decoded frame
    }
  };
  const sync = () => {
    let playing = 0;
    clips.forEach((clip) => {
      if (!reduced && !document.hidden && onScreen.has(clip) && playing < GUIDE_MAX_PLAYING) {
        playing += 1;
        attach(clip);
        clip.play().catch((error) => { if (error && error.name === "NotAllowedError") clip.controls = true; });
      } else if (!clip.paused) {
        clip.pause();
      }
    });
  };
  clips.forEach((clip) => { clip.muted = true; });
  // A picture that fails to load (a dropped connection) is asked for again, twice, while it is still wanted.
  const retry = (event) => {
    const img = event.target;
    if (img && img.tagName === "VIDEO") { // a clip of a language folder that is missing: the English clip instead
      if (img.getAttribute("src") === img.dataset.src && guideUseFallback(img)) {
        img.setAttribute("src", img.dataset.src);
        img.load();
        sync();
      }
      return;
    }
    if (!img || img.tagName !== "IMG" || !img.dataset.src || img.getAttribute("src") !== img.dataset.src) return;
    if (guideUseFallback(img)) { // a picture of a language folder that is missing: the English picture instead
      img.setAttribute("src", img.dataset.src);
      return;
    }
    const attempt = Number(img.dataset.retry || 0);
    if (attempt >= 2) return;
    img.dataset.retry = String(attempt + 1);
    window.setTimeout(() => {
      if (img.isConnected && img.getAttribute("src") === img.dataset.src) {
        img.removeAttribute("src");
        img.setAttribute("src", img.dataset.src);
      }
    }, 1200 * (attempt + 1));
  };
  article.addEventListener("error", retry, true);
  article.addEventListener("load", guideFitPicture, true);
  if ("IntersectionObserver" in window) {
    const near = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) show(entry.target); }), { rootMargin: `${GUIDE_NEAR}px 0px` });
    const far = new IntersectionObserver((entries) => entries.forEach((entry) => { if (!entry.isIntersecting) hide(entry.target); }), { rootMargin: `${GUIDE_FAR}px 0px` });
    [...pictures, ...clips].forEach((item) => { near.observe(item); far.observe(item); });
    watchers.push(near, far);
    if (clips.length) {
      // Source: only while within reach of the screen.
      const reach = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          attach(entry.target);
        } else {
          onScreen.delete(entry.target);
          detach(entry.target);
        }
      }), { rootMargin: "500px 0px" });
      // Playing: only while mostly on screen. Demonstration clips are silent and loop; with reduced motion they
      // stay on their poster and get controls instead.
      const view = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) onScreen.add(entry.target); else onScreen.delete(entry.target); });
        sync();
      }, { threshold: 0.45 });
      clips.forEach((clip) => {
        if (reduced) clip.controls = true;
        reach.observe(clip);
        view.observe(clip);
      });
      watchers.push(reach, view);
      document.addEventListener("visibilitychange", sync);
    }
  } else {
    pictures.forEach(show);
    clips.forEach((clip) => { show(clip); attach(clip); clip.controls = true; });
  }
  return {
    dispose() {
      watchers.forEach((watcher) => watcher.disconnect());
      document.removeEventListener("visibilitychange", sync);
      article.removeEventListener("error", retry, true);
      article.removeEventListener("load", guideFitPicture, true);
      clips.forEach((clip) => { detach(clip); clip.removeAttribute("poster"); });
      pictures.forEach((img) => img.setAttribute("src", GUIDE_BLANK));
    }
  };
}

// Takes the chapter out of the document and releases everything it held.
function guideRelease() {
  guide.observer?.disconnect();
  guide.observer = null;
  guide.media?.dispose();
  guide.media = null;
  guideEls.article.replaceChildren();
  guide.chapter = null;
  guide.targets = [];
}

function guidePagerLink(chapter, kind, label) {
  const link = document.createElement("a");
  link.className = `guide-${kind}`;
  link.rel = kind === "prev" ? "prev" : "next";
  link.href = `#${chapter.id}`;
  const direction = document.createElement("span");
  direction.className = "pager-dir";
  direction.textContent = label;
  const title = document.createElement("span");
  title.className = "pager-title";
  title.textContent = chapter.targets[0].title;
  link.append(direction, title);
  return link;
}

// Previous / Next chapter at the end of the chapter (the arrows follow the reading direction in CSS).
function guideRenderPager() {
  const { article } = guideEls;
  article.querySelector(":scope > .guide-pager")?.remove();
  if (!guide.chapter || !guide.data) return;
  const { chapters } = guide.data;
  const index = chapters.indexOf(guide.chapter);
  const nav = document.createElement("nav");
  nav.className = "guide-pager";
  nav.setAttribute("aria-label", guide.labels.tocLabel);
  if (index > 0) nav.append(guidePagerLink(chapters[index - 1], "prev", guide.labels.prevChapter || "Previous chapter"));
  if (index < chapters.length - 1) nav.append(guidePagerLink(chapters[index + 1], "next", guide.labels.nextChapter || "Next chapter"));
  if (nav.children.length) article.append(nav);
}

// On a phone every table row is shown as a card (see guide.css); the card needs each cell's column name.
function guideTableLabels(root) {
  root.querySelectorAll(".table-wrap table").forEach((table) => {
    const heads = [...table.querySelectorAll("thead th")].map((th) => th.textContent.trim());
    if (!heads.length) return;
    table.querySelectorAll("tbody tr").forEach((tr) => {
      [...tr.children].forEach((cell, i) => { if (cell.tagName === "TD" && heads[i]) cell.dataset.label = heads[i]; });
    });
  });
}

// Puts one chapter into the document (the previous one is released first).
function guideShow(chapter) {
  const { article } = guideEls;
  guideRelease();
  article.innerHTML = chapter.html;
  guideTableLabels(article);
  guide.chapter = chapter;
  chapter.targets.forEach((target) => { target.el = document.getElementById(target.id); });
  guide.targets = chapter.targets.filter((target) => target.el);
  guide.media = guideMedia(article);
  guideRenderPager();
  guideMetrics();
  guideObserve();
}

// Opens the chapter that holds `id` (a chapter, a sub-section or any element inside one; "" = the first chapter)
// and, with scroll, brings that element to the top; an empty id scrolls to the top of the page. `y` restores an
// exact scroll position instead. Returns false when the id is unknown.
function guideOpen(id, { scroll = true, smooth = false, y = null } = {}) {
  const { data } = guide;
  if (!data) return false;
  const chapter = id ? data.byId.get(id) : data.chapters[0];
  if (!chapter) return false;
  const changed = guide.chapter !== chapter;
  if (changed) guideShow(chapter);
  if (typeof y === "number") guideInstantly(() => window.scrollTo(0, y));
  else if (scroll && id) guideScrollTo(id, smooth && !changed);
  else if (scroll) guideInstantly(() => window.scrollTo(0, 0));
  guideUpdateActive();
  return true;
}

function guideShowMessage(text, withRetry) {
  const message = document.createElement("p");
  message.className = "guide-status is-error";
  message.setAttribute("role", "alert");
  message.textContent = text;
  message.lang = guide.locale.htmlLang;
  message.dir = guide.locale.dir || "ltr";
  if (withRetry) {
    message.append(document.createElement("br"));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "guide-button";
    button.textContent = guide.labels.retry;
    button.addEventListener("click", () => guideLoad(guideManualLanguage(languageSelect.value)));
    message.append(button);
  }
  guideEls.article.replaceChildren(message);
  guideEls.article.removeAttribute("aria-busy");
}

// Nothing to show: drop the contents list and say so, with a retry button.
function guideFail(text) {
  guide.requested = "";
  guide.lang = "";
  guide.data = null;
  guideRelease();
  guide.active = null;
  guideEls.toc.replaceChildren();
  guideEls.layout.classList.remove("has-toc");
  guideEls.current.textContent = "";
  guideShowMessage(text, true);
}

async function guideLoad(manualLanguage) {
  const token = ++guide.token;
  guide.requested = manualLanguage;
  const { article, layout } = guideEls;
  // Where the reader is, so that switching language lands on the same chapter and section.
  const keepChapter = guide.chapter ? guide.chapter.id : "";
  const reading = guide.targets.length > 0 && guide.targets[0].el.getBoundingClientRect().top <= guideOffset() + 8;
  const keepSection = reading && guide.active ? guide.active.id : "";
  article.setAttribute("aria-busy", "true");
  let data;
  try {
    data = await guideFetch(manualLanguage);
  } catch (error) {
    if (token === guide.token) guideFail(error.status === 404 ? guide.labels.unavailable : guide.labels.loadError);
    return;
  }
  if (token !== guide.token) return;
  layout.lang = manualLanguage;
  layout.dir = manualLanguage === "ar" ? "rtl" : "ltr";
  guideRelease();
  guide.data = data;
  guide.lang = manualLanguage;
  guideBuildToc(data.chapters);
  article.removeAttribute("aria-busy");
  const first = guide.firstLoad;
  guide.firstLoad = false;
  let id = "";
  let scroll = false;
  if (first || !keepChapter) { // a first load, or a retry after a failure: the address says where to be
    id = guideHashId();
    scroll = data.byId.has(id);
    if (!scroll) id = "";
  } else if (keepSection && data.byId.has(keepSection)) {
    id = keepSection;
    scroll = true;
  } else if (keepChapter && data.byId.has(keepChapter)) {
    id = keepChapter;
  }
  guideOpen(id, { scroll });
  if (first) {
    if (guideRestoreScroll()) guideUpdateActive();
    else if (scroll) guideSettle(id);
  }
}

// A reload (or back/forward) cannot restore the scroll position natively because the text arrives later.
function guideRestoreScroll() {
  try {
    const navigation = performance.getEntriesByType("navigation")[0];
    const saved = JSON.parse(sessionStorage.getItem("camHubGuideScroll") || "null");
    if (navigation && ["reload", "back_forward"].includes(navigation.type) && saved && saved.href === location.href && saved.y > 0) {
      guideInstantly(() => window.scrollTo(0, saved.y));
      return true;
    }
  } catch {
    // Storage can be unavailable (private windows); the manual then opens at the hash or at the top.
  }
  return false;
}

// Print: the whole manual, every picture loaded and every troubleshooting entry expanded; afterwards the chapter
// that was on screen comes back. (Pictures of the other chapters are fetched only for printing.)
function guidePrintError(event) {
  const img = event.target;
  if (img && img.tagName === "IMG" && img.dataset.src && img.getAttribute("src") === img.dataset.src && guideUseFallback(img)) img.setAttribute("src", img.dataset.src);
}

function guidePrintStart() {
  if (!guide.data || guide.printing) return;
  const { article } = guideEls;
  guide.printing = { id: guide.chapter ? guide.chapter.id : "", y: window.scrollY };
  guideRelease();
  article.addEventListener("error", guidePrintError, true); // pictures that are missing in the language folder: the English ones
  article.addEventListener("load", guideFitPicture, true);
  article.innerHTML = guide.data.chapters.map((chapter) => chapter.html).join("");
  guideTableLabels(article);
  article.querySelectorAll("img[data-src]").forEach((img) => img.setAttribute("src", img.dataset.src));
  article.querySelectorAll("video[data-poster]").forEach((clip) => clip.setAttribute("poster", clip.dataset.poster));
  article.querySelectorAll("details:not([open])").forEach((details) => { details.open = true; });
}

function guidePrintEnd() {
  if (!guide.printing) return;
  const { id, y } = guide.printing;
  guide.printing = null;
  guideEls.article.removeEventListener("error", guidePrintError, true);
  guideEls.article.removeEventListener("load", guideFitPicture, true);
  guideRelease();
  guideOpen(id, { y });
}

function renderGuide(language, locale, pageData) {
  const manualLanguage = guideManualLanguage(language);
  const fallback = manualLanguage !== language;
  guide.locale = locale;
  guide.labels = pageData;
  guideEls.notice.hidden = !fallback;
  guideEls.notice.textContent = fallback ? pageData.fallbackNotice : "";
  guideEls.toc.setAttribute("aria-label", pageData.tocLabel);
  guideEls.top.setAttribute("aria-label", pageData.toTop);
  guideEls.toggle.lang = locale.htmlLang;
  guideEls.toggle.dir = locale.dir || "ltr";
  if (guide.requested !== manualLanguage) {
    guideLoad(manualLanguage);
  } else {
    guideMetrics();
    guideRenderPager();
  }
}

function initGuide() {
  const { article, layout, side, toc, toggle, top, sentinel } = guideEls;
  guide.hash = location.hash;
  // The page restores its own position (the text arrives after the browser has looked for it).
  try {
    history.scrollRestoration = "manual";
  } catch {
    // Not essential.
  }
  // Each history entry remembers where the reader was in it, so that Back returns to that spot.
  const rememberPosition = () => {
    try {
      const y = Math.round(window.scrollY);
      if (!history.state || history.state.guideY !== y) history.replaceState({ guideY: y }, "");
    } catch {
      // Not essential.
    }
  };
  toggle.addEventListener("click", () => guideSetToc(!toc.classList.contains("is-open")));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toc.classList.contains("is-open")) {
      guideSetToc(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (toc.classList.contains("is-open") && !side.contains(event.target)) guideSetToc(false);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest?.("a[href^='#']");
    if (!link || !layout.contains(link) || !guide.data) return;
    let id = "";
    try {
      id = decodeURIComponent(link.getAttribute("href").slice(1));
    } catch {
      return;
    }
    if (!id || !guide.data.byId.has(id)) return;
    event.preventDefault();
    guideSetToc(false);
    if (location.hash !== `#${encodeURIComponent(id)}`) {
      rememberPosition();
      history.pushState(null, "", `#${encodeURIComponent(id)}`);
    }
    guide.hash = location.hash;
    guideOpen(id, { smooth: true });
  });
  // Back / forward (and a hash typed into the address bar): open what the address now names.
  // Back/forward fires popstate and then hashchange; the second one must not undo the position restored by the first.
  const followAddress = (event) => {
    if (event.type === "hashchange" && location.hash === guide.hash) return;
    guide.hash = location.hash;
    const id = guideHashId();
    if (id && !guide.data?.byId.has(id)) return;
    const y = event.type === "popstate" && event.state && typeof event.state.guideY === "number" ? event.state.guideY : null;
    guideOpen(id, { y });
  };
  window.addEventListener("popstate", followAddress);
  window.addEventListener("hashchange", followAddress);

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => { guideMetrics(); guideObserve(); }, 120);
  });
  let scrollTimer = 0;
  window.addEventListener("scroll", () => {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      guideUpdateActive();
      if (!guide.printing) rememberPosition();
    }, 140);
  }, { passive: true });

  top.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: guideReducedMotion() ? "auto" : "smooth" });
    const heading = document.querySelector(".page-hero h1");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => top.classList.toggle("is-visible", !entry.isIntersecting && entry.boundingClientRect.top < 0)).observe(sentinel);
  } else {
    top.classList.add("is-visible");
  }

  window.addEventListener("pagehide", () => {
    try {
      sessionStorage.setItem("camHubGuideScroll", JSON.stringify({ href: location.href, y: Math.round(window.scrollY) }));
    } catch {
      // Not essential.
    }
  });
  window.addEventListener("beforeprint", guidePrintStart);
  window.addEventListener("afterprint", guidePrintEnd);
}

function applyLanguage(language, persist = false) {
  const locale = translations[language] || translations.en;
  const localizedPageData = locale[page] || locale.home;
  const pageData = page === "product"
    ? productPageDataWithEnglishFallback(localizedPageData)
    : localizedPageData;
  document.body.classList.add("is-switching");
  window.setTimeout(() => {
    document.documentElement.lang = locale.htmlLang;
    document.documentElement.dir = locale.dir || "ltr";
    document.title = pageData.documentTitle;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (pageData[key] !== undefined) node.innerHTML = pageData[key];
      else if (locale[key] !== undefined) node.innerHTML = locale[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      const key = node.dataset.i18nAria;
      if (locale[key]) node.setAttribute("aria-label", locale[key]);
    });
    document.querySelectorAll("[data-nav]").forEach((node) => {
      if (node.dataset.nav === page) node.setAttribute("aria-current", "page");
      else node.removeAttribute("aria-current");
    });
    const rendered = renderPage(pageData, locale);
    if (rendered !== null) document.getElementById("content").innerHTML = rendered;
    applyPhraseWrapping(language);
    if (page === "guide") renderGuide(language, locale, pageData);
    languageSelect.value = language;
    if (persist) {
      localStorage.setItem("camHubSiteLanguage", language);
      localStorage.setItem("camHubSiteLanguageManual", "1");
    }
    document.body.classList.remove("is-switching");
  }, 70);
}

languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value, true));
themeSelect.addEventListener("change", (event) => applyTheme(event.target.value));

menuButton?.addEventListener("click", () => {
  const open = !siteControls.classList.contains("is-open");
  siteControls.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".navlinks a").forEach((link) => link.addEventListener("click", () => {
  siteControls?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

if (page === "guide") initGuide();
loadWebAnalytics();
applyTheme(preferredTheme());
applyLanguage(preferredLanguage());
