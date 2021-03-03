const AppRoutePrefix = {
  CREATIVE: "/creative",
  CULTURAL: "/cultural",
  INTELLECTUAL: "/intellectual",
  PHYSICAL: "/physical",
} as const;

export const AppRoute = {
  HOME: "/",

  CALISTHENICS: `${AppRoutePrefix.PHYSICAL}/calisthenics`,
  MARTIAL_ARTS: `${AppRoutePrefix.PHYSICAL}/martial-arts`,
} as const;
