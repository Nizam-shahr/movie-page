import React from "react";
import Image from "next/image";
function Header({ movies, setFilterMovies }) {
  const handleSearch = (e) => {
    const keyword = e.target.value;

    const _movies = [...movies];

    setFilterMovies(() =>
      _movies?.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="headerContainer">
        <div className="navBarContainer">
          <div>
            <Image src="/images/Logo.png" width={150} height={150} />
            <h2>MovieBox</h2>
          </div>
          <div>
            <form>
              <input
                className="searchMovie"
                type="text"
                placeholder="What do you want to watch?"
                onChange={handleSearch}
              />
            </form>
          </div>
          <div className="signInDiv">
            <h2 className="signIn"> Sign in</h2>
            <Image
              src="/images/Menu.png"
              width={24}
              height={24}
              className="hamburger"
            />
          </div>
        </div>
        <div className="trailerContainer">
          <div className="trailerContainerDiv">
            <div>
              <h1>
                John Wick 3 :
                <br />
                Parabellum
              </h1>
            </div>
            <div className="imdbContainer">
              <Image src="/images/IMDB.jpg" width={35} height={17} />
              <h3>86.0 / 100</h3>
              <Image src="/images/tomatoes.jpg" width={16} height={17} />
              <h3>97%</h3>
            </div>
            <div className="trailerDetails">
              <p>
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
            </div>
            <div className="watchLaterContainer">
              <Image src="/images/play.png" width={20} height={20} />
              <h2>Watch trailer</h2>
            </div>
          </div>
          <div className="sideNumbers">
            <h3>1</h3>
            <h3>2</h3>
            <h2 className="three">
              <span className="rectangle"></span> 3
            </h2>
            <h3>4</h3>
            <h3>5</h3>
            <h3>6</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
