[Image: image]

# セッション間でのデータ永続性の実装

Tutorial

foundational

+10XP

20 mins

0

Unity Technologies

[Image: セッション間でのデータ永続性の実装]Summary

本チュートリアルでは、ユーザーが選択した色の情報を保存・読み込み、アプリケーションのセッション間で持続させるためのコードを記述します。このチュートリアルが終わるころには、次のことができるようになります：

- アプリの初期化シーケンスで適切なスタートアップメソッドを呼び出す
- リスト (list) やディクショナリ (dictionary) などのデータ構造を適用してデータを保存、整理する
- アプリのシャットダウンシーケンスでユーザーデータを保存する

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

現在、Unity エディターで作業中のアプリケーションをテストしているとき、倉庫のフォークリフトに選択した色は、次にアプリケーションをテストするときには保存されないようになっています。このアプリのビルドを作成すると、ユーザーが実行するたびにスタンドアロンで体験することができます。

ユーザーが最後に選択した色を保存し、アプリケーションを起動したときに自動的に選択されるようになると便利ですよね。このチュートリアルでは、これまでの作業を基に、シーン間のデータ永続性を実装し、**セッション間**でそれを実行します。

あなたのプロジェクトで、それがどのように見えるかを見てみましょう：

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

**ヒント：**このチュートリアルと前回のチュートリアルの間に休憩があった場合、続ける前に[データ永続性の概要](https://learn.unity.com/tutorial/implement-data-persistence-between-scenes#60b740afedbc2a5522dbb288)を確認するとよいでしょう。

ステップを完了としてマーク

## 2. 概要の評価

Q&A (0)

このチュートリアルでは、ユーザーが選択した色をファイルに書き込みます。次に、アプリケーションの起動時に、そのファイルが存在するかどうかをチェックするように MainManager を設定します。ファイルが存在する場合、MainManager はそのファイルに保存されている色を読み込んで、カラーピッカーにその色を設定します。

作業を始める前に、数分かけてプロジェクトの概要を再確認しましょう。この作業を自分一人で行うことを想像して、以下の質問に対する答えを書き出してください：

- 何を、どこで、どのように実装するのか？私たちのアプローチと比較するために、まずはあなたの考えを書き出してみてください。
- 以前、Create with Code や他の学習体験で、同じような機能に出会ったことがありますか？コードにアクセスできなくても、身近にあるセッション間のデータ永続性の例について考えてみてください。
- Unity Learn 以外に、どのようなリソースがあれば、これを行うことができますか？Unity のエコシステム内とそれ以外のオプションについて考えてみましょう。

作業を始める前に、すでに知っていることを振り返るために数分かけることは、特にその作業が難しいと感じる場合には非常に有効な練習となります。[**Unity Essentials**](https://learn.unity.com/pathway/unity-essentials) を終了した方は、すでに[実績のあるクリエイターが Unity を学ぶ際のマインドセット](https://learn.unity.com/tutorial/how-our-established-creators-learned-unity#5fa44852edbc2a001f616c92)を探究されたことでしょう。この機会に、そのアプローチの記憶を呼び覚ましてみてはいかがでしょうか。

自由に使えるツールを確認し、これまでの学習を振り返ることは、要求に応えるためのさまざまなアプローチを考える上で非常に有益な機会となります。このアプローチは、このパスウェイの先にある学習の旅を続ける際にも活用できます。たったひとつの方法しかないなんてことは、めったにないのですから。

ステップを完了としてマーク

## 3. セッション間でデータを永続させるには？

Q&A (0)

セッション間でデータを持続させるためには、何らかの方法でデータを保存する必要があります。このようなケースでは、ユーザーが選択した色の情報を保存し、再度アプリケーションを読み込んだときに読み込めるような形式に変換する必要があります。

複雑なデータを保存可能な形式に変換するプロセスを**シリアライズ**  (**serialization**) と呼びます。再びデータにアクセスする準備ができたら、データを元に戻す処理をデシリアライズ (**deserialization**) と呼びます。

[Image: image]

データを保存するための形式は、データの内容とそれを使って何をしたいかに応じて、さまざまなものがあります。今回は、**JSON** 形式を使用します。

ステップを完了としてマーク

## 4. JSON とは？

Q&A (0)

JSON とは、データを保存し、プラットフォーム間で交換するために使用されるテキスト形式です。最初に開発されたのはウェブ用で、正式名称は**J**ava**S**cript **O**bject **N**otation です。JavaScript をベースにしていますが、言語に依存しないので、C# のコードを書いていても、他のプログラミング言語を使用していても使用することができます。

ThJSON 形式では、***Key*-*Value ペア***の形式でデータを保存します。key (キー) は文字列で、Value (値) には以下が含まれます：

- number
- string
- Boolean (true/false)
- 値の配列
- 別の JSON オブジェクト

##### この形式の仕組みについて

以下の JSON 文字列は、人物に関する基本情報を格納したオブジェクトをエンコードして います：

```csharp
{
  "name": "John",
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York"
  }
  "pet": [“dog”, “cat”]
}
```

サンプル例を分解してみましょう：

- 各**オブジェクト**は中括弧 (**{ }** )で囲まれています。
- 各**エントリー**は、カンマで区切られた *Key-Value* ペアの形式です。
- エントリー "pet" は文字列の配列です。配列の値は角括弧 (**[ ]**) で囲まれた場所に表示されます。
- "address" というエントリーに関連する値も中括弧で囲まれていますが、これは別の JSON オブジェクトであるためです。

ステップを完了としてマーク

## 5. なぜ JSON が適しているのか？

Q&A (0)

JSON は非常に異なるシステム間でデータを交換するために開発されました。そのため、アプリケーションでデータを保存するのに適しています。Unity には**JsonUtility** というヘルパークラスがあり、シリアライズ可能なクラスを取得して JSON 表現に変換することができます。データのシリアライズとデシリアライズの両方でどのように動作するか見てみましょう。

**データのシリアル化**

次のような PlayerData クラスについて考えてみましょう：

```csharp
[Serializable]
public class PlayerData
{
    public int level;
    public Vector3 position;
    public string playerName;
}
```

このクラスを以下のような値で JsonUtility に渡すことを想像してください：

```csharp
PlayerData myData = new PlayerData();
myData.level = 1;
myData.position = new Vector3(3.0f, 4.4f, 2.3f);
myData.playerName = "John";
```

**文字列 json = JsonUtility.ToJson(myData);** を呼び出すと、次のような JSON 文字列が生成されます：

```csharp
{
    “level”: 1,
    “position”: {
        “x” : 3.0,
        “y” : 4.4,
        “z” : 2.3 },
    “playerName”: “John”
}
```

なお、**position** は vector3 なので、**x, y, z** の 3 つのキーを持つ新しい JSON オブジェクトとしてエンコードされます。これは、Vector3 クラス（極めて単純化されている）がそうだからです：

```csharp
[Serializable]
public class Vector3
{
    public float x;
    public float y;
    public float z;
}
```

**データのデシリアライズ**

JsonUtility には、今見てきた処理の逆を行うメソッド、FromJson<T> もあります。

このメソッドは、いくつかの JSON データを含む文字列を受け取り、そのフィールドが埋め尽くされたオブジェクトのインスタンスを生成します。これはテンプレート引数を使用します。PlayerData の JSON 文字列を確認したときに気づいたかもしれませんが、そのデータの元の型は JSON ファイルに保存されません。

このサンプル例を拡張するために、**PlayerData myData = JsonUtility.FromJson<PlayerData>(json);**を呼び出すと、JSON 文字列内の値で **myData** が満たされます。

**JsonUtility の制限事項**

Unity の JsonUtility クラスは、パフォーマンスとシンプルさを重視して設計されていますが、いくつかの制限があります。JsonUtility はプリミティブ型 (primitive type)、配列 (array)、リスト (list)、ディクショナリ (dictionary) には使えません。

予想通り、JsonUtility は **Serializable 型**、MonoBehaviour、その他 [**Serializable**] 属性を付けられるクラス/構造体に対してのみ動作します。複数のデータを含むクラスを保存しようとしたときに、そのうちの 1 つが保存されない場合は、おそらくシリアル化できないことが原因です。例えば、真ん中にディクショナリ (dictionary) があるクラスを JSON に変換した場合、シリアライズ可能ではないので dictionary は保存されません。もし、クラス内で何かが正しく保存されないようであれば、それがシリアライズ可能な型であることを確認してください。

詳細は、Unity の  [JSON Serialization に関するドキュメント](https://docs.unity3d.com/Manual/JSONSerialization.html)を参照してください。

**データ保存に関するトラブルシューティング**

予想通り、JsonUtility は **Serializable 型**、MonoBehaviour、その他 [**Serializable**] 属性を付けられるクラス/構造体に対してのみ動作します。

複数のデータを含むクラスを保存しようとしたときに、そのうちの 1 つが保存されない場合、それはおそらくシリアライズ可能でないためです。例えば、たくさんのデータや中間に dictionary を持つクラスを JSON へ変換した場合を想像してください。そのディクショナリ (dictionary) はシリアル化できないので、保存されません。もしクラス内で保存がうまくいかないようであれば、それがシリアライズ可能な型であるかどうか確認してみてください。

ステップを完了としてマーク

## 6. SaveData クラスの追加

Q&A (0)

ユーザーが最後に選んだ色を保存したり読み込んだりするためには、MainManager クラスに次の 3 つが必要です：

1. 色を保存する**SaveData**クラス
2. そのクラスを JSON 形式に変換し、ファイルに書き出す**Save メソッド**
3. JSON ファイルから SaveData クラスにデータを変換して戻す **Load メソッド**

まずは SaveData クラスから見ていきましょう：

**1.**  IDE で MainManager.cs を開きます。

**2.**MainManager クラスの最後（閉じ中括弧の範囲内）に、次のコードを追加します：

```csharp
[System.Serializable]
class SaveData
{
    public Color TeamColor;
}
```

新しいコードの見直し

SaveData は、ユーザーが選択した色のみを格納するシンプルなクラスです。その上に [System.Serializable] 属性が追加されていることにご注意ください。この行は JsonUtility に必要なもので、先ほど学習したように、Serializable としてタグ付けされている場合にのみ JSON に変換します。

なぜ、クラスを作成し、MainManager のインスタンスを直接 JsonUtility に渡さないのですか？さて、ほとんどの場合、クラスの中にすべてを保存することはないでしょう。保存したい特定のデータのみを含む小さなクラスを使用することは、良い習慣であり、より効率的です。

ステップを完了としてマーク

## 7. SaveColor メソッドの追加

Q&A (0)

次に、SaveColor メソッドを追加します：

**1.**SaveData クラスの後に一行空けておきます。

**2.** 以下のコードを追加します：

```csharp
public void SaveColor()
{
    SaveData data = new SaveData();
    data.TeamColor = TeamColor;

    string json = JsonUtility.ToJson(data);

    File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
}
```

**3.**最後の行は、スクリプトに新しい名前空間を追加する必要があるため、IDE でエラーとして強調表示されます。スクリプトの先頭で、以下を追加します：

```csharp
using System.IO;
```

新しいコードの見直し

この新しいメソッドを順番に分解してみましょう。まず、保存データのインスタンスを新規に作成し、その TeamColor クラスのメンバに MainManager に保存されている TeamColor 変数を代入します：

```csharp
SaveData data = new SaveData();
data.TeamColor = TeamColor;
```

次に、そのインスタンスを**JsonUtility.ToJson** で JSON に変換しています：

```csharp
string json = JsonUtility.ToJson(data);
```

最後に、特殊なメソッド **File.WriteAllText** を使って文字列をファイルに書き出しましたね：

```csharp
File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
```

最初のパラメーターはファイルへのパスです。Unity の **Application.persistentDataPath** というメソッドを使って、アプリケーションの再インストールや更新の際に生き残るデータを保存するためのフォルダーを作成し、そこに savefile.json というファイル名を追加しています。

**注：**Unity Scripting API には、[プラットフォームごとの実際のパスが記載](https://docs.unity3d.com/ScriptReference/Application-persistentDataPath.html)されています。

2 つ目のパラメーターは、そのファイルに書き込むテキストで、この場合は JSON です。

ステップを完了としてマーク

## 8. LoadColor メソッドの追加

Q&A (0)

では、LoadColor メソッドを追加してみましょう：

**1.**SaveColor メソッドの後に 1 行空けておきます。

**2.** 以下のコードを追加します：

```csharp
public void LoadColor()
{
    string path = Application.persistentDataPath + "/savefile.json";
    if (File.Exists(path))
    {
        string json = File.ReadAllText(path);
        SaveData data = JsonUtility.FromJson<SaveData>(json);

        TeamColor = data.TeamColor;
    }
}
```

新しいコードの見直し

このメソッドは、SaveColor メソッドの逆バージョンです：

```csharp
string path = Application.persistentDataPath + "/savefile.json";
```

**File.Excists** というメソッドを使って、.json ファイルが存在するかどうかをチェックします。存在しない場合は、何も保存されていないので、これ以上の操作は必要ありません。ファイルが存在する場合、このメソッドは **File.ReadAllText** を使用してその内容を読み取ります：

```csharp
if (File.Exists(path))
{
    string json = File.ReadAllText(path);
```

そして、出来上がったテキストを**JsonUtility.FromJson** に渡して SaveData のインスタンスに変換し直します：

```csharp
SaveData data = JsonUtility.FromJson<SaveData>(json);
```

最後に TeamColor をその SaveData に保存されている色に設定します：

```csharp
TeamColor = data.TeamColor;
```

新しいコードのダブルチェック

続行する前に、追加したコードが MainManager クラスのスコープ内であることを再確認してください：

```csharp
[System.Serializable]
class SaveData
{
    public Color TeamColor;
}

public void SaveColor()
{
    SaveData data = new SaveData();
    data.TeamColor = TeamColor;

    string json = JsonUtility.ToJson(data);

    File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
}

public void LoadColor()
{
    string path = Application.persistentDataPath + "/savefile.json";
    if (File.Exists(path))
    {
        string json = File.ReadAllText(path);
        SaveData data = JsonUtility.FromJson<SaveData>(json);

        TeamColor = data.TeamColor;
    }
}
```

ステップを完了としてマーク

## 9. アプリケーションでの色の読み込みと保存

Q&A (0)

もう少しで完成ですが、まずアプリケーションの起動時に保存した色（存在する場合）の情報をロードし、終了時に色を保存する必要があります。では、それを実装してみましょう：

**1.**  MainManager.cs（まだ開いているはず）で、**Awake** メソッドを見つけます。

**2.**  **Awake の最後**に **LoadColor** メソッドを呼び出します：

```csharp
LoadColor();
```

**3.**  変更を保存し、IDE で MenuUIHandler.cs を開いてください。

**4.**  **Start**メソッドの最後に、以下のコードを追加します：

```csharp
ColorPicker.SelectColor(MainManager.Instance.TeamColor);
```

この行は、メニュー画面起動時に、MainManager（ある場合）に保存されている色をあらかじめ選択するものです。

**5.  Exit**メソッドの冒頭に、以下のコードを追加します：

```csharp
MainManager.Instance.SaveColor();
```

この行は、アプリケーションが終了するときに、ユーザーが最後に選択した色を保存します。

ステップを完了としてマーク

## 10. テスト機能の追加

Q&A (0)

最後に、MenuUIHandler に簡単なテスト機能を追加して、アプリケーションから即座に色の保存と情報の読み込みができるようにしましょう：

**1.**  MenuUIHandler.cs に以下の 2 つのメソッドを追加します：

```csharp
public void SaveColorClicked()
{
    MainManager.Instance.SaveColor();
}

public void LoadColorClicked()
{
    MainManager.Instance.LoadColor();
    ColorPicker.SelectColor(MainManager.Instance.TeamColor);
}
```

**2.** 変更内容を保存します。

**3.** これらのメソッドを Load Color および Save Color ボタンにリンクします。このプロセスを再確認する必要がある場合は、[Start ボタンをどのように構成したか](https://learn.unity.com/tutorial/create-a-scene-flow#60b73e9cedbc2a54fb1cc8d4)についてのページを見直しましょう。

#### エディターでのテスト

標準的な終了時の保存と起動時のロードを含め、アプリケーションへの変更を徹底的にテストしてください。

ステップを完了としてマーク

## 11. 次のステップ

Q&A (0)

このチュートリアルでは、アプリケーションのセッション間のデータ永続性を実装し、ユーザーがアプリケーションをリロードしたときに最後に選択した色をあらかじめ選択するようにしました。素晴らしいことです！

次に、学んだことを応用して、Unity の新規プロジェクトで基本的なゲームの概要を満たした上で、作品を提出する準備をします。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
