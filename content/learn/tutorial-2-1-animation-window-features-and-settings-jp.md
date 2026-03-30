[Image: image]

# 2.1 Animation ウィンドウ：機能と設定

Tutorial

Beginner

+10XP

45 mins

15

(49)

Unity Technologies

[Image: 2.1 Animation ウィンドウ：機能と設定]Summary

本チュートリアルでは、Animation ウィンドウの主な機能と設定をコンテキストで確認します。

Languages available:

日本語English日本語한국어日本語

## 1. 概要

Q&A (0)

「[**1.2: 主要なコンセプト：アニメーションデータ**](https://learn.unity.com/tutorial/lesson-1-2-animation-systems-core-concepts-animation-data?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5eba9fffedbc2a0020b332d7)」では、アニメーションデータがバインディングや値としてどのように存在するかについて触れました。

このチュートリアルでは、以下のことを学びます：

- Animation ウィンドウでバインディングと値がどのように表現されるかを理解を深めます。
- Animation ウィンドウでアニメーションクリップを表示するための基本的な方法について詳しく見ていきます。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

このチュートリアルでは、3D アニメーションシステム入門Unity プロジェクトを使用します。まだダウンロードしていない場合は、先に[**ダウンロード**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66)しておきます。

プロジェクトのダウンロードが完了したら：

**1.** Unity エディターでプロジェクトを開きます。

**2.** Project ウィンドウで、**Assets > 2.1 Animation Window Features and Settings** の順に進みます。

このチュートリアルに必要なアセットはすべてこのフォルダーにあります。

ステップを完了としてマーク

## 3. アニメーションクリップのデータの振り返り

Q&A (0)

アニメーションクリップに保存されているアニメーションデータは、バインディングと値の 2 つの部分で構成されています。

このチュートリアルを始める前に、このデータに関する重要な情報をざっと振り返りましょう：

- バインディングは、アニメーションの再生中にゲームオブジェクトをやコンポーネントのどのフィールドを変更するかを示します。
- 値は、ある時点でフィールドが何に変更されるべきかを示します。通常、これらの値は、時間の経過とともに変化し、曲線として表現される float（小数値）です。
- Animation ウィンドウ（これは Animator ウィンドウとは異なります）には、アニメーションクリップに関連付けられたバインディングと値が表示されます。
- Animation ウィンドウを使用して、アニメーションクリップのバインディングと値の両方を編集することができます。

ステップを完了としてマーク

## 4. アニメーションの例を見てみよう

Q&A (0)

まず、[**Core Concepts チュートリアル**](https://learn.unity.com/project/course-overview-and-core-concepts?uv=2019.4&courseId=5eba874aedbc2a00219550ff)にある円形と四角形の例とは少し異なるアニメーションの例を見てみましょう。

このチュートリアルでは、街灯のアニメーションについて詳しく見ていきましょう。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

このアニメーションを開くには：

**1.** Project ウィンドウで、**Assets > 2.1 - Animation Window Features and Settings > Scenes** の順に進み、**StreetLampExample**シーンをダブルクリックして開きます。

**2.  再生**ボタンを押して再生モードに入り、アニメーションが動作することを確認してください。街灯が点滅しているのが見えるはずです。

**3.** もう一度**再生**ボタンを押して再生モードを終了します。

**4.**Project ウィンドウで、**2.1 - Animation Window Features and Settings > AnimationClips** に順に進み、**LightFlicker** アニメーションクリップをダブルクリックして Animation ウィンドウで開きます。

このアニメーションクリップは、**Light**コンポーネントの **Intensity**フィールドを変更する単一のバインディング値のペアを持っています。

**5.**  Animation ウィンドウが Curves モードに設定されていることを確認して、値の編集を開始したときに変更がより明確にわかるようにしてください。

[Image: image]ステップを完了としてマーク

## 5. インポートしたアニメーションクリップの編集

Q&A (0)

StreetLamp アニメーション用のアニメーションクリップはUnity で直接作成したものですが、他のソフトで作成したアニメーションクリップを使ってモデルをインポートすることもできます。モデルの一部としてインポートされたアニメーションクリップは読み込み専用で、編集することはできません。

モデルの一部としてインポートされたアニメーションクリップを編集したい場合は、アニメーションクリップアセットを複製して、この新しいアニメーションクリップを編集することができます。複製されたアニメーションクリップはモデルに関連付けられていないため、モデルのインポート設定を変更しても変更されません。

インポートした HumanoidCrouch モデルのアニメーションクリップを複製して編集してみましょう：

**1.**Project ウィンドウで、**Assets > 2.1 - Animation Window Features and Settings > AnimationClips** フォルダーの順に移動し、**HumanoidCrouch**モデルを選択します。

**2. HumanoidCrouch**モデルアイコンの左にある折りたたみ矢印をクリックすると、サブアセットが表示されます。このモデルの下には、いくつかのアニメーションクリップが入れ子になっています。

[Image: image]

**3.**SelectAnimation ウィンドウでアニメーションクリップを選択して表示します。

[Image: image]

**4.  Ctrl + D** (Windows) または **Cmd + D** (MacOS) を押して、アニメーションクリップを複製します。

新しいアニメーションクリップのプロパティを編集できるようになりましたが、HumanoidCrouch モデルに関連付けられていないことを覚えておいてください。

#### 読み取り専用のアニメーションクリップを表示する

Unity では、読み取り専用のプロパティを非表示にすることができます。これらのプロパティを非表示または公開するには：

**1.**Animation ウィンドウで、タイムラインの横にあるコンテキストメニューを選択します（隣接する 2 つのコンテキストメニューのうち、下の方）。

[Image: image]

**2.  Show Read-only Properties**の表示を有効または無効にして、読み取り専用のプロパティを表示または非表示にします。

ステップを完了としてマーク

## 6. アニメーション クリップのコンテキスト

Q&A (0)

Animation ウィンドウでアニメーションクリップを表示するには、アセットとして表示する方法とコンテキストとして表示する方法の 2 つの方法があります。選択した方法は、アニメーションクリップの編集方法に影響を与えます。

#### アニメーションクリップをアセットとして表示

アニメーションクリップをアセットとして表示すると、Animation ウィンドウには再生に使用されるゲームオブジェクトのコンテキストが表示されません。これは、Unity が追加可能なフィールドを認識していないため、アニメーションクリップにアニメーションカーブを追加することができないことを意味します。

アニメーションクリップをアセットとして表示するには：

- Project ウィンドウでアニメーションクリップを選択して開きます。

#### アニメーションクリップをコンテキストで表示

ゲームオブジェクトの階層でアニメーションクリップを表示すると、Animation ウィンドウにはコンテキストが表示されます。つまり、Animation Curves を追加することができます。

アニメーションクリップをコンテキストで表示するには：

- Hierarchy で、アニメーションクリップを含むアニメーターコントローラーを持つゲームオブジェクトを選択します。アニメーターコントローラーが参照しているクリップが Animation ウィンドウで利用できるようになり、コンテキストを必要とする設定にアクセスできるようになります。

このコンテキストの考え方は、Animation ウィンドウの機能にも影響を与えます。例えば、コンテキストなしではアニメーションクリップをプレビューすることはできません。

Animation ウィンドウのさまざまな機能、設定、ツールに触れながら、コンテキストが各要素にどのように影響するかを学びます。

ステップを完了としてマーク

## 7. アニメーションクリップのコンテキスト 街灯の例

Q&A (0)

StreetLamp（街灯）の例を使って、Unity エディターでコンテキストの概念を詳しく見てみましょう。

LightFlicker をアセットとして表示する

LightFlicker アニメーションクリップをアセットとして表示するには：

- Project ウィンドウで、**Assets > 2.1 - Animation Window Features and Settings > AnimationClips**に移動し、**LightFlicker**アニメーションクリップを選択して Animation ウィンドウで開きます。

**Add Property** ボタンが無効になっているので、既存のアニメーションカーブを編集することができません。これは、ゲームオブジェクトのコンテキストなしでアニメーションクリップを表示しているためです。

[Image: image]

#### LightFlicker をコンテキストで見る

ゲームオブジェクトのコンテキストで LightFlicker アニメーションクリップを表示するには：

- Hierarchy で、**StreetLamp**ゲームオブジェクトを選択します。Animation ウィンドウに LightFlicker アニメーションクリップが表示されます。

アニメーションクリップを編集したい場合、ゲームオブジェクトのプロパティにアクセスできるようになりました。これは、Animation ウィンドウがアニメーションクリップのコンテキストを検出したためです。これでプロパティの **Add Property** ボタンが有効になりました。

[Image: image]

アニメーションクリップの編集については、[**次のチュートリアル**](https://learn.unity.com/tutorial/2-2-editing-animation-clips?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69)で詳しく説明します。

ステップを完了としてマーク

## 8. Animation ウィンドウのモードを確認

Q&A (0)

Animation ウィンドウでアニメーションクリップを開いたり編集したりする方法を学んだところで、Animation ウィンドウの機能をより詳しく見てみましょう。

#### Animation ウィンドウの概要

アニメーションクリップは、値とバインディングの 2 つの部分で構成されています。Animation ウィンドウは主に 2 つのエリアに分かれていて、左側にバインディング、右側に値となり、それぞれのアニメーションクリップの各パートに対応しています。

[Image: image]

#### キーフレーム

アニメーションクリップの各バインディングには、対応する値を構成するキーフレームのコレクションがあります。これらのキーフレームには、特定の時間におけるアニメーションカーブの値や、その間の値の補間方法などの情報が含まれています。

#### ドープシートとカーブモード

アニメーションクリップの値は、Animation ウィンドウで 2 つの異なるモードで見ることができます。Dopesheet (ドープシート) モードと Curves (カーブ) モードです。

ドープシートモードは、キーフレームのみが表示される凝縮されたビューです。このビューは、キーフレームがどのようにレイアウトされているかを見たい場合や、キーフレームが float 値ではなくオブジェクト参照を表している場合に便利です。これは、キーフレームごとに異なるスプライトが入れ替わる 2D アニメーションでよく見られます。

カーブモードでは、すべてのバインディングまたは選択されたバインディングのキーフレーム値とその補間を表示します。

このコースでは、Unity の 3D アニメーションシステムに焦点を当てていますが、内容の大部分は Unity の 2D アニメーションにも適用されます。ただし、このコースでは、Sprite アニメーションに使用される Object Reference（オブジェクト参照）のカーブは扱いません。

#### モードの変更

ここまでのチュートリアルでは、アニメーションクリップをカーブモードで表示していました。Animation ウィンドウをドープシート (Dopesheet) モードに変更してみましょう：

**1.** Animation ウィンドウの左下にある **Dopesheet** タブを選択して、Dopesheet モードに切り替えます。

[Image: image]

このモードは Curves モードよりもずっと凝縮されていて、このチュートリアルで必要とするアニメーションについての詳細が一切示されていないことに気づくでしょう。

**2. Curves** タブを選択すると、Curves モードに戻ります。

#### 速度を変更する

ドープシートモードでもカーブモードでも、Animation ウィンドウの上部には常にタイムラインが表示されています。このタイムラインには、**秒：フレームの表示形式**で時間が表示されています。例えば、1:15 はアニメーションクリップの開始から 15 フレームと 1 秒を意味します。

アニメーションの速度を変更するには、1 秒あたりのフレーム数を変更することができます。これを行うには：

**1.**タイムラインの横にあるコンテキストメニューで、**Frames**を選択します。

[Image: image]

**2.**もう一度同じコンテキストメニューを開き、**Show Sample Rate**を選択します。

**3.**その後、Animation ウィンドウで手動でフレーム数を設定することができます。

[Image: image]

または、コンテキストメニューを使用して **Set Sample Rate** を選択し、利用可能なオプションの 1 つを選択して速度を変更することもできます。

ステップを完了としてマーク

## 9. Animation ウィンドウのツールバーを見直す

Q&A (0)

Animation ウィンドウの左側、バインディングの上には、アニメーションクリップのデータを表示したり編集したりするのに役立つボタンや設定がいくつかあります。

[Image: image]

アニメーションクリップをアセットとして表示している場合、これらのボタンの一部は無効になっています。Hierarchy で該当するゲームオブジェクトを選択すると、アニメーションクリップをコンテキストで表示し、これらすべてのツールにアクセスできます。

#### Preview モード

最初のボタンは **Preview**ボタンです。Preview モードでは、タイムラインとプレビューされているインスペクターのプロパティの両方が青色で表示されます。

[Image: image]

このモードを有効にすると、アニメーションクリップの値が一時的にゲームオブジェクトに設定され、どのように見えるかをプレビューすることができます。つまり、アニメーションクリップがアセットとして表示されている場合は、この設定は使用できません。

また、カーブ表示の上のタイムラインをクリックしてドラッグすると Preview モードになります。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### レコードモード

アニメーションウィンドウのツールバーの次のボタンは、Record（レコード）ボタンです。レコードモードにすると、タイムラインとプレビュー中のインスペクターのプロパティの両方が赤色に表示されます。

[Image: image]

Preview モードと同様に、レコードモードを有効にすると、アニメーションクリップの値が一時的にゲームオブジェクトに設定されます。重要な違いは、このモードを有効にしている間に行ったプロパティの変更がアニメーションクリップに記録されることです。

このモードで変更して保存できる内容には、以下のようなものがあります：

- アニメーションクリップへの新しいバインディングの追加
- アニメーションカーブへのキーフレームの追加
- キーフレームの値を設定

つまり、ゲームオブジェクトのプロパティを変更することができ、新しい値、バインディング、キーフレームはアニメーションクリップに記録されます。

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### *タイムライン*再生ヘッド

**タイムライン再生ヘッド**は、プレビューされているタイムライン上の正確なポイントを示しています。

[Image: image]

ツールバーの以下の 5 つのボタンは、タイムライン再生ヘッドの位置を設定するためのものです。

#### **プレイ**ボタン

ここで**プレイ**ボタンを使用できるのは、アニメーションクリップをコンテキストで表示している場合のみです。このボタンを押すと：

1. Preview モードが有効になります。
2. 再生ヘッドの現在時刻からアニメーションの再生が開始されます。
3. Scene ビューでアニメーションを見ることができるようになります。

#### 最初、前、次、最後のボタン

プレイの両側にあるボタンは、アニメーションクリップをアセットとして表示している場合でも、コンテキストとして表示している場合でも使用できます。これらのボタンを使用して、キーフレーム間で再生ヘッドを動かすことができます。これらのボタンは、再生ヘッドをそれぞれ最初、前、次、最後のキーフレームに移動します。

[Image: image]

#### 現在のフレーム

最後の 5 つのボタンの右側には、再生ヘッドの位置を設定するためにも使用できる数値フィールドがあります。この数字は現在のフレームの位置を表しています。この数字を変えると再生ヘッドの位置が変わります。

[Image: image]

アニメーションクリップがコンテキストで表示されているときに、再生ヘッドの位置ボタンのいずれかを選択したり、数値フィールドを変更したりすると、Preview モードが有効になります。

ステップを完了としてマーク

## 10. アニメーションクリップの選択と作成

Q&A (0)

Animation ウィンドウの設定とボタンの 2 列目には、現在表示しているアニメーションクリップの名前が表示されています。

[Image: image]

アニメーションクリップをコンテキストで表示しているときに、別のアニメーションクリップを選択したり、新しいアニメーションクリップを作成したりするには、以下の手順に従います：

**1.**Animation ウィンドウで、アニメーションクリップ名を選択してドロップダウン選択メニューを開きます。

**2.**アニメーターコントローラーで現在使用されているアニメーションクリップを選択するか、**Create New Animation Clip**を選択して新規アニメーションクリップを作成します。

[Image: image]

新規アニメーションクリップを作成すると、現在使用しているアニメーターコントローラーに自動的に追加され、現在のゲームオブジェクトのコンテキストに配置されます。

ステップを完了としてマーク

## 11. アニメーションクリップのアニメーションカーブのフィルタリング

Q&A (0)

原則として、複雑なアニメーションクリップであればあるほど、アニメーションカーブの数は多くなります。アニメーションクリップの中にたくさんのアニメーションカーブがある場合、どのアニメーションカーブを見るかをフィルタリングできると便利です。

選択したゲームオブジェクトに関連付けられたアニメーションカーブのみを表示するようにフィルタリングするには：

**1.** Hierarchy で、関連するアニメーションカーブを表示したいゲームオブジェクト（またはその子）を選択します。

**2.**Animation ウィンドウで、**Filter by selection** をクリックします（アニメーションクリップ名の右側）。

[Image: image]

#### 例えば

キャラクターアニメーションを見ているが、特に手のアニメーションに注目したい場合にこのフィルター機能を使用することができます。手の Transforms に関連するアニメーションカーブだけを表示するには、以下のようにします：

**1.**Hierarchy で、hand の子ゲームオブジェクトを選択します。

**2.**Animation ウィンドウで、**Filter by selection** ボタンをクリックします。

ステップを完了としてマーク

## 12. キーフレームとアニメーションイベントの追加

Q&A (0)

最後の 2 つのボタンでは、キーフレームとアニメーションイベントを追加します。

[Image: image]

#### Add keyframe ボタン

**Add keyframe** ボタンは、再生ヘッドの現在の時刻に選択されているすべてのアニメーションカーブにキーフレームを追加します。アニメーションカーブを選択していない状態で **Add keyframe** をクリックすると、選択したゲームオブジェクトに関連付けられたすべてのアニメーションカーブにキーフレームが追加されます。

#### Add event ボタン

**Add event** ボタンは、新しいアニメーションイベントを追加します。アニメーションクリップをアセットとして表示している場合でも、コンテキストとして表示している場合でも動作しますが、アニメーションイベントの設定方法に影響します。 アニメーションイベントについては、[**2.7: Creating and configuring Animation Events**](https://learn.unity.com/tutorial/2-7-creating-and-configuring-animation-events?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69)で詳しく説明します。 .

ステップを完了としてマーク

## 13. まとめ

Q&A (0)

このチュートリアルでは、Animation ウィンドウのさまざまな機能について詳しく触れました。以下のことを学びました：

- インポートしたアニメーションクリップを複製して編集することができる
- アニメーションクリップをアセットとして、またはコンテキストとして表示する際に、アニメーションウィンドウで利用できるさまざまな機能
- ドープシートとカーブモードの違い

アニメーションウィンドウの各ボタンもおさらいしましたね。

このコースでは、いくつかの機能について詳しく説明しますが、この概要は Animation ウィンドウを自信を持って使えるようにするためのものです。これは、この学習プロジェクトで行う他のチュートリアルの基礎となります。

次のチュートリアルでは、Unity エディターでアニメーションクリップを作成して編集します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
