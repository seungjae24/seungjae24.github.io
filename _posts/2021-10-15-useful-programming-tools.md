---
layout: post
title: Useful Programming Tools
subheading: Hope you good use
author: Seungjae
categories: Programming
banner:
  #video: https://vjs.zencdn.net/v/oceans.mp4
  #loop: true
  #volume: 0.1
  #start_at: 8.5
  image: https://bit.ly/3xTmdUP
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 4.25em; font-weight: bold"
  subheading_style: "color: green"
tags: programming tools terminator zshell vscode
sidebar: []
---

### Terminator

#### 1. Installation & Default Setting  

```bash
// Installation
$ sudo apt-get install terminator  

// Set terminator to default terminal
$ sudo update-alternatives --config x-terminal-emulator​  
```

#### 2. Useful commands with Terminator  

* Ctrl + Shift + E : Split one more terminal to the right
* Ctrl + Shift + O : Split one more terminal to the downside
* Ctrl + Shift + W : Close the corresponding terminal
* Ctrl + Alt + T   : Create a new terminal
* Ctrl + Tab       : Move to another terminal


### Zshell

```bash
// Installation
$ sudo apt-get install zsh

// Check the installed path
$ which zsh

// Change default shell to zsh
$ chsh -s $(which zsh)

// Install oh-my-zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

* 예뻐서 사용 중,,,
* git이랑 연동되서 레포지토리의 수정/추가사항이 있으면 노란색 X 표시가 뜸
* 맨 앞 화살표는 이전 실행 커맨드의 성공여부에 따라 성공:Green/실패:Red로 뜸.

### Visual Studio Code

* 예뻐서 사용 중,,
* 다양한 extension과 함께 사용 가능
* git과 연동되서 line-by-line의 수정/추가사항 체크 가능(단축키 = Alt+F3).