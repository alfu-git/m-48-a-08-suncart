export const getAllProducts = async () => {
  const res = await fetch("https://m-48-a-08-suncart.vercel.app/data.json");
  return res.json();
};
