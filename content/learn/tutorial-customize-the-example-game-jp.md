[Image: image]

# サンプルゲームのカスタマイズ

Tutorial

intermediate

+10XP

20 mins

0

Unity Technologies

[Image: サンプルゲームのカスタマイズ]Summary

このチュートリアルでは、サンプルゲームをカスタマイズしながら、Unity Mars の Proxy Group (プロキシグループ)  と Data exclusivity（*データの排他性）*について学びます。

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

このチュートリアルでは、シンプルなゲームテンプレートをカスタマイズしながら、以下の Unity Mars の主要なコンセプトについて理解を深めていきます：

- 関連する条件でグループ化されたプロキシを使って、より複雑な AR 体験を実現するための Proxy Groups について
- プロキシがどのようにデータを占有し、共有するかを制御する Unity Mars の概念である Data Exclusivity について

また、もっといろいろ試してみたいという方には、サンプルゲームにできるさらなるカスタマイズの提案もします！

ステップを完了としてマーク

## 2. 新しい収集アイテム、クリスタルを作成する

Q&A (0)

ゲームのカスタマイズを始める前に、それらのカスタマイズで使用するデジタルオブジェクトを作成する必要があります。今回は、ブルーの収集アイテムであるクリスタルのグリーンのバリエーションを作成します。

以下の手順で、クリスタルのプレハブバリアントを作成します：

**1.**Project ウィンドウで、**Crystal**プレハブを検索します。または、**Assets > UnityXRContent > MARS > Templates > Platformer > Prefab** の順に移動することもできます。

**2.  Crystal**プレハブを右クリックし、**Create > Prefab Variant**と選択します。新しいバリエーションに「Green Crystal」という名前を付けます。

**3.**Project ウィンドウで**Crystal**マテリアルアセットを検索し、選択します。フォルダー構造でこれに移動することもできます。

**4.**メインメニューで、**Edit > Duplicate** と選択します。複製したマテリアルの名前を「Green Crystal」に変更します。

**5.**Inspector で、色見本と選択ウィンドウを使って、マテリアルの**Color** と **HDR Color** のプロパティをグリーンに設定します。

**ヒント：**オリジナルとは明らかに違う色合いのものを作りたい場合は、まず **Base Map** の色に濃いグリーン、**Emission Map** の色に明るいグリーンを選択します。

**6.**Project ウィンドウの**Prefab**フォルダーに戻り、**Green Crystal**プレハブを選択します。

**7.**  Inspector で Mesh Renderer コンポーネントを見つけ、必要に応じて折りたたみを選択し、展開します。

**8.**  **Element 0** のオブジェクトピッカー（丸いアイコン）を選択し、**Green Crystal**のマテリアルを選択し割り当てます。

[Image: image]

**9.**  **Ctrl + S** (Windows) または **Cmd + S** (macOS) を使用して変更を保存することを忘れないでください。

これでこのプレハブは、ゲームのカスタマイズに使えるようになりました！

ステップを完了としてマーク

## 3. 新規プロキシの作成

Q&A (0)

まず、グリーンクリスタルの収集アイテムがスポーンされるサーフェス用の新規プロキシを作成します：

**1.**  MARS Panel の Primitives セクションで、**Proxy Object**を選択します。

**2.**  Inspector で、Proxy (Script) コンポーネントを見つけます。**MARS Component… > Condition > Alignment** の順に選択します。

**3.**  Alignment Condition MARS コンポーネントで、**Alignment** プロパティを**Nothing**に設定します。

**4.**  **Alignment**プロパティを **Vertical**に設定します。Simulation View でギズモが垂直面に整列しているのが確認できるはずです。

**5.**  Project ウィンドウの**Green Crystal**プレハブを、Hierarchy の **Proxy Object** ゲームオブジェクトの上にドラッグします。これで、子ゲームオブジェクトとしてプレハブのインスタンスが作成されます。

[Image: image]ステップを完了としてマーク

## 4. プロキシグループとは？

Q&A (0)

物理的なオブジェクトのプレースホルダーとして機能する個々のプロキシを既に使用しました。テストアプリで作成した Horizontal Plane は、現実世界における水平面のプレースホルダーです。ただし、プロキシ (Proxy) をプロキシグループ (Proxy Groups) にまとめることも可能です。

**プロキシグループ** (**Proxy Groups**) とは、特定の機能を動作させるために必要なプロキシのグループです。例えば、ある部屋にある新しいキッチンの備品や設備を視覚化するアプリを想定してください。2 つのテーブル、床、そして少なくとも 1 つの壁を含む Proxy Group を作成することができます。これらのオブジェクトが現実世界に存在しない場合、Proxy Group 全体のマッチングに失敗し、アプリには新しいキッチンを視覚化するためのデジタルオブジェクトが表示されません。

#### Relations****を使ってマッチングを制御する

また、Proxy Group にリレーションを追加することで、現実世界とのマッチングの基準をより厳しくすることができます。**リレーション** (**Relations**) は、Proxy Group 内の Proxy 間の関係について、より詳細な要件を指定します。

例えば、水平面を必要とする 2 つのプロキシを考えてみましょう。最初の平面が 2 番目の平面より 1 メートル以上高い必要があることを指定する Elevation Relation を含む Proxy Group を追加することができます。アプリが水平面を持つ 2 つのオブジェクトを検出し、それらの間に少なくとも 1 メートルの距離があることを確認するまで、どちらの Proxy もこれらの基準に一致しません。

ステップを完了としてマーク

## 5. Proxy Group の設定

Q&A (0)

以下の手順で Proxy Group を作成し、設定することで、Green Crystal の収集アイテムをより正確に配置することができます：

**1.**  MARS Panel の Primitives セクションで、**Proxy Group**を選択します。

**2.**  Hierarchy で、**Proxy Group** ゲームオブジェクトを展開し、自動的に作成された **Child 1** と**Child 2** の子ゲームオブジェクトを削除します。

**3.**  **Green Crystal** を子として持つ**Proxy Object**ゲームオブジェクトを選択します。**Proxy Object** をドラッグして、**Proxy Group**ゲームオブジェクトの上で離すと、子ゲームオブジェクトになります。

**4.**  **Proxy Group**が 2 つの子 Proxy を持つように、**Proxy Object** ゲームオ ブジェクトを複製します。

**5.**  **Proxy Group** ゲームオブジェクトを選択します。

**6.**  Inspector で、**Add MARS Component…**> **Relation** > **Distance** の順に選択します。

**7.**  Distance Relation MARS コンポーネントにおいて、以下のプロパティ値を設定します：

- **Minimum Distance** を **1**に設定
- **Maximum Distance** を **1.5**に設定

[Image: image]

2 つのグリーンクリスタルの位置が、Simulation View では 1m 以上離れていることにお気づきでしょうか。

ステップを完了としてマーク

## 6. Proxy Object を使用したキャラクターの追加

Q&A (0)

以下の手順で、シーンにキャラクターを追加します (ロボット Unit-E)：

**1.**  MARS Panel で、**Proxy Object**を選択します。

**2.**  Project ウィンドウで、**UnityE_IdleTest** プレハブを探します（これは、以前に使用した **Prefab** フォルダー内に整理されている）。**UnityE_IdleTest**プレハブを Hierarchy にドラッグし、新しい **Proxy Object**の上でリリースすると、子ゲームオブジェクトが作成されます。

**3.**  Hierarchy で、新しい **Proxy Object** を選択します。

**4.**  Inspector で、Proxy (Script) コンポーネントを見つけます。**Components** セクションで、**Filter > Conditions**と選択します。

**5.**  **Add Condition** > **Alignment**と選択します。

**6.**  Alignment Condition MARS コンポーネントで、**Arignment**を **Nothing**に設定し、デフォルト値を削除します。

**7.** **Alignment** を **Vertical** に設定します。これで Simulation ビューでは、Unit-E はグリーンのクリスタルが共有していない垂直面に表示されるようになりました。

[Image: image]ステップを完了としてマーク

## 7. Unity Mars とデータの排他性

Q&A (0)

**データの排他性** (*data exclusivity*) は、Unity MARS のもう一つの重要な概念で、プロキシがどのようにデータを独占し共有するかを説明するものです。プロキシ (Proxy) は、以下の 3 種類のデータへの排他性について、いずれかを持つことができます：

- **Reserved exclusivity：**予約済み (Reserved) プロキシは、他のプロキシ（読み取り専用プロキシを除く）がそのデータにアクセスするのを防ぐことができます。プロキシはデフォルトで予約済みに設定されています。
- **Read Only exclusivity：**読み取り専用 (Read Only) プロキシは、他のプロキシが使用しているか否かに関わらず、任意のデータを使用することができます。
- **Shared exclusivity：**共有 (Shared) プロキシは、予約済みプロキシがそのデータにアクセスすることを防ぐだけです。他のプロキシは、共有か読み取り専用に設定されていれば、そのデータにアクセスすることができます。

以下の手順で、これらの異なるタイプのデータの排他性が実際どのような意味を持つのかを探ってみましょう：

**1.**  Hierarchy で、Unit-E を子として持つ **Proxy Object**ゲームオブジェク トを選択します。

**2.**  Inspector で Proxy (Script) コンポーネントを選択し、**All**(Components セクションのヘッダーの下) を選択します。

**3.**  Proxy MARS コンポーネントを見つけ、必要であれば展開します。

**4.**  **Exclusivity** を **Read Only** に変更します。Unit-E が Simulation View の Green Crystal プロキシと同じ面を占有していることに注目してください。これは、読み取り専用 (Read Only) の排他性により、複数のプロキシオブジェクト間でデータ（この場合は面）を共有することが可能だからです。

**5.**  **Exclusivity** を **Shared**に変更します。Unit- E は再びクリスタルとは異なる面を占有しており、その プロキシデータの排他性は予約済み (Reserved) のままであることに注意してください。

[Image: image]

**6.**収集アイテムのグリーンクリスタルの **Proxy Object**ゲームオブジェクトを選択し、同じ手順で **Exclusivity**プロパティを**Shared** に設定します。これで、Unit-E とクリスタルは、どちらも共有プロキシによってデータへのアクセスを排他的に許可し、Simulation View で再び同じ面上に表示されるようになりました。

ステップを完了としてマーク

## 8. もっと試してみよう

Q&A (0)

このチュートリアルでは、ゲームコンテンツのコンテキストで、プロキシ (Proxy)、プロキシグループ (Proxy Group)、そして データの排他性 (Data Exclusivity) について学びました。これらの基本的な概念は、AR 体験を行う際に、バーチャルコンテンツと現実世界との関係を理解するための重要な出発点となります。

ゲームテンプレートのさらなるカスタマイズを通じて、Unity Mars を使って作業する練習をしたい方は、こちらもおすすめです。

#### プレイヤーキャラクターを置き換える（経験豊富なクリエイター向け）

ゲームテンプレートの Unit-E キャラクターは、環境を移動できるあらゆるデジタルアバターのテンプレートとして設定されています。既存のアセットリファレンスを置き換えることで、独自のデジタルキャラクターを作成するために修正することができます。

Unity でプレイヤーキャラクターの設定やアニメーションを扱った経験がある方は、ゲームテンプレートのキャラクターコントローラーを使って、自分のアニメーションキャラクターを使ってみてください。

Unit-E の設定に合わせて、以下のアニメーションが必要です：

- *アイドル* (休止)  状態（Idle）
- 歩行（Walk）
- 走行（Run）
- 上に跳び上がる*垂直跳び対応* （しゃがんでからジャンプ）（Vertical-jump-ready）
- 水平方向へのジャンプ対応（Horizontal-jump-ready）
- 横跳び（Horizontal-jump）
- ジャンプ台（Jump-land）

Unit-E の Animator Controller は **Assets/UnityXRContent/MARS/Templates/Platformer/AnimatorController** 内にあります。

**注：**このカスタマイズに挑戦してみたいけど、Unityでキャラクターアニメーションを扱った経験がないという方は、まず「[Creative Core: Animation](https://learn.unity.com/project/creative-core-animation)」を試してみてください！また、中級者以上のユーザーであれば、「[Introduction to 3D Animation Systems](https://learn.unity.com/course/introduction-to-3d-animation-systems)」も参考になるかと思います。

ステップを完了としてマーク

## 9. 次のステップ

Q&A (0)

このチュートリアルで Unity Mars の初歩的な学習体験は完了です。基本的な AR アプリケーションを作成し、既存のプラットフォーマーゲームをカスタマイズして、その過程で Unity Mars の重要なコンセプトについて学びました。

また、変更するたびにアプリをビルドしてテストするのではなく、Simulation View で継続的にテストを行いましたね。これが Unity Mars の強みです。Unity エディターでビルド、イテレーション、そしてテストを行い、より洗練された体験を AR 対応デバイスに提供することができるのです。

Unity Mars についてもっと詳しく知りたい方は、まず [Unity Mars のドキュメント](https://docs.unity3d.com/Packages/com.unity.mars@latest?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954425431)をご覧ください。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
