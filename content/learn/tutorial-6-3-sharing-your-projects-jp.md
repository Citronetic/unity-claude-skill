[Image: image]

# レッスン 6.3 - プロジェクトをシェアする

Tutorial

Beginner

+0XP

30 mins

0

Unity Technologies

[Image: レッスン 6.3 - プロジェクトをシェアする]Summary

**概要：**

このレッスンでは、Unity インターフェースから外れてもプレイできるようにプロジェクトをビルドする方法を学びます。まず、プロジェクトを公開できるようにするために必要なエクスポートモジュールをインストールします。その後、Mac や PC でプレイできるスタンドアロンアプリとしてプロジェクトをビルドします。最後に、プロジェクトを WebGL 用にエクスポートし、ゲーム共有サイトにアップロードして、友達や家族に送れるようにします。

**プロジェクトの成果物：**

Mac/PC 上のスタンドアロンアプリとして、またはオンラインで埋め込んでプレイ可能な形にエクスポートされたプロジェクト。

Languages available:

日本語EnglishEspañol日本語日本語

## 1. エクスポートモジュールをインストールする

Q&A (0)

> *プロジェクトをエクスポートする前に、特定のプラットフォーム用のエクスポートを可能にする「エクスポートモジュール」を追加する必要があります。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. Unity Hub を開き、コースで使用した Unity のバージョンで「Add Modules」をクリックします。
2. 「WebGL Build Support」、加えて Mac または Windows のビルドサポートのいずれかを選択し、「Done」をクリックしてインストールが完了するのを待ちます。

ステップを完了としてマーク

## 2. Mac または Windows 用にゲームをビルドする

Q&A (0)

> *エクスポートモジュールがインストールされたので、それらを使用してプロジェクトをエクスポートすることができます。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. ビルドしたいプロジェクトを開く（Prototypeでも自分で作ったプロジェクトでも可）
2. Unityで、File > Build Settingsをクリックし、「Add Open Scenes」をクリックしてシーンを追加します。
3. 「Player Settings」をクリックして、ゲームの「Windowed」「Resizable」の設定、および「Display Resolution Dialog」を有効にするかどうかなどの設定を調整します。
4. 「Build」をクリックし、プロジェクトに名前を付けて、Create with Codeフォルダー内に「Builds」フォルダーを新しく作り、そこに保存します。
5. ゲームをプレイしてテストし、必要であれば、異なる設定で再ビルドしてください。

ステップを完了としてマーク

## 3. WebGL 用にゲームをビルドする

Q&A (0)

> *Mac や Windows でゲームを配布するのはかなり難しいので、WebGL 用にビルドしてプロジェクトをオンラインで公開するのが良いでしょう。*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. Build Settings メニューを開き、WebGL を選択し、「Switch Platform」をクリックします。
2. 「Builds」をクリックし、「Builds - WebGL」フォルダーに保存します。
3. index.html をクリックしてプロジェクトを実行してみてください（別のブラウザで開く必要がある場合もあります）
4. WebGL 版のビルドフォルダーを右クリックして圧縮し、.zip ファイルにします。
5. 意欲があれば、itch.io のようなゲーム共有サイトにアップロードしてみてください。

ステップを完了としてマーク

## 4. レッスンのまとめ

Q&A (0)

**新しい概念とスキル**

- エクスポートモジュールのインストール
- Mac/PC 用のビルド
- WebGL/HTML 用のビルド

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
