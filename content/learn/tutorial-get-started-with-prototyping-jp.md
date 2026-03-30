[Image: image]

# プロトタイピング入門

Tutorial

Beginner

+10XP

25 mins

0

Unity Technologies

[Image: プロトタイピング入門]Summary

夢のあるプロジェクトの開発に夢中になる前に、少し小さなところからプロトタイプを作ることが大切です。プロトタイピングは、あなたが作りたいリアルタイム体験の核となるべきものを見つけ出し、それを実現するためのさまざまなアプローチを試す機会を与えてくれます。

このチュートリアルが終わるころには、以下のことができるようになります：

- プロトタイピングの目的を説明する。
- ラピッドプロトタイピングと進化的プロトタイピングの違いを説明する。

Resources

- [CC_Prototyping.zip](https://unity-connect-prd.storage.googleapis.com/20211207/5eed3542-2877-44d6-b7f5-cec7510144ff/CC_Prototyping.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955892869)

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

夢のあるプロジェクトの開発に夢中になる前に、少し小さなところからプロトタイプを作ることが大切です。プロトタイピングは、あなたが作りたいリアルタイム体験の核となるべきものを見つけ出し、それを実現するためのさまざまなアプローチを試す機会を与えてくれます。

プロトタイピングにはさまざまなアプローチがありますが、探索とイテレーションはプロセスの核となるものです。

**Creative Core: Prototyping** では、プロトタイピングのさまざまなアプローチについて学び、私たちが作成したサンプルを見ながら、独自のプロトタイピングに取り組みます。プロトタイピングを初めて体験される方は、どんなものを作りたいかに関わらず、この学習体験が何かの役に立つことを願っています！

このプロジェクトを完了すれば、いつでも必要なときにプロジェクトのプロトタイプを作成できるようになります。準備はいいですか？さあ、はじめましょう！

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

#### Unity は初めてですか。

Unity を初めてお使いになる方、ようこそ！[**Unity Essentials 学習パスウェイ**](https://learn.unity.com/pathway/unity-essentials)は、Unity エディターで制作するための設定や準備を支援するために設計されています。**Creative Core: Prototyping** に進む前に、このパスウェイを完了させることをお勧めします。

#### Unity Hub のアップデート

Unity プロジェクトのセットアップを開始する前に、Unity Hub を最新リリースに更新することを検討してください。古いバージョンの Hub を使用している場合、提供される手引きとあなたの経験との間に差異が生じる可能性があります。

#### Unity エディターの基本をおさらい

Unity エディターの基本的な知識を再確認したい場合は、いつでも [**Explore the Unity Editor**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) を見直すことができます。

#### Unity プロジェクトのサンプルをダウンロード

この学習体験のサンプルプロジェクトにアクセスするには：

**1.**  この学習体験のための[プロジェクト](https://connect-prd-cdn.unity.com/20211207/5eed3542-2877-44d6-b7f5-cec7510144ff/CC_Prototyping.zip?_ga=2.110551233.536878422.1638785511-1816326788.1628512656)は、Tutorial Materials からダウンロードしてください。

**2.**  コンピューター上の適当な場所を特定し、そこにプロジェクトフォルダーを解凍してください。Unity のプロジェクトフォルダーを空の親フォルダーから削除します。

**3.** [Unity プロジェクトを Unity Hub へ追加](https://learn.unity.com/tutorial/project-setup-processes#60ed7a5aedbc2a002520b6ea)します。

**4.** [**Unity** **2020.3 LTS**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa) インストールしていない場合は、左のリンク先からインストールします。

ステップを完了としてマーク

## 3. Creative Core: Prototyping へようこそ！

Q&A (0)

#### 「Creative Core: Prototyping」の目指すもの

この学習体験の目的は、Unity でリアルタイム体験のプロトタイプを作成するための基本的な方法を学習することです。自分のプロトタイプを作成しながら、途中の各ステージで、私たちが作成したウォーキングシミュレーターのプロトタイプのサンプルを探索します。

ジェネラリストの開発者を目指すにしても、特定の分野に特化するにしても、プロトタイピングの経験は、単独作業でも共同プロジェクトでも非常に役に立つでしょう。

#### この学習体験ですること

この一連のチュートリアルでは、インタラクティブな体験のプロジェクトを、まずアイデアから始め、最初のプロトタイプを作成するまでの手順を説明します。コーディングの知識がなくても、基本的なウォーキングシミュレーターのプロトタイプを作成することで、この体験を完成させることができます。

[**Creative Core パスウェイ**](https://learn.unity.com/pathway/creative-core)を終了した場合、最初のプロトタイプの作成が完了したら、これを基に独立したプロジェクトを始めることができます。ここでは、学習パスウェイの各分野から新たに習得したスキルを適用し、洗練された魅力的な体験を作り出します：

- [Shaders and Materials](https://learn.unity.com/mission/creative-core-shaders-and-materials?pathwayId=61a65568edbc2a00206076dd)
- [Lighting](https://learn.unity.com/mission/creative-core-lighting?pathwayId=61a65568edbc2a00206076dd)
- [VFX](https://learn.unity.com/mission/creative-core-vfx?pathwayId=61a65568edbc2a00206076dd)
- [Animation](https://learn.unity.com/mission/animation?pathwayId=61a65568edbc2a00206076dd)
- [Cameras](https://learn.unity.com/mission/creative-core-cameras?pathwayId=61a65568edbc2a00206076dd)
- [Post-processing](https://learn.unity.com/mission/creative-core-post-processing?pathwayId=61a65568edbc2a00206076dd)
- [Audio](https://learn.unity.com/mission/creative-core-audio?pathwayId=61a65568edbc2a00206076dd)
- [UI](https://learn.unity.com/mission/creative-core-ui?pathwayId=61a65568edbc2a00206076dd)

#### 学習成果について

終了時には、リアルタイム体験のためのプロトタイピングの基本的なプロセスを明確に理解することができます。また、そのプロセスを利用して、自分のプロジェクトに取り組むことができるようになります。これは、一人での作業や、チームの一員としての貢献にもつながるでしょう。

#### エキスパートクリエイターの知見

この学習体験では、エキスパートのクリエイターである [Junub Games](https://junubgames.com/) 社の創業者兼 CEO、[Lual Mayen](https://lualmayen.org/) 氏の意見を参考にしながら学習を進めていきます。

ステップを完了としてマーク

## 4. プロトタイピングとは？

Q&A (0)

鍵やマグカップなど、日常生活でよく使うものをツールとして選択してください。

以下の質問にお答えください：

- そのオブジェクトは何のためにあるの？
- その使用体験は際立ったものなのか、それとも一日の中でスムーズに行われるものなのか？
- 使ってみてよかったと思うことはあるか？
- 使用感について不満な点はあるか？

1 回目から、あるいは 5 回目から完璧に設計/制作されるものは稀です。毎日使用するオブジェクトであれば、作った人の手によって最終バージョンが完成するまでに、さまざまな開発バージョン、つまり**プロトタイプ**が作られたことでしょう。

プロトタイプはオブジェクトだけでなく、リアルタイム体験など、さまざまなことにも関係するのです。

**注：**この学習体験では、ゲームまたはゲームに似たインタラクティブなリアルタイム体験のプロトタイピングに焦点を当てます。ただし、この学習で学ぶ原理は、他のさまざまな体験の作成にも適用されます。

ステップを完了としてマーク

## 5. なぜプロトタイプを作るのか？

Q&A (0)

人々はゲームを作ってきたのと同じように、新しいバージョンや改良されたバージョンを作って他の人と共有してきたのです。ただし、20 世紀に入ってビデオゲームが台頭し、業界の慣行や規範が確立されたことで、プロトタイピングはゲーム開発において重要な役割を果たすようになりました。

ワクワクするような素晴らしいアイデアがあれば、すぐにでも実行に移したいと思うのは当然のことです。特に、一人で取り組む場合は、共同研究者とアプローチの仕方を合意する必要がないため、そのように思われるかもしれません。ただし、それにはリスクが伴います。そのアイデアはあなたにとって良いものに思えるかもしれませんが、あなたのゲームがそうなることをどうやって知ることができるでしょうか？また、ゲームを実装するために頭の中にあるアイデアが、実際に最も適切な方法であるとどうしてわかるのでしょうか？

プロトタイピングは、ゲームのアイデアがどのようなプレイ感覚をもたらすのか、それをサポートするために必要なシステムをどのように実装するのか、この両方を知るための素晴らしい方法なのです。

様々なプロトタイプの制作に携わってきたエキスパートクリエイターが、プロジェクトにおけるプロトタイピングの役割について語ります。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 日本語, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

プロトタイピングがゲームの最終デザインにどのように影響するかについては、[**Unity USC Games Unlocked**](https://learn.unity.com/tutorial/why-prototype?courseId=5ef12a7eedbc2a0020b2774a&projectId=5efa5484edbc2a37be13b51e#5efa55a3edbc2a3f1c6dd6d1) コースで詳しく知ることができます。

ステップを完了としてマーク

## 6. プロトタイプサンプルの検証

Q&A (0)

自分で作業を始める前に、この学習プロジェクトのために作成した洗練されたバージョンのプロトタイプのサンプルを数分かけて探索してみましょう。

私たちが選んだ体験は、ごく基本的なウォーキングシミュレーターです。この基本コンセプトがあれば、最小限のユーザーインタラクションから、さまざまな体験を作り出すことができます。このプロトタイプのサンプルでは、閉ざされたエリアから脱出することが目標です。

探索するときは、次の点を考慮してください：

- 体験の核となるインタラクションと、それがユーザーとしてどのように感じられるか。特に満足のいくもの、あるいは不満の残るものはあるか？その理由を特定できるか？など
- Creative Core のパスウェイ領域が、この洗練されたプロトタイプの全体的な体験に与える影響について、あなたの意見をお聞かせください。

サンプルプロトタイプの洗練されたバージョンを確認するには：

**1.**  Unity エディターで **Creative Core: Prototyping** プロジェクトを開きます。

**2.**  Project ウィンドウで、**Assets > CreativeCore_Prototyping > Scenes**の順に進みます。**4-FinalLook** シーンを開きます。

[Image: image]

**3.** **Play**を選択すると、Play モードになり、プロトタイプを探索することができます。キャラクターコントローラーは、一人称視点の FPS スタイルのコントローラーです。コントローラーのできること：

- マウスやコントローラーで向きを変えます。
- **矢印キー**または **WASD**で移動します。
- **E**を選択するか、選択可能なアイテムをクリックすると、カーソルが小さな手に変わり、そのことを示します。

**注：**画面の真ん中に小さな白い点があります。これは、ナビゲーションと乗り物酔いを防ぐためのものです。

**4.**  再生が終わったら、もう一度**Play** を選択して、Play モードを終了します。

ステップを完了としてマーク

## 7. ラピッドプロトタイピングと進化的プロトタイピング

Q&A (0)

さて、作成したプロトタイプを確認したところで、プロトタイピングの基本をおさらいしておきましょう。

プロトタイピングには様々なアプローチがあります。ここでは、インタラクティブなリアルタイム体験のデザインによく使われる 2 つのアプローチと、関連するツールを紹介します。

#### ラピッドプロトタイピング

**ラピッドプロトタイピング** (**Rapid prototyping**) では、要件を定義し、その要件に基づいた体験のプロトタイプを素早く作成します。このプロトタイプは通常、本番環境には持ち込まれません。コンセプトの証明として採用された場合、ゲームの本番環境には新しいバージョンが作成されます。しかし実際には、特にホビーイストや小規模なインディー開発者のプロジェクトでは、ラピッドプロトタイプが本番に進められることもあります。

この方法で作業する利点は、要件や前提条件をテストして改良し、比較的短時間でゲームの複数の方向性を探ることが可能なことです。この方法は、迅速なピボットをサポートすることができます。これは、開発プロセスにおいて頻繁に役立つことなのです！

ただし、テスト用にインタラクションを素早く実装することと、ゲームシステムを適切に実装することは別なので、この方法は本番になったらまたやり直さなければならないかもしれません。

#### 進化的プロトタイピング

**進化的プロトタイピング** (**Evolutionary prototyping**) では、ユーザーに提供する最終的な体験となることを目的とした機能的プロトタイプを作成します。このようなプロトタイプのシステムは、最初からこのような長期的な視点を優先して構築されており、意図した通りの体験の規模に適したシステムを構築することが、プロトタイプの重要な要件となることが多いのです。進化的プロトタイプは、開発期間中に改良が加えられますが、最初のプロトタイプは最終的な体験の核となるものです。

ゲーム開発チームによっては、最初にラピッドプロトタイピングの段階で方向性を決めた後、進化的プロトタイプを作成してアプローチをさらに洗練させ、本番環境に入る場合もあります。

この学習体験では、ラピッドプロトタイピングに焦点を当てます。

ステップを完了としてマーク

## 8. 他のクリエイターは何をしてきたの？

Q&A (0)

リアルタイムクリエーションなど、クリエイティブな分野でのプロトタイピングには、実に多くの魅力的な事例があります。自分のアイデアを決める前に、他のクリエイターの経験やプロトタイピングのアプローチを検討することは有益なことでしょう。

ここでは、専門のクリエイターが最初に作ったプロトタイプについて語ります。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 日本語, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

また、この学習体験を始めるにあたって、いくつかのアドバイスがあります。

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 日本語, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

#### 学習効果を高める

理解を深めるために、あなたにとって最も興味深いタイプの体験のプロトタイプを、時間をかけてリサーチしてみてください。きっと興味深い事例やストーリーが見つかるはずです！

ここでは、いくつかの例をご紹介します：

- [**Iwata Asks: Splatoon**](https://iwataasks.nintendo.com/interviews/#/wiiu/splatoon/0/0)：『Splatoon』開発チームへの詳細なインタビュー
- [**Changemakers showcase**](https://unity.com/humanity/showcase)：Unity for Humanity のクリエイターによる社会的影響力があるプロジェクトのショーケース
- [**On The Level**](https://www.youtube.com/playlist?list=PLc38fcMFcV_sCvRjcKmG8Cby1Q4rG83ew)：[Game Maker’s Toolkit](https://www.youtube.com/channel/UCqJ-Xo29CKyLTjn6z2XwYAw) によるビデオゲームシリーズで、ホストがビデオゲームのステージを作った開発者とともにプレイし、議論するもの

**Devs Play [Season 1](https://www.youtube.com/watch?v=hPnl60dZnbY&list=PLIhLvue17Sd6u2akeZZdYVBxNtfWZPm5W)/[Season 2](https://www.youtube.com/watch?v=HrPBCh-xDsQ&list=PLIhLvue17Sd5E75N5z8hK0-X7LXgGsJA5)**：[Double Fine Productions](https://www.doublefine.com/)****によるビデオゲームシリーズで、ゲーム開発者が自分たちの作ったゲームをプレイして議論するものです。

ステップを完了としてマーク

## 9. 次のステップ

Q&A (0)

このチュートリアルでは、まず、独自のプロトタイプの背景となる情報を調べ、次にアイデアを選び、ターゲットとなるオーディエンスを特定します。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
