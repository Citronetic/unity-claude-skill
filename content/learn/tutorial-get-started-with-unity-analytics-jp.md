[Image: image]

# Unity Analytics の概要

Tutorial

Beginner

+10XP

10 mins

2

(6)

Unity Technologies

[Image: Unity Analytics の概要]Summary

このチュートリアルでは、Unity プロジェクトと Analytics の結果を表示する Unity ダッシュボード（Dashboard）をリンクさせるための 2 つの方法を学びます。

Languages available:

日本語English日本語日本語

## 1. 概要

Q&A (0)

Unity ゲーミングサービスと Analytics パッケージを使用すると、ユーザーがゲーム内で行った行動が Unity ダッシュボードに表示されます。このチュートリアルでは、Unity ダッシュボードプロジェクトを初めて設定し、ダッシュボードまたは Unity エディターのどちらかの方法でゲームにリンクさせます。

ステップを完了としてマーク

## 2. はじめる前に

Q&A (0)

#### Unity は初めてですか？

Unity を初めて使う方、ようこそ！私たちは [**Unity Essentials の学習パスウェイ**](https://learn.unity.com/pathway/unity-essentials)を初心者向けにご用意しました。Unity Essentials の学習パスウェイは、Unity エディターのセットアップと制作の準備に役立つように設計されています。Unity Analytics に進む前に、まずこのパスウェイを完了させることをお勧めいたします！

#### Unity エディターの基礎をおさらい

Unity エディターについて基本的な知識を再確認したい場合は、いつでも「[**Explore the Unity Editor**](https://learn.unity.com/tutorial/explore-the-unity-editor-1)」を見直すことができます。

#### Unity 開発者ダッシュボードへのアクセス確認

これらのチュートリアルを完了するには、[Unity ゲーミングサービス](https://unity.com/solutions/gaming-services)のアカウントを作成し、[Unity ダッシュボード](https://dashboard.unity.com/)からアカウントにアクセスする必要があります。

#### Unity プロジェクトの設定

以下の手順に従って、Unity プロジェクトを設定してください：

**1.**  [**Unity 2019.4 以降**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa)をまだインストールしていない場合、インストールします。

**2.**任意のテンプレートで [Unity プロジェクトを新規に作成](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196)するか、Unity 2019.4 以降でビルドした既存の Unity プロジェクトを使用します。

**3.**  [**Analytics**パッケージ (バージョン 4.2.0 以降)](https://learn.unity.com/tutorial/project-setup-processes#60ed7a6aedbc2a002520b6ec) をプロジェクトにインストールします。

**重要：**古い **Analytics Library**ではなく、必ず **Analytics**パッケージを選択してください。

ステップを完了としてマーク

## 3. Unity ダッシュボードを使用してプロジェクトを作成する【オプション 1】

Q&A (0)

Unity Dashboard (ダッシュボード) は、**プロジェクト**で構成されています。ダッシュボードを使用した新規プロジェクトは、ダッシュボードまたはエディターのどちらからでも作成することができます。エディターからプロジェクトを新規に作成する場合は、以下のステップに進みます。

以下の手順で、Unity ゲーミングサービスダッシュボードでプロジェクトを作成し、Unity のプロジェクトとリンクさせます：

**1.**  [Unity ゲーミングサービスダッシュボード](https://dashboard.unity3d.com/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955989209)からアカウントにサインインします。

**2.**  Dashboard メニューから、**Projects > Organization > Project** の順に移動します。

**3.**  **Create Project**を選択します。

**4.**  プロジェクト名を選択します。

[Image: image]

**5.**  作成したゲームやアプリが、主に 13 歳未満の子供を対象としているかどうかを指定するよう求められます。この要件は、 児童オンラインプライバシー保護法（Children's Online Privacy Protection Act: COPPA）の管轄下にある米国で適用されます。適宜回答して、**Create Project**を選択します。

[Image: image]

COPPA についての詳細は、[米国の Federal Trade Commission](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule) (連邦取引委員会) のウェブサイト内の COPPA ページをご参照ください。

**6.**  Unity エディターのメインメニューから、**Edit > Project Settings > Services** の順に選択します。

**7.**  リストから Organization (組織) を選択します。Organization Name (組織名) は Unity ダッシュボードで見つけることができます。**Project > Organization Settings**と選択します。

**8.**  以前ダッシュボードで作成したプロジェクトを選択し、 **Link project ID** を選択します。これで既存のダッシュボードのプロジェクトが、Unity のプロジェクトにリンクされました。

[Image: image]ステップを完了としてマーク

## 4. エディターから Unity ダッシュボードのプロジェクトを作成してリンクする【オプション 2】

Q&A (0)

オプションとして、Dashboard プロジェクトを作成し、Unity エディターから Unity プロジェクトとリンクさせることもできます。ダッシュボードを使用する場合は、この手順をスキップしてください。

以下の手順で、Dashboard プロジェクトを作成し、エディターから Unity プロジェクトとリンクさせます：

**1.**  Unity エディターのメインメニューから、**Edit > Project Settings > Services** の順に選択します。

**2.**  リストから組織を選択します。Organization Name (組織名) は Unity ダッシュボードで確認できます。**Project > Organization Settings**と選択してください。

**3.**  **Create project ID** を選択します。Dashboard プロジェクトが新規作成され、Unity プロジェクトとリンクされます。

[Image: image]

**4.**  作成したゲームやアプリが主に 13 歳未満の子供を対象としているかどうかを指定するよう求められます。この要件は、児童オンラインプライバシー保護法（Children's Online Privacy Protection Act: COPPA）の管轄下にある米国で適用されます。適宜回答し、**Save** を選択します。

COPPA についての詳細は、[Federal Trade Commission（米国連邦取引委員会）の COPPA ページ](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule)を参照してください。

[Image: image]ステップを完了としてマーク

## 5. 次のステップ

Q&A (0)

Unity プロジェクトと Unity ダッシュボードのリンクが完了したので、取得するユーザーイベントを設定する準備ができました。次のチュートリアルでは、Unity Analytics に組み込まれている標準のイベントと、スクリプトで作成できる、あらゆるユーザーの行動を追跡できるカスタムイベントについて学びます。

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
