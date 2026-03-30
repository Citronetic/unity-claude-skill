[Image: image]

# オブジェクト指向プログラミングにおけるカプセル化

Tutorial

foundational

+10XP

20 mins

0

Unity Technologies

[Image: オブジェクト指向プログラミングにおけるカプセル化]Summary

本チュートリアルでは、オブジェクト指向プログラミングの 2 番目の柱である「カプセル化」について学びます。

- プログラマーが意図したとおりにしか使えないコードを書くために、カプセル化がどのように使われるかを説明する
- ゲッターとセッターを用いたカプセル化により、クラス内のデータへのアクセスを制御できる
- パブリック変数（プロパティ）、プライベート変数（フィールド）、ローカル変数を区別できる
- 単一目的のコードのみを含むようにクラスを正しく整理することで、読みやすさとデバッグを容易にする

Languages available:

日本語EnglishEspañol日本語日本語

## 1. 概要

Q&A (0)

カプセル化は抽象化と同様に、コードの根本的な複雑さとそれを使用する他のコードとの間の分離レベルを維持することに重点を置いています。この 2 つの類似性から、OOP プラクティスの支持者の中には、抽象化とカプセル化を 1 つの柱にまとめ、通常はカプセル化というヘッダーの下に置く人も見受けられます。ただし、私たちが重要だと考えているのは、抽象化とはコードを要約して他のプログラマーに分かりやすくすることであり、カプセル化とは値やデータをカプセルに閉じ込めるように保護し、他の人がアクセスできるものとできないものをコントロールすることである、という違いです。

ステップを完了としてマーク

## 2. カプセル化とは？

Q&A (0)[Image: image]

カプセル化の大きなテーマは、コードの安全性です。言い換えれば、コードが意図したとおりにしか使われず、操作している値やデータが破損することがないようにするプロセスです。カプセル化されたコードでは、他のプログラマーは変数の値やオブジェクトのプロパティを簡単に変更することができません。他のスクリプトがあなたのコードにアクセスするさまざまな方法をすべて考慮することは不可能なので、あなたが作成したものが意図したとおりにしか実行できないようにカプセル化する方がはるかに良いのです。

[Unit 1 - Player Control](https://learn.unity.com/project/unit-1-driving-simulation?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f)までさかのぼり「Create with Code」でカプセル化を使用した例を見てみましょう。道路を走行する車両を制御するための変数として、以下のものを使用しました。

[Image: image]

```csharp
public float speed = 20.0f;
public float turnSpeed = 45.0f;
public float horizontalInput;
public float forwardInput;
```

このコードを最初に書いたとき、すべての変数を public に設定し、Play モードで Inspector がどのように更新されるかを確認できるようにしました。当時はプログラミングの初心者でしたから、変数の値の変化でゲームプレイがどう変化するのか、よく理解できたのではないでしょうか。また、変数を公開することで、 speed や turnSpeed の値をリアルタイムにテストして、車両の動きを細かく調整することができました。

最終的な数値が決まったら、その値を「固定」する手段として、変数を private にしたのです。

```csharp
// all variables now private instead of public
private float speed = 20.0f;
private float turnSpeed = 45.0f;
private float horizontalInput;
private float forwardInput;
```

もう自分が決めた入力を簡単に（もしかしたら偶然に）変更されるのは嫌だったのですね。単純なことですが、これがカプセル化の最初の体験だったのです。

変数とメソッドのアクセス性は、カプセル化における主要な考慮事項です。一般的なルールとして、変数はできるだけ private にし、メソッドはどこからでも呼び出す必要があると確信できるときだけ public にするのがよいでしょう。そうでなければ、誰でも使うことができます。

自分ひとりで小さなプロジェクトを進めているときには、カプセル化は重要ではないように思えるかもしれません。むしろ、すべてを公開することは便利だとさえ思えるかもしれません。ただし、他の人と一緒に作業している場合、あるいは後で他の人があなたのコードに手を加える場合、本当に使うべきでない変数やメソッドが使われていると、予期せぬ問題が簡単に発生することがあります。

ステップを完了としてマーク

## 3. プライベート変数をインスペクター上で表示する

Q&A (0)

変数を public にすると、インスペクターに公開されますが、アプリケーションの他のメソッドで変更できるようになります。良い知らせです！値を他のコードに公開することなく、インスペクターで利用可能にする方法、つまり**シリアライズ**する方法があります。これにより、インスペクターで変数を自由に変更しながらも、安全性を確保することができます。実は、変数のアクセス修飾子（public、private）は、シリアライゼーションを制御するものではありません。ただし、public 変数はデフォルトでシリアライズされます。[SerializeField] タグを追加することで、簡単にプライベート変数をインスペクターで公開することができます。

```csharp
public class Rabbit : MonoBehaviour
{
    [SerializeField] // exposes private variables in the inspector
    private Color furColor;
}
```

[Image: image]ステップを完了としてマーク

## 4. プロジェクト内で脆弱性のあるパブリック変数を探す

Q&A (0)

値を悪用されないようにするために、すべての変数をプライベートにしてしまうのは簡単ですが、本当に公開する必要がある変数についてはどうでしょうか？どのように保護するのでしょうか？私たちのプロジェクトで例を挙げて考えてみましょう。

MainManager.cs で、以下のパブリック変数を追加しました：

```csharp
public static MainManager Instance;
```

この変数にアクセスする必要がある他のスクリプトでエラーが発生するため、この変数を private にはできません。ただし、public にしておくことは、潜在的な悪用に対して脆弱であることを意味します。問題を実証するために、ちょっとしたいたずらをしてみましょう：

**1.**実験目的のため、MenuUIHandler.csのStart() メソッドの最後に MainManager インスタンスを null に設定するコード行を追加してください。

```csharp
MainManager.Instance = null;
```

**2.**  色選択ボタンを選択して、アプリケーションをテストしてください。これで、コンソールに Null Reference Exception が表示されるようになりました。

[Image: image]

このような悪用を防ぎつつ、変数へのパブリックアクセスを可能にする何らかの方法が必要です。

ステップを完了としてマーク

## 5. ゲッターとセッターを持つプロパティの作成

Q&A (0)

基本的には、この変数を「読み取り専用」にして、他のクラスが値を**取得**することはできても、値を**設定**することはできないようにしたいのです。このためには、C# の get メソッドと set メソッドを使用することで、いつどのように変数を使用できるかを制御することができます。

**1.**MainManager.cs で、MainManager Instance 変数の末尾に get アクセサを追加します：

```csharp
public static MainManager Instance { get; } // add getter to the end of the line
```

変数に get や set アクセサを追加するとすぐに、その変数は**プロパティ**(**Property**) になります。これは、これらの特殊なメソッドを通じて内部データへのアクセスを提供する特殊な変数です。

**2.** set アクセサがない場合、このプロパティは厳密に読み取り専用となり、その値をどこかに設定することはできません。そのため、先ほど MenuUIHandler.cs で追加した不正なコードの行でエラーが発生するようになりました。それでいいのです。他のクラスでリセットされないように、その行を削除してください。

```csharp
// MainManager.Instance = null; - delete or comment out this line of code
```

**3.**  ただし、まだ問題があります。このプロパティは厳密には読み取り専用なので、それ自身のクラスで設定することもできず、MainManager.cs の下の方にある Instance = this; という行でエラーが発生しています。これを解決するには、プロパティに private setter を追加すれば、このエラーは解決するはずです：

```csharp
public static MainManager Instance { get; private set; } // add private setter
```

このコードを使うと、クラス内からプロパティの値を**設定**することはできますが、クラス外から値を**取得**することしかできなくなります。自分のクラスからの変更しか受け付けないようにカプセル化されているので、外部からの誤用や破損から安全に守られているのです！

ステップを完了としてマーク

## 6. セッター検証の必要性を探る

Q&A (0)

上記で追加したゲッターとセッターはカプセル化の最も基本的な形を表しており、単に値を取得または設定するだけで、派手なことは何もしていません。このような単純な実装を**自動実装のプロパティ**と呼びます。

```csharp
{ get; private set; }
```

ただし、値を設定する場所やタイミングを制限するだけでなく、よりカスタマイズされた手動で値を設定する方法を制限したい場合があります。例えば、他のクラスで日付を設定するアプリケーションでは、月を 1〜12 の数字に制限することができます。あるいは、負の数を使用できないようにすることもできます。

倉庫のプロジェクトでは、まさにそれが可能な場所があります：Production Speed という変数がありますが、これは決して負の数には設定しないでください。

**1.**ResourcePile.cs で、公開されている public ProductionSpeed 変数を確認します。

```csharp
public float ProductionSpeed = 0.5f;
```

また、ProductivityUnit.cs の中で、その public 変数に定数を掛けている行を探します。

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier;
```

私たちや将来のバージョンで、あるいは他のお気楽な開発者がこれを負数に設定することを妨げるものは何もなく、このプロジェクトにとって問題となるでしょう。

**2.**実験目的で、このコードの行をいたずらに変更し、生産速度を乗算ではなく減算するようにします。

```csharp
m_CurrentPile.ProductionSpeed -= ProductivityMultiplier; // replace '*=' with '-='
```

次に、アプリケーションをテストし、Productivity Unit を使ってネガティブな結果を出します：

[Image: image]

必要なのは、この変数が決して負の値に設定されないようにするためのカスタムセッターです。

ステップを完了としてマーク

## 7. バッキングフィールドを持つプロパティの作成

Q&A (0)

ゲッターやセッターの中で検証や計算を行うには、プロパティの**バッキングフィールド**(**backing field**) が必要です。これは、public プロパティが公開するデータを格納する private フィールド (変数) です。

これをコンテキストから見てみましょう。

**1.** ResourcePile.cs で、ProductionSpeed と同じ名前のプライベートなメンバ変数（backing field、バッキングフィールド）を追加し、代わりにこの新しい private フィールドに値を格納します：

```csharp
private float m_ProductionSpeed = 0.5f; // add new private backing field
public float ProductionSpeed; // remove value from public property
```

**2.** バッキングフィールドが宣言されたので、誰かが public プロパティにアクセスしたときにバッキングフィールドを取得したり割り当てたりする get および set 関数を手動で追加できるようになりました。

```csharp
private float m_ProductionSpeed = 0.5f;
public float ProductionSpeed // delete semicolon
{
    get { return m_ProductionSpeed; } // getter returns backing field
    set { m_ProductionSpeed = value; } // setter uses backing field
}
```

これらは単純な get メソッドや set メソッドではないので、先ほどの自動実装のプロパティで使用した「{ get; set; }」という省略記法を使うことはできません。

その代わり、手動で行っています。誰かが ProductionSpeed プロパティを取得すると、バッキングフィールドが返されます。誰かが ProductionSpeed プロパティを設定すると、バッキングフィールドには入力された値が設定されます。

**3.**そして、データは public プロパティではなくバッキングフィールドに格納されるようになったので、プロパティへの参照は private フィールドと入れ替える必要があります。ResourcePile.cs で、ProductionSpeed の 2 つの参照を m_ProductionSpeed に置き換えます。

```csharp
...
m_CurrentProduction += m_ProductionSpeed * Time.deltaTime; // swap in m_ version
...
return $"Producing at the speed of {m_ProductionSpeed}/s"; // swap in m_ version
```

これで、誰かが public プロパティを取得または設定しようとすると、ゲッターとセッターを通じて、クラスにカプセル化されたバッキングフィールドにアクセスするようになります。ただし、まだ実際にセッターでの検証を実装していないので、この負の数はまだ起こりうることなのです。 今すぐ修正しましょう。

ステップを完了としてマーク

## 8. 負数を防ぐためのセッターでの検証の実装

Q&A (0)

最後に、すべての設定が完了したので、set メソッド内に検証プロセスを実装し、Production Speed が常に正数であることを確認することができます。実際、負の数が試行された場合、コンソールに警告メッセージを表示することもできます。

**1.**  set メソッド内に if-else 文を追加し、値が負の場合は警告メッセージを表示し、正の場合は正常に設定されるようにします。

```csharp
set
{
    if (value < 0.0f)
    {

            Debug.LogError("You can't set a negative production speed!");
    }
    else
    {
            m_ProductionSpeed = value; // original setter now in if/else statement
    }
}
```

**2.**  もう一度アプリケーションをテストし、生産速度を負の数に設定したときに何が起こるかご覧ください。エラーメッセージが表示されるはずです。

[Image: image]

**3.**  セッターでの検証が完全に実装され、テストされたことで、ProductivityUnit を返すと、減算演算子ではなく、乗算演算子で通常通り機能するようになりました。

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier; // revert '-=' to '*='
```

ステップを完了としてマーク

## 9. まとめ

Q&A (0)

カプセル化は、値がアクセスされたり変更されたりする方法を制御することで、コードを保護し、コードが明示的に設計されたとおりにしか使用されないようにするものです。抽象化と同様に、カプセル化もコードの根底にある複雑さと、それにアクセスするプログラマーとの間に分離するレイヤーを配置します。

プロジェクトでは、自動実装されたプロパティを使用して外部クラスに対して、変数を読み取り専用にしました。そして、バッキングフィールドを持つプロパティに対して、負の数に設定されないようにゲッターとセッターを書きました。これで、2 つのデータがカプセル化され、いたずらや悪用から守られ、安心して眠れるようになりましたね！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
