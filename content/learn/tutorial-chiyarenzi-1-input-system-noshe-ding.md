[Image: image]

# チャレンジ 1：Input System の設定

Tutorial

Beginner

+0XP

20 mins

0

Unity Technologies

[Image: チャレンジ 1：Input System の設定]Summary

本チュートリアルでは、Input System を設定し、最初の入力とそれに対応する C# スクリプトを作成します。

必ず下記のプロジェクトマテリアルをダウンロードし、New Unity プロジェクトにインポートしてから開始してください。

Resources

- [Live Session - InputSystemAssets.zip](https://unity-connect-prd.storage.googleapis.com/20201208/fa2c25ce-09eb-4066-aeea-8acce5d3c8d8/Live%20Session%20-%20InputSystemAssets.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952724121)

Languages available:

日本語English日本語日本語

## 1. Input System のセットアップと設定

Q&A (0)

まず最初に、Postprocessing Version 2.0.3 がインストールされていることを確認してください。

1. Package Manager (**Window > Package Manager**) を使って、Post Processing パッケージを 2.3.0 にアップデートします。

[Image: image]

2. Package Manager (**Window > Package Manager**) から Input System をダウンロードします。

[Image: image]

3. プロジェクト設定を開き、**Player > Other > Active Input Handling** の順にクリックし、「Both」に設定することで、新しい入力システムを使用するようにプロジェクト設定が切り替わっていることを確認してください（注：この変更を行った後、エディターが再起動することがあります）。

[Image: image]

4. 新しい Input Actions Asset を作成し、名前を「Primary Input Actions」とします。

[Image: image]

5. アセットをダブルクリックすると、Input ウィンドウで開き、エディターの下部にドッキング（クイックアクセス用）されます。

[Image: image]

6. Action Maps の横にある「+」ボタンをクリックして、新しいアクションマップを追加し、名前を「Gamplay」とします。

[Image: image]

7. デフォルトの Action が作成されているので「Next Vehicle」に名前を変更してください。

[Image: image]

8. Next Vehicle の下にある Binding を選択し、キーボードの**K**キーに設定します。

[Image: image]

9. 「Reset Vehicle」という新しいアクションを作成し、「Reset Vehicle」のバインディングを追加して、キーボードの**R** キーに設定します：

[Image: image]

10. Input actions ウィンドウの上部にある **Save Asset** をクリックして、アセットを保存します。

[Image: image]

11. 「Main Camera」(**Cameras > Main Camera**) ゲームオブジェクトにアタッチされている CarSwitcher.cs C# コンポーネントを開きます。

[Image: image]

12. スクリプトの先頭に Input System の using 文を追加し、以下の変数宣言を行います：

[Image: image]

13. Awake メソッドに以下のロジックを追加し、Next Vehicle と Reset Vehicle の入力を設定します。

[Image: image]

14. Unity エディターに戻る前に、以下の OnEnable と OnDisable のメソッドを追加して設定します：

[Image: image]

15. 非推奨の Update メソッドはもう必要ありませんので、先に削除してください。

[Image: image]

16. エディターでは、Car Switcher コンポーネントの Input Actions への参照を設定します。

[Image: image]

17. Play モードに入り、**K**キーで車両間の移動、**R** キーで車両のリセットができることを確認します。

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
