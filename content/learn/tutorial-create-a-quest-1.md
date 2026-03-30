[Image: image]

# クエストの作成

Tutorial

Beginner

+0XP

10 mins

0

(103)

Unity Technologies

[Image: クエストの作成]Summary

NPC に話しかけるのもいいですが、プレイヤーにクエストを与えたり、クエストが成功したときにアイテムを報酬として与えたりするのにも非常に便利な方法です。

このチュートリアルでは、以下のことを行います：

- 新しい NPC にクエストを追加
- クエスト進行中に NPC が発言するための会話スクリプトアイテムの作成
- クエストで集めなければならないインベントリアイテムを作成する
- クエストを NPC ダイアログの特定の分岐に接続する
- クエストを完了したときにプレイヤーに与えられる報酬を作成する

Languages available:

日本語English日本語한국어简体中文日本語

## 1. NPC にクエストを追加

Q&A (0)

まずは、NPC に新しいクエストを追加してみましょう：

**1.**Hierarchy で、NPC GameObject を選択します。

**2.**  右クリックして、コンテキストメニューから **Create Empty** を選択します。これで子の GameObject が作成されます。

**3.**新しい GameObject を右クリックして **Rename** を選択します。この GameObject を**Quest**と呼びます。

この GameObject は、クエストを整理するのに役立ちます。

**4.**Inspector で、**Add Component**をクリックします。

**5.  Quest**スクリプトのコンポーネントを検索して追加します。

[Image: image]

**6.  Title** フィールドで、スクリプトに「**Apple Quest**」という名前を付けます。

**7.  Desc** フィールドでは、クエストの簡単な説明を追加します：

 「**Fetch an apple for the archer**」

[Image: image]ステップを完了としてマーク

## 2. クエスト用 NPC の Conversation スクリプトの会話項目を作成する

Q&A (0)

進行中であるか、プレイヤーが完成基準を満たしているかによりますが、これで特定の NPC の会話をクエストに関連付けることができるようになりました。クエストの途中であれば、プレイヤーに何をしなければならないのかを思い出させてくれる効果があります。

クエスト固有の Conversation スクリプトの会話項目を追加するには：

**1.**Hierarchy で、**Quest**GameObject が選択されていることを確認してください。

**2.**Inspector で、**Add Component**ボタンをクリックします。Conversation Script コンポーネントを検索し、Quest に追加します。

**3.** Conversation Script では、Conversation スクリプトの会話内容を 1 つ追加します（最初の会話を設定したときの手順に従います）：

**ID:**1.1.1
**Text:**Please, fetch me an apple.

**4.**もう一度 **Add Component**ボタンを選択します。検索バーに **Conversation Script** と入力し、Quest に 2 つ目の Conversation Script コンポーネントを追加します。

**5.**2 つ目の Conversation Script コンポーネントでは、もう 1 つの Conversation スクリプトの会話項目を追加します。

**ID:**1.1.2
**Text:**Thank you for the tasty apple.

[Image: image]

**ヒント：**すべての会話項目の ID は各 Conversation Script コンポーネント内で一意でなければなりませんが、それ以外の場合は自分にとって最も意味のある ID を割り当てることができます。

**6.**最初の Conversation Script コンポーネントのヘッダーをクリックして、**Quest In Progress Conversation**フィールドにドラッグします。これは、プレイヤーキャラクターが必要なアイテムを持たずに NPC に戻った場合に表示される会話を割り当てます。

[Image: image]

**7.**2 つ目の Conversation Script コンポーネントのヘッダーをクリックして、Quest コンポーネントの**Quest Completed Conversation**フィールドへドラッグします。これにより、プレイヤーが必要なアイテムをインベントリに入れた状態で NPC に戻った際に表示される会話が割り当てられます。

**8.** 変更内容を保存します。

ステップを完了としてマーク

## 3. クエストのインベントリアイテムを作成する

Q&A (0)

次に、用意したクエストのインベントリアイテムを作成します：

**1.**Scene ビューで、インベントリアイテムを追加したい場所を右クリックします。

**2.**表示されたコンテキストメニューで、**Gameplay Prefabs > Add InventoryItem Here** の順に選択します。 インベントリアイテムのゲームオブジェクトがその場所に表示されます。

[Image: image]

**3.**Hierarchy で、新しい GameObject を右クリックして、名前の変更を選択します。この ゲームオブジェクトを「**Golden Apple**」と呼びます。インベントリアイテムのゲームオブジェクトの名前は、クエストが完了したかどうかを判別するためのものであり、非常に重要です。

**4.**Inspector で、**Inventory Item** コンポーネントを見つけます。これを使って、1 つのゲームオブジェクトに異なる数のインベントリアイテムを関連付けることができます。

[Image: image]

**Count**パラメーターを**3**に変更します。このアイテムを拾うと、プレイヤーキャラクターのインベントリに 3 個の Golden Apples が入るようになりました。

**ヒント：**今後のクエストでクエストアイテムを変更したい場合は、**Sprite** フィールドで別の Sprite Asset を選択することができます。

ステップを完了としてマーク

## 4. Quest スクリプトに Golden Apple を追加する

Q&A (0)

インベントリアイテムを作成したので、これを NPC のクエストにつなげていきましょう：

**1.**Hierarchy で、Quest GameObject（NPC ゲームオブジェクトの子）を選択します。

**2.**Inspector で、グレーの矢印をクリックして、**Enable on Quest Start** を展開します。

[Image: image]

**3.  Size**パラメータを **1**に設定します; **Element 0**という名前の新しいフィールドが下に表示されます。

**4.**Golden Apple GameObject を Hierarchy から **Element 0**フィールドにドラッグします。

[Image: image]

Golden Apple のゲームオブジェクトは、プレイヤーが関連する NPC ダイアログオプションを選択してクエストを開始した場合にのみゲーム内に表示されるようになりました。

**5.**次に、**Required Items**セクションを展開し、Size パラメータを**1**に設定します。**Element 0**という名前の新しいセクションがその下に表示されます。

**6.**Golden Apple の GameObject を Hierarchy から Element 0 セクションの**Item**フィールドにドラッグします。

**7.  Count**フィールドを**1**に設定します。 これは、クエストを成功させるためにプレイヤーのインベントリに必要なアイテムの数です。

ステップを完了としてマーク

## 5. Quest スクリプトと NPC の Conversation スクリプト項目をつなげる

Q&A (0)

これで、クエストの設定が完了したので、NPC の会話のブランチに関連付けることができます。プレイヤーが選択した Conversation スクリプトの会話項目をトリガーとする返事を選択すると、クエストが起動します。

この場合、プレイヤーキャラクターが NPC に挨拶をしたり、褒めたりすると Golden Apple のクエストが起動します：

**1.**Hierarchy で、**NPC** GameObject を選択します。

**2.** Inspector で、**Conversation Script**コンポーネントを探します。編集のために **Conversation Script Item 1.1**（「Why thank you! Please will you get me an apple?」）を開きます。

**3.** Hierarchy から Quest GameObject を**Quest (Optional)**フィールドにドラッグします。これにより、この会話の選択肢にクエストが割り当てられます。

[Image: image]

**4.  Update**をクリックします。

**5.**再生モードに入り、変更点をテストしてください。Golden Apple クエストは、関連する NPC の会話オプションを選択すると開始されます。

**ヒント：**クエストは、NPC の会話ツリーの最初の Conversation スクリプトの項目ではなく、NPC の会話ブランチに割り当てる必要があります。これにより、1つの NPC の会話ツリー内でプレイヤーのために複数のクエストを追加することができるようになります。

ステップを完了としてマーク

## 6. クエストクリア時の報酬を追加する

Q&A (0)

プレイヤーは NPC からのクエストを成功させることができるようになりました。しかし、報酬のないクエストでどれだけの人がやる気になるのでしょうか？

クエストに報酬を追加するには：

**1.**Scene ビューで、NPC の横を右クリックします。

**2.**表示されたコンテキストメニューで、**Gameplay Prefabs > Add InventoryItem Here** の順に選択します。Inventory Item の GameObject がその場所に表示されます。インベントリアイテムに使われるデフォルトのスプライトは Golden Apple です。 プレイヤーに別の報酬を与えましょう。鶏はどう？

**3.** Inspector で、**Inventory Item コンポーネントを見つけます。Sprite**フィールドの右側にある丸い選択ボタンをクリックして、**_Chicken**という名前の Sprite を選択します。

[Image: image]

**4.** Inspector で、**Animator**コンポーネントのヘッダーにあるチェックボックスを有効にします。これで鶏がアニメーションします。

[Image: image]

**5.** Hierarchy で、報酬アイテム GameObject を右クリックして **Rename** を選択します。**Chicken**と呼びます。

**6.**Hierarchy で、**Quest**GameObject を選択します。**Reward Items** セクションを展開します。

**7.   Size**パラメータを**1 に**設定します;**Element 0**という名前の新しいフィールドが下に表示されます。

**8.**Hierarchy から Chicken GameObject を **Element 0**フィールドにドラッグします。

**9.** Hierarchy で、**Chicken** GameObject を選択します。Inspector で、Chicken GameObject ヘッダーのチェックボックスを無効にします。

[Image: image]

これにより Chicken GameObject が非アクティブになり、報酬として提供される前にプレイヤーが Chicken ゲームオブジェクトを収集するのを停止します。

**10.**シーンを保存します。

これで、再生モードに入って、あなたのゲームに加えた変更をテストしましょう！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
