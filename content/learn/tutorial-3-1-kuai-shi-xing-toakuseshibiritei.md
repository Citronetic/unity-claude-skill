[Image: image]

# 3.1 - 快適性とアクセシビリティ

Tutorial

Beginner

+10XP

90 mins

0

Unity Technologies

[Image: 3.1 - 快適性とアクセシビリティ]Summary

このレッスンでは、シミュレーター酔いのリスクを減らし、アプリの性能または包括性を高めて、できるだけ多くの人に楽しんでもらう方法を学びます。このレッスンが終わる頃には、あなたのアプリはより快適で利用しやすいものになっていることでしょう。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. フェードするためのシンプルな黒いキャンバスを作る

Q&A (0)

シーンがロードされたとき、新しい世界にいきなり現れるのは少し違和感があるかもしれません。一般的に、新しい環境ではフェードインするのが良いとされています。

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

**1.  フェードインするための Screen Space キャンバスを新たに作成：**

- Hierarchy で、**Create > UI > Canvas** を選択し、名前を「Fade_Canvas」に変更します。

**2.  カメラの真正面にキャンバスをレンダリングさせる：**

- **Canvas**オブジェクトの Canvas コンポーネントで、**Render Mode**を **Screen Space - Camera**に設定します。
- **Render Camera** プロパティを **Main Camera** に設定します。

**3.  キャンバスを黒くする：**

- **Fade_Canvas**オブジェクトを右クリックし、**UI > Image** で作成します。
- **Color** プロパティを black に設定します。
- キャンバスが視野全体を覆うように、**X Scale** と**Y Scale** のプロパティを大きな数値（例：100）に設定します。

**4.  Main Camera の真正面にキャンバスを出現させ、他のすべてのオブジェクトの手前にもキャンバスを出現させる：**

- Canvas コンポーネントの **Plane Distance** を 0.1 に設定します。
- 次に、**Order in Layer**を 1 に設定します。

[Image: image]

プログラムを実行すると、黒いキャンバスが視界を完全に覆うようになります。

ステップを完了としてマーク

## 2. シーンのロード時でのフェードイン

Q&A (0)

黒いキャンバスの設定が完了したので、シーンのロード時にそこからフェードする必要があります。

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

**1.  キャンバスとそのすべての要素をフェードさせる：**

- **Fade_Canvas** オブジェクト上に、Canvas Group コンポーネントと Fade Canvas コンポーネントを追加します。

**2.  シーンがロードされたことを検知するイベントを作成：**

- Hierarchy で、空のオブジェクトを追加し、名前を「Scene Loader」に変更します。このオブジェクトには、シーンの読み込みのイベントが格納されます。
- **Scene Loader** オブジェクトに On Scene Load コンポーネントを追加します。

**3.  Scene Load で黒からのフェードイン：**

- **Scene Loader** オブジェクトの **On Load** イベントで、 **+** をクリックして新しい関数を追加します。
- **Canvas_Fade** オブジェクトを割り当てます。
- **FadeCanvas > StartFadeOut()** 関数を選択します。

**4.  Scene ビューの黒い画像をデフォルトで非表示にする：**

- Canvas Group コンポーネントの**Alpha** 値を 0 に設定します。

[Image: image]

これで、シーンがロードされたときに、黒からフェードインするように見えるはずです。作成したリセットシーンの UI 画面でテストしてみてください。

**関連リソース：**

- [Building a URP Screen Fader for Unity XR](https://www.youtube.com/watch?v=OGDOC4ACfSE)

ステップを完了としてマーク

## 3. フェードによるテレポート

Q&A (0)

フェードによってプレイヤーの快適さを向上させるもう一つのチャンスは、テレポートの際です。通常、テレポートの際には、動きの錯覚（「ベクション」）を減らし、快適さを向上させるために、短いフェードが行われます。

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

**1.  Teleportation Area (ラグ) にフェード機能を追加：**

- **Rug**プレハブで、デフォルトの Teleportation Area コンポーネントを削除し、カスタムの Teleport Area With Fade コンポーネントに置き換えます。
- 新しいコンポーネントの下部には、元のコンポーネントと同じように、**Interaction Layer Mask**、**Custom Reticle**、**Match Orientation** の各プロパティを割り当てます。

**2.  Teleportation Anchor (マット) にフェード機能を追加：**

- 1 つのマットで**Prefab モード**に入ると、すべてのマットに一度に変更を加えることができます。
- デフォルトの Teleportation Anchor コンポーネントを削除し、カスタムの Teleport Anchor With Fade コンポーネントに置き換えます。
- 新しいコンポーネントのプロパティを元のコンポーネントに合わせて編集します。
- **注意：**すべてのマットのプレハブまたはプレハブのバリアントに変更が適用されていることを確認してください。

[Image: image]

Teleportation Anchor (点) と Teleportation Area (範囲) が、テレポート時に黒くフェードアウトするようになりました。

ステップを完了としてマーク

## 4. 設定パネルの追加

Q&A (0)

いくつかの設定を追加するには、メインメニューのパネルからアクセスできる新しいパネルを追加します。

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

**1.  新規設定ボタンの追加：**

- Hierarchy で、**Welcome Background**オブジェクトを右クリックし、**UI > Button - TextMeshPro** と選択してボタンを追加します。
- 名前を「Settings Button」に変更します。
- **Source Image**プロパティに歯車のアイコンを設定します。
- デフォルトの Text を削除して、テキストがない状態にします。
- ボタンのサイズと位置を変更し、メニューの右下にうまく収まるようにします。

**2.  設定画面を新規に作成する：**

- Hierarchy で、**Welcome Background** オブジェクトを**複製**します。
- コピーしたオブジェクトの名前を「Settings Background」に変更します。
- ウェルカムパネルを一時的に無効にし、設定画面のみを表示することで、編集しやすくなります。

**3.  設定画面にプレースホルダーコンテンツを追加：**

- パネルのコンテンツを 3 つのプレースホルダーテキストオブジェクト（"Setting 1" / "Setting 2" / "Setting 3"）に置き換えます。
- 各設定の横に **Toggle** オブジェクトを追加し、Toggle で生成されるデフォルトのテキストを削除します。
- 各テキストオブジェクトを親にしてグループ化するとよいでしょう。
- **注意：**ラベルには、トグルに付属するデフォルトの Text ラベルの代わりに、TextMeshPro Text を使用します。

**4.  設定の歯車アイコンを「X」アイコンに置き換える：**

- 歯車アイコンの Image コンポーネントで、**Source Image** プロパティを**Icon_Gear**から **Icon_Close** に変更します。

**5.  これらのメニューの間を行き来できるようにする：**

- Settings ボタンの **On Click**イベントで、設定画面を有効に、ウェルカム画面を無効に設定します。
- Close ボタンの **On Click**イベントで、設定画面を無効に、ウェルカム画面を有効に設定します。

**6.  リセットメニューが表示されたときに、設定メニューを非表示にする：**

- XR Rig の**On Button Press**イベントに、設定画面を無効にする新しいアクションを追加します。

[Image: image][Image: image]

メインメニューの歯車アイコンから Settings メニューにアクセスできるようになり、3 つのプレースホルダートグル設定があります。また、Close ボタンを押すと、設定メニューからウェルカムパネルに戻ることができるようになります。

ステップを完了としてマーク任意のステップ

## 5. Snap Turning 設定の追加

Q&A (0)

アクセシビリティを向上させる最も簡単な方法の 1 つは、環境をナビゲートする方法を増やすことです。ユーザーが Snap Turning を有効または無効にできるようにします。

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

**1.  プレースホルダーの設定を変更する：**

- 最初の設定テキストを「Snap Turning」と編集します。
- Toggle コンポーネントで、Snap Turning がデフォルトで有効になっているため、**Is On**プロパティが有効になっていることを確認します。

**2.  トグルを Snap Turn コンポーネントにリンクさせる：**

- Toggle コンポーネントの**On Value Changed**イベントで、＋ をクリックして新しいアクションを追加します。
- XR Rig には Snap Turn プロバイダーコンポーネントが含まれているため、Object スロットに割り当てます。
- **Action Based Snap Turn Provider**> **enabled** **(Dynamic Bool)**機能を選択します。

**注意：**「enabled」プロパティには、必ず dynamic bool (boolean) を選択してください。これは、トグルの状態によって動的に影響を受けることを意味します。

[Image: image]

これで、Snap Turning を有効にしたり無効にしたりする機能的なチェックボックスができたはずです。

ステップを完了としてマーク

## 6. Distance Grab 設定の追加

Q&A (0)

また、アクセシビリティを飛躍的に向上させる設定として、レイを使って遠くのオブジェクトを掴むことができます。

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

**1.  設定がデフォルトでどのように表示されるかを設定する：**

- Toggle コンポーネントで、**Is On**プロパティを有効または無効にします。
- トグルのテキストを「Distance Grab」に変更します。

**2.  すべての掴めるオブジェクトが、同じレイヤー上でアクセスできるようにする：**

- 各オブジェクトの XR Grab Interactable コンポーネントで、**Interaction Layer Mask** プロパティに **Default** レイヤーが含まれていることを確認します。

**3.  レイが別のレイヤーセットに変更できるようにする：**

- Hierarchy で、**LeftHand Ray**と **RightHand Ray**の両方のオブジェクトを選択します。
- 両方のオブジェクトに Set Interaction Layer コンポーネントを追加します。
- **Target Layer**プロパティを、**Default** レイヤーと **Raycast** レイヤーを含むように設定することで、オブジェクトを掴めるようになります。

**4.  「Distance Grab」トグルがこれらのターゲットレイヤーをトリガーするようにする：**

- Toggle コンポーネントの **On Value Changed**イベントで、**＋**を 2 回クリックして、新しいアクションを 2 つ（両手に 1 つずつ）追加します。
- 一方のオブジェクトスロットに RightHand Ray を、もう一方のオブジェクトスロットに Lefthand Ray を割り当てます。
- どちらのアクションも、SetInteractionLayer > ToggleTargetLayer (Dynamic bool) 関数を選択します。
- **注意：**機能をトグルの値に結びつけるためには、リストの上部にある**Dynamic bool**オプションを選択する必要があります。

[Image: image][Image: image]

これで、離れた場所からレイでオブジェクトを掴む機能を有効または無効にするトグルができました。

**関連リソース：**

- [VR Accessibility](https://www.unimelb.edu.au/accessibility/guides/vr-old)

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

- 黒色からのフェードイン
- テレポートフェード
- 設定メニュー

**新しいコンセプトとスキル：**

- VR の快適性
- VR のアクセシビリティ

**次のレッスン：**

- 最適化

ステップを完了としてマーク任意のステップ

## 8. 追加のアクティビティ

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.  画面外で聞こえるナレーションの追加 [Easy]** **(難易度：低)**

メインメニューのテキストを読み上げて、シーンの最初に再生される音声ナレーションを追加する：

- OnSceneLoad スクリプトを使用して、このトリガーを行います。
- その他の追加：音声のみを再生する

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

**2.  クローズドキャプション設定の追加 [Medium]** **(難易度：中)**

クローズドキャプションを追加して、音声のアクセシビリティを高める：

- 暖炉などの周囲の音については、音の場所で何の音なのかを示すクローズドキャプションを追加します。
- その他の追加：クローズドキャプションの「ビルボード」をプレイヤーの方に向けて、常にプレイヤーの方を向いているようにして、常に読める（Course Library の「LookAtPlayer」スクリプトを使用するか、独自のスクリプトを作成します）ようにします。
- その他の追加：テレビでは、言葉の入ったビデオを使い、ビデオ内の言葉（提供された「Unity-shape-the-world」のビデオにはナレーションが入っている）に合わせてクローズドキャプションを付けます [Requires programming] (プログラミング必要)

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

**3.  連続した動作の設定を追加 [Medium] (難易度：中)**

連続した動作のオン/オフを切り替える設定を追加：

- トグルの Snap Turning の時と同じテクニックを使います。
- XR Rig には、Continuous Move Provider コンポーネントと Continuous Turn Provider コンポーネントを追加する必要があります。
- その他の追加：単一のトグルまたはドロップダウンで、(a) 連続的な移動と旋回、(b) スナップターンとテレポートを交互に切り替えることができます。

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
