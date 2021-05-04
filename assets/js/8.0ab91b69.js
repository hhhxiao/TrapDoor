(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发"}},[t._v("#")]),t._v(" 开发")]),t._v(" "),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("h3",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),s("p",[t._v("首先你需要下载"),s("code",[t._v("Microsoft Visual Studio 2019")]),t._v(",然后你需要下载安装"),s("code",[t._v("cmake")])]),t._v(" "),s("h3",{attrs:{id:"创建新目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新目录"}},[t._v("#")]),t._v(" 创建新目录")]),t._v(" "),s("p",[t._v("在项目主目录下运行:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("md build\n")])])]),s("p",[t._v("(c)")]),t._v(" "),s("h3",{attrs:{id:"配置cmake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置cmake"}},[t._v("#")]),t._v(" 配置Cmake")]),t._v(" "),s("p",[t._v("进入"),s("code",[t._v("build")]),t._v("目录后执行")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("cmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("  -DCMAKE_BUILD_TYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Release\n")])])]),s("h3",{attrs:{id:"编译-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译-2"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("build")]),t._v("目录内执行")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("cmake --build   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --config Release\n")])])]),s("p",[t._v("等待项目编译，等编译完后在"),s("code",[t._v("Release")]),t._v("目录即可生成"),s("code",[t._v("trapdoor-mod.dll")])]),t._v(" "),s("blockquote",[s("p",[t._v("注意，只能用"),s("code",[t._v("Release")]),t._v("版本，"),s("code",[t._v("Debug")]),t._v("版会用不了")])]),t._v(" "),s("h2",{attrs:{id:"开发-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发-2"}},[t._v("#")]),t._v(" 开发")]),t._v(" "),s("blockquote",[s("p",[t._v("这里还不够完善，仅供参考")])]),t._v(" "),s("h3",{attrs:{id:"项目目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目目录结构"}},[t._v("#")]),t._v(" 项目目录结构")]),t._v(" "),s("p",[t._v("项目的目录结构是这样的:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("├─api  //这里都是BDS的接口或者方便进行开发的库，不含具体功能,命名空间都是trapdoor::\n│  ├─block   //方块相关接口\n│  ├─commands  //简单的命令解析器\n│  ├─entity   //实体相关接口\n│  ├─exexpermental  \n│  ├─graphics  //图形想换接口\n│  ├─include\n│  ├─lib   //hook相关\n│  ├─math  \n│  ├─tools  //工具类\n│  └─world //世界运行相关接口\n├─doc\n├─img\n├─include\n├─mod   //这里面是具体的功能实现，命名空间都是mod::，每个目录下面都是一些功能\n│  ├─config  //配置文件\n│  ├─function \n│  ├─hopper\n│  ├─player\n│  ├─spawn\n│  ├─tick\n│  └─village\n└─test\n")])])]),s("h3",{attrs:{id:"利用trapdoor的api创建自己的mod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用trapdoor的api创建自己的mod"}},[t._v("#")]),t._v(" 利用trapdoor的api创建自己的mod")]),t._v(" "),s("ol",[s("li",[t._v("写一个派生至 "),s("code",[t._v("trapdoor::BDSMod")]),t._v("类(以TrapdoorMod为例):")])]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrapdoorMod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token base-clause"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" trapdoor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BDSMod")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后根据需要重写一些方法\n2. 在"),s("code",[t._v("dllmain.cpp")]),t._v("中初始化全局mod对象:")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("trapdoor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("BDSMod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBDSModInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" mod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TrapdoorMod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mod_init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initConsole")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// trapdoor::initLogger("trapdoor.log", false, true, true);')]),t._v("\n    trapdoor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trapdoor.log"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBDSModInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    trapdoor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initializeMod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    mod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TrapdoorMod")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printCopyRightInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在"),s("code",[t._v("GameTick.cpp")]),t._v("中的"),s("code",[t._v("ServerLevel::tick")]),t._v("中初始化mod对象:")])]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("THook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        MSSYM_B1QA4tickB1AE11ServerLevelB2AAA7UEAAXXZ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        trapdoor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Level "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" serverLevel\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("trapdoor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("bdsMod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("L_ERROR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mod is nullptr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("trapdoor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("bdsMod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        trapdoor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("bdsMod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serverLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        trapdoor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("bdsMod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("asInstance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("TrapdoorMod"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),s("p",[t._v("以后有空会提供一个mod的模板工程，然后出一些更为详细的教程")])])}),[],!1,null,null,null);a.default=e.exports}}]);