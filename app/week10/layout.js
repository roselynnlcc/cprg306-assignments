import { AuthContextProvider } from "./_utils/auth-context";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold pt-6 pl-6 pb-2 bg-green-50">
          🛒📃 Shopping List 💸🛍️
        </h1>
      </header>
      <AuthContextProvider>{children}</AuthContextProvider>
    </div>
  );
};

export default Layout;
