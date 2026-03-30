[Image: image]

# グローバルポストプロセッシングボリュームの作成

Tutorial

Beginner

+10XP

5 mins

6

(18)

Unity Technologies

[Image: グローバルポストプロセッシングボリュームの作成]Summary

スクリーンベースのイメージエフェクトは、アプリケーションのカメラに特殊なフィルターを追加し、プロジェクトのビジュアルクオリティを飛躍的に向上させることができます。Unity のポストプロセッシングスタックは、これまでのスクリーンベースのイメージエフェクトに取って代わり、簡単に設定できる方法でそれらをすべて組み合わせます。本チュートリアルでは、ポストプロセッシングスタック (post processing stack) の作成と設定について学びます。

Languages available:

日本語English日本語日本語

## 1. グローバルポストプロセスボリュームの作成 ー 入門

Q&A (0)

本チュートリアルは、*Unity 2019 LTS と Post Processing 2.3.0*を使用して検証されています。

#### [https://learn.unity.com/tutorial/creating-a-global-post-processing-volume-2019-3](https://learn.unity.com/tutorial/creating-a-global-post-processing-volume-2019-3)

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

## 2. グローバルポストプロセッシングボリュームの作成

Q&A (0)

スクリーンベースのイメージエフェクトは、アプリケーションのカメラに特殊なフィルターを追加し、プロジェクトのビジュアルクオリティを飛躍的に向上させることができます。Unity のポストプロセッシングスタックは、これまでのスクリーンベースのイメージエフェクトに取って代わり、簡単に設定できる方法でそれらをすべて組み合わせます。デザイナーは、レンダリング順序などの技術的な側面を気にすることなく、複数のエフェクトの外観を簡単に調整できるため、エフェクトの視覚的な美しさに純粋に集中することができます。グローバルポストプロセッシングボリュームは、デザイナーがポストプロセッシングスタックを使用して、プロジェクトの全体的なルックアンドフィールを作成することができます。

ポストプロセッシングを使用するには、まずパッケージマネージャーからダウンロードする必要があります。

1. Window ドロップダウンから **Package Manager** を選択します。

2. Package Manager ウィンドウの左上にある **All packages**を選択します。

3. 左側のリストから **Post-Processing** を選択し、ウィンドウの右側にある**Install**ボタンをクリックします。

4. Package Manager が更新されると、In Project タブに Post-Processing が表示されます。Package Manager ウィンドウを閉じます。

5. Project ウィンドウで、右クリックして **Create > Post-Processing Profile**を選択します。

6. 新しいプロファイルには、どこで使用されるかを示す説明的な名前を付けます (**画像 01**)。

[Image: image]

7. イメージエフェクトをプロファイルに追加する前に、編集中のエフェクトを確認できるようにシーンを設定する必要があります。

8. Hierarchy の中で、右クリックして**Create Empty**を選択します。これで、シーン内に空のゲームオブジェクトが作成されます。

9. ゲームオブジェクトの名前を「PostProcessingGO」に変更します。

10. Inspector で **Add Component**ボタンをクリックし、**Post-Process Volume** を検索します。リストからボリュームを選択して、オブジェクトに適用します。

11. Post-Process Volume コンポーネントの上部にある**Is Global**ボックスを有効にします。

12. Weight と Priority はデフォルトのままで、ステップ 6で作成したポストプロセッシングプロファイルを Profile スロットにドラッグします (**画像 02**)。

[Image: image]

13. Inspector の上部にある **Layer** ドロップダウンをクリックし、**Edit Layers** を選択します。

14. 空いているレイヤースロットに「PostProcessing」と入力します。

15. **PostProcessingGO**を再度選択し、Inspector の上部で、そのレイヤーを PostProcessing に設定します。

16. Hierarchy で**Main Camera**を選択し、Inspector で**Post-Processing Layer**を追加します。

17. Post-Processing Layer コンポーネントで、**Layer**ドロップダウンをクリックし、**PostProcessing**を選択します。

シーンは、ポストプロセッシングプロファイルを編集できるように設定されました。プロファイルに加えられた編集内容は、Game ビューと Scene ビューの両方に表示されます。

18. PostProcessingGO を選択します。Post-Processing Volume コンポーネントの中の**Add Effect** ボタンをクリックして、エフェクトを追加します。新しいプロファイルエフェクトをクリックして、そのオプションメニューを開きます (**画像 03**)。

[Image: image]

デフォルトでは On に設定されていますが、エフェクトのオプションはどれも有効ではありません。すべてを有効にするには、エフェクトのオプションリストの上部にある**All**ボタンをクリックします。お好みの効果を設定したら、使用しなかったオプションをすべてオフにして、できるだけ効率的に作業を進めてください。

エフェクトを設定するプロセスの多くは、見た目で判断することができます。エフェクトの数が増えれば増えるほど、また値が大きいオプションが増えれば増えるほど、アプリケーションのパフォーマンスは低下することを覚えておいてください。ポストプロセッシングエフェクトのベストプラクティスは、少ないほど効果が高くなるということです。

下の例では、Vignette (ビネット) エフェクトを設定して、画面の端に微妙な影をつけています。なお、使用していないオプションはオフになっています (**画像 04**)。

[Image: image]ステップを完了としてマーク

## 3. まとめ

Q&A (0)

これはポストプロセッシングを加えるための簡単なガイドで、他にもたくさんのエフェクトがあります。さまざまなエフェクトを組み合わせて、あなたのプロジェクトにユニークな外観をもたらしてみてください。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
