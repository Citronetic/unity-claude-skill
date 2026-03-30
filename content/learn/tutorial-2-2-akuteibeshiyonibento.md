[Image: image]

# 2.2 - アクティベーションイベント

Tutorial

Beginner

+10XP

90 mins

0

Unity Technologies

[Image: 2.2 - アクティベーションイベント]Summary

このレッスンでは、ユーザーが特定の方法でオブジェクトを操作したときに、そのオブジェクトに独自の機能を追加する方法を学びます。このレッスンが終わる頃には、ユーザーはリモコンを手に取り、コントローラーのボタンを押してテレビをつけることができるようになります。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Resources

- [Polaroid-Scripts.zip](https://unity-connect-prd.storage.googleapis.com/20210416/489413a8-b8f1-4cb5-9490-c7b0cac395f8/Polaroid-Scripts.zip?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931418286)

Languages available:

日本語English日本語日本語

## 1. 掴めるリモートコントロールオブジェクトの追加

Q&A (0)

これまでは、物を拾ったり置いたりすることしかできませんでした。ここからは、手に持っただけで何かができる、つまり「起動」できるオブジェクトを加えていきます。

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

**1.  リモートコントロールをシーンに加える：**

- **Course Library**> **Prefabs**> **Objects** > **Electronics**の順に進みます。
- 「Remote」プレハブオブジェクトをシーン内のサーフェスにドラッグします。

**2.  オブジェクトを拾えるようにする：**

- 床から落ちないように、Collision Detection を Continuous Dynamic に設定した Rigidbody コンポーネントを追加します。
- XR Grab Interactable コンポーネントを追加します。

**3.  リモコンを手に取ったら、プレイヤーの手に正しく置く：**

- **Remote**オブジェクトで、空の「Attach」子オブジェクトを新規に作成します。
- **Attach** オブジェクトを適切に配置し方向を決めます。
- XR Grab Interactable コンポーネントの **Attach Transform** プロパティに **Attach**オブジェクトを割り当てます。

[Image: image]

これで、自然に見える方法でリモコンを手に取ることができるはずです。

ステップを完了としてマーク

## 2. リモコンを操作すると音が鳴る

Q&A (0)

これで、リモコンを持ってトリガーを押すとカチッと音がするようになります。

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

**1.  リモコンから音が出るようにする：**

- Remote オブジェクトに、AudioSource コンポーネントを追加します。
- AudioSource コンポーネントで、**Spatial Blend** プロパティをフル **3D** (“1”) にスライドさせ、3D オーディオを実現します。

**2.  リモコンに音を鳴らす機能をつける：**

- Play Quick Sound コンポーネントをリモコンに追加します。
- **Sound**プロパティには、**Course Library > Audio** フォルダーから任意のオーディオクリップを割り当てます。

**3.  リモコンの「On Activated」イベントを探す：**

- リモコンの XR Grab Interactable コンポーネントの下部にある**Interactable Events**の折り返しを展開すると、すべてのイベントオプションが表示されます。
- **On Activated** イベントを探します。

**4.  リモコンを操作したときに音を鳴らす：**

- **On Activated** イベントで、+ をクリックして新しいアクションを追加します。
- **Remote**オブジェクトを空の Object スロットにドラッグアンドドロップすると、そのコンポーネントにアクセスできます。
- **No Function** のドロップダウンをクリックして機能を選択し、**Play Quick Sound > Play ()**と選択します。

[Image: image]

リモコンを手にした状態で、コントローラートリガーである起動ボタンを押すと音が鳴るようになります。

ステップを完了としてマーク

## 3. リモコン操作時のインジケーターライトの色の変更

Q&A (0)

リモコンが押されたことをさらにフィードバックするために、リモコンが作動したときにインジケーターランプを赤にすることもできます。

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

**1.  インジケータランプが赤になる機能を追加：**

- Hierarchy で、Remote オブジェクトを展開し、**Indicator_Light**の子オブジェクトを選択します。
- Change Material コンポーネントを追加します。
- 「**Other Material**」のプロパティに Red マテリアルを割り当てます。

**2.  トリガーが押されたときにマテリアルの色を赤に変更：**

- **Remote** の親オブジェクトの XR Grab Interactable コンポーネントの下部にある **Interactable Events** を展開すると、すべてのイベントオプションが表示されます。
- **On Activated** イベントで、**＋** をクリックして新しい関数を追加します。
- Object プロパティに**Indicator Light**の子オブジェクトを割り当てます。
- **No Function** のドロップダウンをクリックして新しい機能を選択し、**Change Material > SetOtherMaterial ()** 関数をクリックします。

**3.  起動ボタンを離すとマテリアルが戻るようにする：**

- **On Deactivated** イベントで、+ をクリックして新しいアクションを追加します。
- Indicator_Light オブジェクトを割り当て、**Change Material > SetOriginalMaterial()**関数を選択します。

[Image: image]

リモコンを起動するとインジケーターランプが赤くなり、起動ボタンを離すと元の色に戻ります。

ステップを完了としてマーク

## 4. テレビでビデオを再生する：

Q&A (0)

テレビの電源を入れるためのボタンを設定する前に、シーン内のテレビが正常にビデオを再生できるかどうかを確認する必要があります。

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

**1.  テレビが 3D オーディオを出せるようにする：**

- Hierarchy で、Television の子オブジェクトである**Screen** を選択します。
- Audio Source コンポーネントを追加します。
- **Spatial Blend** プロパティを full 3D (1.0) にドラッグすると、Spatial Audio が有効になります。

**2.  テレビでビデオを再生できるようにする：**

- Screen の子オブジェクトに、Video Player コンポーネントを追加します。
- **Material Property** を **_BaseMap** (_MainTex ではなく) に変更し、ビデオをテクスチャではなくマテリアルに投影します。

**3.  ビデオコントロール機能の追加：**

- Screen 子オブジェクトに Play Video コンポーネントを追加します。
- 自動的にビデオを再生する場合は、**Play At Start**チェックボックスを選択します。

**4.  スクリーンで再生するビデオを選択する：**

- Play Video コンポーネントで、**Video Clips** の折り返し部分を展開します。
- リストの **Size**プロパティを 1 に設定し、Enter キーを押すと、空の Video Clip スロットが表示されます。
- Video Clip のプロパティに、**Course Library > Videos**から 1 つのビデオを割り当てます。

[Image: image]

これで、アプリケーションを実行すると、テレビ画面上でビデオが自動的に再生され、3D オーディオが流れるはずです。

ステップを完了としてマーク

## 5. リモコンでテレビを操作する

Q&A (0)

テレビが使えるようになったら、今度はリモコンで操作できるようにする必要があります。

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

**1.  ビデオの自動再生を停止する：**

- Play Video コンポーネントの**Play At Start**チェックボックスをオフにします。

**2.  Remote の Interaction イベントを探す：**

- **Remote** ゲームオブジェクトを選択します。
- XR Grab Interactable コンポーネントで**Interactable Events** の折りたたみを展開すると、すべてのイベントオプションが表示されます。

**3.  リモコンを起動したときにテレビをトリガーする：**

- **On Activated** イベントで、**+**をクリックして新しいアクションを追加します。
- **Screen** オブジェクトは Play Video スクリプトを持っているので、空の Object プロパティに割り当てます。
- **No Function**ドロップダウンをクリックして、2 回目に押したときに一時停止するか停止するかに応じて、 **PlayVideo > TogglePlayPause ()** 関数、または**PlayVideo > TogglePlayStop ()** 関数を選択します。

[Image: image]

リモコンを起動すると、テレビの映像が再生と一時停止または停止を交互に繰り返すようになります。

ステップを完了としてマーク

## 6. まとめ

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

- 掴めるリモコン
- サウンドアクションの再生
- マテリアルを変えるアクションの変更
- ビデオ再生のアクション

**新しいコンセプトとスキル：**

- オブジェクトの起動
- イベントとアクション
- スクリプトと関数

**次のレッスン：**

- Direct Interactor と Ray Interactor

ステップを完了としてマーク任意のステップ

## 7. 追加のアクティビティ

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.  ビデオを再生する携帯電話を追加 [Easy] (難易度：低)**

トリガーを押すと動画が再生される携帯電話を作ります。

- Phone プレハブは、Course Library > Prefabs > Objects > Electronics フォルダーにあります。
- テレビ画面の設定と同じようなマテリアルの「screen」の子オブジェクトを新たに作成する必要があります。
- **その他の追加：**Play Video > NextClip () 関数で、携帯で複数のビデオを再生してみてください。

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

**2.  動作する懐中電灯の追加 [Medium] (難易度：中)**

トリガーを押すとオンとオフが切り替わり、オーディオフィードバックとしてクリック音を出すこともできる懐中電灯をシーンに追加します。

- フラッシュライトには、子の SpotLight オブジェクトを追加する必要があります。
- ToggleLight > Flip () 関数を使用して、ライトのオン/オフを切り替えてみてください。

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

**3.  動作するライターとそれを使って火をつけられるキャンドルを追加する [Difficult] (難易度：高)**

起動すると炎が出てくるライターをシーンに追加します。炎がろうそくに近づけば、そのろうそくに火をつけることができます。

- Particle_Flame プレハブを使用することができます。
- キャンドルでは、トリガーコライダーと OnTrigger スクリプトを使って、特定のタグを持つオブジェクトがトリガーに入ったことを検出します。
- **その他の追加：**OnVelocity スクリプトを使って、振ったときに炎が消えるようにします

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

**4.  ダーツガンやホッチキスの弾を追加 [Expert]**

トリガーを押すとダーツが発射されるダーツガンや、ホッチキスが発射されるホッチキスを追加します。

- オブジェクトと投射物のプレハブは、Course Library > Prefabs > Objects > Launchers フォルダーにあります。
- Course Library にある LaunchProjectile スクリプトを使います。
- 必要に応じて、Course Library で提供されている DestroyObject スクリプトを使用して、一定時間後に投射物を消滅させることができます。
- **その他の追加：**Hinge Joint でホッチキスをさっと開く
- **その他の追加：**オブジェクトの起動時にサウンドを追加

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

**5.  動作するポラロイドカメラの追加  [Expert] [Requires Programming] (プログラミング必要)**

ファインダースクリーンでプレビューしたり、トリガーを使って写真をプリントしたりできる、動作するポラロイドカメラを追加します。

- ファインダースクリーンは、鏡がどのように設置されているかをレンダーテクスチャで確認します。
- [Camera.Render()](https://docs.unity3d.com/ScriptReference/Camera.Render.html) のドキュメントをご覧ください。
- 今のところ、カメラがレイをレンダリングしていても気にしないでください。次のチュートリアルでは、レイを隠す方法を学びます。
- 参考にしたい方は、サンプルの [Polaroid と Photo のスクリプト](https://connect-prd-cdn.unity.com/20210416/489413a8-b8f1-4cb5-9490-c7b0cac395f8/Polaroid-Scripts.zip)をダウンロードしてください。

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
