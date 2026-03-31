[Image: image]

# Lesson 1 | 3D ギャラリープロジェクトのプランニング

Tutorial

foundational

+10XP

60 mins

1

(10)

Unity Technologies

[Image: Lesson 1 | 3D ギャラリープロジェクトのプランニング]Summary

このレッスンでは、3D ギャラリーの個人プロジェクトのプロジェクト計画を作成する方法と、Unity プロジェクトとプロトタイプをプランニングすることの重要性について学びます。

Resources

- [Unity Asset Store](https://assetstore.unity.com/)
- [First Person "All-in-One" Controller](https://assetstore.unity.com/packages/tools/input-management/first-person-all-in-one-135316)
- [Unity Interface Guide.pdf](https://unity-connect-prd.storage.googleapis.com/20200716/c3949ae1-ce3a-4dfe-a836-a13dbbeda73e/Unity%20Interface%20Guide.pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035351311)
- [Unity Shortcuts](https://docs.unity3d.com/Manual/UnityHotkeys.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035351311)

Languages available:

日本語English日本語日本語

## 1. 個人プロジェクトのご紹介

Q&A (0)

多くの学習者はゲーム制作で初めて Unity を導入しますが、リアルタイム 3D 開発は幅広い業界で使われているため、Unity を使ってゲーム以上のものが作れることを理解しておくことが大切です！

このプロジェクトでは、あなたが選択した要素を表示することができる没入型 3D ギャラリーをベースに、ゼロからシンプルなインタラクティブな体験を作ります。自由にデモを見て、Unity のアセットを使用し、あなたの経験レベル、快適さ、興味に応じてプロジェクトを修正することができます。

Unityで「シーン」を作成し、Unity [Asset Store](https://assetstore.unity.com/)からインポートしたあらかじめ作成され、提供されている一人称視点のコントローラーを追加します。

**注：**このプロジェクトは Unity for Educators コースからのもので、元々は講師の方が生徒の作品を展示するためのギャラリーとして作られたものです。ご自分の 3D ギャラリーを使って、好きなものを展示することができます。

下の動画を見て、このプロジェクトの概要と始め方を学びましょう。

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

ご自分の 3D ギャラリープロジェクトをどのように適応させることができるかを考えてみてください。例えば、以下のようになります：

- 作品集
- 隠された手がかりがあるエスケープルーム
- 学習のトピックをベースにした記憶の宮殿
- VR ゲームやアート・インスタレーション

このプロジェクトをパーソナライズする機会は無限にあります。

ステップを完了としてマーク

## 2. プロジェクトの開始

Q&A (0)

次のステップでは、以下の方法を示す 3 つのチュートリアルを紹介します：

1. Unity のインターフェースに移動します
2. 新しい Unity プロジェクトを整理して作成します
3. プロジェクトにプリミティブ（シンプルな形状）を追加して、シンプルなプレイヤーコントローラーを作成します

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

1. **Unity Hub** の「Project」タブで「New」をクリックし、「3D」を選択します
2. プロジェクトに名前を付け、保存場所を選択して「Create」をクリックします
3. Unity が空のプロジェクトを作成するまで待ちます
4. プロジェクトがロードされたら、Unity インターフェースの左上にあるツールを探索して、プロジェクトの周りを移動したり、Q-W-E-R-T-Y キーをショートカットとして使用したりします（詳細については、[Unity Interface Guide](https://connect-prd-cdn.unity.com/20200712/eb9ee2b8-7e1b-400f-b2eb-25fa2b2c01f6/Unity%20Interface%20Guide.pdf?_ga=2.7736690.1124958485.1594631993-2039673815.1594029658) を参照してください）。
5. 左上の Hierarchy パネルで、**Main Camera** と **Directional Light** のオブジェクトを見つけます
6. **Scene ビュー**と **Game ビュー**の間をクリックします
7. 右側にある **Inspector**パネルを探します
8. 左下の **Project パネル**を探します

ステップを完了としてマーク

## 3. シンプルなプリミティブの追加

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. 左上のメニューから、**GameObject > 3D Object > Cube** の順にクリックします
2. キューブを選択した状態で、**Inspector Panel** の X および Z のスケール値を 40 に設定してサイズを大きくします
3. **Game ビュー**をクリックして、キューブが広くて平らになったことを確認して、Unity のグランドプレーン (ground plane) として使用する形状を形成します

ステップを完了としてマーク

## 4. アセットストアから一人称視点のコントローラーをインポート

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

プロジェクトを移動するためには、3D 空間のユーザーの代わりとなる「一人称視点のコントローラー」を追加する必要があります。このプロジェクトのために選択したコントローラーは、以下に説明するように、**Unity Asset Store** から見つけてインポートすることができます。このアセットは、3D ギャラリープロジェクトで使用される他のアセットと同様に無料です。[**Unity Asset Store**](https://assetstore.unity.com/) には、無料および商用のアセットのライブラリが充実しています。テクスチャ、モデル、アニメーションから、プロジェクト全体のサンプル、チュートリアル、プロジェクトを拡張するためのアイデアまで、あらゆるものが含まれています。Unity アプリ内で、または[オンラインから **Unity Asset Store** へアクセス](https://assetstore.unity.com/)することができます。

1. **Game ビュー**のタブの横にある **Asset Store タブ**を選択します（このタブが表示されていない場合は、トップメニューから **Window > Asset Store** の順にクリックします）
2. 「[first person all-in-one](https://assetstore.unity.com/packages/tools/input-management/first-person-all-in-one-135316)」を検索し、Download をクリックして利用規約に同意し、Import をクリックします
3. 開いた「Import Unity Package」ウィンドウで**Import** をクリックします
4. **Scene ビュー**をクリックして、**Project**パネルの「Assets」フォルダー内にある「First Person AIO Pack」を探します
5. Project パネルで、**Assets > FirstPerson AIO Pack > DemoScene > Scene** の順に開き、「Demo.unity」をダブルクリックして開きます（個人プロジェクトのシーンを保存するように促されたら実行してください！)
6. デモシーンを試してみるために**再生**をクリックし、**Esc**を押して、デモシーンを停止するには、もう一度**再生**をクリック（または **CTRL/CMD + P** を使用）してください
7. **File > Open Scene** の順にクリックして、保存した場所を見つけ、個人プロジェクトのシーンに戻ります。
8. プロジェクトを開いた状態で、**Project パネル**に戻り、**First Person AIO Pack > First Person AIO** の順に開き、「FirstPerson-AIO」オブジェクト（青いキューブ）を Unity エディターの左側にある **Hierarchy**にドラッグします
9. 「FirstPerson-AIO」オブジェクトには既に **Camera**が含まれているので、**Right-Click > Delete** の順に選択し **Hierarchy** 内の **Main Camera** を削除します
10. ユーザーインターフェースの上部にある**再生**（または **CMD/CTRL + P** のショートカットを使用して）をクリックして、ユーザーがマウスで見て回り、W-A-S-D または矢印キーのいずれかで歩き回ることができます
11. 再生モードを終了するには、ショートカットキー **CMD/CTRL + P**を使用します
12. **重要！：File > Save**でプロジェクトを保存することを忘れないように！

ステップを完了としてマーク

## 5. 便利なショートカットとキーコマンド

Q&A (0)

先に進む前に、[Unity Shortcuts リソース](https://connect-prd-cdn.unity.com/20200712/eb9ee2b8-7e1b-400f-b2eb-25fa2b2c01f6/Unity%20Interface%20Guide.pdf?_ga=2.7736690.1124958485.1594631993-2039673815.1594029658)をダウンロードしてみませんか？Unity の基本的なキーボードコマンドのショートカットがいくつか含まれていますので、学生に配布してみてはいかがでしょうか。また、他のショートカットについては、[Unity マニュアル](https://docs.unity3d.com/Manual/UnityHotkeys.html?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035351311)をご覧ください。これは、特にモビリティを必要とするユーザーや学生にとって有用であり、いくつかの適応技術と組み合わせることで、より多くの人がツールにアクセスできるようになります。

作業を**中断**してください。プロジェクトを開始し、「プリミティブ」を追加し、**アセットストア**から一人称視点のコントローラーをインポートしたら、ユーザーが探索する（Week 3 で行う）ための、より興味深い 3D ギャラリー空間を作成する準備が整いました。今のところは、個人プロジェクトを中断して、自分の作品を振り返ってみてください。

先に進む前に、来週の開発に備えて**プロジェクトを保存しておいてください**。

ステップを完了としてマーク

## 6. 保存、保存、常に保存しよう！

Q&A (0)

作品を失うことほどイライラすることはありません。Unity はあなたの作品を自動的に保存しません。講師の方や学生の皆さんは、こまめに保存することを忘れないようにしなければなりません。これは、**File > Save**の順に選択するか、**CTRL/CMD + S** で選択することで行うことができます。

こまめに保存する習慣を身につけましょう！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
