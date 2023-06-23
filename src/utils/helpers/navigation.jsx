export const getIsRouteActive = (pathname, hash, currentRoute) => {
  if (hash) {
    return currentRoute === hash;
  }

  return currentRoute === pathname;
};
