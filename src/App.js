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
          <TextElement lang={lang} texten="Hello World" textjp="こんにちは" />
          <LinkElement
            lang={lang}
            link="c:\"
            linktexten="Link"
            desctexten="desctext"
            linktextjp="リンク"
            desctextjp="説明"
          />
          <TextElement
            lang={lang}
            texten={[
              "And also this webpage, which you can view the source for ",
              <a href="https://github.com/aaannestad/aaannestad.github.io">
                here
              </a>,
              ". (Tap the button at the top right to switch languages.)",
            ]}
            textjp={[
              "そしてこのページ自身。ソースは",
              <a href="https://github.com/aaannestad/aaannestad.github.io">
                こちらで
              </a>,
              "見ることができます。",
            ]}
          />
          <hr></hr>
          <TextElement
            lang={lang}
            texten="I've also done a number of other things, largely related to linguistics."
            textjp="他にも言語学に関連したことはやったことがあります。"
          />
          <LinkElement
            lang={lang}
            link="c:\"
            linktexten="TeX for linguists"
            desctexten="an introduction to using TeX for linguistics work"
            linktextjp="言語学者向けのTeX入門"
            desctextjp="言語学論文やそのようなものをTeXで書く方法を紹介する文章（英語）"
          />
        </div>
      </div>
    </div>
  );
}
