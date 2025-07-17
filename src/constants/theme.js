/**
 * Centralized Tailwind CSS tokens for consistent styling.
 */
export const theme = {
  colors: {
    primary: "bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-500",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-400 focus:ring-gray-500",
    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
    ghost: "text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      muted: "text-gray-500",
      error: "text-error text-red-600",
      success: "text-green-600",
      warning: "text-orange-500",
      accent: "text-indigo-600",
    },
    iconPrimary: "text-white",
    iconSecondary: "text-gray-900",
    background: "bg-white",
    border: "border border-gray-300",
    error: "border-error focus:ring-error",
    focusRing: "focus:ring-gray-500",
    skillBackground: "bg-gray-100",
    toastSuccess: "bg-green-50 text-green-700 border-green-200",
    toastError: "bg-red-50 text-red-700 border-red-200",
    backdropBlur: "backdrop-blur-xl",
    featureBackground: "bg-gray-50",
    iconBackground: "bg-indigo-100",
    cardBackground: "bg-gray-50",
    actionBackground: "bg-gradient-to-br from-indigo-50 to-purple-50",
    statusCompleted: "bg-green-500",
    statusInProgress: "bg-orange-500",
  },
  typography: {
    heading: {
      h1: "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900",
      h2: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900",
      h3: "text-xl sm:text-2xl font-bold text-gray-800",
    },
    body: {
      base: "text-base sm:text-lg text-gray-600",
      sm: "text-sm text-gray-600",
    },
  },
  spacing: {
    container: "px-4 sm:px-6 lg:px-8",
    section: "py-12",
    sectionLarge: "py-16",
    gap: {
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
    },
    cardMinHeight: "min-h-[24rem]",
    navPadding: "py-4",
    headerOffset: "pt-[2rem]",
  },
  sizes: {
    profileImage: "w-48 h-48 lg:w-80 lg:h-80",
  },
  grid: {
    buttonGrid: "grid-cols-1 sm:grid-cols-2",
    projectGrid: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    contentGrid: "lg:grid-cols-12",
  },
  borderRadius: {
    default: "rounded-lg",
    full: "rounded-full",
    large: "rounded-3xl",
  },
  shadow: {
    default: "shadow-md",
    hover: "hover:shadow-lg",
    large: "shadow-2xl",
  },
  transition: {
    default: "transition-all duration-200",
  },
};
