[Image: image]

# プロトタイプのカウント機能について

Exercise

Beginner

+60XP

120 mins

12

Unity Technologies

[Image: プロトタイプのカウント機能について]Summary

この演習では、提供されたカウント機能を使用した独自のデザインのプロトタイプを作成します。

Resources

- [CountingPrototype.zip](https://unity-connect-prd.storage.googleapis.com/20201007/8775f8e8-edc4-4e5e-b788-c009e85d0914/CountingPrototype.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954051653)

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

このミッションでは、基礎的なプログラミングスキルを向上させ、4 つの新しいプロジェクトを作成しました。あなたのスキルは成長し、個人的なポートフォリオのためにさまざまなコンセプトを開発し始める時期が来ています。アイデアを出すのは難しいし、何から手をつけていいかわからないと思うこともあるかもしれません。この演習では、自分のアイデアを練る練習をするために、まず既存のプロジェクトを出発点とし、その上に新しいコンセプトを作っていくことになります。

ステップを完了としてマーク

## 2. 提供されたアセットをダウンロードし、Unity の新規プロジェクトへインポート

Q&A (0)

この課題を始めるには、まず課題のアセットをダウンロードし、Unity の新規プロジェクトにインポートする必要があります：

**1.**  [**CountingPrototype.zip**](https://connect-prd-cdn.unity.com/20201007/8775f8e8-edc4-4e5e-b788-c009e85d0914/CountingPrototype.zip?_ga=2.129073998.37272804.1639415162-1635354840.1616306530) をダウンロードします。

**2.** フォルダーの中身を解凍するには、フォルダーを右クリックして **Extract All**を選択します（macOS の場合は、zip 形式のフォルダーをダブルクリックします）。中に Counter.unitypackage が入っています。

**注：**圧縮したままフォルダーの中身を見ることは可能ですが、データは圧縮されたままです。 **CountingPrototype** フォルダーの中身を zip 圧縮したままインポートしようとすると、Unity でエラーメッセージが表示されます。次のステップに進む前に、フォルダーが解凍されていることを確認しましょう。

**3.**3D テンプレート「[Create a new Unity project](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196)」を使用して作成します - サポートされている Unity バージョン (2018.4 LTS, 2019.4 LTS, または 2020.3 LTS) のいずれかを使用することを忘れないようにしましょう。

**4.**  **Counter.unitypackage** を、新しい 3D テンプレートプロジェクトに [Import](https://learn.unity.com/tutorial/project-setup-processes#60ed7a91edbc2a002096b762)します。

ステップを完了としてマーク

## 3. デフォルトのシーン機能の検証

Q&A (0)

既存のプロジェクトを拡張するアイデアを考え始める前に、現在何ができるかを時間をかけて探ってみてください。インポートされたパッケージには、4 つのコンポーネント（スクリプト、シーン、2 つのマテリアル）が含まれます。

**1.**  シーンを開いて Play モードに入り、デフォルトの動作を確認します。

このシーンには、シンプルな UI カウンターと、ボックス、そしてその上に置かれたいくつかのスフィアが含まれています。すべてのスフィアに Rigidbody コンポーネントがアタッチされています。シーンを再生するとスフィアが落下し、UI カウンターが更新され、箱に何個着地したかが表示されます。

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

Box Collider (ボックスコライダー) をトリガーに設定したメッシュのボックスに **Counter.cs**というスクリプトを適用しています。このトリガーは、ボックスの内部の正確なサイズにスケーリングされます。**Counter.cs**には、UI カウンター用の publicで Text 型の変数 text があります。

**2.**  **Counter.cs**スクリプトを開き、その機能を検索してください。

ステップを完了としてマーク

## 4. デザインドキュメントの作成

Q&A (0)

提供されたプロジェクトは非常に基本的なものですが、これをさまざまな面白いプロトタイプに変えるチャンスはたくさんあります。どのようなアプリケーションを作りたいかを考え、アプリケーションの機能を説明するデザインドキュメントを作成してみましょう。このコンセプトの段階も全体の演習の一部なので、必要なだけ時間をかけて面白いものを考えてください。

新しいプロトタイプに必要なものは以下の 2 つのみ：

- プロトタイプは何かをカウントしている
- そのカウントを表示する UI 要素

あとは、あなた次第です！以下にインスピレーションのヒントになるようなものをいくつかご紹介します：

- バスケットボール (hoop style) ゲーム：決められた時間内にできるだけ多くバスケットボールをネットに投げ入れます。
- パチンコゲーム：ペグボードに小さなボールをいくつか落とし、下部の各セクションに異なるポイント値を持たせます。
- Stock Counter：異なるオブジェクトがそれぞれのスペースに分類され、それぞれの合計数が表示されます。
- Neighborhood Planner：道路、歩道、家、街灯など、近隣にあるアイテムは、ドラッグアンドドロップ形式の UI ボックスに入っています。ユーザーは、アイテムをドラッグして近隣のデザインを計画することができ、UI は、現実世界でそれを作成するために各アイテムが何個必要かを追跡します。

ステップを完了としてマーク

## 5. アプリケーションのプロトタイプを作成する

Q&A (0)

コンセプトが固まったら、Unity でプロトタイプを作りましょう。この演習でインポートしたファイルから直接作業し、プロトタイプを完成させるために必要なものを追加することができます。もし、追加のアセットを使いたい場合は、[Unity Asset Store](https://assetstore.unity.com/) で多くのアセットを無料で入手できますので、覚えておいてください。

ステップを完了としてマーク

## 6. オプション：プロトタイプの WebGL ビルドの作成

Q&A (0)

この演習では、デザインドキュメントとプロトタイプの動作を示すビデオをアップロードするだけで完了します。ただし、必要であれば、プロトタイプの WebGL ビルドを作成して Unity Play にアップロードし、そのリンクを投稿の説明に含めることができます。

WebGL ビルドの作成手順は以下の通り：

**1.**  シーンを保存します。

**2.**お使いの Unity バージョンに WebGL がインストールされていることを確認します。インストールされているかどうかわからない、または追加する方法がわからない場合は「[**Create and publish WebGL Builds**](https://learn.unity.com/tutorial/create-and-publish-webgl-builds)」チュートリアルのステップ 2 を参照してください。

**3.**  WebGL Publisher パッケージをインストールします。このパッケージを使用すると、Unity Play でプロジェクトを簡単にパブリッシュすることができます。このパッケージがあるかどうかわからない場合や、追加方法がわからない場合は、上記のステップにリンクされているチュートリアルを参照してください。

**4.**  プロジェクトの WebGL ビルドを作成します。お使いのコンピューターによっては、数分かかる場合があります。ビルドの作成にヘルプが必要な場合は「[**Create and publish WebGL builds**](https://learn.unity.com/tutorial/create-and-publish-webgl-builds)」の Step 4 を参照してください。

**5.**  WebGL ビルドを Unity Play でパブリッシュします。Unity Play でのパブリッシュにヘルプが必要な場合は「[**Create and publish WebGL builds**](https://learn.unity.com/tutorial/create-and-publish-webgl-builds)」のステップ 6 を参照してください。

ステップを完了としてマーク

## 7. 成功基準

Q&A (0)

以下の条件をクリアしていれば、成功したと言えるでしょう：

- デザインドキュメントは、提供されたベースプロジェクトを基にしたプロトタイプの機能を記述する
- 新しいプロトタイプは、何かをカウントする
- プロトタイプには、そのカウントを表示する UI コンポーネントが含まれている
- Unity で作成したプロトタイプは、デザインドキュメントに記載された機能を有している
- オプション：プロトタイプの WebGL ビルドを作成し、それを Unity Play にアップロードした。

ステップを完了としてマーク

## 8. 次のステップ

Q&A (0)

プログラミングのスキルが上がれば、ポートフォリオの内容も複雑になっていきます。プログラマーとしてより経験を積んでからポートフォリオ作品を作るというのも魅力的かもしれませんが、多くの知識や経験はポートフォリオそのものを作りながら得ることができます。現在の自分のプログラミング技術を示すような、簡単すぎるプロジェクトなんて存在しないのです。ただ、ベストを尽くすことを忘れないでください。そうすれば、より簡単なプロジェクトからより複雑なプロジェクトへと、あっという間に移行することができますよ。

ステップを完了としてマーク

## 9. 提出

Q&A (0)

この演習が終了したら、デザインドキュメントとプロトタイプが動作しているビデオを、下記の提出用アップロードに提出してください。プロトタイプの WebGL ビルドが Unity Play 上にある場合は、提出物の説明にそのリンクを含めてください。

#### 提出するにはログインしてください

ログイン

## Complete this Tutorial

すべてのステップを完了としてマーク

Submission Gallery

[[Image: throwing basketballs]

throwing basketballs

https://play.unity.com/en/games/6b511497-3ef1-49c9-8be6-1b54f18a0d44/throwing-game

AActionStudioUnity170](https://learn.unity.com/submission/676ed19aedbc2a26149a5544)[[Image: End of Billiard]

End of Billiard

https://play.unity.com/ja/games/44fdb81d-31a2-458b-ad8e-856c73633010/end-of-billiard
棒と白球を使いオレンジ色のボールを全て箱に入れるとクリアです。
入ったオレンジ色のボールの数をカウントしています。

YYuniNoKoutyaUnitea220](https://learn.unity.com/submission/6735d711edbc2a087308cdb4)[[Image: shooting]

shooting

30秒という制限時間の中、移動する箱に何個のボールを入れることができるか挑戦するゲーム

Kkatorisenko300](https://learn.unity.com/submission/66eac559edbc2a0bc801ab34)[[Image: Power Strike]

Power Strike

https://sharemygame.com/@SodapopHiguchi/power-strike

HHiguchiSodapop2830](https://learn.unity.com/submission/66e12f28edbc2a09da21dd61)[[Image: Collect Can]

Collect Can

I submitted wrong place, so I submitt again.
https://play.unity.com/mg/other/cans-9xlr
You can play with Left/Right key.

TTonyudaisuki156380](https://learn.unity.com/submission/64468023edbc2a053c69ac85)[[Image: Shoot Them!]

Shoot Them!

Simple shooting game.  Shoot the falling targets as many as possible.  Maximum 100 targets and infinite cannonballs.  LRUD to aim cannon, SPACE to shoot.  Enjoy!

Mmeetony500](https://learn.unity.com/submission/6436bd7aedbc2a531600c273)Load More
