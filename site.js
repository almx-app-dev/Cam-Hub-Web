const shared = {
  contactEmail: "app-dev@almx.cc",
  eulaUrl: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
};

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
      title: "自己的攝影機，<br><span>不必被雲端綁住。</span>",
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
      eyebrow: "CAM-HUB PRODUCT",
      title: "從加入設備，到建立自己的監看牆。",
      summary: "Cam-Hub 將設備連接、通道整理、即時監看與錄影回放集中在清楚一致的流程中。",
      steps: [
        ["01", "加入您的設備", "輸入您擁有或獲授權管理之設備的位址與登入資訊。Cam-Hub 會嘗試辨識部分相容設備，也可以選擇使用 ONVIF 連線。"],
        ["02", "選擇需要的通道", "查看攝影機或錄影主機提供的通道，啟用您希望監看的影像來源。"],
        ["03", "建立 LiveView Mix", "將不同攝影機、NVR、DVR 或 NAS 監控系統中的通道混合成單一監看面板。"],
        ["04", "查看即時與錄影影像", "開啟通道即可查看即時影像；設備支援相關功能時，也能搜尋並播放錄影內容。"],
        ["05", "選用加密 iCloud 備份", "您可以使用六位數 PIN 加密備份支援的設備設定、登入資訊與 App 設定至自己的 iCloud，以便在支援的安裝環境中恢復。"],
        ["06", "依設備能力調整", "連線協議、主／子串流、錄影搜尋與播放能力會依型號、韌體、帳號權限及設備設定而不同。"]
      ],
      note: "Cam-Hub 不會繞過設備原有的存取控制。請只連接您擁有、管理或已獲明確授權使用的攝影機、錄影主機與網路。"
    },
    support: {
      documentTitle: "Cam-Hub — 支援與相容性",
      topline: "支援與相容性",
      eyebrow: "SUPPORT",
      title: "支援與相容性",
      summary: "連線問題通常與設備協議、權限、連接埠或網路設定有關。這裡整理了開始檢查的位置。",
      meta: [["聯絡信箱", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "Cam-Hub"], ["支援語言", "繁體中文 / English"]],
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
      title: "Your cameras.<br><span>Without the cloud lock-in.</span>",
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
      documentTitle: "Cam-Hub — Product Guide",
      topline: "Product guide",
      eyebrow: "CAM-HUB PRODUCT",
      title: "From adding equipment to building your own monitoring wall.",
      summary: "Cam-Hub brings device connection, channel organization, live viewing, and recording playback into one clear workflow.",
      steps: [
        ["01", "Add your equipment", "Enter the address and credentials for equipment you own or are authorized to access. Cam-Hub can identify selected compatible devices or connect through ONVIF."],
        ["02", "Choose the channels", "Review the cameras exposed by a camera or recorder and enable the channels you want to view."],
        ["03", "Build LiveView Mix", "Combine channels from different cameras, NVRs, DVRs, or NAS surveillance systems into one monitoring dashboard."],
        ["04", "View live and recorded video", "Open a channel for live viewing. Recording search and playback are available when supported by the equipment."],
        ["05", "Optionally back up to iCloud", "Use a six-digit PIN to encrypt supported equipment configuration, credentials, and app settings in your private iCloud for restoration in supported installations."],
        ["06", "Adapt to equipment capabilities", "Connection protocol, main and sub streams, recording search, and playback vary by model, firmware, account permissions, and equipment settings."]
      ],
      note: "Cam-Hub does not bypass equipment access controls. Connect only to cameras, recorders, and networks that you own, manage, or have explicit authorization to use."
    },
    support: {
      documentTitle: "Cam-Hub — Support and Compatibility",
      topline: "Support and compatibility",
      eyebrow: "SUPPORT",
      title: "Support and compatibility",
      summary: "Connection issues are usually related to protocols, permissions, ports, or network configuration. Here is where to start checking.",
      meta: [["Contact", `<a href="mailto:${shared.contactEmail}">${shared.contactEmail}</a>`], ["App", "Cam-Hub"], ["Languages", "繁體中文 / English"]],
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

const page = document.body.dataset.page || "home";
const languageSelect = document.getElementById("languageSelect");
const themeSelect = document.getElementById("themeSelect");
const menuButton = document.querySelector(".menu-button");
const siteControls = document.getElementById("site-controls");

function preferredLanguage() {
  const stored = localStorage.getItem("camHubSiteLanguage");
  if (stored && translations[stored]) return stored;
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
  return languages.some((language) => language.toLowerCase().startsWith("zh")) ? "zh-Hant" : "en";
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
  return `<section class="guide-grid">${data.steps.map(([number, title, text]) => `
    <article class="guide-card"><span>${number}</span><h2>${title}</h2><p>${text}</p></article>
  `).join("")}<aside class="guide-note">${data.note}</aside></section>`;
}

function renderPage(data) {
  if (page === "product") return renderProduct(data);
  if (["support", "privacy", "terms"].includes(page)) return `${renderMeta(data.meta)}${renderSections(data.sections)}`;
  return null;
}

function applyLanguage(language) {
  const locale = translations[language] || translations.en;
  const pageData = locale[page] || locale.home;
  document.body.classList.add("is-switching");
  window.setTimeout(() => {
    document.documentElement.lang = locale.htmlLang;
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
    languageSelect.value = language;
    localStorage.setItem("camHubSiteLanguage", language);
    document.body.classList.remove("is-switching");
  }, 70);
}

languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
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
