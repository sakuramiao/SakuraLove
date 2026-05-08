@echo off
chcp 65001
cls
echo ======================================
echo      樱花科技 SakuraLove 一键上传 GitHub
echo ======================================
echo.

:: 1. 初始化Git仓库
git init

:: 2. 添加所有文件
git add .

:: 3. 提交文件（和官方示例一致）
git commit -m "first commit"

:: 4. 把本地master分支改成main，和远程仓库一致
git branch -M main

:: 5. 关联你的远程仓库
git remote add origin https://github.com/sakuramiao/SakuraLove.git

:: 6. 推送到远程main分支
git push -u origin main

echo.
echo ======================================
echo 操作结束！请检查上面是否有红色报错
echo ======================================
pause