This version of Unity is unsupported.

Install a UPM package from a local tarball file

Install a UPM package by name

# Install a UPM package from a Git URL

The Package Manager can load a **UPM package**A **Package** managed by the **Unity Package Manager**. Refer to **Packages**.
See in [Glossary](Glossary.html#UPMpackage) from a Git repository on a remote server.

## Prerequisites

- Install the [Git client](https://git-scm.com/) (minimum version 2.14.0) on your computer.

- On Windows, add the Git executable path to the `PATH` system environment variable.

- If the target repository tracks files with Git LFS, install the [Git LFS client](https://git-lfs.com/) on your computer.

- Read the information about using [Git dependencies](upm-git.html)The Package Manager retrieves Git dependencies from a Git repository directly rather than from a package registry. Git dependencies use a Git URL reference instead of a version, and there’s no guarantee about the package quality, stability, validity, or even whether the version stated in its `package.json` file respects Semantic Versioning rules with regards to officially published releases of this package. [More info](upm-concepts.html#Git)
See in [Glossary](Glossary.html#Gitdependency) in your project.

## Procedure

To install a UPM package from a Git URL:

1. Open the [Package Manager window](upm-ui-access.html), if it’s not already open.

2. Open the **Add** (**+**) menu in the Package Manager’s toolbar.

3. The options for installing packages appear.

[Image: Install package from git URL button]
Install package from git URL button

4. Select **Install package from git URL** from the install menu. A text box and an **Install** button appear.

5. Enter a valid Git URL in the text box. **Note**: If the Git repository uses Git LFS, the imported package might contain pointer files instead of the actual content. Refer to [Git LFS errors](upm-errors.html#lfs-errors). For information about how to construct a valid Git URL, refer to [Git URLs and extended syntax](upm-git.html#syntax). Examples of valid Git URLs include:

- `https://github.example.com/myuser/myrepo.git` (if your package is in the root of the repository).

- `https://github.example.com/myuser/myrepo.git?path=/subfolder` (if your package is in a [subfolder](upm-git.html#subfolder) within the repository).

6. Select **Install**.

If Unity was able to install the package successfully, the package now appears in the [package list](upm-ui-list.html) with the **git** label. If Unity wasn’t able to install the package, the [Unity Console](Console.html) displays an error message, such as:

- [No ‘Git’ executable was found](upm-errors.html#git-not-found)

- [Git-lfs: command not found](upm-errors.html#git-lfs)

- [Repository not found](upm-errors.html#bad-url)

- [Couldn’t read Username: terminal prompts disabled](upm-errors.html#prompts-disabled)

Click an error message link to get some help for it on the [Package Manager troubleshooting](upm-errors.html) page.

**Tip**: If you want to check for updates and update your Git dependency to the latest version from the repository, click **Update**. You can also use the [Install package from git URL](upm-ui-giturl.html) menu item to update your Git dependency. For information on Git dependencies, refer to [Locked Git dependencies](upm-git.html#git-locks).

## Additional resources

- [Package types](upm-package-types.html)

- [Add and remove UPM packages or feature sets](upm-ui-actions.html)

- [Add and remove asset packages](upm-ui-actions-ap.html)

Install a UPM package from a local tarball file

Install a UPM package by name
