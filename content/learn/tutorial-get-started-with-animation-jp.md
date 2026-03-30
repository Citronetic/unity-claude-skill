[Image: image]

# アニメーションをはじめよう

Tutorial

Beginner

+10XP

20 mins

0

Unity Technologies

[Image: アニメーションをはじめよう]Summary

このチュートリアルでは、アニメーターの役割と責任について学び、プロジェクトを設定してアニメーションを開始します。

このチュートリアルが終わるころには、次のことができるようになります：

- リグの種類と用途を定義する

Resources

- [CC_Animation.zip](https://unity-connect-prd.storage.googleapis.com/20211207/4a61686a-d8dc-4ba3-a45c-f4485407cf35/CC_Animation.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955819770)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

ゲームプレイのメカニックとして、ストーリーを伝えるために、あるいは単に UI パネル間の移行手段として、アニメーションはあらゆる Unity プロジェクトに命を吹き込むための重要な要素となっています。Unity で扱うアニメーションには、他のプログラムからインポートするアニメーションと、エディター内で作成するアニメーションの大きく 2 種類があります。このプロジェクトでは、その両方について学び、自分のプロジェクトにどのように適用できるかを学びます。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

#### Unity が初めての方

Unity を初めて使う方、歓迎します！[**Unity Essentials 学習パスウェイ**](https://learn.unity.com/pathway/unity-essentials)は、Unity エディターでの設定と準備のために用意されています。Unity Essentials は、Unity エディターで作成するための設定と準備をするための学習パスウェイです。Creative Core: Animation に進む前に、このパスウェイを完了させることをお勧めします。

#### Unity Hub の更新

Unity プロジェクトの設定を始める前に、Unity Hub を最新リリースに更新することを検討してください。古いバージョンの Hub を使用している場合、提供される手引きとあなたの経験との間に差異が生じる可能性があります。

#### Unity エディターの基本をおさらい

Unity エディターの基本的な知識を再確認したい場合は、いつでも [**Explore the Unity Editor**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) を見直すことができます。

#### Unity プロジェクトの設定

Unity プロジェクトを設定するには：

**1.**  **[Unity 2020.3 LTS](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa)**をインストールしていない場合は、インストールしてください。

**2.** この学習体験のための[プロジェクト](https://connect-prd-cdn.unity.com/20211207/4a61686a-d8dc-4ba3-a45c-f4485407cf35/CC_Animation.zip?_ga=2.44410848.536878422.1638785511-1816326788.1628512656)をダウンロードしていただきます。

**3.**  コンピューター上の適当な場所を特定し、そこにプロジェクト フォルダーを解凍してください。Unity のプロジェクトフォルダーを空の親フォルダーから削除します。

**4.**  [Unity プロジェクトを Unity Hub に追加します](https://learn.unity.com/tutorial/project-setup-processes#60ed7a5aedbc2a002520b6ea)。

**5.**  Unity Hub からプロジェクトを開きます。

**6.**  Unity エディターの Project ウィンドウで、Scenes フォルダーを探し、**TutorialScene_Animation_Outdoor** シーンを開いてください。

**7.**Window ドロップダウンから **Animation > Animation**と進み、Animation エディターを開きます。

**8.** Animation エディターを Project ウィンドウの横にドラッグして、エディターの下半分にドッキングさせます。

[Image: image]

これで、あなたのプロジェクトが使えるようになりました！

ステップを完了としてマーク

## 3. ようこそ、「Creative Core：アニメーション」へ

Q&A (0)

#### 「Creative Core: アニメーション」が目指すものは？

この学習体験の目的は、Unity でさまざまなインタラクティブな体験のためにアニメーションを使用する最も一般的な方法を紹介することです。ここで学んだことは、ホビーストであれ、あらゆる分野のプロのクリエイターを目指している人であれ、自分のプロジェクトにアニメーションを適用するために活用することができます。

#### この学習体験で何をするのか？

このチュートリアルを進めていくと、従来のアニメーションの指導に長年使われてきたのと同じエクササイズに沿って、初めてエディター内でアニメーションを作成することができます。また、ユーザーの入力に応じてアニメーションが変化するオブジェクトを作成し、インタラクティブな体験にアニメーションを統合する方法も学びます。ゼロからアニメーションを作成するだけでなく、Maya などの外部デジタルコンテンツ制作ツールで作成されたインポートアニメーションの設定や操作方法についても学びます。最後に自分のアニメーションのシーンを作成します。

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

#### 学習成果はどうなるのか？

この学習体験の終了時には、Unity でアニメーションを作成する際の主要な共通コンポーネントをすべて扱えるようになります。基本的なアニメーションシーケンスをプロジェクトに実装することができるようになります。

これらのスキルを応用して、選択したガイド付きプロジェクトや自主制作プロジェクト（Creative Core パスウェイを修了した場合）の一部、または Unity で作成したその他のリアルタイム体験をアニメーション化できるようになります。

ステップを完了としてマーク

## 4. Unity のアニメーターは何をするのですか？

Q&A (0)

#### 背景

Unity のアニメーターは、キャラクターやセット部分からカットシーンやインターフェイスまで、インタラクティブな体験のためのオブジェクトをアニメーション化する責任を負っています。Unity ではどんなものでもアニメーションさせることができます。

一般的に、非常に複雑なオブジェクトや詳細なアニメーションは、Autodesk Maya や Blender などの外部**デジタルコンテンツクリエーション (DCC、Digital Content Creation)** アプリケーションで作成されます。これらの DCC は、アニメーターの作成プロセスを簡素化するための強力なアニメーションツール群を備えています。一般的には、 **Rig***/**リグ**（*キャラクターをアニメーションさせるための骨格のような基礎構造）を作成するためのツール、ヘアやファーなどのダイナミクス、保存されたポーズなどが含まれます。

このような理由から、エディター内のアニメーションは、より単純なオブジェクトや、特定のシーンに関連するアニメーション（例えば、ゲームレベル内の 2 点間を移動するプラットフォームなど）に保存されます。外部で作成したアニメーションと内部で作成したアニメーションを同じプロジェクトで使用することは、非常に一般的です。

Unity で活躍するアニメーターになるには、どのような心構えが必要なのか、クリエイターの声を聞いてみましょう：

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

#### 役割

他の役割と同様に、アニメーターが Unity で何をするかは、所属するチームに大きく依存します。彼らは多くの時間を Unity 以外の他のプログラムでの作業に費やすかもしれませんし、Unity のみで作業を行うかもしれません。

チームによっては、UnityのアニメーターはEditorでのアニメーションのインポートや設定に精通している必要がありますし、アニメーターコントローラー（あるアニメーションから別のアニメーションへの遷移を決定するコンポーネント）の設定方法も知っておく必要があるかもしれません。このような理由から、アニメーターは Unity のすべてのアニメーションコンポーネントを熟知していることが重要であり、特に基本的なスクリプトの知識を持っていることが役に立ちます。アニメーターは、アニメーションを動かすためのスクリプトを書く必要はあまりありませんが、チーム内のプログラマーが書いたスクリプトを実装することがよくあります。

#### ツール

アニメーターは、Unity のほかにも、アニメーションを制作するためのソフトウェアをよく使います。これには以下が含まれます：

- [Autodesk Maya](https://www.autodesk.com/products/maya/features)： 映画、テレビ、長編アニメ、ゲームにおけるアニメーション制作の業界標準として長い間認められています。Maya は、モデル生成やビジュアルエフェクトなど、アニメーション以外の用途にも使用できる堅牢なデジタルアート制作ツールです。
- [Autodesk 3ds Max](https://www.autodesk.com/products/3ds-max/overview)：3ds Max は Maya と同様、多機能なデジタルアート制作ツールで、歴史的にゲーム業界で選ばれてきたソフトウェアです。
- [Blender](https://www.blender.org/)：完全無料のオープンソースである Blender は、インディーコミュニティーのクリエイターに長く愛用されてきましたが、プロフェッショナル市場でも本格的な普及が始まっています。Max や Maya と同様に、Blender はアニメーションツールの強固なコレクションを特徴とする多目的ツールです。

ステップを完了としてマーク

## 5. なぜアニメーションが重要なのか。

Q&A (0)

アニメーションは生命の幻想と言われることがあります。生き物にはエネルギーがあり、それはしばしば制御された動きに変換されます。鳥が飛び、人が踊り、チーターが走る ─ こうした動きをデジタルで再現するのが、アニメーションなのです。

アニメーションは必ずしも動きだけではありません。動きは物理を使うなど、他の方法で実現することができます。地面に落ちる石は、A 地点から B 地点に行くのにアニメーションは必要ありません。物理システムは、その目的を達成するために重力を数学的に計算することができます。人が歩くという動作は物理ではシミュレーションできないので、アニメーションが活躍するのは意図した動きなのです。

今、業界で活躍するクリエイターからアニメーションの重要性を学ぶには、以下の動画をチェックしてみてください！

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

ステップを完了としてマーク

## 6. 次のステップ

Q&A (0)

このチュートリアルでは、プロジェクトを設定し、アニメーターが制作において果たす役割について学びました。次のチュートリアルでは、最初の 3D アニメーションを作成してみましょう！

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
