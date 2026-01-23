import { getProducts } from "./api-server/product/product";
import { getUsers } from "./api-server/user/user";
import useGetFetch from "./hooks/useGetFetch";

function App() {
  const { data: products } = useGetFetch(getProducts);
  const { data: users } = useGetFetch(getUsers);

  console.log(products);
  console.log(users);

  return <div>hello</div>;
}

export default App;
