import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteShell from "./components/SiteShell";
import Home from "./pages/Home";
import LocationPage from "./pages/LocationPage";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";

const services = [
  ["/mold-inspection-sacramento-ca", "mold-inspection"],
  ["/residential-mold-inspection-sacramento-ca", "residential-mold-inspection"],
  ["/black-mold-inspection-sacramento-ca", "black-mold-inspection"],
  ["/mold-testing-sacramento-ca", "mold-testing"],
  ["/air-quality-testing-sacramento-ca", "air-quality-testing"],
  ["/indoor-air-quality-sacramento-ca", "indoor-air-quality"],
  ["/moisture-inspection-sacramento-ca", "moisture-inspection"],
  ["/mold-detection-sacramento-ca", "mold-detection"],
  ["/mold-assessment-sacramento-ca", "mold-assessment"],
  ["/mold-inspection-report-sacramento-ca", "mold-inspection-report"],
  ["/water-damage-mold-inspection-sacramento-ca", "water-damage-mold-inspection"],
  ["/attic-mold-inspection-sacramento-ca", "attic-mold-inspection"],
  ["/crawl-space-mold-inspection-sacramento-ca", "crawl-space-mold-inspection"],
  ["/home-mold-inspection-sacramento-ca", "home-mold-inspection"],
] as const;

const locations = [
  ["/mold-inspector-midtown-sacramento-ca", "midtown-sacramento"],
  ["/mold-inspection-midtown-sacramento-ca", "midtown-sacramento"],
  ["/mold-inspector-east-sacramento-ca", "east-sacramento"],
  ["/mold-inspection-east-sacramento-ca", "east-sacramento"],
  ["/mold-inspector-arden-arcade-ca", "arden-arcade"],
  ["/mold-inspection-arden-arcade-ca", "arden-arcade"],
  ["/mold-inspector-citrus-heights-ca", "citrus-heights"],
  ["/mold-inspection-citrus-heights-ca", "citrus-heights"],
  ["/mold-inspector-elk-grove-ca", "elk-grove"],
  ["/mold-inspection-elk-grove-ca", "elk-grove"],
  ["/mold-inspector-roseville-ca", "roseville"],
  ["/mold-inspection-roseville-ca", "roseville"],
  ["/mold-inspector-folsom-ca", "folsom"],
  ["/mold-inspection-folsom-ca", "folsom"],
  ["/mold-inspector-fair-oaks-ca", "fair-oaks"],
  ["/mold-inspection-fair-oaks-ca", "fair-oaks"],
] as const;

function Router() {
  return (
    <SiteShell>
      <Switch>
        <Route path="/" component={Home} />
        {services.map(([path, slug]) => (
          <Route key={path} path={path}>
            <ServicePage slug={slug} />
          </Route>
        ))}
        {locations.map(([path, slug]) => (
          <Route key={path} path={path}>
            <LocationPage slug={slug} />
          </Route>
        ))}
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteShell>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </ErrorBoundary>
  );
}
