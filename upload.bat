@echo off
chcp 65001 > nul
cls
echo ==================================================
echo        樱花科技 SakuraLove 一键上传 GitHub
echo ==================================================
echo.

:: 1. 初始化Git仓库（第一次用才会执行）
if not exist .git (
    git init
    echo [INFO] 已初始化本地Git仓库
)

:: 2. 添加所有文件到暂存区
git add .
echo [INFO] 已添加所有项目文件

:: 3. 提交文件（写好提交说明）
git commit -m "樱花科技 SakuraLove 初始版本上传 | 粘液科技附属 樱花+泡沫主题科技"
echo [INFO] 已提交文件到本地仓库

:: 4. 关联你的GitHub远程仓库（这里已经帮你填好了！）
git remote add origin https://github.com/sakuramiao/SakuraLove.git
echo [INFO] 已关联远程仓库：sakuramiao/SakuraLove

:: 5. 推送到GitHub
git push -u origin main
echo.
echo ==================================================
echo              🎉 上传完成！
echo        樱花科技已发布到你的GitHub仓库
echo ==================================================
pause