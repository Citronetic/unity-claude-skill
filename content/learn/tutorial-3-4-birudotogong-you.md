[Image: image]

# 3.4 - ビルドと共有

Tutorial

Beginner

+10XP

90 mins

0

Unity Technologies

[Image: 3.4 - ビルドと共有]Summary

このレッスンでは、ベストプラクティスのガイドラインに沿って、作品を共有するためのオプションを検討します。このレッスンを終える頃には、アプリを適切に設定し、共有可能なバージョンを作成しています。

このレッスンは「[Create with VR](https://learn.unity.com/course/create-with-vr)」コースの一部です。

Languages available:

日本語English日本語日本語

## 1. アプリの名前とバージョン番号の入力

Q&A (0)

まず、名前、開発者/会社、サムネイルがデフォルトのプレースホルダーになっていないかどうかを確認します。

**1.  Player Settings にアクセスする：**

- **Edit** > **Project Settings**とクリックします。
- 左側の **Player** パネルを選択します。

**2.  デフォルトのアプリ情報を変更する：**

- **Company Name**、**Product Name**、**Version Number** を、アプリの現在の状態に合わせて変更します。

**3.  アプリの起動時に表示される Splash Image を編集したい場合：**

- **Splash Image**の折りたたみを展開し、設定を編集します。
- Splash Image を無効にするには、最低でも Pro ライセンスが必要となります。

[Image: image]

これで、App はデバイス上に適切な名前で表示され、希望するスプラッシュ画像がロードされるはずです。

**関連リソース：**

- [Naming Best Practices](https://developer.oculus.com/distribute/publish-content-bp/)
- [Icon Best Practices](https://developer.oculus.com/distribute/asset-guidelines/)

ステップを完了としてマーク

## 2. 推奨される公開設定の確認

Q&A (0)

一般的にアプリのパフォーマンスを最適化することに加えて、アプリを最高の状態でビルドおよび実行するためのプラットフォーム固有の推奨事項がいくつかあります。

具体的な推奨事項はプラットフォームごとに異なり、常に変化しているため、最新かつ正確な情報を得るには、オンラインで検索するのが一番です。

**1.  VR の公開の推奨設定についてのガイダンスを参照する：**

- 具体的な推奨事項については、下記の「関連リソース」のリンクを参照してください。
- Google「[insert_device] の Unity 推奨設定」。

**2.  Player Settings の設定**

- Edit > Project Settings をクリックし、左パネルの **Player** をクリックします。
- **Other Settings** の折りたたみ部分までスクロールします。

**3.  Quality 設定を行う：**

- Project 設定の左パネルにある**Quality** をクリックします。

**4.  XR 設定を行う：**

- Project 設定の左パネルにある **XR Plug-in Management** をクリックします。

**5.  レンダリング設定を行う：**

- Project ウィンドウから **UniversalRenderPipelineAsset**を探して選択します。

**6.  影の設定を確認する：**

- **Realtime**や**Mixed Lights**では、適切な影が使用されていることを確認してください。

**7.  Build 設定を確認するには：**

- File > Build Settings とクリックします。

[Image: image]

これで、アプリはターゲットプラットフォームに公開するための推奨設定をすべて満たすようになります。

**関連リソース：**

- [Configuration Settings](https://developer.oculus.com/documentation/unity/unity-conf-settings/)
- [Blog: Unity Settings for Mobile VR](https://developer.oculus.com/blog/tech-note-unity-settings-for-mobile-vr/?locale=en_US)
- [Stereo Rendering in VR / AR](https://blogs.unity3d.com/2017/11/21/how-to-maximize-ar-and-vr-performance-with-advanced-stereo-rendering/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949567574)

ステップを完了としてマーク

## 3. アプリの共有や公開の検討

Q&A (0)

ここまでは、Unity を使ってアプリを作り、実行するだけでした。このアプリを Unity 以外で配布するにはどうすればいいのかを見てみましょう。

**1.  公式ストアにアプリを登録するための条件を確認する：**

- 以下のリンクからプロセスの詳細をご覧ください。
- Google「[insert_store_name] にアプリを送信」(例：Steam, Oculus Store)

**2.  アプリを配信するための代替プラットフォームを探す：**

- [SideQuest](https://sidequestvr.com/listing-guide) や [Itch.io](https://itch.io/games/tag-virtual-reality) などのサイトにアプリを投稿するための要件を確認します。

これで、アプリを配信するために利用できるさまざまなプラットフォームと、それらのプラットフォームでアプリを承認してもらうために必要なことを理解できたはずです。

**関連リソース：**

- [Submit your app to the Oculus Store](https://developer.oculus.com/distribute/)
- [Lifecycle of an Oculus App](https://developer.oculus.com/distribute/publish-app-review/)
- [Oculus Dev Documentation](https://developer.oculus.com/documentation/unity/)
- [Oculus VRCs](https://developer.oculus.com/distribute/publish-quest-req/)
- [Blog: Quest Pitch Application](https://developer.oculus.com/quest-pitch/)

ステップを完了としてマーク

## 4. まとめ

Q&A (0)

**注目のフィーチャー：**

- App/Company 名
- 推奨設定

**新しいコンセプトとスキル：**

- デバイスごとのベストプラクティス
- 配布方法

**次のレッスン：**

- 次のステップは何？

ステップを完了としてマーク任意のステップ

## 5. 追加のアクティビティ

Q&A (0)

スキルをさらに向上させたい、新しいコンセプトを探求したい、プロジェクトを改善したいとお考えの方は、下記のオプションの追加アクティビティをチェックしておくと良いでしょう。

それぞれ [Easy]、[Medium]、[Difficult]、[Expert] のタグが付けられており、コーディングが必要な場合は [Requires Programming] のタグも付けられています。

**1.  公開プロセスのリサーチ [Easy]** **(難易度：低)**

希望するプラットフォームにアプリを投稿するための要件を調べる：

- これには、[Oculus Store](https://www.oculus.com/experiences) や [Steam](https://store.steampowered.com/) のような公式アプリのマーケットプレイスも含まれます。
- また、[SideQuest](https://sidequestvr.com/) や [Itch.io](https://itch.io/) のような非公式のプラットフォームにアプリを投稿することもできます。

**2.  アプリのアートワークの作成 [Medium](難易度：中)**

壮大なスクリーンショットを撮ったり、アプリアイコンやヒーローイメージを作ったり、アプリをアピールするためのマテリアルを用意する：

- [Unity Recorder](https://docs.unity3d.com/Packages/com.unity.recorder@2.0/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949567574) を使って、アプリの高品質な画像を撮影することができます。
- アプリのプラットフォームのガイドラインに沿って、最適なアイコンや画像を作成してください：

- 例）Oculus：[Blog「How to Prep App for Submission」](https://developer.oculus.com/blog/how-to-prep-your-app-for-submission/?locale=en_US)
- 例）Sidequest：バナー画像やアイコンの[画像サイズに関する要件](https://sidequestvr.atlassian.net/wiki/spaces/SIDEQUEST/pages/196610/How+To+Submit+an+App+to+SideQuest)

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
