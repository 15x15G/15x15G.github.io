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