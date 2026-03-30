[Image: image]

# バーティカルスライスを探る

Tutorial

intermediate

+10XP

20 mins

1

Unity Technologies

[Image: バーティカルスライスを探る]Summary

このコースのケーススタディは「Out of Circulation」で、ポイントアンドクリックの対話で謎を解き明かすナラティブアドベンチャーゲームの非常に小さなプレイアブルなセクションです。このチュートリアルでは、このケーススタディをプレイして、最初の印象を記録します。

Resources

- [OutOfCirculation_v1_Windows.zip](https://unity-connect-prd.storage.googleapis.com/20220519/c5aefd9a-0a39-498c-9b0c-f68940ce1158/OutOfCirculation_v1_Windows.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954965718)
- [OutOfCirculation_v1_Mac.zip](https://unity-connect-prd.storage.googleapis.com/20220519/483b1b91-00cc-4112-bbd0-ca475b2c2eec/OutOfCirculation_v1_Mac.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954965718)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

「Out of Circulation」は、このコースのケーススタディです。ポイント・アンド・クリック方式のナラティブアドベンチャーゲームの、ごく小さなプレイアブルセクションです。

このチュートリアルでは、「Out of Circulation」のビルド（実行ファイル）をプレイして、プレイヤーの視点から見た最初の印象を書き留めておきます。このコースの後半では、「Out of Circulation」がどのように開発されたかを学び、私たちが作成したものを探索および改良する多くの機会が与えられます。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

#### Unity を初めて使う方へ

この学習体験は、あなたがすでに Unity エディターを使いこなしていることを前提にしています。Unity を初めて利用する場合、[Unity Essentials 学習パスウェイ](https://learn.unity.com/pathway/unity-essentials)は、Unity エディターで作成するための設定および準備に役立つように設計されています。

#### 「Out of Circulation」のビルドのダウンロード

お使いのパソコンでサンプル例の再生に適したファイルを取得するには：

**1.**  チュートリアル教材から、お使いのプラットフォームに適したビルドをダウンロードします：

- [Windows](https://connect-prd-cdn.unity.com/20220519/c5aefd9a-0a39-498c-9b0c-f68940ce1158/OutOfCirculation_v1_Windows.zip?_ga=2.220841114.362177963.1652687262-566282091.1650545793)
- [macOS](https://connect-prd-cdn.unity.com/20220519/483b1b91-00cc-4112-bbd0-ca475b2c2eec/OutOfCirculation_v1_Mac.zip?_ga=2.184156452.362177963.1652687262-566282091.1650545793)

**注：**macOS ビルドを初めて開くには、実行ファイルを選択したまま（または右クリック）、**Open** を選択する必要があります。

**2.**  コンピューター上の適当な場所を選び、そこでフォルダーを解凍します。実行ファイル **Out of Circulation** は、ゲームを起動するために使用するものです。Unity プロジェクト「Out of Circulation」 をセットアップします。

このアセットを使用するのはコースの少し後ですが、後で時間を節約するために、今すぐ「Out of Circulation」アセットをダウンロードすることができます。

#### Unity プロジェクト Out of Circulation の設定

このアセットを使用するのはコースの少し後ですが、後で時間を節約するために、今すぐ「Out of Circulation」アセットをダウンロードすることができます。

Unity プロジェクトの設定方法：

**1.**  [Unity 2021.3 LTS をインストール](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa)していない場合は、こちらからインストールしていただけます。

**2.** 3D Core のテンプレートを使用して、新規に Unity プロジェクトを作成し保存します。

**3.**  アセットストアで [Practical Game Accessibility Case study](https://assetstore.unity.com/packages/slug/223056) プロジェクトを開きます。

**4.**  [アセットをダウンロードし、Unity プロジェクトにインポート](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)します。

**5.**  プロジェクトを保存します。

ステップを完了としてマーク

## 3. バーティカルスライスとは？

Q&A (0)

コース自体の主要情報を確認したところで、コースのケーススタディ「Out of Circulation」に触れる準備はほぼ整いました。コースのケーススタディとして作成したゲームのように、小規模でプレイアブルなセクションをバーティカルスライスと呼ぶことがあります。

[Image: image]

**バーティカルスライス**(**vertical slice**) とは、ゲーム全体の主要なシステム、機能、アートなどを示すゲームの小さな部分のことです。

バーティカルスライスは、潜在的な出資者やパブリッシャーにゲームプロジェクトをアピールするために使われることがあります。また、技術的なデモンストレーションや、学習体験をサポートするケーススタディにも有効です（今回のように！）。

「Out of Circulation」はバーティカルスライスとして、システム、美的デザイン、最終的な完成度を高めており、ゲーム全体のファイルサイズやそのスコープに圧倒されることなく、アクセシビリティを探求するのに役立ちます。

ステップを完了としてマーク

## 4. 「Out of Circulation」を探る

Q&A (0)

「Out of Circulation」をポイント・アンド・クリック方式のナラティブアドベンチャーゲームにしたのは、この種のゲームには、コースを通じて探求していただくためのさまざまなアクセシビリティへの配慮が含まれているからです。

ダウンロードしたゲームビルドを実際にプレイしてみましょう。所要時間は 5 分から 20 分です。第一印象を記録しておくと、このコースの後半でゲームビルドを評価するときに、後で観察したことと比較することができます。

バーティカルスライスを探索し、作業しながら考えてみましょう：

- 全体的な体験についての最初の印象について
- 体験のしやすさとの関連で気づいたことなど
- 体験をしたチームに聞いてみたいこと

「[**Design and development**](https://learn.unity.com/project/design-and-development?uv=2021.3&courseId=625fdcaaedbc2a43147471e0)」プロジェクトでの「Out of Circulation」で探索と実験をする機会があります。

#### デフォルトのコントロール

「Out of Circulation」で行えることは以下の通り：

- 選択 (マウス) または WASD コントロール / 矢印キー (キーボード) で場所を移動します。
- マウスで選択するか、スペースバー (キーボード) を使って、インタラクティブなオブジェクトに素早く接近することができます。
- 選択 (マウス) またはスペースキー (キーボード) を使って、キャラクターやオブジェクトとインタラクションを行うことができます。

**重要：**また、これらのデフォルトの操作方法は、ゲーム設定メニューでリマップすることができます。

ステップを完了としてマーク

## 5. 次のステップ

Q&A (0)

これでバーティカルスライスを初めて探索し、個人的な学習の旅を計画する準備が整いました。次のチュートリアルでは、このコースでの個人的な目標を振り返り、自分に合った開発ログを設定します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
