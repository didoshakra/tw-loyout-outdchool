//IconUser_border.js
//Чоловічок (border)

export default function IconUser_border(props) {
  const colorFill = props.colorFill || "black"
  const width = props.width || "64"
  const height = props.height || "64"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      //
      viewBox="0 0 512 512"
    >
      <path
        fill={colorFill}
        d="M299.29 255.5h-86.58c-85.14 0-154.42 69.27-154.42 154.42V512h395.42V409.92c0-85.15-69.28-154.42-154.42-154.42zM88.29 482v-72.08c0-68.61 55.82-124.42 124.42-124.42h86.58c68.6 0 124.42 55.81 124.42 124.42V482H88.29zM256 0c-65.84 0-119.41 53.57-119.41 119.41S190.16 238.82 256 238.82s119.41-53.57 119.41-119.41S321.84 0 256 0zm0 208.82c-49.3 0-89.41-40.11-89.41-89.41S206.7 30 256 30s89.41 40.11 89.41 89.41-40.11 89.41-89.41 89.41z"
      ></path>
    </svg>
  )
}
