[Image: image]

# 2.3 - Direct と Ray のインタラクター

Tutorial

Beginner

+10XP

90 mins

0

Unity Technologies

[Image: 2.3 - Direct と Ray のインタラクター ]Summary

このレッスンでは、Direct Interactor (ダイレクトインタラクター) の実装方法と、同じコントローラー上でインタラクターを切り替える方法を学びます。このレッスンを終える頃には、ユーザーは手で直接物を掴むことができるようになり、必要に応じてレイ (ray) を切り替えて物を指すことができるようになります。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. 右のコントローラーに Direct Interactor を追加する

Q&A (0)

リグにデフォルトで搭載されている Ray Interactor (レイインタラクター) を使うのではなく、コントローラーの 1 つに「Direct」インタラクターを設定することができます。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  右側のコントローラーから Ray Interactor を取り外す：**

- Hierarchy 内で、**RightHand Controller**オブジェクトを選択します。
- Ray Interactor に関連する 3 つのコンポーネント（XR Interactor Line Visual コンポーネント、Line Renderer コンポーネント、XR Ray Interactor コンポーネント）を削除します。

**2.  適切なコントローラーで直接インタラクションできる：**

- XR Direct Interactor コンポーネントを **RightHand Controller** に追加します。
- **Hide Controller on Select** チェックボックスを選択すると、手に取ったオブジェクトがビジュアルされた手に置き換わります。

**3.  Direct Interactor の検出を有効にする：**

- Sphere Collider コンポーネントを追加します。
- **Is Trigger** チェックボックスを選択します。
- **Radius**を 0.05 にします。

[Image: image]

これで、シーン内のすべての掴めるオブジェクトを、ダイレクトインタラクターにより手を使って拾うことができるはずです。

ステップを完了としてマーク

## 2. Direct Interactor に触覚と音声のフィードバックを追加する

Q&A (0)

Ray Interactor (レイインタラクター) で行ったように、オブジェクトにカーソルを合わせたり選択したりする際にも、触覚や音声によるフィードバックを追加する必要があります。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  最初に触覚 (Haptic) や音声 (Audio) のフィードバックを設定したときのことを思い出してください**

- Hierarchy から LeftHand Controller オブジェクト（Ray Interactor コンポーネントが含まれているはずです）を選択します。
- XR Ray Interactor コンポーネントで、**Audio Events**と**Haptic Events** の折りたたみ部分を展開します。
- Haptic (触覚) Events の振動の強さと時間、そして Audio Event に選んだオーディオクリップに注目してください。

**2.  新しい Direct Interactor に、Audio Events**と**Haptic Events** **の設定を適用する：**

- Hierarchy から **RightHand Controller**オブジェクトを選択します。
- XR Direct Interactor コンポーネントで、他のコントローラと同じ Haptic と Audio のイベント設定を適用します。

[Image: image]

これで、Direct Interactor では、ホバー (hover) や選択 (select) イベントで、触覚 (haptic) および音声 (audio) によるフィードバックが得られるようになりました。

ステップを完了としてマーク

## 3. レイがオブジェクトを拾わないようにする

Q&A (0)

今のところ、レイを使えば何でも拾えますが、これは自然な感じではありません。レイでテレポートできるのは、手で直接オブジェクトを拾えるようになってからにしましょう。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  Rays (レイ) に新しいレイヤーを追加する：**

- Unity エディターの右上にある Layer ドロップダウンから **Edit Layers**を選択し、**Layers** の折りたたみを展開します。
- 最初に利用可能な空のスロットに新しい「Raycasts」レイヤーを追加します。

**2.  レイが掴めるオブジェクトとインタラクトするのを防ぐ：**

- コントローラーオブジェクトの XR Ray Interactor コンポーネントで、**Interaction Layer Mask**プロパティに、**Raycasts** レイヤーのみを割り当てます。
- そのためには、まず「Nothing」を選択し、次に「Raycasts」レイヤーを再選択する必要があります。
- 掴めるオブジェクトが、**Raycasts** Interaction Layer を共有していないことを確認してください。

**3.  レイがテレポート先のオブジェクトとインタラクトできることを確認する：**

- Teleportation Anchor と Teleportation Area の各オブジェクトの **Interaction Layer** **Mask** プロパティで、**Raycasts** レイヤーが有効になっていることを確認します。

**4.  テレポート時にハンドモデルが消えないようにする：**

- XR Ray Interactor コンポーネントで、**Hide Controller On Select**の設定を無効にします。

[Image: image][Image: image]

Ray Interactor は、オブジェクトを拾うことはできなくなりましたが、テレポートには使用できるようになりました。

ステップを完了としてマーク

## 4. それぞれの手に Direct と Ray のインタラクターを作成

Q&A (0)

両手でオブジェクトを拾えるようにするには、両手にダイレクトインタラクター (Direct Interactor) をつける必要があります。そうすれば、ジョイスティックが動かされたときにレイを有効にすればよいのです。これを実現するためには、それぞれの手に Direct と Ray のインタラクターを作成する必要があります。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  両手にそれぞれ別のレイコントローラーを作る：**

- Ray Interactor でコントローラーを **2** 回複製します。
- これらのオブジェクトを「LeftHand Ray」と「RightHand Ray」と名付けます。

**2.  それぞれのレイを正確な手でコントロールする：**

- 新しい **RightHand Ray**と **LeftHand Ray** オブジェクトについて、XR Controller コンポーネントで、**Input Action References** プリセットが各オブジェクトの Left または Right に正しく設定されていることを確認してください。
- プリセットを編集するには、コンポーネントの右上にある **Presets**ボタンをクリックし、手に適したプリセットを選択します。

**3.  LeftHand Controller を Direct Interactor として動作させる：**

- **LeftHand Controller** オブジェクトで、Ray インタラクターに関連するコンポーネント（XR Ray Interactor コンポーネント、Line Renderer コンポーネント、XR Interactor Line Visual コンポーネント）を削除します。
- Direct Interactor および Sphere Collider コンポーネントを **RightHand Controller** から **LeftHand Controller**にコピーします。

**注意：**コンポーネントをコピーするには

- そのコンポーネントの右上のコンテキストメニューを選択し、**Copy Component** をクリックします。
- このコンポーネントを別のオブジェクトに貼り付けるには、受け取り側のオブジェクトのコンポーネントのコンテキストメニューを選択し、**Paste Component As New**をクリックします。

**4.  ハンドモデルは各手に 1 つずつにすること：**

- 新しい **LeftHand Ray** と **RightHand Ray** オブジェクトに関して、XR Controller コンポーネントの **Model プレハブ**オブジェクトを**None** に変更します。

[Image: image]

それぞれの手は、Ray Interactors でテレポートし、Direct Interactors でオブジェクトをつかむことができるようになります。

ステップを完了としてマーク

## 5. ボタンを押してレイを切り替える

Q&A (0)

これで両手に Direct Interactor と Ray Interactor の両方が揃ったので、今度はボタンを押したときに Ray の ON/OFF を切り替える機能を追加します。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  左側のレイを切り替える機能を追加：**

- **LeftHand Ray** オブジェクトに Toggle Ray コンポーネントを追加します。
- **Direct Interactor** プロパティには、**LeftHand Controller** オブジェクトを割り当てます。

**2.  ボタンが押されたことを検知できるようにする：**

- **LeftHand Controller**オブジェクトに、On Button Press コンポーネントを追加します。

**3.  このアクションにバインドするボタンを指定：**

- On Button Press コンポーネントの **Action** ボックスで、**+** をクリックして **Add Binding** を選択します（**注：**Action ボックスは見落としがちなので、よく確認してください）。
- **No Binding**と表示されているところをダブルクリックします。
- **Path**ドロップダウンで、**XR Controller > XR Controller (Left Hand) > Optional Controls > primaryButton** を選択します。

**注意：**コントローラーによって、ボタン、トリガー、パッドなどが異なります。Oculus Quest をお使いでない場合は、お使いのデバイスに対応する別のバインディングパスを選択する必要があるでしょう。 例えば、[HTC Vive](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/htcvivecontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449677) や [Valve Index](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/valveindexcontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449677) の OpenXR コントローラープロファイルをチェックしてみてください。

**4.  ボタンを押したときにレイを起動する：**

- **On Press**イベントで、＋ をクリックして新しいアクションを追加します。
- **LeftHand Ray** オブジェクトには、Toggle Ray コンポーネントがあるので、これを割り当てます。
- 関数のドロップダウンから、**ToggleRay > ActivateRay ()** 関数を選択します。

**5.  ボタンを離すとレイが無効になる：**

- **On Release** イベントで、**+** をクリックして新しいアクションを追加します。
- **LeftHand Ray** オブジェクトを割り当てます。
- **ToggleRay** > **DeactivateRay ()**関数を選択します。

[Image: image]

左手のレイは、主ボタンに触れている間だけ表示され、ボタンを離すと消えます。

ステップを完了としてマーク

## 6. さらにバインディングを追加し、もう片方の手にも同じ作業を繰り返す

Q&A (0)

1 つのコントローラーが 1 つのボタンで動作しています。プレイヤーの好みに応じて、押すボタンのオプションを増やし、その機能をもう片方の手にも適用することができます。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  thumbstick を検出するバインディングの追加：**

- On Button Press コンポーネントの Action ボックスで、＋ ボタンをクリックして、このアクションに追加のバインディングを追加します。
- 前のステップと同じ手順でバインディングを選択しますが、**primaryButton** の代わりに、**XR Controller > XR Controller (Left Hand) > Optional Controls > thumbstickTouched** の順に選択します。

**注意：**コントローラーによって、ボタン、トリガー、パッドなどが異なります。Oculus Quest をお使いでない場合は、お使いのデバイスに対応する別のバインディングパスを選択する必要があるでしょう。 例えば、[HTC Vive](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/htcvivecontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449677) や [Valve Index](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/valveindexcontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449677) の OpenXR コントローラープロファイルをご覧ください。

**2.  これと同じ ray toggling 機能を右手にも追加する：**

- 前のステップのすべての手順を繰り返しますが、RightHand Controller と RightHand Ray についても同様です。

- Toggle Ray コンポーネントを**RightHand Ray**に追加し、RightHand Controller を Direct Interactor プロパティに割り当てます。
- **RightHand Controller** に On Button Press コンポーネントを追加し、Right Primary Button と Right Thumbstick のバインディングを追加します。
- **On Press** イベントで、**RightHand Ray** オブジェクトの **Toggle Ray > ActivateRay()**関数を呼び出します。
- **On Release**イベントで、**RightHand Ray**オブジェクトの **Toggle Ray > DeactivateRay()**関数を呼び出します。

[Image: image]

両手のレイは、主ボタンまたは サムスティック  (thumbstick) が触れている間だけ表示されるようになります。

ステップを完了としてマーク

## 7. まとめ

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 日本語

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**注目のフィーチャー：**

- 両手に Direct Interactor
- ボタンで Direct Interactor のオン/オフを切り替える

**新しいコンセプトとスキル：**

- Direct と Ray インタラクターの比較
- ボタンを押すと検出する

**次のレッスン：**

- ユーザーインターフェース (UI)

ステップを完了としてマーク任意のステップ

## 8. 追加のアクティビティ

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.  Ray Interactor 内の Line のカスタマイズ [Easy] (難易度：低)**

グラデーションや透明度など、Ray Interactor の Line の色や透明色を編集する：

- レイの始点を透明にして、手と重ならないようにすると良さそうです。
- レイの色をカスタマイズするには、XR Interactor Line Visual components Valid と Invalid color gradient プロパティを参照してください。
- Gradient Editor ウィンドウでは、カラーバーの下にあるマーカーで色を、カラーバーの上にあるマーカーで透明度 (Alpha) の値を編集します。

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**2.  動作するじょうろの追加 [Medium] (難易度：中)**

傾けると水の粒子が発生するじょうろを追加する：

- 傾きの検出には、Course Library > Scripts > Conditions フォルダーにある OnTilt スクリプトを使用します。
- Course Library > Prefabs > Particles フォルダーから Particle_Water オブジェクトを見つけます。
- パーティクルの制御には、ToggleParticle > Play() および Stop() 関数を使用します。
- その他の追加：PlayContinuousSound スクリプトを使用して、水を注ぐ効果音を追加します。
- その他の追加：OnVelocity スクリプトを使って、振ったときの水しぶきの音も追加します。ヒント：水を注ぐ音が邪魔にならないように、別のオーディオソースを追加します。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**3.  キャビネットの扉にヒンジを追加 [Expert]**

Unity の物理ヒンジを使って、キャビネットの扉やチェストの蓋を開けることができるようにする：

- ドアに [Hinge Joint](https://docs.unity3d.com/Manual/class-HingeJoint.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449677) とリジッドボディを追加して、その角度制限をカスタマイズする必要があります。
- ハンドルに XR Grab Interactable コンポーネントを追加し、ドアのリジッドボディに接続された [Fixed Joint](https://docs.unity3d.com/Manual/class-FixedJoint.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449677) を追加する必要があるでしょう。
- ドアのコライダーが他のコライダーと重なっていないことを確認してください。それによってドアが動かなくなる可能性があります。
- 警告：ジョイントは非常に厄介で、イライラすることもあります。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
