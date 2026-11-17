(() => {
  const productLocales = {
    "zh-Hans": {
      documentTitle: "Cam Hub — 功能介绍",
      topline: "功能介绍",
      eyebrow: "CAM HUB 功能介绍",
      title: '<span class="page-title-line">从添加设备开始，</span><span class="page-title-line">逐步设置 Cam Hub。</span>',
      summary: "按照 App 中实际出现的入口与选项，详细介绍设备、LiveView Mix、录像回放、迁移与设置。",
      wikiLabel: "快速前往章节",
      wiki: [
        ["devices", "01", "设备与通道", "先完成设备连接，再决定哪些通道显示在监看画面。", [
          ["准备连接信息", [
            "打开“设备”，点击“添加设备”，进入添加设备表单。",
            "“名称”可以不填；“IP 地址或主机名”和“用户名”为必填项。“高级”中的“HTTP 端口”默认为 80，“RTSP 端口”默认为 554，仅当设备使用其他端口时才需要修改。",
            "输入“密码”后点击“添加”。连接期间会显示“正在连接设备…”；连接失败时，App 会分别提示网络连接、登录信息或设备不受支持等错误，并列出在该地址上找到的开放端口。",
            "不知道设备地址时，可在“工具”标签页中点击“扫描”：Cam Hub 会列出网络中有响应的摄像头和录像机，标明能够识别的设备，并为您填好添加设备表单。",
            "在“设备”列表中点击“编辑”，即可拖动设备，按您需要的顺序排列。",
            "请仅连接您拥有、管理或已获明确授权使用的设备和账号。"
          ]],
          ["自动检测、ONVIF 与 HTTPS", [
            "一般情况下，请将“高级”中的“连接方式”保持为“自动检测”：Cam Hub 会先检查哪些端口有响应，再自动尝试内置的品牌协议、ONVIF 以及多个品牌的 RTSP 视频流路径。",
            "如果找不到设备，或您想使用特定协议，可在带搜索框的“连接方式”列表中选择 ONVIF、RTSP 或设备品牌，然后重新添加。",
            "您可能需要先在设备管理界面启用 ONVIF 和 RTSP，并建立具有查看权限的 ONVIF 账号。连接注意事项可在“兼容性参考”中查看。",
            "设备网页使用 HTTPS 时，可在“高级”中开启“使用 HTTPS”。Cam Hub 会信任设备当时出示的证书，之后若换成其他证书则不会连接（公共证书颁发机构签发的续期证书仍可使用）。已添加的设备可在其设备页上切换为 HTTPS。"
          ]],
          ["整理摄像头通道", [
            "成功添加设备后，在“设备”中点击该设备即可打开设备页；“摄像头”区域会列出设备返回的通道。",
            "开启需要查看的通道并关闭不用的通道。录像机的通道还可使用“暂停画面”停止传输视频，而不只是隐藏图块。",
            "离线通道仍会以淡色保留在“设备”列表中。开启“隐藏离线摄像头”后，这些通道不会显示在实时墙中。"
          ]],
          ["查看和更新设备信息", [
            "设备页顶部的信息卡片会显示型号、地址、端口、序列号、固件版本与通道数量；点击旁边的箭头可收起或展开这些信息。",
            "右上角的铅笔按钮可重命名设备、通过“编辑凭据”更改用户名和密码（摄像头及其在墙上的位置都会保留），以及开启或关闭 HTTPS。下拉可刷新通道列表。",
            "黑边按钮只会切换当前墙的默认、放大填满或拉伸填满；全屏按钮会打开该设备的全屏墙。"
          ]],
          ["磁盘健康", [
            "能够报告磁盘状态的录像机和 NAS，其设备页上会显示“磁盘健康”一行；该行上的橙色或红色符号表示上一次读数中最差的磁盘判定结果。",
            "每块磁盘都会显示判定结果（“健康”、“需要留意”或“即将故障”）、状态、容量、温度、通电时间和 S.M.A.R.T. 详情。温度以 iPhone 或 iPad 上设置的单位显示。",
            "NAS 通过 SNMP 提供磁盘健康信息，只需用“设置 SNMP”设置一次；之后其页面还会显示存储空间、CPU、内存、网络端口和磁盘活动。Cam Hub 只读取这些信息，不会更改设备上的任何内容。"
          ]]
        ]],
        ["mix", "02", "LiveView Mix 墙", "将不同摄像头和录像机的通道放在同一面墙上，并按显示设备调整密度。", [
          ["为 LiveView Mix 选择摄像头", [
            "在 LiveView Mix 标签页中点击“选择摄像头”，或进入“设置”→“LiveView Mix”。",
            "在每个设备区域中选择通道。每个通道可分别使用 SD 或 HD，“全部 SD”和“全部 HD”会一次调整当前选择的所有通道。",
            "该标签页显示可滚动的预览，列数和行数可用预览下方的“排列”设置。点击“全屏”即可按所选布局查看整面墙。"
          ]],
          ["17 种布局，或自行绘制", [
            "等分网格包括 2×2、2×3、3×3、3×4、4×4、5×4、6×4、5×5、7×4、6×5、6×6 与 7×7。",
            "主画面布局包括 1+3、1+5、1+7、1+21 与 1+27；第一个摄像头会放在最大的主画面中。",
            "使用“绘制自定义布局”可选择 2 到 8 行与列，在单元格上拖动即可合并成更大的图块，让重要的摄像头占据大图块。超过 16 个图块的布局更适合在 iPad 或 Apple TV 上查看。"
          ]],
          ["排列墙面", [
            "在 LiveView Mix 标签页中打开“调整布局”→“排列墙面”。画布会按实际效果显示每个墙页。",
            "将一个图块拖到另一个图块上即可交换位置，拖到空图块上则会移到那里。任何图块都可以放入内容，无需先填满前面的图块。",
            "点击空图块，可在其中放入摄像头、把其他图块移进来（也可来自其他墙页），或放入图片、控制面板、时钟或标签。"
          ]],
          ["竖向页面与两张画布", [
            "在“设置”中开启“竖向页面”，即可为竖持手机时另设一面墙，拥有独立的摄像头、布局、控制面板和水印。在 iPad 上，屏幕高大于宽时会显示竖向页面。",
            "设备转动时，标签页和全屏墙会在横向页面与竖向页面之间切换。未开启竖向页面时，竖持手机会把横向墙转过来显示。",
            "控制面板、时钟、标签和图片可以从一个页面复制到另一个页面，无需重新制作。",
            "在 iPhone Duo 上开启“两张画布”后，手机半折叠时，LiveView Mix 会在铰链处分成上方画布和下方画布，各有自己的摄像头和控制面板。"
          ]],
          ["三种黑边处理方式", [
            "默认会完整显示画面；比例不同时会出现黑边。",
            "放大填满会按比例放大画面直到填满格子，超出格子边缘的部分会被裁掉。",
            "拉伸填满不裁切并填满整个格子，但可能让画面变宽或压缩。“设置”→“黑边”决定设备画面的初始方式；每面 LiveView Mix 墙则在“调整布局”中有自己的“这面墙的黑边”。",
            "“设置”→“画面铺满屏幕”（默认开启）可让全屏视频延伸到灵动岛区域和屏幕圆角；关闭后，画面会避开这些区域。"
          ]],
          ["自定义水印", [
            "打开“水印”，开启“显示水印”，再选择设备名称、摄像头名称或 IP 地址。",
            "可调整位置、透明度、颜色、文字大小，并选择系统、圆体、等宽或衬线字体。",
            "可读性样式包括阴影、描边、背景或无效果。请同时查看明亮与昏暗预览，确认日间和夜间画面都能清楚阅读。"
          ]],
          ["图片、时钟、标签与控制按钮", [
            "在“排列墙面”中点击一个空图块，选择“图片、控制面板、时钟或标签…”，再在“显示”下选择“空白”、“图片”、“控制”、“时钟”或“标签”。",
            "“图片”可使用现有照片或新拍照片；“时钟”可显示日期、秒数及 12／24 小时制；“标签”支持自定义文字、SF Symbol 与颜色。",
            "“控制”可建立 HTTP Webhook 按钮，并提供大门、车库、灯光、门锁、窗帘、场景、警报、风扇、插座、空调及自定义模板。开门或解锁等敏感操作可要求再次确认。",
            "受支持的图片和格子设置可随加密备份迁移。所有 Webhook 端点都由您建立并负责保护。"
          ]]
        ]],
        ["viewing", "03", "实时查看与录像回放", "单画面可优先保证清晰度与操作体验，多画面可优先降低设备负载与带宽。", [
          ["单画面与多画面画质", [
            "进入“设置”→“默认画质”，分别为“单个摄像头”和“多个摄像头”设置 HD 或 SD。这两个默认值仅适用于设备画面：设备页与“实时”墙、设备全屏墙，以及从设备打开的单个摄像头。",
            "设备支持主码流与子码流切换时，单通道控制栏会显示 SD 与 HD 选项。",
            "LiveView Mix 不使用上述默认值：多画面按各通道在列表中指定的画质播放，可逐通道设置，也可套用“全部 SD”或“全部 HD”。同时播放许多画面时，较低画质通常可降低网络和设备负载。",
            "在 LiveView Mix 中打开单个摄像头（全屏或放大）时，一律以 HD 显示；画面上的 SD/HD 按钮仅作临时切换，不会更改任何设置。"
          ]],
          ["缩放与横屏查看", [
            "在单通道画面中使用双指缩放；放大后拖动画面即可查看其他区域。",
            "双击可快速切换到 2.5 倍，再次双击会恢复完整画面。",
            "将设备转为横向后，导航、控制栏和标签栏会隐藏，让影像尽量使用完整屏幕。"
          ]],
          ["PTZ 控制与双向对讲", [
            "使用 PTZ 摄像头时，点击画面右下角的圆形按钮即可打开控制盘：按住箭头可转动摄像头，用加号和减号变焦，星形按钮则列出已保存的位置。",
            "摄像头支持时，使用“3D 定位”可点击画面上的某个位置，让摄像头转向该处；也可拖出一个框，直接放大该区域。",
            "带扬声器的单独摄像头可以对讲：像对讲机一样，按住“对讲”说话，松开即可收听。首次使用时，Cam Hub 会请求麦克风访问权限。"
          ]],
          ["快照与共享", [
            "点击单通道控制栏中的“快照”，向设备请求当前画面。",
            "收到图片后，Cam Hub 会打开预览；点击“共享”即可发送，或保存到“照片”。",
            "点击“快照”旁边的红色录制按钮，即可录下画面中显示的内容，实时画面或录像均可，最长 10 分钟。停止后，Cam Hub 会显示该片段，可直接共享或保存到“照片”。",
            "快照或片段可能包含人物、声音、地址、时间或其他敏感信息。发送前请检查其内容、接收对象及当地规定。"
          ]],
          ["日期、时间轴与录像类型", [
            "在通道画面下方选择日期。设备保存每日录像索引时，“录像日历”会标出有录像的日子。",
            "录像可在“连续录像”与“事件”之间切换。拖动或缩放时间轴，使中央游标到达需要的时间，也可直接从列表选择片段。",
            "回放时会显示“回放”与设备时间；点击“返回实时”可回到实时画面。部分设备会先下载片段，再使用系统播放器打开。"
          ]]
        ], "功能可用性提示：实时视频流、快照、<span class=\"keep-phrase\">主／子码流切换</span>、录像搜索、<span class=\"keep-phrase\">连续录像／事件分类</span>、时间轴定位与回放，均以摄像头或录像机实际返回的能力，以及登录设备账号获得的权限为准。"],
        ["backup", "04", "加密备份与摄像头共享", "iCloud 备份无需 PIN，还可以保留多份并分别命名；共享代码可以不加锁，也可以用六位数 PIN 或密码锁定。", [
          ["本机密码保护", [
            "设备添加后，密码会存入 Apple 钥匙串；设备名称、地址、端口、通道与 App 设置则保留在设备本地数据中。",
            "Cam Hub 只会在您要求连接、搜索录像、取得快照、备份或迁移时使用这些信息。",
            "“删除所有数据”会移除本机设备数据和已保存密码。若从未备份，移除 App 后相关设置也可能无法恢复。"
          ]],
          ["多份命名的 iCloud 备份", [
            "进入“设置”→“备份到 iCloud”，在页面顶部选择“我的备份”（用于 iPhone 和 iPad）或 Apple TV，可视需要输入名称，然后点击“立即备份”，无需设置 PIN。",
            "备份包含受支持的设备、登录信息、通道、LiveView Mix 与 App 设置。Cam Hub 会先加密，再存入您自己的私人 iCloud。",
            "每次新建的备份都会与之前的备份一起保留，最新的排在最上方；滑动即可重命名或删除。Apple TV 目标只保留一份。"
          ]],
          ["从 iCloud 恢复", [
            "打开“设置”→“从 iCloud 恢复”，在“选择备份”中选择一份备份，然后点击“恢复”；iPhone、iPad 与 Apple TV 均不要求 PIN 验证。",
            "请尽量使用相同 App 版本，并确认已登录保存该备份的 Apple 账户。旧版本备份可能需要重新建立后才会显示。",
            "恢复仍受当前套餐上限限制。完成后请按当前网络逐项检查设备地址、通道与 LiveView Mix。"
          ]],
          ["用 PIN 或密码共享摄像头", [
            "在“设置”的“共享摄像头”部分打开“导出摄像头”，勾选设备并生成加密共享代码。开启“包含 App 设置”会一并带上您的 LiveView Mix 页面和控制面板，由接收者决定是否使用。",
            "代码可以不加锁；开启“用 PIN 锁定”可使用六位数字，再开启“复杂加密”则改用至少 8 个字符的密码。导入代码的人必须输入该 PIN 或密码。",
            "导入内容包括设备与登录信息，并受目标设备当前套餐上限限制。请将 PIN 或密码与代码分开发送，且只交给可信任的对象；切勿发布到公开聊天、工单或网站。"
          ]]
        ]],
        ["preferences", "05", "显示、视频流与数据控制", "依网络与设备能力调整 App，并在重置时分别处理偏好、本机数据与 iCloud 备份。", [
          ["隐藏离线摄像头", [
            "开启“设置”→“隐藏离线摄像头”，可从“实时”标签页和实时墙中移除没有信号的摄像头。",
            "这些通道仍会以淡色保留在“设备”列表中，避免被误认为已经删除；信号恢复后也可重新出现。"
          ]],
          ["翻页时保持摄像头连接", [
            "进入“设置”→“LiveView Mix”，在“翻页”下找到“翻页时保持摄像头连接”；该选项对重新连接较慢的设备最有帮助。",
            "开启后，通道滚出画面仍会保持连接，返回时恢复较快；但会持续使用网络、电量与系统资源，不需要立即恢复时请保持关闭。"
          ]],
          ["选择启动时打开的画面", [
            "进入“设置”，在“LiveView Mix”部分找到“启动时打开”。",
            "“上次查看”会返回前一次选择；“LiveView Mix”会打开跨设备的墙；“LiveView Mix 全屏”会以全屏打开这面墙；选择单一设备则直接打开该设备。",
            "若指定设备已删除或 LiveView Mix 尚未设置，App 会返回可用画面，不会保留失效目的地。"
          ]],
          ["套餐与可显示摄像头", [
            "“设置”→“套餐”会显示当前摄像头套餐与 NVR 套餐及使用上限。",
            "尚未解锁全部通道时，可通过“选择要显示的摄像头”分配可用名额；完全解锁后无需使用该列表。",
            "购买与“恢复购买”以 Apple 提供的状态为准。套餐不会改变摄像头本身提供的协议、权限或回放能力。"
          ]],
          ["分别重置与删除", [
            "“恢复默认设置”会重置外观、语言、画质、LiveView Mix 与其他偏好，但保留已添加设备。",
            "“删除所有数据”会移除本机设备、摄像头与钥匙串密码，不影响 iCloud 备份或订阅。",
            "“删除 iCloud 备份”会移除所有加密云端备份（包括 Apple TV 那一份），不会改变当前设备上的设备与设置。如只想删除一份备份，请在备份列表中滑动该备份。",
            "执行无法撤销的删除前，请确认 iCloud 已同步，并且目标设备能够恢复该备份版本。"
          ]],
          ["联系开发团队", [
            "在 iPhone 和 iPad 上，“设置”的最后一行“联系开发团队”会新建一封电子邮件，用于反馈工作不正常的设备，或设备具备但 Cam Hub 尚未提供的功能。",
            "可以用您最习惯的语言撰写。请写明品牌、型号和固件版本，但切勿附上摄像头密码、共享代码或 PIN。"
          ]]
        ]],
        ["tv-control", "06", "Apple TV、Apple Watch 与 Webhook 控制", "将墙扩展到电视，加入连接到自有端点的 HTTP 控制按钮，还能在 Apple Watch 上按下这些按钮。", [
          ["在 Apple TV 上监看", [
            "tvOS App 提供 LiveView Mix、各设备实时墙、全屏单通道查看与录像时间轴，并针对 Siri Remote 焦点操作设计。",
            "高密度布局适合大屏幕；无需先离开当前画面，即可在墙上直接选择摄像头与 Webhook 按钮。",
            "实时视频流、回放、主／子码流选择及通道功能，仍取决于设备实际返回的能力、账号权限、编解码器与网络状况。"
          ]],
          ["从 iPhone 或 iPad 移转设置", [
            "在 iPhone 或 iPad 中打开“设置”→“备份到 iCloud”，选择 Apple TV 为目的地，建立专用加密备份，无需设置 PIN。",
            "在 Apple TV 登录同一 Apple 账户，打开“从 iCloud 恢复”并选择备份，即可直接恢复。",
            "Apple TV 只会恢复专用的 Apple TV 备份。完成后请按电视当前网络检查设备地址、通道与 LiveView Mix。"
          ]],
          ["建立 Webhook 控制面板", [
            "在 LiveView Mix 标签页中打开“调整布局”→“排列墙面”，点击一个空图块，并将“显示”设为“控制”。",
            "可选择大门、车库、灯光、门锁、窗帘、场景、警报、风扇、插座、空调或自定义模板。每个按钮可分别设置图标、标签与“执行前先确认”；面板也有自己的标题和颜色。",
            "每个按钮可向您指定的 HTTP 或 HTTPS 端点发送 GET、POST、PUT 或 DELETE，并可加入标头、Content-Type 与 JSON 正文。"
          ]],
          ["在墙上执行控制", [
            "在 iPhone 或 iPad 上点击按钮；在 Apple TV 上用遥控器移动焦点并按下执行。面板会在原位置显示发送中、成功或失败。",
            "开门、解锁、警报等难以撤销的操作应要求确认，并只开放完成该用途所需的最小端点权限。",
            "受支持的控制面板设置可随加密备份迁移。Webhook 端点、登录信息、网络存取与连接实体设备的安全仍由您负责。"
          ]],
          ["Apple Watch 上的按钮", [
            "Apple Watch 上的 Cam Hub 会按面板标题分组，列出配对的 iPhone 上所设置的控制面板按钮，点击一下即可执行。手表上不显示视频。",
            "iPhone 会持续更新这份列表，手表也会保存自己的副本，因此即使 iPhone 上的 App 未运行，也能打开列表。不在您套餐内的控制面板不会显示。"
          ]]
        ], "安全提示：Webhook 按钮会调用您指定的网络端点。Cam Hub 不会验证端点、存取控制、门锁、警报或其他实体设备的安全性。请限制端点权限、保护登录信息，并为难以撤销的操作要求确认。"]
      ],
      note: "Cam Hub 不会绕过设备存取控制。实际功能会因型号、固件、协议实现、账号权限、编解码器及网络状况而异。"
    },
    ko: {
      documentTitle: "Cam Hub — 기능 소개",
      topline: "기능 소개",
      eyebrow: "CAM HUB 기능 소개",
      title: '<span class="page-title-line">Cam Hub를 살펴보세요.</span><span class="page-title-line">기능별로 자세히.</span>',
      summary: "앱에 실제로 표시되는 메뉴와 제어 항목을 따라 기기, LiveView Mix, 녹화 재생, 전송, 설정 기능을 자세히 소개합니다.",
      wikiLabel: "기능 바로가기",
      wiki: [
        ["devices", "01", "기기와 채널", "먼저 기기를 연결한 다음 모니터링 화면에 표시할 채널을 선택합니다.", [
          ["연결 정보 준비", [
            "‘기기’를 열고 ‘기기 추가’를 탭하여 추가 화면으로 이동합니다.",
            "이름은 선택 사항입니다. IP 주소 또는 호스트 이름과 사용자 이름은 필수입니다. ‘고급’의 HTTP 포트 기본값은 80, RTSP 포트 기본값은 554이며, 기기가 다른 포트를 사용할 때만 변경합니다.",
            "비밀번호를 입력하고 ‘추가’를 탭합니다. 연결하는 동안 ‘기기에 연결 중…’이 표시되며, 연결에 실패하면 앱이 연결 오류, 인증 정보 오류, 지원하지 않는 기기 오류를 구분하여 안내하고 해당 주소에서 찾은 열린 포트도 함께 보여 줍니다.",
            "주소를 모를 때는 ‘도구’ 탭에서 ‘검색’을 탭합니다. Cam Hub가 네트워크에서 응답하는 카메라와 녹화기를 나열하고, 식별할 수 있는 기기에는 브랜드나 모델을 표시하며, ‘기기 추가’ 양식을 대신 채워 줍니다.",
            "제공되는 지역에서는 ‘기기 추가’로 YouTube 라이브 스트림이나 채널, Twitch 채널도 추가할 수 있습니다. 해당 서비스의 자체 플레이어로 카메라 옆에서 재생되며 요금제 한도에는 포함되지 않습니다.",
            "본인이 소유·관리하거나 명시적으로 사용 권한을 받은 기기와 계정에만 연결하세요."
          ]],
          ["자동 감지, ONVIF와 HTTPS", [
            "보통은 ‘고급’의 ‘연결 방식’을 ‘자동 감지’로 둡니다. Cam Hub가 응답하는 포트를 확인한 뒤 내장된 브랜드 프로토콜, ONVIF, 여러 브랜드의 RTSP 스트림 경로를 스스로 시도합니다.",
            "기기가 인식되지 않거나 특정 프로토콜을 사용하려면 검색 입력란이 있는 ‘연결 방식’ 목록에서 ONVIF, RTSP 또는 브랜드를 선택하고 다시 추가합니다.",
            "기기 설정에서 ONVIF와 RTSP를 활성화하고 시청 권한이 있는 ONVIF 계정을 만들어야 할 수 있습니다. 연결 관련 참고 사항은 ‘호환성 참고’에서 확인할 수 있습니다.",
            "웹 페이지가 HTTPS를 사용하는 기기는 ‘고급’에서 ‘HTTPS 사용’을 켭니다. Cam Hub는 기기가 제시하는 인증서를 신뢰하며 이후에는 다른 인증서로 연결하지 않습니다(공인 인증 기관에서 갱신한 인증서는 계속 사용할 수 있습니다). 이미 추가한 기기는 기기 페이지에서 HTTPS로 전환합니다."
          ]],
          ["카메라 채널 정리", [
            "기기를 추가한 뒤 ‘기기’에서 해당 기기를 탭하면 기기 페이지가 열립니다. ‘카메라’에는 그 기기가 보고한 채널이 표시됩니다.",
            "보려는 채널은 켜고 사용하지 않는 채널은 끕니다. 녹화기 채널은 타일만 숨기는 대신 ‘영상 일시정지’로 스트리밍 자체를 중지할 수도 있습니다.",
            "오프라인 채널은 흐리게 표시된 상태로 ‘기기’ 목록에 남습니다. ‘오프라인 카메라 숨기기’를 켜면 실시간 비디오 월에는 나타나지 않습니다."
          ]],
          ["기기 정보 확인 및 갱신", [
            "기기 페이지 맨 위의 정보 카드에 모델, 주소, 포트, 일련번호, 펌웨어, 채널 수가 표시되며, 옆의 화살표로 세부 정보를 숨기거나 표시할 수 있습니다.",
            "오른쪽 위의 연필 버튼으로 기기 이름을 바꾸고, ‘인증 정보 편집’으로 사용자 이름과 비밀번호를 변경하며(카메라와 비디오 월에서의 위치는 그대로 유지됩니다), HTTPS를 켜거나 끌 수 있습니다. 아래로 당기면 채널 목록을 새로 고칩니다.",
            "검은 여백 버튼은 현재 화면에서만 ‘기본값’, ‘확대해 채우기’, ‘늘려 채우기’를 차례로 전환합니다. ‘전체 화면 비디오 월’ 버튼은 해당 기기의 채널 비디오 월을 엽니다."
          ]],
          ["디스크 상태", [
            "디스크 정보를 보고하는 녹화기와 NAS는 기기 페이지에 ‘디스크 상태’ 행이 표시됩니다. 행의 주황색이나 빨간색 기호는 마지막으로 읽은 결과에서 가장 나쁜 디스크 판정을 나타냅니다.",
            "디스크마다 판정(‘정상’, ‘확인 필요’, ‘고장 임박’), 상태, 용량, 온도, 가동 시간과 S.M.A.R.T. 세부 정보가 표시됩니다. 온도는 iPhone 또는 iPad에 설정된 단위로 표시됩니다.",
            "NAS는 SNMP로 디스크 상태를 제공하며, ‘SNMP 설정하기’로 한 번만 설정하면 됩니다. 이후 페이지에 볼륨, CPU, 메모리, 네트워크 포트, 디스크 활동도 표시됩니다. Cam Hub는 이 정보를 읽기만 하며 기기에서 아무것도 변경하지 않습니다."
          ]]
        ]],
        ["mix", "02", "LiveView Mix 비디오 월", "서로 다른 카메라와 녹화기의 채널을 한 화면에 배치하고 사용하는 디스플레이에 맞게 밀도를 조절합니다.", [
          ["LiveView Mix에 카메라 선택", [
            "‘LiveView Mix’ 탭에서 ‘카메라 선택’을 탭하거나 ‘설정’ → ‘LiveView Mix’로 이동합니다.",
            "기기별 영역에서 채널을 선택합니다. 각 채널은 SD 또는 HD를 따로 지정할 수 있고, ‘전체 SD’와 ‘전체 HD’는 선택된 전체 채널에 같은 화질을 적용합니다.",
            "탭에는 스크롤 가능한 미리보기가 표시되며, 그 아래의 ‘배열’로 열과 행 수를 정할 수 있습니다. ‘전체 화면’을 탭하면 선택한 레이아웃으로 비디오 월을 볼 수 있습니다."
          ]],
          ["17가지 레이아웃 또는 직접 그리기", [
            "균등 격자는 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6, 7×7을 제공합니다.",
            "주 화면 레이아웃은 1+3, 1+5, 1+7, 1+21, 1+27이며 첫 번째 카메라가 가장 큰 주 타일에 배치됩니다.",
            "‘사용자 지정 레이아웃 그리기’에서 행과 열을 각각 2~8개로 정하고 칸을 가로질러 드래그하면 더 큰 타일로 합쳐지므로, 중요한 카메라에 큰 타일을 줄 수 있습니다. 타일이 16개를 넘는 레이아웃은 iPad나 Apple TV에서 보기에 가장 좋습니다."
          ]],
          ["비디오 월 배치", [
            "‘LiveView Mix’ 탭에서 ‘레이아웃 조정’ → ‘비디오 월 배치’를 엽니다. 캔버스에는 각 비디오 월 페이지가 실제 모습대로 표시됩니다.",
            "타일을 다른 타일로 끌면 서로 위치가 바뀌고, 빈 타일로 끌면 그곳으로 이동합니다. 어느 타일이든 채울 수 있으며 앞쪽 타일을 먼저 채울 필요가 없습니다.",
            "빈 타일을 탭하면 그 자리에 카메라를 넣거나, 다른 타일을 옮겨 오거나(다른 비디오 월 페이지에서도 가능), 이미지, 제어 패널, 시계, 레이블로 채울 수 있습니다."
          ]],
          ["세로 페이지와 두 캔버스", [
            "‘설정’에서 ‘세로 페이지’를 켜면 iPhone을 세로로 들었을 때 표시되는 두 번째 비디오 월이 생기며, 카메라, 레이아웃, 패널, 워터마크를 따로 설정할 수 있습니다. iPad에서는 화면이 가로보다 세로로 길 때 표시됩니다.",
            "기기를 돌리면 탭과 전체 화면 비디오 월이 가로 페이지와 세로 페이지 사이에서 전환됩니다. 세로 페이지가 꺼져 있으면 iPhone을 세로로 들었을 때 가로 비디오 월이 옆으로 돌아간 상태로 표시됩니다.",
            "제어 패널, 시계, 레이블, 이미지는 다시 만들 필요 없이 한 페이지에서 다른 페이지로 복사할 수 있습니다.",
            "iPhone Duo에서 ‘캔버스 2개’를 켜면 반쯤 접었을 때 LiveView Mix가 힌지를 기준으로 위쪽과 아래쪽 캔버스로 나뉘며, 각 캔버스에 별도의 카메라와 제어 패널을 둘 수 있습니다."
          ]],
          ["세 가지 화면 채우기 방식", [
            "‘기본값’은 전체 영상을 유지하고 화면 비율이 다르면 검은 여백을 추가합니다.",
            "‘확대해 채우기’는 비율을 유지한 채 타일을 채우도록 확대하고 바깥쪽 가장자리를 잘라냅니다.",
            "‘늘려 채우기’는 자르지 않고 타일 전체를 채우지만 영상이 넓어지거나 눌려 보일 수 있습니다. ‘설정’ → ‘검은 여백’은 기기 화면의 시작 방식을 정하며, 각 LiveView Mix 비디오 월은 ‘레이아웃 조정’에 자체 ‘이 비디오 월의 검은 여백’ 설정이 있습니다.",
            "‘설정’ → ‘영상을 가장자리까지 표시’(기본적으로 켜짐)를 사용하면 전체 화면 영상이 Dynamic Island 영역과 둥근 모서리까지 확장됩니다. 끄면 영상이 이 영역을 피해 표시됩니다."
          ]],
          ["사용자 지정 워터마크", [
            "‘워터마크’를 열고 ‘워터마크 표시’를 켠 뒤 기기 이름, 카메라 이름, IP 주소 중 하나를 선택합니다.",
            "위치, 불투명도, 색상, 글자 크기를 조절하고 시스템, 둥근 글꼴, 고정폭, 세리프 글꼴을 선택할 수 있습니다.",
            "‘가독성’에서는 그림자, 외곽선, 배경, 없음 중에서 선택합니다. 밝고 어두운 미리보기에서 낮과 밤 영상 모두 읽기 쉬운지 확인하세요."
          ]],
          ["사진, 시계, 라벨과 제어 버튼", [
            "‘비디오 월 배치’에서 빈 타일을 탭하고 ‘이미지, 제어 패널, 시계 또는 레이블…’을 선택한 뒤 ‘표시 내용’에서 ‘빈 슬롯’, ‘이미지’, ‘제어’, ‘시계’, ‘레이블’ 중 하나를 고릅니다.",
            "‘이미지’는 기존 사진이나 새로 촬영한 사진을 사용할 수 있습니다. ‘시계’는 날짜, 초, 12시간제 또는 24시간제를 표시하며, ‘레이블’은 사용자 지정 문자, SF Symbol, 색상을 지원합니다.",
            "‘제어’는 대문·셔터, 차고문, 조명, 도어록, 커튼·블라인드, 장면·자동화, 경보기·사이렌, 선풍기, 스마트 플러그, 에어컨 및 사용자 지정 템플릿으로 HTTP 웹훅 버튼을 만듭니다. 열기나 잠금 해제 같은 민감한 동작은 확인을 요구할 수 있습니다.",
            "지원되는 이미지와 슬롯 설정은 암호화 백업으로 이동할 수 있습니다. 모든 웹훅 엔드포인트의 생성과 보안은 사용자가 책임져야 합니다."
          ]]
        ]],
        ["viewing", "03", "실시간 보기와 녹화 재생", "단일 카메라 화면은 선명도와 조작을, 다중 화면은 기기 부하와 대역폭을 우선하도록 설정할 수 있습니다.", [
          ["단일·다중 카메라 화질", [
            "‘설정’ → ‘기본 화질’에서 ‘단일 카메라’와 ‘여러 카메라’의 HD 또는 SD 기본값을 각각 지정합니다. 이 기본값은 기기 화면에만 적용됩니다: 기기 페이지와 실시간 비디오 월, 기기 전체 화면 비디오 월, 기기에서 연 단일 카메라.",
            "기기가 주 스트림과 보조 스트림 전환을 지원하면 단일 채널 제어 막대에 SD와 HD 선택 항목이 표시됩니다.",
            "LiveView Mix에는 이 기본값이 적용되지 않습니다. 다중 화면은 채널 목록에서 채널마다 지정한 화질로 재생되며, 하나씩 지정하거나 ‘전체 SD’ 또는 ‘전체 HD’를 적용할 수 있습니다. 여러 타일을 동시에 재생할 때 낮은 화질은 네트워크와 기기 부하를 줄이는 데 도움이 됩니다.",
            "LiveView Mix에서 카메라 하나를 열면(전체 화면 또는 확대) 항상 HD로 표시됩니다. 화면의 SD/HD 버튼은 그때만 전환되며 설정은 바뀌지 않습니다."
          ]],
          ["확대와 가로 화면", [
            "단일 채널 화면에서 손가락을 벌려 확대하고, 확대된 영상을 끌어 다른 영역을 확인합니다.",
            "두 번 탭하면 2.5배로 빠르게 확대되고 다시 두 번 탭하면 전체 영상으로 돌아갑니다.",
            "기기를 가로로 돌리면 탐색, 제어 막대와 탭 막대가 숨겨져 영상이 가능한 한 넓은 화면을 사용합니다."
          ]],
          ["PTZ 제어와 양방향 대화", [
            "PTZ 카메라에서는 영상 오른쪽 아래의 원형 버튼을 탭해 패드를 엽니다. 화살표를 길게 누르면 카메라가 회전하고, 더하기와 빼기 버튼으로 줌을 조절하며, 별 버튼으로 저장된 위치를 불러옵니다.",
            "카메라가 지원하는 경우 ‘3D 위치 지정’을 사용하면 한 지점을 탭해 카메라를 그쪽으로 돌리거나, 사각형을 그려 그 영역을 바로 확대할 수 있습니다.",
            "스피커가 있는 독립형 카메라에서는 ‘대화’를 누르고 있는 동안 말하고 손을 떼면 들을 수 있어 무전기처럼 사용할 수 있습니다. 처음 사용할 때 Cam Hub가 마이크 접근 권한을 요청합니다."
          ]],
          ["스냅샷과 공유", [
            "단일 채널 제어 막대에서 ‘스냅샷’을 눌러 기기에 현재 이미지를 요청합니다.",
            "이미지가 도착하면 Cam Hub가 미리보기를 엽니다. ‘공유’를 탭하여 보내거나 사진 보관함에 저장합니다.",
            "‘스냅샷’ 옆의 빨간색 녹화 버튼을 누르면 화면에 보이는 내용을 실시간 영상이든 녹화 영상이든 최대 10분까지 녹화합니다. 녹화를 멈추면 Cam Hub가 클립을 보여 주므로 공유하거나 사진 보관함에 저장할 수 있습니다.",
            "스냅샷이나 클립에는 사람, 목소리, 주소, 시간이나 그 밖의 민감한 정보가 포함될 수 있습니다. 보내기 전에 내용, 수신자와 현지 규정을 확인하세요."
          ]],
          ["날짜, 타임라인과 녹화 유형", [
            "채널 화면 아래에서 날짜를 선택합니다. 일별 녹화 색인을 유지하는 기기에서는 ‘녹화 캘린더’에 영상이 있는 날짜가 표시됩니다.",
            "녹화는 ‘연속 녹화’와 ‘이벤트’ 사이에서 전환할 수 있습니다. 중앙 커서가 원하는 시간에 오도록 타임라인을 끌거나 확대하고, 목록에서 구간을 직접 선택할 수도 있습니다.",
            "재생 중에는 ‘재생’ 배지에 기기 시간이 표시됩니다. ‘실시간으로 돌아가기’를 눌러 실시간 스트림으로 복귀합니다. 일부 기기는 클립을 먼저 내려받은 뒤 시스템 플레이어에서 엽니다."
          ]]
        ], "기능 제공 안내: 실시간 스트리밍, 스냅샷, <span class=\"keep-phrase\">주/보조 스트림 선택</span>, 녹화 검색, <span class=\"keep-phrase\">연속 녹화/이벤트 분류</span>, 타임라인 탐색과 재생은 카메라 또는 녹화기가 실제로 제공하는 기능과 로그인한 기기 계정의 권한에 따라 달라집니다."],
        ["backup", "04", "암호화 백업과 카메라 공유", "iCloud 백업에는 PIN이 필요 없으며 이름을 붙인 백업을 여러 개 보관할 수 있습니다. 공유 코드는 잠그지 않고 두거나 6자리 PIN 또는 비밀번호로 잠글 수 있습니다.", [
          ["기기 내 비밀번호 보호", [
            "기기를 추가하면 비밀번호는 Apple 키체인에 저장되고 기기 이름, 주소, 포트, 채널과 앱 설정은 이 iPhone이나 iPad의 데이터에 남습니다.",
            "Cam Hub는 사용자가 요청한 연결, 녹화 검색, 스냅샷, 백업과 전송에만 이 정보를 사용합니다.",
            "‘모든 데이터 삭제’는 로컬 기기 데이터와 저장된 비밀번호를 제거합니다. 백업하지 않은 설정은 앱을 삭제한 뒤 복구할 수 없을 수 있습니다."
          ]],
          ["이름을 붙인 여러 iCloud 백업", [
            "‘설정’ → ‘iCloud에 백업’으로 이동하여 페이지 위쪽에서 ‘내 백업’(iPhone 및 iPad용) 또는 Apple TV를 선택하고, 원하면 이름을 입력한 뒤 ‘지금 백업’을 탭합니다. PIN은 필요하지 않습니다.",
            "백업에는 지원되는 기기, 인증 정보, 채널, LiveView Mix와 앱 설정이 포함됩니다. Cam Hub는 이를 암호화한 뒤 사용자의 개인 iCloud에 저장합니다.",
            "새 백업은 이전 백업과 함께 최신순으로 보관되며, 쓸어넘겨 이름을 변경하거나 삭제할 수 있습니다. Apple TV 대상에는 사본 하나만 보관됩니다."
          ]],
          ["iCloud에서 복원", [
            "‘설정’ → ‘iCloud에서 복원’을 열고 ‘백업 선택’에서 백업을 고른 뒤 ‘복원’을 탭합니다. iPhone, iPad와 Apple TV 모두 PIN 확인을 요구하지 않습니다.",
            "가능하면 같은 앱 버전을 사용하고 백업을 보유한 Apple 계정으로 로그인했는지 확인하세요. 오래된 버전의 백업은 다시 생성해야 표시될 수 있습니다.",
            "복원에는 현재 요금제 한도가 적용됩니다. 완료 후 현재 네트워크에 맞게 각 기기 주소, 채널과 LiveView Mix를 확인하세요."
          ]],
          ["PIN 또는 비밀번호로 카메라 공유", [
            "‘설정’의 ‘카메라 공유’ 섹션에서 ‘카메라 내보내기’를 열고 기기를 선택한 뒤 암호화된 공유 코드를 만듭니다. ‘앱 설정 포함’을 켜면 LiveView Mix 페이지와 제어 패널도 함께 담기며, 사용 여부는 받는 사람이 결정합니다.",
            "코드를 잠그지 않고 둘 수도 있고, ‘PIN으로 잠금’을 켜서 6자리 숫자로 잠그거나, ‘복잡한 암호화’도 켜서 8자 이상의 비밀번호로 잠글 수 있습니다. 코드를 가져오는 사람은 해당 PIN이나 비밀번호를 입력해야 합니다.",
            "가져오기에는 기기와 인증 정보가 포함되며 받는 쪽의 요금제 한도가 적용됩니다. PIN이나 비밀번호는 코드와 따로, 신뢰할 수 있는 사람에게만 보내고 공개 채팅, 지원 티켓이나 웹사이트에 게시하지 마세요."
          ]]
        ]],
        ["preferences", "05", "표시, 스트리밍과 데이터 제어", "네트워크와 기기에 맞게 앱을 조정하고 초기화할 때 환경설정, 로컬 데이터, iCloud 백업을 각각 관리합니다.", [
          ["오프라인 카메라 숨기기", [
            "‘설정’ → ‘오프라인 카메라 숨기기’를 켜면 신호가 없는 카메라가 ‘실시간’과 비디오 월에서 제외됩니다.",
            "삭제된 카메라로 오인하지 않도록 ‘기기’ 채널 목록에는 흐리게 남아 있으며 신호가 돌아오면 다시 표시될 수 있습니다."
          ]],
          ["페이지를 넘겨도 연결 유지", [
            "‘설정’ → ‘LiveView Mix’로 이동하여 ‘페이지 넘김’ 아래의 ‘페이지를 넘겨도 연결 유지’를 찾습니다. 다시 연결하는 데 시간이 더 걸리는 기기에서 특히 유용합니다.",
            "켜면 스크롤로 화면을 벗어나도 채널 연결을 유지해 돌아왔을 때 더 빨리 재생합니다. 네트워크, 전력과 시스템 자원을 계속 사용하므로 즉시 재생할 필요가 없다면 끄세요."
          ]],
          ["실행 시 열 화면 선택", [
            "‘설정’ → ‘LiveView Mix’ → ‘실행 시 열기’로 이동합니다.",
            "‘마지막으로 본 항목’은 이전 선택으로 돌아가고, ‘LiveView Mix’는 기기 통합 비디오 월을, ‘LiveView Mix 전체 화면’은 그 비디오 월을 전체 화면으로 열며, 개별 기기 항목은 해당 기기를 엽니다.",
            "선택한 기기가 삭제되었거나 LiveView Mix가 설정되지 않았다면 앱은 잘못된 위치를 유지하지 않고 사용할 수 있는 화면으로 돌아갑니다."
          ]],
          ["요금제와 표시 카메라", [
            "‘설정’ → ‘요금제’에서 현재 카메라 및 녹화기 요금제와 사용 한도를 확인합니다.",
            "모든 채널이 잠금 해제되지 않았을 때는 ‘표시할 카메라 선택’으로 사용 가능한 자리를 배정합니다. 완전히 잠금 해제한 뒤에는 이 목록이 필요하지 않습니다.",
            "구매와 ‘구매 복원’은 Apple이 제공하는 상태를 따릅니다. 요금제는 카메라 자체가 제공하는 프로토콜, 권한이나 재생 기능을 바꾸지 않습니다."
          ]],
          ["항목별 초기화와 삭제", [
            "‘기본 설정 복원’은 추가한 기기를 유지한 채 언어, 화질, LiveView Mix와 기타 환경설정을 초기화합니다.",
            "‘모든 데이터 삭제’는 로컬 기기, 카메라와 키체인 비밀번호를 제거하며 iCloud 백업이나 구독에는 영향을 주지 않습니다.",
            "‘iCloud 백업 삭제’는 Apple TV 사본을 포함한 모든 암호화 클라우드 백업을 제거하며, 이 iPhone이나 iPad에 등록된 기기와 설정은 바꾸지 않습니다. 백업 하나만 삭제하려면 대신 백업 목록에서 해당 백업을 쓸어넘깁니다.",
            "되돌릴 수 없는 삭제 전에 iCloud 동기화 여부와 대상 기기에서 해당 백업 버전을 복원할 수 있는지 확인하세요."
          ]],
          ["개발팀에 문의", [
            "iPhone과 iPad에서 ‘설정’의 마지막 행인 ‘개발팀에 문의하기’를 탭하면 제대로 작동하지 않는 기기나 Cam Hub가 아직 제공하지 않는 기기 기능에 관한 이메일을 작성할 수 있습니다.",
            "편한 언어로 작성하세요. 브랜드, 모델, 펌웨어 버전은 포함하되 카메라 비밀번호, 공유 코드, PIN은 절대 넣지 마세요."
          ]]
        ]],
        ["tv-control", "06", "Apple TV, Apple Watch와 웹훅 제어", "비디오 월을 TV로 확장하고, 직접 관리하는 엔드포인트에 연결되는 HTTP 제어 버튼을 추가하여 Apple Watch에서도 누를 수 있습니다.", [
          ["Apple TV에서 모니터링", [
            "tvOS 앱은 LiveView Mix, 기기별 비디오 월, 전체 화면 단일 카메라 보기와 녹화 타임라인을 제공하며 Siri Remote의 포커스 탐색에 맞게 설계되었습니다.",
            "고밀도 레이아웃은 큰 화면에 적합합니다. 현재 화면을 먼저 벗어나지 않아도 비디오 월에서 카메라와 웹훅 버튼을 직접 선택할 수 있습니다.",
            "실시간 스트리밍, 재생, 주/보조 스트림 선택과 채널 기능은 기기가 제공하는 기능, 계정 권한, 코덱과 네트워크 상태에 따라 달라집니다."
          ]],
          ["iPhone 또는 iPad에서 설정 전송", [
            "iPhone 또는 iPad에서 ‘설정’ → ‘iCloud에 백업’을 열고 Apple TV를 대상으로 선택한 뒤 PIN 설정 없이 전용 암호화 백업을 만듭니다.",
            "Apple TV에서 같은 Apple 계정으로 로그인하고 ‘iCloud에서 복원’을 연 다음 백업을 선택해 바로 복원합니다.",
            "Apple TV는 Apple TV 전용 백업만 복원합니다. 완료 후 TV가 연결된 현재 네트워크에 맞게 기기 주소, 채널과 LiveView Mix를 확인하세요."
          ]],
          ["웹훅 제어 패널 만들기", [
            "‘LiveView Mix’ 탭에서 ‘레이아웃 조정’ → ‘비디오 월 배치’를 열고 빈 타일을 탭한 뒤 ‘표시 내용’을 ‘제어’로 설정합니다.",
            "대문·셔터, 차고문, 조명, 도어록, 커튼·블라인드, 장면·자동화, 경보기·사이렌, 선풍기, 스마트 플러그, 에어컨 또는 사용자 지정 템플릿을 선택합니다. 각 버튼에는 아이콘, 레이블, ‘실행 전 확인’ 설정을 따로 지정할 수 있고, 패널에는 자체 제목과 색상이 있습니다.",
            "각 버튼은 사용자가 지정한 HTTP 또는 HTTPS 엔드포인트로 GET, POST, PUT, DELETE 요청을 보내며 선택적으로 헤더, Content-Type과 JSON 본문을 포함할 수 있습니다."
          ]],
          ["비디오 월에서 제어 실행", [
            "iPhone 또는 iPad에서는 버튼을 탭하고, Apple TV에서는 리모컨으로 포커스를 이동한 뒤 눌러 실행합니다. 패널은 그 자리에서 전송 중, 성공 또는 실패 상태를 보여 줍니다.",
            "열기, 잠금 해제, 경보처럼 되돌리기 어려운 동작에는 확인을 사용하고 필요한 작업만 수행하도록 권한이 좁게 제한된 엔드포인트를 사용하세요.",
            "지원되는 제어 패널 설정은 암호화 백업으로 이동할 수 있습니다. 웹훅 엔드포인트, 인증 정보, 네트워크 접근과 연결된 물리 장비의 안전은 사용자의 책임입니다."
          ]],
          ["Apple Watch의 버튼", [
            "Apple Watch의 Cam Hub는 페어링된 iPhone에 설정된 제어 패널의 버튼을 패널 제목별로 묶어 나열하며, 탭하면 해당 버튼이 실행됩니다. 영상은 표시하지 않습니다.",
            "iPhone이 목록을 최신 상태로 유지하고 Apple Watch는 자체 사본을 보관하므로 iPhone 앱이 실행 중이 아닐 때도 목록이 열립니다. 요금제에 포함되지 않은 패널은 나타나지 않습니다."
          ]]
        ], "보안 안내: 웹훅 버튼은 사용자가 지정한 네트워크 엔드포인트를 호출합니다. Cam Hub는 엔드포인트, 접근 제어, 잠금장치, 경보 또는 다른 물리 장비의 보안을 검증하지 않습니다. 엔드포인트 권한을 제한하고 인증 정보를 보호하며 되돌리기 어려운 동작에는 확인을 요구하세요."]
      ],
      note: "Cam Hub는 기기의 접근 제어를 우회하지 않습니다. 기능은 모델, 펌웨어, 프로토콜 구현, 계정 권한, 코덱과 네트워크 상태에 따라 달라집니다."
    },
    de: {
      documentTitle: "Cam Hub — Funktionen",
      topline: "Funktionen",
      eyebrow: "CAM HUB FUNKTIONEN",
      title: '<span class="page-title-line">Cam Hub entdecken.</span><span class="page-title-line">Funktion für Funktion.</span>',
      summary: "Die Erläuterungen folgen den Menüs und Bedienelementen der App und behandeln Geräte, LiveView Mix, Wiedergabe, Übertragung und Einstellungen im Detail.",
      wikiLabel: "Direkt zu einem Kapitel",
      wiki: [
        ["devices", "01", "Geräte und Kanäle", "Verbinden Sie zuerst das Gerät und legen Sie anschließend fest, welche Kanäle auf den Überwachungsansichten erscheinen.", [
          ["Verbindungsdaten vorbereiten", [
            "Öffnen Sie „Geräte“, tippen Sie auf „Gerät hinzufügen“ und wechseln Sie zum Bildschirm zum Hinzufügen eines Geräts.",
            "Der Name ist optional. IP-Adresse oder Hostname sowie Benutzername sind erforderlich. Unter „Erweitert“ ist der HTTP-Port standardmäßig 80 und der RTSP-Port 554; ändern Sie diese Werte nur, wenn das Gerät andere Ports verwendet.",
            "Geben Sie das Passwort ein und tippen Sie auf „Hinzufügen“. Die App zeigt „Verbindung zum Gerät wird hergestellt …“ an. Schlägt der Versuch fehl, unterscheidet sie zwischen Verbindungs-, Anmelde- und Kompatibilitätsfehlern und listet außerdem die offenen Ports auf, die sie unter der Adresse gefunden hat.",
            "Kennen Sie die Adresse nicht, tippen Sie im Tab „Werkzeuge“ auf „Scannen“: Cam Hub listet die Kameras und Recorder auf, die in Ihrem Netzwerk antworten, benennt die Geräte, die es identifizieren kann, und füllt das Formular „Gerät hinzufügen“ für Sie aus.",
            "Wo verfügbar, lassen sich über „Gerät hinzufügen“ auch ein YouTube-Livestream oder -Kanal sowie ein Twitch-Kanal hinzufügen. Der Stream läuft im eigenen Player des Dienstes neben Ihren Kameras und wird nie auf ein Abo angerechnet.",
            "Verbinden Sie ausschließlich Geräte und Konten, die Ihnen gehören, die Sie verwalten oder für deren Nutzung Sie ausdrücklich autorisiert sind."
          ]],
          ["Automatisch erkennen, ONVIF und HTTPS", [
            "Lassen Sie „Verbinden über“ (unter „Erweitert“) normalerweise auf „Automatisch erkennen“. Cam Hub prüft, welche Ports antworten, und probiert dann selbstständig die integrierten Herstellerprotokolle, ONVIF und die RTSP-Streampfade vieler Marken aus.",
            "Wird das Gerät nicht erkannt oder möchten Sie ein bestimmtes Protokoll verwenden, wählen Sie in der Liste „Verbinden über“, die ein Suchfeld bietet, ONVIF, RTSP oder die Marke und fügen Sie das Gerät erneut hinzu.",
            "Möglicherweise müssen Sie ONVIF und RTSP in den Geräteeinstellungen aktivieren und ein ONVIF-Konto mit Anzeigeberechtigung anlegen. Verbindungshinweise finden Sie in der Kompatibilitätsreferenz.",
            "Verwendet die Weboberfläche des Geräts HTTPS, schalten Sie unter „Erweitert“ die Option „HTTPS verwenden“ ein. Cam Hub vertraut dem Zertifikat, das das Gerät vorlegt, und verbindet sich später nicht mit einem anderen (ein erneuertes Zertifikat einer öffentlichen Zertifizierungsstelle funktioniert weiterhin). Ein bereits hinzugefügtes Gerät stellen Sie auf seiner Geräteseite auf HTTPS um."
          ]],
          ["Kamerakanäle organisieren", [
            "Tippen Sie nach dem Hinzufügen unter „Geräte“ auf das Gerät, um seine Seite zu öffnen. Unter „Kameras“ erscheinen die vom Gerät gemeldeten Kanäle.",
            "Aktivieren Sie benötigte und deaktivieren Sie ungenutzte Kanäle. Bei Recorder-Kanälen kann „Video pausieren“ das Streaming beenden, statt nur die Kachel auszublenden.",
            "Offline-Kanäle bleiben abgeblendet in der Geräteliste. Mit „Offline-Kameras ausblenden“ erscheinen sie nicht auf den Live-Überwachungswänden."
          ]],
          ["Gerät prüfen und aktualisieren", [
            "Die Infokarte oben auf der Geräteseite zeigt Modell, Adresse, Ports, Seriennummer, Firmware und Anzahl der Kanäle; der Pfeil daneben blendet die Details aus oder ein.",
            "Mit dem Stift oben rechts benennen Sie das Gerät um, ändern über „Anmeldedaten bearbeiten“ Benutzername und Passwort (seine Kameras und deren Plätze auf den Wänden bleiben erhalten) und schalten HTTPS ein oder aus. Ziehen Sie die Seite nach unten, um die Kanalliste zu aktualisieren.",
            "Die Taste für schwarze Balken schaltet nur für die aktuelle Ansicht zwischen „Standard“, „Bildfüllend vergrößern“ und „Bildfüllend strecken“ um. Die Taste „Vollbild-Wand“ öffnet die Kanalwand dieses Geräts."
          ]],
          ["Festplattenzustand", [
            "Recorder und NAS-Geräte, die ihre Festplatten melden, zeigen auf der Geräteseite die Zeile „Festplattenzustand“. Ein orangefarbenes oder rotes Symbol in der Zeile wiederholt die schlechteste Bewertung einer Festplatte bei der letzten Messung.",
            "Jede Festplatte zeigt eine Bewertung („In Ordnung“, „Aufmerksamkeit nötig“ oder „Ausfall droht“), ihren Status, Kapazität, Temperatur, Betriebsdauer und S.M.A.R.T.-Details. Temperaturen erscheinen in der Einheit, die auf Ihrem iPhone oder iPad eingestellt ist.",
            "Ein NAS stellt den Zustand seiner Festplatten über SNMP bereit, das Sie einmalig mit „SNMP einrichten“ konfigurieren; danach zeigt seine Seite auch Volumes, CPU, Arbeitsspeicher, Netzwerkanschlüsse und Festplattenaktivität. Cam Hub liest diese Informationen nur und verändert nichts am Gerät."
          ]]
        ]],
        ["mix", "02", "LiveView Mix Überwachungswand", "Ordnen Sie Kanäle verschiedener Kameras und Recorder auf einem Bildschirm an und passen Sie die Dichte an das verwendete Display an.", [
          ["Kameras für LiveView Mix auswählen", [
            "Tippen Sie im Tab „LiveView Mix“ auf „Kameras auswählen“ oder öffnen Sie „Einstellungen“ → „LiveView Mix“.",
            "Wählen Sie in jedem Geräteabschnitt die Kanäle aus. SD oder HD lässt sich pro Kanal festlegen; „Alle SD“ und „Alle HD“ wendet eine Qualität auf die gesamte Auswahl an.",
            "Der Tab zeigt eine scrollbare Vorschau, deren Spalten und Zeilen Sie darunter mit „Anordnung“ festlegen. Tippen Sie auf „Vollbild“, um die Wand im gewählten Layout zu sehen."
          ]],
          ["17 Layouts – oder selbst zeichnen", [
            "Gleichmäßige Raster: 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6 und 7×7.",
            "Fokuslayouts: 1+3, 1+5, 1+7, 1+21 und 1+27. Die erste Kamera belegt die größte Hauptkachel.",
            "Mit „Eigenes Layout zeichnen“ wählen Sie 2 bis 8 Zeilen und Spalten und ziehen über Zellen, um sie zu größeren Kacheln zusammenzufassen – so erhalten die wichtigen Kameras große Kacheln. Layouts mit mehr als 16 Kacheln kommen auf iPad oder Apple TV am besten zur Geltung."
          ]],
          ["Wand anordnen", [
            "Öffnen Sie vom Tab „LiveView Mix“ aus „Layout anpassen“ → „Wand anordnen“. Die Anordnungsfläche zeigt jede Wandseite so, wie sie später aussieht.",
            "Ziehen Sie eine Kachel auf eine andere, um beide zu tauschen, oder auf eine leere Kachel, um sie dorthin zu verschieben. Jede Kachel lässt sich belegen, ohne dass die Kacheln davor zuerst belegt sein müssen.",
            "Tippen Sie auf eine leere Kachel, um dort eine Kamera zu platzieren, eine andere Kachel hineinzuverschieben (auch von einer anderen Wandseite) oder sie mit einem Bild, einem Bedienfeld, einer Uhr oder einer Beschriftung zu füllen."
          ]],
          ["Hochformat-Seite und zwei Flächen", [
            "Schalten Sie in den Einstellungen „Hochformat-Seite“ ein, um eine zweite Wand zu erhalten, die erscheint, solange das Telefon hochkant gehalten wird – mit eigenen Kameras, eigenem Layout, eigenen Bedienfeldern und eigenem Wasserzeichen. Auf dem iPad erscheint sie, solange der Bildschirm höher als breit ist.",
            "Der Tab und die Vollbild-Wand wechseln beim Drehen des Geräts zwischen Querformat- und Hochformat-Seite. Solange die Hochformat-Seite ausgeschaltet ist, zeigt ein hochkant gehaltenes Telefon die Querformat-Wand seitlich gedreht.",
            "Bedienfelder, Uhren, Beschriftungen und Bilder lassen sich von einer Seite auf die andere kopieren, statt sie neu anzulegen.",
            "Auf dem iPhone Duo teilt „Zwei Flächen“ LiveView Mix am Scharnier in eine obere und eine untere Fläche, solange das Telefon halb zugeklappt ist – jede mit eigenen Kameras und Bedienfeldern."
          ]],
          ["Drei Bildfüllmethoden", [
            "„Standard“ zeigt das vollständige Bild und fügt bei abweichenden Seitenverhältnissen schwarze Balken hinzu.",
            "„Bildfüllend vergrößern“ erhält das Seitenverhältnis, vergrößert das Bild bis zur vollständigen Kachel und schneidet überstehende Ränder ab.",
            "„Bildfüllend strecken“ füllt die Kachel ohne Beschnitt, kann das Bild jedoch strecken oder stauchen. „Einstellungen“ → „Schwarze Balken“ legt den Ausgangsmodus für Geräteansichten fest; jede LiveView-Mix-Wand hat unter „Layout anpassen“ eine eigene Einstellung „Schwarze Balken auf dieser Wand“.",
            "Mit „Einstellungen“ → „Randloses Video“ (standardmäßig eingeschaltet) reicht Vollbildvideo bis in den Bereich der Dynamic Island und die abgerundeten Ecken; schalten Sie die Option aus, damit das Bild diese Bereiche frei lässt."
          ]],
          ["Eigene Wasserzeichen", [
            "Öffnen Sie „Wasserzeichen“, aktivieren Sie „Wasserzeichen anzeigen“ und wählen Sie Gerätename, Kameraname oder IP-Adresse.",
            "Passen Sie Position, Deckkraft, Farbe und Textgröße an und wählen Sie Standard-, abgerundete, nichtproportionale oder Serifenschrift.",
            "Für die Lesbarkeit stehen Schatten, Kontur, Hintergrund oder keine Hervorhebung zur Verfügung. Prüfen Sie in der hellen und dunklen Vorschau die Lesbarkeit bei Tag- und Nachtaufnahmen."
          ]],
          ["Bilder, Uhren, Beschriftungen und Bedienfelder", [
            "Tippen Sie in „Wand anordnen“ auf eine leere Kachel, wählen Sie „Bild, Bedienfeld, Uhr oder Beschriftung …“ und unter „Inhalt“ dann „Leer“, „Bild“, „Bedienfeld“, „Uhr“ oder „Beschriftung“.",
            "„Bild“ verwendet ein vorhandenes oder neu aufgenommenes Foto. „Uhr“ zeigt auf Wunsch Datum, Sekunden und 12-/24-Stunden-Zeit. „Beschriftung“ unterstützt eigenen Text, SF Symbols und Farben.",
            "„Bedienfeld“ erstellt HTTP-Webhook-Tasten aus den Vorlagen „Tor / Rollladen“, „Garagentor“, „Licht“, „Türschloss“, „Vorhang / Jalousie“, „Szene / Automation“, „Alarm / Sirene“, „Ventilator“, „Smarte Steckdose“, „Klimaanlage“ und „Eigene“. Für sensible Aktionen wie Öffnen oder Entriegeln kann eine Bestätigung verlangt werden.",
            "Unterstützte Bilder und Konfigurationen der Plätze können mit einem verschlüsselten Backup übertragen werden. Für Einrichtung und Schutz sämtlicher Webhook-Endpunkte bleiben Sie verantwortlich."
          ]]
        ]],
        ["viewing", "03", "Live-Ansicht und Aufzeichnungswiedergabe", "Die Einzelansicht kann Bildqualität und Bedienung priorisieren, während Mehrfachansichten Geräte- und Netzlast berücksichtigen.", [
          ["Qualität für Einzel- und Mehrfachansicht", [
            "Öffnen Sie „Einstellungen“ → „Standardqualität“ und legen Sie HD oder SD getrennt für „Einzelne Kamera“ und „Mehrere Kameras“ fest. Diese Standardwerte gelten nur für Geräteansichten: Gerätewand und Live-Wand, die Vollbild-Wand eines Geräts und eine vom Gerät aus geöffnete Einzelkamera.",
            "Wenn das Gerät den Wechsel zwischen Haupt- und Nebenstream meldet, zeigt die Steuerleiste eines Einzelkanals SD- und HD-Optionen.",
            "LiveView Mix verwendet diese Standardwerte nicht: Die Mehrfachansicht spielt jeden Kanal in der Qualität ab, die ihm in der Kanalliste zugewiesen ist – einzeln oder mit „Alle SD“ beziehungsweise „Alle HD“. Bei vielen gleichzeitigen Kacheln reduziert eine geringere Qualität häufig Netz- und Gerätelast.",
            "Wenn Sie in LiveView Mix eine einzelne Kamera öffnen (Vollbild oder Nahansicht), startet sie immer in HD. Die SD/HD-Taste auf dem Bildschirm wechselt nur für diese Ansicht und ändert keine Einstellung."
          ]],
          ["Zoomen und Querformat", [
            "Ziehen Sie die Finger in der Einzelansicht auseinander, um zu zoomen, und verschieben Sie anschließend das vergrößerte Bild.",
            "Doppeltippen wechselt direkt zu 2,5-facher Vergrößerung; erneutes Doppeltippen zeigt wieder das vollständige Bild.",
            "Drehen Sie das Gerät ins Querformat, um Navigation, Bedienelemente und Tableiste auszublenden und dem Video möglichst viel Fläche zu geben."
          ]],
          ["PTZ-Steuerung und Gegensprechen", [
            "Tippen Sie bei einer PTZ-Kamera auf die runde Taste unten rechts im Bild, um das Steuerfeld zu öffnen: Halten Sie einen Pfeil gedrückt, um die Kamera zu drehen, zoomen Sie mit Plus und Minus und rufen Sie mit dem Stern gespeicherte Positionen auf.",
            "Unterstützt die Kamera es, können Sie mit „3D-Positionierung“ auf eine Stelle tippen, damit sich die Kamera dorthin dreht, oder ein Rechteck aufziehen, um direkt in diesen Bereich zu zoomen.",
            "Bei einer eigenständigen Kamera mit Lautsprecher halten Sie „Sprechen“ gedrückt, um zu sprechen, und lassen los, um zuzuhören – wie bei einem Funkgerät. Beim ersten Mal fragt Cam Hub nach dem Zugriff auf das Mikrofon."
          ]],
          ["Schnappschüsse und Teilen", [
            "Tippen Sie in der Steuerleiste des Einzelkanals auf „Schnappschuss“, um das aktuelle Bild vom Gerät anzufordern.",
            "Nach Empfang öffnet Cam Hub eine Vorschau. Tippen Sie auf „Teilen“, um das Bild zu senden oder in Fotos zu sichern.",
            "Tippen Sie auf die rote Aufnahmetaste neben „Schnappschuss“, um aufzunehmen, was die Ansicht zeigt, live oder aus einer Aufnahme, bis zu 10 Minuten lang. Nach dem Beenden zeigt Cam Hub den Clip, sodass Sie ihn teilen oder in Fotos sichern können.",
            "Ein Schnappschuss oder Clip kann Personen, Stimmen, Adressen, Zeitstempel oder andere vertrauliche Informationen enthalten. Prüfen Sie Inhalt, Empfänger und örtliche Vorgaben vor dem Versand."
          ]],
          ["Datum, Zeitleiste und Aufnahmetypen", [
            "Wählen Sie unter der Kanalansicht ein Datum. Bei Geräten, die einen Tagesindex führen, markiert der „Aufnahmekalender“ die Tage mit Aufnahmen.",
            "Sie können zwischen „Daueraufnahme“ und „Ereignisse“ wechseln. Ziehen oder zoomen Sie die Zeitleiste bis zum gewünschten Zeitpunkt unter dem mittleren Cursor oder wählen Sie ein Segment aus der Liste.",
            "Bei der Wiedergabe erscheinen WIEDERGABE und die Gerätezeit. „Zurück zu Live“ öffnet wieder den Livestream. Manche Geräte laden zunächst einen Clip herunter und öffnen ihn anschließend im Systemplayer."
          ]]
        ], "Verfügbarkeitshinweis: Live-Streaming, Schnappschüsse, <span class=\"keep-phrase\">Haupt-/Nebenstream-Auswahl</span>, Aufnahmesuche, <span class=\"keep-phrase\">Daueraufnahme-/Ereignis-Klassifizierung</span>, Zeitleistennavigation und Wiedergabe hängen von den tatsächlich gemeldeten Gerätefunktionen und den Berechtigungen des angemeldeten Gerätekontos ab."],
        ["backup", "04", "Verschlüsseltes Backup und Kamerafreigabe", "iCloud-Backups benötigen keine PIN, und Sie können mehrere benannte Backups behalten. Ein Freigabecode kann offen bleiben oder mit einer sechsstelligen PIN oder einem Passwort gesperrt werden.", [
          ["Lokaler Passwortschutz", [
            "Nach dem Hinzufügen wird das Gerätepasswort im Apple-Schlüsselbund gespeichert. Name, Adresse, Ports, Kanäle und App-Einstellungen bleiben in den Gerätedaten.",
            "Cam Hub verwendet diese Angaben nur für von Ihnen angeforderte Verbindungen, Aufnahmesuchen, Schnappschüsse, Backups und Übertragungen.",
            "„Alle Daten löschen“ entfernt lokale Gerätedaten und gespeicherte Passwörter. Nie gesicherte Konfigurationen können auch nach dem Löschen der App unwiederbringlich verloren sein."
          ]],
          ["Mehrere benannte iCloud-Backups", [
            "Öffnen Sie „Einstellungen“ → „In iCloud sichern“, wählen Sie oben auf der Seite „Mein Backup“ (für iPhone und iPad) oder Apple TV, geben Sie bei Bedarf einen Namen ein und tippen Sie auf „Jetzt sichern“. Eine PIN ist nicht nötig.",
            "Das Backup umfasst unterstützte Geräte, Zugangsdaten, Kanäle, LiveView Mix und App-Einstellungen. Cam Hub verschlüsselt es vor dem Speichern in Ihrer privaten iCloud.",
            "Jedes neue Backup wird neben den früheren aufbewahrt, das neueste zuerst, und lässt sich per Wischen umbenennen oder löschen. Das Ziel Apple TV behält nur eine Kopie."
          ]],
          ["Aus iCloud wiederherstellen", [
            "Öffnen Sie „Einstellungen“ → „Aus iCloud wiederherstellen“, wählen Sie unter „Backup auswählen“ ein Backup und tippen Sie auf „Wiederherstellen“. Auf iPhone, iPad und Apple TV ist keine PIN-Prüfung erforderlich.",
            "Verwenden Sie möglichst dieselbe App-Version und prüfen Sie, ob derselbe Apple Account wie beim Backup angemeldet ist. Ältere Backups müssen gegebenenfalls neu erstellt werden, bevor sie erscheinen.",
            "Die Wiederherstellung unterliegt den aktuellen Limits des Abos. Prüfen Sie danach Geräteadressen, Kanäle und LiveView Mix im derzeitigen Netzwerk."
          ]],
          ["Kameras mit PIN oder Passwort teilen", [
            "Öffnen Sie in den Einstellungen „Kameras exportieren“ (im Abschnitt „Kameras teilen“), markieren Sie die Geräte und erstellen Sie einen verschlüsselten Freigabecode. „App-Einstellungen einschließen“ fügt Ihre LiveView-Mix-Seiten und Bedienfelder hinzu; der Empfänger entscheidet, ob er sie übernimmt.",
            "Lassen Sie den Code offen, schalten Sie „Mit PIN sperren“ für sechs Ziffern ein oder zusätzlich „Komplexe Verschlüsselung“ für ein Passwort mit mindestens 8 Zeichen. Wer den Code importiert, muss diese PIN oder dieses Passwort eingeben.",
            "Der Import enthält Geräte und Zugangsdaten und unterliegt den Limits des Abos auf dem Zielgerät. Senden Sie PIN oder Passwort getrennt vom Code und nur an vertrauenswürdige Empfänger; geben Sie sie nie in öffentlichen Chats, Tickets oder auf Websites preis."
          ]]
        ]],
        ["preferences", "05", "Anzeige, Streaming und Datensteuerung", "Passen Sie die App an Netzwerk und Gerät an und behandeln Sie Einstellungen, lokale Daten und iCloud-Backup beim Zurücksetzen getrennt.", [
          ["Offline-Kameras ausblenden", [
            "Mit „Einstellungen“ → „Offline-Kameras ausblenden“ werden Kameras ohne Signal aus Live-Ansicht und Überwachungswänden entfernt.",
            "In der Kanalliste der Geräte bleiben sie abgeblendet sichtbar, damit sie nicht als gelöscht gelten und nach Rückkehr des Signals wieder erscheinen können."
          ]],
          ["Kameras zwischen Seiten verbunden halten", [
            "Öffnen Sie „Einstellungen“ → „LiveView Mix“; unter „Seiten“ finden Sie „Kameras zwischen Seiten verbunden halten“. Am meisten bringt die Option bei Geräten, die länger für eine neue Verbindung brauchen.",
            "Ist die Option aktiviert, bleiben Kanäle nach dem Wegscrollen verbunden und starten bei der Rückkehr schneller. Dies beansprucht fortlaufend Netzwerk, Energie und Systemressourcen; lassen Sie die Option deaktiviert, wenn kein sofortiges Fortsetzen nötig ist."
          ]],
          ["Startansicht auswählen", [
            "Öffnen Sie „Einstellungen“ → „Beim Start öffnen“ im Abschnitt „LiveView Mix“.",
            "„Zuletzt angesehen“ kehrt zur vorherigen Auswahl zurück, „LiveView Mix“ öffnet die geräteübergreifende Wand, „LiveView Mix im Vollbild“ öffnet diese Wand im Vollbild und ein einzelner Geräteeintrag öffnet dieses Gerät.",
            "Wurde das gewählte Gerät gelöscht oder LiveView Mix nicht eingerichtet, wechselt die App zu einem verfügbaren Bildschirm, statt ein ungültiges Ziel beizubehalten."
          ]],
          ["Abos und sichtbare Kameras", [
            "Unter „Einstellungen“ → „Abos“ sehen Sie aktive Kamera- und NVR-Abos sowie deren Nutzungslimits.",
            "Sind nicht alle Kanäle freigeschaltet, weist „Wähle, welche Kameras angezeigt werden“ die verfügbaren Plätze zu. Ist die App vollständig freigeschaltet, ist diese Liste nicht mehr erforderlich.",
            "Käufe und „Käufe wiederherstellen“ folgen dem von Apple gemeldeten Status. Ein Abo ändert weder Protokolle und Berechtigungen noch Wiedergabefunktionen des Geräts."
          ]],
          ["Getrennt zurücksetzen und löschen", [
            "„Standardeinstellungen wiederherstellen“ setzt Sprache, Qualität, LiveView Mix und weitere Einstellungen zurück, behält aber hinzugefügte Geräte.",
            "„Alle Daten löschen“ entfernt lokale Geräte, Kameras und Schlüsselbund-Passwörter, ohne iCloud-Backups oder Abonnements zu verändern.",
            "„iCloud-Backup löschen“ entfernt alle verschlüsselten Cloud-Backups einschließlich der Apple-TV-Kopie, ohne die hinzugefügten Geräte und Einstellungen auf diesem Gerät zu verändern. Um ein einzelnes Backup zu löschen, wischen Sie es stattdessen in der Backup-Liste zur Seite.",
            "Prüfen Sie vor einer endgültigen Löschung die iCloud-Synchronisierung und die Wiederherstellbarkeit der Backup-Version auf dem Zielgerät."
          ]],
          ["Entwicklungsteam kontaktieren", [
            "Auf iPhone und iPad öffnet „Entwicklungsteam kontaktieren“, die letzte Zeile der Einstellungen, eine E-Mail zu einem Gerät, das nicht wie erwartet funktioniert, oder zu einer Funktion Ihres Geräts, die Cam Hub noch nicht bietet.",
            "Schreiben Sie in der Sprache, die Ihnen am liebsten ist. Geben Sie Marke, Modell und Firmware-Version an, aber niemals ein Kamerapasswort, einen Freigabecode oder eine PIN."
          ]]
        ]],
        ["tv-control", "06", "Apple TV, Apple Watch und Webhook-Steuerung", "Bringen Sie die Überwachungswand auf den Fernseher, ergänzen Sie HTTP-Tasten für selbst verwaltete Endpunkte und drücken Sie diese auch auf der Apple Watch.", [
          ["Auf Apple TV überwachen", [
            "Die tvOS-App umfasst LiveView Mix, gerätebezogene Kamerawände, Vollbild-Einzelansicht und Aufnahmezeitleiste und ist für die Fokusnavigation mit der Siri Remote ausgelegt.",
            "Dichte Layouts eignen sich für große Displays. Kameras und Webhook-Tasten lassen sich direkt auf der Wand auswählen, ohne die aktuelle Ansicht vorher zu verlassen.",
            "Live-Streaming, Wiedergabe, Haupt-/Nebenstream und Kanalfunktionen hängen weiterhin von gemeldeten Gerätefähigkeiten, Kontoberechtigungen, Codec und Netzwerk ab."
          ]],
          ["Einrichtung von iPhone oder iPad übertragen", [
            "Öffnen Sie auf iPhone oder iPad „Einstellungen“ → „In iCloud sichern“, wählen Sie Apple TV als Ziel und erstellen Sie ein eigenes verschlüsseltes Backup ohne PIN.",
            "Melden Sie Apple TV beim selben Apple Account an, öffnen Sie „Aus iCloud wiederherstellen“, wählen Sie das Backup und stellen Sie es direkt wieder her.",
            "Apple TV stellt ausschließlich das dafür vorgesehene Apple-TV-Backup wieder her. Prüfen Sie anschließend Adressen, Kanäle und LiveView Mix im aktuellen Fernsehnetzwerk."
          ]],
          ["Webhook-Bedienfeld erstellen", [
            "Öffnen Sie vom Tab „LiveView Mix“ aus „Layout anpassen“ → „Wand anordnen“, tippen Sie auf eine leere Kachel und stellen Sie „Inhalt“ auf „Bedienfeld“.",
            "Wählen Sie die Vorlage „Tor / Rollladen“, „Garagentor“, „Licht“, „Türschloss“, „Vorhang / Jalousie“, „Szene / Automation“, „Alarm / Sirene“, „Ventilator“, „Smarte Steckdose“, „Klimaanlage“ oder „Eigene“. Jede Taste kann ein eigenes Symbol, eine eigene Beschriftung und die Einstellung „Vor dem Auslösen bestätigen“ erhalten; das Bedienfeld hat einen eigenen Titel und eine eigene Farbe.",
            "Jede Taste kann GET, POST, PUT oder DELETE an einen von Ihnen angegebenen HTTP- oder HTTPS-Endpunkt senden, einschließlich optionaler Header, Content-Type und JSON-Text."
          ]],
          ["Bedienfeld-Tasten auf der Überwachungswand ausführen", [
            "Tippen Sie auf iPhone oder iPad auf eine Taste. Auf Apple TV bewegen Sie den Fokus mit der Fernbedienung und drücken zum Ausführen. Das Bedienfeld zeigt Senden, Erfolg oder Fehler direkt an.",
            "Verlangen Sie für Öffnen, Entriegeln, Alarm und andere schwer rückgängig zu machende Aktionen eine Bestätigung und verwenden Sie nur eng begrenzte Endpunkte.",
            "Unterstützte Bedienfeld-Einstellungen können mit verschlüsselten Backups übertragen werden. Webhook-Endpunkte, Zugangsdaten, Netzwerkzugriff und Sicherheit verbundener physischer Geräte bleiben in Ihrer Verantwortung."
          ]],
          ["Tasten auf der Apple Watch", [
            "Cam Hub auf der Apple Watch listet die Tasten der Bedienfelder auf, die auf dem gekoppelten iPhone eingerichtet sind, gruppiert unter den Titeln der Bedienfelder, und löst eine Taste mit einem Tippen aus. Video zeigt die Uhr nicht.",
            "Das iPhone hält die Liste aktuell, und die Uhr speichert eine eigene Kopie, sodass sich die Liste auch öffnet, wenn die iPhone-App nicht läuft. Bedienfelder, die Ihr Abo nicht abdeckt, erscheinen nicht."
          ]]
        ], "Sicherheitshinweis: Webhook-Tasten rufen die von Ihnen angegebenen Netzwerkendpunkte auf. Cam Hub prüft weder deren Sicherheit noch die von Zugriffssteuerungen, Schlössern, Alarmen oder anderen physischen Geräten. Begrenzen Sie Berechtigungen, schützen Sie Zugangsdaten und verlangen Sie bei schwer umkehrbaren Aktionen eine Bestätigung."]
      ],
      note: "Cam Hub umgeht keine Zugriffskontrollen von Geräten. Funktionen variieren je nach Modell, Firmware, Protokollimplementierung, Kontoberechtigungen, Codec und Netzwerkbedingungen."
    },
    es: {
      documentTitle: "Cam Hub — Funciones",
      topline: "Funciones",
      eyebrow: "FUNCIONES DE CAM HUB",
      title: '<span class="page-title-line">Descubre Cam Hub.</span><span class="page-title-line">Función por función.</span>',
      summary: "Un recorrido detallado por los dispositivos, LiveView Mix, la reproducción, las transferencias y los ajustes tal como aparecen en la app.",
      wikiLabel: "Ir a una sección",
      wiki: [
        ["devices", "01", "Dispositivos y canales", "Conecta primero el equipo y elige después los canales que aparecerán en las vistas de supervisión.", [
          ["Preparar los datos de conexión", [
            "Abre Dispositivos, toca Añadir dispositivo y accede a la pantalla de alta.",
            "El nombre es opcional; la dirección IP o el nombre de host y el nombre de usuario son obligatorios. En Avanzado, el puerto HTTP predeterminado es 80 y el RTSP, 554; cámbialos solo si el equipo usa otros puertos.",
            "Introduce la contraseña y toca Añadir. La app muestra Conectando con el dispositivo… y, si el intento falla, distingue entre errores de conexión, credenciales y equipos no compatibles; además, enumera los puertos abiertos que ha encontrado en esa dirección.",
            "Si no conoces la dirección, toca Analizar en la pestaña Herramientas: Cam Hub muestra las cámaras y los grabadores que responden en tu red, indica el nombre de los que puede identificar y rellena por ti el formulario Añadir dispositivo.",
            "Donde esté disponible, Añadir dispositivo también admite una emisión en directo o un canal de YouTube, o un canal de Twitch. Se reproduce junto a tus cámaras en el reproductor del propio servicio y nunca cuenta para ningún plan.",
            "Conéctate únicamente a equipos y cuentas que sean tuyos, que administres o para los que tengas autorización expresa."
          ]],
          ["Detección automática, ONVIF y HTTPS", [
            "Normalmente, deja Conectar mediante (en Avanzado) en Detección automática. Cam Hub comprueba qué puertos responden y prueba por sí solo los protocolos de marca integrados, ONVIF y las rutas de transmisión RTSP de muchas marcas.",
            "Si no se encuentra el equipo, o si quieres un protocolo concreto, elige ONVIF, RTSP o la marca en la lista Conectar mediante, que incluye un campo de búsqueda, y vuelve a añadirlo.",
            "Puede ser necesario activar ONVIF y RTSP en el equipo y crear una cuenta ONVIF con permiso de visualización; consulta también la Referencia de compatibilidad.",
            "Si la página web del equipo usa HTTPS, activa Usar HTTPS en Avanzado. Cam Hub confía en el certificado que presenta el equipo y después no se conectará si recibe otro distinto (un certificado renovado de una autoridad de certificación pública sigue funcionando). Un equipo ya añadido se pasa a HTTPS desde su página."
          ]],
          ["Organizar los canales", [
            "Tras añadir el equipo, tócalo en Dispositivos para abrir su página. Cámaras muestra los canales que comunica el equipo.",
            "Activa los canales que quieras ver y desactiva los demás. Los canales de un grabador también pueden usar Pausar vídeo, que detiene la transmisión en vez de limitarse a ocultar la casilla.",
            "Los canales sin conexión permanecen atenuados en Dispositivos; con Ocultar cámaras sin conexión no aparecen en los murales en vivo."
          ]],
          ["Consultar y actualizar el equipo", [
            "La tarjeta de información de la parte superior de la página del dispositivo muestra modelo, dirección, puertos, número de serie, firmware y cantidad de canales; la flecha situada a su lado oculta o muestra los detalles.",
            "El lápiz de la esquina superior derecha permite renombrar el equipo, cambiar su nombre de usuario y su contraseña con Editar credenciales (sus cámaras y sus posiciones en los murales se mantienen) y activar o desactivar HTTPS. Desliza hacia abajo para actualizar la lista de canales.",
            "El botón de franjas negras alterna entre Predeterminado, Ampliar hasta llenar y Estirar hasta llenar solo en la vista actual; el botón Mural a pantalla completa abre el mural de canales del equipo."
          ]],
          ["Estado del disco", [
            "Los grabadores y los NAS que informan de sus discos muestran la fila Estado del disco en la página del dispositivo. Un símbolo naranja o rojo en la fila refleja el peor veredicto de disco de la última lectura.",
            "Cada disco muestra un veredicto (En buen estado, Requiere atención o A punto de fallar), su estado, capacidad, temperatura, tiempo encendido y detalles S.M.A.R.T. Las temperaturas usan la unidad configurada en tu iPhone o iPad.",
            "Un NAS comparte el estado de sus discos mediante SNMP, que se configura una sola vez con Configurar SNMP; después, su página también muestra volúmenes, CPU, memoria, puertos de red y actividad de los discos. Cam Hub solo lee esta información y no cambia nada en el equipo."
          ]]
        ]],
        ["mix", "02", "Mural de LiveView Mix", "Combina canales de cámaras y grabadores distintos en una sola vista y adapta la densidad a la pantalla.", [
          ["Elegir cámaras para LiveView Mix", [
            "En la pestaña LiveView Mix, toca Elegir cámaras, o ve a Ajustes → LiveView Mix.",
            "Selecciona los canales de cada equipo y elige SD o HD para cada uno; Todos en SD y Todos en HD aplican la calidad en bloque.",
            "La pestaña muestra una vista previa desplazable cuyas columnas y filas puedes definir con Disposición, debajo de ella. Toca Pantalla completa para ver el mural con el diseño elegido."
          ]],
          ["17 diseños, o dibuja el tuyo", [
            "Las cuadrículas uniformes disponibles son 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6 y 7×7.",
            "Los diseños con cámara principal son 1+3, 1+5, 1+7, 1+21 y 1+27; el primer canal ocupa la casilla grande.",
            "Con Dibujar un diseño personalizado, elige de 2 a 8 filas y columnas y arrastra sobre las celdas para unirlas en casillas más grandes, de modo que las cámaras importantes ocupen casillas grandes. Los diseños de más de 16 casillas se ven mejor en un iPad o un Apple TV."
          ]],
          ["Organizar el mural", [
            "En la pestaña LiveView Mix, abre Ajustar el diseño → Organizar el mural. El lienzo muestra cada página del mural tal como se verá.",
            "Arrastra una casilla sobre otra para intercambiarlas, o sobre una casilla vacía para moverla allí. Puedes ocupar cualquier casilla sin tener que llenar antes las anteriores.",
            "Toca una casilla vacía para poner en ella una cámara, traer otra casilla (incluso desde otra página del mural) o llenarla con una imagen, un panel de control, un reloj o una etiqueta."
          ]],
          ["Página vertical y dos lienzos", [
            "Activa Página vertical en Ajustes para tener un segundo mural que se muestra con el teléfono en vertical, con sus propias cámaras, diseño, paneles y marca de agua. En el iPad aparece cuando la pantalla es más alta que ancha.",
            "La pestaña y el mural a pantalla completa cambian entre la página horizontal y la vertical al girar el dispositivo. Mientras la página vertical está desactivada, un teléfono en vertical muestra el mural horizontal girado de lado.",
            "Los paneles de control, relojes, etiquetas e imágenes se pueden copiar de una página a la otra en lugar de crearlos de nuevo.",
            "En el iPhone Duo, Dos lienzos divide LiveView Mix por la bisagra en un lienzo superior y otro inferior mientras el teléfono está medio plegado, cada uno con sus propias cámaras y paneles de control."
          ]],
          ["Tres modos de relleno", [
            "Predeterminado conserva toda la imagen y añade franjas negras cuando no coinciden las proporciones.",
            "Ampliar hasta llenar mantiene la proporción y amplía la imagen hasta cubrir la casilla, recortando los bordes sobrantes.",
            "Estirar hasta llenar cubre la casilla sin recortar, pero puede ensanchar o comprimir la imagen. Ajustes → Franjas negras define el modo inicial de las pantallas de dispositivos; cada mural de LiveView Mix tiene su propio ajuste Franjas negras en este mural en Ajustar el diseño.",
            "Ajustes → Vídeo de borde a borde (activado de forma predeterminada) permite que el vídeo a pantalla completa llegue a la zona de la Dynamic Island y a las esquinas redondeadas; desactívalo para que la imagen no las ocupe."
          ]],
          ["Marca de agua personalizable", [
            "Abre Marca de agua, activa Mostrar marca de agua y elige Nombre del dispositivo, Nombre de la cámara o Dirección IP.",
            "Puedes ajustar posición, opacidad, color, tamaño y las tipografías Sistema, Redondeada, Monoespaciada o Serif.",
            "Para mejorar la legibilidad, usa Sombra, Contorno, Fondo o Ninguno y comprueba en las vistas previas clara y oscura que la marca de agua se lee bien en imágenes de día y de noche."
          ]],
          ["Imagen, reloj, etiqueta y controles", [
            "En Organizar el mural, toca una casilla vacía, elige «Imagen, panel de control, reloj o etiqueta…» y selecciona Vacío, Imagen, Panel, Reloj o Etiqueta en Contenido.",
            "Imagen permite elegir o tomar una foto; Reloj configura fecha, segundos y formato de 12 o 24 horas; Etiqueta admite texto, SF Symbol y color.",
            "Panel crea botones webhook HTTP para puerta, garaje, luz, cerradura, cortina, escena, alarma, ventilador, enchufe, climatización o una plantilla propia; las acciones delicadas pueden exigir confirmación.",
            "Las imágenes y los ajustes compatibles se trasladan con la copia cifrada; sigues siendo responsable de crear y proteger los endpoints webhook."
          ]]
        ]],
        ["viewing", "03", "Vídeo en vivo y grabaciones", "La vista individual prioriza el detalle; las vistas múltiples permiten equilibrar calidad, ancho de banda y carga.", [
          ["Calidad en vista única y múltiple", [
            "En Ajustes → Calidad predeterminada, configura por separado HD o SD para Una sola cámara y para Varias cámaras. Estos valores se aplican solo a las pantallas de dispositivos: el mural del dispositivo y el de En directo, el mural a pantalla completa del dispositivo y una cámara abierta desde un dispositivo.",
            "En un canal individual, el selector SD/HD aparece si el equipo comunica que permite cambiar entre transmisión principal y secundaria.",
            "LiveView Mix no usa estos valores: la vista múltiple reproduce cada canal con la calidad asignada en la lista de canales, uno a uno o con Todos en SD/Todos en HD; SD suele reducir ancho de banda y consumo al reproducir muchas casillas.",
            "Al abrir una sola cámara desde LiveView Mix (pantalla completa o ampliada), siempre se muestra en HD. El botón SD/HD en pantalla cambia solo esa visualización y no modifica ningún ajuste."
          ]],
          ["Zoom y pantalla completa horizontal", [
            "Pellizca para ampliar una cámara y arrastra la imagen ampliada.",
            "Un doble toque alterna rápidamente entre 2,5× y la imagen completa.",
            "Al girar el dispositivo, se ocultan las barras de navegación y controles para aprovechar la pantalla."
          ]],
          ["Control PTZ y audio bidireccional", [
            "En una cámara PTZ, toca el botón redondo de la esquina inferior derecha de la imagen para abrir el panel: mantén pulsada una flecha para girar la cámara, usa más y menos para el zoom y la estrella para las posiciones guardadas.",
            "Si la cámara lo admite, Posicionamiento 3D te permite tocar un punto para orientar la cámara hacia él, o dibujar un recuadro para hacer zoom directamente en esa zona.",
            "En una cámara independiente con altavoz, mantén pulsado Hablar para hablar y suéltalo para escuchar, como con un walkie-talkie. La primera vez, Cam Hub pide acceso al micrófono."
          ]],
          ["Capturas y uso compartido", [
            "Toca Captura en la vista individual para solicitar al equipo la imagen actual.",
            "Cuando llega la imagen, Cam Hub abre una vista previa. Toca Compartir para enviarla o guardarla en Fotos.",
            "Toca el botón rojo de grabación junto a Captura para grabar lo que muestra la vista, en directo o desde una grabación, durante un máximo de 10 minutos. Al detener la grabación, Cam Hub muestra el clip para que puedas compartirlo o guardarlo en Fotos.",
            "Una captura o un clip pueden mostrar personas, voces, direcciones, marcas de tiempo u otros datos sensibles; revisa el contenido, el destinatario y la normativa local antes de enviarlos."
          ]],
          ["Fecha, cronología y tipos de grabación", [
            "Elige una fecha bajo la vista del canal. En los equipos que mantienen un índice diario, el Calendario de grabaciones marca los días que tienen vídeo.",
            "Cambia entre Continua y Eventos, arrastra o amplía la cronología hasta la hora deseada o toca directamente un segmento.",
            "La reproducción muestra REPRODUCCIÓN y la hora del equipo; Volver al directo restablece la transmisión en vivo. Algunos equipos descargan primero el clip y lo abren después en el reproductor del sistema."
          ]]
        ], "Aviso de disponibilidad: el vídeo en vivo, las capturas, el <span class=\"keep-phrase\">cambio de transmisión principal/secundaria</span>, la búsqueda, las <span class=\"keep-phrase\">categorías Continua/Eventos</span>, la cronología y la reproducción dependen de las funciones comunicadas por la cámara o el grabador y de los permisos asignados a la cuenta."],
        ["backup", "04", "Copias cifradas y uso compartido de cámaras", "Las copias de iCloud no necesitan PIN y puedes conservar varias con nombre. Un código para compartir puede quedar abierto o bloquearse con un PIN de seis dígitos o una contraseña.", [
          ["Protección local de contraseñas", [
            "Las contraseñas se guardan en el Llavero; nombres, direcciones, puertos, canales y ajustes permanecen en los datos del dispositivo.",
            "Cam Hub usa estos datos solo para conexiones, búsquedas, capturas, copias o transferencias que tú solicitas.",
            "Borrar todos los datos elimina los equipos y las contraseñas locales; desinstalar la app también puede hacer irrecuperable una configuración sin copia."
          ]],
          ["Varias copias con nombre en iCloud", [
            "Ve a Ajustes → Hacer copia en iCloud, elige Mi copia (para iPhone y iPad) o Apple TV en la parte superior de la página, escribe un nombre si quieres y toca Hacer copia ahora. No hace falta ningún PIN.",
            "Los equipos, credenciales, canales, LiveView Mix y ajustes compatibles se cifran antes de guardarse en tu propio iCloud.",
            "Cada copia nueva se guarda junto a las anteriores, con la más reciente primero, y se puede renombrar o eliminar deslizándola. El destino Apple TV conserva una sola copia."
          ]],
          ["Restaurar desde iCloud", [
            "Abre Ajustes → Restaurar desde iCloud, elige una copia en Elegir una copia y toca Restaurar. iPhone, iPad y Apple TV no requieren verificación de PIN.",
            "Usa preferiblemente la misma versión de la app y la Cuenta de Apple que contiene la copia; las copias de versiones antiguas pueden tener que crearse de nuevo para aparecer.",
            "La restauración respeta los límites del plan activo. Revisa después direcciones, canales y LiveView Mix en la red actual."
          ]],
          ["Compartir cámaras con un PIN o una contraseña", [
            "En Ajustes, abre Exportar cámaras (en la sección Compartir cámaras), marca los dispositivos y crea un código cifrado para compartir. Incluir los ajustes de la app añade tus páginas de LiveView Mix y tus paneles de control; el destinatario decide si los usa.",
            "Deja el código abierto, activa Bloquear con un PIN para usar seis dígitos o activa además Cifrado complejo para usar una contraseña de al menos 8 caracteres. Quien importe el código deberá introducir ese PIN o esa contraseña.",
            "La importación incluye el equipo y sus credenciales y queda sujeta a los límites del plan de destino. Envía el PIN o la contraseña por separado del código, y solo a un destinatario de confianza; no los publiques nunca en chats públicos, tickets ni sitios web."
          ]]
        ]],
        ["preferences", "05", "Pantalla, transmisión y datos", "Adapta la app a la red y al dispositivo, y trata por separado los ajustes, los datos locales y la copia de iCloud al restablecer.", [
          ["Ocultar cámaras sin conexión", [
            "Ajustes → Ocultar cámaras sin conexión las retira de En directo y de los murales mientras no tengan señal.",
            "Siguen atenuadas en la lista de canales, por lo que no parecen eliminadas y pueden reaparecer cuando vuelva la señal."
          ]],
          ["Mantener las cámaras conectadas entre páginas", [
            "Ve a Ajustes → LiveView Mix y busca Mantener las cámaras conectadas entre páginas en Páginas; es más útil con equipos que tardan más en reconectar.",
            "Si está activada, los canales desplazados fuera de pantalla permanecen conectados y se reanudan antes, a cambio de usar continuamente red, energía y recursos del sistema; déjala desactivada si no necesitas reanudación inmediata."
          ]],
          ["Elegir la pantalla inicial", [
            "En Ajustes, busca Abrir al iniciar en la sección LiveView Mix.",
            "Visto por última vez vuelve a la selección anterior, LiveView Mix abre el mural combinado, LiveView Mix a pantalla completa lo abre a pantalla completa y un equipo concreto abre ese dispositivo.",
            "Si se elimina el equipo elegido o LiveView Mix no está configurado, la app abre una pantalla disponible."
          ]],
          ["Planes y cámaras visibles", [
            "Ajustes → Planes muestra los planes activos de cámaras y grabadores y sus límites.",
            "Cuando no están desbloqueados todos los canales, «Elige qué cámaras se muestran» asigna las plazas disponibles. Cuando la app está totalmente desbloqueada, la lista deja de ser necesaria.",
            "Las compras y Restaurar compras siguen el estado comunicado por Apple. Un plan no cambia los protocolos, permisos ni funciones de reproducción del equipo."
          ]],
          ["Restablecer y borrar por separado", [
            "Restablecer ajustes predeterminados reinicia apariencia, idioma, calidad, LiveView Mix y otras preferencias, pero conserva los equipos.",
            "Borrar todos los datos elimina equipos, cámaras y contraseñas del Llavero sin afectar a las copias de iCloud ni a las suscripciones.",
            "Borrar copia de iCloud elimina todas las copias cifradas en la nube, incluida la de Apple TV, sin cambiar los equipos ni los ajustes del dispositivo actual. Para borrar una sola copia, deslízala en la lista de copias.",
            "Antes de una eliminación irreversible, confirma la sincronización de iCloud y que la versión de la copia pueda restaurarse en el destino."
          ]],
          ["Contactar con el equipo de desarrollo", [
            "En el iPhone y el iPad, Contactar con el equipo de desarrollo, la última fila de Ajustes, inicia un correo electrónico sobre un equipo que no funciona como debería o sobre una función de tu equipo que Cam Hub aún no ofrece.",
            "Escribe en el idioma que prefieras. Indica la marca, el modelo y la versión de firmware, pero nunca la contraseña de una cámara, un código para compartir ni un PIN."
          ]]
        ]],
        ["tv-control", "06", "Apple TV, Apple Watch y controles webhook", "Lleva el mural al televisor, añade botones de control HTTP que conectan con endpoints administrados por ti y púlsalos también en el Apple Watch.", [
          ["Supervisar en Apple TV", [
            "La app de tvOS incluye LiveView Mix, murales por equipo, vista individual a pantalla completa y cronología de grabaciones, diseñados para la navegación por foco con Siri Remote.",
            "Los diseños densos aprovechan las pantallas grandes; cámaras y botones webhook se seleccionan directamente desde el mural.",
            "La transmisión, la reproducción, el cambio entre transmisión principal y secundaria y las funciones de canal siguen dependiendo del equipo, los permisos, el códec y la red."
          ]],
          ["Transferir la configuración desde iPhone o iPad", [
            "En iPhone o iPad, abre Ajustes → Hacer copia en iCloud, selecciona Apple TV como destino y crea una copia cifrada específica sin PIN.",
            "Inicia sesión con la misma Cuenta de Apple en Apple TV, abre Restaurar desde iCloud, selecciona la copia y restáurala directamente.",
            "Apple TV solo restaura su copia específica; revisa después las direcciones, los canales y LiveView Mix en la red del televisor."
          ]],
          ["Crear un panel de control webhook", [
            "En la pestaña LiveView Mix, abre Ajustar el diseño → Organizar el mural, toca una casilla vacía y cambia Contenido a Panel.",
            "Elige puerta, garaje, luz, cerradura, cortina, escena, alarma, ventilador, enchufe, climatización o una plantilla propia; cada botón admite su propio icono, texto y Confirmar antes de ejecutar, y el panel tiene su propio título y color.",
            "Cada botón puede enviar GET, POST, PUT o DELETE al endpoint HTTP o HTTPS que indiques, con cabeceras, Content-Type y cuerpo JSON opcionales."
          ]],
          ["Ejecutar controles desde el mural", [
            "Toca el botón en iPhone o iPad; en Apple TV, enfoca con el mando y pulsa. La casilla muestra enviando, éxito o error.",
            "Exige confirmación para abrir, desbloquear, activar alarmas y otras acciones difíciles de deshacer, y usa endpoints con permisos mínimos.",
            "Los controles compatibles se transfieren con las copias cifradas. Los endpoints, credenciales, acceso de red y seguridad del equipo físico siguen siendo responsabilidad del usuario."
          ]],
          ["Botones en el Apple Watch", [
            "Cam Hub en el Apple Watch muestra los botones de los paneles de control configurados en el iPhone enlazado, agrupados bajo el título de cada panel, y ejecuta uno con solo tocarlo. No muestra vídeo.",
            "El iPhone mantiene la lista al día y el reloj guarda su propia copia, así que la lista se abre aunque la app del iPhone no esté en marcha. Los paneles que no incluye tu plan no aparecen."
          ]]
        ], "Aviso de seguridad: los botones webhook llaman a los endpoints de red que configures. Cam Hub no valida la seguridad de endpoints, controles de acceso, cerraduras, alarmas ni otros equipos físicos. Limita los permisos, protege las credenciales y exige confirmación para acciones difíciles de deshacer."]
      ],
      note: "Cam Hub no elude los controles de acceso del equipo. Las funciones varían según el modelo, firmware, implementación del protocolo, permisos de la cuenta, códec y condiciones de red."
    },
    "es-MX": {
      documentTitle: "Cam Hub — Funciones",
      topline: "Funciones",
      eyebrow: "FUNCIONES DE CAM HUB",
      title: '<span class="page-title-line">Conoce Cam Hub.</span><span class="page-title-line">Función por función.</span>',
      summary: "Sigue los mismos accesos y controles que ves en la app. Ve directo a agregar dispositivos, a LiveView Mix, a la reproducción, a la transferencia o al comportamiento de la app.",
      wikiLabel: "Ir a un capítulo",
      wiki: [
        ["devices", "01", "Dispositivos y canales", "Primero conecta el equipo y después decide qué canales van en tus pantallas de monitoreo.", [
          ["Prepara los datos de conexión", [
            "Abre Dispositivos, toca Agregar dispositivo y se abrirá la pantalla para agregarlo.",
            "El nombre es opcional. La dirección IP o el nombre de host y el nombre de usuario son obligatorios. En Avanzado, el puerto HTTP es 80 de forma predeterminada y el puerto RTSP, 554; cámbialos solo si el equipo usa otros puertos.",
            "Escribe la contraseña y toca Agregar. La app muestra “Conectando con el dispositivo” y, si el intento falla, distingue entre errores de conexión, de credenciales y de equipo no compatible; además, enumera los puertos abiertos que encontró en esa dirección.",
            "Si no conoces la dirección, toca Escanear en la pestaña Herramientas: Cam Hub enumera las cámaras y los grabadores que responden en tu red, indica qué es cada equipo cuando puede identificarlo y llena por ti el formulario de Agregar dispositivo.",
            "Donde está disponible, Agregar dispositivo también acepta una transmisión en vivo o un canal de YouTube, o un canal de Twitch. Se reproduce junto a tus cámaras en el reproductor propio del servicio y nunca cuenta para un plan.",
            "Conéctate solo a equipos y cuentas que sean tuyos, que administres o para los que tengas autorización expresa."
          ]],
          ["Detección automática, ONVIF y HTTPS", [
            "Normalmente conviene dejar Conectar mediante (en Avanzado) en Detección automática. Cam Hub revisa qué puertos responden y luego prueba por su cuenta los protocolos de marca integrados, ONVIF y las rutas de transmisión RTSP de muchas marcas.",
            "Si no se encuentra el equipo, o si quieres usar un protocolo en particular, elige ONVIF, RTSP o la marca en la lista Conectar mediante, que tiene un campo de búsqueda, y vuelve a agregarlo.",
            "Es posible que debas activar ONVIF, crear una cuenta ONVIF con permiso de visualización y activar RTSP en la configuración del equipo. La Referencia de compatibilidad incluye notas de conexión.",
            "Si la página web del equipo usa HTTPS, activa Usar HTTPS en Avanzado. Cam Hub confía en el certificado que presenta el equipo y después no se conectará si presenta uno distinto (un certificado renovado por una autoridad de certificación pública sigue funcionando). Un equipo que ya está agregado cambia a HTTPS desde su página."
          ]],
          ["Organiza los canales de las cámaras", [
            "Después de agregar el equipo, tócalo en Dispositivos para abrir su página. Cámaras muestra los canales que ese equipo reporta.",
            "Activa los canales que quieras ver y desactiva los que no uses. En los canales de un grabador también puedes usar Pausar video para detener la transmisión, en lugar de solo ocultar el recuadro.",
            "Los canales sin conexión permanecen atenuados en la lista de Dispositivos. Si Ocultar cámaras sin conexión está activado, no aparecen en los muros de monitoreo en vivo."
          ]],
          ["Revisa y actualiza el equipo", [
            "La tarjeta de información de la parte superior de la página del dispositivo muestra el modelo, la dirección, los puertos, el número de serie, el firmware y la cantidad de canales; la flecha que está a su lado oculta o muestra los detalles.",
            "Con el lápiz de la esquina superior derecha puedes renombrar el equipo, cambiar su nombre de usuario y su contraseña con Editar credenciales (sus cámaras y sus lugares en el muro se conservan) y activar o desactivar HTTPS. Desliza hacia abajo para actualizar la lista de canales.",
            "El control de barras negras alterna entre Predeterminado, Ampliar para llenar y Estirar para llenar solo en la vista actual. El control Muro a pantalla completa abre el muro de canales de ese equipo."
          ]],
          ["Estado del disco", [
            "Los grabadores y los NAS que informan sobre sus discos muestran la fila Estado del disco en la página del dispositivo. Un símbolo naranja o rojo en la fila repite el peor resultado de los discos en la última lectura.",
            "Cada disco muestra un resultado (En buen estado, Requiere atención o A punto de fallar), su estado, su capacidad, su temperatura, su tiempo encendido y los detalles de S.M.A.R.T. Las temperaturas usan la unidad configurada en tu iPhone o iPad.",
            "Un NAS comparte el estado de sus discos mediante SNMP, que se configura una sola vez con Configurar SNMP; después, su página también muestra los volúmenes, la CPU, la memoria, los puertos de red y la actividad de los discos. Cam Hub solo lee esta información y no cambia nada en el equipo."
          ]]
        ]],
        ["mix", "02", "Muro de monitoreo LiveView Mix", "Reúne en una sola pantalla canales de distintas cámaras y grabadores, y ajusta la densidad a la pantalla que uses.", [
          ["Elige las cámaras para LiveView Mix", [
            "En la pestaña LiveView Mix, toca Elegir cámaras, o ve a Configuración → LiveView Mix.",
            "Selecciona los canales en la sección de cada equipo. Cada canal puede usar SD o HD de forma independiente, y Todos en SD o Todos en HD aplica la misma calidad a toda la selección.",
            "La pestaña muestra una vista previa con desplazamiento; con Disposición, debajo de ella, puedes definir sus columnas y filas. Toca Pantalla completa para ver el muro con el diseño que elegiste."
          ]],
          ["17 diseños, o dibuja el tuyo", [
            "Cuadrículas uniformes: 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6 y 7×7.",
            "Diseños con recuadro principal: 1+3, 1+5, 1+7, 1+21 y 1+27. La primera cámara ocupa el recuadro principal, que es el más grande.",
            "Con Dibujar un diseño personalizado, elige de 2 a 8 filas y columnas y arrastra sobre las celdas para combinarlas en recuadros más grandes, de modo que las cámaras importantes tengan recuadros grandes. Los diseños con más de 16 recuadros se ven mejor en iPad o Apple TV."
          ]],
          ["Organiza el muro", [
            "Desde la pestaña LiveView Mix, abre Ajustar el diseño → Organizar el muro. El lienzo muestra cada página del muro tal como se verá.",
            "Arrastra un recuadro sobre otro para intercambiarlos, o sobre un recuadro vacío para moverlo ahí. Se puede llenar cualquier recuadro; no hace falta llenar antes los anteriores.",
            "Toca un recuadro vacío para poner ahí una cámara, mover a él otro recuadro (incluso desde otra página del muro) o llenarlo con una imagen, un panel de control, un reloj o una etiqueta."
          ]],
          ["Página vertical y dos lienzos", [
            "Activa Página vertical en Configuración para tener un segundo muro que se muestra mientras el celular está en vertical, con sus propias cámaras, diseño, paneles y marca de agua. En iPad se muestra mientras la pantalla es más alta que ancha.",
            "La pestaña y el muro a pantalla completa cambian entre la página horizontal y la vertical al girar el dispositivo. Mientras la página vertical está desactivada, un celular en vertical muestra el muro horizontal girado de lado.",
            "Los paneles de control, los relojes, las etiquetas y las imágenes se pueden copiar de una página a la otra, sin tener que crearlos de nuevo.",
            "En el iPhone Duo, Dos lienzos divide LiveView Mix en la bisagra en un lienzo superior y otro inferior mientras el celular está medio doblado, cada uno con sus propias cámaras y paneles de control."
          ]],
          ["Tres modos de relleno del video", [
            "Predeterminado conserva la imagen completa y agrega barras negras cuando las proporciones no coinciden.",
            "Ampliar para llenar conserva la proporción y agranda la imagen hasta llenar el recuadro, recortando los bordes que sobresalen.",
            "Estirar para llenar llena el recuadro sin recortar, pero puede ensanchar o comprimir la imagen. Configuración → Barras negras define el modo inicial de las pantallas de dispositivos; cada muro de LiveView Mix tiene su propia opción “Barras negras en este muro”, en Ajustar el diseño.",
            "Configuración → Video de borde a borde (activado de forma predeterminada) permite que el video a pantalla completa llegue hasta la zona de la Dynamic Island y las esquinas redondeadas; desactívalo para que la imagen no las invada."
          ]],
          ["Marcas de agua personalizadas", [
            "Abre Marca de agua, activa Mostrar marca de agua y elige Nombre del dispositivo, Nombre de la cámara o Dirección IP.",
            "Ajusta la posición, la opacidad, el color, el tamaño del texto y la fuente: Sistema, Redondeada, Monoespaciada o Serif.",
            "Legibilidad ofrece Sombra, Contorno, Fondo o Ninguno. Usa las vistas previas clara y oscura para confirmar que la marca de agua se lea bien en imágenes de día y de noche."
          ]],
          ["Imágenes, relojes, etiquetas y controles", [
            "En Organizar el muro, toca un recuadro vacío, elige “Imagen, panel de control, reloj o etiqueta…” y, en Contenido, selecciona Vacío, Imagen, Panel, Reloj o Etiqueta.",
            "Imagen permite elegir una foto o tomar una nueva. Reloj puede mostrar la fecha, los segundos y la hora en formato de 12 o 24 horas. Etiqueta admite texto personalizado, un SF Symbol y color.",
            "Panel crea botones de webhook HTTP a partir de las plantillas Portón / Cortina metálica, Puerta de garaje, Luz, Cerradura de puerta, Cortina / Persiana, Escena / Automatización, Alarma / Sirena, Ventilador, Enchufe inteligente, Aire acondicionado y Personalizado. Las acciones sensibles, como abrir o desbloquear, pueden pedir confirmación.",
            "Las imágenes y la configuración de los recuadros que sean compatibles se incluyen en un respaldo cifrado. Tú sigues siendo responsable de crear y proteger cada endpoint de webhook."
          ]]
        ]],
        ["viewing", "03", "Vista en vivo y reproducción de grabaciones", "La vista de una sola cámara permite priorizar la nitidez y la interacción; los muros con varias cámaras, la carga del dispositivo y el ancho de banda.", [
          ["Calidad en una y en varias cámaras", [
            "Ve a Configuración → Calidad predeterminada y define por separado HD o SD para Una sola cámara y para Varias cámaras. Estos valores se aplican solo a las pantallas de dispositivos: la página del dispositivo y los muros En vivo, el muro a pantalla completa de un dispositivo y una cámara que se abre desde un dispositivo.",
            "Cuando el equipo indica que permite cambiar entre transmisión principal y secundaria, la barra de controles del canal individual muestra las opciones SD y HD.",
            "LiveView Mix no usa estos valores: su muro con varias cámaras reproduce cada canal con la calidad asignada en la lista de canales, uno por uno o con Todos en SD o Todos en HD. Una calidad menor suele reducir la carga de la red y del dispositivo cuando se reproducen muchos recuadros a la vez.",
            "Al abrir una sola cámara desde LiveView Mix, ya sea a pantalla completa o en primer plano, siempre empieza en HD. El botón SD/HD de la pantalla cambia solo esa vista y no modifica ninguna configuración."
          ]],
          ["Zoom y vista horizontal", [
            "Pellizca para acercar en la vista de un solo canal y luego arrastra la imagen ampliada para revisar otra zona.",
            "Toca dos veces para saltar a un zoom de 2.5× y vuelve a tocar dos veces para regresar a la imagen completa.",
            "Gira el dispositivo a horizontal para ocultar la navegación, los controles y la barra de pestañas, y así dejar que el video aproveche la mayor parte de la pantalla."
          ]],
          ["Control PTZ y conversación en dos sentidos", [
            "En una cámara PTZ, toca el botón redondo de la esquina inferior derecha de la imagen para abrir los controles: mantén presionada una flecha para girar la cámara, usa más y menos para el zoom, y la estrella para las posiciones guardadas.",
            "Si la cámara lo admite, Posicionamiento 3D te permite tocar un punto para girar la cámara hacia él, o dibujar un recuadro para acercarte directamente a esa zona.",
            "En una cámara independiente con bocina, mantén presionado Hablar para hablar y suéltalo para escuchar, como con un walkie-talkie. La primera vez, Cam Hub pide acceso al micrófono."
          ]],
          ["Capturas y cómo compartirlas", [
            "Toca Captura en la barra de controles del canal individual para pedirle al equipo su imagen actual.",
            "Cuando llega la imagen, Cam Hub abre una vista previa. Toca Compartir para enviarla o guardarla en Fotos.",
            "Toca el botón rojo de grabación junto a Captura para grabar lo que muestra la vista, en vivo o desde una grabación, por un máximo de 10 minutos. Cuando detienes la grabación, Cam Hub muestra el clip para que puedas compartirlo o guardarlo en Fotos.",
            "Una captura o un clip pueden contener personas, voces, direcciones, marcas de tiempo u otra información sensible. Revisa el contenido, a quién se lo envías y los requisitos locales antes de enviarlo."
          ]],
          ["Fecha, línea de tiempo y tipos de grabación", [
            "Elige una fecha debajo de la vista del canal. En los equipos que llevan un índice diario, el Calendario de grabaciones marca los días que tienen video.",
            "Las grabaciones pueden alternar entre Continua y Eventos. Arrastra la línea de tiempo o haz zoom en ella hasta que el cursor central llegue a la hora que buscas, o selecciona un segmento de la lista.",
            "La reproducción muestra REPRODUCCIÓN y la hora del equipo. Toca Ver en vivo para regresar a la transmisión en vivo. Algunos equipos descargan primero un clip antes de abrirlo en el reproductor del sistema."
          ]]
        ], "Aviso de disponibilidad: la transmisión en vivo, las capturas, la <span class=\"keep-phrase\">selección de transmisión principal/secundaria</span>, la búsqueda de grabaciones, la <span class=\"keep-phrase\">clasificación Continua/Eventos</span>, el desplazamiento por la línea de tiempo y la reproducción dependen de las funciones que la cámara o el grabador reporten realmente y de los permisos de la cuenta con la que se inició sesión en el equipo."],
        ["backup", "04", "Respaldo cifrado y cómo compartir cámaras", "Los respaldos de iCloud no necesitan PIN, y puedes conservar varios con nombre. Un código para compartir puede quedar abierto o bloquearse con un PIN de seis dígitos o con una contraseña.", [
          ["Protección local de contraseñas", [
            "Una vez agregado el equipo, su contraseña se guarda en el Llavero de Apple. El nombre, la dirección, los puertos, los canales y la configuración de la app permanecen en los datos del dispositivo.",
            "Cam Hub usa esta información solo para las conexiones, las búsquedas de grabaciones, las capturas, los respaldos y las transferencias que tú pidas.",
            "“Eliminar todos los datos” elimina los datos locales de los equipos y las contraseñas guardadas. Si desinstalas la app, la configuración que nunca se respaldó puede quedar irrecuperable."
          ]],
          ["Varios respaldos de iCloud con nombre", [
            "Ve a Configuración → Respaldar en iCloud, elige Mi respaldo (para iPhone y iPad) o Apple TV en la parte superior de la página, escribe un nombre si quieres y toca Respaldar ahora. No se necesita PIN.",
            "El respaldo incluye los equipos, las credenciales, los canales, LiveView Mix y la configuración de la app que sean compatibles. Cam Hub lo cifra antes de guardarlo en tu iCloud privado.",
            "Cada respaldo nuevo se guarda junto a los anteriores, el más reciente primero, y se puede renombrar o eliminar deslizándolo. El destino Apple TV conserva una sola copia."
          ]],
          ["Restaurar desde iCloud", [
            "Abre Configuración → Restaurar desde iCloud, elige un respaldo en Elegir un respaldo y toca Restaurar. En iPhone, iPad y Apple TV no se pide verificar ningún PIN.",
            "Si es posible, usa la misma versión de la app y confirma que hayas iniciado sesión con la cuenta de Apple que contiene el respaldo. Es posible que los respaldos de una versión anterior deban volver a crearse para que aparezcan.",
            "La restauración está sujeta a los límites del plan actual. Después, verifica en la red actual la dirección y los canales de cada equipo, así como LiveView Mix."
          ]],
          ["Compartir cámaras con un PIN o una contraseña", [
            "En Configuración, abre Exportar cámaras (en la sección Compartir cámaras), marca los dispositivos y crea un código para compartir cifrado. Incluir la configuración de la app agrega tus páginas de LiveView Mix y tus paneles de control; quien lo recibe decide si los usa.",
            "Deja el código abierto, activa Bloquear con un PIN para usar seis dígitos, o activa además Cifrado complejo para usar una contraseña de al menos 8 caracteres. Quien importe el código deberá ingresar ese PIN o esa contraseña.",
            "La importación incluye los equipos y sus credenciales, y está sujeta a los límites del plan de destino. Envía el PIN o la contraseña por separado del código y solo a una persona de confianza; nunca los publiques en un chat público, un ticket ni un sitio web."
          ]]
        ]],
        ["preferences", "05", "Pantalla, transmisión y control de datos", "Ajusta el comportamiento de la app a tu red y a tu dispositivo, y trata por separado las preferencias, los datos locales y el respaldo de iCloud al restablecer.", [
          ["Ocultar cámaras sin conexión", [
            "Activa Configuración → Ocultar cámaras sin conexión para quitar de En vivo y de los muros de monitoreo en vivo las cámaras que no tienen señal.",
            "Siguen atenuadas en la lista de canales de Dispositivos, para que no se confundan con cámaras eliminadas y puedan reaparecer cuando regrese su señal."
          ]],
          ["Mantener las cámaras conectadas entre páginas", [
            "Ve a Configuración → LiveView Mix y busca “Mantener las cámaras conectadas entre páginas” en Páginas; es más útil con equipos que tardan más en volver a conectarse.",
            "Si está activada, los canales siguen conectados después de desplazarte y se reanudan más rápido cuando vuelves a ellos. Esto consume red, energía y recursos del sistema de forma continua, así que déjala desactivada si no necesitas que se reanuden de inmediato."
          ]],
          ["Elegir qué se abre al iniciar", [
            "Ve a Configuración → Abrir al iniciar, en la sección LiveView Mix.",
            "Visto por última vez regresa a la selección anterior, LiveView Mix abre el muro con varios equipos, LiveView Mix a pantalla completa abre ese muro a pantalla completa, y cada equipo individual abre ese dispositivo.",
            "Si el equipo elegido se eliminó o LiveView Mix no está configurado, la app abre una pantalla disponible en lugar de conservar un destino que ya no es válido."
          ]],
          ["Planes y cámaras visibles", [
            "Configuración → Planes muestra el plan de cámaras y de grabadores actual, junto con sus límites de uso.",
            "Cuando no todos los canales están desbloqueados, “Elige qué cámaras se muestran” asigna los lugares disponibles. La lista deja de ser necesaria cuando la app queda totalmente desbloqueada.",
            "Las compras y Restaurar compras se rigen por el estado que informa Apple. Un plan no cambia los protocolos, los permisos ni las funciones de reproducción que ofrece la propia cámara."
          ]],
          ["Restablecer y borrar por separado", [
            "Restablecer configuración predeterminada reinicia el idioma, la calidad, LiveView Mix y otras preferencias, pero conserva los equipos agregados.",
            "“Eliminar todos los datos” elimina los equipos, las cámaras y las contraseñas del Llavero en este dispositivo. No afecta los respaldos de iCloud ni las suscripciones.",
            "Eliminar respaldo de iCloud quita todos los respaldos cifrados de la nube, incluida la copia para Apple TV, sin cambiar los equipos ni la configuración de este dispositivo. Para eliminar un solo respaldo, deslízalo en la lista de respaldos.",
            "Antes de una eliminación irreversible, confirma que iCloud ya se sincronizó y que la versión del respaldo se puede restaurar en el dispositivo de destino."
          ]],
          ["Contactar al equipo de desarrollo", [
            "En iPhone y iPad, “Contactar al equipo de desarrollo”, la última fila de Configuración, inicia un correo sobre un equipo que no funciona como debería o sobre una función de tu equipo que Cam Hub todavía no ofrece.",
            "Escribe en el idioma que prefieras. Incluye la marca, el modelo y la versión de firmware, pero nunca la contraseña de una cámara, un código para compartir ni un PIN."
          ]]
        ]],
        ["tv-control", "06", "Apple TV, Apple Watch y controles de webhook", "Lleva el muro de monitoreo a la televisión, agrega botones de control HTTP que se conectan a endpoints que tú administras y presiónalos también en el Apple Watch.", [
          ["Monitoreo en Apple TV", [
            "La app para tvOS incluye LiveView Mix, muros de cámaras por equipo, vista de una sola cámara a pantalla completa y una línea de tiempo de grabaciones, todo diseñado para navegar por enfoque con el Siri Remote.",
            "Los diseños densos van muy bien en una pantalla grande. Las cámaras y los botones de webhook se pueden seleccionar directamente en el muro de monitoreo, sin tener que salir antes de la vista actual.",
            "La transmisión en vivo, la reproducción, la selección de transmisión principal/secundaria y las funciones de cada canal siguen dependiendo de lo que reporte el equipo, los permisos de la cuenta, el códec y las condiciones de la red."
          ]],
          ["Transferir la configuración desde iPhone o iPad", [
            "En tu iPhone o iPad, abre Configuración → Respaldar en iCloud, elige Apple TV como destino y crea un respaldo cifrado exclusivo, sin configurar un PIN.",
            "Inicia sesión con la misma cuenta de Apple en el Apple TV, abre Restaurar desde iCloud, selecciona el respaldo y restáuralo directamente.",
            "Apple TV solo restaura el respaldo exclusivo para Apple TV. Después, verifica las direcciones de los equipos, los canales y LiveView Mix en la red actual de la televisión."
          ]],
          ["Crear un panel de control con webhook", [
            "En la pestaña LiveView Mix, abre Ajustar el diseño → Organizar el muro, toca un recuadro vacío y, en Contenido, elige Panel.",
            "Elige la plantilla Portón / Cortina metálica, Puerta de garaje, Luz, Cerradura de puerta, Cortina / Persiana, Escena / Automatización, Alarma / Sirena, Ventilador, Enchufe inteligente, Aire acondicionado o Personalizado. Cada botón puede tener su propio ícono, etiqueta y opción Confirmar antes de ejecutar; el panel tiene su propio título y color.",
            "Cada botón puede enviar GET, POST, PUT o DELETE a un endpoint HTTP o HTTPS que tú indiques, con encabezados, Content-Type y cuerpo JSON opcionales."
          ]],
          ["Usar los controles desde el muro de monitoreo", [
            "Toca un botón en iPhone o iPad. En Apple TV, mueve el enfoque con el control remoto y presiona para ejecutarlo. El panel muestra ahí mismo si se está enviando, si funcionó o si falló.",
            "Usa la confirmación para abrir, desbloquear, activar alarmas y otras acciones difíciles de revertir, y expón solo endpoints de alcance limitado para el fin que necesitas.",
            "La configuración compatible del panel de control se incluye en los respaldos cifrados. Tú sigues siendo responsable de los endpoints de webhook, las credenciales, el acceso a la red y la seguridad del equipo físico conectado."
          ]],
          ["Botones en el Apple Watch", [
            "Cam Hub en el Apple Watch muestra los botones de los paneles de control configurados en el iPhone enlazado, agrupados bajo los títulos de los paneles, y ejecuta uno con un toque. No muestra video.",
            "El iPhone mantiene la lista actualizada y el reloj guarda su propia copia, así que la lista se abre aunque la app del iPhone no esté abierta. Los paneles que no cubre tu plan no aparecen."
          ]]
        ], "Aviso de seguridad: los botones de webhook llaman a los endpoints de red que tú indiques. Cam Hub no valida la seguridad de los endpoints, los controles de acceso, las cerraduras, las alarmas ni otros equipos físicos. Restringe los permisos de los endpoints, protege las credenciales y exige confirmación para las acciones difíciles de revertir."]
      ],
      note: "Cam Hub no evade los controles de acceso del equipo. Las funciones varían según el modelo, el firmware, la implementación del protocolo, los permisos de la cuenta, el códec y las condiciones de la red."
    },
    fr: {
      documentTitle: "Cam Hub — Fonctionnalités",
      topline: "Fonctionnalités",
      eyebrow: "FONCTIONNALITÉS DE CAM HUB",
      title: '<span class="page-title-line">Découvrez Cam Hub.</span><span class="page-title-line">Fonction par fonction.</span>',
      summary: "Une présentation détaillée des appareils, de LiveView Mix, de la lecture, du transfert et des réglages tels qu’ils apparaissent dans l’app.",
      wikiLabel: "Accéder à une section",
      wiki: [
        ["devices", "01", "Appareils et canaux", "Connectez d’abord l’appareil, puis choisissez les canaux à afficher dans les vues de surveillance.", [
          ["Préparer les informations de connexion", [
            "Ouvrez Appareils, touchez Ajouter un appareil et accédez à l’écran d’ajout.",
            "Le nom est facultatif. L’adresse IP ou le nom d’hôte et le nom d’utilisateur sont obligatoires. Sous Avancé, les ports par défaut sont 80 pour HTTP et 554 pour RTSP ; ne les modifiez que si l’appareil utilise d’autres ports.",
            "Saisissez le mot de passe et touchez Ajouter. L’app affiche Connexion à l’appareil et, en cas d’échec, distingue les erreurs de connexion, d’identifiants et d’appareil non pris en charge ; elle indique aussi les ports ouverts trouvés à cette adresse.",
            "Si vous ne connaissez pas l’adresse, touchez Analyser dans l’onglet Outils : Cam Hub liste les caméras et enregistreurs qui répondent sur votre réseau, nomme ce qu’il parvient à identifier et remplit pour vous le formulaire Ajouter un appareil.",
            "Là où ces services sont proposés, Ajouter un appareil accepte aussi une diffusion en direct ou une chaîne YouTube, ou une chaîne Twitch. Elle est lue à côté de vos caméras par le lecteur du service lui-même et ne compte jamais dans une formule.",
            "Connectez uniquement des appareils et comptes que vous possédez, administrez ou êtes expressément autorisé à utiliser."
          ]],
          ["Détection automatique, ONVIF et HTTPS", [
            "En règle générale, laissez Se connecter via (sous Avancé) sur Détection automatique. Cam Hub vérifie quels ports répondent, puis essaie de lui-même les protocoles de marque intégrés, ONVIF et les chemins de flux RTSP de nombreuses marques.",
            "Si l’appareil n’est pas reconnu, ou si vous souhaitez un protocole précis, choisissez ONVIF, RTSP ou la marque dans la liste Se connecter via, qui comporte un champ de recherche, puis ajoutez-le de nouveau.",
            "Vous devrez peut-être activer ONVIF et RTSP sur l’appareil et créer un compte ONVIF autorisé à visionner les images ; consultez aussi la référence de compatibilité.",
            "Pour un appareil dont la page web utilise HTTPS, activez Utiliser HTTPS sous Avancé. Cam Hub approuve le certificat présenté par l’appareil et refusera ensuite de se connecter avec un autre (un certificat renouvelé délivré par une autorité de certification publique reste accepté). Un appareil déjà ajouté passe à HTTPS depuis sa page."
          ]],
          ["Organiser les canaux", [
            "Après l’ajout, touchez l’appareil dans Appareils pour ouvrir sa page. La section Caméras liste les canaux déclarés par cet appareil.",
            "Activez les canaux utiles et désactivez les autres. Les canaux d’un enregistreur proposent aussi Mettre la vidéo en pause, qui arrête le flux au lieu de simplement masquer la vignette.",
            "Les canaux hors ligne restent grisés dans Appareils ; l’option Masquer les caméras hors ligne les retire des murs en direct."
          ]],
          ["Consulter et actualiser l’appareil", [
            "La fiche d’informations en haut de la page de l’appareil indique le modèle, l’adresse, les ports, le numéro de série, le micrologiciel et le nombre de canaux ; la flèche à côté masque ou affiche les détails.",
            "Le crayon en haut à droite permet de renommer l’appareil, de changer son nom d’utilisateur et son mot de passe avec Modifier les identifiants (ses caméras et leurs places sur les murs restent inchangées) et d’activer ou de désactiver HTTPS. Tirez vers le bas pour actualiser la liste des canaux.",
            "Le bouton des bandes noires parcourt Par défaut, Agrandir pour remplir et Étirer pour remplir, pour la vue actuelle uniquement ; le bouton Mur plein écran ouvre le mur de canaux de cet appareil."
          ]],
          ["État du disque", [
            "Les enregistreurs et NAS qui indiquent l’état de leurs disques affichent une ligne État du disque sur la page de l’appareil. Un symbole orange ou rouge sur cette ligne reprend le pire verdict du dernier relevé.",
            "Chaque disque affiche un verdict (En bon état, Nécessite de l’attention ou Défaillant), son état, sa capacité, sa température, sa durée de fonctionnement et ses détails S.M.A.R.T. Les températures utilisent l’unité réglée sur votre iPhone ou iPad.",
            "Un NAS partage l’état de ses disques via SNMP, à configurer une seule fois avec Configurer SNMP ; sa page affiche alors aussi les volumes, le processeur, la mémoire, les ports réseau et l’activité des disques. Cam Hub ne fait que lire ces informations et ne modifie rien sur l’appareil."
          ]]
        ]],
        ["mix", "02", "Mur LiveView Mix", "Réunissez des canaux issus de plusieurs caméras et enregistreurs, puis adaptez leur densité à l’écran.", [
          ["Choisir les caméras de LiveView Mix", [
            "Dans l’onglet LiveView Mix, touchez Choisir les caméras, ou ouvrez Réglages → LiveView Mix.",
            "Sélectionnez les canaux par appareil et choisissez SD ou HD pour chacun ; Tout en SD et Tout en HD appliquent une qualité commune à toute la sélection.",
            "L’onglet affiche un aperçu défilant dont vous réglez les colonnes et les rangées avec Disposition, juste en dessous. Touchez Plein écran pour voir le mur dans la disposition choisie."
          ]],
          ["17 dispositions, ou dessinez la vôtre", [
            "Les grilles régulières sont 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6 et 7×7.",
            "Les dispositions avec vue principale sont 1+3, 1+5, 1+7, 1+21 et 1+27 ; le premier canal occupe la grande case.",
            "Avec Dessiner une disposition personnalisée, choisissez de 2 à 8 rangées et colonnes, puis faites glisser le doigt sur des cellules pour les fusionner en cases plus grandes et donner ainsi une grande case aux caméras importantes. Les dispositions de plus de 16 cases s’affichent mieux sur iPad ou Apple TV."
          ]],
          ["Organiser le mur", [
            "Depuis l’onglet LiveView Mix, ouvrez Ajuster la disposition → Organiser le mur. Le canevas montre chaque page du mur telle qu’elle apparaîtra.",
            "Faites glisser une case sur une autre pour les permuter, ou sur une case vide pour l’y déplacer. N’importe quelle case peut être remplie ; les cases qui la précèdent n’ont pas à être remplies d’abord.",
            "Touchez une case vide pour y placer une caméra, y déplacer une autre case (même depuis une autre page du mur) ou la remplir avec une image, un panneau de commande, une horloge ou une étiquette."
          ]],
          ["Page portrait et deux zones", [
            "Activez Page portrait dans Réglages pour obtenir un second mur, affiché lorsque le téléphone est tenu à la verticale, avec ses propres caméras, disposition, panneaux et filigrane. Sur iPad, il s’affiche lorsque l’écran est plus haut que large.",
            "L’onglet et le mur plein écran passent de la page paysage à la page portrait selon l’orientation de l’appareil. Tant que la page portrait est désactivée, un téléphone tenu à la verticale affiche le mur paysage pivoté sur le côté.",
            "Les panneaux de commande, horloges, étiquettes et images peuvent être copiés d’une page à l’autre au lieu d’être recréés.",
            "Sur iPhone Duo, Deux zones divise LiveView Mix au niveau de la charnière en une zone haute et une zone basse lorsque le téléphone est à moitié plié, chacune avec ses propres caméras et panneaux de commande."
          ]],
          ["Trois modes de remplissage", [
            "Par défaut conserve l’image entière et ajoute des bandes noires lorsque les proportions diffèrent.",
            "Agrandir pour remplir conserve les proportions, agrandit l’image pour remplir la case et coupe les bords qui dépassent.",
            "Étirer pour remplir remplit la case sans recadrer mais peut élargir ou comprimer l’image. Réglages → Bandes noires définit le mode de départ des écrans d’appareil ; chaque mur LiveView Mix a son propre réglage Bandes noires sur ce mur, sous Ajuster la disposition.",
            "Réglages → Vidéo bord à bord (activé par défaut) permet à la vidéo plein écran de s’étendre dans la zone de la Dynamic Island et dans les coins arrondis ; désactivez-le pour que l’image les évite."
          ]],
          ["Filigrane personnalisable", [
            "Ouvrez Filigrane, activez Afficher le filigrane, puis choisissez Nom de l’appareil, Nom de la caméra ou Adresse IP.",
            "Réglez la position, l’opacité, la couleur, la taille et la police Système, Arrondie, À chasse fixe ou Serif.",
            "Pour la lisibilité, choisissez Ombre, Contour, Arrière-plan ou Aucun et contrôlez l’aperçu sur fonds clair et sombre."
          ]],
          ["Image, horloge, étiquette et commandes", [
            "Dans Organiser le mur, touchez une case vide, choisissez Image, panneau de commande, horloge ou étiquette…, puis sélectionnez Vide, Image, Panneau, Horloge ou Étiquette sous Contenu.",
            "Image permet de choisir ou prendre une photo ; Horloge règle la date, les secondes et le format 12/24 h ; Étiquette accepte texte, SF Symbol et couleur.",
            "Panneau crée des boutons webhook HTTP à partir des modèles Portail / Volet, Porte de garage, Éclairage, Serrure, Rideau / Store, Scène / Automatisation, Alarme / Sirène, Ventilateur, Prise connectée, Climatisation et Personnalisé. Les actions sensibles, comme l’ouverture ou le déverrouillage, peuvent exiger une confirmation.",
            "Les images et réglages compatibles suivent la sauvegarde chiffrée. La création et la sécurisation des points de terminaison webhook restent sous votre responsabilité."
          ]]
        ]],
        ["viewing", "03", "Direct et enregistrements", "La vue unique privilégie le détail ; les vues multiples permettent d’équilibrer qualité, débit et charge de l’appareil.", [
          ["Qualité en vue unique ou multiple", [
            "Dans Réglages → Qualité par défaut, choisissez séparément HD ou SD pour Une seule caméra et pour Plusieurs caméras. Ces valeurs s’appliquent uniquement aux écrans d’appareil : mur de l’appareil et mur En direct, mur plein écran de l’appareil et caméra ouverte depuis un appareil.",
            "Dans un canal unique, le choix SD/HD apparaît si l’appareil déclare pouvoir basculer entre flux principal et secondaire.",
            "LiveView Mix n’utilise pas ces valeurs : la vue multiple lit chaque canal dans la qualité qui lui est attribuée dans la liste des canaux, un par un ou avec Tout en SD/Tout en HD ; la SD réduit généralement le débit et la charge avec de nombreuses cases.",
            "Une caméra ouverte seule depuis LiveView Mix (plein écran ou gros plan) s’affiche toujours en HD. Le bouton SD/HD à l’écran ne change que cet affichage et ne modifie aucun réglage."
          ]],
          ["Zoom et plein écran en paysage", [
            "Pincez pour agrandir une caméra, puis faites glisser l’image agrandie.",
            "Un double toucher bascule rapidement entre 2,5× et la vue complète.",
            "En orientation paysage, les barres de navigation et de commande disparaissent afin d’utiliser au mieux l’écran."
          ]],
          ["Commande PTZ et conversation bidirectionnelle", [
            "Sur une caméra PTZ, touchez le bouton rond en bas à droite de l’image pour ouvrir le pavé : maintenez une flèche pour orienter la caméra, utilisez plus et moins pour zoomer, et l’étoile pour les positions enregistrées.",
            "Si la caméra le permet, Positionnement 3D vous permet de toucher un point pour orienter la caméra vers lui, ou de tracer un cadre pour zoomer directement sur cette zone.",
            "Sur une caméra autonome équipée d’un haut-parleur, maintenez Parler pour parler et relâchez pour écouter, comme avec un talkie-walkie. Cam Hub demande l’accès au micro la première fois."
          ]],
          ["Instantanés et partage", [
            "Touchez Instantané dans la vue d’un canal pour demander l’image actuelle à l’appareil.",
            "Une fois l’image reçue, Cam Hub ouvre un aperçu. Touchez Partager pour l’envoyer ou l’enregistrer dans Photos.",
            "Touchez le bouton d’enregistrement rouge à côté d’Instantané pour enregistrer ce que montre la vue, en direct ou depuis un enregistrement, jusqu’à 10 minutes. À l’arrêt, Cam Hub affiche l’extrait, que vous pouvez partager ou enregistrer dans Photos.",
            "Un instantané ou un extrait peut contenir des personnes, voix, adresses ou données sensibles ; vérifiez le contenu, le destinataire et les règles locales avant l’envoi."
          ]],
          ["Date, chronologie et types d’enregistrement", [
            "Choisissez une date sous la vue du canal. Sur les appareils qui tiennent un index quotidien, le Calendrier des enregistrements signale les jours qui contiennent de la vidéo.",
            "Les enregistrements basculent entre Continu et Événements. Faites glisser ou zoomez la chronologie jusqu’à ce que le curseur central atteigne l’heure voulue, ou choisissez un segment dans la liste.",
            "La lecture affiche l’indicateur LECTURE et l’heure de l’appareil ; Retour au direct rétablit le flux. Certains appareils téléchargent d’abord la séquence puis l’ouvrent dans le lecteur système."
          ]]
        ], "Avis de disponibilité : le direct, les instantanés, le changement de <span class=\"keep-phrase\">flux principal/secondaire</span>, la recherche, les catégories <span class=\"keep-phrase\">Continu/Événements</span>, la chronologie et la lecture dépendent des capacités déclarées par la caméra ou l’enregistreur et des autorisations accordées au compte de l’appareil."],
        ["backup", "04", "Sauvegarde chiffrée et partage de caméras", "Les sauvegardes iCloud ne demandent aucun PIN, et vous pouvez en conserver plusieurs, chacune avec son nom. Un code de partage peut rester ouvert ou être verrouillé par un PIN à six chiffres ou un mot de passe.", [
          ["Protection locale des mots de passe", [
            "Les mots de passe sont conservés dans le trousseau Apple ; noms, adresses, ports, canaux et réglages restent dans les données de l’appareil.",
            "Cam Hub n’utilise ces informations que pour les connexions, recherches, instantanés, sauvegardes ou transferts que vous demandez.",
            "Supprimer toutes les données efface appareils et mots de passe locaux ; désinstaller l’app peut aussi rendre irrécupérable une configuration non sauvegardée."
          ]],
          ["Plusieurs sauvegardes iCloud nommées", [
            "Dans Réglages → Sauvegarder sur iCloud, choisissez Ma sauvegarde (pour iPhone et iPad) ou Apple TV en haut de la page, saisissez un nom si vous le souhaitez, puis touchez Sauvegarder maintenant. Aucun PIN n’est nécessaire.",
            "Appareils, identifiants, canaux, LiveView Mix et réglages compatibles sont chiffrés avant d’être stockés dans votre propre iCloud.",
            "Chaque nouvelle sauvegarde s’ajoute aux précédentes, la plus récente en premier, et peut être renommée ou supprimée d’un balayage. La destination Apple TV conserve une seule copie."
          ]],
          ["Restaurer depuis iCloud", [
            "Ouvrez Réglages → Restaurer depuis iCloud, choisissez une sauvegarde sous Choisir une sauvegarde, puis touchez Restaurer. Aucun PIN n’est demandé sur iPhone, iPad ou Apple TV.",
            "Utilisez de préférence la même version de l’app et le compte Apple qui contient la sauvegarde ; une ancienne sauvegarde peut devoir être recréée.",
            "La restauration respecte les limites de la formule active. Vérifiez ensuite les adresses, canaux et LiveView Mix sur le réseau actuel."
          ]],
          ["Partager les caméras avec un PIN ou un mot de passe", [
            "Dans Réglages, ouvrez Exporter les caméras (section Partager les caméras), cochez les appareils et créez un code de partage chiffré. Inclure les réglages de l’app ajoute vos pages LiveView Mix et vos panneaux de commande ; le destinataire décide de les utiliser ou non.",
            "Laissez le code ouvert, activez Verrouiller avec un code PIN pour six chiffres, ou activez en plus Chiffrement complexe pour un mot de passe d’au moins 8 caractères. La personne qui importe le code doit saisir ce PIN ou ce mot de passe.",
            "L’importation contient l’appareil et ses identifiants et reste soumise aux limites de la formule de destination. Envoyez le PIN ou le mot de passe séparément du code, et uniquement à une personne de confiance ; ne les publiez jamais dans un chat public, un ticket ou un site web."
          ]]
        ]],
        ["preferences", "05", "Affichage, streaming et données", "Adaptez l’app au réseau et à l’appareil, et gérez séparément les réglages, les données locales et la sauvegarde iCloud lors d’une réinitialisation.", [
          ["Masquer les caméras hors ligne", [
            "Réglages → Masquer les caméras hors ligne les retire du direct et des murs lorsqu’elles n’ont aucun signal.",
            "Elles restent grisées dans la liste des canaux, ne sont donc pas confondues avec des éléments supprimés et réapparaissent au retour du signal."
          ]],
          ["Garder les caméras connectées entre les pages", [
            "Ouvrez Réglages → LiveView Mix et repérez Garder les caméras connectées entre les pages sous Pages ; l’option sert surtout aux appareils dont la reconnexion prend davantage de temps.",
            "Les canaux hors écran restent connectés et reprennent plus vite, au prix d’un usage continu du réseau, de l’énergie et des ressources ; désactivez-la si cette reprise n’est pas nécessaire."
          ]],
          ["Choisir l’écran de démarrage", [
            "Ouvrez Réglages → Ouvrir au lancement, dans la section LiveView Mix.",
            "Dernière consultation revient au choix précédent, LiveView Mix ouvre le mur combiné, LiveView Mix en plein écran ouvre ce mur en plein écran, et le nom d’un appareil ouvre cet appareil.",
            "Si cet appareil est supprimé ou si LiveView Mix n’est pas configuré, l’app ouvre un écran disponible."
          ]],
          ["Formules et caméras visibles", [
            "Réglages → Formules affiche les formules actives de caméras et d’enregistreurs ainsi que leurs limites.",
            "Lorsque tous les canaux ne sont pas déverrouillés, attribuez les places disponibles dans Choisissez les caméras à afficher. Cette liste devient inutile une fois l’app entièrement déverrouillée.",
            "Achats et Restaurer les achats suivent l’état fourni par Apple. Une formule ne modifie ni les protocoles, ni les autorisations, ni la lecture offerte par l’appareil."
          ]],
          ["Réinitialiser et supprimer séparément", [
            "Rétablir les réglages par défaut réinitialise la langue, la qualité, LiveView Mix et les autres préférences, mais conserve les appareils ajoutés.",
            "Supprimer toutes les données efface appareils, caméras et mots de passe du trousseau sans toucher aux sauvegardes iCloud ni aux abonnements.",
            "Supprimer la sauvegarde iCloud efface toutes les sauvegardes chiffrées dans le cloud, y compris la copie Apple TV, sans modifier les appareils ni les réglages sur l’iPhone ou l’iPad utilisé. Pour supprimer une seule sauvegarde, balayez-la plutôt dans la liste des sauvegardes.",
            "Avant toute suppression irréversible, vérifiez la synchronisation iCloud et la restauration de cette version sur l’appareil de destination."
          ]],
          ["Contacter l’équipe de développement", [
            "Sur iPhone et iPad, Contacter l’équipe de développement, la dernière ligne de Réglages, ouvre un e-mail pour signaler un appareil qui ne fonctionne pas comme prévu, ou une fonction de votre appareil que Cam Hub ne propose pas encore.",
            "Écrivez dans la langue de votre choix. Indiquez la marque, le modèle et la version du micrologiciel, mais jamais le mot de passe d’une caméra, un code de partage ni un PIN."
          ]]
        ]],
        ["tv-control", "06", "Apple TV, Apple Watch et commandes webhook", "Affichez le mur sur le téléviseur, ajoutez des boutons de commande HTTP reliés à des points de terminaison que vous administrez, et actionnez-les aussi depuis l’Apple Watch.", [
          ["Surveiller sur Apple TV", [
            "L’app tvOS comprend LiveView Mix, des murs par appareil, la vue plein écran d’une caméra et une chronologie, conçus pour la navigation par focus avec Siri Remote.",
            "Les dispositions denses conviennent aux grands écrans ; caméras et boutons webhook se sélectionnent directement sur le mur.",
            "Streaming, lecture, choix du flux et fonctions de canal dépendent toujours de l’appareil, des autorisations, du codec et du réseau."
          ]],
          ["Transférer les réglages depuis un iPhone ou iPad", [
            "Sur iPhone ou iPad, ouvrez Réglages → Sauvegarder sur iCloud, choisissez Apple TV comme destination et créez une sauvegarde chiffrée dédiée sans PIN.",
            "Connectez le même compte Apple sur Apple TV, ouvrez Restaurer depuis iCloud, sélectionnez la sauvegarde et restaurez-la directement.",
            "Apple TV ne restaure que sa sauvegarde dédiée ; vérifiez ensuite adresses, canaux et LiveView Mix sur le réseau du téléviseur."
          ]],
          ["Créer un panneau de commandes webhook", [
            "Dans l’onglet LiveView Mix, ouvrez Ajuster la disposition → Organiser le mur, touchez une case vide et réglez Contenu sur Panneau.",
            "Choisissez le modèle Portail / Volet, Porte de garage, Éclairage, Serrure, Rideau / Store, Scène / Automatisation, Alarme / Sirène, Ventilateur, Prise connectée, Climatisation ou Personnalisé. Chaque bouton peut avoir sa propre icône, sa propre étiquette et son réglage Confirmer avant d’exécuter ; le panneau a son propre titre et sa propre couleur.",
            "Chaque bouton peut envoyer GET, POST, PUT ou DELETE au point de terminaison HTTP ou HTTPS indiqué, avec en-têtes, Content-Type et corps JSON facultatifs."
          ]],
          ["Exécuter les commandes depuis le mur", [
            "Touchez le bouton sur iPhone ou iPad ; sur Apple TV, placez le focus avec la télécommande et appuyez. La case indique envoi, réussite ou échec.",
            "Exigez une confirmation pour l’ouverture, le déverrouillage, l’alarme et les actions difficiles à annuler, et utilisez des points de terminaison aux droits strictement limités.",
            "Les réglages de commande compatibles suivent les sauvegardes chiffrées. Points de terminaison, identifiants, accès réseau et sécurité des équipements physiques restent sous votre responsabilité."
          ]],
          ["Boutons sur l’Apple Watch", [
            "Cam Hub sur Apple Watch liste les boutons des panneaux de commande configurés sur l’iPhone jumelé, regroupés sous le titre de chaque panneau, et en exécute un d’un simple toucher. Aucune vidéo n’y est affichée.",
            "L’iPhone tient la liste à jour et la montre en conserve sa propre copie : la liste s’ouvre donc même lorsque l’app iPhone n’est pas lancée. Les panneaux hors de votre formule n’apparaissent pas."
          ]]
        ], "Avis de sécurité : les boutons webhook appellent les points de terminaison réseau que vous indiquez. Cam Hub ne valide pas la sécurité des points de terminaison, contrôles d’accès, serrures, alarmes ou autres équipements physiques. Limitez les droits, protégez les identifiants et exigez une confirmation pour toute action difficile à annuler."]
      ],
      note: "Cam Hub ne contourne pas les contrôles d’accès des appareils. Les fonctions varient selon le modèle, le micrologiciel, l’implémentation du protocole, les autorisations du compte, le codec et le réseau."
    },
    sl: {
      documentTitle: "Cam Hub — Funkcije",
      topline: "Funkcije",
      eyebrow: "FUNKCIJE APLIKACIJE CAM HUB",
      title: '<span class="page-title-line">Spoznajte aplikacijo Cam Hub.</span><span class="page-title-line">Funkcijo za funkcijo.</span>',
      summary: "Uporabljajte iste vstopne točke in kontrolnike, kot jih vidite v aplikaciji. Skočite neposredno na dodajanje naprav, LiveView Mix, predvajanje, prenos ali delovanje aplikacije.",
      wikiLabel: "Pojdi na poglavje",
      wiki: [
        ["devices", "01", "Naprave in kanali", "Najprej povežite opremo, nato določite, kateri kanali bodo prikazani na zaslonih za videonadzor.", [
          ["Pripravite podatke za povezavo", [
            "Na zavihku „Naprave“ tapnite „Dodaj napravo“, da se odpre zaslon za dodajanje naprave.",
            "Polje „Ime“ ni obvezno, polji „Naslov IP ali ime gostitelja“ in „Uporabniško ime“ pa sta obvezni. V razdelku „Napredno“ so „Vrata HTTP“ privzeto 80, „Vrata RTSP“ pa 554; spremenite jih samo, če oprema uporablja druga vrata.",
            "Vnesite „Geslo“ in tapnite „Dodaj“. Aplikacija prikaže „Povezovanje z napravo…“, če poskus ne uspe, pa loči med napakami povezave, napakami poverilnic in nepodprto opremo ter navede odprta vrata, ki jih je našla na tem naslovu.",
            "Če naslova ne poznate, na zavihku „Orodja“ tapnite „Preišči“: aplikacija Cam Hub navede kamere in snemalnike, ki se odzovejo v vašem omrežju, prikaže ime naprav, ki jih lahko prepozna, in namesto vas izpolni obrazec „Dodaj napravo“.",
            "Kjer je na voljo, lahko prek „Dodaj napravo“ dodate tudi prenos v živo ali kanal YouTube oziroma kanal Twitch. Predvaja se ob vaših kamerah v predvajalniku storitve same in se nikoli ne šteje v dovoljeno število paketa.",
            "Povezujte se samo z opremo in računi, ki so v vaši lasti, ki jih upravljate ali za uporabo katerih imate izrecno pooblastilo."
          ]],
          ["Samodejno zaznavanje, ONVIF in HTTPS", [
            "Za „Poveži prek“ (v razdelku „Napredno“) običajno pustite „Samodejno zaznavanje“. Aplikacija Cam Hub preveri, katera vrata se odzovejo, nato pa sama preizkusi vgrajene protokole znamk, ONVIF in poti pretokov RTSP številnih znamk.",
            "Če oprema ni najdena ali želite uporabiti določen protokol, na seznamu „Poveži prek“, ki ima polje za iskanje, izberite ONVIF, RTSP ali znamko in opremo dodajte znova.",
            "V nastavitvah opreme boste morda morali omogočiti ONVIF, ustvariti račun ONVIF z dovoljenjem za ogled in omogočiti RTSP. Napotki za povezavo so v razdelku „Pregled združljivosti“.",
            "Za opremo, katere spletna stran uporablja HTTPS, v razdelku „Napredno“ vklopite „Uporabi HTTPS“. Aplikacija Cam Hub zaupa potrdilu, ki ga oprema predloži, in se pozneje ne bo povezala, če bo predloženo drugo potrdilo (obnovljeno potrdilo javnega overitelja potrdil še vedno deluje). Že dodano opremo na HTTPS preklopite na njeni strani."
          ]],
          ["Uredite kanale kamer", [
            "Ko je oprema dodana, jo tapnite na zavihku „Naprave“, da se odpre njena stran. Pod „Kamere“ so navedeni kanali, ki jih sporoča ta oprema.",
            "Omogočite kanale, ki si jih želite ogledovati, in onemogočite tiste, ki jih ne uporabljate. Pri kanalih snemalnika lahko z možnostjo „Začasno ustavi video“ ustavite pretakanje, namesto da bi polje samo skrili.",
            "Kanali brez povezave ostanejo na seznamu na zavihku „Naprave“ zatemnjeni. Če je vklopljena možnost „Skrij kamere brez povezave“, se ne prikažejo na stenah za prikaz v živo."
          ]],
          ["Preglejte in posodobite opremo", [
            "Kartica s podatki na vrhu strani naprave prikazuje model, naslov, vrata, serijsko številko, vdelano programsko opremo in število kanalov; s puščico ob njej podrobnosti skrijete ali prikažete.",
            "S svinčnikom zgoraj desno opremo preimenujete, z ukazom „Uredi poverilnice“ spremenite njeno uporabniško ime in geslo (njene kamere in mesta na stenah ostanejo, kot so) ter vklopite ali izklopite HTTPS. Povlecite navzdol, da osvežite seznam kanalov.",
            "Gumb za črne pasove samo za trenutni prikaz preklaplja med možnostmi „Privzeto“, „Povečaj do zapolnitve“ in „Raztegni na celo polje“. Gumb „Celozaslonska stena“ odpre steno kanalov te opreme."
          ]],
          ["Stanje diskov", [
            "Snemalniki in strežniki NAS, ki sporočajo podatke o svojih diskih, imajo na strani naprave vrstico „Stanje diskov“. Oranžen ali rdeč simbol v vrstici prikazuje najslabšo oceno diska iz zadnje meritve.",
            "Za vsak disk so prikazani ocena („Brez težav“, „Zahteva pozornost“ ali „Pred odpovedjo“), stanje, zmogljivost, temperatura, čas delovanja in podrobnosti S.M.A.R.T. Temperature so prikazane v enoti, ki je nastavljena v napravi iPhone ali iPad.",
            "Strežnik NAS stanje svojih diskov deli prek SNMP, ki ga enkrat nastavite z gumbom „Nastavi SNMP“; njegova stran nato prikazuje tudi nosilce, procesor, pomnilnik, omrežne priključke in dejavnost diskov. Aplikacija Cam Hub te podatke samo bere in v opremi ničesar ne spreminja."
          ]]
        ]],
        ["mix", "02", "Stena LiveView Mix", "Kanale različnih kamer in snemalnikov postavite na en zaslon, nato gostoto prilagodite zaslonu, ki ga uporabljate.", [
          ["Izberite kamere za LiveView Mix", [
            "Na zavihku „LiveView Mix“ tapnite „Izberi kamere“ ali odprite „Nastavitve“ → „LiveView Mix“.",
            "Izberite kanale v razdelku posamezne opreme. Vsak kanal lahko uporablja SD ali HD posebej, z „Vse v SD“ ali „Vse v HD“ pa eno kakovost uporabite za celoten izbor.",
            "Zavihek prikazuje predogled, po katerem se lahko pomikate, njegove stolpce in vrstice pa nastavite z gumbom „Razporeditev“ pod njim. Tapnite „Celoten zaslon“, da si ogledate steno v izbrani postavitvi."
          ]],
          ["17 postavitev ali narišite svojo", [
            "Enakomerne mreže: 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6 in 7×7.",
            "Postavitve s poudarkom: 1+3, 1+5, 1+7, 1+21 in 1+27. Prva kamera zavzame največje, glavno polje.",
            "Z možnostjo „Nariši postavitev po meri“ izberite od 2 do 8 vrstic in stolpcev ter povlecite čez celice, da jih združite v večja polja, tako da pomembne kamere dobijo velika polja. Postavitve z več kot 16 polji so najbolj pregledne v napravi iPad ali Apple TV."
          ]],
          ["Razporedite steno", [
            "Na zavihku „LiveView Mix“ odprite „Prilagodi postavitev“ → „Razporedi steno“. Platno prikazuje vsako stran stene tako, kot bo videti.",
            "Povlecite polje na drugo polje, da ju zamenjate, ali na prazno polje, da ga premaknete tja. Zapolnite lahko katero koli polje; polj pred njim ni treba najprej zapolniti.",
            "Tapnite prazno polje, da vanj postavite kamero, premaknete vanj drugo polje (tudi z druge strani stene) ali ga zapolnite s sliko, nadzorno ploščo, uro ali oznako."
          ]],
          ["Pokončna stran in dve platni", [
            "Na zavihku „Nastavitve“ vklopite „Pokončna stran“, da dobite drugo steno, ki je prikazana, ko telefon držite pokonci; ima svoje kamere, postavitev, plošče in vodni žig. V napravi iPad je prikazana, kadar je zaslon višji, kot je širok.",
            "Zavihek in celozaslonska stena ob zasuku naprave preklopita med ležečo in pokončno stranjo. Dokler je pokončna stran izklopljena, telefon v pokončnem položaju prikazuje ležečo steno, obrnjeno postrani.",
            "Nadzorne plošče, ure, oznake in slike lahko kopirate z ene strani na drugo, namesto da bi jih ustvarjali znova.",
            "V napravi iPhone Duo možnost „Dve platni“ pogled LiveView Mix pri napol prepognjenem telefonu ob tečaju razdeli na zgornje in spodnje platno, vsako s svojimi kamerami in nadzornimi ploščami."
          ]],
          ["Trije načini zapolnitve videa", [
            "„Privzeto“ ohrani celotno sliko in doda črne pasove, kadar se razmerji stranic razlikujeta.",
            "„Povečaj do zapolnitve“ ohrani razmerje stranic in sliko poveča, da zapolni polje, pri čemer odreže robove, ki segajo čezenj.",
            "„Raztegni na celo polje“ zapolni polje brez obrezovanja, vendar lahko sliko razširi ali stisne. „Nastavitve“ → „Črni pasovi“ določa začetni način za zaslone naprav; vsaka stena LiveView Mix ima v razdelku „Prilagodi postavitev“ svojo nastavitev „Črni pasovi na tej steni“.",
            "„Nastavitve“ → „Video od roba do roba“ (privzeto vklopljeno) omogoča, da video na celem zaslonu sega v območje Dynamic Island in v zaobljene vogale; izklopite to možnost, da slika ostane zunaj teh območij."
          ]],
          ["Vodni žigi po meri", [
            "Odprite „Vodni žig“, vklopite „Pokaži vodni žig“ in izberite „Ime naprave“, „Ime kamere“ ali „Naslov IP“.",
            "Prilagodite položaj, neprosojnost, barvo, velikost besedila in pisavo: „Sistem“, „Zaobljena“, „Neproporcionalna“ ali „Serifna“.",
            "Pri možnosti „Berljivost“ so na voljo „Senca“, „Obroba“, „Podlaga“ in „Brez“. S svetlim in temnim predogledom preverite, ali je vodni žig berljiv na dnevnih in nočnih posnetkih."
          ]],
          ["Slike, ure, oznake in nadzorne plošče", [
            "Na strani „Razporedi steno“ tapnite prazno polje, izberite „Slika, nadzorna plošča, ura ali oznaka…“ in pod „Vsebina“ določite „Prazno“, „Slika“, „Nadzorna plošča“, „Ura“ ali „Oznaka“.",
            "„Slika“ lahko uporabi obstoječo ali novo posneto fotografijo. „Ura“ lahko prikaže datum, sekunde in čas v 12- ali 24-urni obliki. „Oznaka“ podpira besedilo po meri, simbol SF Symbol in barvo.",
            "„Nadzorna plošča“ ustvari gumbe za webhook HTTP iz predlog „Dvoriščna vrata / roleta“, „Garažna vrata“, „Luč“, „Vratna ključavnica“, „Zavesa / žaluzija“, „Scena / avtomatizacija“, „Alarm / sirena“, „Ventilator“, „Pametna vtičnica“, „Klimatska naprava“ in „Po meri“. Občutljiva dejanja, kot sta odpiranje ali odklepanje, lahko zahtevajo potrditev.",
            "Podprte nastavitve slik in polj se lahko prenesejo s šifrirano varnostno kopijo. Za ustvarjanje in zaščito vseh končnih točk webhook ste odgovorni sami."
          ]]
        ]],
        ["viewing", "03", "Prikaz v živo in predvajanje posnetkov", "Pri ogledu posamezne kamere imata lahko prednost jasnost slike in upravljanje, pri stenah z več kamerami pa obremenitev naprave in pasovna širina.", [
          ["Kakovost za eno in več kamer", [
            "Odprite „Nastavitve“ → „Privzeta kakovost“ in ločeno nastavite privzeto kakovost HD ali SD za „Posamezna kamera“ in „Več kamer“. Te privzete vrednosti veljajo samo za zaslone naprav: stran naprave in stene na zavihku „V živo“, celozaslonsko steno naprave in posamezno kamero, odprto iz naprave.",
            "Kadar oprema sporoča, da podpira preklop med glavnim in pomožnim pretokom, vrstica s kontrolniki posameznega kanala prikaže izbiri SD in HD.",
            "Pogled LiveView Mix teh privzetih vrednosti ne uporablja: njegova stena z več kamerami vsak kanal predvaja v kakovosti, ki mu je dodeljena na seznamu kanalov, posamično ali z „Vse v SD“ oziroma „Vse v HD“. Nižja kakovost pogosto zmanjša obremenitev omrežja in naprave, kadar se hkrati predvaja veliko polj.",
            "Posamezna kamera, odprta iz pogleda LiveView Mix, na celem zaslonu ali v bližnjem pogledu, se vedno zažene v HD. Gumb SD/HD na zaslonu preklopi kakovost samo za ta ogled in ne spremeni nobene nastavitve."
          ]],
          ["Povečava in ležeči prikaz", [
            "V prikazu posameznega kanala razprite prsta, da sliko povečate, nato povlecite povečano sliko, da si ogledate drug del.",
            "Dvakrat tapnite za takojšnjo 2,5-kratno povečavo in znova dvakrat tapnite za vrnitev na celotno sliko.",
            "Napravo zasukajte v ležeči položaj, da skrijete navigacijo, kontrolnike in vrstico z zavihki, tako da lahko video zavzame čim večji del zaslona."
          ]],
          ["Upravljanje PTZ in dvosmerno govorjenje", [
            "Pri kameri PTZ tapnite okrogli gumb spodaj desno na sliki, da odprete kontrolnik PTZ: pridržite puščico, da kamero obrnete, s plusom in minusom spreminjate povečavo, z zvezdico pa izberete shranjene položaje.",
            "Kjer kamera to podpira, lahko z možnostjo „3D-pozicioniranje“ tapnete točko, da se kamera obrne proti njej, ali narišete okvir, da neposredno povečate to območje.",
            "Pri samostojni kameri z zvočnikom pridržite gumb „Govori“, da govorite, in ga spustite, da poslušate, kot pri voki-tokiju. Aplikacija Cam Hub ob prvi uporabi zaprosi za dostop do mikrofona."
          ]],
          ["Slike in deljenje", [
            "V vrstici s kontrolniki posameznega kanala tapnite „Slika“, da od opreme zahtevate njeno trenutno sliko.",
            "Ko slika prispe, aplikacija Cam Hub odpre predogled. Tapnite „Deli“, da jo pošljete ali shranite v aplikacijo Fotografije.",
            "Tapnite rdeči gumb za snemanje poleg gumba „Slika“, da do 10 minut snemate, kar prikazuje pogled, v živo ali iz posnetka. Ko snemanje ustavite, aplikacija Cam Hub prikaže izrezek, da ga lahko delite ali shranite v aplikacijo Fotografije.",
            "Slika ali izrezek lahko vsebuje osebe, glasove, naslove, časovne žige ali druge občutljive podatke. Pred pošiljanjem preverite vsebino, prejemnika in lokalne predpise."
          ]],
          ["Datum, časovnica in vrste posnetkov", [
            "Pod prikazom kanala izberite datum. Pri opremi, ki vodi dnevni indeks posnetkov, „Koledar posnetkov“ označuje dneve s posnetki.",
            "Posnetke lahko preklapljate med „Neprekinjeno“ in „Dogodki“. Časovnico vlecite ali povečujte, dokler sredinski kazalec ne doseže želenega časa, ali izberite odsek na seznamu.",
            "Med predvajanjem sta prikazana napis PREDVAJANJE in čas opreme. Tapnite „Nazaj v živo“, da se vrnete na pretok v živo. Nekatera oprema izrezek najprej prenese in ga nato odpre v sistemskem predvajalniku."
          ]]
        ], "Obvestilo o razpoložljivosti: pretakanje v živo, slike, <span class=\"keep-phrase\">izbira glavnega/pomožnega pretoka</span>, iskanje posnetkov, <span class=\"keep-phrase\">razvrščanje na neprekinjeno/dogodke</span>, pomikanje po časovnici in predvajanje so odvisni od zmožnosti, ki jih kamera ali snemalnik dejansko sporoča, in od dovoljenj prijavljenega računa opreme."],
        ["backup", "04", "Šifrirana varnostna kopija in deljenje kamer", "Varnostne kopije v iCloudu ne potrebujejo kode PIN, hranite pa lahko več poimenovanih kopij. Koda za deljenje lahko ostane odprta ali pa jo zaklenete s šestmestno kodo PIN ali geslom.", [
          ["Lokalna zaščita gesel", [
            "Ko je oprema dodana, se njeno geslo shrani v obesek za ključe (Apple Keychain). Ime opreme, naslov, vrata, kanali in nastavitve aplikacije ostanejo med podatki naprave.",
            "Aplikacija Cam Hub te podatke uporablja samo za povezave, iskanje posnetkov, slike, varnostne kopije in prenose, ki jih zahtevate.",
            "„Izbriši vse podatke“ odstrani lokalne podatke o opremi in shranjena gesla. Z odstranitvijo aplikacije lahko nastavitve, ki niso bile nikoli varnostno kopirane, prav tako postanejo nepovratno izgubljene."
          ]],
          ["Več poimenovanih varnostnih kopij v iCloudu", [
            "Odprite „Nastavitve“ → „Varnostno kopiraj v iCloud“, na vrhu strani izberite „Moja varnostna kopija“ (za iPhone in iPad) ali Apple TV, po želji vnesite ime in tapnite „Varnostno kopiraj zdaj“. Koda PIN ni potrebna.",
            "Varnostna kopija vključuje podprto opremo, poverilnice, kanale, nastavitve pogleda LiveView Mix in nastavitve aplikacije. Aplikacija Cam Hub jo šifrira, preden jo shrani v vaš zasebni iCloud.",
            "Vsaka nova varnostna kopija se ohrani poleg prejšnjih (najnovejša je na vrhu); s podrsanjem jo lahko preimenujete ali izbrišete. Cilj Apple TV hrani eno kopijo."
          ]],
          ["Obnovitev iz iClouda", [
            "Odprite „Nastavitve“ → „Obnovi iz iClouda“, pod „Izberite varnostno kopijo“ označite eno od kopij in tapnite „Obnovi“. Naprave iPhone, iPad in Apple TV ne zahtevajo preverjanja kode PIN.",
            "Po možnosti uporabite isto različico aplikacije in preverite, ali ste prijavljeni z računom Apple Account, v katerem je varnostna kopija. Varnostne kopije iz starejše različice bo morda treba ustvariti znova, preden se prikažejo.",
            "Za obnovitev veljajo omejitve trenutnega paketa. Nato preverite vse naslove opreme, kanale in pogled LiveView Mix glede na trenutno omrežje."
          ]],
          ["Deljenje kamer s kodo PIN ali geslom", [
            "Na zavihku „Nastavitve“ odprite „Izvozi kamere“ (v razdelku „Deli kamere“), označite naprave in ustvarite šifrirano kodo za deljenje. Možnost „Vključi nastavitve aplikacije“ doda vaše strani LiveView Mix in nadzorne plošče; prejemnik se odloči, ali jih bo uporabil.",
            "Kodo pustite odprto, vklopite „Zakleni s kodo PIN“ za šest števk ali vklopite še „Kompleksno šifriranje“ za geslo z vsaj 8 znaki. Kdor kodo uvozi, mora vnesti to kodo PIN ali geslo.",
            "Uvoz vključuje opremo in poverilnice, zanj pa veljajo omejitve paketa v ciljni napravi. Kodo PIN ali geslo pošljite ločeno od kode in samo zaupanja vrednemu prejemniku; nikoli jih ne objavite v javnem klepetu, zahtevku za podporo ali na spletnem mestu."
          ]]
        ]],
        ["preferences", "05", "Prikaz, pretakanje in upravljanje podatkov", "Delovanje aplikacije prilagodite svojemu omrežju in napravi, pri ponastavitvi pa nastavitve, lokalne podatke in varnostno kopijo iCloud obravnavajte ločeno.", [
          ["Skrivanje kamer brez povezave", [
            "Vklopite „Nastavitve“ → „Skrij kamere brez povezave“, da kamere brez signala izginejo z zavihka „V živo“ in s sten za prikaz v živo.",
            "Na seznamu kanalov na zavihku „Naprave“ ostanejo zatemnjene, zato jih ne zamenjate z izbrisanimi kamerami, ko se signal vrne, pa se lahko znova prikažejo."
          ]],
          ["Ohranjanje povezave s kamerami ob menjavi strani", [
            "Odprite „Nastavitve“ → „LiveView Mix“ in pod „Strani“ poiščite „Ohrani povezavo s kamerami ob menjavi strani“; to je najpomembnejše pri opremi, ki se dlje časa znova povezuje.",
            "Ko je možnost vklopljena, kanali ostanejo povezani, tudi ko se pomaknete stran od njih, in se ob vrnitvi hitreje nadaljujejo. To nenehno porablja omrežje, energijo in sistemske vire, zato možnost pustite izklopljeno, če takojšnje nadaljevanje ni potrebno."
          ]],
          ["Izberite, kaj se odpre ob zagonu", [
            "Odprite „Nastavitve“ → „Odpri ob zagonu“ v razdelku „LiveView Mix“.",
            "„Nazadnje ogledano“ se vrne na prejšnjo izbiro, „LiveView Mix“ odpre skupno steno za vso opremo, „LiveView Mix na celem zaslonu“ odpre to steno na celem zaslonu, vnos posamezne opreme pa odpre to napravo.",
            "Če je bila izbrana oprema izbrisana ali pogled LiveView Mix ni nastavljen, se aplikacija vrne na razpoložljiv zaslon, namesto da bi ohranila neveljaven cilj."
          ]],
          ["Paketi in prikazane kamere", [
            "„Nastavitve“ → „Paketi“ prikazuje trenutni paket za kamere in snemalnike ter njegove omejitve uporabe.",
            "Kadar niso odklenjeni vsi kanali, z „Izberi prikazane kamere“ dodelite razpoložljiva mesta. Ko je aplikacija v celoti odklenjena, seznam ni potreben.",
            "Nakupi in „Obnovi nakupe“ sledijo stanju, ki ga posreduje Apple. Paket ne spremeni protokolov, dovoljenj ali funkcij predvajanja, ki jih zagotavlja kamera sama."
          ]],
          ["Ločena ponastavitev in izbris", [
            "„Obnovi privzete nastavitve“ ponastavi jezik, kakovost, LiveView Mix in druge nastavitve, dodana oprema pa ostane.",
            "„Izbriši vse podatke“ odstrani lokalno opremo, kamere in gesla v obesku za ključe. To ne vpliva na varnostne kopije iCloud ali naročnine.",
            "„Izbriši varnostno kopijo iCloud“ odstrani vse šifrirane varnostne kopije v oblaku, vključno s kopijo za Apple TV, oprema in nastavitve v trenutni napravi pa ostanejo nespremenjene. Če želite izbrisati posamezno varnostno kopijo, jo namesto tega podrsajte na seznamu varnostnih kopij.",
            "Pred nepovratnim izbrisom preverite, ali se je iCloud sinhroniziral in ali je različico varnostne kopije mogoče obnoviti v ciljni napravi."
          ]],
          ["Stik z razvojno ekipo", [
            "V napravah iPhone in iPad z zadnjo vrstico zavihka „Nastavitve“, „Stik z razvojno ekipo“, začnete e-poštno sporočilo o opremi, ki ne deluje, kot bi morala, ali o funkciji vaše opreme, ki je aplikacija Cam Hub še ne ponuja.",
            "Pišite v jeziku, ki vam najbolj ustreza. Navedite znamko, model in različico vdelane programske opreme, nikoli pa gesla kamere, kode za deljenje ali kode PIN."
          ]]
        ]],
        ["tv-control", "06", "Apple TV, Apple Watch in upravljanje prek webhookov", "Steno za videonadzor prenesite na televizor, dodajte gumbe za upravljanje HTTP, ki se povezujejo s končnimi točkami, ki jih upravljate, in jih pritiskajte tudi na uri Apple Watch.", [
          ["Videonadzor v napravi Apple TV", [
            "Aplikacija za tvOS vključuje LiveView Mix, stene kamer posamezne opreme, celozaslonski ogled posamezne kamere in časovnico posnetkov, vse zasnovano za upravljanje s fokusom z upravljalnikom Siri Remote.",
            "Goste postavitve so primerne za velik zaslon. Kamere in gumbe za webhook lahko izberete neposredno na steni, ne da bi prej zapustili trenutni pogled.",
            "Pretakanje v živo, predvajanje, izbira glavnega/pomožnega pretoka in funkcije kanalov so še vedno odvisni od zmožnosti, ki jih sporoča oprema, dovoljenj računa, kodeka in razmer v omrežju."
          ]],
          ["Prenos nastavitev iz naprave iPhone ali iPad", [
            "V napravi iPhone ali iPad odprite „Nastavitve“ → „Varnostno kopiraj v iCloud“, kot cilj izberite Apple TV in ustvarite namensko šifrirano varnostno kopijo, ne da bi nastavili kodo PIN.",
            "V napravi Apple TV se prijavite z istim računom Apple Account, odprite „Obnovi iz iClouda“, izberite varnostno kopijo in jo neposredno obnovite.",
            "Apple TV obnovi samo namensko varnostno kopijo za Apple TV. Nato preverite naslove opreme, kanale in pogled LiveView Mix glede na trenutno omrežje televizorja."
          ]],
          ["Ustvarite nadzorno ploščo z gumbi za webhook", [
            "Na zavihku „LiveView Mix“ odprite „Prilagodi postavitev“ → „Razporedi steno“, tapnite prazno polje in pod „Vsebina“ izberite „Nadzorna plošča“.",
            "Izberite predlogo „Dvoriščna vrata / roleta“, „Garažna vrata“, „Luč“, „Vratna ključavnica“, „Zavesa / žaluzija“, „Scena / avtomatizacija“, „Alarm / sirena“, „Ventilator“, „Pametna vtičnica“, „Klimatska naprava“ ali „Po meri“. Vsak gumb ima lahko svojo ikono, oznako in nastavitev „Potrditev pred sprožitvijo“; plošča ima svoj naslov in barvo.",
            "Vsak gumb lahko pošlje GET, POST, PUT ali DELETE na končno točko HTTP ali HTTPS, ki jo določite, z neobveznimi glavami, Content-Type in telesom JSON."
          ]],
          ["Gumbi na steni za videonadzor", [
            "V napravi iPhone ali iPad tapnite gumb. V napravi Apple TV premaknite fokus z upravljalnikom in pritisnite, da ga sprožite. Plošča na mestu prikaže pošiljanje, uspeh ali neuspeh.",
            "Za odpiranje, odklepanje, alarm in druga dejanja, ki jih je težko razveljaviti, uporabite potrditev, končnim točkam pa dodelite samo ozko omejena dovoljenja, ki jih namen zahteva.",
            "Podprte nastavitve nadzornih plošč se prenesejo s šifriranimi varnostnimi kopijami. Za končne točke webhook, poverilnice, omrežni dostop in varnost povezane fizične opreme ste odgovorni sami."
          ]],
          ["Gumbi na uri Apple Watch", [
            "Aplikacija Cam Hub na uri Apple Watch prikaže gumbe nadzornih plošč, nastavljenih v seznanjenem iPhonu, razvrščene pod naslovi plošč; gumb sprožite s tapom. Video ni prikazan.",
            "Seznam sproti posodablja iPhone, ura pa hrani svojo kopijo, zato se seznam odpre, tudi ko aplikacija v iPhonu ni zagnana. Plošče, ki niso vključene v vaš paket, niso prikazane."
          ]]
        ], "Varnostno obvestilo: gumbi za webhook kličejo omrežne končne točke, ki jih določite. Aplikacija Cam Hub ne preverja varnosti končnih točk, nadzora dostopa, ključavnic, alarmov ali druge fizične opreme. Omejite dovoljenja končnih točk, zaščitite poverilnice in za dejanja, ki jih je težko razveljaviti, zahtevajte potrditev."]
      ],
      note: "Aplikacija Cam Hub ne zaobhaja nadzora dostopa do opreme. Funkcije se razlikujejo glede na model, vdelano programsko opremo, izvedbo protokola, dovoljenja računa, kodek in razmere v omrežju."
    },
    ar: {
      documentTitle: "Cam Hub — الميزات",
      topline: "الميزات",
      eyebrow: "ميزات CAM HUB",
      title: '<span class="page-title-line">تعرّف على Cam Hub.</span><span class="page-title-line">ميزة بعد أخرى.</span>',
      summary: "شرح مفصل للأجهزة وLiveView Mix والتسجيلات والنقل والإعدادات وفق العناصر الفعلية داخل التطبيق.",
      wikiLabel: "الانتقال إلى قسم",
      wiki: [
        ["devices", "01", "الأجهزة والقنوات", "صِل الجهاز أولاً، ثم اختر القنوات التي تريد عرضها في شاشات المراقبة.", [
          ["تجهيز معلومات الاتصال", [
            "افتح «الأجهزة» واضغط «إضافة جهاز».",
            "الاسم اختياري، بينما يلزم عنوان IP أو اسم المضيف واسم المستخدم. ضمن «متقدّم» يكون المنفذ الافتراضي في «منفذ HTTP» هو 80 وفي «منفذ RTSP» هو 554؛ ولا تغيّرهما إلا إذا كان الجهاز يستخدم منافذ أخرى.",
            "أدخل كلمة المرور واضغط «إضافة». يعرض التطبيق «جارٍ الاتصال بالجهاز»، وإذا فشلت المحاولة يميّز بين أخطاء الاتصال وبيانات الاعتماد والجهاز غير المدعوم، ويسرد أيضاً المنافذ المفتوحة التي عثر عليها في ذلك العنوان.",
            "إذا كنت لا تعرف العنوان، فاضغط «فحص» في علامة التبويب «الأدوات»: يسرد Cam Hub الكاميرات والمسجّلات التي تستجيب على شبكتك، ويسمّي ما يستطيع التعرّف عليه، ويملأ نموذج «إضافة جهاز» نيابةً عنك.",
            "وحيثما يتوفر ذلك، تقبل «إضافة جهاز» أيضاً بثاً مباشراً أو قناة على YouTube، أو قناة على Twitch. ويُعرض بجانب كاميراتك في مشغّل الخدمة نفسها، ولا يُحتسب ضمن أي خطة أبداً.",
            "لا تتصل إلا بجهاز أو حساب تملكه أو تديره أو لديك إذن صريح باستخدامه."
          ]],
          ["الكشف التلقائي وONVIF وHTTPS", [
            "اترك عادةً «طريقة الاتصال» (ضمن «متقدّم») على «كشف تلقائي». يتحقق Cam Hub من المنافذ التي تستجيب، ثم يجرّب بنفسه بروتوكولات العلامات التجارية المدمجة وONVIF ومسارات بث RTSP لعلامات تجارية كثيرة.",
            "إذا لم يُعثر على الجهاز، أو أردت بروتوكولاً معيناً، فاختر ONVIF أو RTSP أو العلامة التجارية من قائمة «طريقة الاتصال»، وفيها حقل بحث، ثم أضف الجهاز من جديد.",
            "قد يلزم تفعيل ONVIF وRTSP وإنشاء حساب ONVIF يملك إذن المشاهدة؛ راجع مرجع التوافق أيضاً.",
            "إذا كانت صفحة الويب الخاصة بالجهاز تستخدم HTTPS، ففعّل «استخدام HTTPS» ضمن «متقدّم». يثق Cam Hub بالشهادة التي يقدّمها الجهاز، ولن يتصل لاحقاً إذا قُدّمت شهادة مختلفة (وتبقى الشهادة المجدَّدة الصادرة عن جهة إصدار شهادات عامة صالحة). أما الجهاز المضاف مسبقاً فيُحوَّل إلى HTTPS من صفحته."
          ]],
          ["تنظيم القنوات", [
            "بعد إضافة الجهاز، اضغط عليه في «الأجهزة» لفتح صفحته. ويسرد قسم «الكاميرات» القنوات التي يبلغ عنها الجهاز.",
            "فعّل القنوات المطلوبة وعطّل البقية. ويمكن لقنوات المسجّلات أيضاً استخدام «إيقاف الفيديو مؤقتًا» لإيقاف البث بدلاً من إخفاء المربّع فقط.",
            "تبقى القنوات غير المتصلة باهتة في صفحة الأجهزة؛ ويزيلها خيار إخفاء الكاميرات غير المتصلة من جدران البث المباشر."
          ]],
          ["عرض معلومات الجهاز وتحديثها", [
            "تعرض بطاقة المعلومات أعلى صفحة الجهاز الطراز والعنوان والمنافذ والرقم التسلسلي والبرنامج الثابت وعدد القنوات؛ ويُخفي السهم المجاور لها التفاصيل أو يُظهرها.",
            "يتيح القلم في الزاوية العلوية اليسرى إعادة تسمية الجهاز، وتغيير اسم المستخدم وكلمة المرور عبر «تعديل بيانات الاعتماد» (مع بقاء كاميراته ومواضعها على الجدران كما هي)، وتشغيل HTTPS أو إيقافه. اسحب لأسفل لتحديث قائمة القنوات.",
            "يبدّل زر الأشرطة السوداء بين «افتراضي» و«تكبير للملء» و«تمديد للملء» للعرض الحالي فقط، ويفتح زر «جدار ملء الشاشة» جدار قنوات الجهاز."
          ]],
          ["صحة القرص", [
            "تعرض المسجّلات وأجهزة NAS التي تبلغ عن أقراصها صف «صحة القرص» في صفحة الجهاز. ويكرّر الرمز البرتقالي أو الأحمر على الصف أسوأ تقييم للأقراص في آخر قراءة.",
            "يعرض كل قرص تقييماً («سليم» أو «يحتاج إلى انتباه» أو «يوشك على التعطل»)، وحالته وسعته ودرجة حرارته ومدة تشغيله وتفاصيل S.M.A.R.T. وتظهر درجات الحرارة بالوحدة المضبوطة على iPhone أو iPad.",
            "يشارك جهاز NAS صحة أقراصه عبر SNMP، الذي يُضبط مرة واحدة من «إعداد SNMP»؛ وبعدها تعرض صفحته أيضاً وحدات التخزين والمعالج والذاكرة ومنافذ الشبكة ونشاط الأقراص. يكتفي Cam Hub بقراءة هذه المعلومات ولا يغيّر شيئاً في الجهاز."
          ]]
        ]],
        ["mix", "02", "جدار LiveView Mix", "اجمع قنوات من كاميرات ومسجّلات مختلفة في شاشة واحدة واضبط كثافتها حسب حجم العرض.", [
          ["اختيار كاميرات LiveView Mix", [
            "في علامة التبويب LiveView Mix، اضغط «اختيار الكاميرات»، أو افتح «الإعدادات» ← LiveView Mix.",
            "اختر القنوات ضمن كل جهاز وحدد SD أو HD لكل قناة، أو طبّق «الكل SD» و«الكل HD».",
            "تعرض علامة التبويب معاينة قابلة للتمرير، ويمكنك ضبط أعمدتها وصفوفها من «الترتيب» أسفلها. اضغط «ملء الشاشة» لرؤية الجدار بالتخطيط الذي اخترته."
          ]],
          ["17 تخطيطاً، أو ارسم تخطيطك بنفسك", [
            "الشبكات المتساوية هي 2×2 و2×3 و3×3 و3×4 و4×4 و5×4 و6×4 و5×5 و7×4 و6×5 و6×6 و7×7.",
            "تخطيطات المشهد الرئيسي هي 1+3 و1+5 و1+7 و1+21 و1+27، وتوضع القناة الأولى في المربّع الكبير.",
            "باستخدام «رسم تخطيط مخصّص»، اختر من 2 إلى 8 صفوف وأعمدة واسحب عبر الخلايا لدمجها في مربّعات أكبر، فتحصل الكاميرات المهمة على مربّعات كبيرة. ويُفضَّل عرض التخطيطات التي تتجاوز 16 مربّعاً على iPad أو Apple TV."
          ]],
          ["ترتيب الجدار", [
            "افتح «تعديل التخطيط» ← «ترتيب الجدار» من علامة التبويب LiveView Mix. وتعرض منطقة الترتيب كل صفحة من صفحات الجدار كما ستبدو.",
            "اسحب مربّعاً فوق آخر لتبديلهما، أو إلى مربّع فارغ لنقله إليه. ويمكن ملء أي مربّع دون الحاجة إلى ملء المربّعات التي تسبقه أولاً.",
            "اضغط مربّعاً فارغاً لوضع كاميرا فيه، أو لنقل مربّع آخر إليه (حتى من صفحة أخرى في الجدار)، أو لملئه بصورة أو لوحة تحكم أو ساعة أو تسمية."
          ]],
          ["الصفحة العمودية والمساحتان", [
            "فعّل «الصفحة العمودية» في «الإعدادات» للحصول على جدار ثانٍ يظهر عندما يكون الهاتف في الوضع العمودي، بكاميراته وتخطيطه ولوحاته وعلامته المائية الخاصة. وعلى iPad يظهر عندما يكون ارتفاع الشاشة أكبر من عرضها.",
            "تتبدّل علامة التبويب والجدار بملء الشاشة بين الصفحة الأفقية والصفحة العمودية عند تدوير الجهاز. وما دامت الصفحة العمودية متوقفة، يعرض الهاتف الممسَك عمودياً الجدار الأفقي مُداراً على جانبه.",
            "يمكن نسخ لوحات التحكم والساعات والتسميات والصور من صفحة إلى الأخرى بدلاً من إنشائها من جديد.",
            "على iPhone Duo، يقسم خيار «مساحتان» LiveView Mix عند المفصلة إلى مساحة علوية وأخرى سفلية ما دام الهاتف مطوياً جزئياً، لكل منهما كاميراتها ولوحات التحكم الخاصة بها."
          ]],
          ["ثلاثة أوضاع لملء الصورة", [
            "يحافظ «افتراضي» على الصورة كاملة ويضيف أشرطة سوداء عند اختلاف النسب.",
            "يحافظ «تكبير للملء» على النسبة ويكبّر الصورة حتى تملأ المربّع مع اقتطاع الأطراف.",
            "يملأ «تمديد للملء» المربّع دون قص لكنه قد يوسّع الصورة أو يضغطها. ويحدد «الإعدادات» ← «الأشرطة السوداء» الوضع الابتدائي لشاشات الأجهزة؛ ولكل جدار في LiveView Mix خيار «الأشرطة السوداء في هذا الجدار» الخاص به ضمن «تعديل التخطيط».",
            "يتيح «الإعدادات» ← «فيديو حتى حواف الشاشة» (مفعّل افتراضياً) للفيديو بملء الشاشة أن يمتد إلى منطقة الجزيرة الديناميكية والزوايا المستديرة؛ أوقفه لإبقاء الصورة بعيدة عنها."
          ]],
          ["علامة مائية قابلة للتخصيص", [
            "فعّل «عرض العلامة المائية» واختر اسم الجهاز واسم الكاميرا وعنوان IP.",
            "اضبط الموضع والعتامة واللون وحجم النص والخط: «النظام» أو «مستدير» أو «ثابت العرض» أو «مذيّل».",
            "اختر من «وضوح القراءة» «ظل» أو «حدود» أو «الخلفية» أو «بلا»، وافحص المعاينة على خلفية فاتحة وأخرى داكنة."
          ]],
          ["صورة وساعة وتسمية ولوحة تحكم", [
            "في «ترتيب الجدار»، اضغط مربّعاً فارغاً واختر «صورة أو لوحة تحكم أو ساعة أو تسمية…»، ثم اختر «فارغ» أو «صورة» أو «لوحة تحكم» أو «الساعة» أو «تسمية» من «المحتوى المعروض».",
            "تتيح «صورة» الاختيار أو التصوير، وتضبط «الساعة» التاريخ والثواني ونظام 12/24 ساعة، وتدعم «تسمية» النص وSF Symbol واللون.",
            "تنشئ «لوحة تحكم» أزرار Webhook للبوابة والمرأب والإضاءة والقفل والستارة والمشهد والإنذار والمروحة والمقبس والتكييف أو قالب مخصص، مع إمكانية طلب التأكيد.",
            "تنتقل الصور والإعدادات المدعومة مع النسخة المشفرة؛ وتبقى مسؤولاً عن إنشاء نقاط Webhook وحمايتها."
          ]]
        ]],
        ["viewing", "03", "البث المباشر والتسجيلات", "تعطي الشاشة المنفردة أولوية للتفاصيل، وتوازن الشاشات المتعددة بين الجودة وعرض النطاق وحمل الجهاز.", [
          ["جودة العرض المنفرد والمتعدد", [
            "اضبط HD أو SD بصورة منفصلة لـ«كاميرا واحدة» و«كاميرات متعددة» من «الإعدادات» ← «الجودة الافتراضية». تنطبق هذه القيم على شاشات الأجهزة فقط: جدار الجهاز وجدار «مباشر»، وجدار الجهاز بملء الشاشة، والكاميرا المفتوحة من جهاز.",
            "يظهر اختيار SD/HD في القناة المنفردة إذا أبلغ الجهاز عن دعم التبديل بين البث الرئيسي والفرعي.",
            "لا يستخدم LiveView Mix هذه القيم: يعرض العرض المتعدد كل قناة بالجودة المحددة لها في قائمة القنوات، واحدة تلو الأخرى أو عبر «الكل SD» أو «الكل HD»؛ وتخفف SD عادة استهلاك الشبكة والموارد عند تشغيل مربّعات كثيرة.",
            "عند فتح كاميرا واحدة من LiveView Mix (ملء الشاشة أو التكبير) تُعرض دائمًا بدقة HD. زر SD/HD على الشاشة يبدّل لهذا العرض فقط ولا يغيّر أي إعداد."
          ]],
          ["التكبير وملء الشاشة أفقياً", [
            "استخدم إصبعين لتكبير الكاميرا واسحب الصورة المكبرة.",
            "يبدّل النقر المزدوج سريعاً بين تكبير 2.5× والصورة الكاملة.",
            "عند تدوير الجهاز أفقياً تختفي أشرطة التنقل والتحكم للاستفادة من الشاشة."
          ]],
          ["التحكم في PTZ والتحدث باتجاهين", [
            "في كاميرا PTZ، اضغط الزر المستدير في الزاوية السفلية اليسرى من الصورة لفتح لوحة PTZ: اضغط مع الاستمرار على سهم لتدوير الكاميرا، واستخدم الزائد والناقص للتكبير والتصغير، والنجمة للمواضع المحفوظة.",
            "وحيثما تدعمه الكاميرا، يتيح «التموضع ثلاثي الأبعاد» الضغط على نقطة لتوجيه الكاميرا نحوها، أو رسم إطار حول منطقة للتكبير عليها مباشرةً.",
            "في الكاميرا المستقلة المزوّدة بمكبّر صوت، اضغط مع الاستمرار على «تحدّث» للتحدث، وارفع إصبعك للاستماع، كما في جهاز اللاسلكي. ويطلب Cam Hub الوصول إلى الميكروفون في المرة الأولى."
          ]],
          ["اللقطات والمشاركة", [
            "اضغط «لقطة» في شاشة القناة لطلب الصورة الحالية من الجهاز.",
            "بعد وصول الصورة، يفتح Cam Hub معاينة. اضغط «مشاركة» لإرسالها أو حفظها في مكتبة الصور.",
            "اضغط زر التسجيل الأحمر بجانب «لقطة» لتسجيل ما يظهر في العرض، مباشرةً أو من تسجيل، لمدة تصل إلى 10 دقائق. وعند الإيقاف يعرض Cam Hub المقطع لتتمكن من مشاركته أو حفظه في مكتبة الصور.",
            "قد تتضمن اللقطة أو المقطع أشخاصاً أو أصواتاً أو عناوين أو بيانات حساسة؛ راجع المحتوى والمستلم والقوانين المحلية قبل الإرسال."
          ]],
          ["التاريخ والخط الزمني وأنواع التسجيل", [
            "اختر تاريخاً أسفل عرض القناة. وفي الأجهزة التي تحتفظ بفهرس يومي، يميّز «تقويم التسجيلات» الأيام التي فيها فيديو.",
            "بدّل بين «تسجيل مستمر» و«الأحداث»، واسحب الخط الزمني أو كبّره إلى الوقت المطلوب، أو اضغط مقطعاً مباشرة.",
            "تعرض شاشة التشغيل كلمة «مُسجَّل» ووقت الجهاز؛ ويعيد «العودة إلى البث المباشر» البث. تنزّل بعض الأجهزة المقطع أولاً ثم تفتحه في مشغل النظام."
          ]]
        ], "تنبيه التوفر: يعتمد البث واللقطات وتبديل البث الرئيسي/الفرعي والبحث وتصنيف «تسجيل مستمر» و«الأحداث» والخط الزمني والتشغيل على القدرات التي ترسلها الكاميرا أو المسجّل وعلى الصلاحيات الممنوحة للحساب."],
        ["backup", "04", "النسخ المشفرة ومشاركة الكاميرات", "لا تحتاج نسخ iCloud الاحتياطية إلى رمز PIN، ويمكنك الاحتفاظ بعدة نسخ مسمّاة. ويمكن ترك رمز المشاركة مفتوحاً أو قفله برمز PIN من ستة أرقام أو بكلمة مرور.", [
          ["حماية كلمات المرور محلياً", [
            "تُحفظ كلمات المرور في سلسلة مفاتيح Apple، بينما تبقى الأسماء والعناوين والمنافذ والقنوات والإعدادات في بيانات الجهاز.",
            "يستخدم Cam Hub المعلومات فقط للاتصال أو البحث أو اللقطات أو النسخ أو النقل الذي تطلبه.",
            "يمسح «حذف كل البيانات» الأجهزة وكلمات المرور المحلية؛ وقد تجعل إزالة التطبيق إعداداً غير منسوخ غير قابل للاسترداد."
          ]],
          ["عدة نسخ احتياطية مسمّاة في iCloud", [
            "افتح «الإعدادات» ← «نسخ احتياطي إلى iCloud»، واختر «نسختي الاحتياطية» (لـ iPhone وiPad) أو Apple TV أعلى الصفحة، وأدخل اسماً إن شئت، ثم اضغط «نسخ احتياطي الآن». لا حاجة إلى رمز PIN.",
            "تُشفر الأجهزة وبيانات الاعتماد والقنوات وLiveView Mix والإعدادات المدعومة قبل حفظها في iCloud الخاص بك.",
            "تُحفظ كل نسخة احتياطية جديدة إلى جانب النسخ السابقة، والأحدث أولاً، ويمكن إعادة تسميتها أو حذفها بالسحب. أما الوجهة Apple TV فتحتفظ بنسخة واحدة."
          ]],
          ["الاستعادة من iCloud", [
            "افتح «الإعدادات» ← «الاستعادة من iCloud»، واختر نسخة ضمن «اختر نسخة احتياطية»، ثم اضغط «استعادة». لا يطلب iPhone أو iPad أو Apple TV التحقق من رمز PIN.",
            "يُفضّل استخدام إصدار التطبيق نفسه وحساب Apple الذي يحوي النسخة؛ وقد يلزم إنشاء نسخة أحدث من البيانات القديمة.",
            "تلتزم الاستعادة بحدود الخطة الحالية. راجع بعدها العناوين والقنوات وLiveView Mix على الشبكة الجديدة."
          ]],
          ["مشاركة الكاميرات برمز PIN أو بكلمة مرور", [
            "في «الإعدادات»، افتح «تصدير الكاميرات» (في قسم «مشاركة الكاميرات»)، وحدّد الأجهزة، وأنشئ رمز مشاركة مشفراً. ويضيف «تضمين إعدادات التطبيق» صفحات LiveView Mix ولوحات التحكم الخاصة بك؛ ويقرر المستلم ما إذا كان سيستخدمها.",
            "اترك الرمز مفتوحاً، أو فعّل «القفل برمز PIN» لستة أرقام، أو فعّل معه أيضاً «التشفير المعقّد» لكلمة مرور من 8 أحرف على الأقل. ويجب على من يستورد الرمز إدخال رمز PIN أو كلمة المرور تلك.",
            "يتضمن الاستيراد الأجهزة وبيانات الاعتماد ويخضع لحدود خطة الجهاز المستلم. أرسل رمز PIN أو كلمة المرور بمعزل عن الرمز، وإلى مستلم موثوق فقط؛ ولا تنشرهما أبداً في محادثة عامة أو تذكرة أو موقع ويب."
          ]]
        ]],
        ["preferences", "05", "العرض والبث وإدارة البيانات", "كيّف التطبيق مع الشبكة والجهاز، وتعامل مع الإعدادات والبيانات المحلية ونسخة iCloud بصورة منفصلة عند إعادة الضبط.", [
          ["إخفاء الكاميرات غير المتصلة", [
            "يزيلها «الإعدادات» ← «إخفاء الكاميرات غير المتصلة» من البث المباشر والجدران أثناء انقطاع الإشارة.",
            "تبقى باهتة في قائمة القنوات كي لا تبدو محذوفة، ويمكنها العودة عند رجوع الإشارة."
          ]],
          ["إبقاء الكاميرات متصلة بين الصفحات", [
            "افتح «الإعدادات» ← LiveView Mix وابحث عن «إبقاء الكاميرات متصلة بين الصفحات» ضمن «تصفّح الصفحات»؛ وتبرز أهميته خاصةً مع الأجهزة التي تحتاج وقتاً أطول لإعادة الاتصال.",
            "تبقى القنوات خارج الشاشة متصلة فتعود أسرع، مقابل استخدام مستمر للشبكة والطاقة والموارد؛ عطّله إن لم تحتج عودة فورية."
          ]],
          ["اختيار شاشة البدء", [
            "افتح «الإعدادات» ← LiveView Mix ← «الفتح عند التشغيل».",
            "يعيد «آخر مشاهدة» الاختيار السابق، ويفتح LiveView Mix الجدار المختلط، ويفتح «LiveView Mix بملء الشاشة» ذلك الجدار بملء الشاشة، ويفتح اختيار جهاز محدد ذلك الجهاز.",
            "إذا حُذف الجهاز أو لم يُضبط LiveView Mix ينتقل التطبيق إلى شاشة متاحة."
          ]],
          ["الخطط والكاميرات الظاهرة", [
            "تعرض «الإعدادات» ← «الخطط» خطط الكاميرات والمسجّلات النشطة وحدودها.",
            "عند عدم فتح كل القنوات، يخصص «اختَر الكاميرات التي تظهر» المقاعد المتاحة؛ ولا حاجة إلى هذه القائمة بعد فتح التطبيق بالكامل.",
            "تتبع المشتريات واستعادتها الحالة التي تقدمها Apple. لا تغيّر الخطة بروتوكولات الجهاز أو صلاحياته أو قدرته على التشغيل."
          ]],
          ["إعادة الضبط والحذف بصورة منفصلة", [
            "يعيد خيار «استعادة الإعدادات الافتراضية» ضبط اللغة والجودة وLiveView Mix والتفضيلات الأخرى، مع إبقاء الأجهزة.",
            "يمسح «حذف كل البيانات» الأجهزة والكاميرات وكلمات سلسلة المفاتيح دون التأثير في نسخ iCloud أو الاشتراكات.",
            "يحذف خيار «حذف نسخة iCloud الاحتياطية» كل النسخ الاحتياطية المشفرة في السحابة، بما فيها نسخة Apple TV، دون تغيير الأجهزة والإعدادات على الجهاز الحالي. ولحذف نسخة واحدة فقط، اسحبها في قائمة النسخ الاحتياطية بدلاً من ذلك.",
            "قبل الحذف النهائي، تحقق من مزامنة iCloud وإمكان استعادة إصدار النسخة على الجهاز المستهدف."
          ]],
          ["التواصل مع فريق التطوير", [
            "على iPhone وiPad، يبدأ «تواصل مع فريق التطوير»، وهو الصف الأخير في «الإعدادات»، رسالة بريد إلكتروني عن جهاز لا يعمل كما ينبغي، أو عن ميزة في جهازك لا يقدّمها Cam Hub بعد.",
            "اكتب باللغة التي تفضّلها. واذكر العلامة التجارية والطراز وإصدار البرنامج الثابت، ولكن لا تُرسل أبداً كلمة مرور كاميرا أو رمز مشاركة أو رمز PIN."
          ]]
        ]],
        ["tv-control", "06", "Apple TV وApple Watch وتحكم Webhook", "اعرض جدار المراقبة على التلفزيون، وأضف أزرار HTTP لنقاط نهاية تديرها بنفسك، واضغطها على Apple Watch أيضاً.", [
          ["المراقبة على Apple TV", [
            "يتضمن تطبيق tvOS ‏LiveView Mix وجدراناً لكل جهاز وعرض كاميرا بملء الشاشة وخطاً زمنياً للتسجيلات، ومصمم للتنقل بالتركيز عبر Siri Remote.",
            "تناسب التخطيطات الكثيفة الشاشات الكبيرة، ويمكن اختيار الكاميرا أو زر Webhook مباشرة من الجدار.",
            "يبقى البث والتشغيل واختيار المسار وميزات القناة معتمداً على الجهاز والصلاحيات والترميز والشبكة."
          ]],
          ["نقل الإعداد من iPhone أو iPad", [
            "على iPhone أو iPad، افتح «نسخ احتياطي إلى iCloud» واختر Apple TV وجهةً وأنشئ نسخة مشفرة مخصصة من دون PIN.",
            "سجّل الدخول إلى حساب Apple نفسه على Apple TV، وافتح الاستعادة من iCloud واختر النسخة لاستعادتها مباشرة.",
            "يستعيد Apple TV نسخته المخصصة فقط؛ راجع بعدها العناوين والقنوات وLiveView Mix ضمن شبكة التلفزيون."
          ]],
          ["إنشاء لوحة تحكم Webhook", [
            "في علامة التبويب LiveView Mix، افتح «تعديل التخطيط» ← «ترتيب الجدار»، واضغط مربّعاً فارغاً، واضبط «المحتوى المعروض» على «لوحة تحكم».",
            "اختر بوابة أو مرأباً أو ضوءاً أو قفلاً أو ستارة أو مشهداً أو إنذاراً أو مروحة أو مقبساً أو تكييفاً أو قالباً مخصصاً. ويمكن أن يكون لكل زر رمزه وتسميته وإعداد «التأكيد قبل التنفيذ» الخاص به، وللوحة عنوانها ولونها الخاصان.",
            "يمكن لكل زر إرسال GET أو POST أو PUT أو DELETE إلى نقطة HTTP أو HTTPS تحددها، مع ترويسات وContent-Type ومحتوى JSON اختياري."
          ]],
          ["تشغيل التحكم من جدار المراقبة", [
            "اضغط الزر على iPhone أو iPad؛ وعلى Apple TV انقل التركيز بالريموت واضغط. يعرض المربّع الإرسال أو النجاح أو الفشل.",
            "اطلب التأكيد للفتح وإلغاء القفل والإنذار وسائر الإجراءات صعبة التراجع، واستخدم نقاطاً محدودة الصلاحيات.",
            "تنتقل إعدادات التحكم المدعومة مع النسخ المشفرة. تبقى نقاط النهاية وبيانات الاعتماد والوصول الشبكي وسلامة المعدات الفعلية مسؤوليتك."
          ]],
          ["الأزرار على Apple Watch", [
            "يعرض Cam Hub على Apple Watch أزرار لوحات التحكم المُعدّة على iPhone المقترن، مجمّعةً تحت عناوين اللوحات، وينفّذ الزر بضغطة واحدة. ولا يعرض أي فيديو.",
            "يحدّث iPhone القائمة باستمرار وتحتفظ الساعة بنسختها الخاصة، فتُفتح القائمة حتى عندما لا يكون التطبيق قيد التشغيل على iPhone. ولا تظهر اللوحات غير المشمولة في خطتك."
          ]]
        ], "تنبيه أمني: تستدعي أزرار Webhook نقاط الشبكة التي تحددها. لا يتحقق Cam Hub من أمان النقاط أو أنظمة الدخول أو الأقفال أو الإنذارات أو المعدات الفعلية. قيّد الصلاحيات واحمِ بيانات الاعتماد واطلب التأكيد للإجراءات صعبة التراجع."]
      ],
      note: "لا يتجاوز Cam Hub ضوابط وصول الأجهزة. تختلف الميزات باختلاف الطراز والبرنامج الثابت وتطبيق البروتوكول وصلاحيات الحساب والترميز وحالة الشبكة."
    }
  };

  // Short "Plans and limits" summary shown after the chapters. The full rules
  // are in the manual (guide.html#plans). Plan names stay in Latin script.
  const plansByLocale = {
    "zh-Hans": {
      title: "套餐与限制",
      summary: "Cam Hub 包含免费额度。摄像头套餐和 NVR 套餐各自提高不同的上限。",
      caption: "各套餐及其解锁的内容",
      columns: ["套餐", "计费", "解锁的内容"],
      rows: [
        ["免费", "无", "整个 App 合计最多启用 2 个通道（独立摄像头与录像机的通道合并计算），录像机最多 1 台。"],
        ["摄像头套餐", "按年计费", "将可启用的独立摄像头提高到 8 个（<span class='keep-phrase'>Cam Home</span>）、16 个（<span class='keep-phrase'>Cam Plus</span>）或不限数量（<span class='keep-phrase'>Cam Max</span>）。"],
        ["NVR 套餐", "按月计费", "将可连接的录像机提高到 2 台（<span class='keep-phrase'>NVR Starter</span>）、4 台（<span class='keep-phrase'>NVR Pro</span>）或不限数量（<span class='keep-phrase'>NVR Max</span>），这些录像机的所有通道都可使用。"]
      ],
      notes: [
        ["两类套餐相互独立", "摄像头套餐和 NVR 套餐相互独立，可以同时订阅。摄像头套餐不会增加录像机的数量，NVR 套餐也不会提高独立摄像头的上限。各套餐的费用请见 App 内的套餐页面。"],
        ["组合示例", "同时订阅 <span class='keep-phrase'>Cam Plus</span> 和 <span class='keep-phrase'>NVR Pro</span>：可使用 4 台录像机的所有通道，以及最多 16 个独立摄像头。"]
      ],
      more: "在操作手册中查看完整规则和更多示例"
    },
    ja: {
      title: "プランと制限",
      summary: "Cam Hub には無料の利用枠があります。カメラプランと NVR プランは、それぞれ別の上限を広げます。",
      caption: "プランごとに使えるようになる内容",
      columns: ["プラン", "課金", "使えるようになる内容"],
      rows: [
        ["無料", "なし", "アプリ全体で有効にできるチャンネルは合計 2 つまで（単体カメラとレコーダーのチャンネルを合算）、レコーダーは 1 台までです。"],
        ["カメラプラン", "年額課金", "有効にできる単体カメラの数を 8 台（<span class='keep-phrase'>Cam Home</span>）、16 台（<span class='keep-phrase'>Cam Plus</span>）、または無制限（<span class='keep-phrase'>Cam Max</span>）に広げます。"],
        ["NVR プラン", "月額課金", "使用できるレコーダーの台数を 2 台（<span class='keep-phrase'>NVR Starter</span>）、4 台（<span class='keep-phrase'>NVR Pro</span>）、または無制限（<span class='keep-phrase'>NVR Max</span>）に広げ、そのレコーダーのすべてのチャンネルを使用できます。"]
      ],
      notes: [
        ["2 種類のプランは独立しています", "カメラプランと NVR プランは互いに独立しており、組み合わせて利用できます。カメラプランはレコーダーの台数を増やさず、NVR プランは単体カメラの上限を増やしません。料金はアプリ内に表示されます。"],
        ["組み合わせの例", "<span class='keep-phrase'>Cam Plus</span> と <span class='keep-phrase'>NVR Pro</span> を併用すると、レコーダー 4 台のすべてのチャンネルと、最大 16 台の単体カメラを使用できます。"]
      ],
      more: "詳しいルールとその他の例は、マニュアルをご覧ください"
    },
    ko: {
      title: "요금제와 한도",
      summary: "Cam Hub에는 무료 사용량이 포함되어 있습니다. 카메라 요금제와 NVR 요금제는 각각 서로 다른 한도를 늘려 줍니다.",
      caption: "요금제별로 잠금 해제되는 내용",
      columns: ["요금제", "결제", "잠금 해제되는 내용"],
      rows: [
        ["무료", "없음", "앱 전체에서 활성화할 수 있는 채널은 최대 2개이며(독립형 카메라와 녹화기의 채널을 합산), 녹화기는 최대 1대입니다."],
        ["카메라 요금제", "연간 결제", "활성화할 수 있는 독립형 카메라 수를 8대(<span class='keep-phrase'>Cam Home</span>), 16대(<span class='keep-phrase'>Cam Plus</span>) 또는 무제한(<span class='keep-phrase'>Cam Max</span>)으로 늘립니다."],
        ["NVR 요금제", "월간 결제", "연결할 수 있는 녹화기 수를 2대(<span class='keep-phrase'>NVR Starter</span>), 4대(<span class='keep-phrase'>NVR Pro</span>) 또는 무제한(<span class='keep-phrase'>NVR Max</span>)으로 늘리며, 해당 녹화기의 모든 채널을 사용할 수 있습니다."]
      ],
      notes: [
        ["두 종류는 서로 독립적입니다", "카메라 요금제와 NVR 요금제는 서로 독립적이며 함께 사용할 수 있습니다. 카메라 요금제는 녹화기 수를 늘리지 않고, NVR 요금제는 독립형 카메라 한도를 늘리지 않습니다. 요금은 앱에서 확인할 수 있습니다."],
        ["조합 예시", "<span class='keep-phrase'>Cam Plus</span>와 <span class='keep-phrase'>NVR Pro</span>를 함께 사용하면 녹화기 4대의 모든 채널과 독립형 카메라 최대 16대를 사용할 수 있습니다."]
      ],
      more: "전체 규칙과 더 많은 예시는 설명서에서 확인하세요"
    },
    de: {
      title: "Abos und Limits",
      summary: "Cam Hub enthält ein kostenloses Kontingent. Kamera-Abos und NVR-Abos erweitern jeweils ein anderes Limit.",
      caption: "Abos und was sie jeweils freischalten",
      columns: ["Abo", "Abrechnung", "Was es freischaltet"],
      rows: [
        ["Kostenlos", "Keine", "Höchstens 2 aktivierte Kanäle in der gesamten App (Kanäle eigenständiger Kameras und von Recordern zählen zusammen) und höchstens 1 Recorder."],
        ["Kamera-Abos", "Jährlich", "Erhöhen die Zahl der eigenständigen Kameras, die aktiviert werden können, auf 8 (<span class='keep-phrase'>Cam Home</span>), 16 (<span class='keep-phrase'>Cam Plus</span>) oder unbegrenzt (<span class='keep-phrase'>Cam Max</span>)."],
        ["NVR-Abos", "Monatlich", "Erhöhen die Zahl der Recorder auf 2 (<span class='keep-phrase'>NVR Starter</span>), 4 (<span class='keep-phrase'>NVR Pro</span>) oder unbegrenzt (<span class='keep-phrase'>NVR Max</span>); alle Kanäle dieser Recorder sind nutzbar."]
      ],
      notes: [
        ["Zwei unabhängige Arten", "Kamera-Abos und NVR-Abos sind voneinander unabhängig und lassen sich kombinieren. Ein Kamera-Abo erhöht nicht die Zahl der Recorder, und ein NVR-Abo erhöht nicht das Limit für eigenständige Kameras. Die Preise werden in der App angezeigt."],
        ["Beispiel", "Mit <span class='keep-phrase'>Cam Plus</span> und <span class='keep-phrase'>NVR Pro</span>: 4 Recorder mit allen ihren Kanälen und bis zu 16 eigenständige Kameras."]
      ],
      more: "Vollständige Regeln und weitere Beispiele im Handbuch ansehen"
    },
    es: {
      title: "Planes y límites",
      summary: "Cam Hub incluye un cupo de uso gratuito. Los planes de cámaras y los planes NVR amplían cada uno un límite distinto.",
      caption: "Planes y lo que desbloquea cada uno",
      columns: ["Plan", "Facturación", "Qué desbloquea"],
      rows: [
        ["Gratis", "Ninguna", "Como máximo 2 canales activados en toda la app (los canales de cámaras independientes y de grabadores se cuentan juntos) y como máximo 1 grabador."],
        ["Planes de cámaras", "Anual", "Amplían el número de cámaras independientes que se pueden activar a 8 (<span class='keep-phrase'>Cam Home</span>), 16 (<span class='keep-phrase'>Cam Plus</span>) o ilimitadas (<span class='keep-phrase'>Cam Max</span>)."],
        ["Planes NVR", "Mensual", "Amplían el número de grabadores a 2 (<span class='keep-phrase'>NVR Starter</span>), 4 (<span class='keep-phrase'>NVR Pro</span>) o ilimitados (<span class='keep-phrase'>NVR Max</span>), y se pueden usar todos los canales de esos grabadores."]
      ],
      notes: [
        ["Dos tipos independientes", "Los planes de cámaras y los planes NVR son independientes y se pueden combinar. Un plan de cámaras no aumenta el número de grabadores y un plan NVR no eleva el límite de cámaras independientes. Los precios se muestran en la app."],
        ["Ejemplo", "Con <span class='keep-phrase'>Cam Plus</span> y <span class='keep-phrase'>NVR Pro</span>: 4 grabadores con todos sus canales y hasta 16 cámaras independientes."]
      ],
      more: "Ver las reglas completas y más ejemplos en el manual"
    },
    "es-MX": {
      title: "Planes y límites",
      summary: "Cam Hub incluye un cupo de uso gratuito. Los planes de cámaras y los planes NVR amplían cada uno un límite distinto.",
      caption: "Planes y lo que desbloquea cada uno",
      columns: ["Plan", "Facturación", "Qué desbloquea"],
      rows: [
        ["Gratis", "Ninguna", "Máximo 2 canales activados en toda la app (los canales de cámaras independientes y de grabadores se cuentan juntos) y máximo 1 grabador."],
        ["Planes de cámaras", "Anual", "Aumentan a 8 (<span class='keep-phrase'>Cam Home</span>), 16 (<span class='keep-phrase'>Cam Plus</span>) o ilimitadas (<span class='keep-phrase'>Cam Max</span>) las cámaras independientes que puedes activar."],
        ["Planes NVR", "Mensual", "Aumentan a 2 (<span class='keep-phrase'>NVR Starter</span>), 4 (<span class='keep-phrase'>NVR Pro</span>) o ilimitados (<span class='keep-phrase'>NVR Max</span>) los grabadores que puedes conectar, y se pueden usar todos los canales de esos grabadores."]
      ],
      notes: [
        ["Dos tipos independientes", "Los planes de cámaras y los planes NVR son independientes y se pueden combinar. Un plan de cámaras no aumenta el número de grabadores, y un plan NVR no sube el límite de cámaras independientes. Los precios se muestran en la app."],
        ["Ejemplo", "Con <span class='keep-phrase'>Cam Plus</span> y <span class='keep-phrase'>NVR Pro</span>: 4 grabadores con todos sus canales y hasta 16 cámaras independientes."]
      ],
      more: "Consulta las reglas completas y más ejemplos en el manual"
    },
    fr: {
      title: "Formules et limites",
      summary: "Cam Hub inclut une part d’utilisation gratuite. Les formules caméras et les formules NVR repoussent chacune une limite différente.",
      caption: "Les formules et ce que chacune débloque",
      columns: ["Formule", "Facturation", "Ce qu’elle débloque"],
      rows: [
        ["Gratuit", "Aucune", "Au plus 2 canaux activés dans toute l’app (les canaux des caméras autonomes et ceux des enregistreurs sont comptés ensemble) et au plus 1 enregistreur."],
        ["Formules caméras", "Annuelle", "Portent le nombre de caméras autonomes activables à 8 (<span class='keep-phrase'>Cam Home</span>), 16 (<span class='keep-phrase'>Cam Plus</span>) ou à un nombre illimité (<span class='keep-phrase'>Cam Max</span>)."],
        ["Formules NVR", "Mensuelle", "Portent le nombre d’enregistreurs à 2 (<span class='keep-phrase'>NVR Starter</span>), 4 (<span class='keep-phrase'>NVR Pro</span>) ou à un nombre illimité (<span class='keep-phrase'>NVR Max</span>), et tous les canaux de ces enregistreurs sont utilisables."]
      ],
      notes: [
        ["Deux types indépendants", "Les formules caméras et les formules NVR sont indépendantes et peuvent se combiner. Une formule caméras n’augmente pas le nombre d’enregistreurs, et une formule NVR n’augmente pas la limite de caméras autonomes. Les prix s’affichent dans l’app."],
        ["Exemple", "Avec <span class='keep-phrase'>Cam Plus</span> et <span class='keep-phrase'>NVR Pro</span> : 4 enregistreurs avec tous leurs canaux et jusqu’à 16 caméras autonomes."]
      ],
      more: "Voir les règles complètes et d’autres exemples dans le manuel"
    },
    sl: {
      title: "Paketi in omejitve",
      summary: "Aplikacija Cam Hub vključuje brezplačni obseg. Paketi za kamere in paketi za snemalnike NVR zvišajo vsak svojo omejitev.",
      caption: "Paketi in kaj odklene posamezni paket",
      columns: ["Paket", "Obračun", "Kaj odklene"],
      rows: [
        ["Brezplačno", "Brez", "Največ 2 omogočena kanala v vsej aplikaciji (kanali samostojnih kamer in snemalnikov se štejejo skupaj) in največ 1 snemalnik."],
        ["Paketi za kamere", "Letno", "Število samostojnih kamer, ki jih lahko omogočite, zvišajo na 8 (<span class='keep-phrase'>Cam Home</span>), 16 (<span class='keep-phrase'>Cam Plus</span>) ali neomejeno (<span class='keep-phrase'>Cam Max</span>)."],
        ["Paketi za snemalnike NVR", "Mesečno", "Število snemalnikov zvišajo na 2 (<span class='keep-phrase'>NVR Starter</span>), 4 (<span class='keep-phrase'>NVR Pro</span>) ali neomejeno (<span class='keep-phrase'>NVR Max</span>), uporabljati pa je mogoče vse kanale teh snemalnikov."]
      ],
      notes: [
        ["Dve neodvisni vrsti", "Paketi za kamere in paketi za snemalnike NVR so neodvisni drug od drugega in jih je mogoče kombinirati. Paket za kamere ne zviša dovoljenega števila snemalnikov, paket za snemalnike NVR pa ne zviša omejitve samostojnih kamer. Cene so prikazane v aplikaciji."],
        ["Primer", "S paketoma <span class='keep-phrase'>Cam Plus</span> in <span class='keep-phrase'>NVR Pro</span>: 4 snemalniki z vsemi kanali in do 16 samostojnih kamer."]
      ],
      more: "Celotna pravila in več primerov najdete v priročniku"
    },
    ar: {
      title: "الخطط والحدود",
      summary: "يتضمن Cam Hub حصة مجانية. وترفع خطط الكاميرات وخطط NVR كل منهما حدًا مختلفًا.",
      caption: "الخطط وما تتيحه كل خطة",
      columns: ["الخطة", "الفوترة", "ما تتيحه"],
      rows: [
        ["مجاني", "لا توجد", "الحد الأقصى قناتان مفعّلتان في التطبيق كله (تُحتسب قنوات الكاميرات المستقلة وقنوات المسجّلات معًا)، ومسجّل واحد على الأكثر."],
        ["خطط الكاميرات", "سنوية", "ترفع عدد الكاميرات المستقلة التي يمكن تفعيلها إلى 8 (<span class='keep-phrase'>Cam Home</span>) أو 16 (<span class='keep-phrase'>Cam Plus</span>) أو عدد غير محدود (<span class='keep-phrase'>Cam Max</span>)."],
        ["خطط NVR", "شهرية", "ترفع عدد المسجّلات إلى 2 (<span class='keep-phrase'>NVR Starter</span>) أو 4 (<span class='keep-phrase'>NVR Pro</span>) أو عدد غير محدود (<span class='keep-phrase'>NVR Max</span>)، ويمكن استخدام جميع قنوات هذه المسجّلات."]
      ],
      notes: [
        ["نوعان مستقلان", "خطط الكاميرات وخطط NVR مستقلة عن بعضها ويمكن الجمع بينها. لا ترفع خطة الكاميرات عدد المسجّلات، ولا ترفع خطة NVR حد الكاميرات المستقلة. تظهر الأسعار في التطبيق."],
        ["مثال", "مع <span class='keep-phrase'>Cam Plus</span> و<span class='keep-phrase'>NVR Pro</span>: 4 مسجّلات بجميع قنواتها وما يصل إلى 16 كاميرا مستقلة."]
      ],
      more: "اطّلع على القواعد الكاملة والمزيد من الأمثلة في الدليل"
    }
  };

  Object.entries(productLocales).forEach(([locale, product]) => {
    Object.assign(globalThis.CamHubAdditionalTranslations[locale].product, product);
  });

  Object.entries(plansByLocale).forEach(([locale, plans]) => {
    Object.assign(globalThis.CamHubAdditionalTranslations[locale].product, { plans });
  });
})();
