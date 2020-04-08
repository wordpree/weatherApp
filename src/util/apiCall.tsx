import React from "react";

// const tourPhotoInit = {
//   results: [] as Array<IUnsData>,
//   loading: true,
//   site: ""
// };
// const weatherInit = {
//   loading: true,
//   data: {} as IWData
// };

// export const UnspPhotoProvider = ({ children, location }: IApiProps) => {
//   const URI = "https://api.unsplash.com";
//   const PTH = "/search/photos";
//   const QUERY = `${location}&per_page=12&page=1`;
//   const API_KEY =
//     "62290e497985a003118ae759aa80d4f3f2a5c6b05a053f4d32a744866330b765";
//   const url = `${URI}${PTH}?query=${QUERY}&client_id=${API_KEY}`;
//   const [photos, setPhotos] = useState(tourPhotoInit);

//   useEffect(() => {
//     fetchData(url, { "Accept-Version": "v1" }).then(res => {
//       if (res) {
//         const resultState = res.results.map((result: IUnsData) => ({
//           id: result.id,
//           alt_description: result.alt_description,
//           urls: result.urls,
//           user: result.user,
//           links: result.links,
//           created_at: result.created_at
//         }));
//         setPhotos({ results: resultState, loading: false, site: location });
//       }
//     });
//   }, [url, location]);
//   return (
//     <tourFeaturePho.Provider value={photos}>{children}</tourFeaturePho.Provider>
//   );
// };
// export const useUnspPhotoContextValue = () => useContext(tourFeaturePho);
