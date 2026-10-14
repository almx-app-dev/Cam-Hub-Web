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
            "名称可以不填；IP 地址或主机名及用户名为必填项。HTTP 端口默认为 80，RTSP 端口默认为 554；若设备使用其他端口，请以设备管理界面显示的数值为准。",
            "输入密码后点击“添加”。连接失败时，App 会分别提示网络连接、登录信息或设备不受支持等不同错误。",
            "请仅连接您拥有、管理或已获明确授权使用的设备和账号。"
          ]],
          ["自动识别或使用 ONVIF", [
            "一般先关闭“通过 ONVIF 连接”，让 Cam Hub 尝试兼容的原生连接方式并取得设备可提供的完整功能。",
            "如果无法识别设备，或您希望直接使用开放协议，请开启“通过 ONVIF 连接”后重新添加。",
            "您可能需要先在设备管理界面启用 ONVIF 和 RTSP，并建立具有查看权限的 ONVIF 账号。连接注意事项可在“兼容性参考”中查看。"
          ]],
          ["整理摄像头通道", [
            "成功添加设备后，展开设备卡片；“通道”区域会列出设备返回的摄像头。",
            "开启需要查看的通道并关闭不用的通道。录像机的通道还可能提供“停用”，用来停止传输视频，而不只是隐藏图块。",
            "离线通道仍会以淡色保留在“设备”列表中。开启“隐藏离线摄像头”后，这些通道不会显示在实时墙中。"
          ]],
          ["查看和更新设备信息", [
            "展开设备卡片可查看型号、地址、端口、序列号、固件版本与通道数量。",
            "使用右上角操作可重命名设备；下拉刷新则会重新取得当前通道状态。",
            "黑边按钮只会切换当前墙的默认、放大填满或拉伸填满；全屏按钮会打开该设备的全屏墙。"
          ]]
        ]],
        ["mix", "02", "LiveView Mix 墙", "将不同摄像头和录像机的通道放在同一面墙上，并按显示设备调整密度。", [
          ["为 LiveView Mix 选择摄像头", [
            "进入“设置”→“LiveView Mix 仪表板”。",
            "在每个设备区域中选择通道。每个通道可分别使用 SD 或 HD，“全部 SD”和“全部 HD”会一次调整当前选择的所有通道。",
            "返回“实时”并选择 LiveView Mix。该标签页会显示可滚动预览；点击“全屏”后会套用已选择的全屏布局。"
          ]],
          ["17 种全屏布局", [
            "等分网格包括 2×2、2×3、3×3、3×4、4×4、5×4、6×4、5×5、7×4、6×5、6×6 与 7×7。",
            "主画面布局包括 1+3、1+5、1+7、1+21 与 1+27；第一个摄像头会放在最大的主画面中。",
            "超过 16 个图块的布局会显示屏幕标记，因为这类高密度布局更适合大尺寸显示器。"
          ]],
          ["排列摄像头与空位", [
            "在 LiveView Mix 设置中点击“排列”。",
            "将一个图块拖到另一个图块上即可交换位置；也可点击“编辑”调整列表顺序，或滑动删除。列表会依顺序逐页填入布局。",
            "点击“添加空位”可保留刻意留空的格子；点击空位后可设置其中显示的内容。"
          ]],
          ["三种黑边处理方式", [
            "默认会完整显示画面；比例不同时会出现黑边。",
            "放大填满会按比例放大画面直到填满格子，超出格子边缘的部分会被裁掉。",
            "拉伸填满不裁切并填满整个格子，但可能让画面变宽或压缩。它可作为全局默认值，也可在查看单个设备或通道时临时覆盖。"
          ]],
          ["自定义水印", [
            "打开“水印”，开启“显示水印”，再选择设备名称、摄像头名称或 IP 地址。",
            "可调整位置、透明度、颜色、文字大小，并选择标准、圆角、等宽或衬线字体。",
            "可读性样式包括阴影、描边、底板或无效果。请同时查看明亮与昏暗预览，确认日间和夜间画面都能清楚阅读。"
          ]],
          ["图片、时钟、标签与控制按钮", [
            "在“排列”中添加空位，再点击该格子，打开“第 N 格”页面。",
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
          ["快照与共享", [
            "点击单通道控制栏中的“快照”，向设备请求当前画面。",
            "收到图片后，Cam Hub 会打开预览；点击“共享”即可使用系统共享面板。",
            "快照可能包含人物、地址、时间或其他敏感信息。发送前请检查图片内容、接收对象及当地规定。"
          ]],
          ["日期、时间轴与录像类型", [
            "在通道画面下方选择日期，Cam Hub 会向设备查询当天录像。",
            "录像可在“连续录像”与“事件”之间切换。拖动或缩放时间轴，使中央游标到达需要的时间，也可直接从列表选择片段。",
            "回放时会显示“回放”与设备时间；点击“返回实时”可回到实时画面。部分设备会先下载片段，再使用系统播放器打开。"
          ]]
        ], '功能可用性提示：实时视频流、快照、<span class="keep-phrase">主／子码流切换</span>、录像搜索、<span class="keep-phrase">连续录像／事件分类</span>、时间轴定位与回放，均以摄像头或录像机实际返回的能力，以及登录设备账号获得的权限为准。'],
        ["backup", "04", "加密备份与摄像头共享", "iCloud 备份与恢复不再使用 PIN；共享摄像头时，可自行决定是否用六位数 PIN 锁定共享代码。", [
          ["本机密码保护", [
            "设备添加后，密码会存入 Apple 钥匙串；设备名称、地址、端口、通道与 App 设置则保留在设备本地数据中。",
            "Cam Hub 只会在您要求连接、搜索录像、取得快照、备份或迁移时使用这些信息。",
            "“删除所有数据”会移除本机设备数据和已保存密码。若从未备份，移除 App 后相关设置也可能无法恢复。"
          ]],
          ["无需 PIN 的 iCloud 加密备份", [
            "进入“设置”→“备份到 iCloud”，选择 iPhone／iPad 或 Apple TV 备份目的地后即可建立备份，无需设置 PIN。",
            "备份包含受支持的设备、登录信息、通道、LiveView Mix 与 App 设置。Cam Hub 会先加密，再存入您自己的私人 iCloud。",
            "请确认“当前备份”显示新的时间与设备数量。"
          ]],
          ["从 iCloud 恢复", [
            "打开“设置”→“从 iCloud 恢复”并选择备份即可继续；iPhone、iPad 与 Apple TV 均不要求 PIN 验证。",
            "请尽量使用相同 App 版本，并确认已登录保存该备份的 Apple账户。旧版本备份可能需要重新建立后才会显示。",
            "恢复仍受当前套餐上限限制。完成后请按当前网络逐项检查设备地址、通道与 LiveView Mix。"
          ]],
          ["共享摄像头与可选 PIN", [
            "打开“设置”→“共享摄像头”，选择摄像头并建立加密共享代码；共享时可决定是否用 PIN 锁定。",
            "启用 PIN 锁定时，请设置并确认六位数字。接收者导入共享摄像头时必须通过 PIN 验证；未设置 PIN 时，完整代码可直接导入。",
            "导入内容包括设备与登录信息，并受目标设备当前套餐上限限制。完整代码与 PIN 只可交给可信任的对象，切勿发布到公开聊天、工单或网站。"
          ]]
        ]],
        ["preferences", "05", "显示、视频流与数据控制", "依网络与设备能力调整 App，并在重置时分别处理偏好、本机数据与 iCloud 备份。", [
          ["隐藏离线摄像头", [
            "开启“设置”→“隐藏离线摄像头”，可从实时墙中移除没有信号的摄像头。",
            "这些通道仍会以淡色保留在“设备”列表中，避免被误认为已经删除；信号恢复后也可重新出现。"
          ]],
          ["翻页时保持摄像头连接", [
            "Cam Hub 检测到重新连接较慢的兼容设备时，“翻页”部分会显示“翻页时保持摄像头连接”。",
            "开启后，通道滚出画面仍会保持连接，返回时恢复较快；但会持续使用网络、电量与系统资源，不需要立即恢复时请保持关闭。"
          ]],
          ["选择启动时打开的画面", [
            "进入“设置”→“LiveView Mix”→“启动时打开”。",
            "“上次查看”会返回前一次选择；“LiveView Mix”会打开跨设备的墙；选择单一设备则直接打开该设备。",
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
            "“删除 iCloud 备份”只移除加密云端备份，不会改变当前设备上的设备与设置。iCloud 无法使用时，可能只能清除本机显示的备份状态。",
            "执行无法撤销的删除前，请确认 iCloud 已同步，并且目标设备能够恢复该备份版本。"
          ]]
        ]],
        ["tv-control", "06", "Apple TV 与 Webhook 控制", "将墙扩展到电视，并加入连接到自有端点的 HTTP 控制按钮。", [
          ["在 Apple TV 上监看", [
            "tvOS App 提供 LiveView Mix、各设备实时墙、全屏单通道查看与录像时间轴，并针对 Siri Remote 焦点操作设计。",
            "高密度布局适合大屏幕；无需先离开当前画面，即可在墙上直接选择摄像头与 Webhook 按钮。",
            "实时视频流、回放、主／子码流选择及通道功能，仍取决于设备实际返回的能力、账号权限、编解码器与网络状况。"
          ]],
          ["从 iPhone 或 iPad 移转设置", [
            "在 iPhone 或 iPad 中打开“设置”→“备份到 iCloud”，选择 Apple TV 为目的地，建立专用加密备份，无需设置 PIN。",
            "在 Apple TV 登录同一 Apple账户，打开“从 iCloud 恢复”并选择备份，即可直接恢复。",
            "Apple TV 只会恢复专用的 Apple TV 备份。完成后请按电视当前网络检查设备地址、通道与 LiveView Mix。"
          ]],
          ["建立 Webhook 控制面板", [
            "在 LiveView Mix 设置中打开“排列”，添加空位，并将该空位设置为“控制”。",
            "可选择大门、车库、灯光、门锁、窗帘、场景、警报、风扇、插座、空调或自定义模板。每个按钮可分别设置图标、标签、颜色与确认要求。",
            "每个按钮可向您指定的 HTTP 或 HTTPS 端点发送 GET、POST、PUT 或 DELETE，并可加入标头、Content-Type 与 JSON 正文。"
          ]],
          ["在墙上执行控制", [
            "在 iPhone 或 iPad 上点击按钮；在 Apple TV 上用遥控器移动焦点并按下执行。面板会在原位置显示发送中、成功或失败。",
            "开门、解锁、警报等难以撤销的操作应要求确认，并只开放完成该用途所需的最小端点权限。",
            "受支持的控制面板设置可随加密备份迁移。Webhook 端点、登录信息、网络存取与连接实体设备的安全仍由您负责。"
          ]]
        ], "安全提示：Webhook 按钮会调用您指定的网络端点。Cam Hub 不会验证端点、存取控制、门锁、警报或其他实体设备的安全性。请限制端点权限、保护登录信息，并为难以撤销的操作要求确认。"],
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
            "이름은 선택 사항입니다. IP 주소 또는 호스트 이름과 사용자 이름은 필수입니다. HTTP 포트 기본값은 80, RTSP 포트는 554이며, 기기 관리 화면에 다른 값이 표시되면 그 값을 사용합니다.",
            "비밀번호를 입력하고 ‘추가’를 탭합니다. 연결에 실패하면 앱이 연결 오류, 인증 정보 오류, 지원하지 않는 기기 오류를 구분하여 안내합니다.",
            "본인이 소유·관리하거나 명시적으로 사용 권한을 받은 기기와 계정에만 연결하세요."
          ]],
          ["자동 감지 또는 ONVIF 사용", [
            "처음에는 보통 ‘ONVIF로 연결’을 끈 상태로 두어 Cam Hub가 호환되는 기본 연결 방식을 시도하고 기기가 제공하는 기능을 최대한 확인하도록 합니다.",
            "기기가 인식되지 않거나 공개 프로토콜을 직접 사용하려면 ‘ONVIF로 연결’을 켜고 다시 추가합니다.",
            "기기 설정에서 ONVIF와 RTSP를 활성화하고 시청 권한이 있는 ONVIF 계정을 만들어야 할 수 있습니다. 연결 관련 참고 사항은 ‘호환성 참고’에서 확인할 수 있습니다."
          ]],
          ["카메라 채널 정리", [
            "기기를 추가한 뒤 기기 카드를 펼치면 ‘채널’에 해당 기기가 보고한 카메라가 표시됩니다.",
            "보려는 채널은 켜고 사용하지 않는 채널은 끕니다. 녹화기 채널은 타일만 숨기는 대신 ‘카메라 끄기’로 스트리밍 자체를 중지할 수도 있습니다.",
            "오프라인 채널은 흐리게 표시된 상태로 ‘기기’ 목록에 남습니다. ‘오프라인 카메라 숨기기’를 켜면 실시간 비디오 월에는 나타나지 않습니다."
          ]],
          ["기기 정보 확인 및 갱신", [
            "기기 카드를 펼쳐 모델, 주소, 포트, 일련번호, 펌웨어, 채널 수를 확인합니다.",
            "오른쪽 위 메뉴에서 기기 이름을 바꿀 수 있고, 아래로 당겨 새로 고치면 최신 채널 상태를 다시 요청합니다.",
            "화면 채우기 제어는 현재 화면의 Fit, Crop, Stretch만 바꿉니다. 전체 화면 버튼은 해당 기기의 채널 비디오 월을 엽니다."
          ]]
        ]],
        ["mix", "02", "LiveView Mix 비디오 월", "서로 다른 카메라와 녹화기의 채널을 한 화면에 배치하고 사용하는 디스플레이에 맞게 밀도를 조절합니다.", [
          ["LiveView Mix에 카메라 선택", [
            "‘설정’ → ‘LiveView Mix 대시보드’로 이동합니다.",
            "기기별 영역에서 채널을 선택합니다. 각 채널은 SD 또는 HD를 따로 지정할 수 있고, ‘전체 SD’와 ‘전체 HD’는 선택된 전체 채널에 같은 화질을 적용합니다.",
            "‘실시간’으로 돌아가 LiveView Mix를 선택합니다. 탭에는 스크롤 가능한 미리보기가 표시되며, ‘전체 화면’을 누르면 선택한 비디오 월 레이아웃이 적용됩니다."
          ]],
          ["17가지 전체 화면 레이아웃", [
            "균등 격자는 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6, 7×7을 제공합니다.",
            "주 화면 레이아웃은 1+3, 1+5, 1+7, 1+21, 1+27이며 첫 번째 카메라가 가장 큰 주 타일에 배치됩니다.",
            "16개가 넘는 타일을 사용하는 레이아웃에는 화면 표시가 붙습니다. 높은 밀도 때문에 큰 디스플레이에 더 적합합니다."
          ]],
          ["카메라와 빈 슬롯 배치", [
            "LiveView Mix 설정에서 ‘배치’를 탭합니다.",
            "한 타일을 다른 타일로 끌어 서로 위치를 바꾸거나 ‘편집’에서 목록 순서를 변경하고 밀어서 삭제할 수 있습니다. 목록 순서대로 레이아웃의 각 페이지가 채워집니다.",
            "‘빈 슬롯 추가’를 누르면 의도적인 빈 공간을 유지할 수 있습니다. 빈 타일을 선택하여 표시할 내용을 설정합니다."
          ]],
          ["세 가지 화면 채우기 방식", [
            "Fit은 전체 영상을 유지하고 화면 비율이 다르면 여백을 추가합니다.",
            "Crop은 비율을 유지한 채 타일을 채우도록 확대하고 바깥쪽 가장자리를 잘라냅니다.",
            "Stretch는 자르지 않고 타일 전체를 채우지만 영상이 넓어지거나 눌려 보일 수 있습니다. 전체 기본값으로 사용하거나 개별 기기와 채널에서 임시로 바꿀 수 있습니다."
          ]],
          ["사용자 지정 워터마크", [
            "‘워터마크’를 열고 ‘워터마크 표시’를 켠 뒤 기기 이름, 카메라 이름, IP 주소 중 하나를 선택합니다.",
            "위치, 불투명도, 색상, 글자 크기를 조절하고 기본, 둥근 글꼴, 고정폭, 세리프 글꼴을 선택할 수 있습니다.",
            "가독성 효과는 그림자, 윤곽선, 배경판, 없음 중에서 선택합니다. 밝고 어두운 미리보기에서 낮과 밤 영상 모두 읽기 쉬운지 확인하세요."
          ]],
          ["사진, 시계, 라벨과 제어 버튼", [
            "‘배치’에서 빈 슬롯을 추가한 뒤 해당 타일을 선택해 ‘슬롯 편집기’를 엽니다.",
            "‘이미지’는 기존 사진이나 새로 촬영한 사진을 사용할 수 있습니다. ‘시계’는 날짜, 초, 12시간제 또는 24시간제를 표시하며, ‘라벨’은 사용자 지정 문자, SF Symbol, 색상을 지원합니다.",
            "‘제어’는 대문·셔터, 차고문, 조명, 도어록, 커튼/블라인드, 장면·자동화, 경보기, 선풍기, 스마트 플러그, 에어컨 및 사용자 지정 템플릿으로 HTTP 웹훅 버튼을 만듭니다. 열기나 잠금 해제 같은 민감한 동작은 확인을 요구할 수 있습니다.",
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
          ["스냅샷과 공유", [
            "단일 채널 제어 막대에서 ‘스냅샷’을 눌러 기기에 현재 이미지를 요청합니다.",
            "이미지가 도착하면 Cam Hub가 미리보기를 열며 ‘공유’를 눌러 시스템 공유 시트를 사용할 수 있습니다.",
            "스냅샷에는 사람, 주소, 시간이나 그 밖의 민감한 정보가 포함될 수 있습니다. 보내기 전에 이미지, 수신자와 현지 규정을 확인하세요."
          ]],
          ["날짜, 타임라인과 녹화 유형", [
            "채널 화면 아래에서 날짜를 선택하면 Cam Hub가 기기에 해당 날짜의 녹화를 요청합니다.",
            "녹화는 ‘연속 녹화’와 ‘이벤트’ 사이에서 전환할 수 있습니다. 중앙 커서가 원하는 시간에 오도록 타임라인을 끌거나 확대하고, 목록에서 구간을 직접 선택할 수도 있습니다.",
            "재생 중에는 ‘재생’ 배지에 기기 시간이 표시됩니다. ‘실시간으로 돌아가기’를 눌러 실시간 스트림으로 복귀합니다. 일부 기기는 클립을 먼저 내려받은 뒤 시스템 플레이어에서 엽니다."
          ]]
        ], '기능 제공 안내: 실시간 스트리밍, 스냅샷, <span class="keep-phrase">주/보조 스트림 선택</span>, 녹화 검색, <span class="keep-phrase">연속 녹화/이벤트 분류</span>, 타임라인 탐색과 재생은 카메라 또는 녹화기가 실제로 제공하는 기능과 로그인한 기기 계정의 권한에 따라 달라집니다.'],
        ["backup", "04", "암호화 백업과 카메라 공유", "iCloud 백업과 복원에는 더 이상 PIN을 사용하지 않습니다. 카메라를 공유할 때 공유 코드를 6자리 PIN으로 잠글지 선택할 수 있습니다.", [
          ["기기 내 비밀번호 보호", [
            "기기를 추가하면 비밀번호는 Apple 키체인에 저장되고 기기 이름, 주소, 포트, 채널과 앱 설정은 이 iPhone이나 iPad의 데이터에 남습니다.",
            "Cam Hub는 사용자가 요청한 연결, 녹화 검색, 스냅샷, 백업과 전송에만 이 정보를 사용합니다.",
            "‘모든 데이터 삭제’는 로컬 기기 데이터와 저장된 비밀번호를 제거합니다. 백업하지 않은 설정은 앱을 삭제한 뒤 복구할 수 없을 수 있습니다."
          ]],
          ["PIN 없는 iCloud 암호화 백업", [
            "‘설정’ → ‘iCloud에 백업’을 열고 iPhone/iPad 또는 Apple TV 백업 위치를 선택하면 PIN 설정 없이 백업을 만들 수 있습니다.",
            "백업에는 지원되는 기기, 인증 정보, 채널, LiveView Mix와 앱 설정이 포함됩니다. Cam Hub는 이를 암호화한 뒤 사용자의 개인 iCloud에 저장합니다.",
            "‘현재 백업’에 새 시간과 기기 수가 표시되는지 확인하세요."
          ]],
          ["iCloud에서 복원", [
            "‘설정’ → ‘iCloud에서 복원’을 열고 백업을 선택하면 바로 진행됩니다. iPhone, iPad와 Apple TV 모두 PIN 확인을 요구하지 않습니다.",
            "가능하면 같은 앱 버전을 사용하고 백업을 보유한 Apple 계정으로 로그인했는지 확인하세요. 오래된 버전의 백업은 다시 생성해야 표시될 수 있습니다.",
            "복원에는 현재 요금제 한도가 적용됩니다. 완료 후 현재 네트워크에 맞게 각 기기 주소, 채널과 LiveView Mix를 확인하세요."
          ]],
          ["카메라 공유와 선택적 PIN", [
            "‘설정’ → ‘카메라 공유’를 열고 카메라를 선택해 암호화된 공유 코드를 만듭니다. 공유할 때 PIN으로 잠글지 선택할 수 있습니다.",
            "PIN 잠금을 켜면 6자리 숫자를 입력하고 확인합니다. 수신자는 공유 카메라를 가져오거나 복원할 때 PIN 인증을 통과해야 합니다. PIN을 설정하지 않으면 전체 코드를 바로 가져옵니다.",
            "가져오기에는 기기와 인증 정보가 포함되며 대상 설치의 요금제 한도가 적용됩니다. 전체 코드와 PIN은 신뢰할 수 있는 사람에게만 보내고 공개 채팅, 지원 티켓이나 웹사이트에 게시하지 마세요."
          ]]
        ]],
        ["preferences", "05", "표시, 스트리밍과 데이터 제어", "네트워크와 기기에 맞게 앱을 조정하고 초기화할 때 환경설정, 로컬 데이터, iCloud 백업을 각각 관리합니다.", [
          ["오프라인 카메라 숨기기", [
            "‘설정’ → ‘오프라인 카메라 숨기기’를 켜면 신호가 없는 카메라가 ‘실시간’과 비디오 월에서 제외됩니다.",
            "삭제된 카메라로 오인하지 않도록 ‘기기’ 채널 목록에는 흐리게 남아 있으며 신호가 돌아오면 다시 표시될 수 있습니다."
          ]],
          ["화면 밖 스트림 연결 유지", [
            "Cam Hub가 재연결에 시간이 더 필요한 호환 기기를 감지하면 ‘스트리밍’에 ‘화면 밖에서도 스트림 연결 유지’가 표시됩니다.",
            "켜면 스크롤로 화면을 벗어나도 채널 연결을 유지해 돌아왔을 때 더 빨리 재생합니다. 네트워크, 전력과 시스템 자원을 계속 사용하므로 즉시 재생할 필요가 없다면 끄세요."
          ]],
          ["실행 시 열 화면 선택", [
            "‘설정’ → ‘LiveView Mix’ → ‘실행 시 열기’로 이동합니다.",
            "‘마지막으로 본 항목’은 이전 선택으로, ‘LiveView Mix’는 기기 통합 비디오 월로, 개별 기기 항목은 해당 기기로 바로 이동합니다.",
            "선택한 기기가 삭제되었거나 LiveView Mix가 설정되지 않았다면 앱은 잘못된 위치를 유지하지 않고 사용할 수 있는 화면으로 돌아갑니다."
          ]],
          ["요금제와 표시 카메라", [
            "‘설정’ → ‘요금제’에서 현재 카메라 및 녹화기 요금제와 사용 한도를 확인합니다.",
            "모든 채널이 잠금 해제되지 않았을 때는 ‘표시할 카메라 선택’으로 사용 가능한 자리를 배정합니다. 완전히 잠금 해제한 뒤에는 이 목록이 필요하지 않습니다.",
            "구매와 ‘구매 복원’은 Apple이 제공하는 상태를 따릅니다. 요금제는 카메라 자체가 제공하는 프로토콜, 권한이나 재생 기능을 바꾸지 않습니다."
          ]],
          ["항목별 초기화와 삭제", [
            "‘기본 설정 복원’은 추가한 기기를 유지한 채 외관, 언어, 화질, LiveView Mix와 기타 환경설정을 초기화합니다.",
            "‘모든 데이터 삭제’는 로컬 기기, 카메라와 키체인 비밀번호를 제거하며 iCloud 백업이나 구독에는 영향을 주지 않습니다.",
            "‘iCloud 백업 삭제’는 암호화된 클라우드 백업만 제거하고 이 iPhone이나 iPad에 등록된 기기와 설정은 바꾸지 않습니다. iCloud를 사용할 수 없으면 로컬에 표시된 백업 상태만 지울 수 있습니다.",
            "되돌릴 수 없는 삭제 전에 iCloud 동기화 여부와 대상 기기에서 해당 백업 버전을 복원할 수 있는지 확인하세요."
          ]]
        ]],
        ["tv-control", "06", "Apple TV와 웹훅 제어", "비디오 월을 TV로 확장하고 직접 관리하는 엔드포인트에 연결되는 HTTP 제어 버튼을 추가합니다.", [
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
            "LiveView Mix 설정에서 ‘배치’를 열고 빈 슬롯을 추가한 뒤 해당 슬롯의 유형을 ‘제어’로 설정합니다.",
            "대문·셔터, 차고문, 조명, 도어록, 커튼/블라인드, 장면·자동화, 경보기, 선풍기, 스마트 플러그, 에어컨 또는 사용자 지정 템플릿을 선택합니다. 각 버튼은 아이콘, 라벨, 색상과 확인 요구 사항을 따로 가질 수 있습니다.",
            "각 버튼은 사용자가 지정한 HTTP 또는 HTTPS 엔드포인트로 GET, POST, PUT, DELETE 요청을 보내며 선택적으로 헤더, Content-Type과 JSON 본문을 포함할 수 있습니다."
          ]],
          ["비디오 월에서 제어 실행", [
            "iPhone 또는 iPad에서는 버튼을 탭하고, Apple TV에서는 리모컨으로 포커스를 이동한 뒤 눌러 실행합니다. 패널은 그 자리에서 전송 중, 성공 또는 실패 상태를 보여 줍니다.",
            "열기, 잠금 해제, 경보처럼 되돌리기 어려운 동작에는 확인을 사용하고 필요한 작업만 수행하도록 권한이 좁게 제한된 엔드포인트를 사용하세요.",
            "지원되는 제어 패널 설정은 암호화 백업으로 이동할 수 있습니다. 웹훅 엔드포인트, 인증 정보, 네트워크 접근과 연결된 물리 장비의 안전은 사용자의 책임입니다."
          ]]
        ], "보안 안내: 웹훅 버튼은 사용자가 지정한 네트워크 엔드포인트를 호출합니다. Cam Hub는 엔드포인트, 접근 제어, 잠금장치, 경보 또는 다른 물리 장비의 보안을 검증하지 않습니다. 엔드포인트 권한을 제한하고 인증 정보를 보호하며 되돌리기 어려운 동작에는 확인을 요구하세요."],
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
            "Der Name ist optional. IP-Adresse oder Hostname sowie Benutzername sind erforderlich. Der HTTP-Port ist standardmäßig 80, der RTSP-Port 554; verwenden Sie abweichende Werte aus der Verwaltungsoberfläche des Geräts.",
            "Geben Sie das Passwort ein und tippen Sie auf „Hinzufügen“. Schlägt der Versuch fehl, unterscheidet die App zwischen Verbindungs-, Anmelde- und Kompatibilitätsfehlern.",
            "Verbinden Sie ausschließlich Geräte und Konten, die Ihnen gehören, die Sie verwalten oder für deren Nutzung Sie ausdrücklich autorisiert sind."
          ]],
          ["Automatisch erkennen oder ONVIF verwenden", [
            "Lassen Sie „Über ONVIF verbinden“ zunächst normalerweise deaktiviert, damit Cam Hub eine kompatible gerätespezifische Verbindung ausprobieren und den größtmöglichen Funktionsumfang abfragen kann.",
            "Wird das Gerät nicht erkannt oder möchten Sie das offene Protokoll direkt verwenden, aktivieren Sie „Über ONVIF verbinden“ und fügen Sie es erneut hinzu.",
            "Möglicherweise müssen Sie ONVIF und RTSP in den Geräteeinstellungen aktivieren und ein ONVIF-Konto mit Anzeigeberechtigung anlegen. Verbindungshinweise finden Sie in der Kompatibilitätsreferenz."
          ]],
          ["Kamerakanäle organisieren", [
            "Klappen Sie nach dem Hinzufügen die Gerätekarte auf. Unter „Kanäle“ erscheinen die vom Gerät gemeldeten Kameras.",
            "Aktivieren Sie benötigte und deaktivieren Sie ungenutzte Kanäle. Bei Recorder-Kanälen kann „Kamera ausschalten“ das Streaming beenden, statt nur die Kachel auszublenden.",
            "Offline-Kanäle bleiben abgeblendet in der Geräteliste. Mit „Offline-Kameras ausblenden“ erscheinen sie nicht auf den Live-Überwachungswänden."
          ]],
          ["Gerät prüfen und aktualisieren", [
            "In der aufgeklappten Gerätekarte sehen Sie Modell, Adresse, Port, Seriennummer, Firmware und Anzahl der Kanäle.",
            "Über die Aktion oben rechts können Sie das Gerät umbenennen; durch Herunterziehen wird der aktuelle Kanalstatus neu abgerufen.",
            "Die Taste für schwarze Balken schaltet nur für die aktuelle Ansicht zwischen „Standard“, „Bildfüllend vergrößern“ und „Bildfüllend strecken“ um. Die Vollbildtaste öffnet die Kanalwand dieses Geräts."
          ]]
        ]],
        ["mix", "02", "LiveView Mix Überwachungswand", "Ordnen Sie Kanäle verschiedener Kameras und Recorder auf einem Bildschirm an und passen Sie die Dichte an das verwendete Display an.", [
          ["Kameras für LiveView Mix auswählen", [
            "Öffnen Sie „Einstellungen“ → „LiveView-Mix-Dashboard“.",
            "Wählen Sie in jedem Geräteabschnitt die Kanäle aus. SD oder HD lässt sich pro Kanal festlegen; „Alle SD“ und „Alle HD“ wendet eine Qualität auf die gesamte Auswahl an.",
            "Kehren Sie zu „Live“ zurück und wählen Sie LiveView Mix. Der Tab zeigt eine scrollbare Vorschau; mit „Vollbild“ wird das gewählte Wandlayout angewendet."
          ]],
          ["17 Vollbildlayouts", [
            "Gleichmäßige Raster: 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6 und 7×7.",
            "Fokuslayouts: 1+3, 1+5, 1+7, 1+21 und 1+27. Die erste Kamera belegt die größte Hauptkachel.",
            "Layouts mit mehr als 16 Kacheln tragen eine Bildschirmmarkierung, da ihre hohe Dichte besser für große Displays geeignet ist."
          ]],
          ["Kameras und leere Plätze anordnen", [
            "Tippen Sie in den LiveView-Mix-Einstellungen auf „Wand anordnen“.",
            "Ziehen Sie eine Kachel auf eine andere, um beide zu tauschen. Alternativ können Sie über „Bearbeiten“ die Liste sortieren und durch Wischen löschen. Die Listenreihenfolge füllt das Layout seitenweise.",
            "Mit „Leeren Platz hinzufügen“ bleibt bewusst eine Lücke erhalten. Wählen Sie die leere Kachel aus, um deren Inhalt festzulegen."
          ]],
          ["Drei Bildfüllmethoden", [
            "„Standard“ zeigt das vollständige Bild und fügt bei abweichenden Seitenverhältnissen schwarze Balken hinzu.",
            "„Bildfüllend vergrößern“ erhält das Seitenverhältnis, vergrößert das Bild bis zur vollständigen Kachel und schneidet überstehende Ränder ab.",
            "„Bildfüllend strecken“ füllt die Kachel ohne Beschnitt, kann das Bild jedoch strecken oder stauchen. Die Einstellung kann global oder vorübergehend für einzelne Geräte und Kanäle verwendet werden."
          ]],
          ["Eigene Wasserzeichen", [
            "Öffnen Sie „Wasserzeichen“, aktivieren Sie „Wasserzeichen anzeigen“ und wählen Sie Gerätename, Kameraname oder IP-Adresse.",
            "Passen Sie Position, Deckkraft, Farbe und Textgröße an und wählen Sie Standard-, abgerundete, nichtproportionale oder Serifenschrift.",
            "Für die Lesbarkeit stehen Schatten, Kontur, Fläche oder keine Hervorhebung zur Verfügung. Prüfen Sie in der hellen und dunklen Vorschau die Lesbarkeit bei Tag- und Nachtaufnahmen."
          ]],
          ["Bilder, Uhren, Beschriftungen und Bedienfelder", [
            "Fügen Sie unter „Anordnen“ einen leeren Platz hinzu und öffnen Sie durch Auswahl der Kachel den Editor des Platzes.",
            "„Bild“ verwendet ein vorhandenes oder neu aufgenommenes Foto. „Uhr“ zeigt auf Wunsch Datum, Sekunden und 12-/24-Stunden-Zeit. „Beschriftung“ unterstützt eigenen Text, SF Symbols und Farben.",
            "„Bedienfeld“ erstellt HTTP-Webhook-Tasten mit Vorlagen für Tor, Garage, Licht, Schloss, Vorhang, Szene, Alarm, Lüfter, Steckdose, Klima oder eigene Zwecke. Für sensible Aktionen wie Öffnen oder Entriegeln kann eine Bestätigung verlangt werden.",
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
          ["Schnappschüsse und Teilen", [
            "Tippen Sie in der Steuerleiste des Einzelkanals auf „Schnappschuss“, um das aktuelle Bild vom Gerät anzufordern.",
            "Nach Empfang öffnet Cam Hub eine Vorschau. Über „Teilen“ steht das systemeigene Freigabemenü zur Verfügung.",
            "Ein Schnappschuss kann Personen, Adressen, Zeitstempel oder andere vertrauliche Informationen enthalten. Prüfen Sie Bild, Empfänger und örtliche Vorgaben vor dem Versand."
          ]],
          ["Datum, Zeitleiste und Aufnahmetypen", [
            "Wählen Sie unter der Kanalansicht ein Datum. Cam Hub fragt die Aufnahmen dieses Tages beim Gerät ab.",
            "Sie können zwischen „Daueraufnahme“ und „Ereignisse“ wechseln. Ziehen oder zoomen Sie die Zeitleiste bis zum gewünschten Zeitpunkt unter dem mittleren Cursor oder wählen Sie ein Segment aus der Liste.",
            "Bei der Wiedergabe erscheinen WIEDERGABE und die Gerätezeit. „Zurück zu Live“ öffnet wieder den Livestream. Manche Geräte laden zunächst einen Clip herunter und öffnen ihn anschließend im Systemplayer."
          ]]
        ], 'Verfügbarkeitshinweis: Live-Streaming, Schnappschüsse, <span class="keep-phrase">Haupt-/Nebenstream-Auswahl</span>, Aufnahmesuche, <span class="keep-phrase">Daueraufnahme-/Ereignis-Klassifizierung</span>, Zeitleistennavigation und Wiedergabe hängen von den tatsächlich gemeldeten Gerätefunktionen und den Berechtigungen des angemeldeten Gerätekontos ab.'],
        ["backup", "04", "Verschlüsseltes Backup und Kamerafreigabe", "iCloud-Backup und -Wiederherstellung verwenden keine PIN mehr. Beim Teilen von Kameras können Sie den Freigabecode optional mit einer sechsstelligen PIN sperren.", [
          ["Lokaler Passwortschutz", [
            "Nach dem Hinzufügen wird das Gerätepasswort im Apple-Schlüsselbund gespeichert. Name, Adresse, Ports, Kanäle und App-Einstellungen bleiben in den Gerätedaten.",
            "Cam Hub verwendet diese Angaben nur für von Ihnen angeforderte Verbindungen, Aufnahmesuchen, Schnappschüsse, Backups und Übertragungen.",
            "„Alle Daten löschen“ entfernt lokale Gerätedaten und gespeicherte Passwörter. Nie gesicherte Konfigurationen können auch nach dem Löschen der App unwiederbringlich verloren sein."
          ]],
          ["Verschlüsseltes iCloud-Backup ohne PIN", [
            "Öffnen Sie „Einstellungen“ → „In iCloud sichern“, wählen Sie iPhone/iPad oder Apple TV als Ziel und erstellen Sie das Backup ohne PIN.",
            "Das Backup umfasst unterstützte Geräte, Zugangsdaten, Kanäle, LiveView Mix und App-Einstellungen. Cam Hub verschlüsselt es vor dem Speichern in Ihrer privaten iCloud.",
            "Prüfen Sie unter „Aktuelles Backup“, ob die neue Zeit und Geräteanzahl angezeigt werden."
          ]],
          ["Aus iCloud wiederherstellen", [
            "Öffnen Sie „Einstellungen“ → „Aus iCloud wiederherstellen“ und wählen Sie das Backup. Auf iPhone, iPad und Apple TV ist keine PIN-Prüfung erforderlich.",
            "Verwenden Sie möglichst dieselbe App-Version und prüfen Sie, ob derselbe Apple Account wie beim Backup angemeldet ist. Ältere Backups müssen gegebenenfalls neu erstellt werden, bevor sie erscheinen.",
            "Die Wiederherstellung unterliegt den aktuellen Limits des Abos. Prüfen Sie danach Geräteadressen, Kanäle und LiveView Mix im derzeitigen Netzwerk."
          ]],
          ["Kameras mit optionaler PIN teilen", [
            "Öffnen Sie „Einstellungen“ → „Kameras teilen“, wählen Sie die Kameras und erstellen Sie einen verschlüsselten Freigabecode. Entscheiden Sie, ob er mit einer PIN gesperrt wird.",
            "Bei aktivierter PIN-Sperre geben Sie sechs Ziffern ein und bestätigen sie. Der Empfänger muss die PIN beim Importieren oder Wiederherstellen der geteilten Kameras bestätigen. Ohne PIN wird der vollständige Code direkt importiert.",
            "Der Import enthält Geräte und Zugangsdaten und unterliegt den Limits des Abos auf dem Zielgerät. Senden Sie vollständigen Code und PIN nur an vertrauenswürdige Empfänger und veröffentlichen Sie sie nie in Chats, Tickets oder auf Websites."
          ]]
        ]],
        ["preferences", "05", "Anzeige, Streaming und Datensteuerung", "Passen Sie die App an Netzwerk und Gerät an und behandeln Sie Einstellungen, lokale Daten und iCloud-Backup beim Zurücksetzen getrennt.", [
          ["Offline-Kameras ausblenden", [
            "Mit „Einstellungen“ → „Offline-Kameras ausblenden“ werden Kameras ohne Signal aus Live-Ansicht und Überwachungswänden entfernt.",
            "In der Kanalliste der Geräte bleiben sie abgeblendet sichtbar, damit sie nicht als gelöscht gelten und nach Rückkehr des Signals wieder erscheinen können."
          ]],
          ["Streams außerhalb des Bildschirms verbunden lassen", [
            "Erkennt Cam Hub ein kompatibles Gerät mit längerer Wiederverbindungszeit, erscheint unter „Streaming“ die Option zum Verbundenhalten außerhalb des Bildschirms.",
            "Aktivierte Kanäle bleiben nach dem Wegscrollen verbunden und starten bei der Rückkehr schneller. Dies beansprucht fortlaufend Netzwerk, Energie und Systemressourcen; lassen Sie es deaktiviert, wenn kein sofortiges Fortsetzen nötig ist."
          ]],
          ["Startansicht auswählen", [
            "Öffnen Sie „Einstellungen“ → „LiveView Mix“ → „Beim Start öffnen“.",
            "„Zuletzt angesehen“ kehrt zur vorherigen Auswahl zurück, „LiveView Mix“ öffnet die geräteübergreifende Wand und ein einzelner Geräteeintrag öffnet dieses Gerät.",
            "Wurde das gewählte Gerät gelöscht oder LiveView Mix nicht eingerichtet, wechselt die App zu einem verfügbaren Bildschirm, statt ein ungültiges Ziel beizubehalten."
          ]],
          ["Abos und sichtbare Kameras", [
            "Unter „Einstellungen“ → „Abos“ sehen Sie aktive Kamera- und NVR-Abos sowie deren Nutzungslimits.",
            "Sind nicht alle Kanäle freigeschaltet, weist „Wähle, welche Kameras angezeigt werden“ die verfügbaren Plätze zu. Bei vollständiger Freischaltung ist diese Liste nicht mehr erforderlich.",
            "Käufe und „Käufe wiederherstellen“ folgen dem von Apple gemeldeten Status. Ein Abo ändert weder Protokolle und Berechtigungen noch Wiedergabefunktionen des Geräts."
          ]],
          ["Getrennt zurücksetzen und löschen", [
            "„Standardeinstellungen wiederherstellen“ setzt Darstellung, Sprache, Qualität, LiveView Mix und weitere Einstellungen zurück, behält aber hinzugefügte Geräte.",
            "„Alle Daten löschen“ entfernt lokale Geräte, Kameras und Schlüsselbund-Passwörter, ohne iCloud-Backups oder Abonnements zu verändern.",
            "„iCloud-Backup löschen“ entfernt nur das verschlüsselte Cloud-Backup. Bei nicht verfügbarer iCloud wird gegebenenfalls lediglich der lokal angezeigte Backup-Status gelöscht.",
            "Prüfen Sie vor einer endgültigen Löschung die iCloud-Synchronisierung und die Wiederherstellbarkeit der Backup-Version auf dem Zielgerät."
          ]]
        ]],
        ["tv-control", "06", "Apple TV und Webhook-Steuerung", "Bringen Sie die Überwachungswand auf den Fernseher und ergänzen Sie HTTP-Steuerungen für selbst verwaltete Endpunkte.", [
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
            "Öffnen Sie in den LiveView-Mix-Einstellungen „Wand anordnen“, fügen Sie einen leeren Platz hinzu und stellen Sie dessen Typ auf „Bedienfeld“.",
            "Wählen Sie Tor, Garage, Licht, Schloss, Vorhang, Szene, Alarm, Lüfter, Steckdose, Klima oder eine eigene Vorlage. Jede Taste erhält auf Wunsch eigenes Symbol, Beschriftung, Farbe und Bestätigung.",
            "Jede Taste kann GET, POST, PUT oder DELETE an einen von Ihnen angegebenen HTTP- oder HTTPS-Endpunkt senden, einschließlich optionaler Header, Content-Type und JSON-Text."
          ]],
          ["Bedienfeld-Tasten auf der Überwachungswand ausführen", [
            "Tippen Sie auf iPhone oder iPad auf eine Taste. Auf Apple TV bewegen Sie den Fokus mit der Fernbedienung und drücken zum Ausführen. Das Bedienfeld zeigt Senden, Erfolg oder Fehler direkt an.",
            "Verlangen Sie für Öffnen, Entriegeln, Alarm und andere schwer rückgängig zu machende Aktionen eine Bestätigung und verwenden Sie nur eng begrenzte Endpunkte.",
            "Unterstützte Bedienfeld-Einstellungen können mit verschlüsselten Backups übertragen werden. Webhook-Endpunkte, Zugangsdaten, Netzwerkzugriff und Sicherheit verbundener physischer Geräte bleiben in Ihrer Verantwortung."
          ]]
        ], "Sicherheitshinweis: Webhook-Tasten rufen die von Ihnen angegebenen Netzwerkendpunkte auf. Cam Hub prüft weder deren Sicherheit noch die von Zugriffssteuerungen, Schlössern, Alarmen oder anderen physischen Geräten. Begrenzen Sie Berechtigungen, schützen Sie Zugangsdaten und verlangen Sie bei schwer umkehrbaren Aktionen eine Bestätigung."],
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
            "El nombre es opcional; la dirección IP o el nombre de host y el nombre de usuario son obligatorios. Los puertos predeterminados son 80 para HTTP y 554 para RTSP; usa los valores del panel del equipo si son distintos.",
            "Introduce la contraseña y toca Añadir. Si falla, la app distingue entre errores de conexión, credenciales y equipos no compatibles.",
            "Conéctate únicamente a equipos y cuentas que sean tuyos, que administres o para los que tengas autorización expresa."
          ]],
          ["Detección automática u ONVIF", [
            "Deja desactivado al principio Conectar por ONVIF para que Cam Hub pruebe una conexión nativa compatible y solicite todas las funciones disponibles.",
            "Si no reconoce el equipo, o si prefieres el protocolo abierto, activa Conectar por ONVIF y vuelve a añadirlo.",
            "Puede ser necesario activar ONVIF y RTSP en el equipo y crear una cuenta ONVIF con permiso de visualización; consulta también la Referencia de compatibilidad."
          ]],
          ["Organizar los canales", [
            "Tras añadir el equipo, despliega su tarjeta para ver los canales que comunica.",
            "Activa los canales que quieras ver y desactiva los demás. En algunos grabadores, Apagar cámara detiene la transmisión en vez de limitarse a ocultar la tarjeta.",
            "Los canales sin conexión permanecen atenuados en Dispositivos; con Ocultar cámaras sin conexión no aparecen en los murales en vivo."
          ]],
          ["Consultar y actualizar el equipo", [
            "La tarjeta muestra modelo, dirección, puertos, número de serie, firmware y cantidad de canales.",
            "Las acciones de la esquina superior permiten cambiar el nombre, y deslizar para actualizar vuelve a consultar el estado.",
            "El control de relleno alterna entre Ajustar, Recortar y Estirar; el botón de pantalla completa abre el mural de canales del equipo."
          ]]
        ]],
        ["mix", "02", "Mural de LiveView Mix", "Combina canales de cámaras y grabadores distintos en una sola vista y adapta la densidad a la pantalla.", [
          ["Elegir cámaras para LiveView Mix", [
            "Abre Ajustes → Panel de LiveView Mix.",
            "Selecciona los canales de cada equipo y elige SD o HD para cada uno; Todo SD y Todo HD aplican la calidad en bloque.",
            "En la pestaña En vivo, elige LiveView Mix. La vista normal permite desplazarse y Pantalla completa aplica el diseño completo."
          ]],
          ["Diecisiete diseños de pantalla completa", [
            "Las cuadrículas uniformes disponibles son 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6 y 7×7.",
            "Los diseños con cámara principal son 1+3, 1+5, 1+7, 1+21 y 1+27; el primer canal ocupa la casilla grande.",
            "Los diseños de más de 16 casillas llevan un indicador de pantalla y resultan más adecuados para televisores o monitores grandes."
          ]],
          ["Organizar cámaras y casillas vacías", [
            "En los ajustes de LiveView Mix, abre Organizar cámaras.",
            "Arrastra una casilla sobre otra para intercambiarlas, o toca Editar para reordenar la lista y desliza para eliminar elementos; el orden se reparte por páginas.",
            "Añadir casilla vacía reserva un hueco. Tócala para asignarle otro tipo de contenido."
          ]],
          ["Tres modos de relleno", [
            "Ajustar conserva toda la imagen y añade franjas negras cuando no coinciden las proporciones.",
            "Recortar mantiene la proporción, amplía hasta llenar la casilla y corta los bordes sobrantes.",
            "Estirar llena sin recortar, pero puede deformar la imagen; puede usarse como valor general o cambiarse temporalmente por equipo o canal."
          ]],
          ["Marca de agua personalizable", [
            "Activa Mostrar marca de agua y elige Nombre del dispositivo, Nombre de la cámara o Dirección IP.",
            "Puedes ajustar posición, opacidad, color, tamaño y las tipografías Estándar, Redondeada, Monoespaciada o Serif.",
            "Para mejorar la lectura, usa Sombra, Contorno, Placa o Ninguno y comprueba la vista previa sobre fondos claros y oscuros."
          ]],
          ["Imagen, reloj, etiqueta y controles", [
            "Añade una casilla vacía en Organizar y ábrela en el editor.",
            "Imagen permite elegir o tomar una foto; Reloj configura fecha, segundos y formato de 12 o 24 horas; Etiqueta admite texto, SF Symbol y color.",
            "Panel crea botones webhook HTTP para puerta, garaje, luz, cerradura, cortina, escena, alarma, ventilador, enchufe, climatización o una plantilla propia; las acciones delicadas pueden exigir confirmación.",
            "Las imágenes y los ajustes compatibles se trasladan con la copia cifrada; sigues siendo responsable de crear y proteger los endpoints webhook."
          ]]
        ]],
        ["viewing", "03", "Vídeo en vivo y grabaciones", "La vista individual prioriza el detalle; las vistas múltiples permiten equilibrar calidad, ancho de banda y carga.", [
          ["Calidad en vista única y múltiple", [
            "En Ajustes → Calidad predeterminada, configura por separado HD o SD para Una sola cámara y para Varias cámaras. Estos valores se aplican solo a las pantallas de dispositivos: el mural del dispositivo y el de En vivo, el mural a pantalla completa del dispositivo y una cámara abierta desde un dispositivo.",
            "En un canal individual, el selector SD/HD aparece si el equipo comunica que permite cambiar entre transmisión principal y secundaria.",
            "LiveView Mix no usa estos valores: la vista múltiple reproduce cada canal con la calidad asignada en la lista de canales, uno a uno o con Todo SD/Todo HD; SD suele reducir ancho de banda y consumo al reproducir muchas casillas.",
            "Al abrir una sola cámara desde LiveView Mix (pantalla completa o ampliada), siempre se muestra en HD. El botón SD/HD en pantalla cambia solo esa visualización y no modifica ningún ajuste."
          ]],
          ["Zoom y pantalla completa horizontal", [
            "Pellizca para ampliar una cámara y arrastra la imagen ampliada.",
            "Un doble toque alterna rápidamente entre 2,5× y la imagen completa.",
            "Al girar el dispositivo, se ocultan las barras de navegación y controles para aprovechar la pantalla."
          ]],
          ["Capturas y uso compartido", [
            "Toca Captura en la vista individual para solicitar al equipo la imagen actual.",
            "Cuando se recibe, se abre una vista previa desde la que puedes usar el menú Compartir del sistema.",
            "La captura puede mostrar personas, direcciones u otros datos sensibles; revisa el contenido, el destinatario y la normativa local antes de enviarla."
          ]],
          ["Fecha, cronología y tipos de grabación", [
            "Elige una fecha bajo la vista del canal para solicitar al equipo los segmentos de ese día.",
            "Cambia entre Continua y Eventos, arrastra o amplía la cronología hasta la hora deseada o toca directamente un segmento.",
            "La reproducción muestra REPRODUCCIÓN y la hora del equipo; Volver a En vivo restablece la transmisión. Algunos equipos descargan primero el clip y lo abren después en el reproductor del sistema."
          ]]
        ], "Aviso de disponibilidad: el vídeo en vivo, las capturas, el cambio de transmisión principal/secundaria, la búsqueda, las categorías Continua/Eventos, la cronología y la reproducción dependen de las funciones comunicadas por la cámara o el grabador y de los permisos asignados a la cuenta."],
        ["backup", "04", "Copias cifradas y uso compartido de cámaras", "Las copias y restauraciones de iCloud ya no usan PIN. Al compartir cámaras, puedes bloquear el código opcionalmente con un PIN de seis dígitos.", [
          ["Protección local de contraseñas", [
            "Las contraseñas se guardan en el Llavero; nombres, direcciones, puertos, canales y ajustes permanecen en los datos del dispositivo.",
            "Cam Hub usa estos datos solo para conexiones, búsquedas, capturas, copias o transferencias que tú solicitas.",
            "Borrar todos los datos elimina los equipos y las contraseñas locales; desinstalar la app también puede hacer irrecuperable una configuración sin copia."
          ]],
          ["Copia cifrada en iCloud sin PIN", [
            "En Ajustes → Hacer copia en iCloud, elige iPhone/iPad o Apple TV como destino y crea la copia sin configurar un PIN.",
            "Los equipos, credenciales, canales, LiveView Mix y ajustes compatibles se cifran antes de guardarse en tu propio iCloud.",
            "Confirma que Copia actual muestra la hora y la cantidad de equipos correctas."
          ]],
          ["Restaurar desde iCloud", [
            "En Ajustes → Restaurar desde iCloud, elige la copia y continúa. iPhone, iPad y Apple TV no requieren verificación de PIN.",
            "Usa preferiblemente la misma versión de la app y la cuenta de Apple que contiene la copia; las copias antiguas pueden requerir una nueva exportación.",
            "La restauración respeta los límites del plan activo. Revisa después direcciones, canales y LiveView Mix en la red actual."
          ]],
          ["Compartir cámaras con PIN opcional", [
            "Abre Ajustes → Compartir cámaras, selecciona las cámaras y crea un código cifrado. Decide si quieres bloquearlo con un PIN.",
            "Si activas el bloqueo, introduce y confirma seis dígitos. El destinatario debe verificar el PIN al importar o restaurar las cámaras compartidas. Sin PIN, el código completo se importa directamente.",
            "La importación incluye el equipo y sus credenciales y queda sujeta a los límites del plan de destino. Envía el código completo y el PIN solo a destinatarios de confianza; no los publiques en chats, tickets o sitios web."
          ]]
        ]],
        ["preferences", "05", "Pantalla, transmisión y datos", "Adapta la app a la red y al dispositivo, y trata por separado los ajustes, los datos locales y la copia de iCloud al restablecer.", [
          ["Ocultar cámaras sin conexión", [
            "Ajustes → Ocultar cámaras sin conexión las retira de En vivo y de los murales mientras no tengan señal.",
            "Siguen atenuadas en la lista de canales, por lo que no parecen eliminadas y pueden reaparecer cuando vuelva la señal."
          ]],
          ["Mantener conectadas las transmisiones fuera de pantalla", [
            "La opción aparece en Transmisión cuando Cam Hub detecta un equipo compatible que tarda más en reconectar.",
            "Los canales desplazados fuera de pantalla permanecen conectados y se reanudan antes, a cambio de usar red, energía y recursos; déjala desactivada si no necesitas reanudación inmediata."
          ]],
          ["Elegir la pantalla inicial", [
            "Abre Ajustes → LiveView Mix → Abrir al iniciar.",
            "Visto por última vez vuelve a la selección anterior, LiveView Mix abre el mural combinado y también puede elegirse un equipo concreto.",
            "Si se elimina el equipo elegido o LiveView Mix no está configurado, la app abre una pantalla disponible."
          ]],
          ["Planes y cámaras visibles", [
            "Ajustes → Planes muestra los planes activos de cámaras y grabadores y sus límites.",
            "Cuando no están desbloqueados todos los canales, «Elige qué cámaras se muestran» asigna las plazas disponibles; al desbloquear todo, la lista deja de ser necesaria.",
            "Las compras y Restaurar compras siguen el estado comunicado por Apple. Un plan no cambia los protocolos, permisos ni funciones de reproducción del equipo."
          ]],
          ["Restablecer y borrar por separado", [
            "Restablecer ajustes predeterminados reinicia apariencia, idioma, calidad, LiveView Mix y otras preferencias, pero conserva los equipos.",
            "Borrar todos los datos elimina equipos, cámaras y contraseñas del Llavero sin afectar a las copias de iCloud ni a las suscripciones.",
            "Borrar copia de iCloud elimina solo la copia cifrada; si iCloud no está disponible, puede limitarse a limpiar el estado local mostrado.",
            "Antes de una eliminación irreversible, confirma la sincronización de iCloud y que la versión de la copia pueda restaurarse en el destino."
          ]]
        ]],
        ["tv-control", "06", "Apple TV y controles webhook", "Lleva el mural al televisor y añade controles HTTP para endpoints administrados por ti.", [
          ["Supervisar en Apple TV", [
            "La app de tvOS incluye LiveView Mix, murales por equipo, vista individual a pantalla completa y cronología de grabaciones, diseñados para la navegación por foco con Siri Remote.",
            "Los diseños densos aprovechan las pantallas grandes; cámaras y botones webhook se seleccionan directamente desde el mural.",
            "La transmisión, la reproducción, el cambio entre transmisión principal y secundaria y las funciones de canal siguen dependiendo del equipo, los permisos, el códec y la red."
          ]],
          ["Transferir la configuración desde iPhone o iPad", [
            "En iPhone o iPad, abre Ajustes → Hacer copia en iCloud, selecciona Apple TV como destino y crea una copia cifrada específica sin PIN.",
            "Inicia sesión con la misma cuenta de Apple en Apple TV, abre Restaurar desde iCloud, selecciona la copia y restáurala directamente.",
            "Apple TV solo restaura su copia específica; revisa después las direcciones, los canales y LiveView Mix en la red del televisor."
          ]],
          ["Crear un panel de control webhook", [
            "En los ajustes de LiveView Mix, abre Organizar cámaras, añade una casilla vacía y cambia su tipo a Panel.",
            "Elige puerta, garaje, luz, cerradura, cortina, escena, alarma, ventilador, enchufe, climatización o una plantilla propia; cada botón admite icono, texto, color y confirmación.",
            "Cada botón puede enviar GET, POST, PUT o DELETE al endpoint HTTP o HTTPS que indiques, con cabeceras, Content-Type y cuerpo JSON opcionales."
          ]],
          ["Ejecutar controles desde el mural", [
            "Toca el botón en iPhone o iPad; en Apple TV, enfoca con el mando y pulsa. La casilla muestra enviando, éxito o error.",
            "Exige confirmación para abrir, desbloquear, activar alarmas y otras acciones difíciles de deshacer, y usa endpoints con permisos mínimos.",
            "Los controles compatibles se transfieren con las copias cifradas. Los endpoints, credenciales, acceso de red y seguridad del equipo físico siguen siendo responsabilidad del usuario."
          ]]
        ], "Aviso de seguridad: los botones webhook llaman a los endpoints de red que configures. Cam Hub no valida la seguridad de endpoints, controles de acceso, cerraduras, alarmas ni otros equipos físicos. Limita los permisos, protege las credenciales y exige confirmación para acciones difíciles de deshacer."]
      ],
      note: "Cam Hub no elude los controles de acceso del equipo. Las funciones varían según el modelo, firmware, implementación del protocolo, permisos de la cuenta, códec y condiciones de red."
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
            "Le nom est facultatif. L’adresse IP ou le nom d’hôte et le nom d’utilisateur sont obligatoires. Les ports par défaut sont 80 pour HTTP et 554 pour RTSP ; utilisez ceux de l’interface d’administration s’ils diffèrent.",
            "Saisissez le mot de passe et touchez Ajouter. En cas d’échec, l’app distingue les erreurs de connexion, d’identifiants et d’appareil non pris en charge.",
            "Connectez uniquement des appareils et comptes que vous possédez, administrez ou êtes expressément autorisé à utiliser."
          ]],
          ["Détection automatique ou ONVIF", [
            "Laissez d’abord Connecter via ONVIF désactivé afin que Cam Hub tente une connexion native compatible et demande toutes les fonctions disponibles.",
            "Si l’appareil n’est pas reconnu, ou si vous préférez le protocole ouvert, activez Connecter via ONVIF et ajoutez-le de nouveau.",
            "Vous devrez peut-être activer ONVIF et RTSP sur l’appareil et créer un compte ONVIF autorisé à visionner les images ; consultez aussi la référence de compatibilité."
          ]],
          ["Organiser les canaux", [
            "Après l’ajout, développez la fiche de l’appareil pour afficher les canaux qu’il déclare.",
            "Activez les canaux utiles et désactivez les autres. Sur certains enregistreurs, Désactiver arrête le flux au lieu de simplement masquer la vignette.",
            "Les canaux hors ligne restent grisés dans Appareils ; l’option Masquer les caméras hors ligne les retire des murs en direct."
          ]],
          ["Consulter et actualiser l’appareil", [
            "La fiche indique le modèle, l’adresse, les ports, le numéro de série, le micrologiciel et le nombre de canaux.",
            "Les actions en haut permettent de renommer l’appareil ; tirer pour actualiser interroge de nouveau l’état des canaux.",
            "Le mode de remplissage alterne Ajuster, Recadrer et Étirer ; le bouton plein écran ouvre le mur de canaux de cet appareil."
          ]]
        ]],
        ["mix", "02", "Mur LiveView Mix", "Réunissez des canaux issus de plusieurs caméras et enregistreurs, puis adaptez leur densité à l’écran.", [
          ["Choisir les caméras de LiveView Mix", [
            "Ouvrez Réglages → Tableau de bord LiveView Mix.",
            "Sélectionnez les canaux par appareil et choisissez SD ou HD pour chacun ; Tout SD et Tout HD appliquent une qualité commune.",
            "Dans l’onglet En direct, choisissez LiveView Mix. La vue normale défile, tandis que Plein écran applique la disposition complète."
          ]],
          ["Dix-sept dispositions plein écran", [
            "Les grilles régulières sont 2×2, 2×3, 3×3, 3×4, 4×4, 5×4, 6×4, 5×5, 7×4, 6×5, 6×6 et 7×7.",
            "Les dispositions avec vue principale sont 1+3, 1+5, 1+7, 1+21 et 1+27 ; le premier canal occupe la grande case.",
            "Un symbole d’écran signale les dispositions de plus de 16 cases, mieux adaptées aux grands moniteurs ou téléviseurs."
          ]],
          ["Réorganiser et ajouter des cases vides", [
            "Dans les réglages de LiveView Mix, ouvrez Organiser le mur.",
            "Faites glisser une case sur une autre pour les permuter, ou utilisez Modifier pour réordonner la liste et supprimer des éléments ; l’ordre remplit les pages successives.",
            "Ajouter une case vide réserve un emplacement. Touchez-le pour choisir le contenu à y afficher."
          ]],
          ["Trois modes de remplissage", [
            "Ajuster conserve l’image entière et ajoute des bandes lorsque les proportions diffèrent.",
            "Recadrer conserve les proportions, agrandit l’image pour remplir la case et coupe les bords qui dépassent.",
            "Étirer remplit sans recadrer mais peut déformer l’image ; ce choix peut être global ou temporaire pour un appareil ou un canal."
          ]],
          ["Filigrane personnalisable", [
            "Activez Afficher le filigrane, puis choisissez le nom de l’appareil, le nom de la caméra et l’adresse IP.",
            "Réglez la position, l’opacité, la couleur, la taille et la police Système, Arrondie, À chasse fixe ou Serif.",
            "Pour la lisibilité, choisissez Ombre, Contour, Arrière-plan ou Aucun et contrôlez l’aperçu sur fonds clair et sombre."
          ]],
          ["Image, horloge, étiquette et commandes", [
            "Ajoutez une case vide dans Organiser, puis ouvrez-la dans l’éditeur.",
            "Image permet de choisir ou prendre une photo ; Horloge règle la date, les secondes et le format 12/24 h ; Étiquette accepte texte, SF Symbol et couleur.",
            "Panneau crée des boutons webhook HTTP pour portail, garage, éclairage, serrure, rideau, scène, alarme, ventilateur, prise, climatisation ou un modèle personnalisé ; une confirmation peut être imposée.",
            "Les images et réglages compatibles suivent la sauvegarde chiffrée. La création et la sécurisation des points de terminaison webhook restent sous votre responsabilité."
          ]]
        ]],
        ["viewing", "03", "Direct et enregistrements", "La vue unique privilégie le détail ; les vues multiples permettent d’équilibrer qualité, débit et charge de l’appareil.", [
          ["Qualité en vue unique ou multiple", [
            "Dans Réglages → Qualité par défaut, choisissez séparément HD ou SD pour une caméra et pour plusieurs caméras. Ces valeurs s’appliquent uniquement aux écrans d’appareil : mur de l’appareil et mur En direct, mur plein écran de l’appareil et caméra ouverte depuis un appareil.",
            "Dans un canal unique, le choix SD/HD apparaît si l’appareil déclare pouvoir basculer entre flux principal et secondaire.",
            "LiveView Mix n’utilise pas ces valeurs : la vue multiple lit chaque canal dans la qualité qui lui est attribuée dans la liste des canaux, un par un ou avec Tout SD/Tout HD ; la SD réduit généralement le débit et la charge avec de nombreuses cases.",
            "Une caméra ouverte seule depuis LiveView Mix (plein écran ou gros plan) s’affiche toujours en HD. Le bouton SD/HD à l’écran ne change que cet affichage et ne modifie aucun réglage."
          ]],
          ["Zoom et plein écran en paysage", [
            "Pincez pour agrandir une caméra, puis faites glisser l’image agrandie.",
            "Un double toucher bascule rapidement entre 2,5× et la vue complète.",
            "En orientation paysage, les barres de navigation et de commande disparaissent afin d’utiliser au mieux l’écran."
          ]],
          ["Instantanés et partage", [
            "Touchez Instantané dans la vue d’un canal pour demander l’image actuelle à l’appareil.",
            "Une fois reçue, elle s’ouvre dans un aperçu donnant accès au partage système.",
            "L’image peut contenir des personnes, adresses ou données sensibles ; vérifiez le contenu, le destinataire et les règles locales avant l’envoi."
          ]],
          ["Date, chronologie et types d’enregistrement", [
            "Choisissez une date sous le canal pour demander les séquences de cette journée.",
            "Basculez entre Continu et Événements, faites glisser ou zoomez la chronologie jusqu’à l’heure voulue, ou touchez directement un segment.",
            "La lecture affiche l’indicateur LECTURE et l’heure de l’appareil ; Retour au direct rétablit le flux. Certains appareils téléchargent d’abord la séquence puis l’ouvrent dans le lecteur système."
          ]]
        ], "Avis de disponibilité : le direct, les instantanés, le changement de flux principal/secondaire, la recherche, les catégories Continu/Événements, la chronologie et la lecture dépendent des capacités déclarées par la caméra ou l’enregistreur et des autorisations accordées au compte."],
        ["backup", "04", "Sauvegarde chiffrée et partage de caméras", "La sauvegarde et la restauration iCloud n’utilisent plus de PIN. Lors du partage de caméras, vous pouvez verrouiller le code avec un PIN facultatif à six chiffres.", [
          ["Protection locale des mots de passe", [
            "Les mots de passe sont conservés dans le trousseau Apple ; noms, adresses, ports, canaux et réglages restent dans les données de l’appareil.",
            "Cam Hub n’utilise ces informations que pour les connexions, recherches, instantanés, sauvegardes ou transferts que vous demandez.",
            "Supprimer toutes les données efface appareils et mots de passe locaux ; désinstaller l’app peut aussi rendre irrécupérable une configuration non sauvegardée."
          ]],
          ["Sauvegarde iCloud chiffrée sans PIN", [
            "Dans Réglages → Sauvegarder sur iCloud, choisissez iPhone/iPad ou Apple TV comme destination et créez la sauvegarde sans définir de PIN.",
            "Appareils, identifiants, canaux, LiveView Mix et réglages compatibles sont chiffrés avant d’être stockés dans votre propre iCloud.",
            "Vérifiez l’heure et le nombre d’appareils dans Sauvegarde actuelle."
          ]],
          ["Restaurer depuis iCloud", [
            "Dans Réglages → Restaurer depuis iCloud, choisissez la sauvegarde et continuez. Aucun PIN n’est demandé sur iPhone, iPad ou Apple TV.",
            "Utilisez de préférence la même version de l’app et le compte Apple qui contient la sauvegarde ; une ancienne sauvegarde peut devoir être recréée.",
            "La restauration respecte les limites de la formule active. Vérifiez ensuite les adresses, canaux et LiveView Mix sur le réseau actuel."
          ]],
          ["Partager les caméras avec un PIN facultatif", [
            "Ouvrez Réglages → Partager les caméras, sélectionnez les caméras et créez un code chiffré. Choisissez de le verrouiller ou non avec un PIN.",
            "Si le verrouillage est activé, saisissez et confirmez six chiffres. Le destinataire doit vérifier le PIN pour importer ou restaurer les caméras partagées. Sans PIN, le code complet s’importe directement.",
            "L’importation contient l’appareil et ses identifiants et reste soumise aux limites de la formule de destination. Envoyez le code complet et le PIN uniquement à une personne de confiance ; ne les publiez jamais dans un chat, un ticket ou un site web."
          ]]
        ]],
        ["preferences", "05", "Affichage, streaming et données", "Adaptez l’app au réseau et à l’appareil, et gérez séparément les réglages, les données locales et la sauvegarde iCloud lors d’une réinitialisation.", [
          ["Masquer les caméras hors ligne", [
            "Réglages → Masquer les caméras hors ligne les retire du direct et des murs lorsqu’elles n’ont aucun signal.",
            "Elles restent grisées dans la liste des canaux, ne sont donc pas confondues avec des éléments supprimés et réapparaissent au retour du signal."
          ]],
          ["Maintenir les flux hors écran", [
            "L’option apparaît sous Streaming lorsque Cam Hub détecte un appareil compatible dont la reconnexion prend davantage de temps.",
            "Les canaux hors écran restent connectés et reprennent plus vite, au prix d’un usage continu du réseau, de l’énergie et des ressources ; désactivez-la si cette reprise n’est pas nécessaire."
          ]],
          ["Choisir l’écran de démarrage", [
            "Ouvrez Réglages → LiveView Mix → Ouvrir au lancement.",
            "Dernière consultation revient au choix précédent, LiveView Mix ouvre le mur combiné et vous pouvez également désigner un appareil.",
            "Si cet appareil est supprimé ou si LiveView Mix n’est pas configuré, l’app ouvre un écran disponible."
          ]],
          ["Formules et caméras visibles", [
            "Réglages → Formules affiche les formules actives de caméras et d’enregistreurs ainsi que leurs limites.",
            "Lorsque tous les canaux ne sont pas déverrouillés, Choisir les caméras à afficher attribue les places disponibles ; la liste disparaît après déverrouillage complet.",
            "Achats et Restaurer les achats suivent l’état fourni par Apple. Une formule ne modifie ni les protocoles, ni les autorisations, ni la lecture offerte par l’appareil."
          ]],
          ["Réinitialiser et supprimer séparément", [
            "Rétablir les réglages par défaut réinitialise l’apparence, la langue, la qualité, LiveView Mix et les préférences, mais conserve les appareils.",
            "Supprimer toutes les données efface appareils, caméras et mots de passe du trousseau sans toucher aux sauvegardes iCloud ni aux abonnements.",
            "Supprimer la sauvegarde iCloud efface uniquement la sauvegarde chiffrée ; si iCloud est indisponible, seul l’état local affiché peut être nettoyé.",
            "Avant toute suppression irréversible, vérifiez la synchronisation iCloud et la restauration de cette version sur l’appareil de destination."
          ]]
        ]],
        ["tv-control", "06", "Apple TV et commandes webhook", "Affichez le mur sur le téléviseur et ajoutez des commandes HTTP vers des points de terminaison que vous administrez.", [
          ["Surveiller sur Apple TV", [
            "L’app tvOS comprend LiveView Mix, des murs par appareil, la vue plein écran d’une caméra et une chronologie, conçus pour la navigation par focus avec Siri Remote.",
            "Les dispositions denses conviennent aux grands écrans ; caméras et boutons webhook se sélectionnent directement sur le mur.",
            "Streaming, lecture, choix du flux et fonctions de canal dépendent toujours de l’appareil, des autorisations, du codec et du réseau."
          ]],
          ["Transférer les réglages depuis un iPhone ou iPad", [
            "Sur iPhone ou iPad, ouvrez Réglages → Sauvegarder sur iCloud, choisissez Apple TV comme destination et créez une sauvegarde chiffrée dédiée sans PIN.",
            "Connectez le même compte Apple sur Apple TV, ouvrez Restaurer depuis iCloud, sélectionnez la sauvegarde et restaurez-la directement.",
            "Apple TV ne restaure que sa sauvegarde dédiée ; vérifiez ensuite adresses, canaux et LiveView Mix sur le réseau du téléviseur."
          ]],
          ["Créer un panneau de commandes webhook", [
            "Dans les réglages LiveView Mix, ouvrez Organiser le mur, ajoutez une case vide et définissez son type sur Panneau.",
            "Choisissez portail, garage, éclairage, serrure, rideau, scène, alarme, ventilateur, prise, climatisation ou un modèle personnalisé ; chaque bouton possède icône, étiquette, couleur et confirmation.",
            "Chaque bouton peut envoyer GET, POST, PUT ou DELETE au point de terminaison HTTP ou HTTPS indiqué, avec en-têtes, Content-Type et corps JSON facultatifs."
          ]],
          ["Exécuter les commandes depuis le mur", [
            "Touchez le bouton sur iPhone ou iPad ; sur Apple TV, placez le focus avec la télécommande et appuyez. La case indique envoi, réussite ou échec.",
            "Exigez une confirmation pour l’ouverture, le déverrouillage, l’alarme et les actions difficiles à annuler, et utilisez des points de terminaison aux droits strictement limités.",
            "Les réglages de commande compatibles suivent les sauvegardes chiffrées. Points de terminaison, identifiants, accès réseau et sécurité des équipements physiques restent sous votre responsabilité."
          ]]
        ], "Avis de sécurité : les boutons webhook appellent les points de terminaison réseau que vous indiquez. Cam Hub ne valide pas la sécurité des points de terminaison, contrôles d’accès, serrures, alarmes ou autres équipements physiques. Limitez les droits, protégez les identifiants et exigez une confirmation pour toute action difficile à annuler."]
      ],
      note: "Cam Hub ne contourne pas les contrôles d’accès des appareils. Les fonctions varient selon le modèle, le micrologiciel, l’implémentation du protocole, les autorisations du compte, le codec et le réseau."
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
          ["تجهيز معلومات الاتصال", ["افتح «الأجهزة» واضغط «إضافة جهاز».", "الاسم اختياري، بينما يلزم عنوان IP أو اسم المضيف واسم المستخدم. المنفذ الافتراضي هو 80 لـ HTTP و554 لـ RTSP؛ استخدم قيم لوحة إدارة الجهاز إن اختلفت.", "أدخل كلمة المرور واضغط «إضافة». يميّز التطبيق بين أخطاء الشبكة وبيانات الاعتماد والجهاز غير المدعوم.", "لا تتصل إلا بجهاز أو حساب تملكه أو تديره أو لديك إذن صريح باستخدامه."]],
          ["الاكتشاف التلقائي أو ONVIF", ["اترك الاتصال عبر ONVIF معطلاً أولاً ليجرّب Cam Hub اتصالاً أصلياً متوافقاً ويحصل على الميزات المتاحة.", "إذا لم يُعرَف الجهاز، أو أردت البروتوكول المفتوح، فعّل ONVIF ثم أضف الجهاز من جديد.", "قد يلزم تفعيل ONVIF وRTSP وإنشاء حساب ONVIF يملك إذن المشاهدة؛ راجع مرجع التوافق أيضاً."]],
          ["تنظيم القنوات", ["وسّع بطاقة الجهاز بعد إضافته لعرض القنوات التي يبلغ عنها.", "فعّل القنوات المطلوبة وعطّل البقية. في بعض المسجّلات يوقف خيار إيقاف الكاميرا البث بدلاً من إخفاء البطاقة فقط.", "تبقى القنوات غير المتصلة باهتة في صفحة الأجهزة؛ ويزيلها خيار إخفاء الكاميرات غير المتصلة من جدران البث المباشر."]],
          ["عرض معلومات الجهاز وتحديثها", ["تعرض البطاقة الطراز والعنوان والمنافذ والرقم التسلسلي والبرنامج الثابت وعدد القنوات.", "تتيح إجراءات الأعلى إعادة التسمية، ويسحب التحديث حالة القنوات من الجهاز مجدداً.", "يبدّل زر الأشرطة السوداء بين «افتراضي» و«تكبير للملء» و«تمديد للملء»، ويفتح زر ملء الشاشة جدار قنوات الجهاز."]]
        ]],
        ["mix", "02", "جدار LiveView Mix", "اجمع قنوات من كاميرات ومسجّلات مختلفة في شاشة واحدة واضبط كثافتها حسب حجم العرض.", [
          ["اختيار كاميرات LiveView Mix", ["افتح «الإعدادات» ← «لوحة LiveView Mix».", "اختر القنوات ضمن كل جهاز وحدد SD أو HD لكل قناة، أو طبّق «الكل SD» و«الكل HD».", "اختر LiveView Mix من علامة التبويب «مباشر»؛ تسمح المعاينة بالتمرير، بينما يطبّق ملء الشاشة التخطيط الكامل."]],
          ["سبعة عشر تخطيطاً لملء الشاشة", ["الشبكات المتساوية هي 2×2 و2×3 و3×3 و3×4 و4×4 و5×4 و6×4 و5×5 و7×4 و6×5 و6×6 و7×7.", "تخطيطات المشهد الرئيسي هي 1+3 و1+5 و1+7 و1+21 و1+27، وتوضع القناة الأولى في المربّع الكبير.", "تظهر علامة شاشة على التخطيطات التي تتجاوز 16 مربّعاً لأنها أنسب للشاشات والتلفزيونات الكبيرة."]],
          ["ترتيب الكاميرات والخانات الفارغة", ["افتح «ترتيب الجدار» من إعدادات LiveView Mix.", "اسحب مربّعاً فوق آخر لتبديلهما، أو استخدم «تحرير» لإعادة ترتيب القائمة وحذف العناصر؛ يملأ الترتيب الصفحات بالتتابع.", "يضيف خيار «إضافة خانة فارغة» موضعاً مقصوداً؛ اضغطه لتحديد محتواه."]],
          ["ثلاثة أوضاع لملء الصورة", ["يحافظ «افتراضي» على الصورة كاملة ويضيف أشرطة سوداء عند اختلاف النسب.", "يحافظ «تكبير للملء» على النسبة ويكبّر الصورة حتى تملأ المربّع مع اقتطاع الأطراف.", "يملأ «تمديد للملء» المربّع دون قص لكنه قد يشوّه الصورة، ويمكن اعتماده عاماً أو تغييره مؤقتاً لقناة أو جهاز."]],
          ["علامة مائية قابلة للتخصيص", ["فعّل «عرض العلامة المائية» واختر اسم الجهاز واسم الكاميرا وعنوان IP.", "اضبط الموضع والعتامة واللون وحجم النص والخط: «النظام» أو «مستدير» أو «ثابت العرض» أو «مذيّل».", "اختر من «وضوح القراءة» «ظل» أو «حدود» أو «الخلفية» أو «بلا»، وافحص المعاينة على خلفية فاتحة وأخرى داكنة."]],
          ["صورة وساعة وملصق ولوحة تحكم", ["أضف خانة فارغة من شاشة الترتيب ثم افتح محررها.", "تتيح «صورة» الاختيار أو التصوير، وتضبط «الساعة» التاريخ والثواني ونظام 12/24 ساعة، ويدعم «ملصق» النص وSF Symbol واللون.", "تنشئ «لوحة تحكم» أزرار Webhook للبوابة والمرأب والإضاءة والقفل والستارة والمشهد والإنذار والمروحة والمقبس والتكييف أو قالب مخصص، مع إمكانية طلب التأكيد.", "تنتقل الصور والإعدادات المدعومة مع النسخة المشفرة؛ وتبقى مسؤولاً عن إنشاء نقاط Webhook وحمايتها."]]
        ]],
        ["viewing", "03", "البث المباشر والتسجيلات", "تعطي الشاشة المنفردة أولوية للتفاصيل، وتوازن الشاشات المتعددة بين الجودة وعرض النطاق وحمل الجهاز.", [
          ["جودة العرض المنفرد والمتعدد", ["اضبط HD أو SD بصورة منفصلة لـ«كاميرا واحدة» و«كاميرات متعددة» من «الإعدادات» ← «الجودة الافتراضية». تنطبق هذه القيم على شاشات الأجهزة فقط: جدار الجهاز وجدار «مباشر»، وجدار الجهاز بملء الشاشة، والكاميرا المفتوحة من جهاز.", "يظهر اختيار SD/HD في القناة المنفردة إذا أبلغ الجهاز عن دعم التبديل بين البث الرئيسي والفرعي.", "لا يستخدم LiveView Mix هذه القيم: يعرض العرض المتعدد كل قناة بالجودة المحددة لها في قائمة القنوات، واحدة تلو الأخرى أو عبر «الكل SD» أو «الكل HD»؛ وتخفف SD عادة استهلاك الشبكة والموارد عند تشغيل مربّعات كثيرة.", "عند فتح كاميرا واحدة من LiveView Mix (ملء الشاشة أو التكبير) تُعرض دائمًا بدقة HD. زر SD/HD على الشاشة يبدّل لهذا العرض فقط ولا يغيّر أي إعداد."]],
          ["التكبير وملء الشاشة أفقياً", ["استخدم إصبعين لتكبير الكاميرا واسحب الصورة المكبرة.", "يبدّل النقر المزدوج سريعاً بين تكبير 2.5× والصورة الكاملة.", "عند تدوير الجهاز أفقياً تختفي أشرطة التنقل والتحكم للاستفادة من الشاشة."]],
          ["اللقطات والمشاركة", ["اضغط «لقطة» في شاشة القناة لطلب الصورة الحالية من الجهاز.", "بعد استلامها تظهر المعاينة ويمكن فتح المشاركة الخاصة بالنظام.", "قد تتضمن اللقطة أشخاصاً أو عناوين أو بيانات حساسة؛ راجع المحتوى والمستلم والقوانين المحلية قبل الإرسال."]],
          ["التاريخ والخط الزمني وأنواع التسجيل", ["اختر تاريخاً أسفل القناة لطلب مقاطع ذلك اليوم من الجهاز.", "بدّل بين «تسجيل مستمر» و«الأحداث»، واسحب الخط الزمني أو كبّره إلى الوقت المطلوب، أو اضغط مقطعاً مباشرة.", "تعرض شاشة التشغيل كلمة «تشغيل» ووقت الجهاز؛ ويعيد «العودة إلى البث المباشر» البث. تنزّل بعض الأجهزة المقطع أولاً ثم تفتحه في مشغل النظام."]]
        ], "تنبيه التوفر: يعتمد البث واللقطات وتبديل البث الرئيسي/الفرعي والبحث وتصنيف «تسجيل مستمر» و«الأحداث» والخط الزمني والتشغيل على القدرات التي ترسلها الكاميرا أو المسجّل وعلى الصلاحيات الممنوحة للحساب."],
        ["backup", "04", "النسخ المشفرة ومشاركة الكاميرات", "لم يعد النسخ إلى iCloud والاستعادة منه يستخدمان رمز PIN. وعند مشاركة الكاميرات يمكنك اختيار قفل رمز المشاركة برمز PIN اختياري من ستة أرقام.", [
          ["حماية كلمات المرور محلياً", ["تُحفظ كلمات المرور في Apple سلسلة المفاتيح، بينما تبقى الأسماء والعناوين والمنافذ والقنوات والإعدادات في بيانات الجهاز.", "يستخدم Cam Hub المعلومات فقط للاتصال أو البحث أو اللقطات أو النسخ أو النقل الذي تطلبه.", "يمسح «حذف كل البيانات» الأجهزة وكلمات المرور المحلية؛ وقد تجعل إزالة التطبيق إعداداً غير منسوخ غير قابل للاسترداد."]],
          ["نسخة iCloud مشفرة بلا PIN", ["اختر iPhone/iPad أو Apple TV وجهةً من «الإعدادات» ← «نسخ احتياطي إلى iCloud»، ثم أنشئ النسخة من دون إعداد رمز PIN.", "تُشفر الأجهزة وبيانات الاعتماد والقنوات وLiveView Mix والإعدادات المدعومة قبل حفظها في iCloud الخاص بك.", "تحقق من وقت النسخة وعدد الأجهزة المعروضين في «النسخة الاحتياطية الحالية»."]],
          ["الاستعادة من iCloud", ["اختر النسخة من «الإعدادات» ← «الاستعادة من iCloud» وتابع مباشرة؛ لا يطلب iPhone أو iPad أو Apple TV التحقق من PIN.", "يُفضّل استخدام إصدار التطبيق نفسه وحساب Apple الذي يحوي النسخة؛ وقد يلزم إنشاء نسخة أحدث من البيانات القديمة.", "تلتزم الاستعادة بحدود الخطة الحالية. راجع بعدها العناوين والقنوات وLiveView Mix على الشبكة الجديدة."]],
          ["مشاركة الكاميرات برمز PIN اختياري", ["افتح «الإعدادات» ← «مشاركة الكاميرات»، وحدد الكاميرات وأنشئ رمز مشاركة مشفراً. اختر ما إذا كنت تريد قفله برمز PIN.", "عند تفعيل القفل، أدخل ستة أرقام وأكدها. يجب على المستلم التحقق من PIN عند استيراد الكاميرات المشتركة أو استعادتها. ومن دون PIN، يُستورد الرمز الكامل مباشرة.", "يتضمن الاستيراد الأجهزة وبيانات الاعتماد ويخضع لحدود خطة الجهاز المستلم. أرسل الرمز الكامل وPIN إلى شخص موثوق فقط، ولا تنشرهما في محادثة أو تذكرة أو موقع."]]
        ]],
        ["preferences", "05", "العرض والبث وإدارة البيانات", "كيّف التطبيق مع الشبكة والجهاز، وتعامل مع الإعدادات والبيانات المحلية ونسخة iCloud بصورة منفصلة عند إعادة الضبط.", [
          ["إخفاء الكاميرات غير المتصلة", ["يزيلها «الإعدادات» ← «إخفاء الكاميرات غير المتصلة» من البث المباشر والجدران أثناء انقطاع الإشارة.", "تبقى باهتة في قائمة القنوات كي لا تبدو محذوفة، ويمكنها العودة عند رجوع الإشارة."]],
          ["إبقاء البث متصلاً خارج الشاشة", ["يظهر الخيار ضمن «البث» حين يكتشف Cam Hub جهازاً متوافقاً يحتاج وقتاً أطول لإعادة الاتصال.", "تبقى القنوات خارج الشاشة متصلة فتعود أسرع، مقابل استخدام مستمر للشبكة والطاقة والموارد؛ عطّله إن لم تحتج عودة فورية."]],
          ["اختيار شاشة البدء", ["افتح «الإعدادات» ← LiveView Mix ← «الفتح عند التشغيل».", "يعيد «آخر مشاهدة» الاختيار السابق، ويفتح LiveView Mix الجدار المختلط، ويمكن أيضاً اختيار جهاز محدد.", "إذا حُذف الجهاز أو لم يُضبط LiveView Mix ينتقل التطبيق إلى شاشة متاحة."]],
          ["الخطط والكاميرات الظاهرة", ["تعرض «الإعدادات» ← «الخطط» خطط الكاميرات والمسجّلات النشطة وحدودها.", "عند عدم فتح كل القنوات، يخصص «اختَر الكاميرات التي تظهر» المقاعد المتاحة؛ وتنتفي الحاجة إليه بعد الفتح الكامل.", "تتبع المشتريات واستعادتها الحالة التي تقدمها Apple. لا تغيّر الخطة بروتوكولات الجهاز أو صلاحياته أو قدرته على التشغيل."]],
          ["إعادة الضبط والحذف بصورة منفصلة", ["يعيد خيار «استعادة الإعدادات الافتراضية» المظهر واللغة والجودة وLiveView Mix والتفضيلات، مع إبقاء الأجهزة.", "يمسح «حذف كل البيانات» الأجهزة والكاميرات وكلمات سلسلة المفاتيح دون التأثير في نسخ iCloud أو الاشتراكات.", "يحذف الخيار «حذف نسخة iCloud الاحتياطية» النسخة المشفرة فقط؛ وإذا تعذر iCloud فقد يمسح حالة النسخة المحلية المعروضة فحسب.", "قبل الحذف النهائي، تحقق من مزامنة iCloud وإمكان استعادة إصدار النسخة على الجهاز المستهدف."]]
        ]],
        ["tv-control", "06", "Apple TV وتحكم Webhook", "اعرض جدار المراقبة على التلفزيون وأضف أزرار HTTP لنقاط نهاية تديرها بنفسك.", [
          ["المراقبة على Apple TV", ["يتضمن تطبيق tvOS ‏LiveView Mix وجدراناً لكل جهاز وعرض كاميرا بملء الشاشة وخطاً زمنياً للتسجيلات، ومصمم للتنقل بالتركيز عبر Siri Remote.", "تناسب التخطيطات الكثيفة الشاشات الكبيرة، ويمكن اختيار الكاميرا أو زر Webhook مباشرة من الجدار.", "يبقى البث والتشغيل واختيار المسار وميزات القناة معتمداً على الجهاز والصلاحيات والترميز والشبكة."]],
          ["نقل الإعداد من iPhone أو iPad", ["على iPhone أو iPad، افتح «نسخ احتياطي إلى iCloud» واختر Apple TV وجهةً وأنشئ نسخة مشفرة مخصصة من دون PIN.", "سجّل الدخول إلى حساب Apple نفسه على Apple TV، وافتح الاستعادة من iCloud واختر النسخة لاستعادتها مباشرة.", "يستعيد Apple TV نسخته المخصصة فقط؛ راجع بعدها العناوين والقنوات وLiveView Mix ضمن شبكة التلفزيون."]],
          ["إنشاء لوحة تحكم Webhook", ["افتح «ترتيب الجدار» في LiveView Mix، وأضف خانة فارغة وعيّن نوعها «لوحة تحكم».", "اختر بوابة أو مرأباً أو ضوءاً أو قفلاً أو ستارة أو مشهداً أو إنذاراً أو مروحة أو مقبساً أو تكييفاً أو قالباً مخصصاً؛ ولكل زر رمز وتسمية ولون وتأكيد.", "يمكن لكل زر إرسال GET أو POST أو PUT أو DELETE إلى نقطة HTTP أو HTTPS تحددها، مع ترويسات وContent-Type ومحتوى JSON اختياري."]],
          ["تشغيل التحكم من جدار المراقبة", ["اضغط الزر على iPhone أو iPad؛ وعلى Apple TV انقل التركيز بالريموت واضغط. يعرض المربّع الإرسال أو النجاح أو الفشل.", "اطلب التأكيد للفتح وإلغاء القفل والإنذار وسائر الإجراءات صعبة التراجع، واستخدم نقاطاً محدودة الصلاحيات.", "تنتقل إعدادات التحكم المدعومة مع النسخ المشفرة. تبقى نقاط النهاية وبيانات الاعتماد والوصول الشبكي وسلامة المعدات الفعلية مسؤوليتك."]]
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
