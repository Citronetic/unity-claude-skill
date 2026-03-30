[Image: image]

# 敵

Tutorial

Beginner

+0XP

60 mins

0

(43)

Unity Technologies

[Image: 敵]Summary

3D ゲームキット ライトには、あらかじめ作られた敵が2体収録されています。**Chomper** と **Spitter**です。これらはすべて **Enemy Controller**コンポーネントによって制御され、それぞれに特定の動作（**ChomperBehavior**と**SpitterBehavior**）が付いています。

Languages available:

日本語English日本語简体中文日本語

## 1. 敵との出会い

Q&A (0)

### Chomper

[Image: image]

**Chomper**は、**エレン**を感知すると**エレン**に向かって走り、近づくと攻撃する近距離型の敵です。

その上にある **Chomper Behaviour** コンポーネントでは、その動作を微調整するためにいくつかの設定を変更することができます。

- **Player Scanner** セクションでは、この敵がどのようにプレイヤーを検出するか (距離、角度など) を変更することができます (次のセクションの「共通設定」を参照してください)
- 追跡停止時間 (**Time To Stop Pursuit**) の設定 は、**エレン**が **Chomper**の視界から消えて、 **Chomper**が追跡を諦めて元の場所に戻るまでの時間を秒単位で設定します。

### Spitter

[Image: image]

**Spitter** はエレンを発見すると、**エレン**に向かって爆発する酸の唾を発射する遠距離型の敵です。エレンが近づくと、**Spitter**は逃げようとします。

**Chomper**と同様に、**Spitter Behaviour**と呼ばれる特定のコンポーネントを使用して、その動作を微調整することができます。

- **Player Scanner** セクションでは、**Spitter** が**エレン**を参照する方法とタイミングを調整することができます（次のセクションの「共通設定」を参照してください）。
- **Flee Distance(逃げる距離):** **エレン**がこの距離より近づくと **Spitter** は逃げ、**エレン**から十分に離れたら逃げるのを止めて攻撃を再開します。

ステップを完了としてマーク

## 2. 共通設定

Q&A (0)

すべての敵の行動に **Player Scanner** プロパティがあり、これを使って**エレン**を検出する方法を設定することができます。

[Image: image]

設定の説明は、TargetScanner のドキュメントを参照してください。

また、すべてのオブジェクトには **Damageable** コンポーネントがあり、体力の量やダメージの与え方を定義しています。**Damageable** コンポーネントはゲームオブジェクトのルートにあり、**Behaviour** コンポーネントの隣にあります。

[Image: image]

#### シーンビューギズモ

敵のゲームオブジェクトを選択すると、シーンビューで設定の一部を視覚化することができます。

[Image: image]

- **青色の円**は、**Player Scanner**の **Detection Radius(検出半径)** と **Detection Angle(検出角度 )**を表しています。敵はエレンがその円の中を歩いた場合のみ検出します。
- **黄色い球体**は、**Player Scanner**の **Height Offset (高さのオフセット)**（スキャナーの「目」があるところ）です。敵は、これと**エレン**の間の視線を遮るものが何もない場合にのみ**エレン**を検出します。
- **赤色の円**がダメージを与えることができる命中角です。**エレン**はこの範囲内で敵にヒットした場合のみダメージを与えることができます。

ステップを完了としてマーク

## 3. Chomper の追加

Q&A (0)

シーンに **Chomper** を加えてみましょう。

- **Assets > 3DGamekitLite > Prefabs > Characters > Enemies > Chomper**に移動します。
- **Chomper**プレハブをシーンにドラッグします。
- **Chomper**を**エレン**の近くに置いて、すぐにテストできるようにしておきましょう。

[Image: image]

**Chomper**の **Detection Radius**(シーンビューの青い丸で示された、彼が見える範囲) は現在非常に大きくなっています。この範囲内をエレンが歩くと、**Chomper**はエレンを攻撃します。この設定を調整してみましょう。

- **ヒエラルキー**ウィンドウで **Chomper** を選択し、**インスペクタ－**ウィンドウに移動します。
- インスペクターウィンドウで、**Chomper Behaviour** コンポーネントを探します。
- **Detection Radius** (検出半径)を 4 に設定します。

[Image: image]

- **Play**ボタンを押してください。**Chomper**に向かって走り、その検出範囲に入ってください。

**Detection Radius**に入ると、**Chomper** は**エレン**を検出して攻撃行動を開始します。しかし、その場で走っていて動けない状態になっています。

[Image: image]

これは、**Chomper**の AI がどの面を歩けるかをまだ把握していないためです。この設定にはUnityの[NavMesh](https://docs.unity3d.com/Manual/nav-NavigationSystem.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954791456)システムを使用します。Unity は [NavMesh Agent](https://docs.unity3d.com/Manual/class-NavMeshAgent.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954791456) コンポーネントで **Chomper**の AI を処理します。このコンポーネントは、**Chomper**が歩ける面を管理します。また、NavMesh Agentはシーン内をナビゲートしつつ、障害物や他の **Chomper**や **Spitter**を避けることができるかどうかも管理します。

[Image: image]

これらの設定は変更する必要はありません。**Chomper** をはじめとする敵は、すでに特定の挙動やナビゲーションをするように設定されています。

敵が地面を歩けるように設定するには、[NavMesh Surface](https://docs.unity3d.com/Manual/class-NavMeshSurface.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954791456) を追加する必要があります。

- **ヒエラルキー**ウィンドウで、**Plane**（地面を表すゲームオブジェクト）を選択します。

[Image: image]

- **インスペクター**ウィンドウの下部で、**Add Component**を選択します。
- **NavMeshSurface**を検索します。
- **NavMeshSurface**を選択して、**Plane**に追加します。

[Image: image]

- **Nav Mesh Surface** コンポーネントで、**Agent Type**を **Chomper**に設定します。

[Image: image]

これは、その上を歩くことができるエージェントの種類を決めます。

**注意**：このリストには **Chomper** のみが登場し、**Spitter** は登場しません。というのも、敵のタイプはどちらも **Chomper** のエージェント設定を使用するからです。

- **Include Layers**を **Nothing**に設定します。これは選択範囲からすべてのレイヤーを消去します。

[Image: image]

- **Include Layers**を **Environment**に設定します。

[Image: image]

これは、多くのレイヤーの選択を解除し、好みの物を再選択するための手っ取り早い方法です。

- **Bake**ボタンを選択します。

[Image: image]

これで、シーンに **NavMesh** を焼き付け、ほとんどの面を敵が歩けるようになります。シーンビューでは、**NavMesh Surface**が水色でハイライトされ、敵が歩けるエリアが表示されます。

[Image: image]

**NavMesh Surface**に隙間がある場合、敵はその部分を歩くことができません。例えば、敵は酸の池の中を歩くことができません。

[Image: image]

**NavMesh Surface**はゲームオブジェクトの周りに隙間を設けます。これにより、敵は設定したゲームオブジェクトの中を歩くことができません。

**Chomper**をテストするには、**Play**を押してください。今、あなたは **Chomper**まで走ることができ、一方、**Chomper**はあなたに向かって走って攻撃することができます。もし、あなたが **Chomper**から逃げると、その **NavMeshAgent**は **NavMesh Surface**を使用してあなたを世界中のどこにいても追いかけてきます。

シーン内に **Chomper**などの敵を追加した場合、同じ **NavMesh Surface**を使用します。したがって、新たに敵を追加した場合は、これらの作業を繰り返す必要はありません。

シーンにゲームオブジェクトを追加または移動するときは、**NavMesh Surface**を再ベイクする必要があります。これを行うには、**Plane**を選択し、**NavMesh Surface**コンポーネントに移動し、**Bake**を選択します。

ステップを完了としてマーク

## 4. Spitter の追加

Q&A (0)

- **Spitter**プレハブを追加するには、**3DGamekitLite > Prefabs > Characters > Enemies**の順に移動し、**Spitter**をシーンにドラッグします。

**インスペクター**のウィンドウでは、**Spitter** は**Chomper**に似ています。

[Image: image]

**Spitter** は **Ellen** に近づきすぎると逃げ出す遠距離型の敵です。**Spitter** は **Fleeing Distance (逃げる距離)** プロパティを使用して、逃げる前に**エレン**にどれだけ近づく必要があるかを判断します。そして**Range Weapon (レンジ武器)** を使用して**エレン**に酸を発射する。

**ヒント:**

**Spitter** *が**エレン**から逃げる行動だけにしたい場合は、**Fleeing Distance (逃げる距離)**を **Detection Radius (検出半径)**よりも大きく設定してください。*

**Spitters** を**エレン**からかなり離れた場所に配置すると、攻撃の機会が増えてエレンにとって脅威となります。**Spitters** に環境を考慮させたい場合は、**Spitters** の動作コンポーネントを見て、**View Blocker Layer Mask**を **DoNotDraw** から **Environment**に変更してください。

[Image: image]

追加した後、シーンを再生して挙動を確認してください。思うような挙動になるまで、**Detection Radius**と **Fleeing Distance**の値を変えて実験してみてください。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
