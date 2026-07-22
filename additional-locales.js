(() => {
  const email = "app-dev@almx.cc";
  const contactLink = `<a href="mailto:${email}">${email}</a>`;
  const languages = "English · 繁體中文 · 简体中文 · 日本語 · 한국어 · Deutsch · Español · Français · العربية";
  const eula = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

  globalThis.CamHubAdditionalTranslations = {
    "zh-Hans": {
      htmlLang: "zh-Hans",
      languageLabel: "语言",
      themeLabel: "外观",
      themeAuto: "自动",
      themeLight: "浅色",
      themeDark: "深色",
      menuLabel: "打开菜单",
      navHome: "首页",
      navProduct: "功能介绍",
      navSupport: "支持",
      navPrivacy: "隐私政策",
      navTerms: "使用条款",
      footer: "Copyright © 2026 ALMX. All rights reserved.",
      home: {
        documentTitle: "Cam-Hub — 集中查看兼容设备",
        topline: "设备连接 · 集中查看",
        eyebrow: "连接您有权使用的设备",
        title: '<span class="hero-line">集中查看设备，</span><span class="hero-line hero-accent">清晰管理画面。</span>',
        summary: "Cam-Hub 用于连接您已配置并有权访问的兼容摄像头和录像设备，在统一界面中查看通道画面。",
        primaryCTA: "查看功能",
        secondaryCTA: "检查兼容性",
        trustAccount: "无需注册额外账号",
        trustProtocol: "支持 ONVIF 与 RTSP",
        trustMix: "跨设备 LiveView Mix",
        statusLive: "实时",
        introKicker: "统一设备与通道",
        introTitle: "将不同来源的画面集中到一个界面。",
        introBody: "可添加单台摄像头，或连接部分兼容的 NVR、DVR 和 NAS 监控系统。实际功能取决于设备型号、固件、权限和网络设置。",
        featureDirectTitle: "设备直连",
        featureDirectBody: "使用设备本身的地址和访问凭据建立连接，不绕过设备原有的权限控制。",
        featureMixBody: "将不同摄像头和录像设备的通道组合成自定义监看面板。",
        featureProtocolTitle: "开放协议",
        featureProtocolBody: "支持 ONVIF 与 RTSP，并为部分设备提供兼容连接。",
        featurePlaybackTitle: "实时与回放",
        featurePlaybackBody: "查看实时画面，并在设备支持时搜索和播放录像。",
        compatibilityKicker: "当前兼容性",
        compatibilityTitle: "开放协议与经过测试的设备连接。",
        compatibilityNote: "* 仅表示部分设备和功能经过兼容性测试，不表示与相关厂商存在隶属、合作、赞助或官方认可关系。实际功能以型号、固件和设置为准。",
        closingTitle: "在一个界面中管理您的监看画面。",
        closingCTA: "了解使用方法"
      },
      product: {
        documentTitle: "Cam-Hub — 功能介绍",
        topline: "功能介绍",
        eyebrow: "CAM-HUB PRODUCT",
        title: "从添加设备到建立监看面板。",
        summary: "Cam-Hub 将设备连接、通道整理、实时查看和录像回放整合为清晰的操作流程。",
        steps: [
          ["01", "添加设备", "输入您拥有、管理或已获得明确授权访问之设备的地址和登录信息，也可选择使用 ONVIF 连接。"],
          ["02", "选择通道", "查看摄像头或录像设备提供的通道，并启用需要查看的画面。"],
          ["03", "建立 LiveView Mix", "将来自不同摄像头、NVR、DVR 或 NAS 的通道组合成一个监看面板。"],
          ["04", "查看实时与录像画面", "打开通道查看实时画面；设备支持时，也可搜索并播放录像。"],
          ["05", "可选 iCloud 备份", "使用六位数 PIN 加密支持的设备配置、凭据和 App 设置，并保存到您的私人 iCloud。"],
          ["06", "根据设备能力调整", "协议、主码流与子码流、录像搜索和回放能力因型号、固件、账号权限及设备设置而异。"]
        ],
        note: "Cam-Hub 不会绕过设备的访问控制。请仅连接您拥有、管理或已获得明确授权使用的设备与网络。"
      },
      support: {
        documentTitle: "Cam-Hub — 支持与兼容性",
        topline: "支持与兼容性",
        eyebrow: "SUPPORT",
        title: "支持与兼容性",
        summary: "连接问题通常与协议、权限、端口、编码或网络设置有关，可按以下项目进行检查。",
        meta: [["联系邮箱", contactLink], ["App", "Cam-Hub"], ["支持语言", languages]],
        sections: [
          ["兼容性", ["Cam-Hub 支持 ONVIF 与 RTSP，并对部分 Hikvision、Dahua、Synology 设备或系统进行了兼容性测试。实际结果取决于型号、固件、权限、码流格式和网络设置。", "部分设备需要先在管理界面中启用 ONVIF、RTSP 或相关本地服务。品牌名称仅用于说明兼容性，不表示合作、赞助或官方认可。"], "compatibility"],
          ["报告连接问题前", ["确认摄像头或录像设备已在线，并且 Apple 设备可以访问。", "检查设备地址、HTTP 端口、RTSP 端口、用户名和密码。", "根据设备说明启用 ONVIF、RTSP 或所需的本地服务。", "确认设备账号拥有所选通道和录像的查看权限。", "如果主码流不兼容，可尝试子码流。"]],
          ["联系支持时", ["请提供 App 版本、Apple 设备型号和系统版本。", "请提供摄像头或录像设备型号及固件版本。", "说明连接方式、操作步骤和完整错误信息。", "请勿发送设备密码、备份 PIN 或完整公网地址。"]],
          ["常见限制", ["不同厂商、型号和固件对 ONVIF 与 RTSP 的实现可能不同。", "远程访问需要由您自行配置并保护 VPN、路由器或设备远程访问功能。", "录像搜索与回放需要设备支持，并要求账号具备相应权限。"]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — 隐私政策",
        topline: "隐私政策",
        eyebrow: "PRIVACY POLICY",
        title: "隐私政策",
        summary: "Cam-Hub 以设备端处理和用户控制为设计原则，不包含第三方广告追踪。",
        meta: [["生效日期", "2026 年 7 月 19 日"], ["App", "Cam-Hub"], ["联系邮箱", contactLink]],
        sections: [
          ["政策概要", ["Cam-Hub 无需您创建额外服务账号，也不集成第三方广告或广告追踪。App 用于连接由您配置并有权访问的摄像头和录像设备。"]],
          ["设备信息与凭据", ["设备名称、地址、端口、用户名、通道信息和 App 设置保存在您的设备上，密码保存在 Apple Keychain。相关信息仅用于执行您发起的连接和操作。"]],
          ["连接与画面", ["查看实时或录像画面时，App 会连接到您提供的设备地址。设备、网络、VPN、DNS 或您选择的远程服务可能按其自身政策处理连接信息。Cam-Hub 不将摄像头画面用于广告或行为分析。"]],
          ["可选 iCloud 备份", ["您选择 iCloud 备份时，App 会使用六位数 PIN 加密支持的配置、凭据、通道和 App 设置，并存入您的私人 iCloud。备份状态信息用于显示备份时间和内容摘要。请妥善保管 PIN；我们无法替您恢复或解密。"]],
          ["购买、保存与删除", ["购买与订阅由 Apple 处理。我们不会取得完整支付卡或银行信息。", "本地配置会保留到您删除设备或移除 App。iCloud 数据由您的 Apple Account 和 iCloud 设置管理。您发送给支持邮箱的信息仅在处理请求和保留必要记录期间保存。若需咨询适用的数据权利，请联系上述邮箱。"]],
          ["政策更新", ["若功能、适用法律或商店要求发生变化，我们可能更新本政策并公布修订日期。"]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — 使用条款",
        topline: "使用条款",
        eyebrow: "TERMS OF USE",
        title: "使用条款",
        summary: "使用 Cam-Hub 即表示您同意本条款以及适用的 Apple App Store 规则。",
        meta: [["生效日期", "2026 年 7 月 19 日"], ["App", "Cam-Hub"], ["联系邮箱", contactLink]],
        sections: [
          ["Apple 标准 EULA", ["Cam-Hub 使用 Apple 标准最终用户许可协议。若与本条款冲突，以适用的 Apple 条款为准。", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["合法及授权使用", ["仅可连接您拥有、管理或已获得明确授权访问的设备与网络。您应遵守所在地关于隐私、监控、录像、工作场所和财产的适用法律。"]],
          ["安全与兼容性", ["您负责保护设备、网络、账号、密码、远程访问设置以及导出或共享的画面。Cam-Hub 不绕过访问控制。", "功能取决于型号、固件、协议实现、权限、编码和网络条件。Cam-Hub 不是紧急监控服务，也不保证不中断或产生特定安全结果。"]],
          ["购买与消费者权利", ["App 内购买与订阅由 Apple 处理。价格、续订、取消和退款遵循 Apple 显示的信息及适用法律。本条款不限制适用法律赋予您的强制性消费者权利。"]],
          ["第三方名称", ["Hikvision、Dahua、Synology、ONVIF 及其他名称属于各自权利人。Cam-Hub 为独立开发产品；技术兼容不表示隶属、合作、赞助或官方认可。"]],
          ["条款更新", ["我们可能因功能、法律或商店要求变化而更新本条款，并公布修订日期。"]]
        ]
      }
    },

    ja: {
      htmlLang: "ja",
      languageLabel: "言語",
      themeLabel: "外観",
      themeAuto: "自動",
      themeLight: "ライト",
      themeDark: "ダーク",
      menuLabel: "メニューを開く",
      navHome: "ホーム",
      navProduct: "機能",
      navSupport: "サポート",
      navPrivacy: "プライバシー",
      navTerms: "利用規約",
      footer: "Copyright © 2026 ALMX. All rights reserved.",
      home: {
        documentTitle: "Cam-Hub — カメラ映像をひとつの画面に",
        topline: "直接接続 · 一元表示",
        eyebrow: "お使いの機器へ直接接続",
        title: '<span class="hero-line">複数のカメラを、</span><span class="hero-line hero-accent">ひとつの画面に。</span>',
        summary: "Cam-Hub は、利用権限のある対応カメラやレコーダーへ接続し、チャンネルをわかりやすくまとめて表示します。",
        primaryCTA: "機能を見る",
        secondaryCTA: "互換性を確認",
        trustAccount: "追加アカウント不要",
        trustProtocol: "ONVIF・RTSP 対応",
        trustMix: "機器をまたぐ LiveView Mix",
        statusLive: "ライブ",
        introKicker: "異なる機器を一元管理",
        introTitle: "映像ソースを、見やすいひとつの画面へ。",
        introBody: "単体カメラの追加に加え、一部の対応 NVR、DVR、NAS 監視システムへ接続できます。機能は機種、ファームウェア、権限、ネットワーク設定により異なります。",
        featureDirectTitle: "直接接続",
        featureDirectBody: "機器に設定されたアドレスと認証情報を使用し、既存のアクセス制御を回避せずに接続します。",
        featureMixBody: "異なるカメラやレコーダーのチャンネルを、独自の監視ダッシュボードにまとめます。",
        featureProtocolTitle: "オープンプロトコル",
        featureProtocolBody: "ONVIF と RTSP に対応し、一部機器向けの互換接続も提供します。",
        featurePlaybackTitle: "ライブ・録画再生",
        featurePlaybackBody: "ライブ映像を表示し、機器が対応する場合は録画の検索と再生も行えます。",
        compatibilityKicker: "対応状況",
        compatibilityTitle: "オープンプロトコルと検証済み接続。",
        compatibilityNote: "* 一部機器・機能で互換性を確認したことを示すもので、各メーカーとの提携、協賛、公式認定を意味しません。",
        closingTitle: "監視画面を、より見やすく整理。",
        closingCTA: "使い方を見る"
      },
      product: {
        documentTitle: "Cam-Hub — 機能ガイド",
        topline: "機能ガイド",
        eyebrow: "CAM-HUB PRODUCT",
        title: "機器の追加から監視画面の作成まで。",
        summary: "接続、チャンネル整理、ライブ表示、録画再生を一貫した手順で行えます。",
        steps: [
          ["01", "機器を追加", "所有・管理している、または明確な許可を得た機器のアドレスと認証情報を入力します。ONVIF 接続も選択できます。"],
          ["02", "チャンネルを選択", "カメラやレコーダーが提供するチャンネルから、表示する映像を選択します。"],
          ["03", "LiveView Mix を作成", "異なるカメラ、NVR、DVR、NAS のチャンネルをひとつのダッシュボードにまとめます。"],
          ["04", "ライブ・録画映像を表示", "ライブ映像を開き、機器が対応している場合は録画を検索・再生します。"],
          ["05", "任意の iCloud バックアップ", "6 桁の PIN で対応設定と認証情報を暗号化し、ご自身の iCloud に保存できます。"],
          ["06", "機器に合わせて調整", "プロトコル、ストリーム、録画検索、再生機能は機種、ファームウェア、権限、設定により異なります。"]
        ],
        note: "Cam-Hub は機器のアクセス制御を回避しません。所有、管理、または明確に利用を許可された機器とネットワークだけに接続してください。"
      },
      support: {
        documentTitle: "Cam-Hub — サポートと互換性",
        topline: "サポートと互換性",
        eyebrow: "SUPPORT",
        title: "サポートと互換性",
        summary: "接続の問題は、プロトコル、権限、ポート、映像形式、ネットワーク設定に関連することがあります。",
        meta: [["お問い合わせ", contactLink], ["App", "Cam-Hub"], ["対応言語", languages]],
        sections: [
          ["互換性", ["Cam-Hub は ONVIF と RTSP に対応し、一部の Hikvision、Dahua、Synology 機器またはシステムで互換性を検証しています。実際の動作は機種、ファームウェア、権限、ストリーム形式、ネットワーク設定により異なります。", "機器側で ONVIF、RTSP、または関連するローカルサービスの有効化が必要な場合があります。メーカー名の記載は提携、協賛、公式認定を意味しません。"], "compatibility"],
          ["お問い合わせの前に", ["機器がオンラインで Apple デバイスから到達できることを確認してください。", "アドレス、HTTP／RTSP ポート、ユーザー名、パスワードを確認してください。", "必要なローカルサービスを機器の管理画面で有効にしてください。", "アカウントにチャンネルと録画を表示する権限があることを確認してください。", "メインストリームが非対応の場合はサブストリームをお試しください。"]],
          ["サポートへ連絡する際", ["App バージョン、Apple デバイス、OS バージョンをお知らせください。", "機器の型番とファームウェアをお知らせください。", "接続方法、操作手順、エラー全文をお知らせください。", "パスワード、バックアップ PIN、完全な公開接続先は送信しないでください。"]],
          ["一般的な制限", ["ONVIF と RTSP の実装はメーカー、機種、ファームウェアにより異なります。", "リモートアクセスには、安全に構成した VPN、ルーター、または機器側の機能が必要です。", "録画検索と再生には、機器の対応と適切な権限が必要です。"]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — プライバシーポリシー",
        topline: "プライバシーポリシー",
        eyebrow: "PRIVACY POLICY",
        title: "プライバシーポリシー",
        summary: "Cam-Hub は端末上の処理とユーザーによる管理を重視し、第三者広告トラッキングを使用しません。",
        meta: [["施行日", "2026年7月19日"], ["App", "Cam-Hub"], ["お問い合わせ", contactLink]],
        sections: [
          ["概要", ["Cam-Hub は追加のサービスアカウントを必要とせず、第三者広告や広告トラッキングを組み込みません。ユーザーが設定し、利用権限を持つカメラとレコーダーへ接続するための App です。"]],
          ["機器情報と認証情報", ["機器名、アドレス、ポート、ユーザー名、チャンネル情報、App 設定は端末に保存され、パスワードは Apple Keychain に保存されます。これらはユーザーが要求した接続と操作にのみ使用されます。"]],
          ["接続と映像", ["ライブまたは録画映像の表示時、App はユーザーが指定した機器へ接続します。機器、ネットワーク、VPN、DNS、リモートサービスは各ポリシーに従って接続情報を処理する場合があります。映像を広告や行動分析には使用しません。"]],
          ["任意の iCloud バックアップ", ["選択した場合、対応する設定と認証情報を 6 桁の PIN で暗号化し、ユーザー自身の iCloud に保存します。PIN は当方で復元または解除できません。"]],
          ["購入・保存・削除", ["購入とサブスクリプションは Apple が処理し、当方は完全な決済情報を受け取りません。", "ローカル設定はユーザーが削除するか App を削除するまで保持されます。iCloud データは Apple Account の設定から管理できます。サポートへ送信された情報は対応と必要な記録の期間だけ保持します。適用される個人情報上の権利に関するお問い合わせは上記メールへご連絡ください。"]],
          ["変更", ["機能、法令、ストア要件の変更に応じて本ポリシーを更新し、改定日を掲載する場合があります。"]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — 利用規約",
        topline: "利用規約",
        eyebrow: "TERMS OF USE",
        title: "利用規約",
        summary: "Cam-Hub の利用には、本規約と適用される Apple App Store の規則が適用されます。",
        meta: [["施行日", "2026年7月19日"], ["App", "Cam-Hub"], ["お問い合わせ", contactLink]],
        sections: [
          ["Apple 標準 EULA", ["Cam-Hub には Apple 標準エンドユーザ使用許諾契約が適用されます。矛盾する場合は適用される Apple の規約が優先します。", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["適法かつ許可された利用", ["所有、管理、または明確な許可を得た機器とネットワークにのみ接続してください。プライバシー、監視、録画、職場、財産に関する地域の法令を遵守する責任はユーザーにあります。"]],
          ["安全性と互換性", ["機器、ネットワーク、アカウント、パスワード、リモートアクセス、書き出した映像の安全管理はユーザーの責任です。", "機能は機種、ファームウェア、権限、コーデック、ネットワークにより異なります。Cam-Hub は緊急監視サービスではなく、無停止や特定の安全結果を保証しません。"]],
          ["購入と消費者の権利", ["購入、更新、解約、返金は Apple の表示と適用法に従います。本規約は適用法による強行的な消費者の権利を制限しません。"]],
          ["第三者の名称", ["Hikvision、Dahua、Synology、ONVIF 等は各権利者の名称です。技術的互換性は提携、協賛、公式認定を意味しません。"]],
          ["変更", ["機能、法令、ストア要件に応じて本規約を更新し、改定日を掲載する場合があります。"]]
        ]
      }
    },

    ko: {
      htmlLang: "ko",
      languageLabel: "언어",
      themeLabel: "화면 모드",
      themeAuto: "자동",
      themeLight: "라이트",
      themeDark: "다크",
      menuLabel: "메뉴 열기",
      navHome: "홈",
      navProduct: "기능",
      navSupport: "지원",
      navPrivacy: "개인정보 처리방침",
      navTerms: "이용약관",
      footer: "Copyright © 2026 ALMX. All rights reserved.",
      home: {
        documentTitle: "Cam-Hub — 카메라 영상을 한 화면에",
        topline: "직접 연결 · 통합 보기",
        eyebrow: "사용 권한이 있는 장비에 연결",
        title: '<span class="hero-line">여러 카메라를,</span><span class="hero-line hero-accent">한 화면에서.</span>',
        summary: "Cam-Hub는 사용자가 설정하고 접근 권한을 가진 호환 카메라와 녹화 장비를 연결하여 채널을 한 화면에 정리합니다.",
        primaryCTA: "기능 보기",
        secondaryCTA: "호환성 확인",
        trustAccount: "추가 계정 불필요",
        trustProtocol: "ONVIF 및 RTSP 지원",
        trustMix: "장비 간 LiveView Mix",
        statusLive: "라이브",
        introKicker: "서로 다른 장비를 한곳에",
        introTitle: "여러 영상 소스를 하나의 명확한 화면으로.",
        introBody: "개별 카메라 또는 일부 호환 NVR, DVR, NAS 감시 시스템을 연결할 수 있습니다. 기능은 모델, 펌웨어, 권한 및 네트워크 설정에 따라 달라집니다.",
        featureDirectTitle: "직접 연결",
        featureDirectBody: "장비에 설정된 주소와 인증 정보를 사용하며 기존 접근 제어를 우회하지 않습니다.",
        featureMixBody: "서로 다른 카메라와 녹화 장비의 채널을 하나의 대시보드로 구성합니다.",
        featureProtocolTitle: "개방형 프로토콜",
        featureProtocolBody: "ONVIF와 RTSP를 지원하며 일부 장비에 대한 호환 연결을 제공합니다.",
        featurePlaybackTitle: "실시간 및 재생",
        featurePlaybackBody: "실시간 영상을 보고 장비가 지원하는 경우 녹화를 검색하고 재생합니다.",
        compatibilityKicker: "현재 호환성",
        compatibilityTitle: "개방형 프로토콜과 테스트된 연결.",
        compatibilityNote: "* 일부 장비와 기능의 호환성 테스트를 의미하며 제조사와의 제휴, 후원 또는 공식 인증을 뜻하지 않습니다.",
        closingTitle: "감시 화면을 더 명확하게 정리하세요.",
        closingCTA: "사용 방법 보기"
      },
      product: {
        documentTitle: "Cam-Hub — 기능 안내",
        topline: "기능 안내",
        eyebrow: "CAM-HUB PRODUCT",
        title: "장비 추가부터 모니터링 화면 구성까지.",
        summary: "장비 연결, 채널 정리, 실시간 보기 및 녹화 재생을 일관된 흐름으로 제공합니다.",
        steps: [
          ["01", "장비 추가", "소유·관리하거나 명시적으로 접근 허가를 받은 장비의 주소와 로그인 정보를 입력합니다. ONVIF 연결도 선택할 수 있습니다."],
          ["02", "채널 선택", "카메라 또는 녹화 장비에서 제공하는 채널 중 확인할 영상을 선택합니다."],
          ["03", "LiveView Mix 구성", "여러 카메라, NVR, DVR 또는 NAS의 채널을 하나의 대시보드로 결합합니다."],
          ["04", "실시간 및 녹화 영상 보기", "채널을 열어 실시간 영상을 보고 장비가 지원하면 녹화를 검색·재생합니다."],
          ["05", "선택적 iCloud 백업", "6자리 PIN으로 지원되는 설정과 인증 정보를 암호화하여 개인 iCloud에 저장합니다."],
          ["06", "장비 기능에 맞게 조정", "프로토콜, 스트림, 녹화 검색 및 재생은 모델, 펌웨어, 권한과 설정에 따라 다릅니다."]
        ],
        note: "Cam-Hub는 장비의 접근 제어를 우회하지 않습니다. 소유·관리하거나 명시적으로 사용 허가를 받은 장비와 네트워크에만 연결하세요."
      },
      support: {
        documentTitle: "Cam-Hub — 지원 및 호환성",
        topline: "지원 및 호환성",
        eyebrow: "SUPPORT",
        title: "지원 및 호환성",
        summary: "연결 문제는 프로토콜, 권한, 포트, 영상 형식 또는 네트워크 설정과 관련될 수 있습니다.",
        meta: [["문의", contactLink], ["App", "Cam-Hub"], ["지원 언어", languages]],
        sections: [
          ["호환성", ["Cam-Hub는 ONVIF와 RTSP를 지원하며 일부 Hikvision, Dahua 및 Synology 장비나 시스템에서 호환성을 테스트했습니다. 실제 결과는 모델, 펌웨어, 권한, 스트림 형식 및 네트워크 설정에 따라 다릅니다.", "일부 장비는 관리 화면에서 ONVIF, RTSP 또는 관련 로컬 서비스를 활성화해야 합니다. 제조사 이름은 호환성 설명을 위한 것이며 제휴, 후원 또는 공식 인증을 의미하지 않습니다."], "compatibility"],
          ["문의 전 확인 사항", ["장비가 온라인이며 Apple 기기에서 접근 가능한지 확인하세요.", "주소, HTTP/RTSP 포트, 사용자 이름 및 비밀번호를 확인하세요.", "필요한 로컬 서비스를 장비 설정에서 활성화하세요.", "계정에 채널 및 녹화 보기 권한이 있는지 확인하세요.", "메인 스트림이 호환되지 않으면 서브 스트림을 사용해 보세요."]],
          ["지원 문의 시", ["App 버전, Apple 기기 및 OS 버전을 알려 주세요.", "장비 모델과 펌웨어 버전을 알려 주세요.", "연결 방식, 단계와 전체 오류 메시지를 알려 주세요.", "비밀번호, 백업 PIN 또는 전체 공개 주소를 보내지 마세요."]],
          ["일반적인 제한", ["ONVIF와 RTSP 구현은 제조사, 모델 및 펌웨어에 따라 다릅니다.", "원격 접근에는 안전하게 구성한 VPN, 라우터 또는 장비 기능이 필요합니다.", "녹화 검색과 재생에는 장비 지원 및 적절한 계정 권한이 필요합니다."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — 개인정보 처리방침",
        topline: "개인정보 처리방침",
        eyebrow: "PRIVACY POLICY",
        title: "개인정보 처리방침",
        summary: "Cam-Hub는 기기 내 처리와 사용자 제어를 중심으로 설계되었으며 제3자 광고 추적을 사용하지 않습니다.",
        meta: [["시행일", "2026년 7월 19일"], ["App", "Cam-Hub"], ["문의", contactLink]],
        sections: [
          ["개요", ["Cam-Hub는 추가 서비스 계정을 요구하지 않으며 제3자 광고나 광고 추적을 포함하지 않습니다. 사용자가 설정하고 접근 권한을 가진 카메라와 녹화 장비에 연결하는 App입니다."]],
          ["장비 정보 및 인증 정보", ["장비 이름, 주소, 포트, 사용자 이름, 채널 정보와 App 설정은 기기에 저장되고 비밀번호는 Apple Keychain에 저장됩니다. 요청한 연결과 작업에만 사용됩니다."]],
          ["연결 및 영상", ["실시간 또는 녹화 영상 확인 시 사용자가 지정한 장비에 연결합니다. 장비, 네트워크, VPN, DNS 또는 원격 서비스는 자체 정책에 따라 연결 정보를 처리할 수 있습니다. 영상은 광고나 행동 분석에 사용하지 않습니다."]],
          ["선택적 iCloud 백업", ["선택 시 지원되는 설정과 인증 정보를 6자리 PIN으로 암호화하여 사용자의 개인 iCloud에 저장합니다. 당사는 PIN을 복구하거나 백업을 복호화할 수 없습니다."]],
          ["구매, 보관 및 삭제", ["구매와 구독은 Apple이 처리하며 당사는 전체 결제 정보를 받지 않습니다.", "로컬 설정은 사용자가 삭제하거나 App을 제거할 때까지 보관됩니다. iCloud 데이터는 Apple Account 설정에서 관리할 수 있습니다. 지원 메일은 문의 처리 및 필요한 기록 기간에만 보관합니다. 적용되는 개인정보 권리 문의는 위 이메일로 연락해 주세요."]],
          ["변경", ["기능, 법률 또는 스토어 요구사항이 바뀌면 본 방침을 업데이트하고 개정일을 게시할 수 있습니다."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — 이용약관",
        topline: "이용약관",
        eyebrow: "TERMS OF USE",
        title: "이용약관",
        summary: "Cam-Hub 사용에는 본 약관과 적용되는 Apple App Store 규칙이 적용됩니다.",
        meta: [["시행일", "2026년 7월 19일"], ["App", "Cam-Hub"], ["문의", contactLink]],
        sections: [
          ["Apple 표준 EULA", ["Cam-Hub에는 Apple 표준 최종 사용자 사용권 계약이 적용됩니다. 충돌 시 적용되는 Apple 약관이 우선합니다.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["적법하고 허가된 사용", ["소유·관리하거나 명시적으로 접근 허가를 받은 장비와 네트워크에만 연결하세요. 개인정보, 감시, 녹화, 직장 및 재산 관련 현지 법률을 준수할 책임은 사용자에게 있습니다."]],
          ["보안 및 호환성", ["장비, 네트워크, 계정, 비밀번호, 원격 접근 및 내보낸 영상의 보안은 사용자의 책임입니다.", "기능은 모델, 펌웨어, 권한, 코덱 및 네트워크에 따라 다릅니다. Cam-Hub는 긴급 감시 서비스가 아니며 중단 없는 운영이나 특정 보안 결과를 보장하지 않습니다."]],
          ["구매 및 소비자 권리", ["구매, 갱신, 해지와 환불은 Apple의 표시 및 관련 법률을 따릅니다. 본 약관은 관련 법률이 보장하는 강행적 소비자 권리를 제한하지 않습니다."]],
          ["제3자 명칭", ["Hikvision, Dahua, Synology, ONVIF 등의 명칭은 각 권리자에게 귀속됩니다. 기술적 호환성은 제휴, 후원 또는 공식 인증을 의미하지 않습니다."]],
          ["변경", ["기능, 법률 또는 스토어 요구사항 변경에 따라 본 약관을 업데이트하고 개정일을 게시할 수 있습니다."]]
        ]
      }
    },

    de: {
      htmlLang: "de",
      languageLabel: "Sprache",
      themeLabel: "Darstellung",
      themeAuto: "Automatisch",
      themeLight: "Hell",
      themeDark: "Dunkel",
      menuLabel: "Menü öffnen",
      navHome: "Start",
      navProduct: "Funktionen",
      navSupport: "Support",
      navPrivacy: "Datenschutz",
      navTerms: "Nutzungsbedingungen",
      footer: "Copyright © 2026 ALMX. All rights reserved.",
      home: {
        documentTitle: "Cam-Hub — Kameras in einer Übersicht",
        topline: "Direkte Verbindung · Zentrale Ansicht",
        eyebrow: "Direkt mit Ihren Geräten verbinden",
        title: '<span class="hero-line">Ihre Kameras.</span><span class="hero-line hero-accent">Eine klare Übersicht.</span>',
        summary: "Cam-Hub verbindet sich mit kompatiblen Kameras und Rekordern, die Sie eingerichtet haben und verwenden dürfen, und ordnet deren Kanäle in einer einheitlichen Ansicht.",
        primaryCTA: "Funktionen ansehen",
        secondaryCTA: "Kompatibilität prüfen",
        trustAccount: "Kein zusätzliches Konto",
        trustProtocol: "ONVIF und RTSP",
        trustMix: "LiveView Mix für mehrere Geräte",
        statusLive: "Live",
        introKicker: "Verschiedene Geräte, eine Ansicht",
        introTitle: "Videokanäle übersichtlich zusammenführen.",
        introBody: "Fügen Sie einzelne Kameras hinzu oder verbinden Sie ausgewählte kompatible NVR-, DVR- und NAS-Überwachungssysteme. Funktionen hängen von Modell, Firmware, Berechtigungen und Netzwerkkonfiguration ab.",
        featureDirectTitle: "Direkte Verbindung",
        featureDirectBody: "Verwendet die am Gerät eingerichtete Adresse und die Zugangsdaten, ohne bestehende Zugriffskontrollen zu umgehen.",
        featureMixBody: "Kombinieren Sie Kanäle verschiedener Kameras und Rekorder in einem eigenen Dashboard.",
        featureProtocolTitle: "Offene Protokolle",
        featureProtocolBody: "Unterstützt ONVIF und RTSP sowie kompatible Verbindungen für ausgewählte Geräte.",
        featurePlaybackTitle: "Live und Wiedergabe",
        featurePlaybackBody: "Zeigen Sie Livevideo an und suchen oder spielen Sie Aufnahmen ab, sofern das Gerät dies unterstützt.",
        compatibilityKicker: "Aktuelle Kompatibilität",
        compatibilityTitle: "Offene Protokolle und getestete Verbindungen.",
        compatibilityNote: "* Bezeichnet Kompatibilitätstests ausgewählter Geräte und Funktionen und keine Zugehörigkeit, Partnerschaft, Förderung oder offizielle Anerkennung durch den Hersteller.",
        closingTitle: "Behalten Sie Ihre Videoansicht im Blick.",
        closingCTA: "Funktionsweise ansehen"
      },
      product: {
        documentTitle: "Cam-Hub — Funktionsübersicht",
        topline: "Funktionsübersicht",
        eyebrow: "CAM-HUB PRODUCT",
        title: "Vom Hinzufügen eines Geräts bis zum eigenen Dashboard.",
        summary: "Cam-Hub verbindet Geräteeinrichtung, Kanalorganisation, Liveansicht und Aufzeichnungswiedergabe in einem klaren Ablauf.",
        steps: [
          ["01", "Gerät hinzufügen", "Geben Sie Adresse und Zugangsdaten eines Geräts ein, das Sie besitzen, verwalten oder ausdrücklich verwenden dürfen. Optional ist eine ONVIF-Verbindung möglich."],
          ["02", "Kanäle auswählen", "Wählen Sie aus den von Kamera oder Rekorder bereitgestellten Kanälen die gewünschten Ansichten aus."],
          ["03", "LiveView Mix erstellen", "Führen Sie Kanäle verschiedener Kameras, NVRs, DVRs oder NAS-Systeme in einem Dashboard zusammen."],
          ["04", "Livevideo und Aufnahmen", "Öffnen Sie Livevideo und nutzen Sie Suche und Wiedergabe, sofern das Gerät diese Funktionen unterstützt."],
          ["05", "Optionales iCloud-Backup", "Verschlüsseln Sie unterstützte Konfigurationen und Zugangsdaten mit einer sechsstelligen PIN und speichern Sie sie in Ihrer privaten iCloud."],
          ["06", "An Gerätefunktionen anpassen", "Protokolle, Streams, Aufzeichnungssuche und Wiedergabe unterscheiden sich je nach Modell, Firmware, Berechtigung und Einstellung."]
        ],
        note: "Cam-Hub umgeht keine Zugriffskontrollen. Verbinden Sie nur Geräte und Netzwerke, die Sie besitzen, verwalten oder ausdrücklich nutzen dürfen."
      },
      support: {
        documentTitle: "Cam-Hub — Support und Kompatibilität",
        topline: "Support und Kompatibilität",
        eyebrow: "SUPPORT",
        title: "Support und Kompatibilität",
        summary: "Verbindungsprobleme hängen häufig mit Protokollen, Berechtigungen, Ports, Videoformaten oder Netzwerkeinstellungen zusammen.",
        meta: [["Kontakt", contactLink], ["App", "Cam-Hub"], ["Sprachen", languages]],
        sections: [
          ["Kompatibilität", ["Cam-Hub unterstützt ONVIF und RTSP und wurde mit ausgewählten Geräten oder Systemen von Hikvision, Dahua und Synology getestet. Die tatsächliche Kompatibilität hängt von Modell, Firmware, Berechtigungen, Streamformat und Netzwerk ab.", "Bei manchen Geräten müssen ONVIF, RTSP oder lokale Dienste in der Geräteverwaltung aktiviert werden. Markennamen dienen nur der Beschreibung der Kompatibilität und bedeuten keine Zugehörigkeit, Förderung oder offizielle Anerkennung."], "compatibility"],
          ["Vor einer Supportanfrage", ["Prüfen Sie, ob das Gerät online und vom Apple-Gerät erreichbar ist.", "Prüfen Sie Adresse, HTTP- und RTSP-Port, Benutzernamen und Passwort.", "Aktivieren Sie erforderliche lokale Dienste am Gerät.", "Prüfen Sie die Berechtigung für Kanäle und Aufnahmen.", "Testen Sie bei Inkompatibilität des Hauptstreams den Substream."]],
          ["Bei Kontaktaufnahme", ["Nennen Sie App-Version, Apple-Gerät und Betriebssystemversion.", "Nennen Sie Gerätemodell und Firmwareversion.", "Beschreiben Sie Verbindung, Schritte und vollständige Fehlermeldung.", "Senden Sie niemals Passwort, Backup-PIN oder eine vollständige öffentliche Adresse."]],
          ["Typische Einschränkungen", ["ONVIF- und RTSP-Implementierungen unterscheiden sich nach Hersteller, Modell und Firmware.", "Fernzugriff benötigt ein sicher eingerichtetes VPN, einen Router oder eine Gerätefunktion.", "Aufzeichnungssuche und Wiedergabe erfordern Geräteunterstützung und passende Berechtigungen."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — Datenschutzerklärung",
        topline: "Datenschutzerklärung",
        eyebrow: "PRIVACY POLICY",
        title: "Datenschutzerklärung",
        summary: "Cam-Hub setzt auf Verarbeitung auf dem Gerät und Nutzerkontrolle und enthält kein Werbetracking durch Dritte.",
        meta: [["Gültig ab", "19. Juli 2026"], ["App", "Cam-Hub"], ["Kontakt", contactLink]],
        sections: [
          ["Überblick", ["Cam-Hub verlangt kein zusätzliches Dienstkonto und enthält keine Drittanbieterwerbung oder Werbeverfolgung. Die App verbindet sich mit Kameras und Rekordern, die Sie konfigurieren und verwenden dürfen."]],
          ["Geräte- und Zugangsdaten", ["Gerätenamen, Adressen, Ports, Benutzernamen, Kanäle und App-Einstellungen werden auf Ihrem Gerät gespeichert; Passwörter im Apple Keychain. Sie werden nur für die von Ihnen angeforderten Verbindungen und Aktionen verwendet."]],
          ["Verbindungen und Video", ["Bei Live- oder Aufzeichnungsansichten verbindet sich die App mit der von Ihnen angegebenen Geräteadresse. Gerät, Netzwerk, VPN, DNS oder gewählte Ferndienste können Verbindungsdaten nach eigenen Richtlinien verarbeiten. Cam-Hub nutzt Video nicht für Werbung oder Verhaltensprofile."]],
          ["Optionales iCloud-Backup", ["Wenn Sie diese Funktion wählen, verschlüsselt die App unterstützte Konfigurationen und Zugangsdaten mit einer sechsstelligen PIN und legt sie in Ihrer privaten iCloud ab. Wir können die PIN nicht wiederherstellen und das Backup nicht entschlüsseln."]],
          ["Käufe, Aufbewahrung und Löschung", ["Käufe und Abonnements verarbeitet Apple; vollständige Zahlungsdaten erhalten wir nicht.", "Lokale Einstellungen bleiben bis zur Löschung oder Deinstallation gespeichert. iCloud-Daten verwalten Sie über Ihr Apple Account. Support-E-Mails bewahren wir nur zur Bearbeitung und für erforderliche Nachweise auf. Für Auskunft, Berichtigung, Löschung oder andere anwendbare Datenschutzrechte wenden Sie sich an die oben genannte Adresse."]],
          ["Änderungen", ["Wir können diese Erklärung bei Änderungen von Funktionen, Recht oder Store-Anforderungen aktualisieren und das Änderungsdatum veröffentlichen."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — Nutzungsbedingungen",
        topline: "Nutzungsbedingungen",
        eyebrow: "TERMS OF USE",
        title: "Nutzungsbedingungen",
        summary: "Für die Nutzung von Cam-Hub gelten diese Bedingungen und die anwendbaren Regeln des Apple App Store.",
        meta: [["Gültig ab", "19. Juli 2026"], ["App", "Cam-Hub"], ["Kontakt", contactLink]],
        sections: [
          ["Apple Standard-EULA", ["Für Cam-Hub gilt die Apple Standard-Endnutzer-Lizenzvereinbarung. Bei Widersprüchen gehen die anwendbaren Apple-Bedingungen vor.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["Rechtmäßige und autorisierte Nutzung", ["Verbinden Sie nur Geräte und Netzwerke, die Sie besitzen, verwalten oder ausdrücklich nutzen dürfen. Sie sind für die Einhaltung örtlicher Datenschutz-, Überwachungs-, Aufzeichnungs-, Arbeits- und Eigentumsvorschriften verantwortlich."]],
          ["Sicherheit und Kompatibilität", ["Sie sind für die Absicherung von Geräten, Netzwerk, Konten, Passwörtern, Fernzugriff und exportierten Medien verantwortlich.", "Funktionen variieren nach Modell, Firmware, Berechtigung, Codec und Netzwerk. Cam-Hub ist kein Notfallüberwachungsdienst und garantiert keinen unterbrechungsfreien Betrieb oder bestimmten Sicherheitserfolg."]],
          ["Käufe und Verbraucherrechte", ["Käufe, Verlängerung, Kündigung und Erstattung richten sich nach Apples Angaben und dem anwendbaren Recht. Zwingende gesetzliche Verbraucherrechte werden durch diese Bedingungen nicht eingeschränkt."]],
          ["Drittanbieterbezeichnungen", ["Hikvision, Dahua, Synology, ONVIF und andere Namen gehören ihren jeweiligen Rechteinhabern. Technische Kompatibilität bedeutet keine Zugehörigkeit, Partnerschaft, Förderung oder offizielle Anerkennung."]],
          ["Änderungen", ["Wir können diese Bedingungen bei Änderungen von Funktionen, Recht oder Store-Anforderungen aktualisieren und das Änderungsdatum veröffentlichen."]]
        ]
      }
    },

    es: {
      htmlLang: "es",
      languageLabel: "Idioma",
      themeLabel: "Apariencia",
      themeAuto: "Automático",
      themeLight: "Claro",
      themeDark: "Oscuro",
      menuLabel: "Abrir menú",
      navHome: "Inicio",
      navProduct: "Funciones",
      navSupport: "Soporte",
      navPrivacy: "Privacidad",
      navTerms: "Términos",
      footer: "Copyright © 2026 ALMX. All rights reserved.",
      home: {
        documentTitle: "Cam-Hub — Tus cámaras en una sola vista",
        topline: "Conexión directa · Vista unificada",
        eyebrow: "Conecta con tus equipos autorizados",
        title: '<span class="hero-line">Tus cámaras.</span><span class="hero-line hero-accent">Una vista clara.</span>',
        summary: "Cam-Hub conecta cámaras y grabadores compatibles que hayas configurado y estés autorizado a utilizar, y organiza sus canales en una sola interfaz.",
        primaryCTA: "Ver funciones",
        secondaryCTA: "Comprobar compatibilidad",
        trustAccount: "Sin cuenta adicional",
        trustProtocol: "Compatible con ONVIF y RTSP",
        trustMix: "LiveView Mix entre equipos",
        statusLive: "En directo",
        introKicker: "Distintos equipos, una sola vista",
        introTitle: "Reúne distintas fuentes de vídeo en una vista clara.",
        introBody: "Añade una cámara individual o conecta determinados sistemas NVR, DVR y NAS compatibles. Las funciones dependen del modelo, firmware, permisos y configuración de red.",
        featureDirectTitle: "Conexión directa",
        featureDirectBody: "Usa la dirección y credenciales configuradas en el equipo sin eludir sus controles de acceso.",
        featureMixBody: "Combina canales de distintas cámaras y grabadores en tu propio panel.",
        featureProtocolTitle: "Protocolos abiertos",
        featureProtocolBody: "Compatible con ONVIF y RTSP, además de conexiones para determinados equipos.",
        featurePlaybackTitle: "Directo y grabaciones",
        featurePlaybackBody: "Mira vídeo en directo y busca o reproduce grabaciones cuando el equipo lo permita.",
        compatibilityKicker: "Compatibilidad actual",
        compatibilityTitle: "Protocolos abiertos y conexiones probadas.",
        compatibilityNote: "* Indica pruebas de compatibilidad con determinados equipos y funciones; no implica afiliación, patrocinio ni aprobación oficial del fabricante.",
        closingTitle: "Organiza tu vista de supervisión.",
        closingCTA: "Ver cómo funciona"
      },
      product: {
        documentTitle: "Cam-Hub — Guía de funciones",
        topline: "Guía de funciones",
        eyebrow: "CAM-HUB PRODUCT",
        title: "Desde añadir un equipo hasta crear tu panel.",
        summary: "Cam-Hub reúne conexión de equipos, organización de canales, vídeo en directo y reproducción en un flujo claro.",
        steps: [
          ["01", "Añade tu equipo", "Introduce la dirección y las credenciales de un equipo que poseas, administres o estés expresamente autorizado a usar. También puedes utilizar ONVIF."],
          ["02", "Elige los canales", "Revisa los canales de la cámara o el grabador y activa los que quieras ver."],
          ["03", "Crea un LiveView Mix", "Combina canales de cámaras, NVR, DVR o NAS distintos en un panel."],
          ["04", "Mira vídeo en directo y grabado", "Abre un canal en directo y usa búsqueda o reproducción cuando el equipo sea compatible."],
          ["05", "Copia opcional en iCloud", "Cifra configuraciones y credenciales compatibles con un PIN de seis dígitos y guárdalas en tu iCloud privado."],
          ["06", "Adapta según el equipo", "Protocolos, flujos, búsqueda y reproducción varían según modelo, firmware, permisos y ajustes."]
        ],
        note: "Cam-Hub no elude los controles de acceso. Conecta únicamente equipos y redes que poseas, administres o estés expresamente autorizado a utilizar."
      },
      support: {
        documentTitle: "Cam-Hub — Soporte y compatibilidad",
        topline: "Soporte y compatibilidad",
        eyebrow: "SUPPORT",
        title: "Soporte y compatibilidad",
        summary: "Los problemas de conexión suelen estar relacionados con protocolos, permisos, puertos, formatos de vídeo o la red.",
        meta: [["Contacto", contactLink], ["App", "Cam-Hub"], ["Idiomas", languages]],
        sections: [
          ["Compatibilidad", ["Cam-Hub admite ONVIF y RTSP y se ha probado con determinados equipos o sistemas de Hikvision, Dahua y Synology. La compatibilidad real depende del modelo, firmware, permisos, formato del flujo y red.", "Algunos equipos requieren activar ONVIF, RTSP u otros servicios locales. Los nombres de marcas solo describen compatibilidad y no implican afiliación, patrocinio ni aprobación oficial."], "compatibility"],
          ["Antes de pedir ayuda", ["Confirma que el equipo esté conectado y sea accesible desde el dispositivo Apple.", "Comprueba dirección, puertos HTTP y RTSP, usuario y contraseña.", "Activa los servicios locales necesarios en el equipo.", "Comprueba los permisos para canales y grabaciones.", "Prueba el flujo secundario si el principal no es compatible."]],
          ["Al contactar con soporte", ["Incluye versión de la App, dispositivo Apple y versión del sistema.", "Incluye modelo del equipo y firmware.", "Describe la conexión, los pasos y el mensaje de error completo.", "No envíes contraseñas, PIN de copia ni una dirección pública completa."]],
          ["Limitaciones habituales", ["Las implementaciones de ONVIF y RTSP varían entre fabricantes, modelos y firmware.", "El acceso remoto requiere una VPN, un router o una función del equipo configurados de forma segura.", "La búsqueda y reproducción requieren compatibilidad del equipo y permisos adecuados."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — Política de privacidad",
        topline: "Política de privacidad",
        eyebrow: "PRIVACY POLICY",
        title: "Política de privacidad",
        summary: "Cam-Hub prioriza el procesamiento en el dispositivo y el control del usuario, sin seguimiento publicitario de terceros.",
        meta: [["Vigente desde", "19 de julio de 2026"], ["App", "Cam-Hub"], ["Contacto", contactLink]],
        sections: [
          ["Resumen", ["Cam-Hub no exige una cuenta de servicio adicional ni integra publicidad o seguimiento publicitario de terceros. Se conecta a cámaras y grabadores configurados y autorizados por el usuario."]],
          ["Información y credenciales", ["Nombres, direcciones, puertos, usuarios, canales y ajustes se guardan en el dispositivo; las contraseñas se guardan en Apple Keychain. Solo se usan para conexiones y acciones solicitadas."]],
          ["Conexiones y vídeo", ["Al ver vídeo en directo o grabado, la App se conecta a la dirección indicada. El equipo, la red, VPN, DNS o servicios remotos pueden tratar datos de conexión según sus políticas. Cam-Hub no usa vídeo para publicidad ni perfiles de comportamiento."]],
          ["Copia opcional en iCloud", ["Si la eliges, la App cifra configuraciones y credenciales compatibles con un PIN de seis dígitos y las guarda en tu iCloud privado. No podemos recuperar el PIN ni descifrar la copia."]],
          ["Compras, conservación y eliminación", ["Apple procesa compras y suscripciones; no recibimos los datos de pago completos.", "Los ajustes locales permanecen hasta que los elimines o desinstales la App. Los datos de iCloud se gestionan desde tu Apple Account. Los correos de soporte se conservan solo para atender la solicitud y mantener registros necesarios. Para ejercer derechos de protección de datos aplicables, escribe al contacto indicado."]],
          ["Cambios", ["Podemos actualizar esta política por cambios de funciones, legislación o requisitos de la tienda y publicaremos la fecha revisada."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — Términos de uso",
        topline: "Términos de uso",
        eyebrow: "TERMS OF USE",
        title: "Términos de uso",
        summary: "El uso de Cam-Hub está sujeto a estos términos y a las normas aplicables del Apple App Store.",
        meta: [["Vigente desde", "19 de julio de 2026"], ["App", "Cam-Hub"], ["Contacto", contactLink]],
        sections: [
          ["EULA estándar de Apple", ["Cam-Hub utiliza el acuerdo de licencia estándar de Apple. Si existe conflicto, prevalecen los términos aplicables de Apple.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["Uso legal y autorizado", ["Conecta únicamente equipos y redes que poseas, administres o estés expresamente autorizado a utilizar. Debes cumplir las leyes locales de privacidad, supervisión, grabación, trabajo y propiedad."]],
          ["Seguridad y compatibilidad", ["Eres responsable de proteger equipos, red, cuentas, contraseñas, acceso remoto y contenidos exportados.", "Las funciones varían según modelo, firmware, permisos, códec y red. Cam-Hub no es un servicio de emergencia y no garantiza funcionamiento ininterrumpido ni resultados concretos de seguridad."]],
          ["Compras y derechos del consumidor", ["Compras, renovaciones, cancelaciones y reembolsos siguen la información de Apple y la ley aplicable. Estos términos no limitan derechos imperativos del consumidor."]],
          ["Nombres de terceros", ["Hikvision, Dahua, Synology, ONVIF y otros nombres pertenecen a sus titulares. La compatibilidad técnica no implica afiliación, patrocinio ni aprobación oficial."]],
          ["Cambios", ["Podemos actualizar estos términos por cambios de funciones, legislación o requisitos de la tienda y publicaremos la fecha revisada."]]
        ]
      }
    },

    fr: {
      htmlLang: "fr",
      languageLabel: "Langue",
      themeLabel: "Apparence",
      themeAuto: "Automatique",
      themeLight: "Clair",
      themeDark: "Sombre",
      menuLabel: "Ouvrir le menu",
      navHome: "Accueil",
      navProduct: "Fonctions",
      navSupport: "Assistance",
      navPrivacy: "Confidentialité",
      navTerms: "Conditions",
      footer: "Copyright © 2026 ALMX. All rights reserved.",
      home: {
        documentTitle: "Cam-Hub — Vos caméras dans une seule vue",
        topline: "Connexion directe · Vue unifiée",
        eyebrow: "Connexion à vos équipements autorisés",
        title: '<span class="hero-line">Vos caméras.</span><span class="hero-line hero-accent">Une vue claire.</span>',
        summary: "Cam-Hub se connecte aux caméras et enregistreurs compatibles que vous avez configurés et êtes autorisé à utiliser, puis organise leurs canaux dans une interface unique.",
        primaryCTA: "Voir les fonctions",
        secondaryCTA: "Vérifier la compatibilité",
        trustAccount: "Aucun compte supplémentaire",
        trustProtocol: "ONVIF et RTSP",
        trustMix: "LiveView Mix multiéquipement",
        statusLive: "Direct",
        introKicker: "Plusieurs équipements, une seule vue",
        introTitle: "Réunissez plusieurs sources vidéo dans une vue claire.",
        introBody: "Ajoutez une caméra ou connectez certains systèmes NVR, DVR et NAS compatibles. Les fonctions dépendent du modèle, du micrologiciel, des autorisations et du réseau.",
        featureDirectTitle: "Connexion directe",
        featureDirectBody: "Utilise l’adresse et les identifiants configurés sur l’équipement sans contourner ses contrôles d’accès.",
        featureMixBody: "Combinez les canaux de différentes caméras et de différents enregistreurs dans votre propre tableau de bord.",
        featureProtocolTitle: "Protocoles ouverts",
        featureProtocolBody: "Prend en charge ONVIF et RTSP, ainsi que des connexions compatibles pour certains équipements.",
        featurePlaybackTitle: "Direct et lecture",
        featurePlaybackBody: "Affichez la vidéo en direct et recherchez ou lisez des enregistrements lorsque l’équipement le permet.",
        compatibilityKicker: "Compatibilité actuelle",
        compatibilityTitle: "Protocoles ouverts et connexions testées.",
        compatibilityNote: "* Signale des tests de compatibilité sur certains équipements et fonctions, sans affiliation, parrainage ni approbation officielle du fabricant.",
        closingTitle: "Organisez clairement votre vue de surveillance.",
        closingCTA: "Découvrir le fonctionnement"
      },
      product: {
        documentTitle: "Cam-Hub — Guide des fonctions",
        topline: "Guide des fonctions",
        eyebrow: "CAM-HUB PRODUCT",
        title: "De l’ajout d’un équipement à votre tableau de bord.",
        summary: "Cam-Hub réunit connexion, organisation des canaux, affichage en direct et lecture des enregistrements dans un parcours clair.",
        steps: [
          ["01", "Ajouter un équipement", "Saisissez l’adresse et les identifiants d’un équipement que vous possédez, gérez ou êtes expressément autorisé à utiliser. Une connexion ONVIF est aussi possible."],
          ["02", "Choisir les canaux", "Sélectionnez les canaux proposés par la caméra ou l’enregistreur que vous souhaitez afficher."],
          ["03", "Créer un LiveView Mix", "Combinez des canaux provenant de caméras, NVR, DVR ou NAS différents dans un même tableau de bord."],
          ["04", "Voir le direct et les enregistrements", "Ouvrez un canal en direct et utilisez la recherche ou la lecture lorsque l’équipement est compatible."],
          ["05", "Sauvegarde iCloud facultative", "Chiffrez les configurations et identifiants pris en charge avec un code PIN à six chiffres et stockez-les dans votre iCloud privé."],
          ["06", "Adapter aux capacités", "Protocoles, flux, recherche et lecture varient selon le modèle, le micrologiciel, les autorisations et les réglages."]
        ],
        note: "Cam-Hub ne contourne pas les contrôles d’accès. Connectez uniquement des équipements et réseaux que vous possédez, gérez ou êtes expressément autorisé à utiliser."
      },
      support: {
        documentTitle: "Cam-Hub — Assistance et compatibilité",
        topline: "Assistance et compatibilité",
        eyebrow: "SUPPORT",
        title: "Assistance et compatibilité",
        summary: "Les problèmes de connexion sont souvent liés aux protocoles, autorisations, ports, formats vidéo ou paramètres réseau.",
        meta: [["Contact", contactLink], ["App", "Cam-Hub"], ["Langues", languages]],
        sections: [
          ["Compatibilité", ["Cam-Hub prend en charge ONVIF et RTSP et a été testé avec certains équipements ou systèmes Hikvision, Dahua et Synology. La compatibilité réelle dépend du modèle, du micrologiciel, des autorisations, du format du flux et du réseau.", "Certains équipements nécessitent l’activation d’ONVIF, de RTSP ou d’un service local. Les noms de marques décrivent uniquement la compatibilité et n’impliquent aucune affiliation, aucun parrainage ni aucune approbation officielle."], "compatibility"],
          ["Avant de contacter l’assistance", ["Vérifiez que l’équipement est en ligne et accessible depuis l’appareil Apple.", "Vérifiez l’adresse, les ports HTTP et RTSP, le nom d’utilisateur et le mot de passe.", "Activez les services locaux nécessaires sur l’équipement.", "Vérifiez les droits d’accès aux canaux et enregistrements.", "Essayez le flux secondaire si le flux principal n’est pas compatible."]],
          ["Lors de votre demande", ["Indiquez la version de l’App, l’appareil Apple et la version du système.", "Indiquez le modèle de l’équipement et son micrologiciel.", "Décrivez la connexion, les étapes et le message d’erreur complet.", "N’envoyez jamais de mot de passe, de PIN de sauvegarde ni d’adresse publique complète."]],
          ["Limites courantes", ["Les implémentations ONVIF et RTSP varient selon le fabricant, le modèle et le micrologiciel.", "L’accès distant nécessite un VPN, un routeur ou une fonction de l’équipement configurés de manière sécurisée.", "La recherche et la lecture exigent la prise en charge par l’équipement et des autorisations adaptées."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — Politique de confidentialité",
        topline: "Politique de confidentialité",
        eyebrow: "PRIVACY POLICY",
        title: "Politique de confidentialité",
        summary: "Cam-Hub privilégie le traitement sur l’appareil et le contrôle par l’utilisateur, sans suivi publicitaire tiers.",
        meta: [["Date d’effet", "19 juillet 2026"], ["App", "Cam-Hub"], ["Contact", contactLink]],
        sections: [
          ["Aperçu", ["Cam-Hub n’exige aucun compte de service supplémentaire et n’intègre ni publicité tierce ni suivi publicitaire. L’App se connecte aux caméras et enregistreurs configurés et autorisés par l’utilisateur."]],
          ["Informations et identifiants", ["Noms, adresses, ports, utilisateurs, canaux et réglages sont stockés sur l’appareil ; les mots de passe dans Apple Keychain. Ils servent uniquement aux connexions et actions demandées."]],
          ["Connexions et vidéo", ["Lors de l’affichage en direct ou enregistré, l’App se connecte à l’adresse indiquée. L’équipement, le réseau, le VPN, le DNS ou les services distants peuvent traiter des données de connexion selon leurs politiques. Cam-Hub n’utilise pas la vidéo pour la publicité ou le profilage comportemental."]],
          ["Sauvegarde iCloud facultative", ["Si vous l’activez, l’App chiffre les configurations et identifiants pris en charge avec un PIN à six chiffres et les place dans votre iCloud privé. Nous ne pouvons ni récupérer le PIN ni déchiffrer la sauvegarde."]],
          ["Achats, conservation et suppression", ["Apple traite les achats et abonnements ; nous ne recevons pas les données de paiement complètes.", "Les réglages locaux restent jusqu’à leur suppression ou la désinstallation. Les données iCloud se gèrent via votre Apple Account. Les e-mails d’assistance sont conservés uniquement pour traiter la demande et garder les justificatifs nécessaires. Pour exercer vos droits applicables d’accès, rectification, suppression ou opposition, contactez l’adresse ci-dessus."]],
          ["Modifications", ["Nous pouvons mettre à jour cette politique en cas d’évolution des fonctions, de la loi ou des exigences de la boutique et publierons la date révisée."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — Conditions d’utilisation",
        topline: "Conditions d’utilisation",
        eyebrow: "TERMS OF USE",
        title: "Conditions d’utilisation",
        summary: "L’utilisation de Cam-Hub est soumise à ces conditions et aux règles applicables de l’Apple App Store.",
        meta: [["Date d’effet", "19 juillet 2026"], ["App", "Cam-Hub"], ["Contact", contactLink]],
        sections: [
          ["CLUF standard Apple", ["Cam-Hub utilise le contrat de licence utilisateur final standard d’Apple. En cas de conflit, les conditions Apple applicables prévalent.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["Utilisation légale et autorisée", ["Connectez uniquement les équipements et réseaux que vous possédez, gérez ou êtes expressément autorisé à utiliser. Vous devez respecter les lois locales relatives à la vie privée, la surveillance, l’enregistrement, le travail et la propriété."]],
          ["Sécurité et compatibilité", ["Vous êtes responsable de la sécurité des équipements, du réseau, des comptes, mots de passe, accès distants et médias exportés.", "Les fonctions varient selon le modèle, le micrologiciel, les autorisations, le codec et le réseau. Cam-Hub n’est pas un service d’urgence et ne garantit ni continuité ni résultat de sécurité particulier."]],
          ["Achats et droits des consommateurs", ["Achats, renouvellements, résiliations et remboursements suivent les informations d’Apple et la loi applicable. Ces conditions ne limitent aucun droit impératif du consommateur."]],
          ["Noms de tiers", ["Hikvision, Dahua, Synology, ONVIF et les autres noms appartiennent à leurs titulaires. La compatibilité technique n’implique aucune affiliation, aucun parrainage ni aucune approbation officielle."]],
          ["Modifications", ["Nous pouvons mettre à jour ces conditions en cas d’évolution des fonctions, de la loi ou des exigences de la boutique et publierons la date révisée."]]
        ]
      }
    },

    ar: {
      htmlLang: "ar",
      dir: "rtl",
      languageLabel: "اللغة",
      themeLabel: "المظهر",
      themeAuto: "تلقائي",
      themeLight: "فاتح",
      themeDark: "داكن",
      menuLabel: "فتح القائمة",
      navHome: "الرئيسية",
      navProduct: "الميزات",
      navSupport: "الدعم",
      navPrivacy: "الخصوصية",
      navTerms: "الشروط",
      footer: "Copyright © 2026 ALMX. All rights reserved.",
      home: {
        documentTitle: "Cam-Hub — كاميراتك في عرض واحد",
        topline: "اتصال مباشر · عرض موحّد",
        eyebrow: "اتصل بالمعدات المصرح لك باستخدامها",
        title: '<span class="hero-line">كاميراتك.</span><span class="hero-line hero-accent">عرض واحد واضح.</span>',
        summary: "يتصل Cam-Hub بالكاميرات والمسجلات المتوافقة التي أعددتها ولديك تصريح باستخدامها، وينظم قنواتها في واجهة واحدة.",
        primaryCTA: "استعراض الميزات",
        secondaryCTA: "التحقق من التوافق",
        trustAccount: "لا حاجة إلى حساب إضافي",
        trustProtocol: "دعم ONVIF وRTSP",
        trustMix: "LiveView Mix بين الأجهزة",
        statusLive: "مباشر",
        introKicker: "أجهزة متعددة في مكان واحد",
        introTitle: "اجمع مصادر الفيديو المختلفة في عرض واضح.",
        introBody: "أضف كاميرا منفردة أو اتصل بأنظمة NVR وDVR وNAS متوافقة محددة. تعتمد الميزات على الطراز والبرنامج الثابت والصلاحيات وإعدادات الشبكة.",
        featureDirectTitle: "اتصال مباشر",
        featureDirectBody: "يستخدم عنوان الجهاز وبيانات الدخول المحددة عليه دون تجاوز ضوابط الوصول الأصلية.",
        featureMixBody: "ادمج قنوات من كاميرات ومسجلات مختلفة في لوحة عرض خاصة بك.",
        featureProtocolTitle: "بروتوكولات مفتوحة",
        featureProtocolBody: "يدعم ONVIF وRTSP واتصالات متوافقة مع معدات محددة.",
        featurePlaybackTitle: "البث والتسجيلات",
        featurePlaybackBody: "شاهد الفيديو المباشر وابحث عن التسجيلات أو شغّلها عندما تدعم المعدات ذلك.",
        compatibilityKicker: "التوافق الحالي",
        compatibilityTitle: "بروتوكولات مفتوحة واتصالات مختبرة.",
        compatibilityNote: "* يشير إلى اختبار التوافق مع معدات وميزات محددة، ولا يعني الانتساب أو الرعاية أو الاعتماد الرسمي من الشركة المصنعة.",
        closingTitle: "نظّم عرض المراقبة بوضوح.",
        closingCTA: "معرفة طريقة الاستخدام"
      },
      product: {
        documentTitle: "Cam-Hub — دليل الميزات",
        topline: "دليل الميزات",
        eyebrow: "CAM-HUB PRODUCT",
        title: "من إضافة المعدات إلى إنشاء لوحة العرض.",
        summary: "يجمع Cam-Hub اتصال المعدات وتنظيم القنوات والبث المباشر وتشغيل التسجيلات في خطوات واضحة.",
        steps: [
          ["01", "إضافة المعدات", "أدخل العنوان وبيانات الدخول لمعدات تملكها أو تديرها أو لديك تصريح صريح باستخدامها. يمكنك أيضًا اختيار اتصال ONVIF."],
          ["02", "اختيار القنوات", "راجع القنوات التي توفرها الكاميرا أو المسجل وفعّل القنوات التي تريد عرضها."],
          ["03", "إنشاء LiveView Mix", "ادمج قنوات من كاميرات أو أنظمة NVR وDVR وNAS مختلفة في لوحة واحدة."],
          ["04", "عرض البث والتسجيلات", "افتح قناة للبث المباشر واستخدم البحث والتشغيل عندما تدعم المعدات ذلك."],
          ["05", "نسخة iCloud اختيارية", "شفّر الإعدادات وبيانات الدخول المدعومة برمز PIN من ستة أرقام واحفظها في iCloud الخاص بك."],
          ["06", "التكيف مع قدرات المعدات", "تختلف البروتوكولات والتدفقات والبحث والتشغيل حسب الطراز والبرنامج الثابت والصلاحيات والإعدادات."]
        ],
        note: "لا يتجاوز Cam-Hub ضوابط الوصول. اتصل فقط بالمعدات والشبكات التي تملكها أو تديرها أو لديك تصريح صريح باستخدامها."
      },
      support: {
        documentTitle: "Cam-Hub — الدعم والتوافق",
        topline: "الدعم والتوافق",
        eyebrow: "SUPPORT",
        title: "الدعم والتوافق",
        summary: "ترتبط مشكلات الاتصال عادة بالبروتوكولات أو الصلاحيات أو المنافذ أو تنسيق الفيديو أو إعدادات الشبكة.",
        meta: [["التواصل", contactLink], ["App", "Cam-Hub"], ["اللغات", languages]],
        sections: [
          ["التوافق", ["يدعم Cam-Hub بروتوكولي ONVIF وRTSP، وقد تم اختباره مع معدات أو أنظمة محددة من Hikvision وDahua وSynology. يعتمد التوافق الفعلي على الطراز والبرنامج الثابت والصلاحيات وتنسيق التدفق والشبكة.", "قد تتطلب بعض المعدات تفعيل ONVIF أو RTSP أو خدمة محلية من صفحة الإدارة. تُذكر أسماء العلامات لوصف التوافق فقط ولا تعني الانتساب أو الرعاية أو الاعتماد الرسمي."], "compatibility"],
          ["قبل طلب الدعم", ["تأكد من أن المعدات متصلة ويمكن لجهاز Apple الوصول إليها.", "تحقق من العنوان ومنافذ HTTP وRTSP واسم المستخدم وكلمة المرور.", "فعّل الخدمات المحلية المطلوبة على المعدات.", "تحقق من صلاحية عرض القنوات والتسجيلات.", "جرّب التدفق الفرعي إذا لم يكن التدفق الرئيسي متوافقًا."]],
          ["عند التواصل مع الدعم", ["اذكر إصدار التطبيق وجهاز Apple وإصدار النظام.", "اذكر طراز المعدات وإصدار البرنامج الثابت.", "اشرح طريقة الاتصال والخطوات ورسالة الخطأ كاملة.", "لا ترسل كلمة المرور أو رمز PIN للنسخة الاحتياطية أو عنوانًا عامًا كاملًا."]],
          ["قيود شائعة", ["تختلف تطبيقات ONVIF وRTSP بين الشركات والطرازات وإصدارات البرامج الثابتة.", "يتطلب الوصول عن بُعد شبكة VPN أو جهاز توجيه أو ميزة وصول تم إعدادها بشكل آمن.", "يتطلب البحث في التسجيلات وتشغيلها دعم المعدات والصلاحيات المناسبة."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — سياسة الخصوصية",
        topline: "سياسة الخصوصية",
        eyebrow: "PRIVACY POLICY",
        title: "سياسة الخصوصية",
        summary: "يعتمد Cam-Hub على المعالجة داخل الجهاز وتحكم المستخدم، ولا يتضمن تتبعًا إعلانيًا من جهات خارجية.",
        meta: [["تاريخ السريان", "19 يوليو 2026"], ["App", "Cam-Hub"], ["التواصل", contactLink]],
        sections: [
          ["نظرة عامة", ["لا يتطلب Cam-Hub حساب خدمة إضافيًا ولا يدمج إعلانات أو تتبعًا إعلانيًا من جهات خارجية. يتصل التطبيق بالكاميرات والمسجلات التي يجهزها المستخدم ويُصرح له باستخدامها."]],
          ["معلومات المعدات وبيانات الدخول", ["تُحفظ أسماء المعدات وعناوينها ومنافذها وأسماء المستخدمين والقنوات والإعدادات على الجهاز، وتُحفظ كلمات المرور في Apple Keychain. تُستخدم فقط للاتصالات والإجراءات التي يطلبها المستخدم."]],
          ["الاتصالات والفيديو", ["عند عرض بث مباشر أو تسجيل، يتصل التطبيق بالعنوان الذي حدده المستخدم. قد تعالج المعدات أو الشبكة أو VPN أو DNS أو الخدمات البعيدة معلومات الاتصال وفق سياساتها. لا يستخدم Cam-Hub الفيديو للإعلانات أو بناء ملفات سلوكية."]],
          ["نسخة iCloud اختيارية", ["عند اختيارها، يشفّر التطبيق الإعدادات وبيانات الدخول المدعومة برمز PIN من ستة أرقام ويحفظها في iCloud الخاص بالمستخدم. لا يمكننا استعادة الرمز أو فك تشفير النسخة."]],
          ["المشتريات والاحتفاظ والحذف", ["تعالج Apple المشتريات والاشتراكات ولا نتلقى بيانات الدفع الكاملة.", "تبقى الإعدادات المحلية حتى يحذفها المستخدم أو يزيل التطبيق. يمكن إدارة بيانات iCloud من Apple Account. نحتفظ برسائل الدعم فقط لمعالجة الطلب وحفظ السجلات الضرورية. للاستفسار عن حقوق الخصوصية المطبقة، تواصل عبر البريد أعلاه."]],
          ["التغييرات", ["قد نحدّث هذه السياسة عند تغير الميزات أو القوانين أو متطلبات المتجر، وسننشر تاريخ التعديل."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — شروط الاستخدام",
        topline: "شروط الاستخدام",
        eyebrow: "TERMS OF USE",
        title: "شروط الاستخدام",
        summary: "يخضع استخدام Cam-Hub لهذه الشروط ولقواعد Apple App Store المطبقة.",
        meta: [["تاريخ السريان", "19 يوليو 2026"], ["App", "Cam-Hub"], ["التواصل", contactLink]],
        sections: [
          ["اتفاقية Apple القياسية", ["يستخدم Cam-Hub اتفاقية ترخيص المستخدم النهائي القياسية من Apple. عند التعارض تسري شروط Apple المطبقة.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["الاستخدام القانوني والمصرح", ["اتصل فقط بالمعدات والشبكات التي تملكها أو تديرها أو لديك تصريح صريح باستخدامها. تقع عليك مسؤولية الالتزام بالقوانين المحلية المتعلقة بالخصوصية والمراقبة والتسجيل والعمل والملكية."]],
          ["الأمان والتوافق", ["أنت مسؤول عن حماية المعدات والشبكة والحسابات وكلمات المرور والوصول عن بُعد والوسائط المصدّرة.", "تختلف الميزات حسب الطراز والبرنامج الثابت والصلاحيات والترميز والشبكة. Cam-Hub ليس خدمة مراقبة للطوارئ ولا يضمن التشغيل دون انقطاع أو نتيجة أمنية محددة."]],
          ["المشتريات وحقوق المستهلك", ["تخضع المشتريات والتجديد والإلغاء والاسترداد لمعلومات Apple والقانون المطبق. لا تحد هذه الشروط من حقوق المستهلك الإلزامية التي يمنحها القانون المطبق."]],
          ["أسماء الجهات الأخرى", ["تعود أسماء Hikvision وDahua وSynology وONVIF وغيرها إلى أصحابها. لا يعني التوافق التقني الانتساب أو الرعاية أو الاعتماد الرسمي."]],
          ["التغييرات", ["قد نحدّث هذه الشروط عند تغير الميزات أو القوانين أو متطلبات المتجر، وسننشر تاريخ التعديل."]]
        ]
      }
    }
  };
})();
