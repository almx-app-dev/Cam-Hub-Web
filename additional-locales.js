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
        featureTVTitle: "Apple TV 大屏监看",
        featureTVBody: "在 Apple TV 上使用 LiveView Mix、设备监看墙和全屏画面；也可在 iPhone 或 iPad 上建立 Apple TV 专用加密备份，再使用 PIN 还原。",
        featureWebhookTitle: "Webhook 控制面板",
        featureWebhookBody: "将 LiveView Mix 的空白位置设为 HTTP Webhook 按钮，连接您自行管理的门禁、照明、场景或其他网络服务；重要操作可要求再次确认。",
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
        featureTVTitle: "Apple TV の大画面表示",
        featureTVBody: "Apple TV で LiveView Mix、機器ごとの監視画面、全画面映像を表示できます。iPhone／iPad で Apple TV 用の暗号化バックアップを作成し、PIN で復元できます。",
        featureWebhookTitle: "Webhook 操作パネル",
        featureWebhookBody: "LiveView Mix の空きスロットを HTTP Webhook ボタンに変え、管理しているゲート、照明、シーンなどのサービスへ接続できます。重要な操作には確認画面を設定できます。",
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
        featureTVTitle: "Apple TV 대화면 모니터링",
        featureTVBody: "Apple TV에서 LiveView Mix, 장비별 모니터링 화면과 전체 화면 영상을 볼 수 있습니다. iPhone 또는 iPad에서 Apple TV용 암호화 백업을 만들고 PIN으로 복원할 수 있습니다.",
        featureWebhookTitle: "Webhook 제어 패널",
        featureWebhookBody: "LiveView Mix의 빈 슬롯을 HTTP Webhook 버튼으로 바꾸어 직접 관리하는 출입, 조명, 장면 또는 기타 네트워크 서비스에 연결할 수 있습니다. 중요한 동작에는 확인을 설정할 수 있습니다.",
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
        title: '<span class="hero-line">Ihre Kameras.</span><span class="hero-line hero-accent">Ohne Cloud-Zwang.</span>',
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
        featureTVTitle: "Monitoring auf Apple TV",
        featureTVBody: "Nutzen Sie LiveView Mix, gerätebezogene Übersichten und Vollbildvideo auf Apple TV. Erstellen Sie auf iPhone oder iPad ein verschlüsseltes Apple-TV-Backup und stellen Sie es mit Ihrer PIN wieder her.",
        featureWebhookTitle: "Webhook-Steuerfelder",
        featureWebhookBody: "Verwandeln Sie freie LiveView-Mix-Felder in HTTP-Webhook-Schaltflächen für selbst verwaltete Zugänge, Beleuchtung, Szenen oder andere Netzwerkdienste. Wichtige Aktionen können eine Bestätigung verlangen.",
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
        featureTVTitle: "Monitorización en Apple TV",
        featureTVBody: "Usa LiveView Mix, vistas por equipo y vídeo a pantalla completa en Apple TV. Crea en el iPhone o iPad una copia cifrada para Apple TV y restáurala con tu PIN.",
        featureWebhookTitle: "Paneles de control Webhook",
        featureWebhookBody: "Convierte una casilla libre de LiveView Mix en botones HTTP Webhook para accesos, iluminación, escenas u otros servicios de red que administras. Las acciones importantes pueden requerir confirmación.",
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
        featureTVTitle: "Surveillance sur Apple TV",
        featureTVBody: "Utilisez LiveView Mix, les vues par équipement et la vidéo plein écran sur Apple TV. Créez sur iPhone ou iPad une sauvegarde chiffrée dédiée à Apple TV, puis restaurez-la avec votre PIN.",
        featureWebhookTitle: "Panneaux de commande Webhook",
        featureWebhookBody: "Transformez une case libre de LiveView Mix en boutons HTTP Webhook pour les accès, l’éclairage, les scènes ou d’autres services réseau que vous gérez. Les actions importantes peuvent demander confirmation.",
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
        title: '<span class="hero-line">كاميراتك.</span><span class="hero-line hero-accent">عرض واضح.</span>',
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
        featureTVTitle: "المراقبة على Apple TV",
        featureTVBody: "استخدم LiveView Mix وعروض المعدات والفيديو بملء الشاشة على Apple TV. أنشئ نسخة احتياطية مشفرة مخصصة لـ Apple TV على iPhone أو iPad ثم استعدها باستخدام رمز PIN.",
        featureWebhookTitle: "لوحات تحكم Webhook",
        featureWebhookBody: "حوّل خانة فارغة في LiveView Mix إلى أزرار HTTP Webhook لخدمات الوصول أو الإضاءة أو المشاهد أو غيرها من خدمات الشبكة التي تديرها. يمكن طلب تأكيد للإجراءات المهمة.",
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

  const wikiByLocale = {
    "zh-Hans": {
      documentTitle: "Cam-Hub — 功能介绍", topline: "功能介绍", eyebrow: "CAM-HUB 功能介绍",
      title: '<span class="page-title-line">从添加设备开始，</span><span class="page-title-line">逐步设置 Cam-Hub。</span>', summary: "按照 App 中实际出现的入口与选项整理，可直接前往设备、LiveView Mix、回放、迁移或设置章节。", wikiLabel: "快速前往章节",
      wiki: [
        ["devices", "01", "设备与通道", "先完成设备连接，再决定哪些通道显示在监看画面。", [
          ["准备连接信息", "输入设备地址或主机名、HTTP／RTSP 端口、用户名和密码。请仅连接您拥有、管理或已获明确授权使用的设备。"],
          ["自动识别或使用 ONVIF", "Cam-Hub 会尝试兼容的设备连接，也可直接选择 ONVIF。ONVIF 或 RTSP 可能需要先在设备管理界面启用。"],
          ["整理通道", "连接成功后可选择要显示的摄像头、停用不需要的通道，并查看型号、固件和通道数量。"]
        ]],
        ["mix", "02", "LiveView Mix 监看墙", "把不同摄像头与录像设备的通道放在同一个画面。", [
          ["跨设备组合", "可同时加入来自不同摄像头、NVR、DVR 或 NAS 监控系统的通道。"],
          ["17 种全屏布局", "支持 2×2 至 7×7 网格，以及 1+3、1+5、1+7、1+21、1+27 主画面布局；高密度布局更适合大屏幕。"],
          ["排序与填充方式", "调整摄像头顺序，并在 Fit、Crop、Stretch 三种画面填充方式之间选择。"],
          ["水印与多用途空白格", "可显示设备名、摄像头名或 IP；空白格还可放置图片、时钟、文字标签或调用自有 HTTP Webhook 的控制按钮。"]
        ]],
        ["viewing", "03", "实时查看与录像回放", "根据单画面或多画面场景调整清晰度与操作方式。", [
          ["HD／SD 与缩放", "分别设置单摄像头和多摄像头的默认画质；单通道支持手势缩放、双击缩放和横屏显示。"],
          ["快照与分享", "设备支持时可截取当前画面并通过系统分享。分享前请确认内容与接收对象。"],
          ["录像时间轴", "按日期查看可缩放时间轴，并区分 Continuous 与 Events。搜索和播放能力取决于设备与账号权限。"]
        ], '功能可用性提示：实时串流、截图、<span class="keep-phrase">主／子码流切换</span>、录像搜索、<span class="keep-phrase">Continuous／Events 分类</span>、时间轴定位和回放，均以摄像机或录像主机实际返回的能力，以及登录设备账号获得的权限为准。'],
        ["backup", "04", "加密备份与迁移", "备份和迁移包含敏感连接信息，请妥善保管 PIN 与分享代码。", [
          ["iCloud 加密备份", "使用六位数 PIN 加密设备、凭据、通道和设置并保存到您的 iCloud。PIN 无法由开发者找回。"],
          ["还原与加密代码", "可用原 PIN 从 iCloud 还原，也可导出加密代码在另一台 Cam-Hub 中导入；仅与可信对象分享完整代码。"]
        ]],
        ["preferences", "05", "显示、串流与数据管理", "按网络、设备性能和日常使用方式调整 App。", [
          ["监看行为", "可隐藏离线摄像头、在支持的设备上保持画面外串流，并选择启动时打开上次位置、LiveView Mix 或指定设备。"],
          ["重置与删除", "还原默认设置会保留设备；删除全部数据会移除本机设备与密码；删除 iCloud 备份只处理云端备份。"]
        ]],
        ["tv-control", "06", "Apple TV 与 Webhook 控制", "将监看画面扩展到电视，并在 LiveView Mix 中加入由您自行管理的 HTTP 控制按钮。", [], "安全提示：Webhook 按钮会直接请求您指定的网络端点。请限制端点权限、妥善保护认证信息，并为难以撤销的操作启用再次确认。"]
      ]
    },
    ja: {
      documentTitle: "Cam-Hub — 機能紹介", topline: "機能紹介", eyebrow: "CAM-HUB 機能紹介",
      title: '<span class="page-title-line">Cam-Hub の機能。</span><span class="page-title-line">画面ごとに詳しく紹介。</span>', summary: "App に表示される画面と機能に沿って、デバイス、LiveView Mix、再生、移行、設定を詳しく紹介します。", wikiLabel: "機能を選ぶ",
      wiki: [
        ["devices", "01", "デバイスとチャンネル", "まずデバイスを接続し、監視画面に表示するチャンネルを選びます。", [
          ["接続情報を準備", [
            "「デバイス」を開き、「デバイスを追加」をタップして追加画面を表示します。",
            "名前は任意です。IP アドレスまたはホスト名とユーザー名は必須です。HTTP ポートの初期値は 80、RTSP ポートは 554 です。異なる場合は、デバイスの管理画面に表示されている値を使用します。",
            "パスワードを入力して「追加」をタップします。接続できない場合は、接続、認証情報、未対応デバイスなど、エラーの種類に応じた案内が表示されます。",
            "ご自身が所有・管理している、または明示的な使用許可を得ているデバイスとアカウントにのみ接続してください。"
          ]],
          ["自動判別または ONVIF で接続", [
            "通常は「ONVIF で接続」をオフのまま追加すると、Cam-Hub が互換性のある接続方法を試し、利用可能な機能を取得します。",
            "デバイスが認識されない場合や、オープンプロトコルを直接使用する場合は、「ONVIF で接続」をオンにして追加し直します。",
            "デバイス側で ONVIF と RTSP を有効にし、視聴権限のある ONVIF アカウントを作成する必要がある場合があります。接続時の注意点は「互換性リファレンス」で確認できます。"
          ]],
          ["カメラのチャンネルを整理", [
            "デバイスを追加したら、そのカードを展開します。「チャンネル」には、デバイスから取得したカメラが表示されます。",
            "表示するチャンネルをオンにし、不要なチャンネルをオフにします。レコーダーのチャンネルでは、タイルを隠すだけでなく、「カメラをオフ」にしてストリーミングを停止できる場合もあります。",
            "オフラインのチャンネルは、薄い表示のまま「デバイス」一覧に残ります。「オフラインのカメラを隠す」をオンにすると、ライブ監視画面には表示されません。"
          ]],
          ["デバイス情報を確認・更新", [
            "デバイスカードを展開すると、モデル、アドレス、ポート、シリアル番号、ファームウェア、チャンネル数を確認できます。",
            "右上の操作からデバイス名を変更できます。下に引いて更新すると、最新のチャンネル状態を取得します。",
            "表示方法の操作は、現在の画面だけを Fit、Crop、Stretch に切り替えます。全画面ボタンを押すと、そのデバイスのチャンネル一覧を全画面で表示します。"
          ]]
        ]],
        ["mix", "02", "LiveView Mix モニタリングウォール", "異なるカメラやレコーダーのチャンネルをひとつの画面にまとめ、表示する画面に合わせて密度を調整できます。", [
          ["LiveView Mix にカメラを追加", [
            "「設定」→「LiveView Mix ダッシュボード」を開きます。",
            "デバイスごとにチャンネルを選びます。チャンネル単位で SD または HD を設定でき、「すべて SD」「すべて HD」で選択中の全チャンネルをまとめて変更できます。",
            "「ライブ」に戻って LiveView Mix を選びます。タブにはスクロール可能なプレビューが表示され、「全画面」をタップすると、選択したモニタリングウォールのレイアウトで表示されます。"
          ]],
          ["17 種類の全画面レイアウト", [
            "均等グリッドは 2×2、2×3、3×3、3×4、4×4、5×4、6×4、5×5、7×4、6×5、6×6、7×7 から選べます。",
            "メイン画面付きレイアウトは 1+3、1+5、1+7、1+21、1+27 です。最初のカメラが最も大きなメインタイルに配置されます。",
            "16 タイルを超えるレイアウトには画面アイコンが表示されます。表示密度が高いため、大きなディスプレイに適しています。"
          ]],
          ["カメラと空きスロットを配置", [
            "LiveView Mix の設定で「カメラを配置」をタップします。",
            "タイルを別のタイルへドラッグすると位置を交換できます。「編集」から並べ替え、スワイプで削除することもできます。一覧の順番に沿って、レイアウトの各ページへ配置されます。",
            "「空きスロットを追加」をタップすると、意図的に空白を残せます。空のタイルを選ぶと、表示内容を設定できます。"
          ]],
          ["3 種類の表示方法", [
            "Fit は画像全体を保ち、縦横比が異なる部分に余白を追加します。",
            "Crop は縦横比を保ったままタイル全体を満たすように拡大し、外側にはみ出した部分を切り取ります。",
            "Stretch は切り取らずにタイル全体へ広げますが、画像が横長または縦長に見える場合があります。全体の初期設定として使うほか、デバイスやチャンネルごとに一時的に変更できます。"
          ]],
          ["透かしをカスタマイズ", [
            "「透かし」を開き、「透かしを表示」をオンにして、デバイス名、カメラ名、IP アドレスから表示内容を選びます。",
            "位置、不透明度、色、文字サイズを調整し、標準、角丸、等幅、セリフのフォントから選べます。",
            "読みやすさは、影、輪郭、プレート、なしから選択できます。明るい映像と暗い映像のプレビューで、昼夜どちらでも読めることを確認できます。"
          ]],
          ["画像・時計・ラベル・操作パネル", [
            "「配置」で空きスロットを追加し、そのタイルを選んで「スロットエディタ」を開きます。",
            "「画像」には写真または新しい画像を設定できます。「時計」では日付、秒、12 時間／24 時間表示を選べます。「ラベル」には任意の文字、SF Symbol、色を設定できます。",
            "「操作パネル」では、ゲート、ガレージ、照明、鍵、カーテン、シーン、警報、ファン、コンセント、空調、カスタムの各テンプレートから HTTP Webhook ボタンを作成できます。開放や解錠などの操作には確認画面を設定できます。",
            "対応する画像とスロット設定は、暗号化バックアップで移行できます。Webhook の接続先は、ご自身の責任で作成し、安全に管理してください。"
          ]]
        ]],
        ["viewing", "03", "ライブ表示と録画再生", "単画面では鮮明さと操作性を、多画面ではデバイス負荷と通信量を考慮して画質を調整できます。", [
          ["単画面・複数画面の画質", [
            "「設定」→「デフォルトの画質」を開き、「1 台のカメラ」と「複数のカメラ」にそれぞれ HD または SD を設定します。",
            "デバイスがメイン／サブストリームの切り替えに対応している場合、単一チャンネルの操作バーに SD と HD が表示されます。",
            "LiveView Mix ではチャンネルごとに画質を設定するか、「すべて SD」「すべて HD」を適用できます。多くのタイルを同時に再生する場合は、低い画質を選ぶと通信量やデバイス負荷を抑えられることがあります。"
          ]],
          ["ズームと横向き全画面表示", [
            "単一チャンネル画面をピンチして拡大し、拡大した画像をドラッグして別の範囲を確認できます。",
            "ダブルタップすると 2.5 倍に拡大し、もう一度ダブルタップすると画像全体に戻ります。",
            "端末を横向きにすると、ナビゲーション、操作部、タブバーが非表示になり、映像を画面いっぱいに表示できます。"
          ]],
          ["スナップショットと共有", [
            "単一チャンネルの操作バーで「スナップショット」をタップすると、デバイスへ現在の画像を要求します。",
            "画像を受信するとプレビューが開きます。「共有」をタップすると、システムの共有シートから送信できます。",
            "スナップショットには人物、住所、日時などの個人情報が含まれる場合があります。送信前に画像、共有先、適用される規則を確認してください。"
          ]],
          ["日付・タイムライン・録画分類", [
            "チャンネル画面の下で日付を選ぶと、その日の録画をデバイスへ問い合わせます。",
            "録画は「連続録画」と「イベント」を切り替えられます。タイムラインをドラッグまたは拡大し、中央のカーソルを目的の時刻へ合わせるか、一覧から区間を選びます。",
            "再生中は「再生」とデバイスの時刻が表示されます。「ライブに戻る」をタップするとライブ映像へ戻ります。デバイスによっては、システムプレーヤーで開く前にクリップをダウンロードします。"
          ]]
        ], '機能の利用条件：ライブ映像、スナップショット、<span class="keep-phrase">メイン／サブストリーム切り替え</span>、録画検索、<span class="keep-phrase">連続録画／イベント分類</span>、タイムライン操作、録画再生は、カメラまたはレコーダーが実際に提供する機能と、ログインしたデバイスアカウントに付与された権限により異なります。'],
        ["backup", "04", "暗号化バックアップと移行", "バックアップと移行には接続情報が含まれます。Cam-Hub は内容を暗号化しますが、PIN と共有先はお客様ご自身で安全に管理してください。", [
          ["パスワードを端末内で保護", [
            "追加したデバイスのパスワードは Apple Keychain に保存されます。デバイス名、アドレス、ポート、チャンネル、App の設定は端末内のデータとして保存されます。",
            "Cam-Hub は、ユーザーが実行した接続、録画検索、スナップショット、バックアップ、移行のためにのみ、これらの情報を使用します。",
            "「すべてのデータを削除」を実行すると、端末内のデバイス情報と保存済みパスワードが削除されます。バックアップしていない設定は、App を削除した場合も復元できなくなることがあります。"
          ]],
          ["6 桁 PIN で iCloud にバックアップ", [
            "「設定」→「iCloud にバックアップ」を開き、保存先を選んで 6 桁の PIN を入力し、確認のためもう一度入力します。",
            "対応するデバイス、認証情報、チャンネル、LiveView Mix、App の設定がバックアップされます。Cam-Hub は PIN で暗号化してから、お客様個人の iCloud に保存します。",
            "開発者は PIN を保管せず、復元もできません。安全な場所に保管し、「現在のバックアップ」に新しい日時とデバイス数が表示されていることを確認してください。"
          ]],
          ["iCloud から復元", [
            "「設定」→「iCloud から復元」を開き、バックアップを選んで、作成時に使用した PIN を入力します。",
            "可能な限り同じ App バージョンを使用し、バックアップを保存した Apple Account でサインインしていることを確認します。古いバージョンのバックアップは、一覧に表示するために作り直す必要がある場合があります。",
            "復元できる数は現在のプラン上限に従います。復元後は、すべてのデバイスアドレス、チャンネル、LiveView Mix が現在のネットワークで正しいことを確認してください。"
          ]],
          ["iCloud を使わない暗号化移行", [
            "「設定」→「カメラを書き出す」で暗号化コードを作成し、コピーまたは共有します。移行先の Cam-Hub で「カメラを取り込む」を開き、コード全体を貼り付けます。",
            "取り込みデータにはデバイスと認証情報が含まれ、移行先のプラン上限が適用されます。",
            "コード全体を入手した人は、Cam-Hub でそのデバイスを追加できる可能性があります。公開チャット、問い合わせチケット、ウェブサイトには投稿せず、必要のある信頼できる相手にだけ送信してください。"
          ]]
        ]],
        ["preferences", "05", "表示・ストリーミング・データ管理", "ネットワークと端末に合わせて App の動作を調整できます。初期化する場合も、設定、端末内データ、iCloud バックアップを個別に扱えます。", [
          ["オフラインのカメラを隠す", [
            "「設定」→「オフラインのカメラを隠す」をオンにすると、信号のないカメラが「ライブ」と各ライブ監視画面から非表示になります。",
            "オフラインのカメラは薄い表示のまま「デバイス」のチャンネル一覧に残ります。削除済みのカメラと区別でき、信号が戻ると再び表示されます。"
          ]],
          ["画面外でもストリームを接続したままにする", [
            "再接続に時間がかかる対応デバイスを Cam-Hub が検出すると、「ストリーミング」に「画面外でもストリームを接続したままにする」が表示されます。",
            "オンにすると、スクロールして画面外になったチャンネルも接続を維持し、戻ったときに素早く再開できます。ネットワーク、バッテリー、システム資源を継続して使用するため、すぐに再開する必要がない場合はオフのままにしてください。"
          ]],
          ["起動時に開く画面を選択", [
            "「設定」→「LiveView Mix」→「起動時に開く」を開きます。",
            "「最後に表示した画面」は前回の選択へ戻り、「LiveView Mix」はデバイスをまたぐモニタリングウォールを開きます。個別のデバイスを選ぶと、そのデバイスを直接開きます。",
            "選択したデバイスが削除されている場合や、LiveView Mix が未設定の場合は、無効な移動先を保持せず、利用可能な画面を表示します。"
          ]],
          ["プランと表示するカメラ", [
            "「設定」→「プラン」では、現在のカメラ／レコーダープランと利用上限を確認できます。",
            "すべてのチャンネルが利用可能でない場合は、「表示するカメラを選択」で利用可能な枠を割り当てます。App の制限をすべて解除した後は、この一覧を設定する必要はありません。",
            "購入と「購入を復元」は、Apple が提供する状態に従います。プランを変更しても、カメラ自体が提供するプロトコル、権限、再生機能は変わりません。"
          ]],
          ["リセットと削除を使い分ける", [
            "「設定をデフォルトに戻す」は、追加済みデバイスを残したまま、外観、言語、画質、LiveView Mix などの設定を初期値に戻します。",
            "「すべてのデータを削除」は、端末内のデバイス、カメラ、Keychain のパスワードを削除します。iCloud バックアップとサブスクリプションには影響しません。",
            "「iCloud バックアップを削除」は、現在の端末にあるデバイスと設定を変更せず、暗号化されたクラウドバックアップだけを削除します。iCloud を利用できない場合は、画面に表示されるバックアップ状態だけが消去されることがあります。",
            "元に戻せない削除を行う前に、iCloud の同期が完了していること、PIN が使えること、移行先の端末でバックアップのバージョンを復元できることを確認してください。"
          ]]
        ]],
        ["tv-control", "06", "Apple TV と Webhook 操作", "監視画面をテレビへ広げ、LiveView Mix にご自身で管理する HTTP 操作ボタンを追加できます。", [
          ["Apple TV の大画面で見る", [
            "tvOS 版では LiveView Mix、機器ごとの監視画面、カメラ 1 台の全画面表示、録画タイムラインを利用でき、Siri Remote のフォーカス操作に合わせて設計されています。",
            "高密度レイアウトは大画面に適しています。現在の監視画面を離れず、カメラや Webhook ボタンを直接選択できます。",
            "ライブ映像、録画再生、メイン／サブストリーム、チャンネル機能は、機器が実際に提供する能力、アカウント権限、コーデック、ネットワーク条件により異なります。"
          ]],
          ["iPhone／iPad から設定を移す", [
            "iPhone または iPad で「設定」→「iCloud にバックアップ」を開き、保存先に Apple TV を選びます。6 桁の PIN を設定し、Apple TV 専用の暗号化バックアップを作成します。",
            "Apple TV で同じ Apple Account にサインインし、「iCloud から復元」を開いて、バックアップ作成時の PIN を入力します。",
            "Apple TV では Apple TV 専用バックアップだけを復元します。完了後、機器のアドレス、チャンネル、LiveView Mix がテレビのネットワーク環境に合っていることを確認してください。"
          ]],
          ["Webhook 操作パネルを作る", [
            "LiveView Mix の設定で「カメラを配置」を開き、空きスロットを追加して、そのスロットを「操作パネル」に設定します。",
            "ゲート、ガレージ、照明、鍵、カーテン、シーン、警報、ファン、コンセント、空調、カスタムの各テンプレートを選べます。ボタンごとにアイコン、ラベル、色、実行前の確認を設定できます。",
            "各ボタンは、指定した HTTP または HTTPS の接続先へ GET、POST、PUT、DELETE を送信でき、任意のヘッダー、Content-Type、JSON 本文にも対応します。"
          ]],
          ["監視画面からそのまま実行", [
            "iPhone／iPad ではボタンをタップします。Apple TV ではリモコンでフォーカスを移動して押すと実行され、送信中、成功、失敗の状態がその場に表示されます。",
            "開放、解錠、警報など元に戻しにくい操作には確認を設定し、必要な用途だけに権限を絞った接続先を使用してください。",
            "対応する操作パネル設定は暗号化バックアップで移行できます。Webhook の接続先、認証情報、ネットワークアクセス、接続する実機の安全管理はお客様の責任です。"
          ]]
        ], "セキュリティに関する注意：Webhook ボタンは指定したネットワーク先へ直接リクエストを送信します。Cam-Hub は接続先、入退室設備、鍵、警報などの安全性を検証しません。接続先の権限と認証情報を適切に保護し、元に戻しにくい操作には確認を設定してください。"]
      ]
    },
    ko: {
      documentTitle: "Cam-Hub — 기능 소개", topline: "기능 소개", eyebrow: "CAM-HUB 기능 소개",
      title: '<span class="page-title-line">장비 추가부터</span> <span class="page-title-line">Cam-Hub를</span> <span class="page-title-line">단계별로 설정하세요.</span>', summary: "App의 실제 메뉴와 조작을 기준으로 장비, LiveView Mix, 재생, 이전 및 설정을 안내합니다.", wikiLabel: "챕터 바로가기",
      wiki: [
        ["devices", "01", "장비와 채널", "장비를 연결한 다음 모니터링 화면에 표시할 채널을 선택합니다.", [
          ["연결 정보 준비", "주소 또는 호스트 이름, HTTP／RTSP 포트, 사용자 이름과 비밀번호를 입력합니다. 소유·관리하거나 명시적으로 허가받은 장비만 연결하세요."],
          ["자동 감지 또는 ONVIF", "호환 연결을 먼저 시도하며 필요하면 ONVIF를 직접 선택할 수 있습니다. 장비 설정에서 ONVIF／RTSP를 활성화해야 할 수 있습니다."],
          ["채널 정리", "표시할 카메라를 선택하고 사용하지 않는 채널을 끄며 모델, 펌웨어와 채널 수를 확인할 수 있습니다."]
        ]],
        ["mix", "02", "LiveView Mix 모니터링 월", "서로 다른 카메라와 레코더의 채널을 한 화면에 배치합니다.", [
          ["장비 간 혼합", "여러 카메라, NVR, DVR 또는 NAS 감시 시스템의 채널을 함께 표시할 수 있습니다."],
          ["17가지 전체 화면 레이아웃", "2×2~7×7 그리드와 1+3, 1+5, 1+7, 1+21, 1+27 포커스 배치를 지원합니다. 고밀도 배치는 큰 화면에 적합합니다."],
          ["순서와 채우기 방식", "카메라 순서를 바꾸고 Fit, Crop, Stretch 표시 방식을 선택할 수 있습니다."],
          ["워터마크와 다목적 빈 슬롯", "장비명·카메라명·IP를 표시하고, 빈 슬롯에는 이미지, 시계, 라벨 또는 HTTP Webhook 제어 버튼을 넣을 수 있습니다."]
        ]],
        ["viewing", "03", "실시간 보기와 녹화 재생", "단일 화면과 다중 화면에 맞춰 화질과 조작 방식을 설정합니다.", [
          ["HD／SD와 확대", "단일 및 다중 카메라의 기본 화질을 각각 설정하며 핀치, 두 번 탭, 가로 화면 보기를 지원합니다."],
          ["스냅샷과 공유", "장비가 지원하면 현재 화면을 캡처해 시스템 공유 기능으로 보낼 수 있습니다."],
          ["녹화 타임라인", "날짜, 확대 가능한 타임라인, Continuous／Events 분류를 제공합니다. 검색과 재생은 장비와 권한에 따라 달라집니다."]
        ], '기능 이용 안내: 실시간 스트리밍, 스냅샷, <span class="keep-phrase">주／보조 스트림 전환</span>, 녹화 검색, <span class="keep-phrase">Continuous／Events 분류</span>, 타임라인 이동 및 재생은 카메라나 레코더가 실제로 제공하는 기능과 로그인한 장비 계정에 부여된 권한에 따라 달라집니다.'],
        ["backup", "04", "암호화 백업과 이전", "PIN과 공유 코드는 민감한 연결 정보를 포함하므로 안전하게 관리하세요.", [
          ["iCloud 암호화 백업", "6자리 PIN으로 장비, 인증 정보, 채널과 설정을 암호화해 개인 iCloud에 저장합니다. PIN은 복구할 수 없습니다."],
          ["복원과 암호화 코드", "원래 PIN으로 iCloud에서 복원하거나 암호화 코드를 다른 Cam-Hub에서 가져올 수 있습니다. 신뢰하는 사람에게만 공유하세요."]
        ]],
        ["preferences", "05", "표시·스트리밍·데이터 관리", "네트워크와 기기 성능에 맞게 App 동작을 조정합니다.", [
          ["모니터링 동작", "오프라인 카메라를 숨기고, 지원 장비에서 화면 밖 스트림을 유지하며, 시작 시 열 화면을 선택할 수 있습니다."],
          ["재설정과 삭제", "기본 설정 복원, 로컬 장비·비밀번호 삭제, iCloud 백업 삭제는 서로 별도로 실행됩니다."]
        ]],
        ["tv-control", "06", "Apple TV와 Webhook 제어", "모니터링 화면을 TV로 확장하고 LiveView Mix에 직접 관리하는 HTTP 제어 버튼을 추가합니다.", [], "보안 안내: Webhook 버튼은 지정한 네트워크 엔드포인트를 직접 호출합니다. 엔드포인트 권한과 인증 정보를 보호하고 되돌리기 어려운 동작에는 확인을 설정하세요."]
      ]
    },
    de: {
      documentTitle: "Cam-Hub — Funktionen", topline: "Funktionen", eyebrow: "CAM-HUB FUNKTIONEN",
      title: '<span class="page-title-line">Cam-Hub im Überblick.</span><span class="page-title-line">Funktionen im Detail.</span>', summary: "Folgt den tatsächlichen Menüs der App für Geräte, LiveView Mix, Wiedergabe, Übertragung und Einstellungen.", wikiLabel: "Zum Kapitel",
      wiki: [
        ["devices", "01", "Geräte und Kanäle", "Zuerst das Gerät verbinden, dann die gewünschten Überwachungskanäle auswählen.", [
          ["Verbindungsdaten vorbereiten", "Adresse oder Hostname, HTTP-/RTSP-Ports, Benutzername und Passwort eingeben. Nur eigene, verwaltete oder ausdrücklich freigegebene Geräte verbinden."],
          ["Automatische Erkennung oder ONVIF", "Cam-Hub versucht eine kompatible Verbindung; ONVIF kann direkt gewählt werden. ONVIF/RTSP muss eventuell am Gerät aktiviert werden."],
          ["Kanäle organisieren", "Kameras auswählen, ungenutzte Kanäle deaktivieren und Modell, Firmware sowie Kanalanzahl prüfen."]
        ]],
        ["mix", "02", "LiveView Mix Videowand", "Kanäle verschiedener Kameras und Rekorder auf einem Bildschirm kombinieren.", [
          ["Geräteübergreifend mischen", "Kanäle aus mehreren Kameras, NVRs, DVRs oder NAS-Überwachungssystemen gemeinsam anzeigen."],
          ["17 Vollbildlayouts", "Raster von 2×2 bis 7×7 sowie 1+3, 1+5, 1+7, 1+21 und 1+27. Dichte Layouts eignen sich besser für große Bildschirme."],
          ["Reihenfolge und Bildfüllung", "Kameras anordnen und zwischen Fit, Crop und Stretch wählen."],
          ["Wasserzeichen und Mehrzweckfelder", "Geräte-/Kameraname oder IP einblenden; leere Felder können Bild, Uhr, Beschriftung oder HTTP-Webhook-Steuerung zeigen."]
        ]],
        ["viewing", "03", "Liveansicht und Wiedergabe", "Qualität und Bedienung für Einzel- und Mehrfachansichten anpassen.", [
          ["HD/SD und Zoom", "Standardqualität getrennt festlegen; Einzelansicht unterstützt Pinch-Zoom, Doppeltippen und Querformat."],
          ["Schnappschuss und Teilen", "Wenn unterstützt, aktuelles Bild aufnehmen und über das System teilen."],
          ["Aufnahmezeitleiste", "Datum, zoombare Zeitleiste sowie Continuous/Events. Suche und Wiedergabe hängen von Gerät und Berechtigungen ab."]
        ], 'Hinweis zur Verfügbarkeit: Live-Streaming, Schnappschüsse, <span class="keep-phrase">Haupt-/Nebenstream</span>, Aufnahmesuche, <span class="keep-phrase">Continuous-/Events-Kategorien</span>, Zeitleistensuche und Wiedergabe richten sich nach den tatsächlich gemeldeten Fähigkeiten der Kamera bzw. des Rekorders und den Berechtigungen des angemeldeten Gerätekontos.'],
        ["backup", "04", "Verschlüsselte Sicherung und Übertragung", "PIN und Freigabecode enthalten sensible Verbindungsdaten und müssen sicher verwahrt werden.", [
          ["iCloud-Sicherung", "Geräte, Zugangsdaten, Kanäle und Einstellungen mit einer sechsstelligen PIN verschlüsselt im eigenen iCloud speichern. Die PIN ist nicht wiederherstellbar."],
          ["Wiederherstellung und Code", "Mit der ursprünglichen PIN aus iCloud wiederherstellen oder einen verschlüsselten Code in einer anderen Cam-Hub Installation importieren. Nur vertrauenswürdig teilen."]
        ]],
        ["preferences", "05", "Anzeige, Streaming und Daten", "App-Verhalten an Netzwerk und Geräteleistung anpassen.", [
          ["Überwachungsverhalten", "Offline-Kameras ausblenden, bei unterstützten Geräten Verbindungen außerhalb des Bildschirms halten und den Startbildschirm wählen."],
          ["Zurücksetzen und Löschen", "Standardeinstellungen, lokale Geräte/Passwörter und iCloud-Sicherung werden jeweils getrennt zurückgesetzt oder gelöscht."]
        ]],
        ["tv-control", "06", "Apple TV und Webhook-Steuerung", "Erweitern Sie die Überwachungsansicht auf den Fernseher und ergänzen Sie LiveView Mix um selbst verwaltete HTTP-Steuerungen.", [], "Sicherheitshinweis: Webhook-Schaltflächen rufen die von Ihnen angegebenen Netzwerkendpunkte direkt auf. Beschränken Sie Berechtigungen, schützen Sie Zugangsdaten und verlangen Sie für schwer rückgängig zu machende Aktionen eine Bestätigung."]
      ]
    },
    es: {
      documentTitle: "Cam-Hub — Funciones", topline: "Funciones", eyebrow: "FUNCIONES DE CAM-HUB",
      title: '<span class="page-title-line">Descubre Cam-Hub.</span><span class="page-title-line">Función por función.</span>', summary: "Sigue los mismos menús y controles de la App para dispositivos, LiveView Mix, reproducción, transferencia y ajustes.", wikiLabel: "Ir a un capítulo",
      wiki: [
        ["devices", "01", "Dispositivos y canales", "Conecta el equipo y después elige qué canales aparecen en las pantallas.", [
          ["Preparar la conexión", "Introduce dirección o host, puertos HTTP/RTSP, usuario y contraseña. Conecta solo equipos propios, administrados o autorizados expresamente."],
          ["Detección automática u ONVIF", "Cam-Hub prueba una conexión compatible o permite elegir ONVIF. Puede ser necesario activar ONVIF/RTSP en el equipo."],
          ["Organizar canales", "Elige cámaras visibles, desactiva canales sin uso y revisa modelo, firmware y número de canales."]
        ]],
        ["mix", "02", "Muro LiveView Mix", "Combina canales de distintas cámaras y grabadores en una pantalla.", [
          ["Mezclar equipos", "Reúne canales de varias cámaras, NVR, DVR o sistemas NAS de videovigilancia."],
          ["17 diseños a pantalla completa", "Cuadrículas de 2×2 a 7×7 y diseños 1+3, 1+5, 1+7, 1+21 y 1+27. Los diseños densos son mejores en pantallas grandes."],
          ["Orden y ajuste de imagen", "Reordena cámaras y selecciona Fit, Crop o Stretch."],
          ["Marcas de agua y espacios multiuso", "Muestra nombre de equipo/cámara o IP; un espacio vacío puede contener imagen, reloj, etiqueta o controles HTTP Webhook."]
        ]],
        ["viewing", "03", "Vista en directo y grabaciones", "Ajusta calidad y manejo para una o varias cámaras.", [
          ["HD/SD y zoom", "Configura calidades por separado; la vista individual admite pellizcar, doble toque y modo horizontal."],
          ["Capturas y uso compartido", "Si el equipo lo permite, captura la imagen actual y compártela mediante el sistema."],
          ["Línea de tiempo", "Selector de día, línea temporal ampliable y pestañas Continuous/Events. La búsqueda y reproducción dependen del equipo y los permisos."]
        ], 'Aviso de disponibilidad: la emisión en directo, las capturas, el cambio entre flujo principal y secundario, la búsqueda de grabaciones, la clasificación <span class="keep-phrase">Continuous/Events</span>, la navegación por la línea de tiempo y la reproducción dependen de las funciones que comunique realmente la cámara o el grabador y de los permisos de la cuenta del equipo.'],
        ["backup", "04", "Copia y transferencia cifradas", "El PIN y el código contienen datos sensibles de conexión; protégelos.", [
          ["Copia en iCloud", "Cifra equipos, credenciales, canales y ajustes con un PIN de seis dígitos en tu iCloud. El PIN no puede recuperarse."],
          ["Restaurar o transferir", "Restaura con el PIN original o importa un código cifrado en otra instalación de Cam-Hub. Compártelo solo con personas de confianza."]
        ]],
        ["preferences", "05", "Pantalla, streaming y datos", "Adapta el comportamiento a la red y al dispositivo.", [
          ["Comportamiento de supervisión", "Oculta cámaras sin conexión, conserva streams fuera de pantalla cuando sea compatible y elige qué abrir al iniciar."],
          ["Restablecer y borrar", "Los ajustes, los equipos/contraseñas locales y la copia de iCloud se restablecen o eliminan por separado."]
        ]],
        ["tv-control", "06", "Apple TV y controles Webhook", "Amplía la vista de supervisión al televisor y añade a LiveView Mix controles HTTP administrados por ti.", [], "Aviso de seguridad: los botones Webhook llaman directamente a los endpoints de red que indiques. Limita sus permisos, protege las credenciales y exige confirmación para acciones difíciles de deshacer."]
      ]
    },
    fr: {
      documentTitle: "Cam-Hub — Fonctionnalités", topline: "Fonctionnalités", eyebrow: "FONCTIONNALITÉS CAM-HUB",
      title: '<span class="page-title-line">Découvrez Cam-Hub.</span><span class="page-title-line">Fonction par fonction.</span>', summary: "Suivez les menus réels de l’App pour les équipements, LiveView Mix, la lecture, le transfert et les réglages.", wikiLabel: "Aller à un chapitre",
      wiki: [
        ["devices", "01", "Équipements et canaux", "Connectez d’abord l’équipement, puis choisissez les canaux à afficher.", [
          ["Préparer la connexion", "Saisissez l’adresse ou l’hôte, les ports HTTP/RTSP, le nom d’utilisateur et le mot de passe. Connectez uniquement les équipements autorisés."],
          ["Détection automatique ou ONVIF", "Cam-Hub essaie une connexion compatible ou permet de choisir ONVIF. ONVIF/RTSP peut devoir être activé dans l’équipement."],
          ["Organiser les canaux", "Choisissez les caméras visibles, désactivez les canaux inutiles et consultez modèle, micrologiciel et nombre de canaux."]
        ]],
        ["mix", "02", "Mur LiveView Mix", "Réunissez les canaux de plusieurs caméras et enregistreurs sur un écran.", [
          ["Mélanger les équipements", "Combinez les canaux de caméras, NVR, DVR ou systèmes NAS de vidéosurveillance."],
          ["17 dispositions plein écran", "Grilles de 2×2 à 7×7 et dispositions 1+3, 1+5, 1+7, 1+21, 1+27. Les dispositions denses conviennent mieux aux grands écrans."],
          ["Ordre et remplissage", "Réorganisez les caméras et choisissez Fit, Crop ou Stretch."],
          ["Filigranes et cases polyvalentes", "Affichez nom d’équipement/caméra ou IP ; une case vide peut contenir image, horloge, étiquette ou commandes HTTP Webhook."]
        ]],
        ["viewing", "03", "Direct et lecture des enregistrements", "Adaptez la qualité et les gestes aux vues simple et multiple.", [
          ["HD/SD et zoom", "Réglez séparément les qualités par défaut ; la vue simple prend en charge pincement, double toucher et paysage."],
          ["Capture et partage", "Si l’équipement le permet, capturez l’image actuelle et partagez-la via le système."],
          ["Chronologie", "Sélecteur de date, chronologie zoomable et onglets Continuous/Events. Recherche et lecture dépendent de l’équipement et des autorisations."]
        ], 'Disponibilité des fonctions : le direct, les captures, le choix du flux principal ou secondaire, la recherche d’enregistrements, les catégories <span class="keep-phrase">Continuous/Events</span>, le déplacement dans la chronologie et la lecture dépendent des capacités réellement déclarées par la caméra ou l’enregistreur et des autorisations du compte de l’équipement.'],
        ["backup", "04", "Sauvegarde et transfert chiffrés", "Le PIN et le code contiennent des données de connexion sensibles : protégez-les.", [
          ["Sauvegarde iCloud", "Chiffrez équipements, identifiants, canaux et réglages avec un PIN à six chiffres dans votre iCloud. Le PIN est irrécupérable."],
          ["Restaurer ou transférer", "Restaurez avec le PIN d’origine ou importez un code chiffré dans une autre installation Cam-Hub. Partagez-le uniquement avec une personne de confiance."]
        ]],
        ["preferences", "05", "Affichage, streaming et données", "Adaptez le comportement de l’App au réseau et à l’appareil.", [
          ["Comportement de surveillance", "Masquez les caméras hors ligne, gardez les flux hors écran si compatible et choisissez l’écran ouvert au lancement."],
          ["Réinitialiser et supprimer", "Les réglages, équipements/mots de passe locaux et la sauvegarde iCloud sont gérés séparément."]
        ]],
        ["tv-control", "06", "Apple TV et commandes Webhook", "Étendez la surveillance au téléviseur et ajoutez à LiveView Mix des commandes HTTP que vous gérez.", [], "Avis de sécurité : les boutons Webhook appellent directement les destinations réseau indiquées. Limitez leurs autorisations, protégez les identifiants et exigez une confirmation pour les actions difficiles à annuler."]
      ]
    },
    ar: {
      documentTitle: "Cam-Hub — الميزات", topline: "الميزات", eyebrow: "ميزات CAM-HUB",
      title: '<span class="page-title-line">اضبط Cam-Hub</span> <span class="page-title-line">خطوة بخطوة.</span>', summary: "اتبع القوائم الفعلية في التطبيق للمعدات وLiveView Mix والتشغيل والنقل والإعدادات.", wikiLabel: "الانتقال إلى فصل",
      wiki: [
        ["devices", "01", "المعدات والقنوات", "صِل المعدات أولاً ثم اختر القنوات التي تظهر في شاشات المراقبة.", [
          ["تجهيز بيانات الاتصال", "أدخل العنوان أو اسم المضيف ومنافذ HTTP/RTSP واسم المستخدم وكلمة المرور. اتصل فقط بالمعدات التي تملكها أو تديرها أو لديك تصريح صريح باستخدامها."],
          ["الكشف التلقائي أو ONVIF", "يجرب Cam-Hub اتصالاً متوافقًا ويمكن اختيار ONVIF مباشرة. قد يلزم تفعيل ONVIF/RTSP في إعدادات المعدات."],
          ["تنظيم القنوات", "اختر الكاميرات الظاهرة وعطّل القنوات غير المستخدمة وراجع الطراز والبرنامج الثابت وعدد القنوات."]
        ]],
        ["mix", "02", "جدار LiveView Mix", "اجمع قنوات كاميرات ومسجلات مختلفة في شاشة واحدة.", [
          ["دمج عدة معدات", "اعرض معًا قنوات من كاميرات وNVR وDVR أو أنظمة مراقبة NAS مختلفة."],
          ["17 تخطيطًا بملء الشاشة", "شبكات من 2×2 إلى 7×7 وتخطيطات 1+3 و1+5 و1+7 و1+21 و1+27. التخطيطات الكثيفة أنسب للشاشات الكبيرة."],
          ["الترتيب وملء الصورة", "أعد ترتيب الكاميرات واختر Fit أو Crop أو Stretch."],
          ["علامات مائية وخانات متعددة الاستخدام", "اعرض اسم الجهاز أو الكاميرا أو IP؛ ويمكن للخانة الفارغة عرض صورة أو ساعة أو تسمية أو أزرار HTTP Webhook."]
        ]],
        ["viewing", "03", "العرض المباشر وتشغيل التسجيل", "اضبط الجودة والتحكم للعرض الفردي أو المتعدد.", [
          ["HD/SD والتكبير", "عيّن الجودة الافتراضية لكل وضع؛ وتدعم الشاشة الفردية القرص للتكبير والنقر المزدوج والوضع الأفقي."],
          ["اللقطات والمشاركة", "إذا كانت المعدات تدعم ذلك، التقط الصورة الحالية وشاركها عبر النظام."],
          ["الخط الزمني", "اختيار اليوم وخط زمني قابل للتكبير وتبويبا Continuous/Events. يعتمد البحث والتشغيل على المعدات والصلاحيات."]
        ], 'تنبيه بشأن توفر الميزات: يعتمد البث المباشر واللقطات والتبديل بين البث الرئيسي والفرعي والبحث في التسجيلات وتصنيف <span class="keep-phrase">Continuous/Events</span> والتنقل على الخط الزمني والتشغيل على الإمكانات التي تبلغ عنها الكاميرا أو المسجل فعليًا، وعلى الصلاحيات الممنوحة لحساب المعدات المستخدم لتسجيل الدخول.'],
        ["backup", "04", "نسخ ونقل مشفران", "يتضمن PIN ورمز المشاركة معلومات اتصال حساسة، لذا احفظهما بأمان.", [
          ["نسخة iCloud", "شفّر المعدات وبيانات الدخول والقنوات والإعدادات برمز PIN من ستة أرقام في iCloud الخاص بك. لا يمكن استعادة الرمز."],
          ["الاستعادة أو النقل", "استعد بالرمز الأصلي أو استورد رمزًا مشفرًا في تثبيت Cam-Hub آخر. شاركه فقط مع جهة موثوقة."]
        ]],
        ["preferences", "05", "العرض والبث وإدارة البيانات", "اضبط سلوك التطبيق وفق الشبكة وقدرة الجهاز.", [
          ["سلوك المراقبة", "أخفِ الكاميرات غير المتصلة، وأبقِ البث خارج الشاشة عند دعمه، واختر ما يفتح عند التشغيل."],
          ["إعادة الضبط والحذف", "تُدار الإعدادات والمعدات/كلمات المرور المحلية ونسخة iCloud بشكل منفصل عند إعادة الضبط أو الحذف."]
        ]],
        ["tv-control", "06", "Apple TV وعناصر تحكم Webhook", "وسّع شاشة المراقبة إلى التلفزيون وأضف إلى LiveView Mix عناصر تحكم HTTP تديرها بنفسك.", [], "تنبيه أمني: تستدعي أزرار Webhook وجهات الشبكة التي تحددها مباشرة. قيّد الصلاحيات واحمِ بيانات المصادقة واطلب التأكيد للإجراءات التي يصعب التراجع عنها."]
      ]
    }
  };

  Object.entries(wikiByLocale).forEach(([locale, wiki]) => {
    Object.assign(globalThis.CamHubAdditionalTranslations[locale].product, wiki);
  });
})();
