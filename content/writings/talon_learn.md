---
title: "An Opinionated Guide to Learning Talon"
date: 2022-11-05T01:38:32-04:00
draft: true
summary: ""
---

### Installation

The first thing you should do is install the public version of Talon onto your computer. This can be found at https://talonvoice.com.If you are looking to put this in a user script for automatic deployment, you could use commands similar to the following.

```
curl "https://talonvoice.com/dl/latest/talon-linux.tar.xz" --output talon.tar.xz
tar -vxf talon.tar.xz
rm -f talon.tar.xz
mv talon/ ~/talon
mkdir -p ~/.talon/user
```

Next you will most likely

```
git clone https://github.com/david-tejada/rango-talon  ~/.talon/user/rango-talon
git clone https://github.com/cursorless-dev/cursorless-talon.git ~/.talon/user/cursorless-talon
git clone https://github.com/knausj85/knausj_talon
```
