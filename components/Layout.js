const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <header className="bg-white shadow-md p-4 mb-4">
          <h1 className="text-2xl font-bold">Film Genre Finder</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  };
  
  export default Layout;
  