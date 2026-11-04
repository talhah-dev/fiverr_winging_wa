export interface AfsDiscipline {
  id: string;
  name: string;
  count: number;
  image: string;
}

export const afsDisciplines: AfsDiscipline[] = [
  {
    id: "foils",
    name: "Foils",
    count: 42,
    image: "https://api.afs-foiling.com/wp-content/uploads/2025/06/surf-foil-1024x703.jpg",
  },
  {
    id: "wings",
    name: "Wings",
    count: 4,
    image: "/wing-photo.png",
  },
];
