const NotFound = () => {
  return (
    <div className="flex item-center justify-center text-center h-screen w-full bg-gray-900">
      <div className="h-full flex flex-row justify-center items-center">
        <div role="status">
          <div className="text-9xl font-bold text-white">404</div>
          <div className="text-2xl font-bold text-white">
            Sorry, Your destination is not found
          </div>
          <div className="flex flex-col justify-center items-center mt-20">
          <img
            src="../../assets/images/footer.png"
            alt="logo"
            className="transition-opacity h-20"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
