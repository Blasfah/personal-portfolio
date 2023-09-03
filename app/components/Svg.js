export default function Svg({ name, width, height }) {
  switch (name) {
    case "arrow-right":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={height}
          viewBox="0 -960 960 960"
          width={width}
          fill="currentColor"
        >
          <path d="m702-301-43-42 106-106H120v-60h646L660-615l42-42 178 178-178 178Z" />
        </svg>
      )
    case "arrow-down":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={height}
          viewBox="0 -960 960 960"
          width={width}
          fill="currentColor"
        >
          <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
        </svg>
      )
  }
}
