# 迷你技巧

[[toc]]

### 一键关闭电脑屏幕

``` python
# python 
import win32con, win32api
win32api.PostMessage(win32con.HWND_BROADCAST, win32con.WM_SYSCOMMAND,win32con.SC_MONITORPOWER, 2)
```

``` c
// C,C++
#include <windows.h>
int main() {
  PostMessage(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, 2);
  return 0;
}
```

``` powershell
# bat
powershell (Add-Type '[DllImport(\"user32.dll\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(- 1,0x0112,0xF170,2)

```

### 生成文件夹目录树 txt

### 定时关机

### 7z 代码页解压

### ffmpeg 