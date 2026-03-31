[Image: image]

# パーティクルシステムの概要

Tutorial

Beginner

+10XP

15 mins

22

(26)

Unity Technologies

[Image: パーティクルシステムの概要]Summary

Unity には強力なパーティクルシステムが搭載されており、動く液体、煙、雲、炎、魔法の呪文など、さまざまな効果（エフェクト）をシミュレートできます。このチュートリアルでは、パーティクルシステムとその機能に関する高レベルの概要が分かり、独自のプロジェクトのアイデアを得ることができます。

Languages available:

日本語English日本語简体中文日本語

## 1. パーティクルシステムって何？

Q&A (0)

Shuriken として知られる Unity のパーティクルシステムは、動く液体、煙、雲、炎、魔法の呪文など、さまざまな効果（エフェクト）をシミュレートできる堅牢なパーティクルエフェクトシステムです。このシステムでは、本来は流動的で目に見えないエフェクトを表現することが多いため、メッシュやスプライトを使うことにより、通常では表現が難しいエフェクトを表現することが可能になります。

Unity に搭載されているパーティクルシステムは、非常に強力で本格的なシステムです。パーティクルシステムに含まれるすべてのモジュールと、各モジュールが単独で何をすることができるのかについて、何ページもの説明が必要になります。このドキュメントでは、パーティクル システムとその機能の概要について説明します。

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

## 2. パーティクルシステムの追加

Q&A (0)

プロジェクトにパーティクルシステムを追加する方法は：

1. Effects ドロップダウンから、Effects > Particle System の順に選択します。
2. 既存のゲームオブジェクトにパーティクルシステムを追加するには、そのゲームオブジェクトを選択します。コンポーネント内の Add Component をクリックし、検索フィールドに Particle System と入力します。

Particle System を追加すると、Inspector タブに Particle System のプロパティが表示されます (**画像 01**)。

[Image: image]ステップを完了としてマーク

## 3. パーティクルシステムのプロパティ

Q&A (0)

シーン内でエミッターが上方向にランダムに白いスプライトを噴出しているのが見えるはずです。

- シーン内で選択するか、Hierarchy を使用して、このパーティクルシステムを選択します (**画像 02**)。

[Image: image]

システムの実際の大きさがわかります。パーティクルシステムには、設定できる基本的な設定がいくつかあります（**画像 01**）。また、Particle System の Inspectorには、モジュールと呼ばれるタブが多数用意されています（**画像 03**）。

[Image: image]

これらのモジュールには、パーティクルシステムのさらなる設定が含まれています。デフォルトで展開される主なプロパティは、メインモジュールとして知られています (**画像 01**)。

- Emission と Shape Modules を選択して展開し、その設定を表示します (**画像 04**)。

[Image: image]

これらのモジュールを使用して、エフェクトをさらにカスタマイズすることができます。しかし今は、最も一般的なパーティクル設定を含むメインモジュールについて見ていきましょう。

- **Duration**：Looping がチェックされていない場合のパーティクルを放出し続ける時間
- **Looping**： パーティクルを繰り返し放出するか、一度だけ放出するかを決めます。
- **Prewarm：**Looping****が有効な場合にのみ使用します。パーティクルのサイクルを１回実行した状態で始めます。
- **Start Delay：**パーティクルシステムが放出を始めるまでの秒単位の遅延。
- **Start Lifetime：**パーティクルの最初の生存時間。パーティクルはこの経過時間の後に破壊されます。
- **Start Speed：**任意の方向への各パーティクルの初速。パーティクルの速度が上がるほど、パーティクルの広がりが大きくなります。
- **3D Start Size：**x,y,z で最初のパーティクルのサイズを指定出来ます。開始サイズを定数からベクトルに変更
- **Start Size：**各パーティクルの最初のサイズ
- **3D Start Rotation：**x,y,z で最初のパーティクルの角度を指定出来ます。 Start Rotation（初期回転角度）を定数からベクトルに変更します。
- **Start Rotation：**各パーティクルの最初の回転角度
- **Start Color：**各パーティクルの最初の色
- **Gravity Modifier：**Unity の Physics Manager ウィンドウで設定する重力値をスケールします。値を 0 にすると重力が無効になります。
- **Simulation Space：** パーティクルのアニメーションを行う空間を指定。 ローカル空間では親要素を動かすと一緒に動きます。ワールド空間のパーティクルは、一度放出されると自由に動きます。
- **Simulation Speed：**パーティクルシステム全体を更新するスピードを指定します。
- **Delta Time：**Delta Time を Scaled から Non-scaled に変更します。Scaled 時間はフレームに対して経過した時間なので、ゲーム実行中のみカウントされます。Non-Scaled はゲーム開始からの経過時間で、ゲームが一時停止している間にエフェクトを再生するのに便利です。
- **Scaling Mode：**トランスフォームのスケールの使用方法を選択します。Hierarchy、Local、Shape のいずれかに設定します。
- **Play on Awake：**有効にするとすぐに放出を開始します。これを無効にすると、スクリプトやアニメーションシステムを使ってパーティクルシステムを手動で動作させる必要があります。
- **Emitter Velocity：**エミッターの速度を Rigidbody から Transform に変更することができます。
- **Max Particles：**同時に存在できるパーティクルの最大数。限界数に到達すると、それ以上パーティクルを放出しません。
- **Auto Random Seed：**チェックを入れるとパーティクルの生成をランダムにします。
- **Stop Action：**パーティクルシステムが停止し、すべてのパーティクルが消滅したときに、パーティクルシステムを無効化するか、削除するかを決めます。

ステップを完了としてマーク

## 4. パーティクルシステムのスクリプト

Q&A (0)

各モジュールには、そのモジュールに関連する追加設定があります。Unity のパーティクルシステムでは、スクリプトを使ってパーティクルシステムにアクセスしたり、変更したり、無効にしたりすることもできます。パーティクルシステムと同様に、コードを使ってパーティクルシステムに影響を与えるための堅牢で汎用性の高い方法を提供します。パーティクルシステムをゲームオブジェクトに追加すると、パーティクルシステムを取得できます (**画像 05**)。

[Image: image]

ParticleSystem の変数を調べて、他のすべてのメソッドや関数にアクセスすることができます。パーティクルシステムを再生したり停止したりするには、以下のコードを使用します (**画像 06**)。

[Image: image]ステップを完了としてマーク

## 5. まとめ

Q&A (0)

Unity の Shuriken パーティクル システムは、多くのオプションと変更可能な設定を備えた汎用性の高い堅牢なシステムで、高度にカスタマイズ可能なエフェクトを無制限に作成するのに役立ちます。これらのエフェクトは、火から水、流体シミュレーション、漫画の爆発など多岐にわたります。このシステムでは、初心者でもエキスパートでも、同程度のコントロールと堅牢な機能を使って、思い通りのエフェクトを作成することができます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
