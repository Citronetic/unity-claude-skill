[Image: image]

# 時刻ビューアーの作成

Tutorial

intermediate

+10XP

25 mins

0

Unity Technologies

[Image: 時刻ビューアーの作成]Summary

Reflect Viewer では、ゲームシーンで定義された標準スカイボックスを使用します。デフォルトのスカイボックスマテリアルでは、メインのディレクショナルライトを太陽として使用します。ライトの位置を移動させると、空が更新されて時間が反映されます。Playable Director コンポーネントを使ってメインライトの動きをアニメーション化することで、スライダー UI コンポーネントと同期するスクリプトを使って動きを制御することができます。

また、本チュートリアルでは、Reflect メニューシステムの一部であり、ユーザーインターフェースシステム内で期待通りの動作をするボタン（スライダー）を作成する方法についても説明します。

Resources

- [CreatingaTimeofDayView_Resources.zip](https://unity-connect-prd.storage.googleapis.com/20200527/5f550c43-087f-4fc1-a67c-6ecc51adae92/CreatingaTimeofDayView_Resources.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954298364)
- [CreatingaTimeofDayViewer_Complete.zip](https://unity-connect-prd.storage.googleapis.com/20200527/e18a3c87-d4c9-4189-bf7a-159810bbd6b6/CreatingaTimeofDayViewer_Complete.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954298364)

Languages available:

日本語English日本語日本語

## 1. はじめに

Q&A (0)

Reflect Viewer では、ゲームシーンで定義された標準スカイボックスを使用します。デフォルトのスカイボックスマテリアルでは、メインのディレクショナルライトを太陽として使用します。ライトの位置を移動させると、空が更新されて時刻が反映されます。Playable Director コンポーネントを使ってメインライトの動きをアニメーション化することで、Slider UI コンポーネントと同期するスクリプトを使って動きを制御することができます。

また、本チュートリアルでは、Reflect メニューシステムの一部であり、ユーザーインターフェースシステム内で期待通りの動作をするボタン（スライダー）を作成する方法についても説明します。

このチュートリアルでは、次のものが必要です：

- Package Manager を用いてインストールした Reflect パッケージ
- Unity エディターの Pro ライセンス
- Unity のカスタムパッケージ：TimeOfDayViewer.unitypackage

ステップを完了としてマーク

## 2. ボタンの作成

Q&A (0)

**1.**Package Manager から Reflect Package をインストールし、TimeOfDayViewer.unitypackage をインポートしてプロジェクトを設定します。

**2.**Reflect Runtime フォルダーから**Reflect Viewer プレハブ**を Scene Hierarchy にドラッグします。

**3.**Viewer を Assets フォルダーにドラッグしてプレハブに変えます (**画像** **01**)。

[Image: image]

**4.** Hierarchy ウィンドウの右側にある矢印をクリックして **Reflect Viewer プレハブ**を開きます (**画像** **02**)。

[Image: image]

**5.**  Canvas 要素を展開し、**Settings Canvas** を右クリックします。**Duplicate**を選択してコピーを作成します****(**画像** **03**)。

[Image: image]

**6.**新しい Canvas 要素の名前を*Daylight Canvas* に変更します (**画像** **04**)。

[Image: image]

**7.** この Canvas 要素を Settings Canvas の下の新しい位置にドラッグします。新しいメニューアイテムの位置は、実行時にメニュースクリプトが処理しますが、現在のところ、Hiearchy の一番下に新しいメニューアイテムを作成すると、実行時に画面外に表示されてしまいます。新しい位置に置くことで、その問題を解決することができます (**画像** **05**)。

[Image: image]

**8.** 次に、プレハブを解凍する必要があります。これにより、プレハブ内のネストされた要素を削除することができます。**Daylight Canvas プレハブ**要素を右クリックし、**Unpack Prefab** を選択します (**画像** **06**)。

[Image: image]

**9.** Daylight Canvas を展開し、UI の下で右クリックして **Delete**を選択し、ButtonListControl 要素を削除します。この要素は、Settings Canvas の名残であり、使用することはありません (**画像** **07**)。

[Image: image]

**10.** **Assets > Prefabs** の下に、SunControlPanel というプレハブがあります。これは、チュートリアルのリソースをインポートしたときにインストールされたものです。このプレハブは、標準 UI パネルとスライダーで構成されており、太陽の制御要素となります。このプレハブを Daylight Canvas の UI 要素の下にドラッグします (**画像** **08**)。

[Image: image]

**11.** 次に、この新しいボタンの動作を制御するスクリプトを準備する必要があります。現在適用されているのは、やはり Settings Canvas を制御するスクリプトです。これを削除してから、Reflect パッケージに付属の汎用スクリプトを使用する必要があります。**Daylight Canvas** を選択し、Inspector で **Settings Top Menu (Script)** コンポーネントを削除します (**画像** **09**)。

[Image: image]

**12.**Inspector で **Add Component**ボタンを選択し、**Top Menu** スクリプトコンポーネントを追加します (**画像** **10**)。

[Image: image]

**13.** Hierarchy の Daylight Canvas **Button**、**Button Background**、**UI** 要素を Script コンポーネントの対応するスロットにドラッグします (**画像** **11**)。

[Image: image]

**14.** 次に、ボタンが選択されたときに、他のボタンが消えたり、再び現れたりする機能を追加する必要があります。Daylight Canvas の **Mask** 要素を選択します (**画像** **12**)。

[Image: image]

**15.** Inspector で、Daylight Canvas 要素を**On Click () イベント**にドラッグします(**画像** **13**)。

[Image: image]

**16.** 関数のドロップダウンを選択し、**TopMenu > Deactivate()** 関数に変更します。このドロップダウンには、OnClick() イベントスロットにドラッグされた要素に適用されたスクリプトの関数がすべて表示されます。それを選択することで、ボタンが選択されたときにそのスクリプトのどの関数が実行されるかを指定します (**画像 14**)。

[Image: image]

**17.** 別のイベントを追加するには、**+** マークをクリックしてください (**画像** **15**)。

[Image: image]

**18.** ステップ 13 のプロセスを繰り返し、今度は**OnClick()** 関数を選択します (**画像** **16**)。

[Image: image]

**19.** ここで、新しい Daylight Canvas ボタンの画像を設定するには、**Button**要素を選択し、Inspector で Source Image を **sunControls**に変更します (**画像** **17**)。

[Image: image]

**20.** Button 要素が選択されたままの状態で、Daylight Canvas を **On Click()**イベントスロットにドラッグし、起動する関数を **TopMenu > OnClick**に変更します (**画像** **18**)。

[Image: image]

これで、このチュートリアルのユーザーインターフェース要素の設定はすべて終了です。次は、シーンの中で太陽の動きを制御するプレハブやスクリプトを追加します。

ステップを完了としてマーク

## 3. SunControls 機能の追加

Q&A (0)

**Assets > Prefabs** フォルダーから SunControls プレハブを Scene Hierarchy のルートにドラッグします。このプレハブには、太陽として機能するアニメーション化したディレクショナルライトと、スライダーからの入力を受けてライトのアニメーションに変換するスクリプトが含まれています (**画像** **19**)。

[Image: image]

次のステップは、スクリプトとスライダーをリンクさせることです。**Reflect > Canvas > Daylight Canvas > UI > SunControlPanel**の順に進み Slider 要素を選択します。Inspector で、Slider コンポーネントを見つけます。SunControls 要素を On Value Changed スロットにドラッグします (**画像** **20**)。

[Image: image]

スライダーが **Time** 関数に移動したときに起動する関数の変更 (**画像** **20**)。

[Image: image]

プロジェクトを実行し、新しい **Daylight Canvas** ボタンを選択します。スライダーが表示され、スライダーボタンを動かすと、太陽が空を横切って移動し、移動に合わせてスカイボックスが更新され、関連する環境光の状態を反映します (**画像** **22**)。

[Image: image]ステップを完了としてマーク

## 4. スクリプトの理解

Q&A (0)

このプロジェクトで使用したスクリプトは、クリックイベントを受け取り、ユーザーが定義した 2 つのマテリアルを切り替えるという非常にシンプルなものです。

[Image: image]

このスクリプトは、まず適用されるゲーム要素に Playable Director コンポーネント (**1**) があることを確認します。その後、関連する Playable Director コンポーネント (**2**) にアクセスし、最後に (**3**) スライダの値が変更されると、スクリプトの更新を開始します。このスクリプトは、スライダーの「time (時間)」の値を求めて、Playable Director のタイムラインの位置を同等の位置に設定します。

ステップを完了としてマーク

## 5. 次のステップ

Q&A (0)

このチュートリアルでは、Reflect Viewer で独自のボタンやインタラクションを作成する方法と、空をアニメーション化する方法について説明しました。これにより、Viewer に独自のカスタムメニューシステムを作成したり、スクリプトでアニメーションオブジェクトのタイムラインを制御したりすることが可能になりました。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
