[Image: image]

# 2.4 - ユーザーインターフェース（UI）

Tutorial

Beginner

+10XP

90 mins

0

Unity Technologies

[Image: 2.4 - ユーザーインターフェース（UI）]Summary

このレッスンでは、VR でワールド空間のユーザーインターフェース (UI) を実装する方法を学びます。このレッスンが終わる頃には、ユーザーは基本的な説明を行うウェルカムスクリーンが出迎えてくれるはずです。また、シーンをリロードするための簡単なリセットメニューを表示することができるようになります。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. ワールド空間の UI を部屋に加える

Q&A (0)

ウェルカムスクリーンのテキストを作成するには、まず、テキストの入ったキャンバスを追加し、部屋の中に配置する必要があります。

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

**1.  新しいキャンバスをシーンに追加する：**

- Ｈierarchy 内に新しい空のオブジェクトを追加し、その位置をリセットし、名前を「INTERFACE」に変更します。
- そのオーガナイザーオブジェクトの中に、**XR > UI Canvas** オブジェクトを作成します。

**2.   キャンバスを部屋の中に適切に配置する：**

- Canvas の Rect Transform コンポーネントで、XYZ **Scale**を 0.01 に設定します。
- キャンバスが部屋の後ろにくるように、**Pos Y**プロパティと **Pos Z** プロパティを設定します。

**3.  半透明の黒い背景を UI に追加する：**

- Hierarchy 内で、**UI > Image** と選択して作成し、名前を「Welcome Background」に変更します。
- Image コンポーネントで、**Color** ボックスをクリックします。
- 色を黒に変更します。
- Alpha (A) スライダーを使って、色の透明度を下げます。

**4.  ウィンドウがテキストの上にレンダリングされている場合は：**

- Canvas コンポーネントで、**Order in Layer**プロパティを「1」に設定します。

**5.  パネルにテキストを子オブジェクトとして追加する：**

- Hierarchy 内で**Welcome Background**を右クリックし、子オブジェクトとして**UI > Text - TextMeshPro**を作成します。
- **注意：**プロンプトが表示されたら、「**Import TMP Essentials**」をクリックする必要があるかもしれません。

[Image: image]

これで、部屋の中に半透明のボックスができ、「New Text」と書かれた巨大な釣り合いが取れていないテキストが表示されるはずです。

**関連リソース：**

- [Canvas Render Modes](https://docs.unity3d.com/2020.1/Documentation/Manual/UICanvas.html)

ステップを完了としてマーク

## 2. ウェルカムテキストの編集

Q&A (0)

さて、キャンバスができたところで、次はもっと役に立つウェルカムメッセージを作りましょう。

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

**1.  背景画像の形状や配置を編集する：**

- イメージオブジェクトの Rect Transform コンポーネントで、**Width、Height、Pos X、Pos Y** の各プロパティを編集します。

**2.  テキストの外観を編集する：**

- テキストオブジェクトの TextMeshPro - Text (UI) コンポーネントで、**Font Asset**、**Font Size**、**Vertex Color**、**Alignment**の各プロパティを変更します。

**3.  テキストの内容を変更する：**

- TextMeshPro - Text (UI) コンポーネントで、「新しいテキスト」を、短くても情報量の多い、シーンに関するウェルカムメッセージに変更します。

**4.  テキストボックスのサイズやスペースを編集する：**

- Rect Transform コンポーネントで、**Width、Height、Pos X、Pos Y** をテキストの Rect Transform コンポーネントの位置に設定します。
- **注意：**余白と「OK」ボタンのスペースを確保してください。

[Image: image]

これで、シーンに合わせたウェルカムテキストが表示されるようになりました。

ステップを完了としてマーク

## 3. パネルに OK ボタンを追加する

Q&A (0)

いつまでもウェルカムテキストが表示されていては困るので、「OK」ボタンを追加して非表示にします。

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

**1.  パネルにボタンを子オブジェクトとして追加する：**

- Hierarchy 内で**Welcome Background** を右クリックし、**UI > Button - TextMeshPro** とクリックします。

**2.  ボタンのテキストを編集する：**

- ボタンの子 Text オブジェクトを選択します。
- テキストを「OK」や「Got it！」に変更します。
- 他のテキストに合わせて Text の設定を編集します。

**3.  ボタンを適切に配置する：**

- Rect Transform コンポーネントで、ボタンの位置、幅、高さを編集します。

**4.  ボタンの色を操作に応じて変化させたい場合は：**

- Button コンポーネントで、Normal、Highlighted、Pressed Color の各プロパティを編集します。

**5.  レイが背景パネルの上にあるときに、レイがアクティブに表示されないようにする：**

- Background Image コンポーネントで、**Raycast Target**の設定を無効にします。
- **Text**オブジェクトの TextMeshPro コンポーネントの Extra Settings セクションで、**Raycast Target**の設定を無効にします。

[Image: image]

これで、トリガーを使ってハイライトされクリックされると色が変わる「OK」ボタンができました。

ステップを完了としてマーク

## 4. OK ボタンでウェルカムパネルを外す

Q&A (0)

これでボタンの見た目が整ったので、クリックするとウェルカムパネルが消えるようにしましょう。

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

**1.  ボタンの On Click イベントを探す：**

- **Button** オブジェクトの Button コンポーネントの下部にある **On Click** イベントを見つけます。

**2.  ウェルカムパネルを無効にする：**

- **On Click** イベントで、＋ ボタンをクリックして新しいアクションを追加します。
- Welcome Background を Object スロットに割り当てます。
- 「No Function」のドロップダウンから **GameObject > Set Active (bool)** 関数と選択し、チェックボックスがオフになっていることを確認して、無効化になるようにします。

[Image: image]

トリガーで OK ボタンを選択すると、ウェルカムパネルが消えます。

ステップを完了としてマーク

## 5. Reset UI キャンバスの作成

Q&A (0)

ウェルカム UI が完璧に動作するようになったので、UI 要素を複製して再利用し、シーンをリロードする Reset UI を簡単に作ることができます。

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

**1.  リセット画面の新しいテキストを作成する：**

- Hierarchy 内で、**Welcome_Background**オブジェクトを複製し、新しいオブジェクトの名前を「Reset_Background」に変更します。
- **Welcome Background**を一時的に無効にして、より簡単に編集できるようにします。
- シーンを元の状態にリセットすることを目的としたテキストを編集します。

**2.  リセット画面に第 2 ボタンを追加する：**

- ボタンを複製して、元のボタンの横に配置し直します。
- ボタンの名前を変更し、テキストを編集して、一方を「Cancel」ボタンに、もう一方を肯定的な「Yes」ボタンにします。

**3.  Yes ボタンを押すと、実際にシーンがリセットされるようにする：**

- Yes ボタンオブジェクトに Load Scene コンポーネントを追加します。
- **On Click**イベントで、Load Scene コンポーネントを割り当て、**Load Scene > ReloadCurrentScene()**関数を選択します。

[Image: image]

Reset キャンバスでは、Cancel をクリックしてパネルを非表示にするか、Yes をクリックして現在のシーンをリロードすることができるようになっています。

ステップを完了としてマーク

## 6. セカンダリボタンを押すとリセットパネルが表示される

Q&A (0)

現在、リセット画面に戻る方法はありません。リセットを実行するには、プレイヤーがセカンダリボタンを押したときに、テレポートで開始地点に戻ることができます。

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

**1.  開始時にウェルカムパネルのみを表示する：**

- **Welcome Background** オブジェクトを再度有効にし、**Reset_Background** オブジェクトを無効にする。

**2.  セカンダリボタンの押し方をテストする：**

- **XR Rig**オブジェクト上に、On Button Press コンポーネントを追加します。
- **+**をクリックして、新しい **Action Binding**を追加します。
- **XR Controller**>**Optional Controls**>**secondaryButton**の順に移動して、バインディングパスを割り当てます。

**注意：**コントローラーによって、ボタン、トリガー、パッドなどが異なります。Oculus Quest をお使いでない場合は、お使いのデバイスに対応する別のバインディングパスを選択する必要があるでしょう。 例えば、[HTC Vive](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/htcvivecontrollerprofile.html) や [Valve Index](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/valveindexcontrollerprofile.html) の OpenXR コントローラープロファイルをご覧ください。

**3.  ボタンを押すとリセットパネルが表示される：**

- **On Press** イベントで、**+** をクリックして新しいアクションを追加します。
- **Reset_Background** オブジェクトを割り当てます。
- **GameObject > Set Active (bool)**関数を選択し、チェックボックスが**有効**になっていることを確認します。

**4.  ボタン操作でウェルカムパネルを非表示にする：**

- **+**をクリックすると、新しいアクションが追加されます。
- **Welcome Background**オブジェクトを割り当てます。
- **GameObject > Set Active (bool)**関数を選択し、チェックボックスが**無効**になっていることを確認します。

[Image: image]

セカンダリボタンを押すと、ウェルカムパネルが消えて、リセットパネルが表示されます。

ステップを完了としてマーク

## 7. ボタンを押すと開始位置に戻るテレポート

Q&A (0)

プレイヤーがセカンダリーボタンを押した時に開始位置にいない場合、Reset パネルを表示するにはプレイヤーを開始位置にテレポートする必要があります。

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

**1.  シーンの最初にテレポートアンカーを用意しておくこと：**

- まだテレポートアンカーがない場合は複製して、プレイヤーを部屋の中で開始させたい位置に配置します。

**2.  プレイヤーを正しい位置からスタートさせる：**

- **XR Rig** オブジェクトの**位置**と**回転**を、スターティングアンカーの位置と回転に合わせます。

**3.  XR リグに新しいテレポート動作を追加する：**

- **XR Rig** オブジェクト上に、Teleport Player コンポーネントを追加します。
- **Teleport Destination**プロパティには、シーンの最初にあるテレポートアンカーを割り当てます。
- **Provider**プロパティには、Teleportation Provider を割り当てます。

**4.  テレポートアクションをボタンクリックに結びつける：**

- **XR Rig** オブジェクトの On Button Press コンポーネントの **On Press**イベントで、 **+** をクリックして新しい関数を追加します。
- **XR Rig** オブジェクトを割り当てます。
- **TeleportPlayer > Teleport ()** 関数を選択します。

[Image: image]

セカンダリボタンを押すと、プレイヤーはシーンの開始位置にテレポートして、Reset UI を表示するようになります。

ステップを完了としてマーク

## 8. まとめ

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

- OK ボタン付きウェルカム画面
- 画面をリセットしてシーンをリロード

**新しいコンセプトとスキル：**

- VR UI のベストプラクティス
- Worldspace と Screenspace の UI

**次のレッスン：**

- 快適さとアクセシビリティ

ステップを完了としてマーク任意のステップ

## 9. 追加のアクティビティ

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.  シーンにリアルなテキストを追加する [Easy] (難易度：低)**

ノートブックのようなリアルなオブジェクトにテキストを追加して、ユーザーに追加情報を提供する：

- 「TexMeshPro - Text」オブジェクトを、表示させたいオブジェクトの子オブジェクトにします。
- Canvas のレンダーモードがワールド空間に設定されていることを確認します。
- その他の追加：オブジェクトを手に取ったときに、テキストを読み上げる音声ナレーションを追加します。

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

**2.  複数ステップによるユーザーインターフェースの追加 [Medium] (難易度：中)**

VR ルームの最初に 1 段落の説明文と「OK ボタン」を用意するのではなく、「Next」ボタンを追加して、いくつかの短いテキスト文字列を順次に切り替える：

- 「TextMeshPro - Text」コンポーネント上に、Course Library で提供されている ShowMessagesFromList コンポーネントを追加し、NextMessage() 関数を使ってそれらが順次に切り替わるようにします。このコンポーネントの「On Complete ()」イベントに注目してください。このイベントは、表示するメッセージが無くなった後に発生します。

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

**3.  コンテキストツールチップの追加 [Hard] (難易度：高)**

部屋の中で特定の作業をする際に、ユーザーをガイドする小さな UI 画面を追加する：

- UI 画面は、関連性がある場合にのみ表示されます。
- その他の追加：帽子を手にして頭にかぶるというような複数のステージを経るタスクであれば、ユーザーがどのステージにいるかに応じて、UI に複数のメッセージを表示してみましょう。
- その他の追加：理想的には、そのタスクを最初に完了したときにのみ UI が表示されるようにします。

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
