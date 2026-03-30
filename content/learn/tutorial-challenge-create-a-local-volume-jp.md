[Image: image]

# チャレンジ：ローカルボリュームの作成

Exercise

Beginner

+60XP

60 mins

0

Unity Technologies

[Image: チャレンジ：ローカルボリュームの作成]Summary

Local Volume (ローカルボリューム) を使用すると、1 つのシーン内で全く異なるビジュアルスタイルを定義することができます。このチュートリアルでは、ポストプロセスプロファイルを新規に作成し、シーンの特定の領域に適用します。

このチュートリアルが終わるころには、次のことができるようになります：

- シーンに新しいローカルポストプロセスボリュームを追加し、その境界線を編集する
- Global Volume (グローバルボリューム) または Local Volume (ローカルボリューム) がより適切であるシナリオを説明する
- ポストプロセスで新しいスキルを披露する

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

ここまでは、シーン全体に作用するポストプロセスを適用するために、グローバルボリューム (Global Volume) を使用してきました。このチャレンジでは、ローカルボリューム (Local Volume) を使用して、シーンの定義されたローカルな領域に対してポストプロセスエフェクトを適用します。

ステップを完了としてマーク

## 2. なぜローカルボリュームを使うのか？

Q&A (0)

**Local Volume** (ローカルボリューム) は、ユーザーが特定の物理的な空間に入ったときにシーンのビジュアルスタイルを変更したい場合に便利です。

ビデオゲームでいえば、ボス戦が始まるときに、ちょっと暗くて不気味なシーンにすることがありますよね。また、レンズの歪みや Motion Blur (モーションブラー) を適用して、プレイヤーが有毒な場所に入り、めまいや吐き気がしていることを示すこともできます。

ステップを完了としてマーク

## 3. おさらい：ローカルボリュームはどのように機能する？

Q&A (0)

グローバルボリューム (Global Volume) を使用すると、カメラがシーンのどこにあっても、ポストプロセスエフェクトがカメラに適用されます。ここまでがグローバルボリュームの使い方です。

一方、ローカルボリューム (Local Volume) は、シーン内で定義された小さな領域です。ポストプロセスエフェクトは、カメラがその定義された領域内にあるときのみ適用されます。

[Image: image]ステップを完了としてマーク

## 4. ギャラリーシーンへのローカルボリュームの追加

Q&A (0)

次のチャレンジです：

屋内のギャラリーシーンでは、ギャラリーのオブジェクトの 1 つにローカルボリュームを追加し、ユーザーがそれに近づくとポストプロセスプロファイルを変更します。

[Image: image]

例えば、完成すると下のサンプル画像のように、青いキューブのアーティファクトが神秘的で力強いオーラをまとっているように見えるかもしれません。

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

これはチャレンジなので、ここではステップバイステップの手順は示しません。この方法については、Unity の[ボリュームに関するドキュメント](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Volumes.html#:~:text=The%20Universal%20Render%20Pipeline%20(URP,to%20calculate%20a%20final%20value.?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952261526)を参照するか、またはググってみてください。

このチャレンジには、少なくとも 30 分を費やすことを想定してください。

ステップを完了としてマーク

## 5. チャレンジの基準

Q&A (0)

以下の条件を満たせば、成功したと言えるでしょう：

- ギャラリー内のオブジェクトに近づくと、ポストプロセスのプロファイルが変化します。
- 数メートルの間にポストプロセスエフェクトが徐々に変化していきます。

ステップを完了としてマーク

## 6. 次のステップ

Q&A (0)

おめでとうございます！コアとなるポストプロセスに必要な学習は完了しました。

あなたは Unity エンジンにおける主要なクリエイティブ領域の一つに関する主要なスキルと知識をお持ちの方です。

これで、このスキルを他のプロジェクトに応用する準備が整いましたね。次は何を作ってくれるのか、楽しみです。

ステップを完了としてマーク任意のステップ

## 7. プロジェクトの投稿

Q&A (0)

このチャレンジが完了したら、作成したプロジェクトを投稿して共有しましょう。これはこのミッションをクリアするための必須条件ではありませんが、自分の進捗状況を共有し、他の人の作品から学ぶことができる素晴らしい機会です。

プロジェクトの投稿手順：

**1.**  このチャレンジの具体的な手引き（上記）を確認し、自分のプロジェクトがチャレンジの基準を達成しているかどうかをチェックしてください。投稿に締め切りはありませんので、必要な時間をかけることができることを覚えておいてください。

**2.** [プロジェクトの WebGL ビルドの作成と公開](https://learn.unity.com/tutorial/create-and-publish-webgl-builds)。Unity Play やその他のサードパーティホスティングプラットフォームで投稿を公開することができます。

**3.**  この手順の一番下にある投稿フォームに、ホストされた WebGL ビルドへのリンクを追加します。

**4.**  投稿タイトルと説明文を追加します。作成プロセスや作成したプロジェクトについて共有すべき追加情報がある場合は、説明で共有することができます。

**5.**  投稿した作品を閲覧できる人を設定：

- **Public：**このチュートリアルを閲覧できる人なら誰でもアクセス可
- **Private：** 投稿者本人のみ

**6.**  **Save and preview submission**を選択します。

**7.**   投稿プレビューを確認し、CAPTCHA テストを行い、**Submit and continue** を選択してください。

#### 提出するにはログインしてください

ログイン

## Complete this Tutorial

すべてのステップを完了としてマーク
