
// TODO: Needs more brainstorming...
// Could be: (( params: { [key: string]: any } ) => string)
// But how do i make it work when referencing?!?!
// Maybe: ( route.test ass ( params: { [key: string]: any }  => string) )({ id: 123 }) --> Should give me '/test/123' ?!?!
// Maybe like you tried with generics?!?!
// How do i reference it?!?!
// Maybe better: ( route.text as DynamicRoute<{ id: number }> )({ id: 123 }) ?!?!??!
// It will def be cleaner, but can i maybe say what types can generic <T> be to be sure?
// IDK....There must be some easier way...
// Ask this today on meet, maybe Toma can help...

export type RouteKeys = "home";

export type StaticRoute = string;
// This should be good approach...Still ask...
export type DynamicRoute<T = { [key: string]: string | number } > =( params: T ) => string;
// type DynamicRoute< T = { [key:string]: any } > = (params: T) => string;
// Like this?!

// type DynamicRoute< T = { [key:string]: any } > = (params: T) => string;
// Like this?!
export type RouteDefinitions = {
    [key in RouteKeys]: StaticRoute | DynamicRoute<any>;
};

export const routes: RouteDefinitions = {
    home: '/home',
};