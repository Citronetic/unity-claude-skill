[Image: image]

# レゴ® Mod：サンタをスクリプトで動かそう

Tutorial

intermediate

+0XP

40 mins

7

(16)

Unity Technologies

[Image: レゴ® Mod：サンタをスクリプトで動かそう]Summary

スクリプトを編集してレゴ® ミニフィグをアニメーション化する方法を学びましょう。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

レゴ® ミニフィグをたった 2、3 行のコードでアニメーション化する楽しい方法がたくさんあります。このクリエイティブ Mod では、Pickup Action スクリプトを編集してサンタのミニフィグがプレゼントを拾ったら回転するようにします。では始めましょう！

ステップを完了としてマーク

## 2. 始める前に

Q&A (0)

**エディター内チュートリアルを終える**

この Mod を始める前にレゴ® マイクロゲームのエディター内チュートリアルを終えておくとさらに学習効果が見込めます。まだ終えていない方は、まずはこのエディター内チュートリアルをチェックされることをおすすめします。

#### マイクロゲームを開く

レゴ® マイクロゲームを開くには、次のようにします。

**1.**  Unity Hub を開きます。

**2.**   マイクロゲームを使ったことがあるかどうかに従って、次のどちらかの手順を行ってください。

- すでにマイクロゲームを使用したことがある場合は、**Projects** タブで保存した Unity プロジェクトを選択してください。プロジェクトを選ぶと Unity エディターが開きます。これには数分かかることもあります。
- マイクロゲームを初めて使う方は、**Learn** タブで「LEGO® Microgame」を選択してください。指示に従って、エディター内チュートリアルを完了してください。

**アドオンパッケージ**

[Santa's Brickshop - LEGO® Microgame Add-Ons](https://assetstore.unity.com/packages/3d/santa-s-brickshop-lego-microgame-add-ons-183389) をダウンロードしてインストールしておいてください。

**補助資料**

**Visual Studio** がお使いのコンピューターにインストールされているかご確認ください。これはこのチュートリアルでスクリプトの編集に使うテキストエディタ―です。もしインストールされていない場合は、Unity Hub を開き、[こちらのチュートリアル](https://learn.unity.com/tutorial/get-started-with-scripts#5fa1c722edbc2a002191f051)の手順 3 に従って、インストールしてください。

ステップを完了としてマーク

## 3. Santa’s Brickshop を開く

Q&A (0)

[Santa's Brickshop - LEGO® Microgame Add-Ons](https://assetstore.unity.com/packages/3d/santa-s-brickshop-lego-microgame-add-ons-183389?_ga=2.105563905.320734402.1607319684-994701817.1602760772) のダウンロードが済んだら、まずは Unity エディターでこのアドオンを開きましょう。

Unity エディターの **Project** ウィンドウで、***Assets > AddOns > MgLEGO Santas Brickshop > Scenes*** と移動し、**Santas Brickshop** をダブルクリックします。

ステップを完了としてマーク

## 4. アニメーションをプレビューする

Q&A (0)

Santa’s Brickshop レゴ® アドオンには、サンタミニフィグを愉快に動かすためのさまざまなアニメーションが収録されています。Animation ウィンドウでプレビューしてみましょう。

**1.** 画面上部のメニューで、***Window > Animation > Animation*** と選択するか、**Ctrl / Cmd + 6** を入力して、Animation ウィンドウを開きます。このウィンドウは、さまざまなアニメーションを探したり、再生したりするために使います。

**2.** **Hierarchy**ウィンドウで、「Santa」とラベルが付いたミニフィグを選択します。Animation ウィンドウの最上部のバーに、**Jump_NoLanding_No_Y_Axis (Read-Only)**と表示されています。

[Image: image]

**3.** このタイトルの右側にあるドロップダウンの矢印マークをクリックして開き、すべての利用可能なアニメーションを確認します。

**4.** **Spin** を選んで、Animation ウィンドウで **Play** をクリックして、サンタがくるくる回るのを見てみましょう。これはこれからコードの書き方を学ぶアニメーションを先取りしてみていることになります。このアニメーションは、サンタがプレゼントを拾うたびに再生されます。

他のアニメーションもプレビューしてみましょう。「Read-only」の表示は、うっかりアニメーションのどこかを変更してしまうことがないということを示しています。

ステップを完了としてマーク

## 5. テスト用のシーンを準備する

Q&A (0)

現状では、サンタがプレゼントを拾う時に Mister Gingerbrick が襲ってくるようになっています。彼の存在がシーンのプレイテストを困難にしているので、しばらくの間無効化しておきましょう。

**1. ヒエラルキー**ウィンドウの**LEGO Models**の下にあるオプションを開き、**Mister Gingerbrick** を選択します。

**2. インスペクター**の一番上の、「Mister Gingerbrick」と表示されているテキスト領域の左側にあるチェックボックスをオフにします。

[Image: image]

次に、サンタが拾えるプレゼントを配置しましょう。緑のリボンのついたプレゼントはただの飾りです。

**拾える**プレゼントを追加しましょう。***Assets > AddOns > MgLEGO Santas Brickshop > Prefabs > LEGO Models > Pickups*** と移動して、**Present** とラベル付けされた拾えるアイテムをシーンにドラッグします。

[Image: image]ステップを完了としてマーク

## 6. PickupAction スクリプトのバックアップを作る

Q&A (0)

オリジナルのスクリプトに変更を加える前に、バックアップを作って、何か間違えた時に元のファイルにコピーアンドペーストして修復できるようにしておくのは良い考えです。

**1.** コンピューター上のレゴ® プロジェクトの外に、**Backups** という名前のフォルダーを作ります。

**2.** Unity で、 ***Assets > LEGO > Scripts > LEGO Behaviours** と移動して、*PickupAction という名前のスクリプトを見つけます。

**3.** PickupAction を右クリックして、**Show in Explorer / Reveal in Finder**を選びます。

**4.**PickupAction.cs ファイルを **Cmd / Ctrl + C**でコピーして、**Cmd / Ctrl + V** で Backups フォルダーの中に貼り付けます。

ステップを完了としてマーク

## 7. PickupAction スクリプトをレビューする

Q&A (0)

PickupAction スクリプトを詳しく見ていき、拾えるアイテムにどのように影響を与えるかを理解しましょう。

**1.** **LEGO Behaviours**フォルダーにあるオリジナルの PickupAction スクリプトをダブルクリックして、Visual Studio で開きます。

[Image: image]

**2.** Visual Studio で、検索（**Cmd / Ctrl + F**）または下にスクロールしていって、**protected override void Start()**を探します。

これは **Start メソッド**で、スクリプトと、そのスクリプトがアタッチされているゲームオブジェクトがシーンに読み込まれた時に実行される一連の命令が記述されています。Start 関数についての詳細は Unity のドキュメンテーションの[こちらのページ](https://docs.unity3d.com/ja/current/ScriptReference/MonoBehaviour.Start.html)をご覧ください。

**3.** 検索（**Cmd / Ctrl + F**）または下にスクロールして、**protected void Update()**を見つけます。

Start メソッドと同じく、**Update メソッド**もすべての Unity スクリプトにデフォルトで含まれています。このメソッドは毎フレーム実行されるので、ミニフィグが拾えるアイテムに衝突したか（接触できる範囲に入ったか）などの更新を常にチェックするために使うことができます。Update 関数の詳細は、Unity のドキュメンテーションの[こちらのページ](https://docs.unity3d.com/ja/current/ScriptReference/MonoBehaviour.Update.html)をご覧ください。

Update メソッドに「if」文があるのに注意してください。もし関数の Collider の数が 0 より大きければ、この部分からビジュアルエフェクトがトリガーされ、音声が再生され、そして拾えるアイテムが消されます。

サンタがプレゼントを拾った時にアニメーションするようにしたいので、**Update メソッド**にアニメーションをトリガーするコードを追加するということになります。

ステップを完了としてマーク

## 8. アニメーションコードを追加する

Q&A (0)

レゴ® ミニフィグに関連するコードの大半は、特定の**名前空間**の下にまとめられています。名前空間は、混同を避けるために名前空間付きで名前が付けられたコードを「予約する」ものです。私たちの新しいコードが、スクリプトの残りの部分で必要なものにアクセスできるようにするには、スクリプトに Minifig 名前空間を追加する必要があります。

**1.** PickupAction スクリプトの 5 行目に、次のコードを追加します。

```csharp
using Unity.LEGO.Minifig;
```

**2.**153 行目付近までスクロールして、次のコードを探してください。

```csharp
(m_ActiveColliders.Count > 0)
```

**`3`.**この行の下で、キーボードの**Enter / Return キー**を押して空行を 1、2 行追加し、以下のコードをその空行のところにコピーして貼り付けます。

```csharp
//Find the minifig
                    	var minifigController = FindObjectOfType<MinifigController>();

                    	if (minifigController)
                    	{
                            //Disable player input to the Minifig so that its animation won't be interrupted
                            minifigController.SetInputEnabled(false);

                            //Play the Minifig animation
                            minifigController.PlaySpecialAnimation(MinifigController.SpecialAnimation.Spin, null, EnableMinifigInput);

                            //Re-enable player input to the Minifig

                        	void EnableMinifigInput(bool b)
                            	{
                                    minifigController.SetInputEnabled(true);
                            	}

                    	}
```

**4.**上記のコードを貼り付けたら、**Ctrl / Cmd + K + D**を使って、スクリプトの残りのコードに対して整列させます。

**注：**// で始まる行はすべてコメントです。これは、コードの詳細を理解するために役立ちます。コードの実行時は、コメントは無視されます。

ステップを完了としてマーク

## 9. アニメーションの再生テストを行う

Q&A (0)

コードを追加したので、**Ctrl / Cmd + S**を使ってテキストエディターでこれを保存し、Unity に戻ります。Unity がプロジェクトをコードを使って更新している間、読み込みバーが表示されることがあります。

再生ボタンを選択して、**再生モード**に入りましょう。サンタのミニフィグにプレゼントを拾わせて、拾うと回転することを確認してください。

おめでとうございます！これでこのレゴ® Mod の基本はおしまいです。スクリプトを編集してレゴ® ミニフィグをアニメーション化する方法も学びました。もっと他に楽しいことをやってみたい方は、次のステップに進んでください。

ステップを完了としてマーク

## 10. 他のアニメーションを試してみる

Q&A (0)

**1.** Hierarchy ウィンドウで、Santa Minifig を選択します。

**2.** インスペクターで、「**Minifig Controller (Script)**」とスクリプト名の書いてある部分をダブルクリックします。この操作によって、**MinifigController.cs**スクリプトが開きます。このスクリプトは見るだけなので、内容を変更しないように気を付けてください。

[Image: image]

**3.** 検索（**Cmd / Ctrl + F**）または下にスクロールしていって、**public enum SpecialAnimation**を見つけ、使えるアニメーションをすべて参照します。興味のあるものを 1 つ見つけて、その名前（例：「Dance」）を記録しておきます。

**4.**元々再生されていた Spin アニメーションから変更するには、先ほど編集した PickupAction スクリプトに戻り、追加したコードの「Spin」を、先ほど名前を記録したアニメーションの名前（例では「Dance」）に置き換えます。保存して、プレイテストしてみましょう。

ステップを完了としてマーク

## 11. もっと改造したい人へ

Q&A (0)

現在、このレゴ® アドオンには 1 種類のミニフィグしかありません。私たちのコードは、複数のミニフィグを追加したとしても、プレゼントを拾った 1 体だけがアニメーションを再生するようになっています。シーンに配置されているミニフィグならどれでもアニメーションを再生することができます。

**MinifigController**のリストを作り、リスト中のすべての要素に対してコードを実行して、シーン中のすべてのミニフィグにアニメーションを再生させることができるでしょうか。その他にも、プレゼントを拾ったミニフィグだけにアニメーションを再生させるようにすることもできるでしょう。

#### 次のステップ

- 他の[**レゴ® マイクロゲームクリエイティブ Mod**](https://learn.unity.com/project/lego-template) を参照して、マイクロゲームを隅々までカスタマイズしてみましょう。
- [**Unity Essentials**](https://learn.unity.com/pathway/unity-essentials) ラーニングパスウェイを使って Unity についてさらに詳しく学び、クリエイターになるための学びを今後も続けていきましょう。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
