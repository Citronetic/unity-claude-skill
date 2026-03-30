[Image: image]

# ゲームのプレイアブルデモの作成について

Tutorial

Beginner

+10XP

20 mins

1

Unity Technologies

[Image: ゲームのプレイアブルデモの作成について]Summary

本チュートリアルでは、モバイルゲームのプレイアブルデモを作成する方法を紹介します。これにより、スタジオ内外の関係者にコアコンセプトを提示し、確認することができます。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

待って、まだデモについて考えるのはちょっと早いのでは？

ほとんどの場合、それは正しいのですが、このチュートリアルでは、ゲームの中核的な要素をテストするための方法に焦点を当てています。一般的なスタジオでは、プレイ可能なデモを早期に作成することで、制作前に少人数でゲームプレイの仕組みや機能を紹介することができます。

大規模なスタジオがこのようにしている主な理由は、インディーゲーム開発者にも当てはまります。これは、開発に優先順位をつけ、ゲームが最初から楽しいものであることを保証するための素晴らしい方法です。実際、リソースやスタッフが限られているインディー開発者にとっては、開発に時間を割く前に、適切なことに集中することが特に重要です。

このチュートリアルでは、以下の点に焦点を当てます：

- プレイアブルデモの利点
- デモに何を盛り込むか
- ユーザーエクスペリエンス（UX）テストを構成する方法

ステップを完了としてマーク

## 2. プレイアブルデモの利点

Q&A (0)

早期にプレイアブルデモを作成する主な目的は、開発に着手する前に、ゲームの価値を主要な人々に示すことです。あなたが単独で開発を行っている場合は、開発に全面的に取り組む前に、あなたのアイデアが良いものであるかどうかを確認するための直感的なチェックになるかもしれません。また、小規模なスタジオや実績のあるインディー企業であれば、潜在投資家や開発パートナー候補にアピールするために初期のデモを使用することもあります。

デモの初期段階では様々なユースケースがありますが、一般的には 3 つのカテゴリーに分けられます。

[Image: image]

オーディエンスによっては、あなたのデモが、本番に向けてのリソースやサポートを大きく左右することもあるのです。

具体的に何が必要なのかは次のステップで検討しますが、ゲームの価値を示すことができるようになるまで、主なアイデアをプレイしてみるということです。

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

ステップを完了としてマーク

## 3. デモに盛り込むべきもの

Q&A (0)

デモには様々な方向性がありますが、注意すべき点は、「アピールすべき主要な機能やゲームの仕組みは何か」ということです。

**完璧を目指さない**

忘れてはいけないのは、デモがその目的を果たした後は、おそらく廃棄されるということです。コードを完璧にしたり、何かを磨くことに時間を費やす必要はありません。必要な機能が備わっていれば、デモはできるだけ早く完成させることができます。

**タイムリミットの設定**

インディー開発者が犯しがちな大きなミスは、デモに時間をかけすぎることです。*Civilization* のゲームのように、「あと1つ」と追加してしまいがちです。これに対抗するには、タイムボックスを設け、決められた日数でプロジェクトを完成させることを目標にするのが一番です。簡単なプロトタイプであれば、3～5日で完成させることも可能です。さらに、厳密なガイドラインがあれば、ゲームの本質が明確になります。

**重要なことに優先順位を付ける**

デモの主な目的は、ゲームコンセプトの最も重要な部分、つまりコアゲームプレイのループを見せることです。優先順位の高い順に、デモはコアゲームプレイ、メタゲーム、そしてコンテンツに焦点を当てるべきです。メタゲームとは、経済やプレイヤーの進行などのことを指し、コンテンツとは、レベルやアイテム、ゲームのテイストなどのことを指します。デモでは、最初の 2 つに集中するのがベストです。コンテンツは通常、不必要な開発時間を要しますので、初期の優先事項ではありません。

**クリアに**

すべてをアピールしたい気持ちはわかりますが、機能やゲームプレイのメカニックが多すぎてデモが複雑になりすぎないようにしましょう。効果的なデモにするためには、プレイヤーに注目してもらいたい点を明確にする必要があります。例えば、ジャンプするゲームプレイメカニックをテストする場合、ジャンプしたときの効果音や視覚的な演出など、可能な限り詳細な情報を追加しますが、それ以外の部分はシンプルにします。

**無駄な手間は省き、効率よく作業する**

デモを制作する際の一つの方法として、[Unity アセットストア](https://assetstore.unity.com/)などであらかじめ用意されているゲームアセットやフレームワーク、メカニックを活用することが挙げられます。これらのアセットは、安価で簡単に組み込むことができるため、デモの開発時間を短縮することができます。また、製品版で使用したいフレームワークをテストするのにも最適な方法です。

[Image: image]

ゲームメカニクスや機能をアピールする以外に、デモの最大の目的は、できるだけ時間をかけないことです。常に最も効率的なアプローチをとり、ツールやリソースを活用することで、より簡単に作業を進めることができます。

次のセクションでは、デモが完成した後、ユーザーエクスペリエンステストを成功させるための方法をご紹介します。

♪ [MUSIC] ♪Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

ステップを完了としてマーク

## 4. ユーザーエクスペリエンス（UX）テストの構成について

Q&A (0)

テストを実施するための正しい方法を知ることは、そもそもテストを行うことと同じくらい重要です。プレイヤーから適切な情報を得ることは思った以上に難しく、自分のテストに誤ってバイアスをかけてしまい、不正確な結果になってしまうこともあります。

[Image: image]

**プレイヤーを答えに誘導しない**

誰かが自分のゲームをプレイしているときには手助けをしたくなるものですが、テスター自身に任せておくことも大切です。よくある間違いのひとつに、ヘルプや情報を与えすぎたり、誘導的な質問をしたりすることがあります。テストを行う際には、以下の点に注意して、偏りのないようにしてください。

**プロセスを話してもらう**

デモをプレイしている人に、自分の考えを話してもらうことは不可欠です。最初は少し気まずいかもしれませんが、プレイヤーがゲームをどのように進めているのか、何が楽しいのか、何に不満を感じているのかを記録するには最適な方法です。同様に、テスト中は現状を前進させる以外に、話をしないようにすることが大切です。

**記録して、メモを取る**

これはとても簡単なことですが、必ず [OBS](https://obsproject.com/) のようなツールを使ってテストを記録し、詳細なメモを取るようにしてください。

**フォローアップ**

多くの開発者が忘れがちなのが、テスターへのフォローアップです。特定の機能やゲームメカニクスに関するフィードバックがあった場合、それをフォローアップするのはとても良いアイデアです。フィードバックに対応した後、新しいバージョンのゲームをプレイしてもらうことで、自分たちの方向性が正しいかどうかを確認することができます。

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

ステップを完了としてマーク

## 5. まとめ

Q&A (0)

本チュートリアルでは、ゲームのプレイアブルデモを作成する主な理由、作り込む必要があるもの、ユーザーテストのベストプラクティスを探りました。すべてのゲームにデモの制作が最適というわけではありませんが、開発に着手する前に初期のコンセプトをより具体的に確認するために、デモの制作をお勧めします。

次回のチュートリアルでは、プレイヤーをゲームに引き留め、素晴らしい体験をしてもらうための「リテンション」と「エンゲージメント」に焦点を当てます。

- ファーストタイム・ユーザーエクスペリエンス（FTUE）
- リテンションとエンゲージメントを高めるためのデザインの仕方

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
