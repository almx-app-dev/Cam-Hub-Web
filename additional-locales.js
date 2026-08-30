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
        featureTVBody: "在 Apple TV 上使用 LiveView Mix、设备监看墙和全屏画面；也可在 iPhone 或 iPad 上建立 Apple TV 专用加密备份，无需 PIN 即可还原。",
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
          ["05", "可选 iCloud 备份", "加密支持的设备配置、凭据和 App 设置并保存到您的私人 iCloud；备份和还原均无需 PIN。"],
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
          ["联系支持时", ["请提供 App 版本、Apple 设备型号和系统版本。", "请提供摄像头或录像设备型号及固件版本。", "说明连接方式、操作步骤和完整错误信息。", "请勿发送设备密码、摄像头共享 PIN、完整共享代码或公网地址。"]],
          ["常见限制", ["不同厂商、型号和固件对 ONVIF 与 RTSP 的实现可能不同。", "远程访问需要由您自行配置并保护 VPN、路由器或设备远程访问功能。", "录像搜索与回放需要设备支持，并要求账号具备相应权限。"]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — 隐私政策",
        topline: "隐私政策",
        eyebrow: "PRIVACY POLICY",
        title: "隐私政策",
        summary: "Cam-Hub 以设备端处理和用户控制为设计原则，不包含第三方广告追踪。",
        meta: [["生效日期", "2026 年 7 月 26 日"], ["App", "Cam-Hub"], ["联系邮箱", contactLink]],
        sections: [
          ["政策概要", ["Cam-Hub 无需您创建额外服务账号，也不集成第三方广告或广告追踪。App 用于连接由您配置并有权访问的摄像头和录像设备。"]],
          ["设备信息与凭据", ["设备名称、地址、端口、用户名、通道信息和 App 设置保存在您的设备上，密码保存在 Apple Keychain。相关信息仅用于执行您发起的连接和操作。"]],
          ["连接与画面", ["查看实时或录像画面时，App 会连接到您提供的设备地址。设备、网络、VPN、DNS 或您选择的远程服务可能按其自身政策处理连接信息。Cam-Hub 不将摄像头画面用于广告或行为分析。"]],
          ["Webhook 控制面板与第三方端点", ["您可以设置 HTTP 或 HTTPS 方法、端点网址、自定义请求头和请求内容，创建 LiveView Mix 控制按钮。这些设置可能包含 Authorization 令牌或其他敏感信息，会保存在设备的 LiveView Mix 设置中，也可能包含在您主动创建的加密 iCloud 备份内。", "只有在您点击按钮时，App 才会从您的设备直接向指定端点（例如 Home Assistant、Node-RED 或其他第三方服务）发送请求。该端点及网络服务商可能依据各自政策处理来源 IP、请求头和请求内容；Cam-Hub 开发者不会代您选择、控制或接收这些端点的数据。HTTP 传输未加密；敏感数据请使用 HTTPS，并自行核查接收方的隐私与安全措施。"]],
          ["本地网络访问与扫描", ["Cam-Hub 会请求本地网络权限，以直接连接摄像头和录像设备。当您在“工具”标签页启动扫描时，App 会探测所选子网和常见摄像头服务端口，并可能读取响应设备的地址、开放端口及 HTTP Server 名称，以帮助识别设备。", "扫描仅在您主动启动时进行。结果在设备上处理，不会发送给 Cam-Hub 开发者。"]],
          ["照片与相机", ["您可以通过 Apple 系统照片选择器挑选特定照片，或授权相机拍摄新照片，用于 LiveView Mix 空白位置。App 只会取得您选择或拍摄的图片，不会浏览整个照片图库；图片经缩小和压缩后保存在设备的 LiveView Mix 设置中。", "图片仅保存在您的设备上，Cam-Hub 开发者不会接收或访问。只有在您自行创建 Cam-Hub 加密 iCloud 备份时，图片才可能随备份存入您自己的 iCloud，用于设备恢复。您可以在 LiveView Mix 中移除图片，也可以在系统“设置”中更改相机或照片权限。"]],
          ["摄像头共享代码", ["您可以分享包含所选摄像头或录像设备地址、用户名、通道信息和密码的加密代码。分享时可自行决定是否用六位数 PIN 锁定；开发者不会保存 PIN，也无法替您找回。", "受 PIN 锁定的代码在导入或还原共享内容时必须输入正确 PIN；未设置 PIN 的完整代码可由兼容版本 Cam-Hub 直接导入。代码不会自动过期，删除来源设备上的设备或 App 也不会撤销已分享的副本。"]],
          ["可选 iCloud 备份", ["选择 iCloud 备份时，App 会加密支持的配置、凭据、通道和 App 设置并存入您的私人 iCloud。iPhone、iPad 与 Apple TV 的备份和还原不使用 PIN；还原时选择可用备份即可继续。"]],
          ["购买与订阅", ["购买与订阅由 Apple 处理。我们不会取得您完整的银行卡或银行账户信息。App 会读取 Apple 提供的购买状态，以解锁相应的额度与功能。"]],
          ["共享、保存、删除与选择", ["我们不会出售个人信息。本地配置会保留在您的设备上，直到您删除相关内容或卸载 App。您可以在 App 中删除设备、LiveView Mix 图片与控制设置，单独删除 iCloud 备份，并在 Apple 设备的系统“设置”中撤回权限。", "可选的 iCloud 数据通过您的 Apple Account 与 iCloud 服务管理。您主动发送至支持邮箱的邮件，仅在答复您以及保留必要支持记录所需的期间内保存。若需咨询适用的数据权利，请联系上述邮箱。"]],
          ["儿童与政策更新", ["Cam-Hub 并非面向儿童，也不会有意收集儿童的个人信息。若功能、适用法律或商店要求发生变化，我们可能更新本政策，并在本页面公布修订日期。"]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — 使用条款",
        topline: "使用条款",
        eyebrow: "TERMS OF USE",
        title: "使用条款",
        summary: "使用 Cam-Hub 即表示您同意本条款以及适用的 Apple App Store 规则。",
        meta: [["生效日期", "2026 年 7 月 26 日"], ["App", "Cam-Hub"], ["联系邮箱", contactLink]],
        sections: [
          ["Apple 标准 EULA", ["Cam-Hub 使用 Apple 标准最终用户许可协议。若与本条款冲突，以适用的 Apple 条款为准。", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["合法及授权使用", ["仅可连接您拥有、管理或已获得明确授权访问的设备与网络。您应遵守所在地关于隐私、监控、录像、工作场所和财产的适用法律。"]],
          ["设备访问与安全", ["您负责保护设备、网络、账号、密码、远程访问设置以及导出或共享的画面。Cam-Hub 不绕过访问控制。"]],
          ["控制按钮与连接设备", ["LiveView Mix 控制按钮会向您指定的端点发送您配置的请求。Cam-Hub 不会验证端点的行为，不会确认操作是否完成，也无法保证请求一定送达——按钮可能在您无意时触发，也可能在您需要时失效。", "您应对按钮连接的对象及其运行后果负责。如果失败、延迟、重复或误触可能造成人身伤害、困人、财产损失或安全失效，请勿使用这些按钮，包括门、大门、门锁、卷帘门，以及任何可能夹住人员或车辆的设备。请始终保留独立的操作方式。"]],
          ["网络扫描", ["“工具”标签页会探测您选择的网络中的地址和端口。请仅扫描您拥有、管理或已获明确授权扫描的网络。未经授权的扫描可能违反计算机滥用相关法律、网络运营商条款，或您任职单位或所属组织的政策。"]],
          ["转移代码", ["您应对转移代码的接收者负责；如果代码可能泄露，应立即更改相关设备密码。代码内容、加密方式和有效期限请参阅隐私政策。"]],
          ["兼容性与可用性", ["功能取决于型号、固件、协议实现、权限、编码、录像配置和网络条件。支持 ONVIF、RTSP 或某个产品系列，不代表每种型号或功能都可用。", "部分品牌支持根据厂商公开文档推导，尚未在每个型号上进行实机验证。Cam-Hub 会在添加设备时确认可用的串流路径；在此之前不保证兼容。", "Cam-Hub 不是紧急监控服务，不保证视频不中断、录像可用、警报送达或任何特定安全结果。"]],
          ["购买与订阅", ["App 内购买与订阅由 Apple 处理。价格、续订、取消、退款和账号管理以 Apple 显示的信息及 Apple Account 设置为准。", "订阅失效后，超出免费额度的通道会停止串流；设备、名称和设置仍保留在设备上，续订适用方案后即可恢复。价格与方案内容可能依 Apple 通知及适用法律调整；订阅价格变更仅会按 Apple 所示在后续续订时生效。本条款不限制适用法律赋予您的强制性消费者权利。"]],
          ["隐私", ["数据处理由单独的隐私政策说明。", `<a href="privacy.html">Cam-Hub 隐私政策</a>`]],
          ["第三方名称", ["Hikvision、Dahua、Synology、ONVIF 及其他名称属于各自权利人。Cam-Hub 为独立开发产品；技术兼容不表示隶属、合作、赞助或官方认可。"]],
          ["免责声明与责任限制", ["Cam-Hub 按“现状”和“可用状态”提供，除 Apple 标准 EULA 中的免责声明外，不提供任何形式的保证。在法律允许的范围内，开发者不对间接、附带、特殊或后果性损失承担责任，包括影像丢失、事件未记录、财产损失或业务中断。本条款不排除或限制法律不允许排除或限制的责任，不限制强制性消费者权利，也不取代 Apple 条款赋予您的权利。"]],
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
        featureTVBody: "Apple TV で LiveView Mix、機器ごとの監視画面、全画面映像を表示できます。iPhone／iPad で Apple TV 用の暗号化バックアップを作成し、PIN なしで復元できます。",
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
          ["05", "任意の iCloud バックアップ", "対応する設定と認証情報を暗号化してご自身の iCloud に保存できます。バックアップと復元に PIN は不要です。"],
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
          ["サポートへ連絡する際", ["App バージョン、Apple デバイス、OS バージョンをお知らせください。", "機器の型番とファームウェアをお知らせください。", "接続方法、操作手順、エラー全文をお知らせください。", "パスワード、カメラ共有用 PIN、完全な共有コード、公開接続先は送信しないでください。"]],
          ["一般的な制限", ["ONVIF と RTSP の実装はメーカー、機種、ファームウェアにより異なります。", "リモートアクセスには、安全に構成した VPN、ルーター、または機器側の機能が必要です。", "録画検索と再生には、機器の対応と適切な権限が必要です。"]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — プライバシーポリシー",
        topline: "プライバシーポリシー",
        eyebrow: "PRIVACY POLICY",
        title: "プライバシーポリシー",
        summary: "Cam-Hub は端末上の処理とユーザーによる管理を重視し、第三者広告トラッキングを使用しません。",
        meta: [["施行日", "2026年7月26日"], ["App", "Cam-Hub"], ["お問い合わせ", contactLink]],
        sections: [
          ["概要", ["Cam-Hub は追加のサービスアカウントを必要とせず、第三者広告や広告トラッキングを組み込みません。ユーザーが設定し、利用権限を持つカメラとレコーダーへ接続するための App です。"]],
          ["機器情報と認証情報", ["機器名、アドレス、ポート、ユーザー名、チャンネル情報、App 設定は端末に保存され、パスワードは Apple Keychain に保存されます。これらはユーザーが要求した接続と操作にのみ使用されます。"]],
          ["接続と映像", ["ライブまたは録画映像の表示時、App はユーザーが指定した機器へ接続します。機器、ネットワーク、VPN、DNS、リモートサービスは各ポリシーに従って接続情報を処理する場合があります。映像を広告や行動分析には使用しません。"]],
          ["Webhook 操作パネルと第三者の接続先", ["LiveView Mix の操作ボタンには、HTTP／HTTPS メソッド、接続先 URL、独自ヘッダー、リクエスト本文を設定できます。Authorization トークンなどの機密情報を含む場合があり、端末上の LiveView Mix 設定に保存され、ユーザーが作成する暗号化 iCloud バックアップにも含まれることがあります。", "ボタンをタップしたときだけ、App は端末から指定先（Home Assistant、Node-RED、その他の第三者サービスなど）へ直接リクエストを送信します。接続先やネットワーク事業者は、それぞれのポリシーに基づき送信元 IP、ヘッダー、本文を処理する場合があります。Cam-Hub の開発者は接続先を選択・管理せず、そこへ送信されたデータを受信しません。HTTP 通信は暗号化されないため、機密情報には HTTPS を使用し、受信先のプライバシーと安全対策を確認してください。"]],
          ["ローカルネットワークへのアクセスとスキャン", ["Cam-Hub はカメラやレコーダーへ直接接続するため、ローカルネットワーク権限を求めます。「ツール」でスキャンを開始すると、選択したサブネットと一般的なカメラ用ポートを調べ、応答した機器のアドレス、開放ポート、HTTP Server 名を読み取って識別を補助する場合があります。", "スキャンはユーザーが開始した場合にのみ実行され、結果は端末上で処理されて Cam-Hub の開発者へ送信されません。"]],
          ["写真とカメラ", ["Apple のシステム写真ピッカーで特定の写真を選ぶか、カメラへのアクセスを許可して新しい写真を撮影し、LiveView Mix の空きスロットに配置できます。App が取得するのは選択または撮影した画像だけで、写真ライブラリ全体を閲覧しません。画像は縮小・圧縮され、端末上の LiveView Mix 設定に保存されます。", "画像は端末内に保存され、Cam-Hub の開発者が受信またはアクセスすることはありません。ユーザーが Cam-Hub の暗号化 iCloud バックアップを作成した場合に限り、端末の復元用として画像がご自身の iCloud に保存されることがあります。LiveView Mix で画像を削除でき、システム設定でカメラや写真の権限を変更できます。"]],
          ["カメラ共有コード", ["選択したカメラまたはレコーダーのアドレス、ユーザー名、チャンネル情報、パスワードを含む暗号化コードを共有できます。共有時に 6 桁の PIN でロックするかを選べます。開発者は PIN を保存せず、復元もできません。", "PIN でロックしたコードは、共有内容の読み込みまたは復元時に正しい PIN が必要です。PIN を設定しなかった完全なコードは、互換バージョンの Cam-Hub でそのまま読み込めます。コードに自動有効期限はなく、送信元端末から機器や App を削除しても共有済みコピーは無効になりません。"]],
          ["任意の iCloud バックアップ", ["対応する設定と認証情報を暗号化してユーザー自身の iCloud に保存します。iPhone、iPad、Apple TV のバックアップと復元に PIN は使用せず、復元時は利用可能なバックアップを選ぶだけで続行できます。"]],
          ["購入とサブスクリプション", ["購入とサブスクリプションは Apple が処理します。カード情報や銀行口座の情報を当方がすべて受け取ることはありません。App は Apple から提供される購入状況を読み取り、対応する上限や機能を有効にします。"]],
          ["共有・保存・削除と選択", ["当方は個人情報を販売しません。ローカルの設定は、該当する内容を削除するか App を削除するまでデバイスに残ります。App 内で機器、LiveView Mix の画像、操作設定を削除でき、iCloud バックアップは個別に削除できます。システムの許可は Apple デバイスの「設定」から取り消せます。", "任意の iCloud データは Apple Account と iCloud のサービスで管理します。サポートへ任意でお送りいただいたメールは、返信と必要なサポート記録の保持に必要な期間のみ保管します。適用される個人情報上の権利については、上記のメールアドレスへご連絡ください。"]],
          ["お子様と本ポリシーの変更", ["Cam-Hub はお子様に向けたものではなく、お子様の個人情報を意図的に収集することはありません。機能、法令、ストアの要件が変わった場合、本ポリシーを更新することがあります。改定日は本ページに掲載します。"]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — 利用規約",
        topline: "利用規約",
        eyebrow: "TERMS OF USE",
        title: "利用規約",
        summary: "Cam-Hub の利用には、本規約と適用される Apple App Store の規則が適用されます。",
        meta: [["施行日", "2026年7月26日"], ["App", "Cam-Hub"], ["お問い合わせ", contactLink]],
        sections: [
          ["Apple 標準 EULA", ["Cam-Hub には Apple 標準エンドユーザ使用許諾契約が適用されます。矛盾する場合は適用される Apple の規約が優先します。", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["適法かつ許可された利用", ["所有、管理、または明確な許可を得た機器とネットワークにのみ接続してください。プライバシー、監視、録画、職場、財産に関する地域の法令を遵守する責任はユーザーにあります。"]],
          ["機器へのアクセスとセキュリティ", ["有効な機器アドレスと認証情報を入力する必要があります。Cam-Hub はアクセス制御を回避しません。機器、ネットワーク、アカウント、パスワード、リモートアクセス設定、書き出しまたは共有した映像の保護はユーザーの責任です。"]],
          ["操作ボタンと接続機器", ["LiveView Mix の操作ボタンは、ユーザーが設定したリクエストを指定先へ送信します。Cam-Hub は接続先の動作を検証せず、操作の完了を確認せず、リクエストの到達を保証できません。意図せずボタンが作動する場合や、必要なときに作動しない場合があります。", "ボタンの接続先と作動の結果はユーザーの責任です。失敗、遅延、重複、誤操作によって負傷、閉じ込め、物的損害、または防犯上の支障が生じ得る用途には使用しないでください。これには、ドア、門、錠、シャッター、人や車両を挟むおそれのある機器が含まれます。必ず独立した操作手段を確保してください。"]],
          ["ネットワークスキャン", ["「ツール」タブは、選択したネットワーク上のアドレスとポートを調べます。所有、管理、またはスキャンする明確な許可を得たネットワークだけを対象にしてください。無許可のスキャンは、不正アクセス等に関する法令、通信事業者の規約、または勤務先や所属組織のポリシーに違反する場合があります。"]],
          ["移行コード", ["移行コードの受領者を管理し、漏えいの可能性がある場合に対象機器のパスワードを直ちに変更する責任はユーザーにあります。コードの内容、暗号化、有効期間はプライバシーポリシーをご覧ください。"]],
          ["互換性と可用性", ["機能は機種、ファームウェア、プロトコル実装、権限、コーデック、録画設定、ネットワーク状況により異なります。ONVIF、RTSP、または特定製品群への対応は、すべての機種や機能の動作を保証するものではありません。", "一部ブランドへの対応は、公開されたメーカー資料に基づいており、すべての機種で実機検証されているわけではありません。Cam-Hub は機器追加時に動作するストリームパスを確認します。それまでは互換性を保証しません。", "Cam-Hub は緊急監視サービスではなく、映像の継続、録画の可用性、通知の到達、または特定の安全結果を保証しません。"]],
          ["購入とサブスクリプション", ["購入、更新、解約、返金、アカウント管理は Apple の表示と Apple Account の設定に従います。", "サブスクリプションが失効すると、無料枠を超えるチャンネルのストリーミングは停止します。機器、名称、設定は端末に残り、該当プランを再開すると再び利用できます。価格やプラン内容は、Apple の通知と適用法に従って変更される場合があります。サブスクリプション価格の変更は、Apple が示す将来の更新時にのみ適用されます。本規約は適用法による強行的な消費者の権利を制限しません。"]],
          ["プライバシー", ["データの取扱いは別途プライバシーポリシーに記載しています。", `<a href="privacy.html">Cam-Hub プライバシーポリシー</a>`]],
          ["第三者の名称", ["Hikvision、Dahua、Synology、ONVIF 等は各権利者の名称です。技術的互換性は提携、協賛、公式認定を意味しません。"]],
          ["無保証と責任制限", ["Cam-Hub は、Apple 標準 EULA の免責事項に加え、いかなる保証も伴わず「現状有姿」かつ「提供可能な状態」で提供されます。法令で認められる範囲において、開発者は、映像の喪失、事象の見逃し、物的損害、事業中断を含む間接的、付随的、特別または結果的損害について責任を負いません。本規約は、法令上排除または制限できない責任を排除・制限せず、強行的な消費者の権利を制限せず、Apple の規約による権利を置き換えません。"]],
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
        featureTVBody: "Apple TV에서 LiveView Mix, 장비별 모니터링 화면과 전체 화면 영상을 볼 수 있습니다. iPhone 또는 iPad에서 Apple TV용 암호화 백업을 만들고 PIN 없이 복원할 수 있습니다.",
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
          ["05", "선택적 iCloud 백업", "지원되는 설정과 인증 정보를 암호화하여 개인 iCloud에 저장합니다. 백업과 복원에 PIN이 필요하지 않습니다."],
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
          ["지원 문의 시", ["App 버전, Apple 기기 및 OS 버전을 알려 주세요.", "장비 모델과 펌웨어 버전을 알려 주세요.", "연결 방식, 단계와 전체 오류 메시지를 알려 주세요.", "비밀번호, 카메라 공유 PIN, 전체 공유 코드 또는 공개 주소를 보내지 마세요."]],
          ["일반적인 제한", ["ONVIF와 RTSP 구현은 제조사, 모델 및 펌웨어에 따라 다릅니다.", "원격 접근에는 안전하게 구성한 VPN, 라우터 또는 장비 기능이 필요합니다.", "녹화 검색과 재생에는 장비 지원 및 적절한 계정 권한이 필요합니다."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — 개인정보 처리방침",
        topline: "개인정보 처리방침",
        eyebrow: "PRIVACY POLICY",
        title: "개인정보 처리방침",
        summary: "Cam-Hub는 기기 내 처리와 사용자 제어를 중심으로 설계되었으며 제3자 광고 추적을 사용하지 않습니다.",
        meta: [["시행일", "2026년 7월 26일"], ["App", "Cam-Hub"], ["문의", contactLink]],
        sections: [
          ["개요", ["Cam-Hub는 추가 서비스 계정을 요구하지 않으며 제3자 광고나 광고 추적을 포함하지 않습니다. 사용자가 설정하고 접근 권한을 가진 카메라와 녹화 장비에 연결하는 App입니다."]],
          ["장비 정보 및 인증 정보", ["장비 이름, 주소, 포트, 사용자 이름, 채널 정보와 App 설정은 기기에 저장되고 비밀번호는 Apple Keychain에 저장됩니다. 요청한 연결과 작업에만 사용됩니다."]],
          ["연결 및 영상", ["실시간 또는 녹화 영상 확인 시 사용자가 지정한 장비에 연결합니다. 장비, 네트워크, VPN, DNS 또는 원격 서비스는 자체 정책에 따라 연결 정보를 처리할 수 있습니다. 영상은 광고나 행동 분석에 사용하지 않습니다."]],
          ["Webhook 제어 패널 및 제3자 엔드포인트", ["LiveView Mix 제어 버튼에 HTTP/HTTPS 메서드, 엔드포인트 URL, 사용자 지정 헤더와 요청 본문을 설정할 수 있습니다. 이러한 설정에는 Authorization 토큰 등 민감한 정보가 포함될 수 있으며, 기기의 LiveView Mix 설정에 저장되고 사용자가 선택해 만드는 암호화된 iCloud 백업에도 포함될 수 있습니다.", "버튼을 탭한 경우에만 App이 기기에서 사용자가 지정한 Home Assistant, Node-RED 또는 기타 제3자 서비스로 요청을 직접 보냅니다. 해당 엔드포인트와 네트워크 제공자는 각자의 정책에 따라 발신 IP 주소, 헤더 및 본문을 처리할 수 있습니다. Cam-Hub 개발자는 엔드포인트를 선택하거나 관리하지 않으며 그곳으로 전송된 데이터를 받지 않습니다. HTTP 전송은 암호화되지 않으므로 민감한 데이터에는 HTTPS를 사용하고 수신자의 개인정보 및 보안 정책을 확인하세요."]],
          ["로컬 네트워크 접근 및 스캔", ["Cam-Hub는 카메라와 녹화 장비에 직접 연결하기 위해 로컬 네트워크 권한을 요청합니다. 도구 탭에서 스캔을 시작하면 선택한 서브넷과 일반적인 카메라 서비스 포트를 탐색하고, 응답한 장비의 주소, 열린 포트 및 HTTP Server 이름을 읽어 장비 식별을 도울 수 있습니다.", "스캔은 사용자가 요청한 경우에만 시작됩니다. 결과는 기기에서 처리되며 Cam-Hub 개발자에게 전송되지 않습니다."]],
          ["사진 및 카메라", ["Apple 시스템 사진 선택기에서 특정 사진을 선택하거나 카메라 접근을 허용해 새 사진을 촬영하여 LiveView Mix 빈 슬롯에 넣을 수 있습니다. App은 선택하거나 촬영한 이미지만 받으며 전체 사진 보관함을 탐색하지 않습니다. 이미지는 축소·압축되어 기기의 LiveView Mix 설정에 저장됩니다.", "이미지는 기기에만 저장되며 Cam-Hub 개발자가 받거나 접근하지 않습니다. 사용자가 Cam-Hub 암호화 iCloud 백업을 직접 만드는 경우에만 기기 복원을 위해 이미지가 해당 백업과 함께 사용자의 iCloud에 저장될 수 있습니다. LiveView Mix에서 이미지를 삭제하고 시스템 설정에서 카메라 또는 사진 권한을 변경할 수 있습니다."]],
          ["카메라 공유 코드", ["선택한 카메라 또는 녹화 장비의 주소, 사용자 이름, 채널 정보와 비밀번호가 포함된 암호화 코드를 공유할 수 있습니다. 공유할 때 6자리 PIN으로 잠글지 선택할 수 있으며 개발자는 PIN을 보관하거나 복구할 수 없습니다.", "PIN으로 잠긴 코드는 공유 내용을 가져오거나 복원할 때 올바른 PIN이 필요합니다. PIN을 설정하지 않은 전체 코드는 호환되는 Cam-Hub에서 바로 가져올 수 있습니다. 코드는 자동으로 만료되지 않으며 원본 기기에서 장비나 App을 삭제해도 이미 공유된 복사본은 취소되지 않습니다."]],
          ["선택적 iCloud 백업", ["지원되는 설정과 인증 정보를 암호화하여 사용자의 개인 iCloud에 저장합니다. iPhone, iPad 및 Apple TV의 백업과 복원에는 PIN을 사용하지 않으며, 복원할 때 사용 가능한 백업을 선택하면 바로 진행됩니다."]],
          ["구매 및 구독", ["구매와 구독은 Apple이 처리합니다. 당사는 전체 카드 정보나 은행 정보를 받지 않습니다. App은 Apple이 제공하는 구매 상태를 읽어 해당 한도와 기능을 활성화합니다."]],
          ["공유, 보관, 삭제 및 선택", ["당사는 개인정보를 판매하지 않습니다. 로컬 설정은 관련 콘텐츠를 삭제하거나 App을 제거할 때까지 기기에 남습니다. App에서 장비, LiveView Mix 이미지와 제어 설정을 삭제할 수 있고, iCloud 백업은 따로 삭제할 수 있으며, 시스템 권한은 Apple 기기의 설정에서 철회할 수 있습니다.", "선택 사항인 iCloud 데이터는 Apple Account와 iCloud 서비스를 통해 관리됩니다. 지원팀에 자발적으로 보내신 이메일은 답변과 필요한 지원 기록 유지에 필요한 기간에만 보관합니다. 적용되는 개인정보 권리에 관한 문의는 위 이메일로 연락해 주세요."]],
          ["아동 및 방침 변경", ["Cam-Hub는 아동을 대상으로 하지 않으며 아동의 개인정보를 의도적으로 수집하지 않습니다. 기능, 법률 또는 스토어 요구사항이 변경되면 본 방침을 업데이트할 수 있습니다. 개정일은 이 페이지에 게시합니다."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — 이용약관",
        topline: "이용약관",
        eyebrow: "TERMS OF USE",
        title: "이용약관",
        summary: "Cam-Hub 사용에는 본 약관과 적용되는 Apple App Store 규칙이 적용됩니다.",
        meta: [["시행일", "2026년 7월 26일"], ["App", "Cam-Hub"], ["문의", contactLink]],
        sections: [
          ["Apple 표준 EULA", ["Cam-Hub에는 Apple 표준 최종 사용자 사용권 계약이 적용됩니다. 충돌 시 적용되는 Apple 약관이 우선합니다.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["적법하고 허가된 사용", ["소유·관리하거나 명시적으로 접근 허가를 받은 장비와 네트워크에만 연결하세요. 개인정보, 감시, 녹화, 직장 및 재산 관련 현지 법률을 준수할 책임은 사용자에게 있습니다."]],
          ["장비 접근 및 보안", ["유효한 장비 주소와 인증 정보를 제공해야 합니다. Cam-Hub는 접근 통제를 우회하지 않습니다. 장비, 네트워크, 계정, 비밀번호, 원격 접근 설정 및 내보내거나 공유한 영상의 보안은 사용자의 책임입니다."]],
          ["제어 버튼 및 연결 장비", ["LiveView Mix 제어 버튼은 사용자가 구성한 요청을 지정한 엔드포인트로 보냅니다. Cam-Hub는 엔드포인트의 동작을 확인하거나 작업 완료 여부를 검증하지 않으며 요청 전달을 보장할 수 없습니다. 의도하지 않았을 때 버튼이 작동하거나 필요할 때 실패할 수 있습니다.", "버튼에 연결하는 대상과 작동 결과는 사용자의 책임입니다. 실패, 지연, 중복 또는 오작동으로 부상, 갇힘, 재산 피해 또는 보안 상실이 발생할 수 있는 곳에는 사용하지 마세요. 여기에는 문, 대문, 잠금장치, 셔터 및 사람이나 차량이 끼일 수 있는 장비가 포함됩니다. 항상 별도의 조작 수단을 유지하세요."]],
          ["네트워크 스캔", ["도구 탭은 사용자가 선택한 네트워크의 주소와 포트를 탐색합니다. 소유·관리하거나 스캔할 명시적 권한을 받은 네트워크만 스캔하세요. 무단 스캔은 컴퓨터 오용 관련 법률, 네트워크 사업자 약관 또는 근무처나 소속 조직의 정책을 위반할 수 있습니다."]],
          ["전송 코드", ["전송 코드를 받는 사람을 관리하고 노출 가능성이 있는 경우 관련 장비 비밀번호를 즉시 변경할 책임은 사용자에게 있습니다. 코드 내용, 암호화 방식 및 유효 기간은 개인정보 처리방침을 참조하세요."]],
          ["호환성 및 가용성", ["기능은 모델, 펌웨어, 프로토콜 구현, 권한, 코덱, 녹화 설정 및 네트워크 상태에 따라 다릅니다. ONVIF, RTSP 또는 특정 제품군 지원이 모든 모델이나 기능의 작동을 보장하지는 않습니다.", "일부 브랜드 지원은 공개된 제조사 문서를 바탕으로 하며 모든 모델에서 실제 검증된 것은 아닙니다. Cam-Hub는 장비를 추가할 때 작동하는 스트림 경로를 확인하며, 그 전에는 호환성을 보장하지 않습니다.", "Cam-Hub는 긴급 감시 서비스가 아니며 영상의 연속성, 녹화 가용성, 알림 전달 또는 특정 보안 결과를 보장하지 않습니다."]],
          ["구매 및 구독", ["구매, 갱신, 해지, 환불 및 계정 관리는 Apple의 표시와 Apple Account 설정을 따릅니다.", "구독이 만료되면 무료 허용량을 초과하는 채널의 스트리밍이 중단됩니다. 장비, 이름 및 설정은 기기에 남아 있으며 해당 구독을 갱신하면 다시 사용할 수 있습니다. 가격과 플랜 내용은 Apple의 고지 및 관련 법률에 따라 변경될 수 있습니다. 구독 가격 변경은 Apple이 안내한 향후 갱신 시점에만 적용됩니다. 본 약관은 관련 법률이 보장하는 강행적 소비자 권리를 제한하지 않습니다."]],
          ["개인정보", ["데이터 처리에 관한 내용은 별도의 개인정보 처리방침에 설명되어 있습니다.", `<a href="privacy.html">Cam-Hub 개인정보 처리방침</a>`]],
          ["제3자 명칭", ["Hikvision, Dahua, Synology, ONVIF 등의 명칭은 각 권리자에게 귀속됩니다. 기술적 호환성은 제휴, 후원 또는 공식 인증을 의미하지 않습니다."]],
          ["보증 부인 및 책임 제한", ["Cam-Hub는 Apple 표준 EULA의 면책 조항에 더하여 어떠한 보증도 없이 '있는 그대로' 및 '이용 가능한 상태로' 제공됩니다. 법률이 허용하는 범위에서 개발자는 영상 손실, 사건 누락, 재산 손실 또는 영업 중단을 포함한 간접적, 부수적, 특별 또는 결과적 손해에 대해 책임지지 않습니다. 본 약관은 법률상 배제하거나 제한할 수 없는 책임을 배제·제한하지 않고, 강행적 소비자 권리를 제한하지 않으며, Apple 약관이 제공하는 권리를 대체하지 않습니다."]],
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
        featureTVBody: "Nutzen Sie LiveView Mix, gerätebezogene Übersichten und Vollbildvideo auf Apple TV. Erstellen Sie auf iPhone oder iPad ein verschlüsseltes Apple-TV-Backup und stellen Sie es ohne PIN wieder her.",
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
          ["05", "Optionales iCloud-Backup", "Verschlüsseln Sie unterstützte Konfigurationen und Zugangsdaten in Ihrer privaten iCloud. Für Sicherung und Wiederherstellung ist keine PIN nötig."],
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
          ["Bei Kontaktaufnahme", ["Nennen Sie App-Version, Apple-Gerät und Betriebssystemversion.", "Nennen Sie Gerätemodell und Firmwareversion.", "Beschreiben Sie Verbindung, Schritte und vollständige Fehlermeldung.", "Senden Sie niemals Passwort, PIN zur Kamerafreigabe, vollständigen Freigabecode oder öffentliche Adresse."]],
          ["Typische Einschränkungen", ["ONVIF- und RTSP-Implementierungen unterscheiden sich nach Hersteller, Modell und Firmware.", "Fernzugriff benötigt ein sicher eingerichtetes VPN, einen Router oder eine Gerätefunktion.", "Aufzeichnungssuche und Wiedergabe erfordern Geräteunterstützung und passende Berechtigungen."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — Datenschutzerklärung",
        topline: "Datenschutzerklärung",
        eyebrow: "PRIVACY POLICY",
        title: "Datenschutzerklärung",
        summary: "Cam-Hub setzt auf Verarbeitung auf dem Gerät und Nutzerkontrolle und enthält kein Werbetracking durch Dritte.",
        meta: [["Gültig ab", "26. Juli 2026"], ["App", "Cam-Hub"], ["Kontakt", contactLink]],
        sections: [
          ["Überblick", ["Cam-Hub verlangt kein zusätzliches Dienstkonto und enthält keine Drittanbieterwerbung oder Werbeverfolgung. Die App verbindet sich mit Kameras und Rekordern, die Sie konfigurieren und verwenden dürfen."]],
          ["Geräte- und Zugangsdaten", ["Gerätenamen, Adressen, Ports, Benutzernamen, Kanäle und App-Einstellungen werden auf Ihrem Gerät gespeichert; Passwörter im Apple Keychain. Sie werden nur für die von Ihnen angeforderten Verbindungen und Aktionen verwendet."]],
          ["Verbindungen und Video", ["Bei Live- oder Aufzeichnungsansichten verbindet sich die App mit der von Ihnen angegebenen Geräteadresse. Gerät, Netzwerk, VPN, DNS oder gewählte Ferndienste können Verbindungsdaten nach eigenen Richtlinien verarbeiten. Cam-Hub nutzt Video nicht für Werbung oder Verhaltensprofile."]],
          ["Webhook-Steuerfelder und Drittanbieter-Endpunkte", ["Für LiveView-Mix-Steuerschaltflächen können Sie HTTP- oder HTTPS-Methode, Endpunkt-URL, eigene Header und einen Anfrageinhalt festlegen. Diese Einstellungen können Authorization-Token oder andere sensible Angaben enthalten. Sie werden in der LiveView-Mix-Konfiguration auf Ihrem Gerät gespeichert und können in einer von Ihnen erstellten verschlüsselten iCloud-Sicherung enthalten sein.", "Nur wenn Sie eine Schaltfläche betätigen, sendet die App die Anfrage direkt von Ihrem Gerät an den von Ihnen bestimmten Endpunkt, etwa Home Assistant, Node-RED oder einen anderen Drittanbieterdienst. Der Endpunkt und Netzbetreiber können Quell-IP, Header und Anfrageinhalt nach ihren Richtlinien verarbeiten. Der Cam-Hub-Entwickler wählt oder kontrolliert diese Endpunkte nicht und erhält die dorthin gesendeten Daten nicht. HTTP ist während der Übertragung unverschlüsselt; verwenden Sie HTTPS für sensible Daten und prüfen Sie Datenschutz und Sicherheit des Empfängers."]],
          ["Lokaler Netzwerkzugriff und Scan", ["Cam-Hub fordert die Berechtigung für das lokale Netzwerk an, um Kameras und Rekorder direkt zu verbinden. Wenn Sie im Tab „Werkzeuge“ einen Scan starten, prüft die App das gewählte Subnetz und übliche Kameradienst-Ports und kann Adressen antwortender Geräte, offene Ports und HTTP-Server-Namen auslesen, um Geräte zu identifizieren.", "Ein Scan wird nur auf Ihre Anforderung gestartet. Ergebnisse werden auf Ihrem Gerät verarbeitet und nicht an den Cam-Hub-Entwickler gesendet."]],
          ["Fotos und Kamera", ["Sie können mit Apples System-Fotoauswahl ein bestimmtes Foto wählen oder den Kamerazugriff erlauben, um ein neues Foto für ein freies LiveView-Mix-Feld aufzunehmen. Die App erhält nur das ausgewählte oder aufgenommene Bild und durchsucht nicht Ihre gesamte Fotomediathek. Das Bild wird verkleinert, komprimiert und in der LiveView-Mix-Konfiguration auf Ihrem Gerät gespeichert.", "Bilder verbleiben auf Ihrem Gerät; der Cam-Hub-Entwickler erhält sie nicht und kann nicht darauf zugreifen. Nur wenn Sie selbst ein verschlüsseltes Cam-Hub-iCloud-Backup erstellen, können die Bilder zur Gerätewiederherstellung mit diesem Backup in Ihrer eigenen iCloud gespeichert werden. Sie können Bilder in LiveView Mix entfernen und Kamera- oder Fotoberechtigungen in den Systemeinstellungen ändern."]],
          ["Codes zum Teilen von Kameras", ["Sie können einen verschlüsselten Code mit Adressen, Benutzernamen, Kanalinformationen und Passwörtern ausgewählter Kameras oder Rekorder teilen. Dabei wählen Sie, ob der Code mit einer sechsstelligen PIN gesperrt wird. Der Entwickler speichert die PIN nicht und kann sie nicht wiederherstellen.", "Ein PIN-gesperrter Code erfordert beim Importieren oder Wiederherstellen der geteilten Kameras die richtige PIN. Ohne PIN lässt sich der vollständige Code direkt mit einer kompatiblen Cam-Hub-Version importieren. Codes laufen nicht automatisch ab; das Löschen eines Geräts oder der App auf dem Quellgerät widerruft bereits geteilte Kopien nicht."]],
          ["Optionales iCloud-Backup", ["Die App verschlüsselt unterstützte Konfigurationen und Zugangsdaten und legt sie in Ihrer privaten iCloud ab. Sicherung und Wiederherstellung auf iPhone, iPad und Apple TV verwenden keine PIN; wählen Sie zur Wiederherstellung einfach ein verfügbares Backup aus."]],
          ["Käufe und Abonnements", ["Käufe und Abonnements werden von Apple abgewickelt. Vollständige Karten- oder Bankdaten erhalten wir nicht. Die App liest den von Apple bereitgestellten Kaufstatus aus, um die entsprechenden Limits und Funktionen freizuschalten."]],
          ["Weitergabe, Aufbewahrung, Löschung und Wahlmöglichkeiten", ["Wir verkaufen keine personenbezogenen Daten. Lokale Einstellungen bleiben auf Ihrem Gerät, bis Sie die betreffenden Inhalte löschen oder die App entfernen. In der App können Sie Geräte, LiveView-Mix-Bilder und Steuerungseinstellungen löschen, ein iCloud-Backup separat löschen und Systemberechtigungen in den Einstellungen Ihres Apple-Geräts widerrufen.", "Optionale iCloud-Daten verwalten Sie über Ihren Apple Account und die iCloud-Dienste. Freiwillig an den Support gesendete E-Mails bewahren wir nur so lange auf, wie es zur Beantwortung und für erforderliche Support-Nachweise nötig ist. Zur Wahrnehmung Ihrer Datenschutzrechte wenden Sie sich an die oben genannte Adresse."]],
          ["Kinder und Änderungen dieser Erklärung", ["Cam-Hub richtet sich nicht an Kinder und erhebt nicht wissentlich personenbezogene Daten von Kindern. Wir können diese Erklärung aktualisieren, wenn sich Funktionen, Gesetze oder Store-Anforderungen ändern. Das Datum der Änderung wird auf dieser Seite veröffentlicht."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — Nutzungsbedingungen",
        topline: "Nutzungsbedingungen",
        eyebrow: "TERMS OF USE",
        title: "Nutzungsbedingungen",
        summary: "Für die Nutzung von Cam-Hub gelten diese Bedingungen und die anwendbaren Regeln des Apple App Store.",
        meta: [["Gültig ab", "26. Juli 2026"], ["App", "Cam-Hub"], ["Kontakt", contactLink]],
        sections: [
          ["Apple Standard-EULA", ["Für Cam-Hub gilt die Apple Standard-Endnutzer-Lizenzvereinbarung. Bei Widersprüchen gehen die anwendbaren Apple-Bedingungen vor.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["Rechtmäßige und autorisierte Nutzung", ["Verbinden Sie nur Geräte und Netzwerke, die Sie besitzen, verwalten oder ausdrücklich nutzen dürfen. Sie sind für die Einhaltung örtlicher Datenschutz-, Überwachungs-, Aufzeichnungs-, Arbeits- und Eigentumsvorschriften verantwortlich."]],
          ["Gerätezugriff und Sicherheit", ["Sie müssen gültige Geräteadressen und Zugangsdaten angeben. Cam-Hub umgeht keine Zugriffskontrollen. Sie sind für die Absicherung von Geräten, Netzwerk, Konten, Passwörtern, Fernzugriff und exportierten oder geteilten Medien verantwortlich."]],
          ["Steuerschaltflächen und verbundene Geräte", ["LiveView-Mix-Steuerschaltflächen senden eine von Ihnen konfigurierte Anfrage an einen von Ihnen gewählten Endpunkt. Cam-Hub prüft nicht, was dieser Endpunkt ausführt, bestätigt nicht den Abschluss einer Aktion und kann die Zustellung nicht garantieren. Eine Schaltfläche kann unbeabsichtigt auslösen oder im benötigten Moment ausfallen.", "Sie sind dafür verantwortlich, womit eine Schaltfläche verbunden ist und welche Folgen ihre Betätigung hat. Verwenden Sie diese Schaltflächen nicht, wenn Ausfall, Verzögerung, doppelte Ausführung oder versehentliche Betätigung zu Verletzungen, Einschließen, Sachschäden oder Sicherheitsverlust führen könnten. Dazu zählen Türen, Tore, Schlösser, Rollläden und Geräte, in denen Personen oder Fahrzeuge eingeklemmt werden können. Halten Sie stets eine unabhängige Bedienmöglichkeit bereit."]],
          ["Netzwerkscan", ["Der Bereich „Werkzeuge“ prüft Adressen und Ports in einem von Ihnen gewählten Netzwerk. Scannen Sie nur Netzwerke, die Sie besitzen, verwalten oder ausdrücklich scannen dürfen. Ein Scan ohne Erlaubnis kann gegen Gesetze zum Missbrauch von Computersystemen, Bedingungen Ihres Netzbetreibers oder Richtlinien Ihres Arbeitgebers oder Ihrer Organisation verstoßen."]],
          ["Übertragungscodes", ["Sie sind dafür verantwortlich, wer einen Übertragungscode erhält, und müssen betroffene Gerätepasswörter sofort ändern, wenn er möglicherweise offengelegt wurde. Inhalt, Verschlüsselung und Gültigkeitsdauer des Codes beschreibt die Datenschutzerklärung."]],
          ["Kompatibilität und Verfügbarkeit", ["Funktionen variieren nach Gerätemodell, Firmware, Protokollimplementierung, Berechtigungen, Codec, Aufzeichnungskonfiguration und Netzwerkbedingungen. Die Unterstützung von ONVIF, RTSP oder einer benannten Produktfamilie garantiert nicht, dass jedes Modell oder jede Funktion arbeitet.", "Die Unterstützung einiger Marken wurde aus veröffentlichten Herstellerunterlagen abgeleitet und nicht mit jedem Modell praktisch geprüft. Cam-Hub bestätigt beim Hinzufügen eines Geräts einen funktionierenden Stream-Pfad; bis dahin ist die Kompatibilität nicht garantiert.", "Cam-Hub ist kein Notfallüberwachungsdienst und garantiert weder unterbrechungsfreie Videos, verfügbare Aufzeichnungen, zugestellte Meldungen noch bestimmte Sicherheitsergebnisse."]],
          ["Käufe und Abonnements", ["Käufe, Verlängerung, Kündigung, Erstattung und Kontoverwaltung richten sich nach Apples Angaben und den Einstellungen Ihres Apple Accounts.", "Endet ein Abonnement, wird das Streaming von Kanälen oberhalb des kostenlosen Kontingents beendet. Geräte, Namen und Einstellungen bleiben auf dem Gerät und werden nach Erneuerung eines passenden Abonnements wieder verfügbar. Preise und Tarifinhalte können nach Apples Mitteilungen und dem anwendbaren Recht geändert werden. Eine Preisänderung des Abonnements gilt erst für eine von Apple angegebene künftige Verlängerung. Zwingende gesetzliche Verbraucherrechte werden nicht eingeschränkt."]],
          ["Datenschutz", ["Die Datenverarbeitung ist in einer gesonderten Datenschutzerklärung beschrieben.", `<a href="privacy.html">Cam-Hub Datenschutzerklärung</a>`]],
          ["Drittanbieterbezeichnungen", ["Hikvision, Dahua, Synology, ONVIF und andere Namen gehören ihren jeweiligen Rechteinhabern. Technische Kompatibilität bedeutet keine Zugehörigkeit, Partnerschaft, Förderung oder offizielle Anerkennung."]],
          ["Gewährleistungsausschluss und Haftungsbeschränkung", ["Cam-Hub wird zusätzlich zu den Haftungsausschlüssen in Apples Standard-EULA ohne Gewährleistung „wie besehen“ und „wie verfügbar“ bereitgestellt. Soweit gesetzlich zulässig, haftet der Entwickler nicht für mittelbare, beiläufige, besondere oder Folgeschäden, einschließlich verlorener Aufnahmen, verpasster Ereignisse, Sachschäden oder Betriebsunterbrechungen. Nichts in diesen Bedingungen schließt eine gesetzlich nicht ausschließbare oder beschränkbare Haftung aus, beschränkt zwingende Verbraucherrechte oder ersetzt Rechte aus Apples Bedingungen."]],
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
        featureTVBody: "Usa LiveView Mix, vistas por equipo y vídeo a pantalla completa en Apple TV. Crea en el iPhone o iPad una copia cifrada para Apple TV y restáurala sin PIN.",
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
          ["05", "Copia opcional en iCloud", "Cifra configuraciones y credenciales compatibles en tu iCloud privado. La copia y la restauración no requieren PIN."],
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
          ["Al contactar con soporte", ["Incluye versión de la App, dispositivo Apple y versión del sistema.", "Incluye modelo del equipo y firmware.", "Describe la conexión, los pasos y el mensaje de error completo.", "No envíes contraseñas, el PIN para compartir cámaras, el código compartido completo ni una dirección pública."]],
          ["Limitaciones habituales", ["Las implementaciones de ONVIF y RTSP varían entre fabricantes, modelos y firmware.", "El acceso remoto requiere una VPN, un router o una función del equipo configurados de forma segura.", "La búsqueda y reproducción requieren compatibilidad del equipo y permisos adecuados."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — Política de privacidad",
        topline: "Política de privacidad",
        eyebrow: "PRIVACY POLICY",
        title: "Política de privacidad",
        summary: "Cam-Hub prioriza el procesamiento en el dispositivo y el control del usuario, sin seguimiento publicitario de terceros.",
        meta: [["Vigente desde", "26 de julio de 2026"], ["App", "Cam-Hub"], ["Contacto", contactLink]],
        sections: [
          ["Resumen", ["Cam-Hub no exige una cuenta de servicio adicional ni integra publicidad o seguimiento publicitario de terceros. Se conecta a cámaras y grabadores configurados y autorizados por el usuario."]],
          ["Información y credenciales", ["Nombres, direcciones, puertos, usuarios, canales y ajustes se guardan en el dispositivo; las contraseñas se guardan en Apple Keychain. Solo se usan para conexiones y acciones solicitadas."]],
          ["Conexiones y vídeo", ["Al ver vídeo en directo o grabado, la App se conecta a la dirección indicada. El equipo, la red, VPN, DNS o servicios remotos pueden tratar datos de conexión según sus políticas. Cam-Hub no usa vídeo para publicidad ni perfiles de comportamiento."]],
          ["Paneles Webhook y endpoints de terceros", ["Puedes configurar en los botones de control de LiveView Mix un método HTTP o HTTPS, la URL del endpoint, encabezados personalizados y el cuerpo de la solicitud. Estos ajustes pueden contener tokens Authorization u otros datos sensibles. Se guardan en la configuración de LiveView Mix del dispositivo y pueden incluirse en una copia cifrada de iCloud que decidas crear.", "Solo al pulsar un botón, la App envía la solicitud directamente desde tu dispositivo al endpoint indicado, como Home Assistant, Node-RED u otro servicio de terceros. El endpoint y los proveedores de red pueden tratar la IP de origen, los encabezados y el cuerpo según sus políticas. El desarrollador de Cam-Hub no elige ni controla esos endpoints y no recibe los datos enviados a ellos. HTTP no cifra el tránsito; usa HTTPS para datos sensibles y revisa las prácticas de privacidad y seguridad del destinatario."]],
          ["Acceso y exploración de la red local", ["Cam-Hub solicita permiso de red local para conectarse directamente a cámaras y grabadores. Al iniciar una exploración en la pestaña Herramientas, la App sondea la subred elegida y puertos habituales de servicios de cámara, y puede leer direcciones de equipos que responden, puertos abiertos y nombres HTTP Server para ayudar a identificarlos.", "La exploración solo se inicia cuando la solicitas. Los resultados se procesan en el dispositivo y no se envían al desarrollador de Cam-Hub."]],
          ["Fotos y cámara", ["Puedes usar el selector de fotos del sistema Apple para elegir una foto concreta, o conceder acceso a la cámara para tomar una nueva, y colocarla en una casilla libre de LiveView Mix. La App solo recibe la imagen elegida o capturada, no examina toda la fototeca. La imagen se reduce, comprime y guarda en la configuración de LiveView Mix del dispositivo.", "Las imágenes permanecen en tu dispositivo; el desarrollador de Cam-Hub no las recibe ni puede acceder a ellas. Solo si decides crear una copia cifrada de Cam-Hub en iCloud, las imágenes pueden guardarse con esa copia en tu propia cuenta de iCloud para restaurar tus dispositivos. Puedes retirar una imagen en LiveView Mix y cambiar los permisos de Cámara o Fotos en Ajustes del sistema."]],
          ["Códigos para compartir cámaras", ["Puedes compartir un código cifrado con las direcciones, los nombres de usuario, la información de canales y las contraseñas de las cámaras o grabadores seleccionados. Al compartir, puedes decidir si lo bloqueas con un PIN de seis dígitos. El desarrollador no guarda el PIN ni puede recuperarlo.", "Un código bloqueado exige el PIN correcto al importar o restaurar las cámaras compartidas. Sin PIN, una versión compatible de Cam-Hub puede importar directamente el código completo. Los códigos no caducan automáticamente; eliminar el equipo o la App del dispositivo de origen no revoca las copias ya compartidas."]],
          ["Copia opcional en iCloud", ["La App cifra las configuraciones y credenciales compatibles y las guarda en tu iCloud privado. La copia y la restauración en iPhone, iPad y Apple TV no usan PIN; para restaurar, selecciona una copia disponible y continúa directamente."]],
          ["Compras y suscripciones", ["Apple procesa las compras y las suscripciones. No recibimos los datos completos de tu tarjeta ni de tu banco. La App consulta el estado de compra que facilita Apple para desbloquear los límites y las funciones correspondientes."]],
          ["Compartición, conservación, eliminación y opciones", ["No vendemos datos personales. Los ajustes locales permanecen en tu dispositivo hasta que elimines el contenido correspondiente o desinstales la App. En la App puedes eliminar equipos, imágenes de LiveView Mix y ajustes de control, eliminar por separado una copia de seguridad de iCloud y retirar los permisos del sistema en los Ajustes de tu dispositivo Apple.", "Los datos opcionales de iCloud se gestionan a través de tu Apple Account y los servicios de iCloud. Los correos que envíes voluntariamente al soporte se conservan solo el tiempo necesario para responderte y mantener los registros de soporte imprescindibles. Para ejercer los derechos de protección de datos que te correspondan, escribe al contacto indicado."]],
          ["Menores y cambios en la política", ["Cam-Hub no está dirigida a menores y no recopila intencionadamente información personal de menores. Podemos actualizar esta política cuando cambien las funciones, la legislación o los requisitos de la tienda. La fecha de revisión se publicará en esta página."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — Términos de uso",
        topline: "Términos de uso",
        eyebrow: "TERMS OF USE",
        title: "Términos de uso",
        summary: "El uso de Cam-Hub está sujeto a estos términos y a las normas aplicables del Apple App Store.",
        meta: [["Vigente desde", "26 de julio de 2026"], ["App", "Cam-Hub"], ["Contacto", contactLink]],
        sections: [
          ["EULA estándar de Apple", ["Cam-Hub utiliza el acuerdo de licencia estándar de Apple. Si existe conflicto, prevalecen los términos aplicables de Apple.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["Uso legal y autorizado", ["Conecta únicamente equipos y redes que poseas, administres o estés expresamente autorizado a utilizar. Debes cumplir las leyes locales de privacidad, supervisión, grabación, trabajo y propiedad."]],
          ["Acceso a los equipos y seguridad", ["Debes proporcionar direcciones y credenciales válidas. Cam-Hub no elude los controles de acceso. Eres responsable de proteger equipos, red, cuentas, contraseñas, acceso remoto y contenidos exportados o compartidos."]],
          ["Botones de control y equipos conectados", ["Los botones de control de LiveView Mix envían una solicitud que configuras al endpoint que eliges. Cam-Hub no verifica lo que hace el endpoint, no confirma que la acción se haya completado y no puede garantizar la entrega. Un botón podría activarse sin que lo pretendieras o fallar cuando lo necesites.", "Eres responsable de lo que conectas a cada botón y de las consecuencias de su funcionamiento. No los uses cuando un fallo, retraso, duplicación o activación accidental pueda causar lesiones, atrapamiento, daños materiales o pérdida de seguridad. Esto incluye puertas, portones, cerraduras, persianas y cualquier equipo que pueda atrapar a una persona o vehículo. Mantén siempre un medio independiente para accionar el equipo."]],
          ["Exploración de red", ["La pestaña Herramientas sondea direcciones y puertos de una red que selecciones. Explora únicamente redes que poseas, administres o para las que tengas autorización expresa. La exploración no autorizada puede infringir leyes sobre uso indebido de sistemas informáticos, las condiciones del operador de red o las políticas de tu empleador u organización."]],
          ["Códigos de transferencia", ["Eres responsable de quién recibe un código de transferencia y de cambiar de inmediato las contraseñas del equipo si el código pudiera haberse expuesto. Consulta la Política de privacidad para conocer su contenido, cifrado y vigencia."]],
          ["Compatibilidad y disponibilidad", ["Las funciones varían según el modelo, firmware, implementación del protocolo, permisos, códec, configuración de grabación y condiciones de red. La compatibilidad con ONVIF, RTSP o una familia de productos no garantiza el funcionamiento de todos los modelos o funciones.", "La compatibilidad de algunas marcas se deriva de documentación pública del fabricante y no se ha verificado con todos los modelos. Cam-Hub confirma una ruta de transmisión funcional al añadir el equipo; hasta entonces, no se garantiza la compatibilidad.", "Cam-Hub no es un servicio de vigilancia de emergencias y no garantiza vídeo ininterrumpido, disponibilidad de grabaciones, entrega de alertas ni resultados concretos de seguridad."]],
          ["Compras y suscripciones", ["Las compras, renovaciones, cancelaciones, reembolsos y gestión de la cuenta siguen la información de Apple y la configuración de tu Apple Account.", "Si caduca una suscripción, los canales que superen el límite gratuito dejan de transmitir. Los equipos, nombres y ajustes permanecen en el dispositivo y vuelven a estar disponibles al renovar una suscripción aplicable. Los precios y contenidos de los planes pueden cambiar conforme a los avisos de Apple y la ley aplicable. Los cambios de precio de una suscripción solo se aplican en una renovación futura según indique Apple. Estos términos no limitan derechos imperativos del consumidor."]],
          ["Privacidad", ["El tratamiento de datos se describe en una Política de privacidad independiente.", `<a href="privacy.html">Política de privacidad de Cam-Hub</a>`]],
          ["Nombres de terceros", ["Hikvision, Dahua, Synology, ONVIF y otros nombres pertenecen a sus titulares. La compatibilidad técnica no implica afiliación, patrocinio ni aprobación oficial."]],
          ["Exclusión de garantías y limitación de responsabilidad", ["Además de las exclusiones del EULA estándar de Apple, Cam-Hub se proporciona «tal cual» y «según disponibilidad», sin garantías de ningún tipo. En la medida permitida por la ley, el desarrollador no responde de pérdidas indirectas, incidentales, especiales o consecuentes, incluidas grabaciones perdidas, eventos no detectados, daños materiales o interrupción del negocio. Nada de estos términos excluye o limita responsabilidades que la ley no permita excluir o limitar, restringe derechos imperativos del consumidor ni sustituye derechos otorgados por los términos de Apple."]],
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
        featureTVBody: "Utilisez LiveView Mix, les vues par équipement et la vidéo plein écran sur Apple TV. Créez sur iPhone ou iPad une sauvegarde chiffrée dédiée à Apple TV, puis restaurez-la sans PIN.",
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
          ["05", "Sauvegarde iCloud facultative", "Chiffrez les configurations et identifiants pris en charge dans votre iCloud privé. La sauvegarde et la restauration ne demandent aucun PIN."],
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
          ["Lors de votre demande", ["Indiquez la version de l’App, l’appareil Apple et la version du système.", "Indiquez le modèle de l’équipement et son micrologiciel.", "Décrivez la connexion, les étapes et le message d’erreur complet.", "N’envoyez jamais de mot de passe, de PIN de partage des caméras, de code partagé complet ni d’adresse publique."]],
          ["Limites courantes", ["Les implémentations ONVIF et RTSP varient selon le fabricant, le modèle et le micrologiciel.", "L’accès distant nécessite un VPN, un routeur ou une fonction de l’équipement configurés de manière sécurisée.", "La recherche et la lecture exigent la prise en charge par l’équipement et des autorisations adaptées."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — Politique de confidentialité",
        topline: "Politique de confidentialité",
        eyebrow: "PRIVACY POLICY",
        title: "Politique de confidentialité",
        summary: "Cam-Hub privilégie le traitement sur l’appareil et le contrôle par l’utilisateur, sans suivi publicitaire tiers.",
        meta: [["Date d’effet", "26 juillet 2026"], ["App", "Cam-Hub"], ["Contact", contactLink]],
        sections: [
          ["Aperçu", ["Cam-Hub n’exige aucun compte de service supplémentaire et n’intègre ni publicité tierce ni suivi publicitaire. L’App se connecte aux caméras et enregistreurs configurés et autorisés par l’utilisateur."]],
          ["Informations et identifiants", ["Noms, adresses, ports, utilisateurs, canaux et réglages sont stockés sur l’appareil ; les mots de passe dans Apple Keychain. Ils servent uniquement aux connexions et actions demandées."]],
          ["Connexions et vidéo", ["Lors de l’affichage en direct ou enregistré, l’App se connecte à l’adresse indiquée. L’équipement, le réseau, le VPN, le DNS ou les services distants peuvent traiter des données de connexion selon leurs politiques. Cam-Hub n’utilise pas la vidéo pour la publicité ou le profilage comportemental."]],
          ["Panneaux Webhook et destinations tierces", ["Vous pouvez définir pour les boutons de commande LiveView Mix une méthode HTTP ou HTTPS, une URL de destination, des en-têtes personnalisés et un corps de requête. Ces réglages peuvent contenir des jetons Authorization ou d’autres données sensibles. Ils sont stockés dans la configuration LiveView Mix de l’appareil et peuvent être inclus dans une sauvegarde iCloud chiffrée que vous choisissez de créer.", "Ce n’est qu’au toucher d’un bouton que l’App envoie la requête directement depuis votre appareil vers la destination indiquée, par exemple Home Assistant, Node-RED ou un autre service tiers. Cette destination et les fournisseurs réseau peuvent traiter l’adresse IP source, les en-têtes et le corps selon leurs propres politiques. Le développeur de Cam-Hub ne choisit ni ne contrôle ces destinations et ne reçoit pas les données qui leur sont envoyées. HTTP ne chiffre pas le transit ; utilisez HTTPS pour les données sensibles et vérifiez les pratiques de confidentialité et de sécurité du destinataire."]],
          ["Accès et analyse du réseau local", ["Cam-Hub demande l’autorisation Réseau local afin de se connecter directement aux caméras et enregistreurs. Lorsque vous lancez une analyse dans l’onglet Outils, l’App sonde le sous-réseau choisi et des ports courants de services de caméra, et peut lire les adresses des équipements qui répondent, les ports ouverts et les noms HTTP Server pour aider à les identifier.", "L’analyse ne commence qu’à votre demande. Les résultats sont traités sur l’appareil et ne sont pas envoyés au développeur de Cam-Hub."]],
          ["Photos et caméra", ["Vous pouvez utiliser le sélecteur de photos système d’Apple pour choisir une photo précise, ou autoriser la caméra à en prendre une nouvelle, pour une case libre LiveView Mix. L’App reçoit uniquement l’image choisie ou capturée et ne parcourt pas toute votre photothèque. L’image est redimensionnée, compressée et stockée dans la configuration LiveView Mix de l’appareil.", "Les images restent sur votre appareil ; le développeur de Cam-Hub ne les reçoit pas et n’y accède pas. Elles ne peuvent être enregistrées dans votre propre iCloud, avec une sauvegarde chiffrée Cam-Hub destinée à restaurer vos appareils, que si vous choisissez de créer cette sauvegarde. Vous pouvez retirer une image dans LiveView Mix et modifier les autorisations Caméra ou Photos dans les Réglages du système."]],
          ["Codes de partage des caméras", ["Vous pouvez partager un code chiffré contenant les adresses, noms d’utilisateur, informations de canaux et mots de passe des caméras ou enregistreurs sélectionnés. Lors du partage, vous choisissez de le verrouiller ou non avec un PIN à six chiffres. Le développeur ne conserve pas ce PIN et ne peut pas le récupérer.", "Un code verrouillé exige le bon PIN lors de l’importation ou de la restauration des caméras partagées. Sans PIN, une version compatible de Cam-Hub peut importer directement le code complet. Les codes n’expirent pas automatiquement ; supprimer l’équipement ou l’App de l’appareil source ne révoque pas les copies déjà partagées."]],
          ["Sauvegarde iCloud facultative", ["L’App chiffre les configurations et identifiants pris en charge et les place dans votre iCloud privé. La sauvegarde et la restauration sur iPhone, iPad et Apple TV n’utilisent aucun PIN ; pour restaurer, sélectionnez simplement une sauvegarde disponible."]],
          ["Achats et abonnements", ["Les achats et les abonnements sont traités par Apple. Nous ne recevons pas vos coordonnées bancaires complètes. L’app lit l’état d’achat transmis par Apple afin de débloquer les limites et les fonctionnalités correspondantes."]],
          ["Partage, conservation, suppression et choix", ["Nous ne vendons aucune donnée personnelle. Les réglages locaux restent sur votre appareil jusqu’à ce que vous supprimiez le contenu concerné ou désinstalliez l’app. Dans l’app, vous pouvez supprimer les équipements, les images LiveView Mix et les réglages de commande, supprimer séparément une sauvegarde iCloud et retirer les autorisations système dans les Réglages de votre appareil Apple.", "Les données iCloud facultatives sont gérées via votre compte Apple et les services iCloud. Les e-mails que vous adressez volontairement à l’assistance ne sont conservés que le temps nécessaire pour y répondre et conserver les justificatifs requis. Pour exercer vos droits, écrivez à l’adresse indiquée ci-dessus."]],
          ["Enfants et modifications de la politique", ["Cam-Hub ne s’adresse pas aux enfants et ne collecte pas sciemment de données personnelles les concernant. Nous pouvons mettre à jour cette politique lorsque les fonctionnalités, la loi ou les exigences de la boutique évoluent. La date de révision sera publiée sur cette page."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — Conditions d’utilisation",
        topline: "Conditions d’utilisation",
        eyebrow: "TERMS OF USE",
        title: "Conditions d’utilisation",
        summary: "L’utilisation de Cam-Hub est soumise à ces conditions et aux règles applicables de l’Apple App Store.",
        meta: [["Date d’effet", "26 juillet 2026"], ["App", "Cam-Hub"], ["Contact", contactLink]],
        sections: [
          ["CLUF standard Apple", ["Cam-Hub utilise le contrat de licence utilisateur final standard d’Apple. En cas de conflit, les conditions Apple applicables prévalent.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["Utilisation légale et autorisée", ["Connectez uniquement les équipements et réseaux que vous possédez, gérez ou êtes expressément autorisé à utiliser. Vous devez respecter les lois locales relatives à la vie privée, la surveillance, l’enregistrement, le travail et la propriété."]],
          ["Accès aux équipements et sécurité", ["Vous devez fournir des adresses et identifiants valides. Cam-Hub ne contourne pas les contrôles d’accès. Vous êtes responsable de la sécurité des équipements, du réseau, des comptes, mots de passe, accès distants et médias exportés ou partagés."]],
          ["Boutons de commande et équipements connectés", ["Les boutons de commande LiveView Mix envoient une requête que vous configurez vers le point de terminaison que vous choisissez. Cam-Hub ne vérifie pas ce que fait ce point de terminaison, ne confirme pas l’exécution de l’action et ne peut garantir la livraison. Un bouton peut se déclencher involontairement ou ne pas fonctionner au moment voulu.", "Vous êtes responsable de ce que vous reliez à un bouton et des conséquences de son fonctionnement. N’utilisez pas ces boutons lorsqu’un échec, retard, doublon ou déclenchement accidentel pourrait causer une blessure, un enfermement, un dommage matériel ou une perte de sécurité. Cela inclut les portes, portails, serrures, volets et tout équipement susceptible de coincer une personne ou un véhicule. Conservez toujours un moyen indépendant d’actionner l’équipement."]],
          ["Analyse du réseau", ["L’onglet Outils sonde les adresses et ports d’un réseau que vous sélectionnez. Analysez uniquement les réseaux que vous possédez, gérez ou êtes expressément autorisé à analyser. Une analyse non autorisée peut enfreindre les lois sur l’utilisation abusive des systèmes informatiques, les conditions de votre opérateur réseau ou les règles de votre employeur ou de votre organisation."]],
          ["Codes de transfert", ["Vous êtes responsable des destinataires d’un code de transfert et devez changer immédiatement les mots de passe des équipements si le code a pu être exposé. Son contenu, son chiffrement et sa durée de validité sont décrits dans la Politique de confidentialité."]],
          ["Compatibilité et disponibilité", ["Les fonctions varient selon le modèle, le micrologiciel, l’implémentation des protocoles, les autorisations, le codec, la configuration d’enregistrement et le réseau. La prise en charge d’ONVIF, de RTSP ou d’une gamme de produits ne garantit pas le fonctionnement de chaque modèle ou fonction.", "La prise en charge de certaines marques est déduite de la documentation publique du fabricant et n’a pas été vérifiée sur tous les modèles. Cam-Hub confirme un chemin de flux fonctionnel lors de l’ajout d’un équipement ; avant cela, la compatibilité n’est pas garantie.", "Cam-Hub n’est pas un service de surveillance d’urgence et ne garantit ni vidéo ininterrompue, ni disponibilité des enregistrements, ni réception des alertes, ni résultat de sécurité particulier."]],
          ["Achats et abonnements", ["Les achats, renouvellements, résiliations, remboursements et la gestion du compte suivent les informations d’Apple et les réglages de votre Apple Account.", "Si un abonnement expire, les canaux dépassant le quota gratuit cessent de diffuser. Les équipements, noms et réglages restent sur l’appareil et redeviennent disponibles après le renouvellement d’un abonnement applicable. Les prix et contenus des offres peuvent changer selon les avis d’Apple et le droit applicable. Tout changement de prix d’un abonnement ne prend effet que lors d’un renouvellement futur indiqué par Apple. Ces conditions ne limitent aucun droit impératif du consommateur."]],
          ["Confidentialité", ["Le traitement des données est décrit dans une Politique de confidentialité distincte.", `<a href="privacy.html">Politique de confidentialité de Cam-Hub</a>`]],
          ["Noms de tiers", ["Hikvision, Dahua, Synology, ONVIF et les autres noms appartiennent à leurs titulaires. La compatibilité technique n’implique aucune affiliation, aucun parrainage ni aucune approbation officielle."]],
          ["Absence de garantie et limitation de responsabilité", ["Outre les exclusions du CLUF standard Apple, Cam-Hub est fourni « en l’état » et « selon disponibilité », sans garantie d’aucune sorte. Dans la mesure permise par la loi, le développeur n’est pas responsable des pertes indirectes, accessoires, spéciales ou consécutives, notamment les séquences perdues, événements manqués, dommages matériels ou interruptions d’activité. Rien dans ces conditions n’exclut ou ne limite une responsabilité que la loi interdit d’exclure ou de limiter, ne restreint les droits impératifs des consommateurs, ni ne remplace les droits accordés par les conditions d’Apple."]],
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
        featureTVBody: "استخدم LiveView Mix وعروض المعدات والفيديو بملء الشاشة على Apple TV. أنشئ نسخة احتياطية مشفرة مخصصة لـ Apple TV على iPhone أو iPad ثم استعدها من دون رمز PIN.",
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
          ["05", "نسخة iCloud اختيارية", "شفّر الإعدادات وبيانات الدخول المدعومة واحفظها في iCloud الخاص بك. لا يتطلب النسخ أو الاستعادة رمز PIN."],
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
          ["عند التواصل مع الدعم", ["اذكر إصدار التطبيق وجهاز Apple وإصدار النظام.", "اذكر طراز المعدات وإصدار البرنامج الثابت.", "اشرح طريقة الاتصال والخطوات ورسالة الخطأ كاملة.", "لا ترسل كلمة المرور أو رمز PIN لمشاركة الكاميرات أو رمز المشاركة الكامل أو عنوانًا عامًا."]],
          ["قيود شائعة", ["تختلف تطبيقات ONVIF وRTSP بين الشركات والطرازات وإصدارات البرامج الثابتة.", "يتطلب الوصول عن بُعد شبكة VPN أو جهاز توجيه أو ميزة وصول تم إعدادها بشكل آمن.", "يتطلب البحث في التسجيلات وتشغيلها دعم المعدات والصلاحيات المناسبة."]]
        ]
      },
      privacy: {
        documentTitle: "Cam-Hub — سياسة الخصوصية",
        topline: "سياسة الخصوصية",
        eyebrow: "PRIVACY POLICY",
        title: "سياسة الخصوصية",
        summary: "يعتمد Cam-Hub على المعالجة داخل الجهاز وتحكم المستخدم، ولا يتضمن تتبعًا إعلانيًا من جهات خارجية.",
        meta: [["تاريخ السريان", "26 يوليو 2026"], ["App", "Cam-Hub"], ["التواصل", contactLink]],
        sections: [
          ["نظرة عامة", ["لا يتطلب Cam-Hub حساب خدمة إضافيًا ولا يدمج إعلانات أو تتبعًا إعلانيًا من جهات خارجية. يتصل التطبيق بالكاميرات والمسجلات التي يجهزها المستخدم ويُصرح له باستخدامها."]],
          ["معلومات المعدات وبيانات الدخول", ["تُحفظ أسماء المعدات وعناوينها ومنافذها وأسماء المستخدمين والقنوات والإعدادات على الجهاز، وتُحفظ كلمات المرور في Apple Keychain. تُستخدم فقط للاتصالات والإجراءات التي يطلبها المستخدم."]],
          ["الاتصالات والفيديو", ["عند عرض بث مباشر أو تسجيل، يتصل التطبيق بالعنوان الذي حدده المستخدم. قد تعالج المعدات أو الشبكة أو VPN أو DNS أو الخدمات البعيدة معلومات الاتصال وفق سياساتها. لا يستخدم Cam-Hub الفيديو للإعلانات أو بناء ملفات سلوكية."]],
          ["لوحات Webhook ونقاط النهاية التابعة لجهات خارجية", ["يمكنك إعداد طريقة HTTP أو HTTPS وعنوان نقطة النهاية ورؤوس مخصصة ومحتوى الطلب لأزرار التحكم في LiveView Mix. قد تتضمن هذه الإعدادات رموز Authorization أو بيانات حساسة أخرى. تُحفظ في إعداد LiveView Mix على جهازك وقد تدخل في نسخة iCloud مشفرة تختار إنشاءها.", "لا يرسل التطبيق الطلب مباشرة من جهازك إلى نقطة النهاية التي حددتها، مثل Home Assistant أو Node-RED أو خدمة أخرى تابعة لجهة خارجية، إلا عند ضغط الزر. قد تعالج نقطة النهاية ومزودو الشبكة عنوان IP المصدر والرؤوس ومحتوى الطلب وفق سياساتهم. لا يختار مطور Cam-Hub تلك النقاط أو يتحكم بها ولا يتلقى البيانات المرسلة إليها. نقل HTTP غير مشفر؛ استخدم HTTPS للبيانات الحساسة وراجع ممارسات الخصوصية والأمان لدى المستلم."]],
          ["الوصول إلى الشبكة المحلية وفحصها", ["يطلب Cam-Hub إذن الشبكة المحلية للاتصال المباشر بالكاميرات والمسجلات. عند بدء فحص من علامة «الأدوات»، يفحص التطبيق الشبكة الفرعية التي تختارها ومنافذ خدمات الكاميرات الشائعة، وقد يقرأ عناوين المعدات المستجيبة والمنافذ المفتوحة وأسماء HTTP Server للمساعدة في التعرف عليها.", "لا يبدأ الفحص إلا بطلب منك. تُعالج النتائج على جهازك ولا تُرسل إلى مطور Cam-Hub."]],
          ["الصور والكاميرا", ["يمكنك استخدام منتقي الصور في نظام Apple لاختيار صورة محددة، أو منح إذن الكاميرا لالتقاط صورة جديدة، ووضعها في خانة فارغة ضمن LiveView Mix. لا يتلقى التطبيق سوى الصورة التي اخترتها أو التقطتها ولا يتصفح مكتبة الصور كاملة. تُصغّر الصورة وتُضغط وتُحفظ في إعداد LiveView Mix على جهازك.", "تبقى الصور على جهازك، ولا يتلقاها مطور Cam-Hub ولا يمكنه الوصول إليها. ولا تُحفظ الصور ضمن نسخة Cam-Hub مشفرة في حساب iCloud الخاص بك لأغراض استعادة الجهاز إلا إذا اخترت إنشاء هذه النسخة بنفسك. يمكنك إزالة الصورة من LiveView Mix وتغيير أذونات الكاميرا أو الصور من إعدادات النظام."]],
          ["رموز مشاركة الكاميرات", ["يمكنك مشاركة رمز مشفر يتضمن عناوين الكاميرات أو المسجلات المحددة وأسماء المستخدمين ومعلومات القنوات وكلمات المرور. عند المشاركة يمكنك اختيار قفل الرمز برمز PIN من ستة أرقام أو تركه من دونه. لا يحتفظ المطور برمز PIN ولا يستطيع استعادته.", "يتطلب الرمز المقفل إدخال PIN الصحيح عند استيراد الكاميرات المشتركة أو استعادتها. من دون PIN، يمكن لإصدار متوافق من Cam-Hub استيراد الرمز الكامل مباشرة. لا تنتهي صلاحية الرموز تلقائيًا، ولا يؤدي حذف المعدات أو التطبيق من الجهاز المصدر إلى إلغاء النسخ التي تمت مشاركتها."]],
          ["نسخة iCloud اختيارية", ["يشفّر التطبيق الإعدادات وبيانات الدخول المدعومة ويحفظها في iCloud الخاص بالمستخدم. لا يستخدم النسخ أو الاستعادة على iPhone وiPad وApple TV رمز PIN؛ وللاستعادة ما عليك سوى اختيار نسخة متاحة والمتابعة مباشرة."]],
          ["المشتريات والاشتراكات", ["تعالج Apple المشتريات والاشتراكات. ولا نتلقى بيانات بطاقتك أو حسابك المصرفي كاملة. ويقرأ التطبيق حالة الشراء التي توفرها Apple لتفعيل الحدود والميزات المقابلة."]],
          ["المشاركة والاحتفاظ والحذف والخيارات", ["لا نبيع البيانات الشخصية. وتبقى الإعدادات المحلية على جهازك حتى تحذف المحتوى المعني أو تزيل التطبيق. ويمكنك داخل التطبيق حذف المعدات وصور LiveView Mix وإعدادات التحكم، وحذف نسخة iCloud الاحتياطية بشكل منفصل، وسحب أذونات النظام من إعدادات جهاز Apple.", "تُدار بيانات iCloud الاختيارية عبر حساب Apple وخدمات iCloud. ولا نحتفظ بالرسائل التي ترسلها طوعاً إلى الدعم إلا للمدة اللازمة للرد وحفظ سجلات الدعم الضرورية. وللاستفسار عن حقوق الخصوصية المطبقة، تواصل عبر البريد أعلاه."]],
          ["الأطفال وتغييرات السياسة", ["Cam-Hub ليس موجّهاً إلى الأطفال ولا يجمع عن قصد معلومات شخصية تخصهم. وقد نحدّث هذه السياسة عند تغير الميزات أو القوانين أو متطلبات المتجر، وسيُنشر تاريخ المراجعة على هذه الصفحة."]]
        ]
      },
      terms: {
        documentTitle: "Cam-Hub — شروط الاستخدام",
        topline: "شروط الاستخدام",
        eyebrow: "TERMS OF USE",
        title: "شروط الاستخدام",
        summary: "يخضع استخدام Cam-Hub لهذه الشروط ولقواعد Apple App Store المطبقة.",
        meta: [["تاريخ السريان", "26 يوليو 2026"], ["App", "Cam-Hub"], ["التواصل", contactLink]],
        sections: [
          ["اتفاقية Apple القياسية", ["يستخدم Cam-Hub اتفاقية ترخيص المستخدم النهائي القياسية من Apple. عند التعارض تسري شروط Apple المطبقة.", `<a href="${eula}">Apple Standard End User License Agreement</a>`]],
          ["الاستخدام القانوني والمصرح", ["اتصل فقط بالمعدات والشبكات التي تملكها أو تديرها أو لديك تصريح صريح باستخدامها. تقع عليك مسؤولية الالتزام بالقوانين المحلية المتعلقة بالخصوصية والمراقبة والتسجيل والعمل والملكية."]],
          ["الوصول إلى المعدات والأمان", ["يجب تقديم عناوين وبيانات دخول صالحة للمعدات. لا يتجاوز Cam-Hub ضوابط الوصول. أنت مسؤول عن حماية المعدات والشبكة والحسابات وكلمات المرور وإعدادات الوصول عن بُعد والوسائط المصدّرة أو المشتركة."]],
          ["أزرار التحكم والمعدات المتصلة", ["ترسل أزرار تحكم LiveView Mix طلبًا تهيئه إلى نقطة نهاية تختارها. لا يتحقق Cam-Hub مما تفعله نقطة النهاية، ولا يؤكد اكتمال الإجراء، ولا يستطيع ضمان وصول الطلب. قد يعمل الزر دون قصد أو يفشل عند الحاجة إليه.", "أنت مسؤول عما تربطه بالزر وعن نتائج تشغيله. لا تستخدم هذه الأزرار إذا كان الفشل أو التأخير أو التكرار أو التشغيل العرضي قد يسبب إصابة أو احتجازًا أو ضررًا بالممتلكات أو فقدانًا للأمان. يشمل ذلك الأبواب والبوابات والأقفال والمصاريع وأي معدات قد تحاصر شخصًا أو مركبة. احتفظ دائمًا بوسيلة مستقلة لتشغيل تلك المعدات."]],
          ["فحص الشبكة", ["تفحص علامة «الأدوات» العناوين والمنافذ في شبكة تختارها. افحص فقط الشبكات التي تملكها أو تديرها أو لديك تصريح صريح بفحصها. قد يخالف الفحص غير المصرح به قوانين إساءة استخدام الحاسوب أو شروط مشغل الشبكة أو سياسات جهة عملك أو المؤسسة التي تنتمي إليها."]],
          ["رموز النقل", ["أنت مسؤول عمن يتلقى رمز النقل وعن تغيير كلمات مرور المعدات فورًا إذا كان من المحتمل أن يكون الرمز قد انكشف. راجع سياسة الخصوصية لمعرفة محتوى الرمز وتشفيره ومدة صلاحيته."]],
          ["التوافق والتوفر", ["تختلف الميزات حسب طراز المعدات والبرنامج الثابت وتنفيذ البروتوكول والصلاحيات والترميز وإعداد التسجيل وظروف الشبكة. لا يضمن دعم ONVIF أو RTSP أو فئة منتجات محددة عمل كل طراز أو ميزة.", "دعم بعض العلامات التجارية مستمد من وثائق الشركة المصنعة المنشورة ولم يُتحقق منه عمليًا مع كل طراز. يؤكد Cam-Hub مسار بث يعمل عند إضافة المعدات؛ وحتى ذلك الحين لا يكون التوافق مضمونًا.", "Cam-Hub ليس خدمة مراقبة للطوارئ ولا يضمن بثًا دون انقطاع أو توفر التسجيلات أو وصول التنبيهات أو نتيجة أمنية محددة."]],
          ["المشتريات والاشتراكات", ["تخضع المشتريات والتجديد والإلغاء والاسترداد وإدارة الحساب للمعلومات التي تعرضها Apple وإعدادات Apple Account.", "إذا انتهى الاشتراك، يتوقف بث القنوات التي تتجاوز الحد المجاني. تبقى المعدات والأسماء والإعدادات على الجهاز وتعود متاحة عند تجديد اشتراك مناسب. قد تتغير الأسعار ومحتويات الخطط وفق إشعارات Apple والقانون المطبق. لا يسري تغيير سعر الاشتراك إلا عند تجديد مستقبلي وفق ما توضحه Apple. لا تحد هذه الشروط من حقوق المستهلك الإلزامية التي يمنحها القانون المطبق."]],
          ["الخصوصية", ["توضح سياسة خصوصية مستقلة كيفية معالجة البيانات.", `<a href="privacy.html">سياسة خصوصية Cam-Hub</a>`]],
          ["أسماء الجهات الأخرى", ["تعود أسماء Hikvision وDahua وSynology وONVIF وغيرها إلى أصحابها. لا يعني التوافق التقني الانتساب أو الرعاية أو الاعتماد الرسمي."]],
          ["إخلاء الضمان وحدود المسؤولية", ["يُقدَّم Cam-Hub «كما هو» و«حسب التوفر» دون أي ضمان، إضافة إلى أحكام إخلاء المسؤولية في اتفاقية Apple القياسية. بالقدر الذي يسمح به القانون، لا يكون المطور مسؤولًا عن الخسائر غير المباشرة أو العرضية أو الخاصة أو التبعية، بما في ذلك فقدان اللقطات أو فوات الأحداث أو خسارة الممتلكات أو توقف الأعمال. لا تستبعد هذه الشروط أو تحد مسؤولية لا يسمح القانون باستبعادها أو تقييدها، ولا تقيد حقوق المستهلك الإلزامية، ولا تستبدل الحقوق التي تمنحها شروط Apple."]],
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
        ["backup", "04", "加密备份与摄像头共享", "iCloud 备份和还原无需 PIN；共享摄像头时可选择用六位数 PIN 锁定代码。", [
          ["iCloud 加密备份", "加密设备、凭据、通道和设置并保存到您的 iCloud；选择备份即可直接还原。"],
          ["共享摄像头", "共享时可选六位数 PIN。设置后导入时必须验证；未设置时完整代码可直接导入。"]
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
        ["backup", "04", "暗号化バックアップとカメラ共有", "iCloud のバックアップと復元に PIN は不要です。カメラ共有時は、共有コードを 6 桁の PIN でロックするか選べます。", [
          ["パスワードを端末内で保護", [
            "追加したデバイスのパスワードは Apple Keychain に保存されます。デバイス名、アドレス、ポート、チャンネル、App の設定は端末内のデータとして保存されます。",
            "Cam-Hub は、ユーザーが実行した接続、録画検索、スナップショット、バックアップ、移行のためにのみ、これらの情報を使用します。",
            "「すべてのデータを削除」を実行すると、端末内のデバイス情報と保存済みパスワードが削除されます。バックアップしていない設定は、App を削除した場合も復元できなくなることがあります。"
          ]],
          ["PIN 不要の暗号化 iCloud バックアップ", [
            "「設定」→「iCloud にバックアップ」を開き、iPhone／iPad または Apple TV の保存先を選んでバックアップを作成します。PIN の設定は不要です。",
            "対応するデバイス、認証情報、チャンネル、LiveView Mix、App の設定は暗号化してから、お客様個人の iCloud に保存されます。",
            "「現在のバックアップ」に新しい日時とデバイス数が表示されていることを確認してください。"
          ]],
          ["iCloud から復元", [
            "「設定」→「iCloud から復元」を開き、バックアップを選ぶとそのまま続行できます。iPhone、iPad、Apple TV のいずれでも PIN の確認はありません。",
            "可能な限り同じ App バージョンを使用し、バックアップを保存した Apple Account でサインインしていることを確認します。古いバージョンのバックアップは、一覧に表示するために作り直す必要がある場合があります。",
            "復元できる数は現在のプラン上限に従います。復元後は、すべてのデバイスアドレス、チャンネル、LiveView Mix が現在のネットワークで正しいことを確認してください。"
          ]],
          ["カメラ共有と任意の PIN", [
            "「設定」→「カメラを共有」で対象を選び、暗号化された共有コードを作成します。共有時に PIN でロックするかを選べます。",
            "PIN ロックを有効にする場合は 6 桁の数字を入力して確認します。受信者は共有カメラの読み込みまたは復元時に PIN の確認が必要です。PIN を設定しなければ、完全なコードからそのまま読み込めます。",
            "取り込みにはデバイスと認証情報が含まれ、移行先のプラン上限が適用されます。完全なコードと PIN は信頼できる相手にだけ送り、公開チャット、問い合わせチケット、ウェブサイトには投稿しないでください。"
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
            "元に戻せない削除を行う前に、iCloud の同期が完了していることと、移行先の端末でバックアップのバージョンを復元できることを確認してください。"
          ]]
        ]],
        ["tv-control", "06", "Apple TV と Webhook 操作", "監視画面をテレビへ広げ、LiveView Mix にご自身で管理する HTTP 操作ボタンを追加できます。", [
          ["Apple TV の大画面で見る", [
            "tvOS 版では LiveView Mix、機器ごとの監視画面、カメラ 1 台の全画面表示、録画タイムラインを利用でき、Siri Remote のフォーカス操作に合わせて設計されています。",
            "高密度レイアウトは大画面に適しています。現在の監視画面を離れず、カメラや Webhook ボタンを直接選択できます。",
            "ライブ映像、録画再生、メイン／サブストリーム、チャンネル機能は、機器が実際に提供する能力、アカウント権限、コーデック、ネットワーク条件により異なります。"
          ]],
          ["iPhone／iPad から設定を移す", [
            "iPhone または iPad で「設定」→「iCloud にバックアップ」を開き、保存先に Apple TV を選んで専用の暗号化バックアップを作成します。PIN の設定は不要です。",
            "Apple TV で同じ Apple Account にサインインし、「iCloud から復元」を開いてバックアップを選ぶと、そのまま復元できます。",
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
        ["backup", "04", "암호화 백업과 카메라 공유", "iCloud 백업과 복원에는 PIN이 필요 없으며, 카메라 공유 코드는 선택적으로 6자리 PIN으로 잠글 수 있습니다.", [
          ["iCloud 암호화 백업", "장비, 인증 정보, 채널과 설정을 암호화해 개인 iCloud에 저장하고 백업을 선택해 바로 복원합니다."],
          ["카메라 공유", "공유할 때 6자리 PIN을 선택할 수 있습니다. 설정하면 가져올 때 인증해야 하며, 설정하지 않으면 전체 코드를 바로 가져옵니다."]
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
        ["backup", "04", "Verschlüsselte Sicherung und Kamerafreigabe", "iCloud-Sicherung und -Wiederherstellung benötigen keine PIN; Freigabecodes können optional mit sechs Ziffern gesperrt werden.", [
          ["iCloud-Sicherung", "Geräte, Zugangsdaten, Kanäle und Einstellungen verschlüsselt in iCloud speichern und eine Sicherung direkt wiederherstellen."],
          ["Kameras teilen", "Optional eine sechsstellige PIN festlegen. Dann ist sie beim Import nötig; ohne PIN wird der vollständige Code direkt importiert."]
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
        ["backup", "04", "Copia cifrada y cámaras compartidas", "La copia y restauración de iCloud no necesitan PIN; el código compartido puede bloquearse opcionalmente con seis cifras.", [
          ["Copia en iCloud", "Cifra equipos, credenciales, canales y ajustes en tu iCloud y restaura directamente la copia seleccionada."],
          ["Compartir cámaras", "Puedes fijar un PIN de seis cifras. Si lo haces será obligatorio al importar; sin PIN, el código completo se importa directamente."]
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
        ["backup", "04", "Sauvegarde chiffrée et partage de caméras", "La sauvegarde et la restauration iCloud ne demandent aucun PIN ; le code partagé peut être verrouillé avec six chiffres.", [
          ["Sauvegarde iCloud", "Chiffrez équipements, identifiants, canaux et réglages dans votre iCloud, puis restaurez directement la sauvegarde choisie."],
          ["Partager les caméras", "Un PIN à six chiffres est facultatif. S’il est défini, il est requis à l’importation ; sinon, le code complet s’importe directement."]
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
        ["backup", "04", "نسخ مشفر ومشاركة الكاميرات", "لا يحتاج النسخ أو الاستعادة عبر iCloud إلى PIN، ويمكن قفل رمز المشاركة اختيارياً بستة أرقام.", [
          ["نسخة iCloud", "شفّر المعدات وبيانات الدخول والقنوات والإعدادات في iCloud، ثم اختر النسخة لاستعادتها مباشرة."],
          ["مشاركة الكاميرات", "يمكن تعيين PIN من ستة أرقام. إذا عُيّن وجب التحقق منه عند الاستيراد؛ ومن دونه يُستورد الرمز الكامل مباشرة."]
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
