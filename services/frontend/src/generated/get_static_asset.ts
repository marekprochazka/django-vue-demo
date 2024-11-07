type StaticAsset = 'b.jpg' | 'a.jpg';

export const getStaticAsset = (asset: StaticAsset) => {
  return `static/${asset}`;
};