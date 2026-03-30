[Image: image]

# 敵、Part 1：動かない監視員

Tutorial

Beginner

+0XP

55 mins

1

(114)

Unity Technologies

[Image: 敵、Part 1：動かない監視員]Summary

ここまで長い時間をかけてゲームを開発し、C#でのスクリプト記述に関する理解を深めました。ですが、何かが足りないです。敵が回避することができないステルスゲームとは？

このチュートリアルでは、以下のことを行います。

- 動かない敵、ガーゴイルを作成する
- ガーゴイル（Gargoyle）が JohnLemon を見つけられるようにカスタムスクリプトを書く
- JohnLemon が捕まったらゲームを再開するように設定する

このチュートリアルをクリアすると、レベルに応じて 1 種類の敵を用意することができます。

Languages available:

日本語EnglishEspañol日本語한국어简体中文日本語

## 1. Gargoyle プレハブのセットアップ

Q&A (0)

これでゲームが形になりました。JohnLemon はカメラが追いかけてくる環境内を動き回ることができ、屋敷を出るとゲームが終了します。しかし、一つ足りないのは、それを難しくするための敵がいることです！

このチュートリアルでは、お化け屋敷に動かない敵、ガーゴイルを追加します。

最初の手順では、JohnLemon に対して行った作業と同じように、ガーゴイルのモデルをシーンに入れることです。

**1.**Project ウィンドウで、 **Assets > Models** フォルダの順に移動し、 **Gargoyle** アセットを見つけます。

[Image: image]

**2.**Project ウィンドウからアセットを Hierarchy ウィンドウにドラッグして、モデルのインスタンスを作成します。

**3.**このお化け屋敷には複数のガーゴイルを必要とします。モデルは読み取り専用なので、編集を行うにはプレハブを作成する必要があります。

Hierarchy ウインドウから Gargoyle ゲームオブジェクトを Project ウインドウの **Assets > Prefabs** フォルダの順に進みドラッグします。Create Prefab ダイアログボックスが表示されたら、 **Original Prefab** を選択します。

**4.**Gargoyle プレハブができたので、それを開いて編集することができます。今回はショートカットを使います！Hierarchy で、Gargoyle ゲームオブジェクトの**右にある矢印**をクリックします。

[Image: image]

プレハブが開き、編集が可能になります。

ガーゴイルをゲームに追加したので、そろそろ設定する時が来ましたね。まずは、アニメーションを加えてみましょう！

ステップを完了としてマーク

## 2. ガーゴイルにアニメーションを加える

Q&A (0)

JohnLemon と同じように、ガーゴイルにも独特の動きがあり、それが個性となっていて、ゲームの雰囲気を盛り上げてくれます。ガーゴイルはプレイヤーを捕まえようとします！

ガーゴイルには再生するアニメーションが 1 つしかないため、 Animation Controller は非常にシンプルなものになります。

**1.**Project ウィンドウで、 **Assets > Animation > Animators** フォルダの順に進み、Animators の上で右クリックします。

**2.**コンテキストメニューで、 **Create > Animator Controller の順に選択します。**新しいアニメーションコントローラーの名前を「**Gargoyle**」とします。

**3. Gargoyle** をダブルクリックして、Animator ウィンドウを開きます。

**4.**Project ウィンドウで、 **Assets > Animation > Animations** の順に進みます。

**5. Gargoyle@Idle** Model アセットを展開します。

[Image: image]

**6. Idle**アニメーションを Project ウィンドウから Animator ウィンドウにドラッグします。Idle (休止) 状態の Animator の State を作成します。

ガーゴイルのシンプルなアニメーションコントローラーは完成しましたが、Animator コンポーネントに割り当てる必要があります。

**7.**Project ウィンドウで、 **Assets > Animation > Animators** フォルダの順に進みます。

**8.**Hierarchy ウィンドウで、**Gargoyle** ゲームオブジェクトを選択します。

**9.**Gargoyle のアニメーターコントローラーを Project ウィンドウから Inspector の Gargoyle の Animator コンポーネントの **Controller**プロパティにドラッグします。

**10.**シーンを保存し、再生モードにすると、ガーゴイルが再生中どのように見えるかを確認することができます！終わったら必ず再生モードを終了してください。

ステップを完了としてマーク

## 3. ガーゴイルにコライダーを追加する

Q&A (0)

次に、プレイヤーがガーゴイルにぶつかることができ、懐中電灯の光で JohnLemon を見ることができることを確認する必要があります。これはコライダーの仕事です。

コライダーを追加するには、以下の手順に従ってください。

**1.**Unity エディターがプレハブモードのままであることを確認してください。そうでない場合は、Gargoyle プレハブを作成したときに習得したショートカットを使うことができます。

**2.**Inspector で、Gargoyle ゲームオブジェクトに **Capsule Collider コンポーネント**を追加します。

[Image: image]

カプセルコライダーがこの敵にはちょうどいいくらいの形状です。

**3.**次に、ガーゴイルモデルの形状によりよくフィットするように設定を調整してください。

- カプセルコライダーの **Center** プロパティを（**0**, **0.9**, **0**）に変更する
- **Radius** プロパティを **0.3** に変更する
- **Height** プロパティを **1.8** に変更する

[Image: image][Image: image]

その方がよりフィットしますね！これでプレイヤーはガーゴイルにぶつかることができるようになりました。

ステップを完了としてマーク

## 4. ガーゴイルの視線をシミュレートするトリガーの作成

Q&A (0)

ガーゴイルには、まだ JohnLemon を発見できる方法が必要です。以前、ゲームのエンディングを作成する際に、キャラクターの物理的な位置をイベントのトリガーとして使用したことがありますが、ここでも同じことができます。ガーゴイルが壁越しに見えないようにカスタムスクリプトを書くのですが、まずはトリガーを作成します。

位置決めをもう少し簡単にするために、Gargoyle ゲームオブジェクトの子として別のゲームオブジェクトを作成し、その上にトリガーを配置します。

トリガーを作成するには、以下の手順に従います。

**1.**Hierarchy ウィンドウで、Gargoyle ゲームオブジェクトを右クリックして、Create Empty を選択します。

[Image: image]

**2.**このゲームオブジェクトは、ガーゴイルの世界に対する視点として機能するため「**PointOfView**」という名前に変更します。

[Image: image]

**3.**ガーゴイルのアニメーションでは、顔は正面を見て少し下を向いているので、PointOfView ゲームオブジェクトを再配置する必要があります。Inspector で、 **Transform** コンポーネントを見つけます。

- **Position**プ ロパティを（**0**, **1.4**, **0.4**）に変更します。
- **Rotation**プ ロパティを（**20**, **0**, **0**）に変更します。

[Image: image]

**注：**Scene ウィンドウの Transform ハンドルが少し下向きでない場合は、 **Local** ではなく Global に設定されていることが原因かもしれません。これは、ツールバーの Handle Rotation Toggle をクリックして変更できます。

[Image: image]

これでガーゴイルの視点の設定ができたので、トリガーの追加と設定を行います。

**4.**Inspector で、**Capsule Collider**コンポーネントを追加します。

**5.**コンポーネントの**Is Trigger** チェックボックスを有効にします。

**6.**トリガーの設定を調整してみましょう。

- Capsule Collider の **Center** プロパティを（**0**, **0**, **0.95**）に変更する
- **Radius** プロパティを **0.7** に変更する
- **Height** プロパティを **2** に変更する
- **Direction** プロパティを Y 軸から **Z 軸**に変更する

[Image: image]

ガーゴイルの懐中電灯から出るビームに合わせて、コライダーを設定しました。完ぺきです！

ステップを完了としてマーク

## 5. Custom Observer スクリプトを書く

Q&A (0)

トリガーを作成したので、JohnLemon がそこに入ってきたときのスクリプトを書く必要があります。

新しいスクリプトを作成するには、以下の手順に従ってください。

**1.**Project ウィンドウで、**Assets > Scripts** の順に進みます。

**2.**Scripts フォルダーを右クリックし、**Create > C# Script** の順に選択します。新しいスクリプトに「**Observer**」という名前を付けます。

この名前は、スクリプトが何をするかを説明します。プレイヤーのキャラクターを観察し、発見された場合はゲームを再起動させます。このスクリプトは他の敵にも再利用できるので、その名前をガーゴイルとリンクさせないのは理にかなっています。

**3.**Scripts フォルダから Observer スクリプトのアセットを Hierarchy ウィンドウの **PointOfView** ゲームオブジェクトにドラッグしてコンポーネントとして追加します。

**4.**スクリプトアセットをダブルクリックして編集用に開きます。

ステップを完了としてマーク

## 6. プレイヤーのキャラクターを検出するクラスの追加

Q&A (0)

プレイヤーのキャラクターを検出するクラスを追加して、新しいスクリプトを始めましょう。

**1.**GameEnding スクリプトで行ったように、Start メソッドと Update メソッド、そしてそれらのコメントを削除します。クリーンスクリプトは以下のようになります。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{

}
```

**2.**まず、プレイヤーのキャラクターを検出するための Observer クラスが必要です。中括弧の間に、以下の行をスクリプトに追加します。

```csharp
public Transform player;
```

これは、GameEnding の Trigger で取ったアプローチとは少し異なります。このスクリプトは、ゲームオブジェクトではなく、プレイヤーキャラクターの **Transform** をチェックします。そうすることで、JohnLemon の位置にアクセスしやすく、JohnLemon の視界がはっきりしているかどうかを判断できます。

**3.**以前は、特別なメソッド OnTriggerEnter を使ってプレイヤーのキャラクターを検出し、そのキャラクターがトリガー内にあるかどうかを bool 変数を使用して格納していました。それはここで再利用できます。

プレイヤーの Transform の宣言の直下に次の行を追加します。

```csharp
bool m_IsPlayerInRange;
```

**4.**今度はそのすぐ下に OnTriggerEnter メソッドを追加します。

```csharp
void OnTriggerEnter (Collider other)
    {

    }
```

**5.**GameEnding スクリプトと同様に、OnTriggerEnter が呼び出されたときに JohnLemon が実際範囲内であることを確認することが重要です。

それを確認するために、OnTriggerEnter メソッドの中括弧内に if 文を追加します。

```csharp
if(other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
```

**6.**このトリガーに入るプレイヤーキャラクターは、自動的にゲームの終了をしないようにすることがあります。例えば、途中に壁がある場合があります。つまり、JohnLemon がトリガーから離れるタイミングを見つけることも重要です。

これは OnTriggerEnter の逆である OnTriggerExit という特別なメソッドを使って簡単に行うことができます。

OnTriggerEnter メソッド自体の直下にコピー＆ペーストして、以下のように Enter を **Exit**に、true を **false** に設定します。

```csharp
void OnTriggerExit (Collider other)
    {
        if(other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }
```

**7.**スクリプトは、以下のようになります。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{
    public Transform player;

    bool m_IsPlayerInRange;

    void OnTriggerEnter (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
    }

    void OnTriggerExit (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }
}
```

ステップを完了としてマーク

## 7. 敵の視線を確認する

Q&A (0)

このゲームでは、JohnLemon への敵の視線がはっきりしているかを確認することが重要です。そうでなければ、実際に壁が邪魔になってゲームが終了することがあります。プレイヤーキャラクターの位置はいつでも変化する可能性があるので、このチェックはフレームごとに行う必要があります。

スクリプトを続けましょう。

**1.**以下のように、OnTriggerExit のすぐ下に Update メソッドを追加します。

```csharp
void Update ()
    {

    }
```

**2.**視線を確認するのは、プレイヤーキャラクターが実際に視線の範囲内にいるときにのみ意味があります。Update メソッドの中括弧内に以下の if 文を追加します。

```csharp
if(m_IsPlayerInRange)
        {

        }
```

ここまでは良いのですが、実際にどうやって視線を確認するのですか？

Unity では、ある点を起点とする線のパスに沿ってコライダーがあるかどうかを確認することができます。この特定の時点から始まる線を **Ray** （レイ）と呼びます。このレイに沿ってコライダーをチェックすることを **Raycast**（レイキャスト）といいます。

レイには、レイの**原点**（origin）と レイの進む**方向**（direction）が必要です。原点は PointOfView ゲームオブジェクトの位置だけですが、方向を算出するのはやや複雑になります。

**3.**if 文の中括弧 IsPlayerInRange 内に以下の行のコードを追加します。

```csharp
Vector3 direction = player.position - transform.position + Vector3.up;
```

このコードは、方向を表す **direction** と呼ばれる新しい Vector3 を作成します。ベクトル計算から言うと、A から B へのベクトルは B - A であることがわかります。つまり、PointOfView ゲームオブジェクトから JohnLemon への方向は、JohnLemon の位置から PointOfView ゲームオブジェクトの位置を引いたものになります。

JohnLemon の位置は、両足が地面に接地していることはご存知ですよね。監視員が JohnLemon の重心を認識できるようにするには、Vector3.up を追加して方向を 1 ユニット上に向けます。Vector3.up は（0, 1, 0）のショートカットです。

**4.**これで方向が決まったので、レイを作ることができます。方向変数の下に以下のコード行を追加します。

```csharp
Ray ray = new Ray (transform.position, direction);
```

この行には、今までに出会わなかったキーワード **new** が含まれています。このキーワードは、型の **コンストラクタ** と呼ばれる特別なメソッドを呼び出して何か新しいインスタンスを作成するときに使用されます。

コンストラクタの呼び出しは常に以下の構文を使用します。

- キーワードは **new**
- 型
- 丸括弧
- コンストラクタのパラメーター（この場合は、レイの原点と方向）

**5.**これでレイを作成したので、レイキャストを実行できます。Unity には様々な Raycast メソッドがありますが、すべての方法に共通しているのは 2 つのことです。レイキャストが起こるレイと、検出するコライダーの種類に対する制限を定義する必要があります。

使用する Raycast メソッドは、何かにヒットした場合は true、何もヒットしていない場合は false の bool 値を返します。bool 値を返すので、if 文の中に Raycast メソッドを入れておくととても便利です。if 文のコードブロックはレイキャストが何かにヒットした場合にのみ実行されます。

レイが作成された場所の下に、前に書いた if 文の中に、以下のコードを追加してください。

```csharp
if(Physics.Raycast(ray))
            {

            }
```

**6.**レイを定義しましたが、レイキャストで検出できるコライダーを制限していません。コライダーの制限は、単一のコライダーを識別するよりもフィルターのように機能する傾向があります。これがプレイヤーキャラクターなのかどうかを確認できるように、必要なのは、レイキャストで正確に何が当たっているのかという情報です。

しかし、問題があります。メソッドから情報を取得する方法はその戻り値であり、このレイキャストは bool 値を返すだけです。しかし、幸いなことに、 **out パラメーター**を使用している非常によく似た Raycast メソッドがあります。

out パラメーターは通常のパラメーターと同じように動作しますが、out というキーワードがその前に記述されている点が異なります。これらのパラメーターは、そのメソッドによって値が変更または設定されており、それを呼び出すものなら何でも使用できるようになっています。out パラメータには **RaycastHit** と呼ばれる型があり、Raycast メソッドはそのデータをレイキャストがヒットしたものに関する情報に設定します。

レイを作成する行とレイキャストの if 文の間に、以下のコードを追加します。

```csharp
RaycastHit raycastHit;
```

この行は、RaycastHit 変数を定義します。

**7.**次に、この変数を使用するために Raycast メソッドを変更する必要があります。Raycast メソッドの if 文を以下のように変更します。

```csharp
if(Physics.Raycast(ray, out raycastHit))
            {

            }
```

これは別の Raycast メソッドで、非常に似たような動作をしますが、情報を返すために out パラメータを使用します。

**8.**スクリプトは、プレイヤーのキャラクターが範囲内にいることを識別し、レイキャストを実行し、何かがヒットしたかどうかを知ることができるようになりました。次に、何がヒットしたかを確認する必要があります。

レイキャストの if 文の中に、以下のコードを追加します。

```csharp
if(raycastHit.collider.transform == player)
                {

                }
```

**9.**これでゲームを終了する必要があります。そのためには、GameEnding クラスへの参照が必要になります。

スクリプトの先頭にある player と m_IsPlayerInRange 変数の宣言の間に、以下のコードを追加します。

```csharp
public GameEnding gameEnding;
```

GameEnding は GameObject や Transform と同じようなクラスで、それぞれメソッドや変数が異なりますが、それらを参照しても全く同じように動作します。

**10.**監視員のスクリプトがほぼ完成しました！ここまでのところを復習しておきましょう。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{
    public Transform player;
    public GameEnding gameEnding;

    bool m_IsPlayerInRange;

    void OnTriggerEnter (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
    }

    void OnTriggerExit (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }

    void Update ()
    {
        if (m_IsPlayerInRange)
        {
            Vector3 direction = player.position - transform.position + Vector3.up;
            Ray ray = new Ray(transform.position, direction);
            RaycastHit raycastHit;

            if(Physics.Raycast(ray, out raycastHit))
            {
                if (raycastHit.collider.transform == player)
                {

                }
            }
        }
    }
}
```

**11.**今のところ、この GameEnding クラスには、プレイヤーキャラクターが敵に捕まった時に呼び出すようなものは何もありません。もう少し機能を追加する必要があります。

監視員スクリプトを保存し、GameEnding スクリプトを開いて編集します。コードエディターから GameEnding スクリプトに直接アクセスできるかもしれませんし、Unity エディターに戻って通常の方法で開く必要があるかもしれません。

ステップを完了としてマーク

## 8. GameEnding スクリプトを修正する

Q&A (0)

このゲームでレベルを終了するには 2 つの異なる方法が必要です。JohnLemon が脱出する方法と捕まった場合に使用する方法です。現在、GameEnding のスクリプトには彼の脱出のみが含まれています。このセクションでは、スクリプトを修正して、捕まったプレイヤーがゲームを終了するのではなく、敵になってレベルを再開できるようにします。

始める前に、GameEnding スクリプトを確認してください。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public float displayImageDuration = 1f;
    public GameObject player;
    public CanvasGroup exitBackgroundImageCanvasGroup;

    bool m_IsPlayerAtExit;
    float m_Timer;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {
            m_IsPlayerAtExit = true;
        }
    }

    void Update ()
    {
        if(m_IsPlayerAtExit)
        {
            EndLevel ();
        }
    }

    void EndLevel ()
    {
        m_Timer += Time.deltaTime;

        exitBackgroundImageCanvasGroup.alpha = m_Timer / fadeDuration;

        if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit ();
        }
    }
}
```

ステップを完了としてマーク

## 9. レベルを終了する 2 つの方法を作成する

Q&A (0)

レベルを終了する 2 つの異なる方法をスクリプトに追加することから始めましょう。

**1.**初めに、 **exitBackgroundImageCanvasGroup 変数宣言**の下に以下のコードを追加します。

```csharp
public CanvasGroup caughtBackgroundImageCanvasGroup;
```

これは、JohnLemon が捕まった場合に表示される新しい画像用の別の CanvasGroup を作成します。

**2. m_IsPlayerAtExit 変数宣言**の下に以下を追加します。

```csharp
bool m_IsPlayerCaught;
```

この変数は、JohnLemon が出口に到達したかどうかをチェックするために作成したのと同じ方法で、JohnLemon が捕まったかどうかをチェックします。

**3.**これで 2 つの新しい変数ができましたが、正確にはどのように使うべきでしょうか？レベルは JohnLemon が捕まった時点で終了する必要がありますが、別の方法で終了します。

まず、Update メソッドに **else-if 文** を追加してみましょう。else-if 文は、if 文の後に使用することができます。Update メソッドの if 文の下に以下のコードを追加します。

```csharp
else if(m_IsPlayerCaught)
    {
        EndLevel ();
    }
```

Update メソッドは以下のようになります。

```csharp
void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel ();
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel ();
        }
    }
```

このメソッドは現在、コンピューターに「m_IsPlayerAtExit が true の場合、EndLevel を呼び出します。もし true でない場合は、m_IsPlayerCaught が true であるかどうかをチェックし、true であれば EndLevel を呼び出します。」と指示しています。

現在はどちらのメソッドも同じなので、これは調整が必要です。m_IsPlayerAtExit が true の場合は、exitBackgroundImageCanvasGroup でフェードインする必要があります。**m_IsPlayerCaught**が true の場合は、 **catchBackgroundImageCanvasGroup** でフェードインする必要があります。

**4.**これを修正するには、EndLevel メソッドにCanvasGroup パラメーターを導入して、この新しいパラメーターの alpha を変更できるようにする必要があります。

EndLevel メソッドを以下のように変更します。

```csharp
void EndLevel (CanvasGroup imageCanvasGroup)
    {
        m_Timer += Time.deltaTime;

        imageCanvasGroup.alpha = m_Timer / fadeDuration;

        if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit ();
        }
    }
```

exitBackgroundImageCanvasGroup の alpha を変更する代わりに、パラメーターとして渡されたものの alpha を変更します。

**5.**コードエディターが Update メソッドの EndLevel への 2 つの呼び出しに問題があると通知していることにお気づきかもしれません。これは、EndLevel メソッドのパラメータが不足している場合に、そのパラメータを渡す必要があるためです。

これを修正するには、最初の呼び出しに exitBackgroundImageCanvasGroup パラメータを渡し（代入）、2 回目の呼び出しに caughtBackgroundImageCanvasGroup を渡す必要があります。

Update メソッドを以下のように調整します。

```csharp
void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel (exitBackgroundImageCanvasGroup);
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel (caughtBackgroundImageCanvasGroup);
        }
    }
```

現在ゲームを終了する方法は 2 つありますが、さらにいくつか調整をする必要があります。

ステップを完了としてマーク

## 10. プレイヤーがレベルを再開できるようにする

Q&A (0)

現在、レベルを終了すると必ずゲームが終了します。敵が JohnLemon を捕まえるたびにゲームを再開しないといけないのはとても煩わしいですよね！レベルを再開することで、より良いプレイヤー体験ができるようになります。

この機能を追加するには以下の手順に従ってください。

**1.**プレイヤーがレベルから脱出した場合でもゲームは終了するはずなので、EndLevel メソッドが実行する処理を決めるのに役立つ別のパラメーターが必要になります。

以下のように、EndLevel メソッドに bool パラメーターを追加します。

```csharp
void EndLevel (CanvasGroup imageCanvasGroup, bool doRestart)
```

**2.**この新しいパラメータを使用する前に、EndLevel メソッドの呼び出しが正しいことを確認しましょう。

プレイヤーキャラクターが出口に到達した場合、ゲームは終了します。これは、パラメーターとして **false**を渡す必要があります。

```csharp
EndLevel (exitBackgroundImageCanvasGroup, false);
```

JohnLemon が捕まった場合は、ゲームを再開する必要があります。これは、パラメーターとして **true**を渡す必要があります。

```csharp
EndLevel (caughtBackgroundImageCanvasGroup, true);
```

**3.**次は、このパラメータを使う必要があります。現在のところ、EndLevel メソッドの if 文はゲームを閉じるだけです。これは調整が必要なので、ゲームが再開しない場合のみ発生します。

if 文のコードブロックを以下のように変更します。

```csharp
if (doRestart)
            {

            }
            else
            {
                Application.Quit ();
            }
```

これは **else** 文です。これは先ほどの else-if 文と同じように動作しますが、無条件です。if 文が false である限り、else コードブロックが実行されます。これは、doRestart パラメーターが false の場合、ゲームが終了することを意味します。

**4.**doRestart が true の場合、レベルはリロードする必要があります。Unity におけるレベルのコンセプトは、先ほど、このチュートリアルで触れたように、シーンで表現されています。シーンを再開する最も簡単な方法は、シーンを再読み込みすることです。

シーンを処理するための機能のほとんどは別の **namespace**（名前空間） にあるので、先に進む前にスクリプトに追加する必要があります。名前空間とは、コードの一部が必要なときにのみ利用できるようにコードを整理する方法です。

デフォルトでは、Unity で作成されたスクリプトには 3 つの名前空間が先頭に含まれています。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

3 つの名前空間の下に、別の名前空間をリストに追加します。

```csharp
using UnityEngine.SceneManagement;
```

**5.**これで、現在のシーンをリロードするために必要なさまざまなクラスやメソッドにアクセスできるようになりました。作成した空白の if 文コードブロック内に、以下のコードを追加します。

```csharp
SceneManager.LoadScene(0);
```

SceneManager クラスから **LoadScene** という静的メソッドを呼び出しています。静的メソッドとは、呼び出されるためにクラスのインスタンスを必要としないメソッドであることを覚えておいてください。

このメソッドのパラメーターはシーンのビルドインデックスです。ビルドインデックスとビルド設定については、このシリーズの最後のチュートリアルでもう少し詳しく触れます。今のところ、C# やほとんどのプログラミング言語では、コレクションの項目はインデックス化されており、インデックスは 1 ではなく 0 から開始することを知っておく必要があります。特定の項目にアクセスするにはコレクション内でどれだけ移動しなければならないかと考えることができます。最初の項目はすぐ近くにあります。そのため、そこにアクセスするにはゼロの項目を渡す必要があります。

シーンは 1 つしかないので、それはシーンのコレクション内で最初のものであり、インデックス 0 を持っています。

**6.**今のところ、このスクリプトはほぼ完成しています。最後に必要なのは、実際に **m_IsPlayerCaught** を設定する方法を作ることです。これは、クラス内の項目、パブリック（public）とプライベート（private）の違いを説明するのに役立ちます。

ここまでのところインスペクターで表示されるパブリック変数と、インスペクターでは表示されない他の変数を使用してきました。クラス内で public と示されていないものは、デフォルトでは private になっています。

この 2 つの本当の違いは、パブリックなものはクラスの外部からアクセスでき、プライベートなものはアクセスできないということです。m_IsPlayerCaught 変数は public として示されていないため、 **private** となります。これは、レベルの再開をトリガーするためにクラスの外部から設定する必要がある変数です。

最初の選択肢は、代わりに変数を public にすることですが、これは良い習慣ではありません。すべてのクラスが JohnLemon が捕まったかどうかを知る必要はありません。

代わりに、この変数へのアクセスを制限し、それを true に設定する public メソッドを作成することができます。このようにすることで、他のクラスは JohnLemon が捕らえられたことは分かりますが、捕まえられていないことは確認できません。

このメソッドはクラス内のどこにでも配置できますが、OnTriggerEnter メソッドの隣に配置するのが最も理にかなっています。そうすると、レベル終了のトリガーとなる 2 つのメソッドが隣り合わせになってしまいます。

OnTriggerEnter の下に以下のメソッドを追加します。

```csharp
public void CaughtPlayer ()
    {
        m_IsPlayerCaught = true;
    }
```

**7.**GameEnding のスクリプトの修正が終わりました！完成したスクリプトは以下のようになります。

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public float displayImageDuration = 1f;
    public GameObject player;
    public CanvasGroup exitBackgroundImageCanvasGroup;
    public CanvasGroup caughtBackgroundImageCanvasGroup;

    bool m_IsPlayerAtExit;
    bool m_IsPlayerCaught;
    float m_Timer;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {
            m_IsPlayerAtExit = true;
        }
    }

    public void CaughtPlayer ()
    {
        m_IsPlayerCaught = true;
    }

    void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel (exitBackgroundImageCanvasGroup, false);
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel (caughtBackgroundImageCanvasGroup, true);
        }
    }

    void EndLevel (CanvasGroup imageCanvasGroup, bool doRestart)
    {
        m_Timer += Time.deltaTime;
        imageCanvasGroup.alpha = m_Timer / fadeDuration;

        if (m_Timer > fadeDuration + displayImageDuration)
        {
            if (doRestart)
            {
                SceneManager.LoadScene (0);
            }
            else
            {
                Application.Quit ();
            }
        }
    }
}
```

もうすぐですよ！GameEnding スクリプトを保存してから Observer スクリプトを再び開き、幾つか最終調整を行います。

ステップを完了としてマーク

## 11. Gargoyle プレハブを完成させる

Q&A (0)

Observer スクリプトはすでに以下のことができます。

- プレイヤーキャラクターがトリガー内にいるときに識別する
- レイキャストを使用して、コライダーにヒットしたかどうかを知る
- そのコライダーがプレイヤーキャラクターであるかどうかを特定する

GameEnding スクリプトを調整したので、Observer スクリプトには、レイキャストがプレイヤーキャラクターのコライダーに当たったときに呼び出すものがあります。

ゲーム内で新しい敵をテストする前に、幾つか最終調整を行います。

**1. Update メソッド**の最後の **if 文**に、以下のコードを追加します。

```csharp
gameEnding.CaughtPlayer ();
```

CaughtPlayer メソッドは **public** なので、ここに追加できます。それが private の場合だと、コードエディターはこの行でエラーを報告します。

**2.**Observer スクリプトを保存して、Unity に戻ります。

**3.**Gargoyle プレハブが完成しました！Save ボタンを使用してプレハブを保存します。

[Image: image]

**4.**Hierarchy で、後ろ向きの矢印をクリックしてシーンに戻ります。

[Image: image]

**5.**Gargoyle プレハブのインスタンスは後から追加することができますが、現在持っているものをスタート地点の隅に配置しましょう。Inspector で、その **Transform** コンポーネントを見つけます。

- Position プ ロパティを（**-15.2**, **0**, **0.8**）に変更します。
- Rotation プ ロパティを（**0**, **135**, **0**）に変更します。

**6.**これで、Observer スクリプトが必要とする 2 つの参照を設定することができます。Hierarchy ウィンドウで、Gargoyle ゲームオブジェクトを右クリックして、 **PointOfView**ゲームオブジェクトを選択します。

[Image: image]

**7.**JohnLemon ゲームオブジェクトを Hierarchy ウィンドウから Inspector の Observer スクリプトの **Player**フィールドにドラッグします。これにより、その Transform が割り当てられます。

**8.**Hierarchy ウィンドウから GameEnding ゲームオブジェクトを Inspector の Observer スクリプトの **Game Ending**フィールドにドラッグします。

**9.**次に、プレイヤーが捕まってレベルが終了した場合の UI を作成する必要があります。Hierarchy ウィンドウで **FaderCanvas** ゲームオブジェクトを展開します。

[Image: image]

**10. ExitImageBackground** ゲームオブジェクトを右クリックし、コンテキストメニューから **Duplicate** を選択します。複製のショートカットは、CMD+D（Windows）または Command+D（MacOS）を押します。

**11.**新しいコピーの名前を **CaughtImageBackground** に変更します。Hierarchy ウィンドウで、このゲームオブジェクトを展開して、その子を表示します。

**12.**ExitImage ゲームオブジェクトの名前を **CaughtImage** に変更します。

**13.**Inspector ウィンドウで、Image コンポーネントがまだ Won Sprite を参照していることがわかります。これは、調整する必要がある唯一の設定です。

Image コンポーネントで、 **Source Image**プロパティの横にある丸い選択ボタンをクリックします。ダイアログボックスが開いたら、 **Caught** というスプライトを選択します。

**14.**最後に、Game Ending スクリプトの Caught Background Image Canvas Group に参照を割り当てる必要があります。Hierarchy ウィンドウで、 **GameEnding** ゲームオブジェクトを選択します。

**15.**Hierarchy ウィンドウから CaughtImageBackground ゲームオブジェクトを Inspector の Game Ending コンポーネントの Caught Background Image Canvas Group フィールドにドラッグします。

**16.**シーンを保存します。

ガーゴイルが完成しました！これで再生モードに入って試せるようになりました。

ステップを完了としてマーク

## 12. まとめ

Q&A (0)

このチュートリアルでは、ゲーム内の動かない敵を作成しました。物理演算とスクリプトを使って JohnLemon が確実に捕まるようにし、 JohnLemon が捕まったら再開するようにレベルを設定しましたね。

あなたの敵であるガーゴイルは優れていますが、動かないので、動き回る敵ならゲームをより面白くするでしょう。次のチュートリアルでは、設定された経路を歩き回ることができ、ゲーム全体に敵を出現させることができるゴーストの敵を作ります。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
