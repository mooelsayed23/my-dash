import EnhancedTable, { RowData } from "../created/EnhancedTable";

const data: RowData[] = [
  { id: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 2, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 3, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  {
    id: 4,
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    id: 5,
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
  {
    id: 6,
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
  },
  {
    id: 7,
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  {
    id: 8,
    name: "Jelly Bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
  },
  { id: 9, name: "KitKat", calories: 518, fat: 26.0, carbs: 65, protein: 7.0 },
  {
    id: 10,
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0.0,
  },
  {
    id: 11,
    name: "Marshmallow",
    calories: 318,
    fat: 0,
    carbs: 81,
    protein: 2.0,
  },
  { id: 12, name: "Nougat", calories: 360, fat: 19.0, carbs: 9, protein: 37.0 },
  { id: 13, name: "Oreo", calories: 437, fat: 18.0, carbs: 63, protein: 4.0 },
  { id: 14, name: "Biscuit", calories: 220, fat: 9.5, carbs: 32, protein: 2.0 },
  {
    id: 15,
    name: "Cookies",
    calories: 280,
    fat: 14.0,
    carbs: 35,
    protein: 3.0,
  },
  { id: 16, name: "Pancake", calories: 210, fat: 5.0, carbs: 38, protein: 6.0 },
  {
    id: 17,
    name: "Croissant",
    calories: 320,
    fat: 16.0,
    carbs: 36,
    protein: 5.0,
  },
  {
    id: 18,
    name: "Petit four",
    calories: 400,
    fat: 20.0,
    carbs: 45,
    protein: 4.5,
  },
  {
    id: 19,
    name: "Brownie",
    calories: 350,
    fat: 18.0,
    carbs: 40,
    protein: 3.5,
  },
  {
    id: 20,
    name: "Tiramisu",
    calories: 450,
    fat: 25.0,
    carbs: 50,
    protein: 5.0,
  },
  {
    id: 21,
    name: "Chocolate Bar",
    calories: 350,
    fat: 18.0,
    carbs: 40,
    protein: 3.5,
  },
  {
    id: 22,
    name: "Carrot Cake",
    calories: 280,
    fat: 12.0,
    carbs: 36,
    protein: 3.0,
  },
  {
    id: 23,
    name: "Petit Four",
    calories: 390,
    fat: 22.0,
    carbs: 44,
    protein: 4.0,
  },
  {
    id: 24,
    name: "Apple Cake",
    calories: 320,
    fat: 15.0,
    carbs: 38,
    protein: 2.5,
  },
  {
    id: 25,
    name: "Vanilla Muffin",
    calories: 250,
    fat: 10.0,
    carbs: 30,
    protein: 2.0,
  },
  {
    id: 26,
    name: "Cheesecake",
    calories: 420,
    fat: 28.0,
    carbs: 35,
    protein: 6.0,
  },
  {
    id: 27,
    name: "Butter Biscuit",
    calories: 200,
    fat: 8.0,
    carbs: 25,
    protein: 2.5,
  },
  {
    id: 28,
    name: "Vanilla Chocolate Cake",
    calories: 380,
    fat: 20.0,
    carbs: 42,
    protein: 3.5,
  },
  {
    id: 29,
    name: "Chocolate Muffin",
    calories: 300,
    fat: 14.0,
    carbs: 32,
    protein: 3.0,
  },
  {
    id: 30,
    name: "Fruit Tart",
    calories: 350,
    fat: 16.0,
    carbs: 48,
    protein: 4.0,
  },
  { id: 31, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 32, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 33, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  {
    id: 34,
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    id: 35,
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
  },
  {
    id: 36,
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
  },
  {
    id: 37,
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  {
    id: 38,
    name: "Jelly Bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
  },
  { id: 39, name: "KitKat", calories: 518, fat: 26.0, carbs: 65, protein: 7.0 },
  {
    id: 40,
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0.0,
  },
  {
    id: 41,
    name: "Marshmallow",
    calories: 318,
    fat: 0,
    carbs: 81,
    protein: 2.0,
  },
  { id: 42, name: "Nougat", calories: 360, fat: 19.0, carbs: 9, protein: 37.0 },
  { id: 43, name: "Oreo", calories: 437, fat: 18.0, carbs: 63, protein: 4.0 },
  { id: 44, name: "Biscuit", calories: 220, fat: 9.5, carbs: 32, protein: 2.0 },
  {
    id: 45,
    name: "Cookies",
    calories: 280,
    fat: 14.0,
    carbs: 35,
    protein: 3.0,
  },
  { id: 46, name: "Pancake", calories: 210, fat: 5.0, carbs: 38, protein: 6.0 },
  {
    id: 47,
    name: "Croissant",
    calories: 320,
    fat: 16.0,
    carbs: 36,
    protein: 5.0,
  },
  {
    id: 48,
    name: "Petit four",
    calories: 400,
    fat: 20.0,
    carbs: 45,
    protein: 4.5,
  },
  {
    id: 49,
    name: "Brownie",
    calories: 350,
    fat: 18.0,
    carbs: 40,
    protein: 3.5,
  },
  {
    id: 50,
    name: "Tiramisu",
    calories: 450,
    fat: 25.0,
    carbs: 50,
    protein: 5.0,
  },
  {
    id: 51,
    name: "Chocolate Bar",
    calories: 350,
    fat: 18.0,
    carbs: 40,
    protein: 3.5,
  },
  {
    id: 52,
    name: "Carrot Cake",
    calories: 280,
    fat: 12.0,
    carbs: 36,
    protein: 3.0,
  },
  {
    id: 53,
    name: "Petit Four",
    calories: 390,
    fat: 22.0,
    carbs: 44,
    protein: 4.0,
  },
  {
    id: 54,
    name: "Apple Cake",
    calories: 320,
    fat: 15.0,
    carbs: 38,
    protein: 2.5,
  },
  {
    id: 55,
    name: "Vanilla Muffin",
    calories: 250,
    fat: 10.0,
    carbs: 30,
    protein: 2.0,
  },
  {
    id: 56,
    name: "Cheesecake",
    calories: 420,
    fat: 28.0,
    carbs: 35,
    protein: 6.0,
  },
  {
    id: 57,
    name: "Butter Biscuit",
    calories: 200,
    fat: 8.0,
    carbs: 25,
    protein: 2.5,
  },
  {
    id: 58,
    name: "Vanilla Chocolate Cake",
    calories: 380,
    fat: 20.0,
    carbs: 42,
    protein: 3.5,
  },
  {
    id: 59,
    name: "Chocolate Muffin",
    calories: 300,
    fat: 14.0,
    carbs: 32,
    protein: 3.0,
  },
  {
    id: 60,
    name: "Fruit Tart",
    calories: 350,
    fat: 16.0,
    carbs: 48,
    protein: 4.0,
  },
];

export default function Home() {
  return (
    <>
      <EnhancedTable data={data} />
    </>
  );
}
