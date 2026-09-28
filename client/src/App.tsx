import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteShell from "./components/SiteShell";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import LocationPage from "./pages/LocationPage";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";

export const serviceRoutes = [
  ["/mold-inspection-sacramento-ca", "mold-inspection"],
  ["/residential-mold-inspection-sacramento-ca", "residential-mold-inspection"],
  ["/black-mold-inspection-sacramento-ca", "black-mold-inspection"],
  ["/mold-testing-sacramento-ca", "mold-testing"],
  ["/air-quality-testing-sacramento-ca", "air-quality-testing"],
  ["/indoor-air-quality-sacramento-ca", "indoor-air-quality"],
  ["/moisture-inspection-sacramento-ca", "moisture-inspection"],
  ["/mold-detection-sacramento-ca", "mold-detection"],
  ["/mold-assessment-sacramento-ca", "mold-assessment"],
  ["/water-damage-mold-inspection-sacramento-ca", "water-damage-mold-inspection"],
] as const;

export const areaRoutes = [
  ["/mold-inspector-sacramento-ca", "sacramento"],
  ["/mold-inspector-midtown-sacramento-ca", "midtown-sacramento"],
  ["/mold-inspector-east-sacramento-ca", "east-sacramento"],
  ["/mold-inspector-arden-arcade-ca", "arden-arcade"],
  ["/mold-inspector-citrus-heights-ca", "citrus-heights"],
  ["/mold-inspector-elk-grove-ca", "elk-grove"],
  ["/mold-inspector-roseville-ca", "roseville"],
  ["/mold-inspector-folsom-ca", "folsom"],
  ["/mold-inspector-fair-oaks-ca", "fair-oaks"],
  ["/mold-inspector-rancho-cordova-ca", "rancho-cordova"],
] as const;

function Router() {
  return <SiteShell>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      {serviceRoutes.map(([path, slug]) => <Route key={path} path={path}><ServicePage slug={slug} /></Route>)}
      {areaRoutes.map(([path, slug]) => <Route key={path} path={path}><LocationPage slug={slug} /></Route>)}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </SiteShell>;
}

export default function App() {
  return <ErrorBoundary><TooltipProvider><Toaster /><Router /></TooltipProvider></ErrorBoundary>;
}
