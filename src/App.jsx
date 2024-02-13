import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import { main_pages } from "./routers/MainRouter";
import SingleProduct from "./pages/Products/SingleProduct/SingleProduct";
import SingleLatestProduct from "./pages/Home/LatestProducts/SingleLatestProduct";
import SingleTranding from "./pages/Home/TrendingProducts/Components/SingleTranding";
import TopSingle from "./pages/Home/TopCategories/Components/TopSingle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={crypto.randomUUID()}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="singleproduct/:id" element={<SingleProduct />} />
          <Route path="latestproduct/:id" element={<SingleLatestProduct />} />
          <Route path="trandingproduct/:id" element={<SingleTranding />} />
          <Route path="topcategory/:id" element={<TopSingle/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
