[Image: image]

# 카트 모드: 시간 제한 게임 모드

Tutorial

foundational

+10XP

10 mins

2

Unity Technologies

[Image: 카트 모드: 시간 제한 게임 모드 ]Summary

카트 마이크로게임은 기본적으로 타임 트라이얼 게임이며, 최대한 많은 랩을 완주하는 것이 게임의 목표입니다. 이 모드에서는 게임 모드를 시간 제한 모드로 변경하는 방법을 알아봅니다. 시간 내에 코스를 특정 횟수만큼 완주하는 것이 이 모드의 목표입니다.

Languages available:

한국어English日本語한국어한국어

## 1. Unity에서 카트 마이크로게임 열기

Q&A (0)

이 마이크로게임 프로젝트가 아직 준비되지 않았다면, [첫 마이크로게임 설정](https://learn.unity.com/tutorial/set-up-your-first-microgame#) 페이지를 살펴보며 처음부터 시작해 보세요.

시작하기 전에 최신 마이크로게임 프로젝트가 있는지 잠시 살펴보겠습니다.

- 프로젝트 뷰에서 *Assets > Karting >  KartingMicrogame_README.txt*로 이동한 다음 버전이 4.0.0 이상인지 확인합니다.

모두 준비되었나요? 그럼 시작하겠습니다.

단계를 완료로 표시

## 2. Time Limit 게임 모드 설정

Q&A (0)

**계층** 창에서 'ObjectiveTimeLimit' 게임 오브젝트를 클릭하고 **인스펙터** 창을 확인합니다.

[Image: image]

이 모드에서는 Time Limit 게임 모드를 사용하게 됩니다. 마이크로게임에서 Objective 스크립트는 게임 모드 논리를 제어하며 다양한 게임 모드에 맞게 설정할 수 있습니다.

'Time Limit' 게임 모드는 **ObjectiveTimeLimit** 게임 오브젝트의 **ObjectiveReachTargets** 컴포넌트로 제어됩니다. **계층 구조**에서 해당 항목을 클릭한 다음 **인스펙터** 창을 확인하세요. 'Objective Reach Targets' 아래에서 드롭다운 화살표가 확장되었는지 확인하고 필드 옵션을 살펴봅니다.

[Image: image]

**Game** **Mode**파라미터를 찾아 'Time Limit'으로 설정합니다.

[Image: image]

다른 필드 옵션의 내용은 다음과 같습니다.

- **Target** **Name**: 이 목표의 대상 오브젝트를 표시하는 이름입니다.
- **Title**: 목표의 이름입니다.
- **Description**: 목표의 자세한 정보입니다.
- **Is Optional**: 플레이어가 승리하려면 이 목표를 반드시 완료해야 하는지 결정합니다.
- **DelayVisible**: 목표가 표시될 때까지 지연되는 시간(초)입니다.

[Image: image]

- **Is Timed**: 목표에 시간 제한을 둘 것인지 결정합니다. 설정 시 타이머가 종료되면 플레이어가 패배하게 됩니다.
- **Total Time In Secs**: 타이머가 시작될 때 설정할 시간입니다.
- **Display Message**: 목표가 시작될 때 표시할 메시지입니다.
- **Must Collect All Pickups**: 참으로 설정될 경우 플레이어가 모든 픽업을 수집해야 하며, 그렇지 않은 경우**Pickups To Complete Objective**에서 설정한 개수만큼 수집해야 합니다.
- **Pickups To Complete Objective**: **Must Collect All Pickups**가 거짓인 경우 수집해야 하는 픽업의 수입니다.
- **Notification Pickups Remaining**: 픽업이 여기에 설정된 수만큼 남으면 나머지 픽업에 대한 알림을 전송하기 시작합니다.

단계를 완료로 표시

## 3. 스턴트 점프를 추가하여 보너스 시간을 주는 체크포인트로 설정

Q&A (0)

1. 램프를 설치하고 체크포인트를 옮겨 플레이어가 점프해서 넘어가도록 만들어 보겠습니다.

2. 씬을 깔끔하게 유지하려면 램프를 포함할 부모 게임 오브젝트를 만듭니다.

3. **계층 구조**에서 오른쪽 클릭하고 **Create Empty**를 선택합니다. 왼쪽 상단의 '+' 버튼을 클릭해도 됩니다. 이렇게 하면 빈 게임 오브젝트가 생성되어 씬에 추가됩니다.

[Image: image]

4. 오른쪽 클릭하고 'Rename'을 선택한 다음 **Ramps**라는 이름을 지정합니다.

[Image: image]

5. Transform에서 세로로 있는 3개의 점을 클릭하고 'Reset'을 선택하여 모든 축을 (0,0,0)으로 재설정합니다.

[Image: image]

6. 이제 씬에 램프를 추가해 보겠습니다. **프로젝트** **뷰**에서 *Assets > Karting > Prefabs > Props > StuntJump*로 이동합니다.

[Image: image]

'JumpRamp' 프리팹을 **계층 구조**로 드래그하여 새로운 'Ramps**'**게임 오브젝트 아래에 배치합니다. 새 램프는 이제 부모 오브젝트 'Ramps'의 자식이 되므로 보다 쉽게 오브젝트를 관리할 수 있습니다.

[Image: image]

7. 플레이어가 이 게임 모드를 완료하려면 램프를 지나가야 하게 만들기 위해 새 램프의 **체크포인트**를 추가해야 합니다.

8. **프로젝트 뷰**에서 *Assets >  Karting > Prefabs > Props > Checkpoint*로 이동합니다.

[Image: image]

9. 'Checkpoint**'**프리팹을 **계층 구조**의 'JumpRamp'로 드래그하여 새로운 'Checkpoint'가 해당 램프의 자식이 되도록 합니다.

[Image: image]

10. 이제 'Checkpoint'는 부모인 'JumpRamp'의 트랜스폼 프로퍼티를 상속하므로 'JumpRamp'를 옮기면 'Checkpoint'도 함께 이동합니다. 이렇게 하면 나중에 전체 트랙에서 램프를 설정할 때 시간을 단축할 수 있습니다.

11. 새로운 'Checkpoint'는 'Ramp' 주변에 배치되어 있지만, 잘 작동할 수 있도록 크기와 위치를 조정해주어야 합니다.

12. 'Checkpoint'를 선택하고 마우스 커서를 **씬 뷰** 위에 올려놓은 다음 **F**를 눌러 프레임 가운데에 맞춥니다.

[Image: image]

13. 먼저 'Checkpoint'는 훨씬 작아야 합니다. 트랙 전체가 아니라 **JumpRamp**를 지나갈 때만 작동해야 하기 때문입니다. 크기를 조정해 보겠습니다. 스케일 툴을 선택하거나 R 키를 누릅니다.

[Image: image]

14. **씬 뷰**에서 스케일 축의 가운데에 있는 흰색 큐브 핸들을 클릭한 상태로 유지합니다. 클릭한 채 드래그하여 'Checkpoint'의 크기가 이전보다 절반 이하로 작아지고 램프와 너비가 비슷해질 때까지 아래로 드래그합니다.

[Image: image]

또는 **계층 구조**에서 'Checkpoint'를 선택하고 **인스펙터**에서 Transform의 스케일을 0.4로 변경하여 'Checkpoint'의 크기를 변경할 수도 있습니다. X, Y, Z축 모두에 대한 스케일을 변경해야 합니다.

[Image: image]

15. 이제 'Checkpoint'를 적절한 위치로 옮겨 램프가 끝나는 가장 넓은 지점 위쪽에 배치합니다.

16. **이동 툴**을 선택하고(또는 **W 키**) 파란색 화살표를 클릭한 상태로 'Checkpoint'를 Z축으로 옮겨 램프 끝부분을 조금 지나친 지점에 배치합니다. 그런 다음 녹색 화살표를 클릭한 상태로 'Checkpoint'를 Y축으로 옮겨 중심이 램프 끝부분보다 위에 오도록 합니다.

[Image: image]

17. 잘 하셨습니다. 이제 첫 번째 'JumpRamp'와 'Checkpoint'가 준비되었으니 트랙에 몇 개를 더 추가할 수 있습니다.

18. 이미 설정한 'JumpRamp'를 복제하여 램프를 몇 개 더 추가합니다. 복제하려면 **계층 구조**에서 해당 항목을 선택하고 오른쪽 클릭한 다음 'Duplicate'를 클릭합니다. 또는 항목을 선택하고 단축키 **Ctrl-D(Windows)/Cmd-D(Mac)를 누릅니다. 씬에 JumpRamp가** **최소한 3개 이상 배치될 때까지 반복합니다.**

[Image: image]

19. 방금 추가한 새로운 'JumpRamp'는 모두 첫 번째와 동일한 위치에 있으므로 트랙 주변에 배치해야 합니다.

[Image: image]

20. **계층 구조**에서 'JumpRamp'를 선택합니다. **씬 뷰**를 클릭하고 **F 키**를 눌러 프레임 가운데에 맞춥니다.

[Image: image]

21. **계층 구조**에서 'JumpRamp'를 선택한 채로 툴바에서 **이동 툴**을 선택하거나 W 키를 누릅니다.

[Image: image]

22. 파란색 및 빨간색 화살표 핸들을 드래그하여 X축과 Z축에서 'JumpRamp'를 옮깁니다. Y축으로는 옮길 필요가 없습니다.

[Image: image]

23. 'JumpRamp'가 트랙과 올바르게 정렬되도록 회전해야 할 수도 있습니다. **계층 구조**에서 'JumpRamp'를 선택한 채로 툴바에서 **회전 툴**을 선택하거나 **W 키**를 누릅니다.

24. 녹색 회전 핸들을 사용해서 Y축을 중심으로 'JumpRamp'를 회전하여 카트 주행 방향을 바라보도록 합니다.

단계를 완료로 표시

## 4. 고리를 통과하여 점프할 때 보너스 시간 제공

Q&A (0)

이제 램프의 각도를 설정하겠습니다. 지금은 모든 램프가 동일하게 20도로 설정되어 있습니다.

1. 변경할 **계층 구조**에서 'JumpRamp'를 선택하고 해당 계층 구조 내에서 'Ramp'를 선택한 다음 **F 키**를 눌러 프레임 가운데에 맞춥니다.

[Image: image]

2. **Transform** 컴포넌트의 'Ramp'에 대한 Rotation 설정을 살펴봅니다. 지금은 [20, 180, 0]으로 설정되어 있습니다. 램프의 각도를 설정하는 가장 간단한 방법은 회전의 X 값을 변경하는 것입니다. X 값을 40으로 설정합니다.

[Image: image]

**회전** 툴을 사용하여 **씬 뷰** 자체에서 램프의 각도를 변경하는 방법도 있습니다.

3. 'Checkpoint'의 위치를 경사가 더 가파른 램프와 일치하도록 조정합니다. 'Checkpoint'를 선택하고 커서를 **씬 뷰** 위에 올려놓은 다음 **F 키**를 눌러 프레임 가운데에 맞춥니다.

[Image: image]

4. **W 키**를 눌러 **이동 툴**을 선택하고 램프에 맞추어 체크포인트를 옮깁니다.

[Image: image]

5. 이제 각 'Checkpoint'를 완료하면 타이머에 추가되는 추가 시간을 조정해 보겠습니다. **계층 구조**에서 'Checkpoint'를 선택하고 **인스펙터**에서 **Pickup Object** 설정을 확인합니다.

6. 플레이어에게 더 많은 시간을 주기 위해 **Time Gained 값**을 5가 아닌 10으로 수정합니다.

[Image: image]

잘 하셨습니다. 이제 씬의 설정과 준비를 마쳤습니다. Ctrl+S(Windows) 또는 Cmd+S(macOS)를 눌러 변경 사항을 저장합니다.

단계를 완료로 표시

## 5. 축하를 위한 VFX(시각 효과) 추가

Q&A (0)

체크포인트를 성공적으로 통과한 플레이어를 축하하기 위해 휘날릴 색종이 파티클을 추가해 보겠습니다.

1. **프로젝트 뷰**에서 *Assets >  Karting > Prefabs > VFX > CheckpointConfetti*로 이동합니다.

[Image: image]

2. 수정할 'Checkpoint'를 **계층 구조**에서 선택합니다. 각 'Checkpoint'의 **인스펙터**를 보면 'Spawn Prefab On Pickup'이라는 필드가 있습니다.

[Image: image]

3. 'CheckpointConfetti' 프리팹을 **인스펙터** 창의 **Spawn Prefab On Pickup** 필드에 드래그합니다.

[Image: image]

4. **Destroy Spawn Prefab Delay**를 5초로 설정합니다. 그러면 플레이어가 체크포인트에 도달할 경우 'CheckpointConfetti' 프리팹이 생성되고 5초 후 파괴됩니다.

[Image: image]

설정 오른쪽에 있는 원을 클릭하여 필드를 설정할 수도 있습니다.

5. 팝업으로 표시되는 **Select GameObject** 창에서 맨 위에 있는 **Assets** 탭을 클릭하여 프로젝트의 모든 에셋을 검색하고 위의 검색 필드에 'CheckpointParticles'를 입력합니다. 그러면 한 가지 결과가 반환되는데, 더블 클릭하여 설정할 수 있습니다.

6. **플레이** 버튼을 클릭하여 게임을 플레이해 보고 새로운 VFX를 확인합니다.

[Image: image]

여러 체크포인트를 선택하고 한 번에 모두 변경하여 VFX를 모든 체크포인트에 할당할 수도 있습니다.

7. **플레이**모드를 종료하고 변경 사항을 저장합니다(Windows의 경우 Ctrl+S, Mac의 경우 Cmd+S).

단계를 완료로 표시

## 6. 추가 활동

Q&A (0)

카트의 속도와 가속도를 올려 더 높이 점프하도록 만들 수 있습니다.

**Added Gravity** 파라미터도 변경해 보세요. **Added Gravity**를 줄이면 카트가 더 적은 중력을 받고 더 천천히 떨어지며, 높이면 카트가 더 빠르게 떨어집니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
