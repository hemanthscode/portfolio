/**
 * Centralized Tailwind CSS tokens for consistent styling
 */
export const buttonVariants = {
  primary: 'bg-gray-900 text-white hover:bg-gray-700',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-400 hover:text-white ',
  outline: 'border border-gray-300 text-gray-900 hover:bg-gray-100',
  ghost: 'text-gray-900 hover:bg-gray-100',
};

export const typography = {
  heading: {
    h1: 'text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900',
    h2: 'text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900',
    h3: 'text-xl sm:text-2xl font-semibold text-gray-800',
  },
  body: {
    base: 'text-base sm:text-lg text-gray-500',
    sm: 'text-sm text-gray-500',
  },
};

export const containerPadding = 'px-4 sm:px-6 lg:px-8';