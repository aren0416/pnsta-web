import { logoutUser } from "../apollo";
import { PageTitle } from "../components/Pagetitle";

export const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <div>Home</div>
      <button onClick={() => logoutUser()}>๋ก๊ทธ์์</button>
    </>
  );
};
