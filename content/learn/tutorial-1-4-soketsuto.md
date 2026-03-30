[Image: image]

# 1.4 - ソケット

Tutorial

Beginner

+10XP

90 mins

0

(9)

Unity Technologies

[Image: 1.4 - ソケット]Summary

このレッスンでは、VR でオブジェクトをはめ込むためのソケット (Socket) の設定方法を学びます。このレッスンが終わる頃には、ユーザーは帽子をフックに掛けられるようになり、さらにその帽子をかぶることもできるようになります。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. 掴める帽子をシーンへ追加

Q&A (0)

帽子用の機能的なフックを作る前に、まずは掴める帽子が必要です。

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

**1.   シーンに合わせて、いくつかの帽子を用意している：**

- **Course Library**>**Prefabs**>**Objects**> **Hats** の順に選択しフォルダーを開きます。
- あなたが被りたいと思う 2 つの帽子を、鏡の近くの表面にドラッグしてください。
- **注意：**まだシーンにフックがない場合は、**Course Library > Prefabs > Hooks** フォルダーから追加します。

**2.  帽子を物理演算で制御する：**

- Ctrl または Cmd を使用して、Hierarchy 内の両方の帽子を選択します。
- 選択した帽子オブジェクトに Rigidbody コンポーネントを追加します。
- Collision Detection プロパティを **Continuous Dynamic**に設定すると、地面を突き破って落下するのを防ぐことができます。

**3.  帽子を掴めるようにする：**

- XR Grab Interactable コンポーネントをそれぞれの帽子に追加します。
- 必要に応じて、**Smooth Position**と **Smooth Rotation** のプロパティを有効にして、ジッターを軽減します。

**4.  テストの準備：**

- **XR Rig** を鏡の前に置き、フックと帽子に手が届く距離になるように配置し直します。

[Image: image]

これで、無事に帽子を拾うことができるはずです。

ステップを完了としてマーク

## 2. フックをシンプルなソケットに変える

Q&A (0)

帽子をフックに掛けられるようにするには、フックがソケット (Socket) のように動作する必要があります。

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

**1.  ソケットを正しく配置する：**

- Hierarchy で、**Hook** オブジェクトを右クリックし、**Empty** の子オブジェクトを作成します。
- 子オブジェクトの名前を「Socket 1」に変更します。
- **Socket 1** オブジェクトを、帽子が掛けられるフックの先端に再配置します。

**2.  ソケットのトリガー検出領域を定義する：**

- Sphere Collider コンポーネントを Socket オブジェクトに追加します。
- **Edit Collider** ボタンをクリックし、**Radius**を 0.1 に減らします。
- 帽子と衝突しないようにするには、**Is Trigger**のチェックボックスを選択します。

**3.  Socket 1 オブジェクトをソケットのように動作させる：**

- XR Socket Interactor コンポーネントをオブジェクトに追加します。

**4. ソケットにアタッチしたときに、帽子が下向きになるようにする：**

- Socket 1 の空の子オブジェクトを作成し、この子オブジェクトの名前を「Attach」に変更します。
- Attach オブジェクトを下向きに回転させます。
- Attach オブジェクトを、Socket Interactor コンポーネントの **Attach Transform**プロパティに割り当てます。
- **注意：**アタッチポイントのローカル Z 軸は、帽子の望ましい順方向に合わせ、ローカル Y 軸は望ましい上方向へ合わせる必要があります。

[Image: image]

これで設定したソケット (Socket) の上に、選んだ帽子を乗せられるようになります。

ステップを完了としてマーク

## 3. ソケットを複製し、デフォルトで帽子をアタッチする

Q&A (0)

これで、完全に機能するソケットが 1 つできたので、それをフックの他の場所に複製して、シーンがロードされたときに帽子がフックにかかるようにします。

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

**1. 帽子を 掛ける場所すべてにソケットを作る：**

- Hierarchy で、Socket 1 オブジェクトを 2 回複製します。
- コピーしたオブジェクトの名前を「Socket 2」と「Socket 3」に変更します。
- 残りの 2 つの吊り下げフックの位置に、コピーした Socket を再配置します。

**2.  帽子はデフォルトでフックからスタートする：**

- Socket オブジェクトの XR Socket Interactor コンポーネントのそれぞれで、**Starting Selected Interactable** プロパティに帽子の一つを割り当てます。
- **注意：**帽子が 2 つしかない場合は、片方のソケットの interactable プロパティを「None」にします。

[Image: image]

これで 3 つのソケット (Socket) がすべて機能するようになり、シーンの開始時には、フックに帽子がかかるようになります。

ステップを完了としてマーク

## 4. あなたの頭を帽子用のソケットに

Q&A (0)

これらの帽子や鏡は、実際にあなたの頭に帽子をかぶることができなければ意味がありません。

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

**1.  Head Socket オブジェクトを正しく配置する：**

- Hierarchy で、**XR Rig > Camera Offset > Main Camera** を右クリックして、**Empty** の子オブジェクトを作成します。
- この新しい子オブジェクトの名前を「Socket」に変更します。
- 帽子が目の上に表示されるように、Socket オブジェクトの**Y Position** を 0.1 に設定します。

**2.  ソケットのトリガー検出領域を追加：**

- Sphere Collider コンポーネントを**Socket** オブジェクトに追加します。
- **Edit Collider** ボタンをクリックし、**Radius**プロパティを 0.2 に設定します。
- **Is Trigger** チェックボックスを選択します。

**3.  帽子をソケットにスナップする：**

- XR Socket Interactor コンポーネントを追加します。

[Image: image]

これで、帽子を自分の頭にかぶって、鏡で見てみることができるようになります。

ステップを完了としてマーク

## 5. 他のオブジェクトが帽子のように動作するのを防ぐ

Q&A (0)

現在、すべてのオブジェクトを帽子のように頭の上やフックに乗せることができます。インタラクションレイヤーを使って、どのオブジェクトが相互作用できるか、できないかを制御することができます。

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

**1.  「帽子」の新規レイヤーを追加：**

- Hat オブジェクトを選択します。
- Inspector の右上にある**Layer**ドロップダウンから、**Add Layer**をクリックします。
- 最初に空いているスロットに新しい「Hats」レイヤーを追加します。
- **注意：**また、Unity エディターの右上にある Layers ドロップダウンを選択し、Edit Layers をクリックすると、Layers ウィンドウが表示されます。

**2.  新しい Hats layer に帽子を置く：**

- Hierarchy で、Ctrl/Cmd + Click を使って **Hat**オブジェクトを全て選択します。
- XR Grab Interactable コンポーネントで、**Interaction Layer Mask**ドロップダウンから **Nothing** を選択してレイヤーをクリアします。
- ドロップダウンから、新しい **Hats**レイヤーを選択すると、そのレイヤーだけが有効になります。

**3.  フック/頭のソケットが「帽子」レイヤーのオブジェクトとのみインタラクトできるようにする：**

- フック/頭のソケットの各オブジェクトの**Interaction Layer Masks** プロパティを **Hats**レイヤーのみに設定します。

**4.  他のオブジェクトが帽子として使えないようにする：**

- 他の掴めるオブジェクトをすべて選択します。
- **Interaction Layer Mask** ドロップダウンから、**Default**レイヤーのみを有効にします。

[Image: image][Image: image][Image: image]

これで、頭とフックには帽子だけを置くことができるようになり、他の掴めるオブジェクトは置けなくなります。

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

**注目の*フィーチャー*** **：**

- 帽子の追加
- 帽子をフックに掛ける
- 頭に帽子をかぶる

**新しいコンセプト & スキル**

- Socket Interactor
- インタラクションを検出するためのトリガー
- Interaction Layer Masks

**次のレッスン：**

- オーディオとハプティクス

ステップを完了としてマーク任意のステップ

## 7. 追加のアクティビティ（任意）

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ、[Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.  配置を変更できるアートの追加  [Medium]** **(難易度：中)**

壁にかかっているアートの位置を入れ替えできるようにする：

- シンプルなフックを作るには、Socket Interactor コンポーネントで空のオブジェクトを作成し、メッシュを表すために、適切にスケールと回転をしたプリミティブなキューブの子オブジェクトを作成します。
- 絵画を正しい高さで吊るすためには、絵画を吊るすフレームの位置に Attach Transform を追加する必要があります。

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

**2.  配置を変更できる本の追加 [Difficult] (難易度：高)**

ユーザーが好きな順番にきれいに並べ替えられる本棚に本を追加する：

- 希望の向きに本を表示させるには、正しい向きで空のオブジェクトを作成してから、book オブジェクトを子オブジェクトにしてみてください。

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
