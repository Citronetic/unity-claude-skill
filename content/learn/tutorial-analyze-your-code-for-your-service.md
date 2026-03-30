[Image: image]

# Analyze the code for your service

Tutorial

advanced

+10XP

180 mins

0

Unity Technologies

[Image: Analyze the code for your service]Summary

Unity uses a variety of tools to efficiently scan, analyze, and automatically correct errors and vulnerabilities in your code.

In this tutorial, you will make sure you are set up with all of these tools and use them on the code for your mini cloud service.

Languages available:

EnglishEnglishEnglish

## 1. How Unity does code analysis

Q&A (0)

The [AppCollector](https://confluence.unity3d.com/display/SEC/AppCollector?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950831283), [Snyk](https://docs.google.com/document/d/1NuQHHj_gpSQSh2Rn2C8eDYMioDUMTxWMMTE-6Csv5-M/edit#heading=h.ssn9iuq7l51k), and [SonarQube](https://confluence.unity3d.com/display/LDE/SonarQube+-+Integration+via+Github+Actions?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774950831283) static analysis tools should be used by the project GitHub Actions process to scan code in the repository in each build.

Additional Git Hooks are used for removing common mistakes before a Pull Request is created for peer review:

- For backend projects, use [Pre-commit](https://pre-commit.com/) with the [Go](https://github.com/golangci/golangci-lint), [Go docs](https://github.com/princjef/gomarkdoc), [SQL](https://github.com/sqlfluff/sqlfluff), [Prometheus](https://github.com/fortman/pre-commit-prometheus), [Dockerfile](https://github.com/pryorda/dockerfilelint-precommit-hooks), [Helm](https://github.com/norwoodj/helm-docs),
- For package projects, use the [.NET Core](https://github.com/kuju63/pre-commit-hooks-dotnet-core) Pre-commit plugin.
- For frontend projects, use the [Husky](https://typicode.github.io/husky/#/?id=usage) tool instead of Pre-commit.

Mark step as complete

## 2. Run your code analysis

Q&A (0)

Set up and implement these tools for your own project. Work with your onboarding buddy to make sure you have followed recommended conventions and process requirements.

Mark step as complete

## 3. Next Steps

Q&A (0)

With your code analyzed, you’re ready for integration and deployment and ongoing monitoring.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
