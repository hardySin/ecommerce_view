import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./banners/banner";
import Menu from "./menu/menu";
import DiscountAccessories from "./products/discountaccessories";
import ProductDescription from "./products/productdescription";
import ViewProducts from "./products/viewproduct";
import Footer from "./staticPage/footer";
import Header from "./staticPage/header";
import RecentlyView from "./todaydeal/RecentlyViewed";
import TodayDeal from "./todaydeal/todaydeal";

import AddtoCart from "./products/addTocart";
import CheckOut from "./products/checkout";
import AdminPanel from "./adminPanel/adminPanel";
import Error from "./error/error";
import ProductValue from "./adminPanel/productValue";
import CreateAccount from "./authentication_pages/createAccount";
import AddProduct from "./adminPanel/addproduct";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Header />
          <Menu />
          <Banner />
          <TodayDeal />
          <DiscountAccessories />
          <ViewProducts />
          <RecentlyView />
          <Footer />
        </Route>

        <Route path="/viewProduct">
          <Header />
          <Menu />
          <ProductDescription />
          <RecentlyView />
          <Footer />
        </Route>

        <Route path="/viewcart">
          <Header />
          <Menu />
          <AddtoCart />
          <RecentlyView />
          <Footer />
        </Route>

        <Route path="/checkout">
          <Header />
          <CheckOut />
          <Footer />
        </Route>

        <Route path="/adminpanel">
          <Header />
          <AdminPanel></AdminPanel>
        </Route>

        <Route path="/addproduct">
          <Header />
          <AddProduct></AddProduct>
        </Route>

        <Route path="/view">
          <Header />
          <ProductValue></ProductValue>
        </Route>

        <Route path="/edit">
          <Header />
          <ProductValue></ProductValue>
        </Route>

        <Route path="/createAccount">
          <CreateAccount></CreateAccount>
        </Route>

        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}
