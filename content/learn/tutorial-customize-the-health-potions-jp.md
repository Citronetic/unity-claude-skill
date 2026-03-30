[Image: image]

# ライフ回復ポーションをカスタマイズする

Tutorial

Beginner

+0XP

25 mins

1

(61)

Unity Technologies

[Image: ライフ回復ポーションをカスタマイズする]Summary

このチュートリアルでは、ここまで学んだことを応用して、以下のことを行います。

- カスタムのライフ回復エフェクトのスクリプトを作成する
- テンプレートとなるスクリプトの内容を確認する
- プレイヤーのライフポイント（HP）を上げるための新しい命令を書く
- HP の増分を public 変数に変更します

このチュートリアルを終えると、この Creator Kit のゲームに登場するライフ回復ポーションのカスタムエフェクトを作成する手順を一通りなぞることができます。

Languages available:

日本語English日本語한국어简体中文日本語

## 1. プレイヤー体験をカスタマイズする

Q&A (0)

Unity 用の C# スクリプトを作成するための基本的な概念について説明したので、実際にスクリプトを書いてゲームプレイを作ることができます。

このチュートリアルでは、ゲーム中に登場するポーションの効果を記述して、ポーションを使うとプレイヤーキャラクターのライフポイントを 10 増やすようにします。

[Image: image]ステップを完了としてマーク

## 2. 新しいスクリプトファイルを作成して開く

Q&A (0)

この Creator Kit には、アイテムの効果を作成するために使用できる簡単なテンプレートスクリプトが含まれています。

テンプレートから新しいスクリプトを作成して開くには、以下のようにします。

**1.** 画面上のメニューで、**Beginner Code > Create Item Effect**と移動します。

[Image: image]

**2.** スペースなしで名前を入力し（たとえば「AddHealthEffect」）、**Create**を選択します。

**3.** プロジェクトウィンドウで、 *Assets/Creator Kit - Beginner Code/Scripts/ItemEffects* に移動します。

[Image: image]

**4.** **AddHealthEffect.cs**スクリプトファイルをダブルクリックして、スクリプトエディターで開きます。

基本的なコードは以下のようになります。

```csharp
using System.Collections;
using System.Collections.Generic;
using CreatorKitCode;
using UnityEngine;

public class AddHealthEffect : UsableItem.UsageEffect
{
    public override bool Use(CharacterData user)
    {
        return false;
    }
}
```

ステップを完了としてマーク

## 3. テンプレートスクリプトの内容を確認する

Q&A (0)

これまでに学んだことをすべて使用して、この小さなスクリプトの要素を確認しましょう。

- 1 行目から 4 行目は、**using** で始まっています。前と同じく、これらは一旦考えないことにしましょう。
- 6 行目は、前のステップで指定したものと同じ名前が入ったクラス宣言です。ダイアログウィンドウでの入力によって、これが追加されました。

この新しいクラスは、**UsableItem.UsageEffect** と呼ばれる別のクラスから派生しています。これは、この Creator Kit のために作成されたクラスで、ゲーム内のアイテムに関連するすべてを制御します。これらの効果に必要な共通コードを提供し、選択した効果の個別の機能の開発に集中できるようにします。

#### Use 関数

8 行目は、**Use** という関数の宣言です。関数を分解してみましょう。

- **Use** は public bool 型の関数である。bool 変数型は、true または false の 2 つのブール値のいずれかを格納する。
- この関数の宣言には **override**という見慣れないキーワードがある。その名前が示すように、このキーワードは基本クラスの同じ関数（ここでは UsableItem.UsageEffect）を上書き（override）するために使用される。これにより、任意の Use 関数で機能する汎用的なコードを記述できる。

オブジェクトが使用されると、この関数はゲームによって呼び出され、その中のすべての命令を実行します。ゲームはオブジェクトが使用されているかどうかをチェックするため、ブール値を返します。使用されている場合は、持ち物リストから削除されます。

この機能を使って、プレイヤーのライフが満タンの時には falseを返して、ポーションが使われないようにすることもできます。

ステップを完了としてマーク

## 4. ライフ回復ポーションに効果を追加する

Q&A (0)

これで、スクリプトが Assets フォルダーにでき、コンパイルされてゲームコードの一部になります。これは、ゲーム内のライフ回復ポーションにこのスクリプトを割り当てることができるようになったことを意味します。

**1.** Unity エディターに戻る。

**2.** プロジェクトウィンドウで、*Assets/Creator Kit - Beginner Code/Prefabs /ItemDatabase* に移動する。**Potion プレハブ**を選択する。

**3.** インスペクターで、 **Add New Effect** ドロップダウンメニューを使用して、 **AddHealthEffect** を選択します。これは、下の Script フィールドに表示されます。

[Image: image]

**4.** **Description** フィールドに、効果の説明を追加する（たとえば、「10HP 回復」）。

このフィールドが表示されるのは、基本クラスに持ち物リストの UI の内容を格納する description 変数があるためです。先ほど作った効果クラスはこのクラスから派生しているため、Description フィールドが表示されます。

**5. Ctrl + S**（Windows）または **Cmd + S**（macOS）を押して、変更を保存する。

ステップを完了としてマーク

## 5. 効果を発生させる関数を書く

Q&A (0)

次に、**AddHealthEffect** スクリプトに戻って、実際に効果を発生させる関数を作成する必要があります。

関数が実行する必要があることと、使用可能なツールを確認しましょう。

#### Creator Kit の StatSystem

この Creator Kit には、**StatSystem**というキャラクターのステータスを制御するための特別なシステムがあります。あるゲームオブジェクトに **CharacterData**スクリプトがコンポーネントとしてアタッチされている場合、そのゲームオブジェクトは Creator Kit の **StatSystem**にアクセスできます。

キャラクターのライフの状態を変更するには、**ChangeHealth()** 関数を使います。この関数を使用すると、**StatSystem** がアタッチされたゲームオブジェクトの状態を変更できます。

#### 関数が実行するべき処理

ライフ回復ポーションを使用するときにプレイヤーキャラクターのライフの値を変更するには、効果を発生させる関数で以下のことを行う必要があります。

**1.** プレイヤーの **CharacterData スクリプト**にアクセスする。

**2.**ドット演算子を使用して、**Stats** クラスにアクセスする。

**3.** ドット演算子をもう 1 つ使用して、Stats 内にある **ChangeHealth() 関数**にアクセスする。

**4.** 関数の引数として int 値を渡し、回復するプレイヤーキャラクターのライフの量を決める。

このプロセスにおいては、効果を発生させる関数は「return false;」ではなく、「**return true;**」で終わります。アイテムは消費され、プレイヤーの持ち物リストから消えます。

#### 課題：関数を書く

ドット演算子を使用して効果を発生させる関数を記述してみましょう。記述が終わったら、次のステップに進んで解答を確認してください。独力で記述できないと思われる場合は、先に次のステップに進んで解答を確認しても構いません。

ステップを完了としてマーク

## 6. アイテムの効果を発生させる関数の記述を確認する

Q&A (0)

効果を発生させる関数は以下のようになります。

```csharp
public class AddHealthEffect : UsableItem.UsageEffect
{
    public override bool Use(CharacterData user)
    {
        user.Stats.ChangeHealth(10);
        return true;
    }
}
```

ステップを完了としてマーク

## 7. ライフ回復量を変数に変更する

Q&A (0)

次に、ライフ回復量を変数に変更してみます。以下の情報を参考にしてください。

- ライフ回復量の変数には整数を格納する必要があるため、変数の型は **int** とする。
- 変数を **public** にする。こうすると、Unity エディターでインスペクターのフィールドとして表示されるようになる。
- **Use**関数の宣言より前に変数を宣言する。

**ヒント：**なかなか完成できないようであれば、[変数の概要](https://learn.unity.com/tutorial/write-your-own-instruction?language=ja)を確認し、参考にしてください。

まずはこの置き換えをやってみてから、次のステップに進んで解答を確認してください。

ステップを完了としてマーク

## 8. スクリプトの変更内容を確認する

Q&A (0)

修正されたスクリプトは以下のようになります。

```csharp
public class AddHealthEffect : UsableItem.UsageEffect
{
    public int HealthAmount;

    public override bool Use(CharacterData user)
    {
        user.Stats.ChangeHealth(HealthAmount);
        return true;
    }
}
```

**Ctrl + S**（Windows）または **Cmd + S**（macOS）を押して、変更を保存しましょう。

これで、Unity エディターからこの変数を編集できます。

**1.** インスペクターで、**Description** フィールドの下に公開変数の **Health Amount** フィールドが表示されている。

[Image: image]

**2.** 値を変更し、**Ctrl + S**（Windows）または **Cmd + S**（macOS）を押して、変更を保存する。

**3.** 再生ボタンを押して再生モードに入り、ゲームへの変更をテストする。

これで終わりです。完成しました！

ステップを完了としてマーク

## 9. チュートリアルのまとめ

Q&A (0)

このチュートリアルでは、このプロジェクトでこれまで学んだ内容を応用して、以下の活動を行いました。

- カスタムのライフ回復効果を発生させるスクリプトを作成する
- プレイヤーのライフポイント（HP）を上げるための新しい命令を書く
- HP の増分の値を Unity エディターで変更できる変数にする

おめでとうございます。これで、Unity ではじめての C# コードを作成し、「Creator Kit：コーディング入門」の主要部分を修了したことになります。

[Image: image]

#### もう少し Rancho Rodadora にいませんか？

この学習プロジェクトの主要なチュートリアルは完了しましたが、まだまだ学ぶことがたくさんあります。

最後のチュートリアルは、この Creator Kit に合わせて作成したスクリプトのテンプレートを使って、ゲームをカスタマイズするためのリファレンスガイドです。これを使って、さまざまなアイテムやエフェクトを作成できます。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 日本語, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### さらなる学びを始める準備はいいですか？

「Creator Kit：コーディング入門」で学んだ内容は、奥深い Unity と C# スクリプティングの世界に踏み出す第一歩にすぎません。

このプロジェクトの続きに学ぶ内容としては、以下の 2 つをおすすめいたします。

- 「[John Lemon's Haunted Jaunt：3D 入門](https://learn.unity.com/project/john-lemon-s-haunted-jaunt-3d-beginner?language=ja)」で 3D ステルスゲームを作成する
- 「[Ruby's Adventure：2D 入門](https://learn.unity.com/project/ruby-s-2d-rpg?language=ja)」で 2D RPG をゼロから構築する

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
