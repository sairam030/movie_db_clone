import SearchButton from "../../Baseui/Button/SearchButton";
import SearchInput from "../../Baseui/Input/SearchInput";

const Banner = () => {
  return (
    <div className="h-[300px] bg-banner bg-cover py-5">
      <div className="flex flex-col px-10 py-10 gap-10">
        <div className="text-white">
          <h2 className="font-bold text-5xl py-3">Welcome</h2>
          <h3 className="font-semibold text-1rem py-2 ">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className="relative">
            <SearchInput />
            <div className="absolute right-0 top-0">
              <SearchButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
