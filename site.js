const shared = {
  contactEmail: "app-dev@almx.cc",
  eulaUrl: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  supportedLanguages: "English · 繁體中文 · 简体中文 · 日本語 · 한국어 · Deutsch · Español · Français · العربية"
};

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
    footer: "Copyright © 2026 ALMX. All rights reserved.",
    home: {
      documentTitle: "Cam-Hub — 自己的攝影機，不必被雲端綁住",
      topline: "直接連接．集中監看",
      eyebrow: "直接連接您的設備",
      title: '<span class="hero-line">自己的攝影機，</span><span class="hero-line hero-accent">不必被雲端綁住。</span>',
      summary: "Cam-Hub 讓您直接連接相容的攝影機與錄影主機，不需為觀看影像另外註冊品牌雲端帳號。",
      primaryCTA: "查看功能",
      secondaryCTA: "確認相容方式",
      trustAccount: "不需另外建立帳號",
      trustProtocol: "支援 ONVIF 與相容設備協議",
      trustMix: "跨設備 LiveView Mix",
      statusLive: "即時",
      introKicker: "少一層帳號，多一點掌控",
      introTitle: "讓不同來源的影像，回到同一個畫面。",
      introBody: "加入單一攝影機，或連接部分相容的 NVR、DVR 與 NAS 監控系統。Cam-Hub 將通道整理在一致的介面中，讓查看與切換更簡單。",
      featureDirectTitle: "直接連接",
      featureDirectBody: "使用設備本身的位址與存取資訊連線，不必為了觀看影像註冊品牌雲端帳號。",
      featureMixBody: "把不同攝影機與錄影主機的通道混合成一個專屬監看面板。",
      featureProtocolTitle: "開放協議優先",
      featureProtocolBody: "支援 ONVIF 與 RTSP 串流，並針對部分設備提供相容連接。",
      featurePlaybackTitle: "即時與回放",
      featurePlaybackBody: "查看即時影像，並在支援的設備上搜尋與播放錄影內容。",
      compatibilityKicker: "目前相容性",
      compatibilityTitle: "開放協議，加上經過實測的設備連接。",
      compatibilityNote: "* 僅代表部分設備與功能經過相容性測試，不代表與品牌原廠存在合作、贊助或官方認可關係。實際功能依型號、韌體與設定而異。",
      closingTitle: "把監看畫面，重新交回自己掌握。",
      closingCTA: "了解如何使用"
    },
    product: {
      documentTitle: "Cam-Hub — 功能介紹",
      topline: "功能介紹",
      eyebrow: "CAM-HUB 功能介紹",
      title: '<span class="page-title-line">從加入設備開始，</span><span class="page-title-line">逐步設定 Cam-Hub。</span>',
      summary: "依照 App 裡實際出現的入口、選項與操作結果整理；需要調整監看牆、回放錄影或移轉設備時，可以直接跳到對應章節。",
      wikiLabel: "快速前往章節",
      wiki: [
        ["devices", "01", "設備與通道", "先完成設備連線，再決定哪些通道要出現在監看畫面。", [
          ["準備連線資訊", [
            "開啟 Devices，按下新增設備，進入 Add Device。",
            "Name 可以留白；IP address or hostname、Username 為必要欄位。HTTP Port 預設 80，RTSP Port 預設 554，若設備使用其他連接埠請依管理介面填寫。",
            "輸入 Password 後按 Add。連線期間畫面會顯示 Connecting to device；若失敗，App 會區分無法連線、帳密錯誤或設備不支援。",
            "請只使用您擁有、管理或已獲明確授權的設備與帳號。"
          ]],
          ["自動辨識或使用 ONVIF", [
            "一般情況先保持 Connect via ONVIF 關閉，讓 Cam-Hub 嘗試相容設備的原生連線，以取得較完整功能。",
            "若無法辨識，或您希望固定使用開放協議，再開啟 Connect via ONVIF 後重新加入。",
            "設備端可能需要先啟用 ONVIF、建立具備觀看權限的 ONVIF 帳號，並開放 RTSP。可從 Compatibility reference 查看連線提示。"
          ]],
          ["整理攝影機通道", [
            "加入成功後展開設備卡片，Channels 會列出設備回報的攝影機。",
            "開啟需要觀看的通道；不使用的通道可以停用。錄影主機通道也可設為 Turn off camera，使它停止串流而不是只隱藏。",
            "離線通道仍會保留在設備頁並以灰色呈現；若已開啟 Hide offline cameras，它不會出現在即時監看牆。"
          ]],
          ["查看與更新設備資訊", [
            "設備卡片可展開或收合型號、位址、Port、序號、韌體與通道數。",
            "右上角可重新命名設備；下拉重新整理可重新取得通道狀態。",
            "設備頁右上角的填滿圖示只改變目前畫面的 Fit／Crop／Stretch；全螢幕按鈕會打開該設備的通道牆。"
          ]]
        ]],
        ["mix", "02", "LiveView Mix 監看牆", "把不同攝影機與錄影主機的通道排在同一個畫面，並依實際螢幕調整密度。", [
          ["選擇 LiveView Mix 的攝影機", [
            "前往 Settings → LiveView Mix Dashboard。",
            "在各設備區段勾選要混合的通道；每個通道右側可獨立選 SD 或 HD，也可用 All SD／All HD 一次套用。",
            "回到 Live 分頁並在上方選擇 LiveView Mix。分頁內是方便捲動的預覽；按 Full screen 才會套用所選的完整牆面排版。"
          ]],
          ["17 種全螢幕排版", [
            "均分網格：2×2、2×3、3×3、3×4、4×4、5×4、6×4、5×5、7×4、6×5、6×6、7×7。",
            "主畫面配置：1+3、1+5、1+7、1+21、1+27。第一個攝影機會放入最大的主格。",
            "超過 16 格的排版會顯示螢幕標記，表示密度較高，較適合大尺寸顯示器。"
          ]],
          ["排列攝影機與空白格", [
            "在 LiveView Mix 設定按 Arrange cameras 進入排列頁。",
            "可直接把一格拖到另一格互換；也可按 Edit，使用清單拖曳排序或滑動刪除。順序會逐頁填入排版格位。",
            "按 Add empty slot 可插入刻意保留的空格；點一下該空格可繼續設定它要顯示的內容。"
          ]],
          ["三種畫面填滿方式", [
            "Fit：保留完整影像比例，尺寸不合時出現黑邊。",
            "Crop：維持比例並放大到填滿格位，超出格位的邊緣會被裁掉。",
            "Stretch：不裁切並直接填滿格位，但可能拉寬或壓扁影像。這個設定可作為全域預設，也能在個別設備或通道暫時切換。"
          ]],
          ["自訂浮水印", [
            "在 Watermark 開啟 Show watermark，選擇顯示 Device name、Camera name 與 IP address。",
            "可調整位置、透明度、顏色、文字大小與 Standard／Rounded／Monospaced／Serif 字體。",
            "Legibility 可使用 Shadow、Outline、Plate 或 None；頁面同時提供明亮與深色背景預覽，確認文字在日夜畫面都看得清楚。"
          ]],
          ["圖片、時鐘、標籤與控制面板", [
            "在 Arrange 新增 Empty slot，再點擊空白格進入 Slot Editor。",
            "Image 可從照片選擇或直接拍攝；Clock 可選擇日期、秒數與 12／24 小時；Label 可設定文字、SF Symbol 與顏色。",
            "Control 可建立 HTTP Webhook 按鈕，內建門、車庫、燈、門鎖、窗簾、場景、警報、風扇、插座與空調範本，也能自訂。涉及開門、解鎖等操作可要求再次確認。",
            "圖片與格位設定會隨支援的加密備份移轉；Webhook 端點仍由您自行建立與保護。"
          ]]
        ]],
        ["viewing", "03", "即時觀看與錄影回放", "單一攝影機著重清晰度與操作；多畫面則可以優先兼顧裝置負載與頻寬。", [
          ["單畫面與多畫面品質", [
            "前往 Settings → Default quality，分別設定 Single camera 與 Multiple cameras 的 HD／SD 預設值。",
            "打開單一通道後，如果該設備回報可切換主／子串流，控制列會顯示 SD／HD 選擇。",
            "LiveView Mix 則可在通道清單逐一指定畫質，或使用 All SD／All HD 批次設定。多格同時播放時，較低畫質通常能減少頻寬與裝置負載。"
          ]],
          ["縮放與橫向全螢幕", [
            "在單一通道畫面使用雙指縮放；放大後可拖曳查看不同位置。",
            "雙擊可快速切換至 2.5 倍，再次雙擊回到完整畫面。",
            "將裝置旋轉為橫向時，導覽列、控制列與分頁列會隱藏，畫面改為盡量填滿螢幕。"
          ]],
          ["快照與分享", [
            "在單一通道控制列按 Snapshot，Cam-Hub 會向設備要求目前畫面的快照。",
            "取得影像後會開啟預覽頁；按 Share 使用系統分享功能。",
            "快照可能包含人物、地址、時間或其他敏感資訊。送出前請確認影像內容、接收對象與所在地規範。"
          ]],
          ["日期、時間軸與錄影分類", [
            "在通道頁下方選擇要查詢的日期；Cam-Hub 會向設備要求該日的錄影片段。",
            "Recordings 可在 Continuous 與 Events 間切換。拖曳或縮放時間軸，將中央游標移到希望播放的時間；也可以直接點選下方片段。",
            "進入錄影後畫面會顯示 PLAYBACK 與設備時間；按 Back to Live 返回即時串流。部分設備會先下載片段，再由系統播放器播放。"
          ]]
        ], '功能可用性警語：即時串流、快照、<span class="keep-phrase">主／子串流切換</span>、錄影搜尋、<span class="keep-phrase">Continuous／Events 分類</span>、時間軸定位及回放，均以攝影機或錄影主機實際回傳的能力，以及登入帳號被賦予的權限為準。'],
        ["backup", "04", "加密備份與設備移轉", "備份與分享都會攜帶敏感連線資訊；Cam-Hub 會先加密，但 PIN 與分享對象仍需由您妥善管理。", [
          ["本機密碼保護", [
            "加入設備成功後，密碼存入 Apple Keychain；設備名稱、位址、連接埠、通道與 App 設定保留在裝置資料中。",
            "Cam-Hub 只在建立您要求的連線、搜尋錄影、擷取快照或進行備份／移轉時使用這些資料。",
            "Delete All Data 會移除本機設備資料與已保存密碼；刪除 App 也可能使尚未備份的設定無法復原。"
          ]],
          ["六位數 PIN 加密 iCloud 備份", [
            "前往 Settings → Back Up to iCloud，選擇備份位置後輸入六位數 PIN，並再次輸入確認。",
            "備份內容包括支援的設備、登入資訊、通道、LiveView Mix 與 App 設定，會先以 PIN 加密再保存至您自己的 iCloud。",
            "PIN 不會交由開發者保管，也沒有忘記密碼的復原流程。建立備份後請另外安全保存 PIN，並確認 Current Backup 已顯示新的備份時間與設備數。"
          ]],
          ["從 iCloud 還原", [
            "在 Settings → Restore from iCloud 選擇要還原的備份，輸入建立備份時使用的 PIN。",
            "建議來源與目標使用相同 App 版本，並先確認登入的是保存該備份的 Apple Account；舊版本建立的備份可能需要重新備份後才會顯示。",
            "還原會受目前方案可用上限影響。完成後請逐一確認設備位址、通道與 LiveView Mix 是否符合目前網路環境。"
          ]],
          ["不經 iCloud 的加密移轉", [
            "前往 Settings → Export Cameras 產生加密代碼，可複製或使用系統分享；接收端從 Import Cameras 貼上完整代碼。",
            "匯入內容包含設備及其登入資訊，並會受接收端目前方案限制。",
            "任何取得完整代碼並擁有 Cam-Hub 的人都可能加入這些設備。不要貼到公開聊天室、工單或網站，只交給確實需要且受信任的對象。"
          ]]
        ]],
        ["preferences", "05", "顯示、串流與資料管理", "依網路、裝置效能與日常使用方式調整 App 行為；需要重設時，也可以分開處理設定、本機資料與 iCloud 備份。", [
          ["隱藏離線攝影機", [
            "Settings → Hide offline cameras 開啟後，沒有訊號的攝影機不會出現在 Live 分頁與即時監看牆。",
            "它仍會保留在 Devices 的通道清單並以灰色顯示，因此不會被誤認為已刪除；訊號恢復後可再次出現在監看畫面。"
          ]],
          ["維持畫面外串流", [
            "當 App 偵測到需要較長重新連線時間的相容設備時，Streaming 區段會顯示 Keep streams connected off-screen。",
            "開啟後，捲出畫面的通道仍保留連線，回到該畫面時能更快恢復；代價是持續使用網路、電力與系統資源。不需要立即恢復時建議關閉。"
          ]],
          ["選擇啟動首頁", [
            "前往 Settings → LiveView Mix → Open on launch。",
            "Last viewed 會回到上次選擇；LiveView Mix 直接開啟跨設備監看牆；也可以指定某一台設備。",
            "如果指定設備已刪除或 LiveView Mix 尚未設定，App 會回到可用的畫面，而不會保留不存在的入口。"
          ]],
          ["方案與顯示通道", [
            "Settings → Plans 會顯示目前攝影機與錄影主機方案及使用上限。",
            "未完全解鎖時，Choose which cameras show 可選擇有限名額要套用在哪些通道；已完全解鎖時不再需要此清單。",
            "購買與 Restore Purchases 均由 Apple 提供的購買狀態決定。方案不會改變攝影機本身提供的協議、權限或回放能力。"
          ]],
          ["分開重設與刪除", [
            "Restore Default Settings：只把外觀、語言、品質、LiveView Mix 等設定恢復預設，保留已加入設備。",
            "Delete All Data：移除本機設備、攝影機與 Keychain 密碼；iCloud 備份與訂閱不受影響。",
            "Delete iCloud Backup：刪除雲端的加密備份，不影響目前裝置上的設備與設定。若尚未登入 iCloud，可能只能清除本機看到的備份狀態。",
            "執行不可逆刪除前，請先確認 iCloud 已完成同步、PIN 可用，而且備份版本可供目標裝置還原。"
          ]]
        ]]
      ],
      note: "Cam-Hub 不會繞過設備原有的存取控制。功能會依型號、韌體、協議實作、帳號權限、編碼與網路條件而異。"
    },
    support: {
      documentTitle: "Cam-Hub — 支援與相容性",
      topline: "支援與相容性",
      eyebrow: "SUPPORT",
      title: "支援與相容性",
      summary: "連線問題通常與設備協議、權限、連接埠或網路設定有關。這裡整理了開始檢查的位置。",
      meta: [["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "Cam-Hub"], ["支援語言", shared.supportedLanguages]],
      sections: [
        ["相容性", ["Cam-Hub 支援 ONVIF 與 RTSP 影像連接，並已針對部分 Hikvision、Dahua 與 Synology 設備或系統進行測試。實際相容性取決於型號、韌體、帳號權限、串流格式與網路設定。", "部分設備可能需要先在管理介面中啟用 ONVIF、RTSP 或相關本機服務。品牌相容性說明不代表與品牌原廠存在合作、贊助或官方認可關係。"], "compatibility"],
        ["回報連線問題前", ["確認攝影機或錄影主機已上線，且 Apple 裝置可以連線至該設備。", "確認設備位址、HTTP 埠、RTSP 埠、使用者名稱與密碼。", "需要時，請在設備管理介面中啟用 ONVIF 或相關本機服務。", "確認設備帳號具備查看指定通道與錄影內容的權限。", "若主串流的編碼、解析度或流量不相容，可以嘗試使用子串流。"]],
        ["聯絡支援時請提供", ["App 版本、Apple 裝置型號與作業系統版本。", "攝影機或錄影主機的型號與韌體版本。", "使用的連線方式、操作步驟與完整錯誤訊息。", "請勿寄送攝影機密碼、備份 PIN 或完整的公網連線位址。"]],
        ["常見限制", ["ONVIF 與 RTSP 的實作會因設備品牌、型號與韌體而異，因此支援協議不等於每項功能都能使用。", "遠端連線需要您自行建立並保護適當的 VPN、路由或設備遠端存取設定。Cam-Hub 不會自動開放路由器連接埠。", "錄影搜尋與回放需要設備本身支援，並且登入帳號擁有相應權限。"]]
      ]
    },
    privacy: {
      documentTitle: "Cam-Hub — 隱私權政策",
      topline: "隱私權政策",
      eyebrow: "PRIVACY POLICY",
      title: "隱私權政策",
      summary: "Cam-Hub 以設備端處理與使用者主動控制為原則，不要求建立服務帳號，也不使用第三方廣告追蹤。",
      meta: [["生效日期", "2026 年 7 月 19 日"], ["App", "Cam-Hub"], ["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["政策概要", ["Cam-Hub 不要求您建立 Cam-Hub 服務帳號，也不整合第三方廣告或廣告追蹤。App 的用途是連接由您設定的攝影機與錄影主機。"]],
        ["設備資料與登入資訊", ["攝影機與錄影主機的名稱、位址、連接埠、使用者名稱、通道資訊及 App 設定會保存在您的裝置上。密碼保存在 Apple Keychain。Cam-Hub 只會為了執行您要求的連線與操作使用這些資訊。"]],
        ["攝影機連線與影像", ["查看即時或錄影影像時，App 會連線至您提供的設備位址。您的設備、網路服務商、VPN、DNS 或您選擇的遠端端點，可能依其政策處理連線資訊。Cam-Hub 不會將攝影機影像用於廣告或行為分析。"]],
        ["選用的 iCloud 備份", ["若您選擇使用 iCloud 備份，App 會先以六位數 PIN 加密支援的攝影機與錄影主機設定、登入資訊、通道及 App 設定，再存入您私人的 iCloud Key-Value Store。", "備份時間、設備數量與站點名稱會分開保存，供 App 顯示備份狀態。請妥善保存 PIN；我們無法替您找回或解密。"]],
        ["購買與訂閱", ["購買與訂閱由 Apple 處理。我們不會取得您的完整付款卡號或銀行資訊。App 只會讀取 Apple 提供的購買狀態，以啟用相應的使用上限或功能。"]],
        ["分享、保留與刪除", ["我們不販售個人資料。本機設定會保留在您的裝置上，直到您刪除設備或移除 App。選用的 iCloud 資料由您的 Apple Account 與 iCloud 服務管理。", "您透過 Email 主動寄給支援信箱的資訊，只會在回覆問題及保留必要支援紀錄所需的期間內保存。"]],
        ["兒童與政策更新", ["Cam-Hub 並非以兒童為主要對象，也不會刻意收集兒童的個人資料。當 App 功能、法規或商店要求變更時，我們可能更新本政策，並在本頁公布新的修訂日期。"]]
      ]
    },
    terms: {
      documentTitle: "Cam-Hub — 使用條款",
      topline: "使用條款",
      eyebrow: "TERMS OF USE",
      title: "使用條款",
      summary: "使用 Cam-Hub 代表您同意以下條款，以及 Apple App Store 適用的授權與購買規則。",
      meta: [["生效日期", "2026 年 7 月 19 日"], ["App", "Cam-Hub"], ["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["Apple 標準 EULA", ["Cam-Hub 採用 Apple 標準終端使用者授權合約。若本條款與 Apple 適用的 EULA 或 App Store 規則衝突，應以 Apple 的適用條款為準。", `<a href="${shared.eulaUrl}">Apple Standard End User License Agreement</a>`]],
        ["用途與授權使用", ["Cam-Hub 是相容攝影機與錄影主機的影像查看及管理工具。您只能連接自己擁有、管理或已獲明確授權存取的設備與網路。您有責任遵守所在地適用的隱私、監控、錄影、工作場所及財產相關法規。"]],
        ["設備存取與安全", ["您必須提供有效的設備位址與登入資訊。Cam-Hub 不會繞過存取控制。您有責任保護設備、網路、帳號、密碼、遠端存取設定，以及任何匯出或分享的影像。"]],
        ["相容性與可用性", ["功能會受到設備型號、韌體、協議實作、帳號權限、影像編碼、錄影設定與網路狀況影響。支援 ONVIF、RTSP 或特定產品系列，不代表每一型號或功能都能使用。", "Cam-Hub 不是緊急監控服務，不保證影像不中斷、錄影一定存在、警報送達或任何特定安全結果。"]],
        ["訂閱與購買", ["App 內購買與訂閱由 Apple 處理。價格、續訂、取消、退款與帳號管理依 Apple 顯示的資訊及您的 Apple Account 設定為準。App 會依有效的購買權益決定可使用的上限或功能。"]],
        ["第三方名稱與服務", ["Hikvision、Dahua、Synology、ONVIF 及其他相關名稱，均為其各自權利人的商標或識別名稱。Cam-Hub 為獨立開發的應用程式。", "成功連線代表設備與 Cam-Hub 使用的協議或功能在技術上相容，不代表與相關權利人存在隸屬、合作、贊助或官方認可關係。"]],
        ["條款更新", ["當 App 功能、法規或商店要求變更時，我們可能更新本條款，並在本頁公布新的修訂日期。"]]
      ]
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
    footer: "Copyright © 2026 ALMX. All rights reserved.",
    home: {
      documentTitle: "Cam-Hub — Your cameras, without the cloud lock-in",
      topline: "Direct connection · Unified viewing",
      eyebrow: "Connect directly to your equipment",
      title: '<span class="hero-line">Your cameras.</span><span class="hero-line hero-accent">Without the cloud lock-in.</span>',
      summary: "Cam-Hub connects directly to compatible cameras and recorders, without requiring another vendor cloud account just to view your video.",
      primaryCTA: "Explore features",
      secondaryCTA: "Check compatibility",
      trustAccount: "No additional account required",
      trustProtocol: "ONVIF and compatible device protocols",
      trustMix: "Cross-device LiveView Mix",
      statusLive: "Live",
      introKicker: "One less account. More control.",
      introTitle: "Bring video from different sources into one clear view.",
      introBody: "Add an individual camera or connect selected compatible NVR, DVR, and NAS surveillance systems. Cam-Hub organizes their channels in one consistent interface for faster viewing and switching.",
      featureDirectTitle: "Direct connection",
      featureDirectBody: "Connect with the address and access information already configured on your equipment, without registering a vendor cloud account just to view video.",
      featureMixBody: "Combine channels from different cameras and recorders into your own monitoring dashboard.",
      featureProtocolTitle: "Open protocols first",
      featureProtocolBody: "Supports ONVIF and RTSP streaming, with compatible connections for selected equipment.",
      featurePlaybackTitle: "Live and playback",
      featurePlaybackBody: "View live video and search or play recordings when the equipment supports those capabilities.",
      compatibilityKicker: "Current compatibility",
      compatibilityTitle: "Open protocols, plus tested equipment connections.",
      compatibilityNote: "* Indicates that selected equipment and features have been compatibility-tested. It does not imply affiliation, sponsorship, or endorsement by the equipment vendor. Features vary by model, firmware, and configuration.",
      closingTitle: "Put your monitoring view back under your control.",
      closingCTA: "Learn how it works"
    },
    product: {
      documentTitle: "Cam-Hub — Features",
      topline: "Features",
      eyebrow: "CAM-HUB FEATURES",
      title: '<span class="page-title-line">Set up Cam-Hub,</span> <span class="page-title-line">one screen at a time.</span>',
      summary: "Use the same entry points and controls you see in the app. Jump directly to device setup, LiveView Mix, playback, transfer, or app behaviour.",
      wikiLabel: "Jump to a chapter",
      wiki: [
        ["devices", "01", "Devices and channels", "Connect the equipment first, then decide which channels belong on your monitoring screens.", [
          ["Prepare connection details", "Enter the address or host name, HTTP and RTSP ports, username, and password. Connect only to equipment you own, manage, or are explicitly authorized to use."],
          ["Auto-detect or use ONVIF", "Cam-Hub first tries a compatible device connection and can also connect directly through ONVIF. ONVIF or RTSP may need to be enabled in the equipment administration interface."],
          ["Organize camera channels", "After connection, Cam-Hub lists the channels exposed by the equipment. Choose which cameras appear, disable unused channels, or stop selected recorder channels from streaming."],
          ["Review and update equipment", "The device page shows model, address, firmware, and channel count. You can rename a device, refresh its channels, and open a full-screen wall when needed."]
        ]],
        ["mix", "02", "LiveView Mix monitoring wall", "Place channels from different cameras and recorders on one screen, then tune the density for the display you use.", [
          ["Mix devices on one wall", "LiveView Mix can combine channels from different cameras, NVRs, DVRs, or NAS surveillance systems instead of keeping each device in a separate view."],
          ["17 full-screen layouts", "Choose uniform grids from 2×2 through 7×7, or focus layouts 1+3, 1+5, 1+7, 1+21, and 1+27. Dense layouts are marked as better suited to a large screen."],
          ["Arrange cameras and blank slots", "Reorder cameras to control which tile each one uses; the first item goes to the primary or top-left tile. Blank slots can preserve a deliberate wall structure."],
          ["Three video fill modes", "Fit shows the complete picture with black bars; Crop preserves the aspect ratio while trimming edges; Stretch fills the tile without cropping but may distort the picture."],
          ["Custom watermarks", "Overlay device name, camera name, or IP on each tile, with controls for position, opacity, colour, text size, font, and legibility treatment."],
          ["Pictures, clocks, labels, and controls", "A blank tile can show a picture, live clock, text label, or a smart-home control panel whose buttons call HTTP webhooks you configure."]
        ]],
        ["viewing", "03", "Live viewing and recording playback", "Single-camera viewing can prioritize clarity and interaction; multi-camera walls can prioritize device load and bandwidth.", [
          ["Single and multi-camera quality", "Set separate default HD or SD quality for one camera and for multi-camera views. LiveView Mix can also assign quality per camera."],
          ["Zoom and landscape viewing", "The single-channel view supports pinch zoom and double-tap zoom. Rotating to landscape hides surrounding controls so the picture can use the screen."],
          ["Snapshots and sharing", "When supported by the equipment, capture the current picture and share it through the system share sheet. Check the content and recipient before sharing."],
          ["Date, timeline, and recording types", "Playback includes a day picker, zoomable timeline, and Continuous or Events tabs. Search, precise seeking, and playback still depend on equipment support and account permissions."]
        ], 'Availability notice: live streaming, snapshots, <span class="keep-phrase">main/sub-stream selection</span>, recording search, <span class="keep-phrase">Continuous/Events classification</span>, timeline seeking, and playback all depend on the capabilities actually reported by the camera or recorder and the permissions granted to the signed-in equipment account.'],
        ["backup", "04", "Encrypted backup and transfer", "Backups and transfers contain sensitive connection details. Cam-Hub encrypts them, while you remain responsible for the PIN and recipient.", [
          ["Local password protection", "Equipment passwords are stored in Apple Keychain. General configuration and channel information remain on the device for the connections and actions you request."],
          ["Six-digit PIN iCloud backup", "Encrypt supported devices, credentials, channels, and app settings to your own iCloud. The developer cannot recover the PIN, so keep it somewhere safe."],
          ["Restore from iCloud", "Enter the original PIN in a compatible installation to restore. Use the same app version when possible and make sure the correct Apple Account is signed in."],
          ["Encrypted transfer without iCloud", "Export an encrypted code containing equipment and passwords, then import it into another Cam-Hub installation. Anyone with the complete code may be able to add the equipment, so share it only with trusted people."]
        ]],
        ["preferences", "05", "Display, streaming, and data controls", "Tune app behaviour for your network and device, and handle preferences, local data, and iCloud backup separately when resetting.", [
          ["Hide offline cameras", "Cameras with no signal can be hidden from live walls while remaining listed and greyed out on the device page for troubleshooting."],
          ["Keep off-screen streams connected", "Selected equipment can keep camera tiles connected after they scroll away, making them resume faster when revisited. This uses more bandwidth and battery."],
          ["Choose what opens on launch", "Return to the last viewed location, open LiveView Mix directly, or open a selected device when the app launches."],
          ["Plans and visible cameras", "Review camera and recorder limits in Plans. When not every channel is unlocked, choose which cameras should remain visible."],
          ["Reset and delete separately", "Restore Defaults keeps equipment but resets preferences. Delete All Data removes local equipment and passwords. Delete iCloud Backup affects only the cloud backup. Confirm that a usable backup exists before deleting local data."]
        ]]
      ],
      note: "Cam-Hub does not bypass equipment access controls. Features vary by model, firmware, protocol implementation, account permissions, codec, and network conditions."
    },
    support: {
      documentTitle: "Cam-Hub — Support and Compatibility",
      topline: "Support and compatibility",
      eyebrow: "SUPPORT",
      title: "Support and compatibility",
      summary: "Connection issues are usually related to protocols, permissions, ports, or network configuration. Here is where to start checking.",
      meta: [["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "Cam-Hub"], ["Languages", shared.supportedLanguages]],
      sections: [
        ["Compatibility", ["Cam-Hub supports ONVIF and RTSP-based viewing and has been tested with selected Hikvision, Dahua, and Synology devices or systems. Compatibility varies by model, firmware, account permissions, stream format, and network configuration.", "Some equipment requires ONVIF, RTSP, or another local service to be enabled in its administration interface. Compatibility statements do not imply affiliation, sponsorship, or endorsement by the equipment vendor."], "compatibility"],
        ["Before reporting a connection problem", ["Confirm that the camera or recorder is online and reachable from your Apple device.", "Verify the equipment address, HTTP port, RTSP port, username, and password.", "Enable ONVIF or the required local service in the equipment settings when applicable.", "Use an account that has permission to view the selected channels and recordings.", "Try the camera sub-stream when the main-stream codec, resolution, or bandwidth is not compatible."]],
        ["When contacting support", ["Include the app version, Apple device, and operating system version.", "Include the camera or recorder model and firmware version.", "Describe the connection method, exact steps, and complete error message.", "Never send us your camera password, backup PIN, or complete public connection address."]],
        ["Common limitations", ["ONVIF and RTSP implementations vary across vendors, models, and firmware. Supporting a protocol does not mean every optional feature is available.", "Remote access requires you to configure and secure an appropriate VPN, router, or equipment remote-access method. Cam-Hub does not automatically open router ports.", "Recording search and playback require equipment support and an account with the relevant permissions."]]
      ]
    },
    privacy: {
      documentTitle: "Cam-Hub — Privacy Policy",
      topline: "Privacy policy",
      eyebrow: "PRIVACY POLICY",
      title: "Privacy policy",
      summary: "Cam-Hub is designed around device-side processing and user control. It does not require a service account or include third-party advertising tracking.",
      meta: [["Effective date", "July 19, 2026"], ["App", "Cam-Hub"], ["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["Overview", ["Cam-Hub does not require you to create a Cam-Hub service account and does not include third-party advertising or advertising tracking. The app is designed to connect to cameras and recorders that you configure."]],
        ["Equipment information and credentials", ["Camera and recorder names, addresses, ports, usernames, channel information, and app settings are stored on your device. Passwords are stored in Apple Keychain. Cam-Hub uses this information only to perform the connections and actions you request."]],
        ["Camera connections and media", ["When you view live or recorded video, the app connects to the equipment address you provided. Your equipment, network provider, VPN provider, DNS provider, or any remote endpoint you choose may process connection information under its own policies. Cam-Hub does not use camera video for advertising or behavioral profiling."]],
        ["Optional iCloud backup", ["If you choose iCloud Backup, the app encrypts supported camera and recorder configuration, credentials, channels, and app settings with a six-digit PIN before placing the backup in your private iCloud key-value storage.", "Backup time, device count, and site name are stored separately so the app can display backup status. Keep your PIN safe; we cannot recover or decrypt it for you."]],
        ["Purchases and subscriptions", ["Purchases and subscriptions are processed by Apple. We do not receive your full payment card or bank information. The app reads purchase status supplied by Apple to unlock the corresponding limits or features."]],
        ["Sharing, retention, and deletion", ["We do not sell personal data. Local configuration remains on your device until you delete equipment or remove the app. Optional iCloud data is managed through your Apple Account and iCloud services.", "Information you voluntarily email to support is retained only as needed to respond and maintain necessary support records."]],
        ["Children and policy changes", ["Cam-Hub is not directed to children and does not intentionally collect children’s personal information. We may update this policy when app features, laws, or store requirements change. The revised date will be published on this page."]]
      ]
    },
    terms: {
      documentTitle: "Cam-Hub — Terms of Use",
      topline: "Terms of use",
      eyebrow: "TERMS OF USE",
      title: "Terms of use",
      summary: "By using Cam-Hub, you agree to these terms and the applicable Apple App Store license and purchase rules.",
      meta: [["Effective date", "July 19, 2026"], ["App", "Cam-Hub"], ["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`]],
      sections: [
        ["Apple standard EULA", ["Cam-Hub uses Apple’s Standard End User License Agreement. If these terms conflict with Apple’s applicable EULA or App Store rules, Apple’s applicable terms control.", `<a href="${shared.eulaUrl}">Apple Standard End User License Agreement</a>`]],
        ["Purpose and authorized use", ["Cam-Hub is a viewing and management tool for compatible cameras and recorders. You may connect only to equipment and networks that you own, manage, or have explicit authorization to access. You are responsible for complying with applicable privacy, surveillance, recording, workplace, and property laws."]],
        ["Equipment access and security", ["You must provide valid equipment addresses and credentials. Cam-Hub does not bypass access controls. You are responsible for securing the equipment, network, accounts, passwords, remote-access configuration, and any exported or shared media."]],
        ["Compatibility and availability", ["Features vary by equipment model, firmware, protocol implementation, permissions, codec, recording configuration, and network conditions. Compatibility with ONVIF, RTSP, or a named product family does not guarantee that every model or feature will work.", "Cam-Hub is not an emergency monitoring service and does not guarantee uninterrupted video, recording availability, alert delivery, or security outcomes."]],
        ["Subscriptions and purchases", ["In-app purchases and subscriptions are processed by Apple. Pricing, renewal, cancellation, refunds, and account management follow the information shown by Apple and the settings of your Apple Account. Active entitlements determine the limits or features available in the app."]],
        ["Third-party names and services", ["Hikvision, Dahua, Synology, ONVIF, and other related names are trademarks or identifiers of their respective owners. Cam-Hub is independently developed.", "A successful connection means that the equipment and the protocols or functions used by Cam-Hub are technically compatible; it does not imply affiliation, partnership, sponsorship, or endorsement by those owners."]],
        ["Changes", ["We may update these terms when app features, laws, or store requirements change. The revised date will be published on this page."]]
      ]
    }
  }
};

Object.assign(translations, globalThis.CamHubAdditionalTranslations || {});

const languageChoices = [
  ["en", "English"],
  ["zh-Hant", "繁體中文"],
  ["zh-Hans", "简体中文"],
  ["ja", "日本語"],
  ["ko", "한국어"],
  ["de", "Deutsch"],
  ["es", "Español"],
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

function renderSections(sections) {
  return sections.map(([title, body, id]) => {
    const list = body.length > 2;
    const content = list
      ? `<ul>${body.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : body.map((item) => `<p>${item}</p>`).join("");
    return `<section${id ? ` id="${id}"` : ""}><h2>${title}</h2>${content}</section>`;
  }).join("");
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
    preferences: [["assets/app-settings.jpg", "APP SETTINGS"]]
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
        <div class="wiki-topics">${topics.map(([topicTitle, body], topicIndex) => `
          <section class="wiki-topic">
            <span>${number}.${String(topicIndex + 1).padStart(2, "0")}</span>
            <h3>${topicTitle}</h3>
            ${Array.isArray(body)
              ? `<ol>${body.map((step) => `<li>${step}</li>`).join("")}</ol>`
              : `<p>${body}</p>`}
          </section>`).join("")}</div>
      </article>`;
    }).join("");

    return `<nav class="wiki-nav" aria-label="${data.wikiLabel}">
      <strong>${data.wikiLabel}</strong>
      <div>${data.wiki.map(([id, number, title]) => `<a href="#wiki-${id}"><span>${number}</span>${title}</a>`).join("")}</div>
    </nav>
    <section class="wiki-content">${chapters}</section>
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

function renderPage(data) {
  if (page === "product") return renderProduct(data);
  if (["support", "privacy", "terms"].includes(page)) return `${renderMeta(data.meta)}${renderSections(data.sections)}`;
  return null;
}

function applyPhraseWrapping(language) {
  document.querySelectorAll("wbr[data-phrase-break]").forEach((node) => node.remove());
  document.body.normalize();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.data.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest("script, style, select, option, textarea, .sr-only, .eyebrow, .section-kicker, figcaption")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    node.data = node.data.replaceAll("Cam-Hub", "Cam‑Hub").replaceAll("CAM-HUB", "CAM‑HUB");
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

function applyLanguage(language, persist = false) {
  const locale = translations[language] || translations.en;
  const pageData = locale[page] || locale.home;
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
    const rendered = renderPage(pageData);
    if (rendered !== null) document.getElementById("content").innerHTML = rendered;
    applyPhraseWrapping(language);
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

applyTheme(preferredTheme());
applyLanguage(preferredLanguage());
