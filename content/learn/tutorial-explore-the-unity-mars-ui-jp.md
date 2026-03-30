[Image: image]

# Unity Mars UI の探索

Tutorial

intermediate

+10XP

20 mins

0

Unity Technologies

[Image: Unity Mars UI の探索]Summary

このチュートリアルでは、Unity Mars のインターフェースの主要な各機能と、Unity エディターのウィンドウをどのように配置して、Unity Mars での制作を開始するかを学びます。

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

Unity Mars をプロジェクトにインストールすると、Unity エディターのインターフェースで、さまざまなウィンドウやメニューが利用可能になります。このチュートリアルでは、Unity Mars の主要な機能について説明します：

- MARS Panel
- Simulation View と Device View
- Proxy Rule Set View

また、その際に Unity Mars の主要なコンセプトも探っていただきます。

チュートリアルの最後には、AR アプリケーションの作成を開始する準備ができています。

ステップを完了としてマーク

## 2. MARS Panel を開く

Q&A (0)

**MARS Panel** は、Unity エディターですべての Unity Mars 機能にアクセスするための重要なエントリーポイントです。このパネルを使って AR オブジェクトを作成し、ショートカットやプリセットにアクセスし、シーンで起こっていることの概要を確認します。Unity エディターのレイアウトを調整することで、MARS Panel や他の Unity Mars ウィンドウを使ったスムーズなワークフローを確立することが容易になります。

以下の手順で、MARS Panel にUnity エディターを設定します：

**1.**  Unity エディターウィンドウの右上で、ドロップダウンを使用して **Layout** を**Tall**に設定します。

[Image: image]

**2.**  メインメニューで、**Window > MARS > MARS Panel** の順に進みます。

**3.**  MARS Panel を Unity エディターウィンドウの左側、デフォルトレイアウトで Hierarchy が配置されている場所にドッキングさせます。

[Image: image]ステップを完了としてマーク

## 3. Scene View と Unity Mars

Q&A (0)

Unity Mars を使って作業しているとき、**Scene View**は Unity エディターでいつもと同じ目的で使用されます。Scene View は、作成中の AR アプリケーションにおけるあなたのインタラクティブなビューです。Scene View は、AR アプリケーションで使用するデジタルコンテンツを作成し、設定するために使用されます。

Scene View は、Unity のデフォルトビューのひとつです。エディターの中央にあるはずです。

[Image: image]

MARS Panel を開いた状態で、**矢印**キー、またはマウスの右ボタンを押しながら **WASD** キーを使って Scene View 内を移動（ビューを変更）することができます。

ステップを完了としてマーク

## 4. Simulation View を試す

Q&A (0)

**Simulation View**は、シミュレートされた環境で動作する AR アプリを表示し、作業しているシーン全体が表示されます。Simulation View を使用して、合成環境や事前にオーサリングされた記録済みのストリームなど、さまざまなデータソースに対してアプリをテストすることができます。Simulation View のこの機能により、アプリを実際のデバイスにビルドしてテストしながらイテレートする必要性を減らすことができます。

Simulation View は、AR コンテンツとシミュレーション環境を分離し、実際の AR デバイスのレンダリングとインタラクションの動作を模倣します。AR コンテンツやシミュレートされた環境とインタラクトすることができます。

Simulation View を開く前にプロジェクトにアセットを追加しておくと、そこで見られるものがあるので便利です。

以下の手順に従って、Simulation View でサンプルを設定します：

**1**.  Content Manager を開き、**Basic Simulation Environment Pack**をインストールします。Import ダイアログウィンドウが表示されたら、**Import**を選択します。

**2.** インストールが完了したら、**Windows > MARS > Simulation View**の順に進みます。ウィンドウが開くと最初のサンプルとして、家と裏庭のシーンが表示されます。

**3.** Simulation View ウィンドウを Scene ビューの下にドッキングします。

[Image: image]

**注：**Simulation View ウィンドウの下部に、Edit モードで現在のシーンをシミュレーションできない旨の警告が表示されます。これは想定内の挙動です。

**4.**  ウィンドウの上部中央に表示されている Simulation View のツールバーで、Scene ソース（**Backyard_45ftx40ft**）の名前が表示されている**Source**ドロップダウンを選択します。

[Image: image]

**5.** ドロップダウンメニューを使用して、**Source**を **LivingRoom_18ftx13ft** に設定します。Simulation View には、屋内のリビングルームが表示されるようになりましたね。このシミュレーション環境は、ウォールアートのさまざまな配置を探せるような AR アプリのテストに役立つと思います。

[Image: image]

**6.**  マウスの右ボタンを押したまま WASD や矢印キーで Camera ビューを変更するなど、Scene ビューと同じように Simulation View を操作することができます。

その後、デジタルオブジェクトのプレハブを Simulation View に追加して、シミュレーション環境で設定する方法を学びます。

ステップを完了としてマーク

## 5. Device View に触れる

Q&A (0)

**Device View**は、AR アプリを実行する物理的なモバイルデバイスからのビューをシミュレーションします。このウィンドウを使用して、シミュレートされた環境でデバイスを使って移動しているようにナビゲートすることができます。このデバイスシミュレーションは、平面や点群の検出のようなことができることを意味します。

Device View は、Simulation View のサブモードですが、独立したウィンドウを持ちます。

**重要：**Device View を使用する場合、Unity エディターは Play モードではありません - デバイスシミュレーションの実行中に行った変更を保存することができます。

以下の手順で Device View をお試しください：

**1.**  **Simulation View**タブを右クリックし、**MARS > Device View** と選択します。

**2.**  Device View ウィンドウを Simulation View の右側にドッキングします。

[Image: image]

**3.**  MARS Panel の Visualizers セクションで、**Planes Visualizer**と **Point Cloud Visualizer** を選択し、これらをシーンに追加します。これらは、Hierarchy にゲームオブジェクトとして表示されます。

Planes Visualizer は、MARS が収集したスキャンデータをプレビューするために、環境をスキャンする際に平面を作成します。Point Cloud Visualizer は、スキャンしたデータを点群として可視化し、各点の信頼度 (基準に対しどれだけ凹凸があるか ) をグラデーション内の色情報で表示します。

**4.**Device View で、メニューツールバーを見つけ、**Start Simulation** (再生アイコン) を選択します。これにより、デバイスのシミュレーションが開始されます。

**5.**  Device View 内でユーザーがデバイスを動かすのをシミュレートするには、マウスの右ボタンを押したまま WASD キーを使用します。カーソルを環境上に移動させると、平面とレイキャストポイントが検出されます。

[Image: image]

青いドット模様は、Planes Visualizer のデフォルトのエフェクトです。様々な色の小さなドットは、Point Cloud Visualizer です。

**6.**  **Stop Simulation**（同じボタン）を選択すると、シミュレーションが終了します。

ステップを完了としてマーク

## 6. Unity Mars と Play モード

Q&A (0)

Unity Mars で、Unity エディターの**Play**ボタンを選択すると、通常と同じように Play モードになります。Play モードの Game ビューは、Device ビューと同じコントロールとデータ検出が可能です。Game ビューはアプリケーションの MARSCamera からレンダリングされ、最終的に公開されたアプリケーションを示しています。

Unity Mars を使用すると、アクティブなシミュレーション環境は Device ビューのコントロールとともに Game ビューに取り込まれます。つまり、デバイスにアプリをデプロイしなくても、さまざまな環境のコンテキストで AR アプリケーションをフルにテストすることができるのです。Device View とは異なり、ゲームロジックやスクリプトはすべて Game ビューでアクティブになります。

他の Unity アプリケーションと同様に、Play モードではすべてのアプリケーションとゲームロジックが実行されるため、Unity Mars のシミュレーション環境でエンドツーエンドのテストを完了することが可能です。

**重要：**Unity エディターが Play モードである間に変更を加えた場合、その変更は保存されません。テストが終わったら、必ずもう一度 **Play**を選択して Play モードを終了してください。

[Image: image]ステップを完了としてマーク

## 7. 次のステップ

Q&A (0)

このチュートリアルでは、Unity エディターを設定して、特定のレイアウトで重要な Unity Mars ウィンドウを探索しました。Unity Mars の操作に慣れてくると、もっと違うレイアウトがいいと思うかもしれませんが、これは出発点として役立つもので、残りの Unity Mars チュートリアルでもこのレイアウトを使用しています。

次のチュートリアルでは、Unity Mars を使用してテストシーンを作成してビルドします。その後、これを使って簡単な AR アプリを作成します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
