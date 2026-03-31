[Image: image]

# 関数の概要

Tutorial

Beginner

+0XP

30 mins

2

(96)

Unity Technologies

[Image: 関数の概要]Summary

このチュートリアルでは、次のことを行います。

- ゲーム開始時にもう 1 つ追加でライフ回復ポーションを作成するコードを書く
- 関数と、コードにおける関数の役割について学ぶ
- SpawnerSample スクリプトにすでに含まれている関数を見つける

このチュートリアルを終了すると、独自の関数を作成するための知識を習得できます。

Languages available:

日本語English日本語한국어简体中文日本語

## 1.  課題：ゲーム開始時に別のポーションを作成する

Q&A (0)

前のチュートリアルでは、SpawnerSample スクリプトを修正して、ヘラジカのためのライフ回復ポーションを 3 つ配置する間隔を簡単に調整できるようにしました。

では次の課題です。手元のコードを利用して、他の 3 つよりも遠い位置に 4 つ目のポーションを配置する方法を考えてみてください。

課題を進める際は、次の手順に従って行うとよいでしょう。

**1.** Unity エディターでプロジェクトウィンドウに移動し、ファイルパス *Assets/Creator Kit - Beginner Code/Scripts/Tutorial* で **SpawnerSample** スクリプトを選択します。

**2.** インスペクターで、Save State ボタンをクリックします。これにより、意図していない変更を破棄したい時のために、現在のスクリプトのバージョンがそのままの形で保存されます。

[Image: image]

必要な時にインスペクターに戻り、**Restore** ボタンを選択すれば、いつでもスクリプトを 1 つ前のバージョンに戻すことができます。

[Image: image]

**3.** ゲーム開始時に **4 つのポーション**が配置されるようにスクリプトを変更します。何かを壊してしまう心配はありません。ファイルをコピーしたので、いつでもスクリプトの以前の状態を復元できます。

**ヒント：**新しいポーションの瓶の位置について考えてみましょう。ポーションの位置関係が揃った形になるように、命令を書き換えることができるでしょうか。

**4.** **Ctrl + S**（Windows）または **Cmd + S**（macOS）で変更を保存してから、Unity エディターに戻り、再生モードに入って変更をテストします。

**5.** 変更の確認が終了したら、もう一度再生ボタンをクリックして再生モードを終了します。

次のステップに進んで、解法を確認してみましょう。

ステップを完了としてマーク

## 2. 課題の解法を確認する

Q&A (0)

ゲーム開始時に新しくポーションを配置するには、次のようにします。

**1.** ゲームの開始時に新しいポーションを作成するようにコンピューターに指示する 4 行の命令をコピーして貼り付けます（合計で 4 セットのコードを作成します）。

```csharp
angle = 95;
direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
spawnPosition = transform.position + direction * radius;
Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
```

**2.** 新しく置くポーションの位置を変更するには、コードの 4 番目のセットの angle の値を調整します。

```csharp
// ゲーム開始時に作成される 4 番目のポーション
angle = 135;
direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
spawnPosition = transform.position + direction * radius;
Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
```

上のコードの説明の前に二重スラッシュ（**//**）が付いていることに気付くでしょう。これはコメントです。

コメントは、スクリプトを書いている人から、他にスクリプトを読む人へのメッセージです。コンパイラーは、前に二重スラッシュが付いているものをすべて無視します。コメントを使って、他の人へのコードの説明を残したり、自分へのメモやリマインダーを書いたりすることができます。

**3.**ゲームをテストすると、次のようになります（4 番目のコードのセットで指定した角度によって結果は異なります）。

[Image: image]

ここでコードを書くために使った方法はそんなに効率的な方法ではありません。たとえば、ゲームの開始時に 10 個のポーションを作成したい場合、繰り返しの多い長いスクリプトになってしまいます。もっと良い方法はないでしょうか。

ステップを完了としてマーク

## 3. 関数の概要

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

幸いなことに、同じコードを何度も書くのを避けるために役立つものがあります。関数です。

関数は命令のセットです。コンパイラーが関数に到達すると、残りのスクリプトを続行する前に、そのセット内のすべての命令を完了する（実行する）ようにコンピューターに指示します。

以下の図は、コンピューターは、スクリプト内に順に並んだ命令を完了する前に、関数（2）を実行するようにしたところを表しています。

[Image: image]

サンプルとして、以下の関数を確認することから始めましょう。

```csharp
void AddingNumbers(float num1, float num2)
{
  float resultingNumber;
  resultingNumber = num1 + num2;
}
```

ステップを完了としてマーク

## 4. 関数の宣言を確認する

Q&A (0)

この関数が何をするかを理解するために、まずは最初の行を詳細に見てみましょう。

```csharp
void AddingNumbers(float num1, float num2)
```

これは関数の宣言です。コンピューターに関数を作成するように指示します。これは変数の宣言に似ています。関数の宣言には常に次のものが含まれます。

**1.** 関数の**型**。**void**は特殊なタイプであり、どこにも値が保存されないので、「型なし」または「空」を意味します。int 関数を呼び出すと、整数値が返されます。void 型関数は値を返しません。

**2.** 関数の**名前**。コンピューターに関数内の命令を実行させるたびに使用します。この関数の名前は **AddingNumbers** です。

**3.** 括弧内の変数の宣言。これらは**引数**と呼ばれます。必要な数の引数をコンマで区切って含めることができます。関数が引数を取らない場合でも、括弧は必ずつける必要があります。

いま括弧内にある変数は float 型変数です。float 型変数は、int 型変数（整数）とは対照的に小数部を伴う数です。小数点の両側に数字があり、値の精度を上げるために使用できます。

この角帽のアイコンにカーソルを合わせると、float 型変数の別の例が表示されます。

ステップを完了としてマーク

## 5. 関数本体を確認する

Q&A (0)

関数の宣言の後は、次のようになります。

1. 開き波括弧
2. 命令
3. 閉じ波括弧

これらの2つの波括弧の間はすべて、関数本体と呼ばれます。

```csharp
{
  float resultingNumber;
  resultingNumber = num1 + num2;
}
```

関数本体には、関数の名前の下にまとめられた命令が書かれています。コンピューターは、別の命令で関数の名前を検出すると、これらの命令を実行します。

このサンプル関数に含まれている命令を分解する必要はありません。グループ内の各命令はセミコロンで終わることを覚えておいてください。

ステップを完了としてマーク

## 6. スクリプトで関数を使用する

Q&A (0)

関数がどのように機能するかを調べました。次は自分で書いた命令で使ってみましょう。これは関数呼び出しと呼ばれます。

次の関数呼び出しの例を見てみましょう。

```csharp
AddingNumbers(5.5f, 18.9f);
```

この関数呼び出しは以下の要素で構成されています。

1. 関数の名前
2. 2 つの値を含む 1 組の括弧
3. 命令の終わりを示すセミコロン

関数呼び出しは、スクリプトを順番に処理し続ける前に、関数に含まれるすべての命令を実行するようにコンピューターに指示します。

ステップを完了としてマーク

## 7. 関数が呼び出されたときの動作を調整する

Q&A (0)

このチュートリアルで確認したスクリプトの例では、2 つの変数が宣言されています。

```csharp
void AddingNumbers(float num1, float num2)
```

この変数名は、他の変数と同じように関数本体で使用できます。関数を呼び出すたびに値を割り当てることもできます。これは値の受け渡しと呼ばれます。

次の例を考えてみましょう。

- **AddingNumbers(5.5f, 18.9f);**と書いて関数を呼び出すと、コンピューターは関数本体の中で変数 num1 を 5.5 に、変数 num2 を 18.9 に置き換えます。
- 代わりに **AddingNumbers(10.0f, 10.0f);** と呼び出すと、コンピューターは関数本体のすべての命令で使われる変数の名前を 10.0 に置き換えます。

この仕組みにより、関数内に汎用的な命令を記述しておき、スクリプトで呼び出されるたびに実際に取らせる動作を調整することができます。

ステップを完了としてマーク

## 8. スクリプトにすでに存在する関数を見つける

Q&A (0)

関数とは何かがわかったことで、SpawnerSample スクリプトにすでに関数があったことに気付かれたかもしれません。これまでに確認および調整したすべての命令は、**Start** という関数の一部です。

Unity には、ゲームの特定の瞬間に呼び出される特別な名前の関数があります。Start はこれらの特別な関数の 1 つです。その名前が示すように、Start 関数はシーンの開始時に呼び出されます。そのため、再生ボタンを押してゲームを開始するとすぐに 4 つのライフ回復ポーションが作成されるのです。

Start 関数の宣言を確認してみましょう。

```csharp
void Start()
```

この関数には引数はありませんが、括弧が必要です。⁠括弧がないと、コンパイラーは **void Start**を Start という名前の変数を宣言していると見なします。

ステップを完了としてマーク

## 9. チュートリアルのまとめ

Q&A (0)

このチュートリアルでは、次のことができます。

- SpawnerSample スクリプトの状態を Unity エディターに保存した
- ゲーム開始時にもう 1 つポーションを作成するようにスクリプトを調整した
- 関数と、それらを使用してコードをより効率的にする方法について学習した
- 関数を宣言して呼び出す方法を確認した
- SpawnerSample スクリプトにすでに含まれている関数を特定した

たくさんのことを学びましたね。ここまでに学んだ基本的な事項を元に、次のチュートリアルではポーションを作成する独自の関数を作成してみましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
