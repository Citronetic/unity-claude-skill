[Image: image]

# 카트 캐릭터 커스터마이즈

Tutorial

Beginner

+0XP

15 mins

3

(10)

Unity Technologies

[Image: 카트 캐릭터 커스터마이즈]Summary

이 모드에서는 파란색의 기본 카트 캐릭터를 다양한 레이서 장식으로 꾸미는 법을 배웁니다.

Languages available:

한국어English한국어한국어

## 1. Unity에서 카트 마이크로게임 열기

Q&A (0)

이 마이크로게임 프로젝트가 아직 준비되지 않았다면, [첫 마이크로게임 설정](https://learn.unity.com/tutorial/set-up-your-first-microgame#) 페이지를 살펴보며 처음부터 시작해 보세요.

시작하기 전에 최신 마이크로게임 프로젝트가 있는지 잠시 살펴보겠습니다.

- 프로젝트 뷰에서 *Assets > Karting >  KartingMicrogame_README.txt*로 이동한 다음 버전이 4.0.0 이상인지 확인합니다.

이 모드를 완료하려면 몇 가지 특별한 에셋도 필요합니다.

- 에셋 스토어에서 [Cat Racer](http://u3d.as/25iG) 또는 [Knight Racer](http://u3d.as/25iE), [Chicken Racer](http://u3d.as/25iF)를 구해 카트 마이크로게임으로 [임포트](https://learn.unity.com/tutorial/all-microgames-importing-microgame-add-on-assets?projectId=5d9c91a4edbc2a03209169ab)합니다.

모두 준비되었나요? 그럼 시작하겠습니다.

단계를 완료로 표시

## 2. 캐릭터 교체

Q&A (0)

1. 먼저 **계층 구조**에서 카트 프리팹을 엽니다. 이번 모드의 메인 씬에서는 기본 카트를 사용하고 있지만 어떤 카트도 상관없습니다.

[Image: image]

2. **계층 구조**에서 'KartClassic_Player' 프리팹 내의 'PlayerIdle' 게임 오브젝트를 찾아 선택합니다. 'KartClassic_Player' 게임 오브젝트를 확장하여 *KartClassic_Player > KartVisual > PlayerIdle*로 이동하거나 검색 기능을 사용합니다.

3. 'PlayerIdle'이 현재 마이크로게임에서 사용 중인 캐릭터가 맞는지 확인합니다.

[Image: image]

4. 'PlayerIdle'를 선택한 채로 **인스펙터**로 이동하고 체크박스를 선택 해제하여 'PlayerIdle' 게임 오브젝트를 비활성화합니다.

[Image: image]

5. 'PlayerIdle' 대신 사용하고 싶은 캐릭터가 있는 폴더로 이동합니다. 이 모드에서는 CatRacer를 한번 사용해 보겠습니다. *AddOns > MgKarting_CatRacer > Prefabs*로 이동합니다. 'CatRacer_Body'라는 프리팹을 확인할 수 있습니다.

[Image: image]

6. **계층 구조**에서 'PlayerIdle'이 있는 'KartVisual' 아래에 'CatRacer_Body'를 드래그합니다. T-포즈를 취하고 있는 레이서의 모습이 나타납니다.

[Image: image]

7. **계층 구조**가 다음과 같은 모습인지 확인합니다.

[Image: image]

8. 비활성화했던 'PlayerIdle'를 확인해 보면 **Transform**의 위치가 새 캐릭터의 위치와는 다르다는 것을 확인할 수 있습니다. 'CarRacer_Body'에 올바른 위치를 복사하려면 **계층 구조**의 'PlayerIdle'로 이동합니다. **인스펙터**에서 오른쪽 클릭하고 'Copy Component'를 선택합니다.

[Image: image]

9. **계층 구조**로 다시 이동해서 'CatRacer_Body'를 선택하면 **인스펙터**에 'CatRacer_Body'의 컴포넌트가 나타납니다.

10. **인스펙터**에서 **Transform** 컴포넌트를 오른쪽 클릭하고 'Paste Component Values'를 선택합니다. 그러면 'CatRacer_Body'가 올바른 위치에 배치됩니다.

11. 플레이 버튼을 클릭했을 때 캐릭터가 카트를 따라 움직이지만 여전히 대기 상태 애니메이션을 유지하는 경우도 있습니다.
캐릭터에 올바른 애니메이션을 실행하려면 **계층 구조**의 'KartClassic_Player'로 이동하여 **Kart Player Animator**컴포넌트를 찾습니다. 현재의 'Player Animation' 파라미터에서 'PlayerIdle (Animator)'를 'CatRacer_Body (Animator)'로 교체합니다.

중요: 이 단계를 건너뛰면 콘솔에서 경고창이 표시되거나 플레이 도중 잘못된 애니메이션이 실행될 수 있습니다.

[Image: image]

12. **플레이**를 눌러 새 플레이어가 카트를 타고 달리는 모습을 확인할 수 있습니다.

단계를 완료로 표시

## 3. 새 캐릭터 커스터마이즈

Q&A (0)[Image: image]

1. 이번에는 새 플레이어에게 다른 스타일의 머리 장식과 백팩을 추가해 보겠습니다.

먼저 프리팹 패키지를 풀어야만 자식 게임 오브젝트를 변경할 수 있습니다. 'CatRacer_Body'를 오른쪽 클릭하고 **Prefab > Unpack**을 선택합니다. 이제 머리 장식과 백팩을 바꿀 수 있습니다.

[Image: image]

2. 고양이 머리를 레이싱 헬멧으로 바꾸려면 'AddOn_Head' 게임 오브젝트를 찾아야 합니다. 계층 구조의 아래쪽에 있는 'AddOn_Head' 게임 오브젝트는 **계층 구조**의 위쪽에 있는 **검색 상자**를 통해서 쉽게 찾을 수 있습니다. 'AddOn_Head' 게임 오브젝트를 찾아서 선택한 후 돌아가면 게임 오브젝트를 선택한 상태에서 모든 패키지를 풀 수 있습니다.

[Image: image]

3. 'MgKarting_CatRacer' 폴더(*Assets > AddOns > MgKarting_CatRacer > Prefabs*)에 있는 'CatRacer_Helmet'을 선택하여 'AddOn_Head'에 드래그합니다.

[Image: image]

4. 그런 다음 'CatRacer_Head' 오브젝트를 삭제하여 한 개의 머리 장식만 남겨둡니다. 'CatRacer_Head'를 선택하고 삭제 버튼을 누르거나 오른쪽 클릭하고 **Delete**을 선택합니다.

[Image: image]

5. 'AddOn_Back'을 찾은 다음 *MgKarting_CatRacer > Prefabs* 폴더에서 'CatRacer_Bag_Bear'를 선택하여 'AddOn_Back' 위로 드래그합니다. 이제 'CatRacer_Bag_Backpack' 오브젝트를 삭제할 수 있습니다.

[Image: image]

축하합니다. 지금까지 카트 마이크로게임에 새 캐릭터를 추가하고 커스터마이즈하는 방법을 배워봤습니다.

[카트 마이크로게임 캐릭터 팩](https://assetstore.unity.com/microgame-add-ons/karting)을 모두 수집하여 커스터마이즈하는 데 활용해 보세요.

단계를 완료로 표시

## 4. 추가 활동: 고양이 레이서 백팩을 원하는 이미지로 커스터마이즈

Q&A (0)

1. 더 커스터마이즈해 보고 싶다면 'CatRacer_Bag_Backpack' 프리팹에 원하는 이미지를 추가합니다.
플레이어 캐릭터가 작은 물고기가 그려진 'CatRacer_Bag_Backpack'을 메고 있는지 확인합니다.

[Image: image]

2. *Assets > AddOns > MgKarting_CatRacer > Materials*로 이동하여 'CatRacer_Bag_Backpack_Custom' 머티리얼을 찾습니다. 백팩에 사용되는 머티리얼입니다.

[Image: image]

3. 머티리얼을 선택하여 **인스펙터**에 나타나게 합니다. Main Maps에서 **Albedo** 파라미터를 확인합니다. 머티리얼의 Albedo는 백팩에 나타나는 이미지에 해당합니다.

[Image: image]

4. **Albedo**의 왼쪽에 있는 이미지 프리뷰를 클릭하면 사용되고 있는 이미지가 **Project > Assets > [...]**뷰에서 강조 표시되어 있는 것을 확인할 수 있습니다.

[Image: image][Image: image]

5. 이제 'Textures' 폴더에 새로운 이미지를 만들어서 추가하면, 백팩의 작은 물고기 그림 대신 해당 이미지가 사용됩니다.

6. 통합 프로세스를 간소화하기 위해서 최종 이미지가 아래의 사양에 부합하는지 확인합니다.

512*512 픽셀

72 픽셀/인치

'.png' 파일 확장자

참고: 여기서는 간단한 격자무늬 패턴을 예시로 사용하지만, 원하는 이미지가 있다면 자유롭게 사용할 수 있습니다.

[Image: image]

7. 이미지를 'Textures' 폴더에 넣으면 다음과 같은 모습이 나타납니다.

[Image: image]

8. 이제 백팩의 'Materials' 폴더(*Assets > AddOns > MgKarting_CatRacer > Materials)*로 돌아가서 'CatRacer_Bag_Backpack_Custom' 머티리얼을 다시 선택합니다.

9. **Albedo**파라미터의 오른쪽에 원 아이콘을 클릭하여 팝업 창이 나타나면, 물고기 이미지 대신 사용하고 싶은 텍스처 파일(여기서는 'CheckeredPattern' 텍스처)을 선택합니다

[Image: image]

참고: 위와 같은 방법으로 텍스처를 변경하면 머티리얼에 직접 영향을 미칩니다. 에셋 창에서 머티리얼 이미지가 물고기에서 격자무늬 패턴으로 바뀌는 모습을 확인하세요.

원본 머티리얼을 변경하고 싶지 않다면 해당 머티리얼을 복제하고 이름을 변경한 후 원하는 텍스처를 할당하여 백팩에 있는 원본 머티리얼을 새로 생성한 머티리얼로 교체할 수 있습니다.

10. 그러면 한 바퀴 돌아 볼까요?

[Image: image]

축하합니다. 지금까지 머티리얼에 새로운 텍스처를 적용하는 방법을 배웠봤습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
