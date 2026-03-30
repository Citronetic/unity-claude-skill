[Image: image]

# シーンフローの作成

Tutorial

foundational

+10XP

20 mins

0

Unity Technologies

[Image: シーンフローの作成]Summary

このチュートリアルでは、 Menu シーンと Main シーンの間のシーンのフローと、アプリケーションの終了のフローを、アプリケーション内で設定します。

このチュートリアルの終了時には、以下のことができるようになります：

- アプリの初期化シーケンスで適切なスタートアップメソッドを呼び出す
- イベントが発生したときに次のシーンをロードする

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

前のチュートリアルで学んだように、このミッションで取り組むアプリケーションには、ユーザーがナビゲートする必要のある、さまざまなシーンが多数存在します。

現在、アプリケーションはメイン (Main) シーンで直接起動します。実際のアプリケーションでは、アプリケーションの開始時に、ユーザーが設定を調整したり、終了したりできるメニューがあるはずです。このチュートリアルでは、そのメニューを作成します。

ステップを完了としてマーク

## 2. 必要なシーンフローの確認

Q&A (0)

メインシーンに基本的な UI メニューの Canvas を用意しましたが、いきなりはうまくいきません。

記憶を呼び覚ます必要がある場合は、[プロジェクト概要](https://connect-prd-cdn.unity.com/20210602/7105725f-6cb4-4171-a399-ba1b485a7e96/Project_Brief.pdf?_gl=1*wjdq4t*_ga*NDI3MDM1NDEuMTU5MjI0OTM3NA)に記載されているシーンの流れの全容を見直してみてください。

[Image: image]

まず、ユーザーができるようにアプリケーションを設定しましょう：

- メインシーンの起動
- アプリケーションの終了

ステップを完了としてマーク

## 3. UI メニューの見直し

Q&A (0)

このプロジェクトで既に作成されている UI Canvas を確認してみましょう：

**1.**  まだの方は、Unity Hub からプロジェクトを開いてください。

**2.**  Project ウィンドウで、**Assets > Scenes** と進み、Menu シーンを開きます。

**3.**  Scene ビューのコントロールバーで、Scene ビューを **2D モード**に設定します。

[Image: image]

**4.** Hierarchy で Canvas を展開し、Container ゲームオブジェクトを展開すると、さらに 2 つのゲームオブジェクト（StartContainer と Exit）が含まれています。

[Image: image]

**5.** StartContainer ゲームオブジェクトを展開します。

[Image: image]

StartContainer には、以下のような 4 つの button ゲームオブジェクトが Canvas の StartContainer セクションにグループ化されています：

- **Start**ボタン (StartButton、画面遷移)
- 謎の白い長方形 (ColorPicker、カラーピッカー)
- **Save Color** ボタン (保存)
- **Load Color**ボタン (ロード)

メニューはまだ機能していませんが、色選択ボタンの動作を確認することができますので、さっそく試してみましょう。

**6.**  ツールバーで **Play** を選択し、Play モードにします。白い長方形の中に、4 つの色選択ボタンが用意されていることにお気づきでしょう。

[Image: image]

**7.**  Play モードを終了します。

色選択ボタンは、Canvas ゲームオブジェクトの MenuUIHandler.cs スクリプトで制御されます。これは、このプロジェクトのために書かれたカスタムスクリプトです。今は、カラーボタンの初期化しかしていません。メインシーンを開始するメソッドと、アプリケーションを終了するメソッドを追加してみましょう。

ステップを完了としてマーク

## 4. メインシーンを読み込むメソッドの作成

Q&A (0)

まず、メニューからメインシーンを読み込むメソッドを書いてみましょう：

**1.**  Project ウィンドウで、**Assets > Scripts** と進みます。MenuUIHandler.cs をダブルクリックし、デフォルトの IDE でスクリプトを開いてください。以下のようなスクリプトが用意されているのがわかると思います：

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Sets the script to be executed later than all default scripts
// This is helpful for UI, since other things may need to be initialized before setting the UI
[DefaultExecutionOrder(1000)]

public class MenuUIHandler : MonoBehaviour
{
    public ColorPicker ColorPicker;

    public void NewColorSelected(Color color)
    {
        // add code here to handle when a color is selected
    }

    private void Start()
    {
        ColorPicker.Init();
        // this will call the NewColorSelected function when the color picker has a color button clicked
        ColorPicker.onColorChanged += NewColorSelected;
    }
}
```

**2.**  **Start**メソッドの下に、**StartNew**という下記の新しいメソッドを追加します：

```csharp
public void StartNew()
{
    SceneManager.LoadScene(1);
}
```

**SceneManager** は、シーンのロードとアンロードに関連するすべてを処理するクラスです。

**3.**  ファイルを保存し、Unity エディターに戻ります。

コンソールを確認する時間を取ってください。次のようなエラーメッセージに気づくかもしれません：「The name 'SceneManager' does not exist in the current context.」。これは、**SceneManager** が、このスクリプトファイルに含まれるものとは別の名前空間（つまり、別のコードグループ）にまとめられているために発生します。

このエラーが表示されない場合、IDE が「SceneManager」と入力した際に、自動的に追加した可能性があります。次のステップに従って、名前空間が追加されたことを再確認してください。

**4.**  スクリプトエディターに戻ります。スクリプトに含まれる名前空間は、ファイルの先頭の **using**で始まる行で確認できます。

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

このスクリプトにはすでに複数の名前空間が存在します。例えば、**using UnityEngine;** という行は、UnityEngine の名前空間にあるもの（つまり、**Vector3**や**Transform** など、これまで使ってきたすべてのクラス）が、このスクリプトファイルで使えるという意味です。

**5.** スクリプト内のリストに以下の名前空間を追加し、変更を保存します：

```csharp
using UnityEngine.SceneManagement;
```

これで、SceneManagement 名前空間がこのスクリプトに含まれ、シーンで使用できるようになりました。

ステップを完了としてマーク

## 5. メニューシーンインデックスの設定

Q&A (0)

次に、 メニューのシーンインデックスを設定して、**Start** ボタンを設定する準備をしましょう：

**1.** エディターに戻る前に、シーンをロードするための新しいメソッドに記述した命令（遷移させるには、SceneManager.LoadScene(1);）をもう一度確認してください。

LoadScene パラメーターは数字ですが、これは何を指しているのでしょうか？ロードしたいシーンの**インデックス**です。シーンのインデックスは、Build Settings ウィンドウで定義することができます。

**2.**Unity エディターのトップメニューから、**File > Build Settings…** と進みます。ウィンドウの一番上のセクションは、**Scenes In Build** で、シーンのインデックスが設定されています。

**3.** Project ウィンドウで、**Scenes** フォルダーに移動し、Menu シーンを **Scenes in Build** セクションにドラッグアンドドロップしてください。**Menu**は、リスト内で**Main**よりも上にある必要があるので、インデックス値 (**0**) が最も小さいことになります。必要であれば、リスト内の項目を選択し、ドラッグして順序を変更します。

[Image: image]ステップを完了としてマーク

## 6. Start ボタンの設定

Q&A (0)

これで **Start** ボタンを設定する準備ができました：

**1.** Hierarchy で、StartButton ゲームオブジェクト（StartContainer の子オブジェクト）を選択します。

**2.** Inspector で、Button コンポーネントを見つけます。

**3.**  **On Click ()** プロパティを探します。ここでは、ユーザーがボタンを選択したときに Unity が起動するイベントを設定できます。Add (+) を選択して、新しいイベント配列を追加します。**On Click ()**プロパティを探します。ここでは、ユーザーがボタンを選択したときに Unity が起動するイベントを設定することができます。**Add**(**+**) を選択すると、新規の Event 配列が追加されます。

**4.** **Runtime Only** ドロップダウンの下にある On Click イベントのターゲットフィールドに、Canvas ゲームオブジェクトをドラッグアンドドロップして割り当てます。

[Image: image]

Canvas ゲームオブジェクトには、MenuUIHandler コンポーネントがアタッチされています。

**5. Function** ドロップダウンメニューで、**MenuUIHandler > StartNew** と選択します。

[Image: image]

**6.**変更内容を保存し、ツールバーから**Play** を選択して Play モードにします。

**7.** **Start**ボタンを選択すると、メインシーンが起動するはずです！そのシーンからは、今のところ戻れません。終わったら、Play モードを終了するのを忘れないようにしましょう。

ステップを完了としてマーク

## 7. アプリケーションを終了させるメソッドを書く

Q&A (0)

では、Menu シーンに**Exit**ボタンを設定しましょう：

**1.**  IDE で MenuUIHandler.cs に戻ります。

**2.  StartNew**メソッドの下に、**Exit**という名前の次の新しいメソッドを追加します：

```csharp
public void Exit()
{
    Application.Quit();
}
```

この命令（**Application.Quit()**）は、アプリケーションを終了するためのメソッドを呼び出します。

**3.**保存して Unity エディターに戻り、Play モードで **Exit**ボタンをテストしてください - 動作しますか？この先を読む前に、その理由を少し考えてみてください。

#### ここで何が問題なのか？

**Application.Quit** はビルドされたアプリケーションでのみ機能し、エディターでテストしているときには機能しないため、ボタンは現在動作していません。そこで同じように動作させるためには、 PlayMode を停止させるための特別なメソッドが必要になります。ただし、アプリケーションの実行場所によって異なる行を実行するようにコードを変更するには、どうすればよいでしょうか。

そこで、**条件付きコンパイル**の出番です。条件付きコンパイルは、コードがコンパイルされる場所（エディターまたはビルド）に応じてコードを分岐させるために使用します。

ステップを完了としてマーク

## 8. 条件付きコンパイルによるメソッドの修正

Q&A (0)

条件付きコンパイルによるメソッドの修正手順：

**1.**  IDE で MenuUIHandler.cs に戻ります。

**2.  Exit**メソッドを以下のコードで更新してください：

```csharp
public void Exit()
    {
#if UNITY_EDITOR
        EditorApplication.ExitPlaymode();
#else
        Application.Quit(); // original code to quit Unity player
#endif
    }
```

**3.**  変更内容を保存します。

#### 新しい条件コードを確認する

さて、このコードにはどんな意味があるのでしょうか？# で始まる行はすべて本当の「コード」ではないのです。これらはコンパイルされて実行されるわけではなく、実際にはコンパイラへの指示です。ただ、以前に遭遇したことのあるコードに似ていますね。

もう少し身近なものに置き換えてみましょう：

```csharp
if (UNITY_EDITOR)
{
    // run this code
}
else
{
    // run this code
}
```

この **if**条件文はコンパイラに対する命令なので、true でない部分は完全に削除されます。

あなたのケースでは：

- エディター内部でコンパイルされ、UNITY_EDITOR が true になると、**EditorApplication.ExitPlaymode()**のコードを保持し、 Application.Quit を破棄します。
- プレイヤーをビルドすると、UNITY_EDITOR が false になるので、**Application.Quit()** を保持し、EditorApplication.ExitPlaymode() を破棄します !

ステップを完了としてマーク

## 9. 新しい名前空間の追加

Q&A (0)

Unity エディターに戻ると、コンソールに見慣れたエラー（「The name 'EditorApplication' does not exist in the current context.」）が表示されることがあります。

SceneManager と同様に、**EditorApplication** も別の名前空間にあります。今回は、その名前空間が **UnityEditor** で、Unity エディター内でしか利用できないので、修正方法が少し違います：

**1.**  IDE で MenuUIHandler.cs に戻ります。

**2.**名前空間のリストの最後に、次のコードを追加します：

```csharp
#if UNITY_EDITOR
using UnityEditor;
#endif
```

名前空間の周りにコンパイラの条件付き命令が追加されていますね：**#if UNITY_EDITOR**とすることで、Unity エディター内でコンパイルするときだけ名前空間が含まれるようにしました。

コンパイラの**if** 文を追加しなかった場合、スタンドアロンのプレイヤーをビルドしようとすると、UnityEditor が見つからないというエラーが発生します。これは、プレイヤービルドに含まれていないためです。(これをテストしたい場合は、条件付の指示を削除して、試してみてください！)

プレイヤー用のビルドを作成すると、コード行は破棄され、名前空間をインポートしようとはしません。一方、エディターでテスト中に **Exit** を選択すると、Play モードが終了します。

ステップを完了としてマーク

## 10. チャレンジ：Menu シーンに戻る遷移の設定

Q&A (0)

現在、ユーザーはスタートメニューからメインシーンに行き、アプリケーションを終了することができますが、現時点では、メインシーンからそのメニューに戻ることはできません。

メインシーンに **Back to menu**ボタンを作成しましたが、自分で動作させる必要があります。

留意点：

- ボタンのゲームオブジェクトは、Canvas ゲームオブジェクトで見つけることができます。
- Canvas ゲームオブジェクトには、UI Main Scene (Script) コンポーネントがアタッチされており、メインシーンの UI を処理します。
- [Configure the Start button](https://learn.unity.com/tutorial/create-a-scene-flow#60b73e9cedbc2a54fb1cc8d4) ボタンで行った手順を確認することができますので、行き詰まったら参考にしてください。
- Play モードで変更内容をテストし、正しく動作することを確認します。

ステップを完了としてマーク

## 11. 次のステップ

Q&A (0)

これで、シーンと UI が接続され、ミッションの概要を満たすことができました。ただし、色選択ボタンがまだ機能していません。

次のチュートリアルでは、データの永続性を実装することで、この機能を追加します。

#### 自分だけのオリジナルを作ろう！

デフォルトのメニューの外観をカスタマイズすることも、ゼロから独自のメニューを作成することもできます！私たちが作成したメニューがあなたの好みには少し退屈な場合でも、絶望する必要はありません。[Create with Code Unit 5 - User Interface](https://learn.unity.com/project/unit-5-user-interface?uv=2020.3&courseId=5cf96c41edbc2a2ca6e8810f) での取り組みを定着させる絶好の機会です。

**重要：**独自のメニューを作成する場合は、私たちが使用したものと同じボタンがメニューに含まれていることを確認してください。そうでなければ、ユーザーはアプリケーションで必要なインタラクションを完了することができません。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
