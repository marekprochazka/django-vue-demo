/** 
@brief This file is generated by bin/update_static.py. Do not edit this file manually.
*/ 
type StaticAsset = 'b.jpg' | 'a.jpg';

export const getStaticAsset = (asset: StaticAsset) => {
  return `static/${asset}`;
};