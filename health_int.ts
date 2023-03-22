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
      id: "stretching_10min",
      name: "Stretching (10 min)",
      clusterId: "physical-and-mental-health-activities",
    },
    {
      id: "biking_10min",
      name: "Biking (10 min)",
      clusterId: "physical-and-mental-health-activities",
    },
    {
      id: "meditation_10min",
      name: "Meditation (10 min)",
      clusterId: "physical-and-mental-health-activities",
    },
    {
      id: "taking_stairs_5floors",
      name: "Taking Stairs (5 floors)",
      clusterId: "physical-and-mental-health-activities",
    },
    {
      id: "strength_training_10min",
      name: "Strength Training (10 min)",
      clusterId: "physical-and-mental-health-activities",
    },
  
    {
      id: "flu_vaccine_1",
      name: "Flu Vaccine (1 time)",
      clusterId: "meds-supplements",
    },
    {
      id: "orthomega_fishoil_1cap",
      name: "Orthomega Fish Oil (1 cap)",
      clusterId: "meds-supplements",
    },
    {
      id: "enchanced_zinc_lozenges_6cap_assuming_sick",
      name: "Enhanced Zinc Lozenges (6 cap, assuming sick)",
      clusterId: "meds-supplements",
    },
    {
      id: "eating_yogurt_1serving",
      name: "Eating Yogurt (1 serving)",
      clusterId: "good-food",
    },
    {
      id: "whole_grain_bread_1slice",
      name: "Whole Grain Bread (1 slice)",
      clusterId: "good-food",
    },
    {
      id: "drinking_water_500ml",
      name: "Drinking Water (500 mL)",
      clusterId: "good-food",
    },
     {
      id: "green_tea_1cup",
      name: "Drinking Green Tea (1 cup)",
      clusterId: "good-food",
    },
     {
      id: "turmeric_1tsp",
      name: "Taking Turmeric (1 tsp)",
      clusterId: "good food",
    },
     {
      id: "blueberries_1cup",
      name: "Eating Blueberries (1 cup)",
      clusterId: "good food",
    },
     {
      id: "extra_primary_sleep_10min",
      name: "Getting extra primary sleep (10 min)",
      clusterId: "self-care-practices",
    },
     {
      id: "laughing_5min",
      name: "Laughing (5 min)",
      clusterId: "self-care-practices",
    },
    {
      id: "social_interaction_30min",
      name: "Social Interaction (30 min)",
      clusterId: "self-care-practices",
    },
    {
      id: "washing_hands_30sec",
      name: "Washing hands (30 sec)",
      clusterId: "self-care-practices",
    },
    {
      id: "wearing_face_mask_1day",
      name: "Wearing Face Mask (1 day)",
      clusterId: "self-care-practices",
    },
    {
      id: "brushing_teeth_2min",
      name: "Brushing Teeth (2 min)",
      clusterId: "self-care-practices",
    },
    {
      id: "flossing_1time",
      name: "Flossing (1 time)",
      clusterId: "self-care-practices",
    },
    {
      id: "sunscreen_application_1time",
      name: "Sunscreen application (1 time)",
      clusterId: "self-care-practices",
    },
    {
      id: "blackcoffee_1cup",
      name: "Drinking black coffee (1 cup)",
      clusterId: "unhealthy-food-or-drink",
    },
    {
      id: "diet_coke_250ml",
      name: "Drinking diet coke (250 mL)",
      clusterId: "unhealthy-food-or-drink",
    },
    {
      id: "deep_fried_food_1serving",
      name: "Eating deep fried food (1 serving)",
      clusterId: "unhealthy-food-or-drink",
    },
     {
      id: "processed_meat_1serving",
      name: "Eating processed meat (1 serving)",
      clusterId: "unhealthy-food-or-drink",
    },
    {
      id: "brown_sugar_10g",
      name: "Taking brown sugar (10 g)",
      clusterId: "sweeteners",
    },
      {
      id: "white_sugar_10g",
      name: "Taking white sugar (10 g)",
      clusterId: "sweeteners",
    },
      {
      id: "stevia_1pack",
      name: "Taking stevia (1 pack)",
      clusterId: "sweeteners",
    },
      {
      id: "redwine_1oz",
      name: "Drinking red wine (1 oz)",
      clusterId: "wine",
    },
      {
      id: "redwine_10oz",
      name: "Drinking red wine (10 oz)",
      clusterId: "wine",
    },
      {
      id: "vomiting_2min",
      name: "Vomiting (2 min)",
      clusterId: "negative-health-condition",
    },
     {
      id: "mediocre_headache_10min",
      name: "Having mediocre headache (10 min)",
      clusterId: "negative health condition,
    },
     {
      id: "sitting_1hour",
      name: "Sitting (1 hour)",
      clusterId: "bad-habits",
    },
     {
      id: "screen_time_1hour",
      name: "Screen time (1 hour)",
      clusterId: "bad-habits",
    },
     {
      id: "smoking_cigarette_1stick",
      name: "Smoking cigarette (1 stick)",
      clusterId: "bad-habits",
    },
  ];

  return { items };
}

export default getCatalog;
