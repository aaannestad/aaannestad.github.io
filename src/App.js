import "./App.css";
import { TextElement, LinkElement } from "./pageelement";
import Header from "./header";
import { React, useState } from "react";

//const currentLang = 'jp';

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
      <TextElement lang={lang} texten="Hello World" textjp="こんにちは" />
      <LinkElement
        lang={lang}
        link="c:\"
        linktexten="Link"
        desctexten="desctext"
        linktextjp="リンク"
        desctextjp="説明"
      />
    </div>
  );
}
