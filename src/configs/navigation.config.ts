import {routes, StaticRoute} from "@/routes";

export type NavigationItem = {
    displayName: string,
    path: string,
    icon: string
};

export const navigationConfig: NavigationItem[] = [
    {
        displayName: 'Home',
        path: routes.home as StaticRoute,
        icon: 'bi-house'
    }
];