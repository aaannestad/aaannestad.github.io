import "./App.css";
import { TextElement, LinkElement } from "./pageelement";
import Header from "./header";
import { React, useState } from "react";

export default function App() {
  const [lang, updateLang] = useState("en");

  function handleLangButton() {
    switch (lang) {
      case "en":
        updateLang("jp");
        break;
      case "jp":
        updateLang("en");
        break;
    }
  }

  return (
    <div>
      <Header lang={lang} handleLangButton={handleLangButton} />
      <div class="row">
        <div class="col-1"></div>
        <div class="col-2">
          <TextElement
            lang={lang}
            texten="(some self-introduction)"
            textjp="（何らかの自己紹介）"
          />
          <TextElement
            lang={lang}
            texten={[
              "You can find my resume/CV ",
              <a href="https://github.com/aaannestad/aaannestad.github.io">
                here in English
              </a>,
              " and ",
              <a href="https://github.com/aaannestad/aaannestad.github.io">
                here in Japanese
              </a>,
              ".",
            ]}
            textjp={[
              "履歴書の",
              <a href="https://github.com/aaannestad/aaannestad.github.io">
                英語版はこちら
              </a>,
              "で、",
              <a href="https://github.com/aaannestad/aaannestad.github.io">
                日本語版はこちら
              </a>,
              "です。",
            ]}
          />
          <TextElement
            lang={lang}
            texten="I've done a few programming projects so far:"
            textjp="今までいくつかプログラミングプロジェクトをしたことがあります："
          />
          <LinkElement
            lang={lang}
            link="c:\"
            linktexten="worktimer.rb"
            desctexten="a small Ruby app (with a Tk-based GUI) that tracks time use across different projects during your day"
            linktextjp="worktimer.rb"
            desctextjp="一日以内に多数のプロジェクトで働いているときに、プロジェクトごとに使う時間を記録する小さいルビーアプリ（GUIはTkを使います）"
          />
          <LinkElement
            lang={lang}
            link="c:\"
            linktexten="Visual Trip Planner"
            desctexten="a (work-in-progress) web app for planning activities during a vacation or other trip via a visual interface"
            linktextjp="ビジュアル旅行計画機"
            desctextjp="旅行などで活動をビジュアルなインターフェースで計画するためのウエブアプリ（まだ制作中です）"
          />
          <TextElement
            lang={lang}
            texten={[
              "And also this webpage, which you can view the source for ",
              <a href="https://github.com/aaannestad/aaannestad.github.io">
                here
              </a>,
              ". (The language switch functionality is implemented in React.)",
            ]}
            textjp={[
              "そしてこのページ自身。ソースは",
              <a href="https://github.com/aaannestad/aaannestad.github.io">
                こちらで
              </a>,
              "見ることができます。（言語変更機能はReactを使って実装されています。）",
            ]}
          />
          <hr></hr>
          <TextElement
            lang={lang}
            texten="I've also written a few articles, largely related to linguistics."
            textjp="他にも主に言語学に関連した文章はは書いたことがあります。"
          />
          <LinkElement
            lang={lang}
            link="c:\"
            linktexten="TeX for linguists"
            desctexten="an introduction to using TeX for linguistics work"
            linktextjp="言語学者向けのTeX入門"
            desctextjp="言語学論文やそのようなものをTeXで書く方法を紹介する文章（英語）"
          />
          <LinkElement
            lang={lang}
            link="https://fiatlingua.org/2018/04/"
            linktexten="Tone for Conlangers: A Basic Introduction"
            desctexten="an introductory article on how to make use of tone in a constructed language"
            linktextjp="人工言語作者用の音調の基本的入門"
            desctextjp="人工言語に音調の使い方を基本的に説明する文章（英語）"
          />
          <LinkElement
            lang={lang}
            link="https://fiatlingua.org/2018/08/"
            linktexten="Intro to Lexical Typology"
            desctexten="an article explaining ways in which the structure of languages' lexicons can vary (primarily aimed at people making constructed languages)"
            linktextjp="語彙類型論入門"
            desctextjp="言語の語彙の構造が異なる方法をいくつか紹介する文章（英語・主に人工言語作者向け）"
          />
        </div>
      </div>
    </div>
  );
}
