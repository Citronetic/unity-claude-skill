[Image: image]

# public キーワードと継承の概要

Tutorial

Beginner

+0XP

20 mins

0

Unity Technologies

[Image: public キーワードと継承の概要]Summary

このチュートリアルでは、以下の活動を行います。

- public キーワードと、これがコードの中で果たす役割を調べる
- 変数を public にして、Unity エディターでアクセスする
- 継承と派生クラスの概念を学ぶ

このチュートリアルを終えると、SpawnerSample スクリプトで使われているライフ回復ポーションのカスタムエフェクトを作成するために必要な知識が身に付きます。

Languages available:

日本語English日本語한국어简体中文日本語

## 1. publie と private の違いを理解する

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

[前のチュートリアル](https://learn.unity.com/tutorial/write-your-own-spawner-class?language=ja)では、コードを整理するためのものとして class キーワードの役割について説明しました。そこでは、もう 1 つのキーワードである **public** をすでに目にしました。SampleSpawner スクリプトでは、SpawnerSample クラス内に記述された ObjectToSpawn 変数の前には public キーワードが付いています。

デフォルトでは、クラス内のすべての要素は private です。これは、要素を持つクラス自身からのみアクセスできることを意味します。一方、クラス、関数、または変数の前に **public** キーワードを追加すると、他のクラスからもそれにアクセスできるようになります。

公共（public）のものは積まれているものに簡単に触れられる屋根のない荷車に載っている。一方で、私的（private）なものは屋根付きの荷車にしまってある、と考えることができます。

[Image: image]ステップを完了としてマーク

## 2. private 変数の例を確認する

Q&A (0)

public 変数と private 変数の違いを示す例を見てみましょう。

以下のスクリプトについて考えてみてください。

```csharp
class Vector3
{
    float x;
    float y;
    float z;

    Vector3 otherVector;
}
```

この状態だと、別のスクリプトの中でドット演算子を使用して、float 型変数 **x** にアクセスすることはできません。

これは、**x**がデフォルトで private であるためです。**public** キーワードが付けられていないため、そうなります。ですので、x にはクラス Vector3 内の関数のみがアクセスできます。

ステップを完了としてマーク

## 3. LootAngle 変数を公開する

Q&A (0)

LootAngle コンストラクターと NextAngle 関数を public にして、Unity エディターで出ているエラーを修正しましょう。

**1.** SpawnerSample スクリプトで、クラス **LootAngle**内の関数 **LootAngle**を探す。

```csharp
LootAngle(int increment)
   {
       step = increment;
       angle = 0;
   }
```

**2.** 関数宣言にキーワード **public** を追加する。

```csharp
public LootAngle(int increment)
```

**3.** 関数 LootAngle の下にある、関数 **NextAngle** を探す。

```csharp
int NextAngle()
    {
        int currentAngle = angle;
        angle = Helpers.WrapAngle(angle + step);

        return currentAngle;
    }
```

**4.** 関数宣言にキーワード **public** を追加する。

```csharp
public int NextAngle()
```

**5.** **Ctrl + S**（Windows）または **Cmd + S**（macOS）を押して、変更を保存する。

**6.** Unity エディターに戻り、コンソールウィンドウからエラーが消えたことを確認する。

すばらしいです。コンストラクターと関数にアクセスできるようにすることでエラーが修正されました。

ステップを完了としてマーク

## 4. Unity エディターで public 変数にアクセスする

Q&A (0)

クラス変数を public にすると、その変数にインスペクターからアクセスできるようになるという、面白い副次的な効果があります。

SpawnerSample スクリプトでは、変数 **ObjectToSpawn**は public です。これを Unity エディターで探してみましょう。

**1.** Unity エディターに戻る。

**2.**ヒエラルキーで、**PotionSpawner** ゲームオブジェクトを選択する。

**3.** インスペクターで、**Spawner Sample (Script) コンポーネント**を探す。

[Image: image]

インスペクターに public にした **ObjectToSpawn**変数のフィールドがあることが分かります。

**public** キーワードを使用して、他の場所からある変数にアクセスできる必要があることをコンピューターに通知すると、Unity はその変数を公開して、皆さん（または他の誰か）がインスペクターでその値を変更できるようにします。

ステップを完了としてマーク

## 5. 配置するオブジェクトを新しく作成する

Q&A (0)

public にした **ObjectToSpawn** 変数を使って、配置するオブジェクトとしてプレハブにしたゲームオブジェクトを割り当てることができます。

ゲームの開始時にお金を配置できるように、別のゲームオブジェクトを作成しましょう。

**1.** ヒエラルキーで右クリックしてコンテキストメニューを表示して、**3D Object > Sphere** と選択します。新しいゲームオブジェクトができるので、名前を **MoneySpawner**に変更する。

**2.** シーンビューで、移動ツール（ショートカットキー **W**）を使い、MoneySpawner ゲームオブジェクトを PotionSpawner ゲームオブジェクトの横に移動する。

[Image: image]

**3.** **MoneySpawner**がヒエラルキーで選択されたままであることを確認する。インスペクターで、**Add Component** ボタンを選択する。**Spawner Sample** オプションを検索し、MoneySpawner ゲームオブジェクトにスクリプトを追加する。

[Image: image]

**4.** プロジェクトウィンドウで、 *Assets/Creator Kit - Beginner Code/Prefabs/Tutorial* に移動し、**MoneyLoot プレハブ**を探す。

[Image: image]

**5.** **MoneySpawner**がヒエラルキーで選択されたままであることを確認する。MoneyLoot プレハブをプロジェクトウィンドウからインスペクターの **Object To Spawn** フィールドにドラッグする。

[Image: image]

**6.** **Ctrl + S**（Windows）または **Cmd + S**（macOS）を押して、変更を保存する。

**ヒント：**これらの手順を完了するために助けが必要と感じた場合は、最初のチュートリアルに戻って [Unity エディターについて復習](https://learn.unity.com/tutorial/get-started-with-creator-kit-beginner-code?language=ja)してください。

ステップを完了としてマーク

## 6. 公開された変数を使用してゲームプレイを調整する

Q&A (0)

公開された変数は、スクリプトを編集せずにゲームプレイを調整できるため、非常に便利です。この方法で、以下のような数値を簡単に調整することができます。

- オブジェクトの速度
- 装備時にオブジェクトが与えるダメージの量
- さまざまなコライダーなど、敵キャラクターとの接触点

公開された値は、コードを書かない人でも変更できるため、非常に便利です。Unity エディターでゲームをプレイしながら調整して、プレイヤー体験のテストや改善に役立てることもできます。

ステップを完了としてマーク

## 7. 進捗状況を確認する

Q&A (0)

これらのチュートリアルで多くのことを学びましたが、もう 1 つ見ておくべきことがあります。**SpawnerSample** クラスの宣言をもう一度確認してみましょう。

```csharp
public class SpawnerSample : MonoBehaviour
```

いま、皆さんはこの行の大部分の意味が分かるようになっています。

- **public** は、他のスクリプトからクラスにアクセスできることを意味するキーワードです。
- **class** は型を作ります。クラスに関連する関数と変数をグループ化できます。
- **SpawnerSample** はクラスの名前です

しかし、まだ少しだけ解決していない部分が残っています。「**: MonoBehaviour**」とは何を意味するのでしょうか。

ステップを完了としてマーク

## 8. 「MonoBehaviour」を検索する

Q&A (0)

なじみのないタイプやキーワードに遭遇した場合の標準的なアプローチは何だったでしょうか。そう、まず [Unity スクリプティングリファレンス](https://docs.unity3d.com/ScriptReference/?_ga=2.213218460.905155714.1610931610-1880619545.1535881689&ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035070963)で検索することです。

最初にヒットする結果には次の定義が見えます。

「MonoBehaviour is the base class from which every Unity script derives.（MonoBehaviour は、すべての Unity スクリプトが派生する基本クラスです。）」

この説明からは、MonoBehaviour がクラスであり、すでに触れたことがあるものであり、すべてのスクリプトがそれから派生していることが分かります。**SpawnerSample** はスクリプトであるため、コロン記号は「コロンの前のクラスがコロンの後のクラスから派生する」ことを意味すると推測できますが、C# で何かが「派生」することは実際にはどういう意味でしょうか。

ステップを完了としてマーク

## 9. 派生と継承の概要

Q&A (0)

クラスを使用すると、特定のタスクを完了するために必要な変数と関数をグループ化できます。たとえば、Enemy クラスには、ゲーム内の敵を制御するために必要なすべてのものをグループ化できるという具合にです。

ただし、そのクラスのバリエーションや特殊化したものが必要になる場合があります。たとえば、宙を飛ぶ敵と地面を歩く敵が必要な場合があります。これらのデータとほとんどの関数は同じですが、移動を行う関数は異なります。

このコードを効率的に書くには、以下のクラスを書けばよいことになります。

- すべての一般的な操作を実行する **Enemy**クラス
- それから派生する他の2つのクラス（**FlyingEnemy**と **WalkingEnemy**）

派生クラス FlyingEnemy と WalkingEnemy は、Enemy クラスのすべての関数と変数を自動的に継承（アクセス可能な状態に）します。

派生クラスを考える 1 つの方法は、同じ家族の別のメンバーとして考えることです。

[Image: image]ステップを完了としてマーク

## 10. 継承の例を見る

Q&A (0)

前のステップの例を使用して、継承のコードが実際にどのように見えるかを調べてみましょう。

```csharp
public class Enemy
{
    public void Attack()
    {
        …
    }
}

public class FlyingEnemy : Enemy
{

}
```

コロンによって、**FlyingEnemy**は **Enemy**から派生したものとして識別されます。

次に、関数を再宣言せずに、**Enemy**クラス内の関数 **Attack** にアクセスするコードを記述できます。

```csharp
void HandleEnemy()
{
  FlyingEnemy myEnemy;
  myEnemy.Attack();
}
```

ステップを完了としてマーク

## 11. MonoBehaviour クラスには含まれているもの

Q&A (0)

Unity のスクリプトは、基本クラス **MonoBehaviour**から派生しています。これは、スクリプトから基本クラス内で作成された、すべての Unity ユーザーが使用できるさまざまな変数と関数にアクセスできることを意味します。たとえば、以下のものが含まれます。

- Transform コンポーネントを含む変数 **transform**
- ゲームオブブジェクト上のコンポーネントにアクセスできるようにする関数 **GetComponent**

これらのデフォルトの変数や関数があることで、一般的に必要なことを行うためにスクリプトを書くために費やす時間を抑え、個別のゲームを作るために必要なコードの記述に集中できるようになります。

ステップを完了としてマーク

## 12. チュートリアルのまとめ

Q&A (0)

このチュートリアルでは、以下の活動を行いました。

- **public**キーワードの役割を確認し、それを使用して SpawnerSample スクリプトの保護レベルエラーを修正した
- 継承と派生クラスの概念を学んだ

次のチュートリアルではここまで学んだことを応用して、ゲーム内のライフ回復ポーションの効果をカスタマイズを作成します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
