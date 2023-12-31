// IconArrowUp.js //Flaticon

export default function IconArrowUp(props) {
  const colorFill = props.colorFill || "blue";
  const colorFill1 = props.colorFill1 || "red";
  const width = props.width || "64";
  const height = props.height || "64";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      //
      viewBox="0 0 490.523 490.523"
    >
      <path
        fill={colorFill}
        d="M487.411 355.047L252.744 120.38c-4.165-4.164-10.917-4.164-15.083 0L2.994 355.047c-4.093 4.237-3.976 10.99.262 15.083a10.666 10.666 0 0014.821 0l227.115-227.115 227.115 227.136c4.237 4.093 10.99 3.976 15.083-.261 3.993-4.134 3.993-10.688 0-14.821l.021-.022z"
      ></path>
      <path
        fill={colorFill1}
        d="M479.859 373.266a10.663 10.663 0 01-7.552-3.115L245.192 143.015 18.077 370.151c-4.237 4.093-10.99 3.976-15.083-.262a10.666 10.666 0 010-14.821l234.667-234.667c4.165-4.164 10.917-4.164 15.083 0l234.667 234.667c4.159 4.172 4.148 10.926-.024 15.085a10.667 10.667 0 01-7.528 3.113z"
      ></path>
    </svg>
  );
}
