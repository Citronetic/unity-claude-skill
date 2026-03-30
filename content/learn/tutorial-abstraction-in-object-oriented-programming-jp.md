[Image: image]

# オブジェクト指向プログラミングにおける抽象化

Tutorial

foundational

+10XP

20 mins

0

Unity Technologies

[Image: オブジェクト指向プログラミングにおける抽象化]Summary

今回のチュートリアルでは、オブジェクト指向プログラミングの最初の柱である「抽象化 ( Abstraction)」について学びます。

このチュートリアルを終了すると、以下のことができるようになります：

- 必要なスクリプトコンポーネントのみを公開するための抽象化について説明する
- 抽象化の実装の機会を正しく認識し、オブジェクトの重要な詳細のみを公開する

Languages available:

日本語EnglishEspañol日本語日本語

## 1. 概要

Q&A (0)

既存のコードに手を入れ外部機能を変えずに改良する、いわゆる**リファクタリング** (**refactoring**) というプロセスの準備が整ったのです。リファクタリングは開発プロセスの重要なステップです。このステップでは、以前に書いた雑なコードをきれいにし、また、プロジェクトの今後のイテレーションであなたのコードがどのように使用されるかを再検討することができます。つまり、開発段階では「とりあえずうまくいく」コードを書き、リファクタリング段階では「あとでうまくいく」ようにコードを修正するのです。

前回のミッションでオブジェクト指向プログラミングの概念を紹介しましたが、ジュニアプログラマー (Junior Programmer) のパスウェイを通して、そのベストプラクティスのいくつかを実践してきました。ここでは、主要な柱である抽象化、継承、多態性、カプセル化のそれぞれについて深く考察し、このパラダイムを指針として、抽象化から始めて効果的にコードをリファクタリングする方法を学びます。

この最終ミッションでは、前ミッションで作成したインベントリプロジェクトに引き続き磨きをかけていきます。

ステップを完了としてマーク

## 2. 抽象化とは？

Q&A (0)[Image: image]

OOP の最初の柱は、コードを使うプログラマー（それがあなたであろうと他の誰かであろうと）にとって、コードをきれいに、シンプルに保つことなのです。抽象化とは、他のプログラマーが目にするスクリプトから複雑なコードを取り除き、他のプログラマーが本当に必要とする機能のみを公開するプロセスです。詳細を「抽象化」することで、重複するコードを減らし、最も有用な機能に簡単にアクセスできるようになります。この柱は、このパスウェイを通して頻繁に恩恵を受けているので、実はもうかなり馴染んでいるはずです。タスクを実行するためにメソッドを呼び出すときはいつでも、すべてのコードを手で書き出す代わりに抽象化の恩恵を受けているのです！

すでに抽象化を使っている状況を見てみましょう。[Create with Code](https://learn.unity.com/project/unit-4-gameplay-mechanics?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f) の中で、[Unit 4 - Gameplay Mechanics](https://learn.unity.com/project/unit-4-gameplay-mechanics?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f) では、敵のウェーブを生成する機能を作りましたね。

[Image: image]

最初にコードを書いたとき、Start メソッドに入れました：

```csharp
private void Start()
{
    for (int i = 0; i < 3; i++)
    {
        Instantiate(enemyPrefab, GenerateSpawnPosition(),
        enemyPrefab.transform.rotation);
    }
}
```

Start はゲームのロード時に一度だけ実行されるので、別の敵のウェーブを出現させたい場合は、スクリプト内の出現させたい場所にそのコード行を貼り付ける必要があります。同じコードの行を何度も書き直す（またはコピーアンドペーストする）ことは非効率的であり、エラーが発生しやすくなります。また、すべてのスクリプトを検索し、すべての参照を書き直す必要があるため、後のリファクタリングが困難になります。

その代わりに、スポーン機能を独自のメソッドに分離し、Start 時にそれを呼び出すようにしたのです：

```csharp
void SpawnEnemyWave() // create new higher-level method
{
    for (int i = 0; i < 3; i++)
    {
        Instantiate(enemyPrefab, GenerateSpawnPosition(),
        enemyPrefab.transform.rotation);
    }
}

private void Start()
{
    SpawnEnemyWave(); // call higher-level method in Start()
}
```

あなたは SpawnEnemyWave という、より高レベルで「抽象的」な関数を作成しました。すると、1 行のコードでスクリプト内の任意の場所に敵を出現させることができるようになったのです。また、後でリファクタリングが必要になっても、一ヶ所だけで行うことができます。さらに、あなたと仲間のプログラマーは、敵がどのようにスポーン (生成) されるかという詳細について心配する必要がなくなりました。重要なのはより抽象的な概念で、SpawnEnemyWave() を呼べば、それらはスポーンされるということです。

抽象化の体験は、自分で作ったメソッドに限ったことではありません。実際、Unity に組み込まれているメソッドを呼び出すたびに、抽象化の恩恵を受けているはずです：

```csharp
rb.AddForce(Vector3.up * Random.Range(12, 16), ForceMode.Impulse);
```

RigidBody に力を加えるには、物理演算システムと相互作用する膨大な計算量が必要です。ただし、Unity はこのシンプルで「抽象的」な高レベルな関数 (AddForce) を提供しているので、AddForce メソッドを呼び出して必要なパラメーターを与えるだけで良いのです。Unity の物理演算を理解しなくてもオブジェクトにうまく力を加えることができるでしょう。

ステップを完了としてマーク

## 3. 抽象化とスクリプトリファクタリング

Q&A (0)

リファクタリングの重要なポイントは、他のプログラマーがコードを操作する方法を変えずに、コードの機能を向上させることであることを忘れないでください。これには抽象化が重要な役割を果たします。メソッドの呼び出しと出力が変わらない限り、他のプログラマーに知られることなくメソッドの中身を調整することができるのです。つまり、プロジェクトの他の部分を壊すリスクを負うことなく、安全にコードをリファクタリングすることができるのです。

簡単な例を見てみましょう：

```csharp
int TripleResult (int inputNumber)
{
    int outputNumber = inputNumber + inputNumber + inputNumber;
    return outputNumber;
}
```

上記のメソッドでは、呼び出し側のスクリプトが整数を渡して、3 倍された出力を取得します。出力される数値を得るためのアプローチが少し非効率的なので、コードを以下のようにリファクタリングするとよいでしょう：

```csharp
int TripleResult (int inputNumber)
{
    int outputNumber = inputNumber * 3;
    return outputNumber;
}
```

メソッドの内容は書き換えられても、メソッドの呼び出し方は全く同じで、返される内容も同じです。したがって、プロジェクト全体を通してこのメソッドを呼び出すと、引き続き機能します。

ステップを完了としてマーク

## 4. プロジェクトにおける抽象化の実装

Q&A (0)

インベントリプロジェクトで UserControl をリファクタリングすることで、先ほど学んだ抽象化の原則を実装してみましょう。フォークリフトを選択し、目的のリソースに移動させるための機能は、すべて Update メソッドに含まれています。でも、もし後になって、他の要素でこれらの選択とアクションを制御できるようにしたいとしたらどうでしょう？そのために、この機能を 2 つの新しいメソッドに抽象化してみましょう。

**1.** 必要であれば、前のミッションの Inventory プロジェクトを開いてください。

**2.**Scripts フォルダーから UserControl スクリプトを探し、Visual Studio で開きます。

**3.**Update の上に、戻り値のない 2 つの新しい public メソッドを定義し、HandleSelection と HandleAction という名前にします。

```csharp
public void HandleSelection ()
{

}

public void HandleAction ()
{

}
```

HandleSelection は、ユーザーがアプリケーション内のフォークリフトの 1 つを左クリックしたときに発生するすべての処理を管理します。Update でマウスの左ボタンをチェックすること (Input.GetMouseButtonDown(0)) はまだ必要ですが、他のすべては新しいメソッドに移動されます。

**4.**Update メソッド内で、if(Input.GetMouseButtonDown()) 文の内容を選択し、HandleSelection に移動させます。

```csharp
public void HandleSelection()
{
    // start of code cut from GetMouseButtonDown(0) check
    var ray = GameCamera.ScreenPointToRay(Input.mousePosition);
    RaycastHit hit;
    if (Physics.Raycast(ray, out hit))
    {
        // the collider could be children of the unit, so we make sure to check in the parent
        var unit = hit.collider.GetComponentInParent<Unit>();
        m_Selected = unit;

        // check if the hit object have a IUIInfoContent to display in the UI
        // if there is none, this will be null, so this will hid the panel if it was displayed
        var uiInfo = hit.collider.GetComponentInParent<UIMainScene.IUIInfoContent>();
        UIMainScene.Instance.SetNewInfoContent(uiInfo);
    }
    // end of code cut from GetMouseButtonDown(0) check
}

private void Update()
{
    // ...

    if (Input.GetMouseButtonDown(0))
    {
        // code cut from here
    }

    // ...
}
```

**5.**if(Input.GetmouseButtonDown()) 文で、HandleSelection() を呼び出します；

```csharp
if (Input.GetMouseButtonDown(0))
{
    HandleSelection(); // method now called from here
}
```

では、この作業を HandleAction() でも繰り返してみましょう。

**6.**Update 内で、else if (m_Selected != null && Input.GetMouseButtonDown(1)) 文を探し出し、その内容を HandleAction() に移動させます。

```csharp
public void HandleAction()
{
    // start of code cut from GetMouseButtonDown(1) check
    var ray = GameCamera.ScreenPointToRay(Input.mousePosition);
    RaycastHit hit;
    if (Physics.Raycast(ray, out hit))
    {
        var building = hit.collider.GetComponentInParent<Building>();

        if (building != null)
        {
            m_Selected.GoTo(building);
        }
        else
        {
            m_Selected.GoTo(hit.point);
        }
    }
    // end of code cut from GetMouseButtonDown(1) check
}

private void Update()
{
    // ...

    else if (m_Selected != null && Input.GetMouseButtonDown(1))
    {
        // code cut from here
    }

    // ...
}
```

**7.**else if (m_Selected != null && Input.GetMouseButtonDown(1)) 文で、HandleAction() を呼び出します。

```csharp
else if (m_Selected != null && Input.GetMouseButtonDown(1))
{
    HandleAction(); // method now called from here
}
```

**8.**スクリプトを保存して Unity に戻り、シーンのプレイテストを行います。

機能は変わっていない：フォークリフトを左クリックし、山積みのリソースを右クリックすると、フォークリフトが以前とまったく同じようにリソースを運ぶことができるはずです。今と違うのは、もしあなたや他のプログラマーがこの機能を後でアプリケーションの別の場所で必要とした場合、より自由に利用できることです。

ステップを完了としてマーク

## 5. まとめ

Q&A (0)

抽象化することでコードがシンプルになり、プログラマーにとって使いやすいきれいなコードになります。抽象化の基本的な考え方は、他のプログラマーに対して不要な煩雑さを隠し、コードを意図したとおりに実行させるために必要なものだけを公開することです。複雑な内部構造を、抽象的で再利用性の高いコード片に置き換えるということです。また、この原則に従うことで、後のリファクタリングの作業も簡略化されます。インベントリプロジェクトに抽象化を適用する方法を学んだので、自分のアプリケーションにどのように適用できるかを考えてみてください、あるいはやってみるのもいいでしょう！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
