import { Catalog, Item } from "@/types";
import { Map } from "immutable";

function getCatalog(): Catalog {
  const items: Item[] = [
    {
      id: "intervention-0",
      name: "Walking in Nature (10 min)",
      clusterId: "interventions",
    },
    {
      id: "intervention-1",
      name: "Stretching (10 min)",
      clusterId: "interventions",
    },
    {
      id: "intervention-2",
      name: "Biking (10 min)",
      clusterId: "interventions",
    },
    {
      id: "intervention-3",
      name: "Meditation (10 min)",
      clusterId: "interventions",
    },
    {
      id: "intervention-4",
      name: "Taking Stairs (5 floors)",
      clusterId: "interventions",
    },
    {
      id: "intervention-5",
      name: "Strength Training (10 min)",
      clusterId: "interventions",
    },
    // More interventions
    {
      id: "intervention-6",
      name: "Flu Vaccine (1 time)",
      clusterId: "interventions",
    },
    {
      id: "intervention-7",
      name: "Orthomega Fish Oil (1 cap)",
      clusterId: "interventions",
    },
    {
      id: "intervention-8",
      name: "Enhanced Zinc Lozenges (6 cap, assuming sick)",
      clusterId: "interventions",
    },
    {
      id: "intervention-9",
      name: "Eating Yogurt (1 serving)",
      clusterId: "interventions",
    },
    {
      id: "intervention-10",
      name: "Whole Grain Bread (1 slice)",
      clusterId: "interventions",
    },
    // Add more interventions here
  ];

  return { items };
}

export default getCatalog;
