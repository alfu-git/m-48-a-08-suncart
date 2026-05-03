export const getAllProducts = async () => {
  const res = await fetch("https://data-hazel-one.vercel.app/data.json");
  return res.json();
};
