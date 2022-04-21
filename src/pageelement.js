export function TextElement(props) {
  switch (props.lang) {
    case "en":
      return <p>{props.texten}</p>;
    case "jp":
      return <p>{props.textjp}</p>;
  }
}

export function LinkElement(props) {
  switch (props.lang) {
    case "en":
      return (
        <p>
          <a href={props.link}>{props.linktexten}</a> - {props.desctexten}
        </p>
      );
    case "jp":
      return (
        <p>
          <a href={props.link}>{props.linktextjp}</a> ・ {props.desctextjp}
        </p>
      );
  }
}
