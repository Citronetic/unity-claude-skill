[Image: image]

# Unity 対応 3ds Max から LOD を作成しよう

Tutorial

intermediate

+10XP

25 mins

1

Unity Technologies

[Image: Unity 対応 3ds Max から LOD を作成しよう]Summary

LOD (Level of Detail、詳細レベル) とは、カメラからの距離に応じて、シーン内のオブジェクトのトポロジーを減らしたり、ポリゴン数を減らしたりすることで、シーンのレンダリングを支援する機能です。オブジェクトは複数の LOD を持つことができます。LOD の数は、オブジェクトの複雑さと、オブジェクトがカメラから離れたり近づいたりしたときにどれだけきれいにレンダリングできるかによって決まります。このチュートリアルでは、LOD の作成方法を学びます。

Languages available:

日本語English日本語日本語

## 1. Unity 対応 3ds Max から LOD を作成

Q&A (0)

LOD (Level of Detail、詳細レベル) とは、カメラからの距離に応じて、シーン内のオブジェクトのトポロジーを減らしたり、ポリゴン数を減らしたりすることで、シーンのレンダリングを支援する機能です。オブジェクトは複数の LOD を持つことができます。LOD の数は、オブジェクトの複雑さと、カメラから離れたり近づいたりしたときにオブジェクトがどれだけきれいにレンダリングされるかによって決まります。ほとんどのオブジェクトでは、1 つまたは 2 つの LOD で十分ですが、ヒーローアセット（カメラが焦点を当てているアセット）を扱う場合は、カメラとの距離が変化したときにアセットの「飛び出し」を防ぐために、追加の LOD が必要になることがあります。

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

## 2. LODs の作成

Q&A (0)

まず、シーンにオブジェクトを置いてみましょう。メッシュは何を使っても構いませんが、今回は 3 つの LOD を持つティーポットを作成します。

1. 3ds Max を開いて、新しいシーンを作成します。

2. 新しいシーンでは、Teapot Object Type を選択し、クリックとドラッグでシーンの中央にティーポットを作成します (**画像 01**)。

[Image: image]

3. Ssegments の数を 10 に変更 (**画像 02**)。

[Image: image]

4. ティーポットの名前を変更します。ベストプラクティスは、「LOD+#」という命名規則を使うことです。今回の例では、「LOD0」とします (**画像 03**)。

[Image: image]

ティーポットのポリ数が最も多いのは、カメラに最も近い LOD になります。この命名規則は業界標準となっており、カメラに最も近い LOD は通常 0 です。より少ないポリ数でより多くの LOD を作成するために、0 から順に増やしていきます。

このサンプルでは、ティーポットオブジェクトの以下の LOD を作成します：

- LOD0：ポリゴン数が最も多く、オブジェクトがカメラの近くにあるときに最も​多いメッシュが表示されるポリゴン数
- LOD1：ポリゴン数は中程度、オブジェクトが背景と前景の中間（中距離）にあるときに表示されるポリゴン数
- LOD2：ポリゴン数が最も少ない、オブジェクトが背景にあるときに表示されるポリゴン数

ティーポットの最後の 2 つの LOD を作ってみましょう。

1. ティーポットを選択し、Windows では Ctrl+V、MacOSでは Command+V を押してクローンを作成します (**画像 04**)。

[Image: image]

2. このティーポットに「LOD1」という名前を付け、「コピー」に設定されていることを確認します。

3. ティーポットを選択し、セグメントを**5**に変更します。これは、カメラに最も近いか遠いかではないときのオブジェクトになります (**画像 05**)。

[Image: image]

4. 再びティーポットのクローンを作成し、このコピーに「LOD2」という名前を付けます。

5. LOD2 のティーポットでは、セグメントを 1 に変更します (**画像 06**)。

[Image: image]

ティーポットの複雑さは様々ですが、すべてのティーポットがグリッドの原点に再配置され、スタックされていることを確認しましょう。LOD がスタックされていないと、機能しません。

次に、すべてのオブジェクトを接続して LOD を作成しましょう。

1. まず、すべての Mesh を選択します。***Group>Group*** と選択します。このグループに「Teapot_LOD」という名前をつけます。

2. ツールバーウィンドウの右側にある Utility タブを表示します。Utilities で Level of Detail のカテゴリーが存在しない場合は、More ボタンをクリックします (**画像 07**)。

[Image: image]

3. 新しいウィンドウで Level of Detail を選択し、 *ユーティリティパネル*に追加します(**画像 08**)。

[Image: image]

4. グループを選択した状態で、Level of Detail Set の Create New Set をクリックします。これにより、グループとすべてのメッシュが自動的に LOD に追加され、パーセンテージが割り当てられます。 パーセンテージは基本的に、LOD0 が画像の 50〜100％ を占めている場合、ポリゴン数の多いモデルである LOD0 を表示するというものです (**画像 09**)。

[Image: image]

5. ウェイトを調整するには、リスト内の LOD を選択し、希望するしきい値を変更するだけです。LOD0 を**50%**と **100%** の範囲から**80%** と**100%** に変更します。

注意：デフォルトのパーセンテージです。 Thresholds カテゴリーの上にある Threshold Units で、ピクセルを使用するように変更できます。Unity 内で LOD のしきい値を調整できるので、Image Output Size は気になりません。

[Image: image]

LOD 設定の作成が完了すると、オブジェクトをエクスポートする準備が整います。ここからは、Unity 用にオブジェクトをエクスポートします。Unity 内で LOD を調整すれば、より細かい調整が可能です。ここでは、エクスポートするための LOD を設定することだけを考えています。

1. **File > Export > Game Exporter**と進みます。

2. 適切なパス、Up Axis、その他の設定をお好みで設定してください。

3. Export をクリックします。

[Image: image]ステップを完了としてマーク

## 3. まとめ

Q&A (0)

LOD はレンダリングのパフォーマンスを向上させ、オブジェクトのカメラからの距離に応じて詳細を微調整することができます。LOD の設定、使用、調整方法を知ることで、シーンを最適化し、レンダラーが行う作業を軽減することができます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
