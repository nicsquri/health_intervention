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
    {
      id: "intervention-11",
      name: "Drinking Water (500mL)",
      clusterId: "interventions",
    },
     {
      id: "intervention-12",
      name: "Drinking Green Tea (1cup)",
      clusterId: "interventions",
    },
     {
      id: "intervention-13",
      name: "Taking Turmeric (1tsp)",
      clusterId: "interventions",
    },
     {
      id: "intervention-14",
      name: "Eating Blueberries (1cup)",
      clusterId: "interventions",
    },
     {
      id: "intervention-15",
      name: "Having extra primary sleep (10min)",
      clusterId: "interventions",
    },
     {
      id: "intervention-16",
      name: "Laughing (5min)",
      clusterId: "interventions",
    },
    {
      id: "intervention-17",
      name: "Social Interaction (30min)",
      clusterId: "interventions",
    },
    {
      id: "intervention-18",
      name: "Washing hands (30sec)",
      clusterId: "interventions",
    },
    {
      id: "intervention-19",
      name: "Wearing Face Mask (1day)",
      clusterId: "interventions",
    },
    {
      id: "intervention-20",
      name: "Brushing Teeth (2min)",
      clusterId: "interventions",
    },
    {
      id: "intervention-21",
      name: "Flossing (1time)",
      clusterId: "interventions",
    },
    {
      id: "intervention-22",
      name: "Sunscreen application",
      clusterId: "interventions",
    },
    {
      id: "intervention-23",
      name: "Taking brown sugar (10g)",
      clusterId: "interventions",
    },
      {
      id: "intervention-24",
      name: "Taking white sugar (10g)",
      clusterId: "interventions",
    },
      {
      id: "intervention-25",
      name: "Taking stevia (1pack)",
      clusterId: "interventions",
    },
      {
      id: "intervention-26",
      name: "Drinking red wine (1oz)",
      clusterId: "interventions",
    },
      {
      id: "intervention-27",
      name: "Drinking red wine (10z)",
      clusterId: "interventions",
    },
      {
      id: "intervention-28",
      name: "Vomiting (2min)",
      clusterId: "interventions",
    },
      {
      id: "intervention-29",
      name: "Having diarrhea(1episode)",
      clusterId: "interventions",
    },
  ];

  return { items };
}

export default getCatalog;
