const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl justify-center py-4 pb-8">
        Bienvenido maestro pokemon
      </h1>
      <img
        className="h-100 justify-center rounded-lg"
        src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg"
        alt=""
      />
    </div>
  );
};

export default Home;
