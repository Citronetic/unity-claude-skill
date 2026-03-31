[Image: image]

# フィルターにポストプロセッシングを追加する

Tutorial

Beginner

+10XP

30 mins

0

Unity Technologies

[Image: フィルターにポストプロセッシングを追加する]Summary

ポストプロセッシングを使用すると、アプリケーション全体の外観や雰囲気を 1 回のクリックで変更することができます。ポストプロセッシングは、スマートフォンの写真に追加する一般的な画像フィルターと似ています。

このチュートリアルでは、以下のことを行います。

- フィルター用のポストプロセッシングボリュームを設定する。
- ボリュームにポストプロセッシングエフェクトを追加する。
- 更新したアプリケーションをビルドしてテストする。

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

ここまでのステップで、AR フィルターに色々幅広くエフェクトを増やしてきましたが、その最終段階として、AR フィルターを見栄え良くします。**ポストプロセッシング**とは、カメラがシーンをキャプチャした後、そのシーンがレンダリングされて画面に出る前に、フルスクリーンで画像処理を行う、エフェクトの総称です。ポストプロセッシングエフェクトは、カメラの焦点を変えたり、シーンの明るい領域を輝かせたり、カメラビューの端を暗くしたりすることが可能で、それだけでなく他にもさまざまなエフェクトが存在しています。アプリケーションの外観を改良するのに、大変良い工夫になります。

このチュートリアルでは、以下のことを行います。

- フィルター用のポストプロセッシングボリュームを設定する。
- ボリュームにポストプロセッシングエフェクトを追加する。

また、ポストプロセッシングを適用する際のモバイルハードウェアの制約についても少し学習します。ポストプロセッシングエフェクトはリソースをかなり多く消費する場合もあります。そのため、モバイルハードウェアの制約というものを把握しているかどうかで、実際に AR アプリケーションにどのエフェクトを使うかを決める際に違いが出てきます。

**ノート**：このチュートリアルではポストプロセッシングの基本の一部を紹介しておりますが、すべてを網羅しているわけではありません。Unity でのポストプロセッシングについて理解を深めるには、「[**Creative Core: Post-processing（英語）**](https://learn.unity.com/project/creative-core-post-processing)」も参考になります。

ステップを完了としてマーク

## 2. フィルターアプリケーション用のポストプロセッシング

Q&A (0)

Unity プロジェクトへポストプロセッシングエフェクトを加える方法は多岐にわたっており、進行しているプロジェクトのタイプにより変わってきます。このパスウェイの AR テンプレートでは、ユニバーサルレンダーパイプライン（URP）が使用されています。これは、[プロジェクト内の 3 次元情報を取得して 2 次元の画面上に表示する](https://learn.unity.com/tutorial/get-started-on-your-guided-project#619fbf21edbc2a39aabd80eb)ための、一連の手法と計算方法をまとめたものです。

URP プロジェクトのシーンにポストプロセッシングエフェクトを追加し、管理するには**「ボリューム」**と呼ばれるものを使用します。例えば、ボリュームを 1 つ設定して、シーン全体に 1 つのエフェクトを適用することもできますし、複数のボリュームを設定して、シーン中の複数の範囲に違ったエフェクトかけて表示したりできます。

このチュートリアルでは、フィルターアプリケーションにポストプロセッシングエフェクトを適用するために、ボリュームを 1 つ作り、設定していきます。

ステップを完了としてマーク

## 3. ポストプロセッシングボリュームを設定する

Q&A (0)

以下の手順に従って、アプリケーション用のポストプロセッシングボリュームを設定してください。

**1.**  「Hierarchy」で、**AR Session Origin** ゲームオブジェクトを展開し、その子である **AR Camera** ゲームオブジェクトを選択します。

[Image: image]

**2.**  「Inspector」で、Camera コンポーネントを見つけ、「**Rendering**」セクションを展開します（最小化されている場合）。

**3.**   「**Post Processing**」が有効になっていることを確認します。

[Image: image]

**4.**  「Hierarchy」で、右クリックして「**Volume**」>「**Global Volume**」を選択します。グローバル（ローカルと対をなすモード）は、ポストプロセッシングエフェクトがシーン全体に適用されることを意味します。

**5.**  Volume コンポーネントで、「**New**」を選択してボリュームプロファイルを作成します。

[Image: image]ステップを完了としてマーク

## 4. ポストプロセッシングエフェクトを追加する

Q&A (0)

シーンにポストプロセッシングボリュームが設定されたので、そのボリュームにエフェクトを追加してフィルターの見た目を変えることができます。まずはフィルターの色合いを適用しましょう。

**1.**  「Volume」コンポーネントで、「**Add Override**」を選択します。

[Image: image]

ボリュームに追加した各エフェクトは、ボリュームの設定を調整する個別のオーバーライドに含められます。

**2.**  検索または移動して、「**Color Adjustments**」オーバーライドを選択します。

[Image: image]

このエフェクトは、カメラに映るすべてのものに色合いを適用します。これは最も目立つポストプロセッシングエフェクトの 1 つであり、アプリケーションでテストするのに適しています。

**3.**  「**All**」を選択して、「Color Adjustments」オーバーライドのすべてのプロパティを有効にします。

[Image: image]

**4.**  「**Color Filter**」ウォッチを選択し、ダイアログウィンドウでシーンの色合いを選択します。

[Image: image]ステップを完了としてマーク

## 5. ビルドしてテストする

Q&A (0)

アプリケーションをビルドしてテストすると、色合いがカメラビュー全体に適用されるはずです。

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

以下の手順を実行して、アプリケーションをビルドしてテストします。

**1.**  シーンを保存します。

**2.**  「Build Settings」ウィンドウを開きます（「**File**」>「**Build Settings**」）。

**3.**  デバイスが接続されていることを確認してから、「**Build and Run**」を選択してデバイスでアプリケーションをビルドします。

**4.** デバイスでアプリケーションが自動的に開きます。顔が検出されると、アプリケーションにここまでで追加したすべてが表示され、アクセサリのアニメーションが再生されるはずです。

**ノート**：お使いのデバイスへのビルド方法についての再確認として、[Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) または [iOS](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641) 向けのプロセスを見直しておくのも良いでしょう。

ステップを完了としてマーク

## 6. ポストプロセッシングに関するモバイル上での制約

Q&A (0)

ポストプロセッシングは体験の視覚的魅力を高めるのに効果的ですが、これらのエフェクトは多くのリソースを消費するため、重要なパフォーマンス問題を引き起こす可能性があります。ほとんどの AR アプリケーションはモバイルハードウェア上で実行されるため、ポストプロセッシングエフェクトを選ぶ際にはハードウェアの制約を考慮する必要があります。

URP を使用して体験を作成する場合、以下のエフェクトはデフォルトでもモバイルに非常に適しています。

- ブルーム（「High Quality Filtering」が無効の場合）
- 色収差
- カラーグレーディング
- レンズディストーション
- ビネット

ステップを完了としてマーク

## 7. 他にもトライしてほしいこと

Q&A (0)

さらなるスキルの向上や、新しいコンセプトの模索、現プロジェクトについての改善などを考えているのであれば、以下の任意のアクティビティもぜひ見るようにしてみてください。それぞれ「初級」、「中級」、「上級」のタグが付いているので、難易度を選択できます。

これらのアクティビティは完全に任意であるため、興味がなければこのステップをスキップしてもかまいません。ただ、今回の学習体験を最大限に生かすためにも、このアクティビティの内の 1 つは試してみることをお勧めいたします。それでは頑張ってください！

#### 初級：ビネットエフェクトを作成する

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

**ビネット**は、見る人が画面の中央に意識を向けるようにしたい場合や、エッジに軽くフェードを追加したい場合に便利なエフェクトです。ビネットは写真の世界で使用される用語で、画像の外縁に向かってより暗くしたり彩度を低くしたりする処理のことを指します。ビネットのオーバーライドをボリュームに追加してみましょう。

Inspector で、ビネットの以下のプロパティを変更してみてください。

- 「Color」：カラーピッカーを使用してビネットの色を設定します。
- 「Intensity」：ビネットエフェクトの強さを設定します
- 「Smoothness」：スライダーを使用して、ビネットの境界の滑らかさを設定します。

#### 中級：カラーフィルターを作成する

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

体験内での色の表示方法を変更することで、アーティスティックな効果を作り出すことができます。ボリュームにカラーカーブのオーバーライドを追加してみましょう。このツールは、写真編集アプリケーションの調整フィルターと同じような働きをします。このツールを使用すると、特に明るい領域をトーンダウンするなどの一般的なビジュアル調整を行ったり、異なる色範囲を選択的に変更するなどのアーティスティックな効果を作り出すことができます。カラーカーブの詳細については、[URP のポストプロセッシングに関するドキュメント](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-Color-Curves.html)を参照してください。

「**Hue vs Saturation**」カーブを使用して、シーンの色と彩度の特定の範囲を調整してみましょう。作成できるカラーフィルターには以下のようなものがあります。

- すべての彩度を削除してシーンをモノクロにする。
- お気に入りの色以外のすべての色を削除する。

#### 上級：ポストプロセッシングエフェクトを見つけて Unity で適用する

ポストプロセッシングの概念や、Unity でエフェクトを適用する方法がわかったら、利用可能な他のエフェクトを試してみて、フェイスフィルターをどのように改善ができるか探求してみましょう。

利用可能なエフェクトの完全なリストは、[URP のポストプロセッシングに関するドキュメント](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.1/manual/EffectList.html)で確認できます。

ステップを完了としてマーク

## 8. 次のステップ

Q&A (0)

おめでとうございます！以上の作業で、顔を単に追跡するだけでなく、3D アニメーションやビジュアルエフェクトを組み合わせて機能する AR アプリケーションが作成できました。これを達成するために、あなたは以下の作業を行いました。

- フィルターに顔のテクスチャを適用しました。
- アニメーションを選んで 3D アクセサリに適用しました。
- パーティクルシステムを選んで追加しました。
- 最終的な仕上げのためにポストプロセッシングエフェクトを設定しました。

ここからは、これまでのスキルと知識を活かして、新たなチャレンジに取り組んでいきましょう。これから、架空のビジネスのプロジェクト概要を受けて、独自の AR フィルターを作成していきます。自分の納得がいく新しい AR フィルターアプリケーションが作成できたら、それを提出して他の人たちと共有しましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
