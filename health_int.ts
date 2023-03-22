import { Catalog, Item } from "@/types";
import { Map } from "immutable";

function getCatalog(): Catalog {
  const items: Item[] = [
    {
      id: "walking_in_nature_10min",
      name: "Walking in Nature (10 min)",
      clusterId: "physical-and-mental-health-activities",
    },
    {
      id: "intervention-1",
      name: "Stretching (10 min)",
      clusterId: "physical-and-mental-health-activities",
    },
    {
      id: "intervention-2",
      name: "Biking (10 min)",
      clusterId: "physical-and-mental-health-activities",
    },
    {
      id: "intervention-3",
      name: "Meditation (10 min)",
      clusterId: "physical-and-mental-health-activities",
    },
    {
      id: "intervention-4",
      name: "Taking Stairs (5 floors)",
      clusterId: "physical-and-mental-health-activities",
    },
    {
      id: "intervention-5",
      name: "Strength Training (10 min)",
      clusterId: "physical-and-mental-health-activities",
    },
  
    {
      id: "intervention-6",
      name: "Flu Vaccine (1 time)",
      clusterId: "meds-supplements",
    },
    {
      id: "intervention-7",
      name: "Orthomega Fish Oil (1 cap)",
      clusterId: "meds-supplements",
    },
    {
      id: "intervention-8",
      name: "Enhanced Zinc Lozenges (6 cap, assuming sick)",
      clusterId: "meds-supplements",
    },
    {
      id: "intervention-9",
      name: "Eating Yogurt (1 serving)",
      clusterId: "good-food",
    },
    {
      id: "intervention-10",
      name: "Whole Grain Bread (1 slice)",
      clusterId: "good-food",
    },
    {
      id: "intervention-11",
      name: "Drinking Water (500 mL)",
      clusterId: "good-food",
    },
     {
      id: "intervention-12",
      name: "Drinking Green Tea (1 cup)",
      clusterId: "good-food",
    },
     {
      id: "intervention-13",
      name: "Taking Turmeric (1 tsp)",
      clusterId: "good food",
    },
     {
      id: "intervention-14",
      name: "Eating Blueberries (1 cup)",
      clusterId: "good food",
    },
     {
      id: "intervention-15",
      name: "Having extra primary sleep (10 min)",
      clusterId: "self-care practices",
    },
     {
      id: "intervention-16",
      name: "Laughing (5 min)",
      clusterId: "self-care practices",
    },
    {
      id: "intervention-17",
      name: "Social Interaction (30 min)",
      clusterId: "self-care practices",
    },
    {
      id: "intervention-18",
      name: "Washing hands (30 sec)",
      clusterId: "self-care practices",
    },
    {
      id: "intervention-19",
      name: "Wearing Face Mask (1 day)",
      clusterId: "self-care practices",
    },
    {
      id: "intervention-20",
      name: "Brushing Teeth (2 min)",
      clusterId: "self-care practices",
    },
    {
      id: "intervention-21",
      name: "Flossing (1 time)",
      clusterId: "self-care practices",
    },
    {
      id: "intervention-22",
      name: "Sunscreen application (1 time)",
      clusterId: "self-care practices",
    },
    {
      id: "intervention-23",
      name: "Taking brown sugar (10 g)",
      clusterId: "sweeteners",
    },
      {
      id: "intervention-24",
      name: "Taking white sugar (10 g)",
      clusterId: "sweeteners",
    },
      {
      id: "intervention-25",
      name: "Taking stevia (1 pack)",
      clusterId: "sweeteners",
    },
      {
      id: "intervention-26",
      name: "Drinking red wine (1 oz)",
      clusterId: "interventions",
    },
      {
      id: "intervention-27",
      name: "Drinking red wine (10 oz)",
      clusterId: "interventions",
    },
      {
      id: "intervention-28",
      name: "Vomiting (2 min)",
      clusterId: "negative health condition",
    },
      {
      id: "intervention-29",
      name: "Having diarrhea(1 episode)",
      clusterId: "negative health condition",
    },
     {
      id: "intervention-30",
      name: "Having mediocre headache (10 min)",
      clusterId: "negative health condition,
    },
     {
      id: "intervention-31",
      name: "Sitting (1 hour)",
      clusterId: "interventions",
    },
     {
      id: "intervention-32",
      name: "Screen time (1 hour)",
      clusterId: "interventions",
    },
     {
      id: "intervention-33",
      name: "Smoking cigarette (1 stick)",
      clusterId: "interventions",
    },
  ];

  return { items };
}

export default getCatalog;
