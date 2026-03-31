[Image: image]

# シーン間でのデータ永続性の実装

Tutorial

foundational

+10XP

20 mins

28

(18)

Unity Technologies

[Image: シーン間でのデータ永続性の実装]Summary

このチュートリアルでは、Menu シーンでユーザーが選択した色を、メイン (Main) シーンでトランスポーターユニットに適用することで、異なるシーン間で情報を保持するデータ永続性の使用方法について学びます。このチュートリアルの終わる頃には、次のことができるようになります：

- Unity の DontDestroyOnLoad メソッドを使用し、アプリケーションセッションを通してデータを確実に保存する
- データ永続性を実装するために、静的クラス、シングルトン、静的変数を使用するタイミングを認識することができる
- シーン間で保存される変数を含むスクリプトでゲームオブジェクトを修正する

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. 概要

Q&A (0)

これで、ユーザーが以下のことができるように、アプリのボタンのいくつかを設定しました：

- メニュー (Menu) シーンとメイン (Main) シーン間の移動
- アプリケーションを終了する（またはエディターで Play モードを終了する）

次に、ユーザーがカスタムの ColorPicker ボタンで色を選択すると、その色がシーンの起動時に倉庫内のフォークリフトに適用されるように、アプリケーションを構成してみましょう。

あなたのプロジェクトで、それがどのように見えるかをご覧ください：

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

このためには、まず、**データ永続性**の基本をある程度理解する必要があります。

ステップを完了としてマーク

## 2. データの永続性とは？

Q&A (0)

**データの永続性**とは、データを作成するために使用されたプロセスよりも長くデータを持続させることを意味します。データ永続性の例としては、以下のようなものが挙げられます：

- 単発のマルチプレイヤーゲーム（クイズパーティーゲームなど）で選択した特定のプレイヤーアイコン
- アプリケーションの開始時に入力され、その後セッション中に表示されるユーザー名（例：ポーリングツール）
- 継続的な長時間ゲーム（例えば、家庭用ゲーム機の RPG ゲームなど）におけるユーザーの進行状況
- ワープロソフトで作成した作品

#### シーン間のデータ永続性

Unity では、あるシーン内で作成したデータは、そのシーン内で簡単に利用することができます。ただし、ユーザーが別のシーンに移動すると、どうなるでしょうか。一般的には、このデータは失われます。シーン間のデータ永続性とは、シーンからシーンへデータを転送し、ユーザーがアプリケーションを使用している間、一貫した体験を提供するプロセスです。上記の最初の 2 つの例は、シーン間のデータ永続性の例です。これらは一般的に、複数のシーンを使用する 1 セッションの体験です。

[Image: image]

**セッション間のデータ永続性**

他の 2 つの例（進行中のゲームとワープロソフト）は、通常、複数回のセッションを経た体験です。 ユーザーは、あるセッションで行った進捗を保存し、それを復元して中断したところから再開したいのです。これらは、**セッション間のデータ永続性**の例です。

[Image: image]

より複雑なアプリケーションでは、ユーザーがシーン間を移動する際に追従する必要があるデータや、複数のセッションにわたって保存および復元する必要があるデータなど、両方のタイプのデータ永続性に頻繁に遭遇することになります。

ステップを完了としてマーク

## 3. 概要の見直し

Q&A (0)

リソース管理シミュレーションのプロジェクト概要には、初期メニュー（メニューシーン）で色を選択し、倉庫内のフォークリフト（メインシーン）に適用できるようにすることが含まれています。

現時点では、ボタンが存在するのは、このためのカスタムスクリプトが用意されているからです。前回のチュートリアルで他のボタンを設定したときに、このボタンを確認しました。では、選択した色データをメインシーンで利用できるようにすることで、シーン間のデータ永続性を実装してみましょう。

これを実現するには、以下を使用します：

- **DontDestroyOnLoad：**Unity のメソッドで、新しいシーンをロードまたはアンロードする際にも、ゲームオブジェクトをメモリに保存するよう指定するものです。
- **Static classes** および **class members：**静的クラスのメンバーは、特定のオブジェクトを参照することなく、どこからでもアクセスすることができます。**Time.deltaTime** や **Vector3.forward** など、すでに使ったことがあるものもあるかもしれません。これらは、特定の時間オブジェクトや特定の vector3 ではありません。静的なクラスメンバーのフォーマットは ClassName.memberName です。

さあ、はじめましょう！

ステップを完了としてマーク

## 4. 新規スクリプトの作成

Q&A (0)

まず、シーン間で永続化したいデータを格納する静的クラスとなる新しいスクリプトを作成する必要があります：

**1.**  Project ウィンドウで、**Assets** > **Scripts**と進みます。

**2.**  Menu シーンで、新しいスクリプトを作成し、MainManager という名前を付けます。

**3.**  Hierarchy で、空のゲームオブジェクトを新規に作成し、MainManager と名付けます。新しいスクリプトをゲームオブジェクトに割り当て、選択した IDE でスクリプトを開きます。

**4.**  デフォルトの Start() および Update() メソッドを削除し、以下のコードを追加して MainManager クラスに静的メンバーを作成します：

```csharp
public class MainManager : MonoBehaviour
{
    // Start() and Update() methods deleted - we don't need them right now

    public static MainManager Instance;

    private void Awake()
    {
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }
}
```

このコードにより、他のスクリプトから MainManager オブジェクトにアクセスできるようになります。

ステップを完了としてマーク

## 5. コードの見直し

Q&A (0)

そのコードを一行ずつ見ていきましょう：

#### クラスメンバー宣言

```csharp
public static MainManager Instance;
```

これは、静的クラスのメンバーの宣言です。キーワード**public** の後のキーワード **static** に注意してください。このキーワードは、このクラスメンバーに格納された値は、そのクラスのすべてのインスタンスで共有されることを意味します。

例えば、シーン内に 10 個の MainManager のインスタンスがあった場合、Instance に格納されている値はすべて同じになります。10 個の MainManager のいずれかがその中の値を変更すると、他の 9 個の値も変更されます。

#### Awake メソッドのコード

次に、オブジェクトが生成されるとすぐに呼び出される Awake メソッドにコードを追加しました：

```csharp
Instance = this;
DontDestroyOnLoad(gameObject);
```

この 1 行目のコードでは、「this」をクラスのメンバーである Instance - MainManager の現在のインスタンスに格納しています。他のスクリプト（例えば Unit スクリプト）から MainManager.Instance を呼び出して、その特定のインスタンスへのリンクを取得することができるようになりました。Inspector でゲームオブジェクトをスクリプトのプロパティに割り当てるときのように、参照先を持つ必要はありません。

2 行目のコードでは、このスクリプトにアタッチされている MainManager ゲームオブジェクトは、シーンが変わっても破壊されないように指定されています。

ステップを完了としてマーク

## 6. Unity エディターでのテスト

Q&A (0)

これらの変更をエディターでテストしてみましょう：

**1.** Unity エディターに戻り、Menu シーンを開き、Play モードに入ります。

**2.**  Hierarchy のゲームオブジェクトを確認します。MainManager は通常のシーンから、DontDestroyOnLoad という特殊なシーンに移動しています。

[Image: image]

**注：**また、このシーンには [DebugUpdater] という新しいゲームオブジェクトがあります。これは Unity で使用されるデバッグ用のゲームオブジェクトなので、無視して構いません。

**3.** **Start** を選択して、Main シーンを起動します。MainManager ゲームオブジェクトが残っていますね。成功です！

**4.**  **Back to menu** を選択すると、前のシーンに戻り、Hierarchy を確認することができます。

[Image: image]

おっと、MainManager ゲームオブジェクトが 2 つになりました。これは、 MainManager がメインシーンから Menu に移動してきたためで、MainManager の元のインスタンスがある場所です。これは後々問題を引き起こす可能性があるため、次に修正しましょう。

ステップを完了としてマーク

## 7. Awake メソッドの修正

Q&A (0)

MainManager ゲームオブジェクトは常に 1 つ必要なので、それを実現するために Awake メソッドを修正しましょう：

**1.**  IDE の MainManager.cs に戻ります。

**2.  Awake**Awake メソッドを以下のコードで更新します：

```csharp
private void Awake()
{
    // start of new code
    if (Instance != null)
    {
        Destroy(gameObject);
        return;
    }
    // end of new code

    Instance = this;
    DontDestroyOnLoad(gameObject);
}
```

**3.**  変更内容を保存します。

**4.**  Unity エディターに戻り、同じテスト工程で今度はどうなるかを確認します。

#### 新しいコードの見直し

Instance が null かどうかをチェックする条件文が追加されましたね。初めて Menu シーンを起動したときは、Instance 変数に MainManager が代入されていません。つまり、null になるので、条件は満たされず、スクリプトは前に書いたように続行されます。

ただし、後で Menu シーンを再度読み込むと、すでに MainManager が 1 つ存在するので、Instance は null になりません。この場合、条件が満たされると、余分な MainManager は破棄され、スクリプトはそこで終了します。

このパターンを**シングルトン** (**Singleton**) と呼びます。MainManager が**単一のインスタンス**しか存在できないようにするために使用し、アクセスの中心点として機能します。

ステップを完了としてマーク

## 8. 選択した色を保存して渡す

Q&A (0)

これで、アプリケーションのシーン間でデータを受け渡す仕組みが整いました。MainManager に新しいパブリックメンバーを追加して、ユーザーが選択した色を渡すようにしましょう：

**1.**  IDE の MainManager.cs に戻ります。

**2.**  Awake メソッドの上に TeamColor という新しい public クラスのメンバーを追加します：

```csharp
public class MainManager : MonoBehaviour
{
    public static MainManager Instance;

    public Color TeamColor; // new variable declared

    private void Awake()
    {
        if (Instance != null)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        DontDestroyOnLoad(gameObject);
    }
}
```

**3.**  変更を保存して、Unity エディターに戻ります。IDE で MenuUIHandler.cs スクリプトを開いてください。

このスクリプトでは、**NewColorSelected**というメソッドがあり、ユーザーが新しい色を選んだときに呼び出されます。その色を取得して、MainManager に保存しておきましょう。

**4.**  **NewColorSelected**メソッドを次のコードで更新します：

```csharp
public void NewColorSelected(Color color)
{
    // add code here to handle when a color is selected
    MainManager.Instance.TeamColor = color;
}
```

これで完了です。ユーザーが選択した色が MainManager に格納されたので、メインシーンから TeamColor 変数にアクセスして取得することができます。あとは、それを倉庫のフォークリフトに応用するだけです。

**5.**  変更を保存して、Unity エディターに戻ります。IDE で Unit.cs スクリプトを開きます。

**6.**  次のコードで新しい **Start**メソッドを追加します：

```csharp
private void Start()
{
    if (MainManager.Instance != null)
    {
        SetColor(MainManager.Instance.TeamColor);
    }
}
```

**7.**  変更内容を保存します。

新しいコードの見直し

**SetColor**は、ユニット（フォークリフト）に色を設定するために、私たちが書いたメソッドです。

色を設定する前に MainManager.Instance が null であるかどうかをチェックしていることに注意してください。MainManager は最初の Menu シーンで作成されるため、そのまま存在することになりますが、なぜそれが必要なのでしょうか？

もし、手早くテストしたいのであれば、Menu シーンを通さずに、直接エディターでメインシーンを開始するのがよいでしょう。その場合、MainManager は存在せず、MainManager.Instance は null になります。このコードにより、プログラマーがメインメニューを通さずにメインシーンを単独で実行した場合のエラーを防ぎ、迅速なテストが容易になります。

#### 結果をテストする

Unity エディターで再度テストを行います。メインシーンを起動する前にメニューから色を選択し、何が起こるか見てみましょう！

ステップを完了としてマーク

## 9. 次のステップ

Q&A (0)

これで、アプリケーション：**シーン間のデータ永続性の実装**における最初の部分は達成されました 。

次のチュートリアルでは、アプリケーションのセッション間のデータ永続性を実装することで、これをさらに拡張します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
