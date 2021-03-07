const AppRoutePrefix = {
  CREATIVE: "/creative",
  CULTURAL: "/cultural",
  INTELLECTUAL: "/intellectual",
  PHYSICAL: "/physical",
} as const;

export const AppRoute = {
  HOME: "/",

  // Creative
  DRAWING: `${AppRoutePrefix.CREATIVE}/drawing`,

  // Cultural
  BOOKS: `${AppRoutePrefix.CULTURAL}/books`,
  MOVIES: `${AppRoutePrefix.CULTURAL}/movies`,
  PODCASTS: `${AppRoutePrefix.CULTURAL}/podcasts`,
  TV: `${AppRoutePrefix.CULTURAL}/tv`,

  // Physical
  CALISTHENICS: `${AppRoutePrefix.PHYSICAL}/calisthenics`,
  MARTIAL_ARTS: `${AppRoutePrefix.PHYSICAL}/martial-arts`,
  WEIGHTLIFTING: `${AppRoutePrefix.PHYSICAL}/weightlifting`,
} as const;
