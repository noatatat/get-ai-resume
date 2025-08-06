type RouteMeta = {
  title: string;
  description?: string;
  keywords?: string[];
  breadcrumb?: string;
  roles?: string[]; // для защиты роутов
};

type AppRoute = {
  path: string;
  meta: RouteMeta;
  children?: Record<string, AppRoute>;
};

export const APP_ROUTES: Record<string, AppRoute> = {
  ROOT: {
    path: '',
    meta: {
      title: 'Главная',
      breadcrumb: 'Главная',
      keywords: ['главная', 'домашняя страница'],
    },
  },
  HOME: {
    path: 'home',
    meta: {
      title: 'Домашняя страница',
      description: 'Добро пожаловать на наш сайт',
      keywords: ['главная', 'домашняя страница'],
    },
  },
  AUTH: {
    path: 'auth',
    meta: {
      title: 'Авторизация',
    },
    children: {
      LOGIN: {
        path: 'login',
        meta: {
          title: 'Вход в систему',
          breadcrumb: 'Вход',
        },
      },
      REGISTER: {
        path: 'register',
        meta: {
          title: 'Регистрация',
          breadcrumb: 'Регистрация',
        },
      },
    },
  },
} as const;

// Типы для TypeScript
export type AppRouteKey = keyof typeof APP_ROUTES;
export type AppRouteValue = (typeof APP_ROUTES)[AppRouteKey];
