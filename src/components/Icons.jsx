function Icon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export const ArrowRight = (props) => (
  <Icon {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
)
export const ChevronRight = (props) => (
  <Icon {...props}>
    <path d="m9 6 6 6-6 6" />
  </Icon>
)
export const Menu = (props) => (
  <Icon {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)
export const X = (props) => (
  <Icon {...props}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
)
export const Code2 = (props) => (
  <Icon {...props}>
    <path d="m9 18-6-6 6-6M15 6l6 6-6 6M14 4l-4 16" />
  </Icon>
)
export const MonitorPlay = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="m10 8 5 3-5 3zM8 21h8M12 17v4" />
  </Icon>
)
export const Camera = (props) => (
  <Icon {...props}>
    <path d="M5 7h3l1.5-2h5L16 7h3a2 2 0 0 1 2 2v9H3V9a2 2 0 0 1 2-2Z" />
    <circle cx="12" cy="12.5" r="3" />
  </Icon>
)
export const Sparkles = (props) => (
  <Icon {...props}>
    <path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3ZM6 14l.8 2.2L9 17l-2.2.8L6 20l-.8-2.2L3 17l2.2-.8L6 14ZM18 13l.7 1.8 1.8.7-1.8.7L18 18l-.7-1.8-1.8-.7 1.8-.7L18 13Z" />
  </Icon>
)
export const Blocks = (props) => (
  <Icon {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <path d="M17 14v6M14 17h6" />
  </Icon>
)
export const ShoppingBag = (props) => (
  <Icon {...props}>
    <path d="M5 8h14l-1 13H6L5 8Z" />
    <path d="M9 9V6a3 3 0 0 1 6 0v3" />
  </Icon>
)
export const Smartphone = (props) => (
  <Icon {...props}>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <path d="M10 18h4" />
  </Icon>
)
export const MapPin = (props) => (
  <Icon {...props}>
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Icon>
)
