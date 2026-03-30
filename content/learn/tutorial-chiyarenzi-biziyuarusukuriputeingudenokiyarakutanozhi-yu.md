[Image: image]

# チャレンジ：ビジュアルスクリプティングでのキャラクターの制御

Exercise

Beginner

+60XP

60 mins

23

Unity Technologies

[Image: チャレンジ：ビジュアルスクリプティングでのキャラクターの制御]Summary

ビジュアルスクリプティングの知識と創造性を試してみましょう。このチャレンジでは、これまでに学んだことを応用して、動くキャラクターを使った独自のプロジェクトを作成します。ここでは、以下の方法を思い出す必要があります：

- 新規プロジェクトでのビジュアルスクリプティングの設定
- Blackboard、Graph Inspector、Graph ウィンドウの使用
- Fuzzy Finder を使ったユニットの追加
- Blackboard での 変数の作成と管理
- Graph、Object、Scene の変数を正しく使う
- ユニットをつなげて論理フローを作る
- ユニットの入力に適切なオブジェクト型を使用
- Get Delta Time ユニットの使用
- 値の算出
- If と Switch を用いてビジュアルスクリプトのフローを分岐させる
- ユーザーが入力したユニットを適用
- ゲームオブジェクトの移動と回転にユニットを適用

Resources

- [IntroVisualScriptingFinal.zip](https://unity-connect-prd.storage.googleapis.com/20210315/e0fbe9a5-c44e-4c90-bce9-f807083949e3/IntroVisualScriptingFinal.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952756961)

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

このチャレンジでは、あなたが制御するのです。このチュートリアルで作成したビジュアルスクリプトをベースにして、任意のキャラクターやその他の 3D フィギュアにビジュアルスクリプティングを適用し、3D 空間でダンスや動きをさせていきます。

その後、プロジェクトを公開し、ギャラリーに掲載して、ビジュアルスクリプティングを学んでいる他の人たちと共有することをお勧めします！

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

このシリーズのチュートリアルをスキップしてしまった方のために、今回のチャレンジに適用できるユニットとテクニックをまとめてみました。

- **Get Variable** と **Set Variable：**必要に応じて、Graph、Object、Scene の変数を使用します。Inspector で値を利用するには、Object 変数を使用します。
- **Multiply：**このユニットと他の数理ユニットを使って計算を行います。
- **Get Delta Time：**動きの速さを正規化するための、ユーザーの表示フレームあたりの秒数を取得します。
- **If** と **Switch：**単純な分岐から複雑な分岐まで対応しています。
- **Input: Get Key** と **Input: Get Input String：**これらは、ユーザーの入力を検出するための数多くのユニットのうちの 2つに過ぎません。
- **Transform: Rotate (X Angle, Y Angle, Z Angle)：**ゲームオブジェクトを 1 フレームあたり何度か回転させるユニットです。
- **Transform: Translate：**Vector3 の入力により、ゲームオブジェクトを現在の位置から一定の距離だけ移動させるユニットです。
- **Vector 3: Get Up** と **Get Down：Get Left**、**Right**、**Back**、**Forward**も参照してください。

**さらに！**Fuzzy Finder を使って、他のユニットや、上記のユニットに対する他のオーバーロードを確認してみましょう。詳しくは、Graph Inspector と Unity Scripting API のドキュメントを参照してください。

もし、このチュートリアルのやり方に疑問がある場合は、このチュートリアルにアタッチされているファイルをプロジェクトにインポートしてください。このチュートリアルで説明されているスクリプトを使って、新しいシーンが追加されます。

このファイルをインポートするには：

**1.**ダウンロードして解凍すると、.unitypackage ファイルを取得します。

**2.**Unity エディターのメインメニューで **Assets > Import Package > Custom Package** の順に選択します。

**3.**.unitypackage ファイルを選択し、画面の指示に従ってインポートを完了します。

ステップを完了としてマーク

## 3. チャレンジの手順

Q&A (0)

このチャレンジでは、ご自身のプロジェクトにあるキャラクターを使用するか、[Unity アセットストア](https://www.google.com/url?q=http://assetstore.unity.com&sa=D&source=editors&ust=1615498245035000&usg=AOvVaw3UyTqExo2QCxGMmboPiqer) で無料のキャラクターアセットを検索して、ご自身のプロジェクトにインポートすることをお勧めします。また、このチャレンジは、任意の 3D マイクロゲームのテンプレートで完成させ、そこに含まれるアセットを使用することもできます。

このプロジェクトでは、キーボードやマウスを使って、ユーザーがさまざまな方法でキャラクターを動かしたり回転させたりできるようにします。これらのオプションをできるだけ多く試してみてください：

- 少なくとも 4つ (4) のユーザーインプットとモーションのタイプを提供します。ユーザーはコンピュータの入力（WASDキー、矢印キー、マウス、またはその組み合わせ）を使用します (マウス入力のアイデアについては、Fuzzy Finder で「マウス」を検索してください）。
- ユーザーが動きや回転の速度を変更できる入力を使用します。
- キャラクターが一方向に進みすぎたり、速すぎたり遅すぎたりすると何かが起こるようにします。例えば、Y 位置が高くなりすぎた場合（**Transform: Get Local Position** を参照）、地面に落下するようにします。
- ユーザーの 1フレームあたりの表示秒数をもとに、移動や回転の速度を正規化します。

ステップを完了としてマーク

## 4. プロジェクトの公開

Q&A (0)

この手順で、[Visual Scripting プロジェクトを WebGL に公開](https://learn.unity.com/tutorial/create-and-publish-webgl-builds)します。

ステップを完了としてマーク

## 5. 次のステップ：Clive the Cat’s Visual Crypting

Q&A (0)

*Clive the Cat* が次のビジュアルスクリプティングのチュートリアルシリーズのホストです。クライブの Visual Crypt から、日本の倉庫番パズルを使って、ビジュアルスクリプティングのスキルを実際のゲームに応用する方法を紹介します。

[次の学習プロジェクト](https://learn.unity.com/project/visual-scripting-application-clive-the-cat-s-visual-crypting)に進み、クライブに会いに行こう！

ステップを完了としてマーク

## 6. プロジェクトの提出

Q&A (0)

作成したプロジェクトを下記の Project Gallery にアップロードして、あなたと同じようにビジュアルスクリプティングを学んでいる人たちと共有することをお勧めします。

コメントには、あなたのプロジェクトでどのキーとマウスの入力が機能するかを必ず説明してください。また、どのようにして作ったのか、何に触発されて作ったのかなど、面白い情報があれば教えてくださいね。

#### 提出するにはログインしてください

ログイン

## Complete this Tutorial

すべてのステップを完了としてマーク

Submission Gallery

[[Image: 3分間シューティング]

3分間シューティング

Visual Scripting Introductionのチャレンジ課題
３分以内にターゲットをたくさん破壊してハイスコアを狙おう

使用音源
SE 効果音ラボ
BGM Youtube Library

Yyoshinori100561020](https://learn.unity.com/submission/68bd2586edbc2a0adad1e38f)[[Image: Rat&Cheese]

Rat&Cheese

WASDキーで前後左右に動きます。

TTokoroten365831311](https://learn.unity.com/submission/6652e3bdedbc2a530e50c9c3)Load More
