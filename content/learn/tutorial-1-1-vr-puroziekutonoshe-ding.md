[Image: image]

# 1.1 - VR プロジェクトの設定

Tutorial

Beginner

+10XP

90 mins

2

(24)

Unity Technologies

[Image: 1.1 - VR プロジェクトの設定]Summary

このレッスンが終わる頃には、大きな空の部屋を VR で体験する新しい Unity プロジェクトが出来上がっていることでしょう。

このユニットは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Resources

- [Create-with-VR_2020LTS.zip](https://unity-connect-prd.storage.googleapis.com/20210402/8a67971c-e957-4844-9964-8445a85103e8/Create-with-VR_2020LTS.zip?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899936)
- [Rig Simulator Keyboard Shortcuts.pdf](https://unity-connect-prd.storage.googleapis.com/20210604/28db6ca9-aba1-4ac3-a15a-24664daff3ea/Rig%20Simulator%20Keyboard%20Shortcuts.pdf?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899936)

Languages available:

日本語English日本語日本語

## 1. 新しい VR プロジェクトを開き、探索する

Q&A (0)

まず最初にしなければならないことは、VR 用に設定された新しい Unity プロジェクトを作成することです。

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

**1.  Create with VR スタータープロジェクトをダウンロードして解凍する：**

- クリックするとファイル「[Create with VR Starter Project](https://connect-prd-cdn.unity.com/20210402/8a67971c-e957-4844-9964-8445a85103e8/Create-with-VR_2020LTS.zip?_ga=2.89685661.785252267.1617033671-59568313.1601905412)」をダウンロードできます。
- Mac での解凍方法：ダウンロードしたファイルをダブルクリックします。
- Windows で抽出する場合は、ダウンロードしたファイルを右クリックして **Extract All**を選択します。

**2.  コンピュータ上のプロジェクトの名前を変更し、再配置する：**

- 解凍したフォルダーの中に「VR Room Project」というフォルダがあります。
- 必要であれば、プロジェクトフォルダーの名前を「VR Room - [Your Name]」に変更してください。
- プロジェクトフォルダーをコンピューター上の論理ディレクトリに移動します（例：デスクトップ上の「Create with VR」というフォルダー）。

**3.  VR Room プロジェクトを Unity Hub に追加する：**

- **Unity Hub を開きます。**
- **Projects**タブで、**Add**をクリックし、VR Room プロジェクトフォルダーを選択して追加します。

**4.  Unity 2020.3 LTS (Long-Term Support) でプロジェクトを開く：**

- Unity Hub から、新規プロジェクトを Unity で開きます。
- Unity のバージョンが 2020.3 になっていることを確認します。
- プロジェクトをより新しいバージョンの Unity 2020.3 にアップグレードするよう促されたら、**Confirm** をクリックします。
- Unity Hub からプロジェクトを開く方法がわからない場合は、[Unity Hub のマニュアル](https://docs.unity3d.com/Manual/GettingStartedOpeningProjects.html?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899936)の指示に従ってください。

[Image: image]

**5.  スタータープロジェクトの内容と、一般的な空のプロジェクトとの違いを探る：**

- 画面上部にあるメニューから **Window > Package Manager** と選択します。
- Package Manager の左パネルで、このプロジェクトにインストールされているパッケージ（チェックマークが付いているもの）を探します。以下が含まれます：

- XR Plugin Management
- XR Interaction Toolkit
- OpenXR Plugin
- Universal RP (Render Pipeline)

**注意：**プロジェクトに現在インストールされているパッケージだけをフィルタリングして表示するには、Package Manager ウィンドウの左上隅から **Packages: In Project**を選択します。

[Image: image]

これで、新しい VR スタータープロジェクトを空のシーンに開いて、どのパッケージが VR との互換性を可能にするかを理解することができます。

**注意：**これらは、このコースでの VR 開発に必要なため、このスタータープロジェクトであらかじめ設定されているパッケージです。このような VR 対応のプロジェクトを一から設定する方法を知りたい方は、このチュートリアル：[Create a VR Starter Project from Scratch](https://learn.unity.com/tutorial/create-a-vr-starter-project-from-scratch) に手順があります。

**関連リソースはこちら：**

- [Blog about the Unity XR Plugin Framework](https://blogs.unity3d.com/2020/01/24/unity-xr-platform-updates/?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899936)

ステップを完了としてマーク

## 2. スターターシーンを開いて探索する

Q&A (0)

プロジェクトを実行する前に、VR で体験するためのより興味深い環境を選択する必要があります。

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

**1.   スターターシーンの名前を変更して開く：**

- **Project** ウィンドウから**Scenes**フォルダーを開きます。
- 「Create-with-VR_Starter-Scene」の名前を「[Your_Name] Room」に変更します。
- 名前を変更したシーンをダブルクリックして開きます。

**2.  このシーンの内容と、一般的な空のシーンとの違いを探ってみよう：**

- **Hierarchy** から**XR Rig** オブジェクトを選択し、XR Rig コンポーネントをチェックします。
- **XR Rig**>**Camera Offset**>**Main Camera** の順に選択し、Tracked Pose Driver コンポーネントをチェックます。
- **LeftHand Controller** または **RightHand Controller** オブジェクトを選択し、XR Controller コンポーネントをチェックします。
- **Input Action Manager**オブジェクトを選択し、Input Action Manager コンポーネントをチェックします。

[Image: image]

これで、新しいシーンを開くことができたはずです。また、一般的な Unity のシーンとは異なる、シーンのコンポーネントについても大まかに理解しているはずです。

ステップを完了としてマーク

## 3. 部屋と背景の追加

Q&A (0)

この何もないシーンは、VR で探索してもつまらないので、もう少し面白い部屋を追加して、VR になったときの遠近感を出すといいでしょう。

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

**1.  シーンに部屋を追加する：**

- **Project** ウィンドウで、**Course Library > _Prefabs > Rooms** の順に展開します。
- **Room_[style]** プレハブを 1 つ、Hierarchy へドラッグします。
- Hierarchy から、**Plane**オブジェクトを削除します。

**2.  部屋の窓の外に環境を追加する：**

- **Course Library** > **_Prefabs** > **Environments** の順に進み、フォルダーを開きます。
- **Foreground**オブジェクトと **Background** オブジェクトをそれぞれ 1 つずつ Hierarchy へドラッグします。

**3. 部屋の中の太陽光を調整する：**

- **Directional Light** オブジェクトの X と Y の回転を変更して、部屋への太陽光の入り方を変えることができます。

[Image: image]

これで、コースライブラリのシーンに部屋、前景、背景のオブジェクトができ、太陽光が希望する角度で部屋に入るようになったはずです。

ステップを完了としてマーク

## 4. デバイスシュミレーターでのテスト

Q&A (0)

「Device Simulator (デバイスシュミレーター)」を使ってシーンをテストすることができます。このシミュレーターは、デバイスに接続して装着するのではなく、マウスとキーボードを使ってエディター内でアプリをテストすることができます。これは、短時間のテストに役立ちます。

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

**1.  デバイスシュミレーターをシーンに追加する：**

- Project ウィンドウから、Samples > XR Interaction Toolkit > [version] > XR Device Simulator の順に進み、開きます。****
- **XR Device Simulator** プレハブを Hierarchy へドラッグします。
- **Play** をクリックすると、シミュレーターのテストが行われます。

**2.  キーボードとマウスの操作を試そう：**

- **注意：**シミュレーターを効果的に使用するには、クリック可能なスクロールホイールを備えたマウスが必要です。
- **カメラ**を操作する：右クリックを押したままにします。
- **左のコントローラー**を操作する：左の Shift キーを押しながら、または T で切り替えます。
- **右のコントローラー**を操作する：スペースキーを押し続けるか、Y で切り替えます。
- デバイスで**パンする**：マウスを動かします。
- デバイスを**回転**させる：マウスの中ボタンを押したままにします。
- **回転制御を切り替える**には、R を押します。
- デバイスの位置と回転を**リセット**するには：V を押します。

**3.  デバイスシミュレーター で利用可能な制御をもっと見る：**

- Hierarchy から**XR Device Simulator**を選択します。
- XR Device Simulator コンポーネントで、Action 変数の 1 つをダブルクリックして Action エディターを開きます。
- Actions を展開すると、その Bindings が表示されます。
- 左側の Action Maps パネルから、**Main**または**Input Controls**を選択すると、追加のアクションマッピングが表示されます。

**4.  重要：Device Simulator を使用しない場合は、Device Simulator を無効にする**

- Device Simulator オブジェクトを選択し、Inspector ウィンドウで無効にします。
- デバイス上でプロジェクトを実行する際に、Device Simulator****がアクティブになっていると問題が発生します。

[Image: image]

これで、デバイスシミュレーターを使って、マウスとキーボードで部屋の中を見渡すことができるようになります。

必要であれば、[Rig Simulator Keyboard Shortcut Cheat Sheet](https://connect-prd-cdn.unity.com/20210604/6faae9ac-afb8-4728-ada5-e79104b14964/Rig%20Simulator%20Keyboard%20Shortcuts.pdf?_gl=1*8ga1vy*_ga*NTk1NjgzMTMuMTYwMTkwNTQxMg..*_ga_1S78EFL1W5*MTYyMjgzMzk2Ny4yMC4xLjE2MjI4MzQxMzguMzY.&_ga=2.48779119.874215270.1622509559-59568313.1601905412) をダウンロードすることもできます。

ステップを完了としてマーク

## 5. Unity による VR でのテスト

Q&A (0)

**Windows** コンピューターで **Oculus** デバイスを使用している場合は、このステップに従ってデバイスでテストしてください。そうでない場合は、このステップをスキップします。
Oculus 開発に**Mac**を使用している場合、Oculus アプリはまだ Mac に対応していないので、このステップは関係ありません。次のステップでは、Oculus Quest 用にアプリをビルドする際に、アプリをテストする方法を学びます。

Oculus Quest や Rift でプロジェクトを実行するためには、正しいプラグインをインストールして、アプリを「Oculus Link」で接続する必要があります。これにより、Unity エディターでプロジェクトを実行しつつ、Oculus デバイスで体験することができます。

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

**1.  デスクトップテスト用の Oculus Plugin をインストール：**

- 画面上部メニューから **Edit > Project Settings** とクリックし、サイドバーから**XR Plugin Management**パネルを選択します。
- In the **PC, Mac, Linux & Standalone** tab, select Oculus from the list of available Plugin Providers to install that plugin.

[Image: image]

**2.  Oculus Link を使ってデバイスを接続：**

- 対応するケーブルを使って、デバイスがコンピューターに接続されていることを確認してください。
- Oculus App が起動し、デバイスが正常に認識されていることを確認します。
- まだ Oculus App をダウンロードしていない場合は、[Oculus Link Setup ページ](https://www.oculus.com/accessories/oculus-link/)でダウンロードできます。

[Image: image]

**3.  お使いのデバイスでプロジェクトをテストする：**

- シーン内の **VR Device Simulator** が無効になっていることを確認してください。有効になっていると、ヘッドトラッキングが機能しません。
- Unity エディターで**Play**を選択し、ヘッドセットを装着します。

[Image: image]

Windows コンピュータ上では、Oculus Link を介して Oculus デバイス上でアプリを素早くテストできるようになっています。

ステップを完了としてマーク

## 6. デバイスでビルドして実行する

Q&A (0)

**Oculus Quest** を使用している場合は、このステップに従ってデバイスにアプリをビルドします。そうでない場合は、このステップをスキップします。

Oculus Quest はスタンドアロン・デバイスなので（つまり、コンピューターに接続する必要がない）、アプリをビルドして、デバイス上で直接テストすることができます。

Mac を使用していて、前のステップのように Oculus Link を使ってアプリをテストできない場合は、これがアプリをテストするための主な方法となります。

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

**1.  Android ビルド用の Oculus プラグインをインストール：**

- 画面上部メニューから **Edit > Project Settings** をクリックし、サイドバーから **XR Plugin Management**パネルを選択します。
- **Android**タブを選択し、利用可能な Plugin Providers のリストから**Oculus**を選択し、プラグインをインストールします。
- これにより、プロジェクトをデバイス上のアプリとしてビルドし、コンピューターから切り離されたスタンドアロンの体験としてテストすることができます。
- **注意：**Android のエクスポートモジュールをインストールした場合のみ、Android タブが表示されます。

[Image: image]

**2.  シーンを作成する準備：**

- シーン内の VR Device Simulator が無効になっていることを確認してください。有効になっていると、ヘッドトラッキングが機能しません。
- 画面上部メニューから **File > Build Settings** をクリックします。
- **Add Open Scenes** をクリックして、シーンを追加します。

**3.  Android のビルドプラットフォームに切り替える：**

- **Platform** セクションで **Android**を選択します。
- **Switch Platform**をクリックして、プロジェクトが Android プラットフォームに切り替わるのを待ちます。
- **注意：**Android は、Unity エディターのインストール時に Android Export Module を正常にインストールした場合のみ、ビルドターゲットとして表示されます。

**4.  ビルドターゲットとしてお使いのデバイスを選択：**

- VR デバイスの電源が入っているか、コンセントが入っているかを確認してください。
- **Run Device**ドロップダウンの横にある**Refresh** をクリックして、VR デバイスを選択します。
- **注意：**お使いのデバイスがリストに表示されない場合は、デバイスを再起動するか、Developer モードになっていることを確認する、または Unity を再起動してみてください。

**5.  お使いのデバイス上でプロジェクトをビルドして実行する：**

- **Build and Run**をクリックします。
- 保存先の選択を求められたら、「Builds」フォルダーを新規に作成し、 “[YourName] - VR Room - 1.1” という名前でプロジェクトを**保存**します。

[Image: image]

これで、コンピューターからテザリングなしで、デバイス上でアプリをテストできるようになります。

**注意：**アプリは自動的にあなたのデバイス上の App Library の「Unknown Sources」セクションに保存されます。アプリを探すために、[提供元不明のアプリを許可する](https://support.oculus.com/632287656943461/)手順を踏む必要があるかもしれません。

**トラブルシューティングに関するヒント：**

- アプリが動作しても、視野全体を占めることができない場合は、プラグインの問題が考えられます。
- アプリは動くが、シーン全体が一緒に動いてしまう場合は、Device Simulator が有効になっているか、Input Action Manager が設定されていないことが考えられます。

ステップを完了としてマーク任意のステップ

## 7. 他の OpenXR 対応デバイスでのテスト

Q&A (0)

Valve Index や HTC Vive など、異なる OpenXR 対応デバイスを使用している場合は、このステップに従ってデバイスでテストしてください。そうでない場合は、このステップをスキップしてください。
これらのデバイスでプロジェクトをテストするには、OpenXR プラグインをインストールし、特定のデバイスの機能セットを有効にする必要があります。

**1.  お使いのデバイスに OpenXR Plugin を設定：**

- [OpenXR Manual](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/index.html?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899936) ページの指示に従って、OpenXR プラグインをインストールし、XR Plugin Management で有効にして、特定のデバイス用に設定します。

**2.  SteamVR アプリからデバイスを接続：**

- 対応するケーブルを使って、デバイスがコンピューターに接続されていることを確認してください。
- SteamVR アプリが起動していて、デバイスが正常に認識されていることを確認します。
- コンピューターに SteamVR がまだインストールされていない場合は、チュートリアル「VR Software Setup」の手順を確認してください。 [VR Software Setup チュートリアル](https://learn.unity.com/tutorial/0-1-set-up-unity-and-your-vr-device?courseId=60183276edbc2a2e6c4c7dae)

**3.  お使いのデバイスでプロジェクトをテスト：**

- シーン内の**VR Device Simulator** が無効になっていることを確認します。有効になっていると、ヘッドトラッキングが機能しません。
- Unity エディターで**Play**を選択し、ヘッドセットを装着します。
- これで、SteamVR を使って、HTC Vive や Valve Index でアプリをすぐにテストできるようになります。

[Image: image]

これで、SteamVR を使って、HTC Vive や Valve Index でアプリをすぐにテストできるようになります。

ステップを完了としてマーク

## 8. まとめ

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**注目の*フィーチャー*** **：**

- プロジェクトの設定
- 部屋 (Room) で設定されたシーン
- デバイスシミュレーターでのテスト
- デバイスで実行

**新しいコンセプトとスキル：**

- 異なるタイプのハードウェアに対応したパイプライン
- VR 開発に必要なパッケージ
- VR シーンと通常の Unity シーンの比較
- Rig Simulator とデバイス上でのテストの比較
- デザリングテストとスタンドアロンテストの比較

**次のレッスン：**

- VR Locomotion (*VR*空間での移動)

ステップを完了としてマーク任意のステップ

## 9. 追加のアクティビティ（任意）

Q&A (0)

自分のスキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいという方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。それぞれの作品には、難易度を示す [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられ、関連する場合には [Requires Programming] のタグも付けられます。

これらは完全に任意ですが、VR 開発を次のレベルに進めたい方にはぜひお勧めします。

**1.  ディレクショナルライト（Directional Light) で遊ぶ [Easy]（難易度：低）**

部屋の中で思い通りの影や色になるように、ディレクショナルライトを試してみましょう：

- ディレクショナルライトを X 軸、Y 軸方向に回転させてみてください。
- ディレクショナルライトの色を調整して、時間帯に合わせて光の色を変えてみましょう。

[Image: image]

**2.  デバイスシミュレーターを試す [Medium]（難易度：中）**

デバイスシミュレーターの基本的な機能を使いこなす：

- デバイスシミュレーターの設定と使用方法については、上記ステップの説明を参照してください。
- **注意：**デバイスでアプリを実行する前に、必ずシミュレーターを削除または無効にしてください。

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

**3.  時計の機能を追加 [Expert] [Requires programming] (難易度：エキスパート；プログラミング必要)**
壁に時計を設置し、(a) ユーザーのローカルタイムゾーンの現在時刻を表示するか、(b) VR ルームの世界に合わせた時刻を表示します。

- Course Library > Prefabs > Objects > Electronics の順に進み、フォルダー内にある時計のプレハブを探します。
- ヒント：システムの現在時刻にアクセスするには、[DateTime.now](https://docs.microsoft.com/en-us/dotnet/api/system.datetime.now?view=net-5.0) プロパティを使用します。

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

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
