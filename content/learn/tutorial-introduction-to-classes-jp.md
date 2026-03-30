[Image: image]

# クラスの概要

Tutorial

Beginner

+0XP

25 mins

2

(81)

Unity Technologies

[Image: クラスの概要]Summary

このチュートリアルでは、以下の活動を行います。

- コードを整理する仕組みとしての**クラス**の役割について学ぶ
- ドット演算子を使用してさまざまな場所のデータにアクセスする方法を学ぶ（たとえば、他の変数内の変数）
- SpawnerSample スクリプトにおけるドット演算子の使用例を確認する
- 型としてのクラスの使い方について確認する

このチュートリアルを終えると、SpawnerSample スクリプトに独自のクラスを作成するために必要な知識が身に付きます。

Languages available:

日本語English日本語한국어简体中文日本語

## 1. これまでの進捗状況

Q&A (0)

ここまでの「Creator Kit：コーディング入門」のチュートリアルでは、変数と呼ばれる単純な入れ物について学ぶところから始めて、グループ化されたひとまとまりの命令としての関数の使い方までを扱いました。これで、スクリプトファイルとコードの中にある重要な情報を識別するために必要なほぼすべてのことがわかりました。

このプロジェクトでスクリプトファイルを開くと、スクリプトの以下の要素を識別できるはずです。

- スクリプトを書いた人からのコメント
- 指示
- 変数の宣言と割り当て
- 関数

個別の命令 1 つ 1 つが何をするのか正確に言うことはできないかもしれませんが、関数と変数の名前から、合理的な推測をすることができます。さて、先に進みましょう。次のステップに進む前に、プロジェクトウィンドウから別のスクリプトファイルを開いて、要素の識別をやってみてもいいでしょう。

ステップを完了としてマーク

## 2. 関数の一段上のレベルの要素を知る

Q&A (0)

前のステップで新しいスクリプトを開いた時、関数の一段上に別の情報があることに気付いたかもしれません。

関数は、波括弧のペアで囲まれています。ただし、**SpawnerSample** スクリプトに戻ると、2 つの関数を囲む別の波括弧のセットが見つかります。

最初の開き波括弧の 1 つ上の行には、次のような宣言があります。

```csharp
public class SpawnerSample : MonoBehaviour
```

これはクラス宣言と呼ばれ、キーワード **class**を使用して識別されます。

いまは class キーワードとクラスの名前以外の要素は無視して問題ありません。

```csharp
class SpawnerSample
```

ステップを完了としてマーク

## 3.  クラスとは何か

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

関数を使うと、命令をグループ化できます。同様に、クラスを使用すると、関連する関数と変数をグループ化できます。

クラスは、関連するコンテンツを積んだ個別の荷車と考えることができます（たとえば下の図では荷車に積まれたトランクが変数を、樽が関数を表しています）。荷車の集まりが組織化された荷車隊としてまとまって移動できるように、クラスは組織化されたスクリプトとしてまとまって動くことができます。

[Image: image]

SpawnerSample スクリプトでは、7 行目以降の波括弧内のすべてが **SpawnerSample** というクラスのスコープ内にあります。

関数と変数をグループ化すると、コードを効率的に組織化できます。

ステップを完了としてマーク

## 4. ドット演算子を使用して変数にアクセスする

Q&A (0)

クラスは、これらのチュートリアルですでに調べた他のレベルの組織よりも少し複雑です。クラスにはさまざまな関数や変数からなる階層を含めることができ、他の変数を含む変数を作成できます。

また、ピリオド（.）を使用して階層内のさまざまな変数にアクセスできます。これはドット演算子と呼ばれます。

変数が含まれている場所がわかっていて、変数にアクセスできる限り、ドット演算子を使用してスクリプトでその値を検索できます。

ステップを完了としてマーク

## 5. ドット演算子の例

Q&A (0)

これまで触れてきた SpawnerSample スクリプトのドット演算子の例をいくつか見てみましょう。

**1.** **transform** 変数内の **position** 変数を読み取るコードがあります。

```csharp
transform.position
```

「コンテナー変数」もクラスである場合、変数を他の変数内に作成できます。上記の例では、**position**は **transform** クラス内の Vector3 型変数です。

**2. Vector3**型の中にある **right**変数を読み取るコードがあります。

```csharp
Vector3.right
```

**3. Quaternion**型内の **Euler**関数を読み取るコードもあります。

```csharp
Quaternion.Euler(0, angle, 0)
```

このコードのすべてが何をするのかはわからないかと思いますが、ドット演算子の知識を使用して、より多くの情報を収集し、スクリプトで使用されるデータの理解を深めることができます。

#### ドット演算子の使用

ドット演算子を使用する場合、正しい構文（コードの構造）が非常に重要です。

- まず、ドットの左側に、アクセスする必要のある変数が含まれている変数を置く
- 中間にドット演算子を置く
- 右側に、ドット演算子の左側の変数内に含まれている変数を置く

ステップを完了としてマーク

## 6. 型としてのクラスを使う

Q&A (0)

最後に、クラスを型として使用する方法について見てみましょう。

ここまでに、新しい int 型変数を作成する時、次の命令で宣言と割り当てができることを見ました。

```csharp
int angle = 15;
```

int 型などの数値は「基本的な」型です。Vector3 などのより複雑なクラスの場合、少し異なる構文（構造）を使う必要があります。

myVector という Vector3 型変数を作成する場合は、次のような構文を使う必要があります。

```csharp
Vector3 myVector = new Vector3();
```

この構文を分解してみましょう。

**1. new** キーワード。コンパイラーにメモリ内に新しい変数のための空間を作成するように指示する

**2.** 変数の型

**3.** 関数で使うものと似た開き括弧と閉じ括弧の組：**()**

**4.** 命令を終了するセミコロン

この命令が実行されると、**myVector** を他の変数と同じように使用できるようになります。この新しい構文を使用する必要があるのは、（今のところ）新しい Vector3 型変数を作成する場合のみです。

SpawnerSample スクリプトには Vector3 型変数があり、値が割り当てられています。Vector3 型変数に関する知識を活用して、どんな値が割り当てられているか考えてみましょう。

ステップを完了としてマーク

## 7. チュートリアルのまとめ

Q&A (0)

このチュートリアルでは、以下の活動を行いました。

- クラスを使用してコードを整理するための基本事項を確認した
- 他の変数内の変数にアクセスするためのドット演算子の使用方法について触れた
- クラスを型として使用する方法を確認した

次のチュートリアルでは、独自のクラスを作成し、クラスを型として使用することが関数に似ている理由を解き明かします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
