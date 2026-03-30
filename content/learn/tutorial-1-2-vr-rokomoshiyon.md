[Image: image]

# 1.2 - VR ロコモーション

Tutorial

Beginner

+10XP

90 mins

0

(15)

Unity Technologies

[Image: 1.2 - VR ロコモーション]Summary

このレッスンでは、VR に様々な種類のロコモーション機能を実装する方法を学びます。このレッスンが終わる頃には、ユーザーは新しく家具を配置した部屋をテレポートして、あらゆる角度から鑑賞できるようになっているでしょう。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. 家具で部屋のスペースを埋める

Q&A (0)

これで部屋ができましたが、何もありません。部屋の中に VR インタラクションができるスペースを追加する必要があります。

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

**1.  家具のプレハブを探す：**

- Project ウィンドウで、**Course Library > _Prefabs** を開きます。

**2.  部屋の定義：**

- 部屋の一角に、**鏡**のオブジェクトと**フック**のオブジェクトを追加します。

**3.  リビングルームエリアの定義：**

- 部屋の半分には、**座席**、**テレビ**、**暖炉**などのオブジェクトが置かれています。

**4.  他のエリアの定義：**

- **ラグ**のオブジェクトと、**テーブル**のオブジェクトまたは**収納**オブジェクトを加えて、部屋の様子を演出します。

[Image: image]

これで、フックと鏡のある入り口エリア、テレビと暖炉のあるリビングエリア、そして物を置くための空間のあるエリアができました。

ステップを完了としてマーク

## 2. スナップターン機能の追加

Q&A (0)

次に、物理的に動いたり回転したりしなくても部屋を体験できるように、その場で向きを変えることができる機能を設定します。

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

**1.  XR Rig にロコモーション機能を持たせる：**

- Hierarchy 内で、**XR Rig**オブジェクトを選択し、Locomotion System コンポーネントを追加します。
- **XR Rig**プロパティでは、Inspector から XR Rig コンポーネントを選択し、「None」と表示されているスロットにドラッグします。
- **注意：** また、丸い選択ボタンを選択して、XR Rig オブジェクトをダブルクリックすることもできます。

**2.  XR リグを回転させる：**

- **XR Rig**オブジェクトが選択されたままの状態で、Snap Turn Provider (Action-based) コンポーネントを追加します。
- **System** プロパティでは、Locomotion System コンポーネントをスロットにドラッグアンドドロップします。

**3.  スナップターン体験の微調整：**

- **Turn Amount**と **Debounce Time** のプロパティを試してみてください。
- ジョイスティックを押し下げたときに 180 度回転できるようにするには、**Enable Turn Around** プロパティを選択します。

**4.  連続して回転させる実験をする：**

- Snap Turn Provider コンポーネントを削除し、Continuous Turn Provider (Action Based) コンポーネントを追加します。

[Image: image]

これで、どちらかのハンドコントローラーのジョイスティックを使って、一定の角度だけ回転させることができるはずです。これで、あなたのプロジェクトは動かない状態での体験が可能になりました。

**注意：**XR デバイスのシミュレーターを使用している場合、T または Y でコントローラーを切り替え、A または D でスナップターンをシミュレートすることで、動きをシミュレートできます。

ステップを完了としてマーク

## 3. ラグの上にテレポートエリアを作る

Q&A (0)

回転できるようになったので、特定のエリア内であればどこにでもテレポートできるようになるはずです。

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

**1.  ユーザーがテレポートできるようにする：**

- **XR Rig** オブジェクトを選択し、Teleportation Provider コンポーネントを追加します。
- **System** プロパティでは、Locomotion System コンポーネントをドラッグアンドドロップして、プロパティに割り当てます。

**2.  ラグをテレポートエリアにする：**

- **Rug**オブジェクトを選択し、Teleportation Area コンポーネントを追加します。
- Teleportation Area コンポーネントの下部にある **Teleportation Provider** プロパティに、Hierarchy から **XR Rig**オブジェクトを空のスロットにドラッグアンドドロップして、プロパティに割り当てます。

[Image: image]

これで、ラグのどこかをポイントすると、ラインレンダラーが白くなり、コントローラーのグリップボタンでそこにテレポートできるようになります。グリップボタンとは、コントローラーの内側にある一番下のボタンで、通常は中指で押します。

**注意：**XR デバイスのシミュレーターを使用している場合は、T または Y でコントローラーを切り替え、マウスの中ボタンでレイ（光線）を狙い、G を押して「Grab；掴む」ボタンを押した状態をシミュレートします。

ステップを完了としてマーク

## 4. マットに Teleportation Anchors を作成

Q&A (0)

たまに、特定の方向を向いた特定の場所にテレポートさせたいことがあります。

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

**1.  シーンに Teleportation Anchors を追加する：**

- **Course Library > Prefabs > Rugs** の順に進み、部屋の主要な場所に小さな「マット」オブジェクトを追加します。
- これらのオブジェクトを回転させて、ローカル Z 軸 (青) の矢印が、ユーザーがテレポートしたときの方向を向くようにします。
- **注意：**オブジェクトのローカルな前進方向を見るには、**Local**座標を使用する必要があります。

**2.  Prefab モードでは、すべてのマットの変更を一度に保存できる：**

- マットオブジェクトの 1 つを選択し、Inspector の上部にある **Open** ボタンをクリックします。
- Scene ビューの右上に変更内容が保存されるようにするには、**Auto-save**設定を有効にします。

**3.  マットのプレハブをテレポート先のアンカーにする：**

- マットのプレハブに、新しい Teleportation Anchor コンポーネントを追加します。
- **注意：**実際には、**Teleportation Provider**のプロパティを割り当てる必要はありません。アプリの実行時に自動的に割り当てられます。

**4.  テレポートしたときのアンカーの向きを合わせる：**

- Teleportation Anchor コンポーネントで、**Match Orientation**プロパティを**Target Up And Forward**に設定します。

**5.  Prefab モードを終了する：**

- Hierarchy の左上にある Back arrow を選択します。

[Image: image]

これで、部屋の周りにあるラグにテレポートできるようになり、到着するとラグの方向に再設定されるはずです。

**注意：**Scene ビューのオブジェクトのカラフルなアウトラインを隠すには：Scene ビューウィンドウの右上にある **Gizmos**ボタンをクリックして、Scene ビューのギズモを隠します。また、Gizmos ボタンの横にあるドロップダウン矢印をクリックすると、特定の要素の表示/非表示を切り替えることができます。

ステップを完了としてマーク

## 5. テレポート用レティクルのカスタマイズ

Q&A (0)

どこかにテレポートできるようになると、手からのラインレンダラー (Line Renderer) の色が変わります。レティクル (reticle) を使って、ユーザーにもっと視覚的なフィードバックを与えることができます。

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

**1.  使用したいレティクルを見つける：**

- **Course Library > Prefabs > Reticles > VR**の順に進み、どの Reticle がいいかを決めます。

**2.  テレポートエリアのラグに Custom Reticle** **を割り当てる：**

- Teleportation Area コンポーネントを持つ大きな **Rug**オブジェクトを選択します。
- Teleportation Area コンポーネントの下部にある **Custom Reticle** プロパティで、選択した Reticle をドラッグアンドドロップしてプロパティを割り当てます。

**3.   Teleportation Anchor のマットに Custom Reticle** **を割り当てる：**

- マットオブジェクトのひとつのプレハブを開きます。
- Teleportation Anchor コンポーネントの **Custom Reticle**プロパティに、Reticle を割り当てます。
- Prefab モードを終了します。

[Image: image]

これで、ラインレンダラーとテレポート先の向きが合う位置に、カスタムレティクルが表示されるようになります。

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

- Designed room（設計する部屋）
- Turning rig（ターンするリグ）
- Teleporting rig (テレポートするリグ)

**新しいコンセプト & スキル**

- ロコモーションの種類
(ルームスケール / 連続 / テレポート)
- 吐き気とシミュレータ酔い
- テレポートエリアとアンカー

**次のレッスン：**

- 掴めるオブジェクト

ステップを完了としてマーク任意のステップ

## 7. 追加のアクティビティ（任意）

Q&A (0)

自分のスキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいという方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。それぞれの作品には、難易度を示す [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられ、プログラミングに関連する場合には [Requires Programming] のタグも付けられます。

これらは完全に任意ですが、VR 開発を次のレベルに進めたい方にはぜひお勧めします。

**1. 他の VR の動きをチェック [Easy] （難易度：低）**

投射物のワープ、スクリプトによる移動、投影アバター、ワールドにプルなど、VR の動きの中でもあまり一般的ではないタイプを見てみましょう。

- 「Design, Develop, and Deploy for VR」コースの[移動方法/種類に関するビデオ](https://learn.unity.com/tutorial/unit-4-locomotion-and-ergonomics?courseId=5d955b5dedbc2a319caab9a0#5d969198edbc2a001f9f7588)をご覧ください。
- 他にも、「VR movement types」でググると、VR ロコモーションの面白い戦略が見つかります。

**2. 自分だけのアートを作る  [Medium]（難易度：中）**

自分だけのオリジナル作品を部屋に加えれば、自分だけの部屋になります。

- 自分自身の最高傑作を作ってもいいし、ネットで使用権のあるもの（「creative commons 0」で検索）を探してもいいでしょう。
- ヒント：新しい **Material** (**マテリアル**) を作成して、そのマテリアルの **Base Map** として画像を割り当て、そのマテリアルをオブジェクトに適用する必要があります。

[Image: image]

**3. レティクルアニメーション [Medium] [Requires Programming] (難易度: 中；プログラミング必要)**

レティクルのテレポートを回転させたり、拡大/縮小させたりすることで、よりダイナミックな操作感が得られます。

- ヒント：カスタムの回転スクリプトを作成し、それをレティクルのプレハブに適用します

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
