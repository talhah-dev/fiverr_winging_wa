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
    image: "https://api.afs-foiling.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-26-at-19.56.47-1024x682.jpeg",
  },
];
