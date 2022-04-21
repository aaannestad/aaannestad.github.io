export default function Header(props) {
  const langLabels = new Map([
    ["jp", "English"],
    ["en", "日本語"],
  ]);

  return (
    <button onClick={() => props.handleLangButton()}>
      {langLabels.get(props.lang)}
    </button>
  );
}
