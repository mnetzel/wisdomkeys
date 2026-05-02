import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { FeuerConnection } from "./components/pages/FeuerConnection";
import { FeuerCeremony } from "./components/pages/FeuerCeremony";
import { Transformation } from "./components/pages/Transformation";
import { Rituals } from "./components/pages/Rituals";
import { Progression } from "./components/pages/Progression";
import { WomenCircle } from "./components/pages/WomenCircle";
import { SelfWorth } from "./components/pages/SelfWorth";
import { DedicationSurrender } from "./components/pages/DedicationSurrender";
import { Meditations } from "./components/pages/Meditations";
import { Travels } from "./components/pages/Travels";
import { Events } from "./components/pages/Events";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "feuer-verbindung", Component: FeuerConnection },
      { path: "feuerzeremonie", Component: FeuerCeremony },
      { path: "transformation", Component: Transformation },
      { path: "rituale", Component: Rituals },
      { path: "progression", Component: Progression },
      { path: "heilkreis-frauen", Component: WomenCircle },
      { path: "selbstwert", Component: SelfWorth },
      { path: "aufgabe-hingabe", Component: DedicationSurrender },
      { path: "meditationen", Component: Meditations },
      { path: "reisen", Component: Travels },
      { path: "termine", Component: Events },
      { path: "ueber-mich", Component: About },
      { path: "kontakt", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
