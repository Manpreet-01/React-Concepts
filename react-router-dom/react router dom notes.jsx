// use browser router 
<BrowserRouter>
<App />
</BrowserRouter>




const navLinkStyles=({isActive})=>{
	return {
		margin: "10px",
		fontWeight: isActive ? "boldest" : "normal",
		textDecoration: isActive ? "underline" : "none",
	}
}



// use Link or NavLink
<Link to="/">Home</Link>
<Link to="about">About</Link>


// NavLink gives isActive class true or fasle
<NavLink style={navLinkStyles} to="/">Home</Link>
<NavLink style={navLinkStyles} to='about'>About</NavLink>



// use Routes and Route
<Routes>
  <Route exact path="" element={ <Home/> }/>
  <Route exact path="about" element={ <About/> }/>
</Routes>


// wrong paths
<Route exact path='*' element={<PageNotFound />} />


//useNavigate()
navigate=useNavigate();
navigate('url');
    
// useNavigation()
// useNavigation hook takes second argument as a object
// {replace :true}
<button onClick={()=>navigate('order-summary')}>Place order</button>
<button onClick={()=>navigate('order-summary',{replace: true})}>Place order</button>





// all methods of react-router-dom
[
    "AbortedDeferredError",
    "Await",
    "BrowserRouter",
    "Form",
    "HashRouter",
    "Link",
    "MemoryRouter",
    "NavLink",
    "Navigate",
    "NavigationType",
    "Outlet",
    "Route",
    "Router",
    "RouterProvider",
    "Routes",
    "ScrollRestoration",
    "UNSAFE_DataRouterContext",
    "UNSAFE_DataRouterStateContext",
    "UNSAFE_FetchersContext",
    "UNSAFE_LocationContext",
    "UNSAFE_NavigationContext",
    "UNSAFE_RouteContext",
    "UNSAFE_ViewTransitionContext",
    "UNSAFE_useRouteId",
    "UNSAFE_useScrollRestoration",
    "createBrowserRouter",
    "createHashRouter",
    "createMemoryRouter",
    "createPath",
    "createRoutesFromChildren",
    "createRoutesFromElements",
    "createSearchParams",
    "defer",
    "generatePath",
    "isRouteErrorResponse",
    "json",
    "matchPath",
    "matchRoutes",
    "parsePath",
    "redirect",
    "redirectDocument",
    "renderMatches",
    "resolvePath",
    "unstable_HistoryRouter",
    "unstable_useBlocker",
    "unstable_usePrompt",
    "unstable_useViewTransitionState",
    "useActionData",
    "useAsyncError",
    "useAsyncValue",
    "useBeforeUnload",
    "useFetcher",
    "useFetchers",
    "useFormAction",
    "useHref",
    "useInRouterContext",
    "useLinkClickHandler",
    "useLoaderData",
    "useLocation",
    "useMatch",
    "useMatches",
    "useNavigate",
    "useNavigation",
    "useNavigationType",
    "useOutlet",
    "useOutletContext",
    "useParams",
    "useResolvedPath",
    "useRevalidator",
    "useRouteError",
    "useRouteLoaderData",
    "useRoutes",
    "useSearchParams",
    "useSubmit"
]