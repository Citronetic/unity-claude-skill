[Image: image]

# VR ユーザーインターフェース (UI)

Tutorial

Beginner

+10XP

45 mins

12

(13)

Unity Technologies

[Image: VR ユーザーインターフェース (UI) ]Summary

以下の方法を学びます：

- Text Mesh Pro を使った Crisp Text の作成
- Google Fonts からカスタムフォントをインポートしてText Mesh Pro で使用する
- 手への「ジャンプ」を回避する Precision Grab  Interactable オブジェクトについて

Languages available:

日本語English日本語日本語

## 1. ワールド空間での新しいキャンバス

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

1. GameOBject > UI > Canvas の順に選択します。
2. Inspector 内では「Render Mode」が World Space に設定されています。
3. Width (幅) を 3、Height (高さ) を 4 に設定し、X position (位置) を -4.23、Y position (位置) を 2.06 に設定します。
4. キャンバスを Y 軸で -90 度回転させます。
5. テキストの追加（右クリック > UI > TextMeshPro）TMP がない場合は、Window > Package Manage と移動してインストールしてください。
6. Inspector で、テキストの Width を 3 に、Height を 4に設定します。
7. フォントサイズを 0.7 に設定し、テキストを Center (中央) に配置します。

[Image: image]ステップを完了としてマーク

## 2. Google カスタムフォント

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

1. fonts.google.com にアクセスし、フォントを選び、「＋」ボタンをクリックします。
2. 表示されるボックスで「1 Family Selected」をクリックし、ダウンロードボタンをクリックします。
3. フォントを取り出し、TTF（TrueType Font）を Unity にドラッグして取り込みます。
4. フォントを TextMeshPro (TMP) で使えるようにするには、Window > TextMeshPro > Font Asset Creator の順に進みます。
5. Font Asset Creator ウィンドウで、取り込んだフォントを「Source Font File」フィールドへドラッグします。
6. 「Generate Font Atlas」ボタンをクリックします。
7. 「Save As」をクリックし、フォルダーへ保存（Assets > TextMeshPro > Resources > Fonts & Materials フォルダーの順に選択）したら、Font Asset Creator ウィンドウを閉じます。
8. Hierarchy から TextMeshPro Text を選択した状態で、新しく作成した TMP Font Asset（F アイコン）を Inspector ウィンドウの「Font Asset」フィールドへドラッグします。

ステップを完了としてマーク

## 3. テキストフォーマット

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

1. 「Jump Start!」が 1 行に収まるようにフォントサイズを調整します（私は .41 を使用）。
2. Inspector ウィンドウで「Underlay」(ドロップシャドウ) を追加します。設定を使いました：Offset X: .46、Offset Y: -.82、Softness: .137
3. Hierarchy の中で、TMP テキストを複製し（Control + D）、タイトルを「JumpStartText」とし、新しいコピーを「Directions」とします。
4. Inspector のテキストフィールドに、指示（クランプを接続する順番）を追加します。私は以下のテキストを使いました：

1. Red Good
2. Red Dead
3. Black Good
4. Black Dead
5. テキストの左揃え（左揃えボタンをクリック）
6. Hierarchy でキャンバスを選択し、Y の位置を下に移動させます。私は .42 を使ったので、それほど高い位置にはありません。

ステップを完了としてマーク

## 4. テキストのビルボード背景

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

1. Assets > VRTK > Prefabs > Interactions > Interactables の順に選択して Interactable プレハブキューブ（先ほど使用したものと同じなので、後でこれを小さな「クリップボード」サイズの指示に縮小することができる）をドロップします。
2. キューブの scale を X:1, Y:2.59, Z:3.2 に、position をX:-4.85, Y:1.31, Z:-0.8 に設定
3. Hierarchy で、Interactable プレハブの名前を「Billboard」に変更します。
4. Canvas を Billboard にドロップして、子オブジェクトにします（ビルボードとキャンバス＆テキストを一緒に動かせるようになる）。

ステップを完了としてマーク

## 5. クリップボードサイズについて

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

1. Hierarchy の中で、Billboard を複製（control + D）し、名前を「Clipboard」とします。
2. Clipboard のスケールを X:0.1, Y:0.2, Z:0.2 に設定します。
3. 頂点スナップ（Control + Drag）で Clipboard をクランプテーブルに移動させます。
4. オプション：Test SZ と Cylinder を Hierarchy で選択し、Inspector ウィンドウの上部にあるボックスをオフにすることで、邪魔な「Test SZ」と Cylinder を非表示にします。

[Image: image]

ステップを完了としてマーク

## 6. 調整して、正確にオブジェクトを掴む

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

1. Hierarchy で、Clipboard 内の Canvas を選択します。X の位置を調整して、キューブに近づけます。私は X: 0.51 を使用しました。
2. Play モードでは、現在、Clipboard を手に取ると、手の上で予期せぬ方向に「スナップ、 snap」します。もっと正確に変更しましょう。
3. Hierarchy の中で、Clipboard > Interaction Logic > Interactable.GrabLogic > Actions > PrimaryAction の順に展開し、Interactable.GrabAction.FollowAction を選択します。
4. Inspector で、Grab Offset のドロップダウンメニューを「Precision Point」に設定します。

クランプを掴んだとき（手の向きに合わせてジャンプする）と、クリップボードを掴んだとき（ジャンプしない）の違いを試してみましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
