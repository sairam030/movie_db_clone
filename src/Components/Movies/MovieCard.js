const getPosterPath = (poster_path) => {
  return `https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`;
};

function MovieCard({ poster_path, title, release_date }) {
  return (
    <div className="flex flex-col pl-5 gap-2">
      <img
        src={getPosterPath(poster_path)}
        className="w-[150px] h-[225px] shadow-sm rounded-md"
      />
      <div className="flex flex-col w-[150px] pl-5">
        <h3 className="font-bold">{title}</h3>
        <p className="font-normal text-slate-500">{release_date}</p>
      </div>
    </div>
  );
}
export default MovieCard;
