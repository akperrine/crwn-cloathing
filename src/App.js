import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/sign-in/signin.component";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const Shop = () => {
    return <h1>This is the shop page</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
