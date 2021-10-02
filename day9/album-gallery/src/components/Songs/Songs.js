import React from "react";
import { useParams } from "react-router";
import songs from "./index";

const Songs = ({ albums }) => {
  // let albumItem = props.albums;

  // const id = props.albums.id;
  let { id } = useParams();
  // let albumItem = albums.find((item) => item.id === id);
  let albumItem = albums[parseInt(id, 10)];

  console.log(albumItem);
  return (
    <div>
      {
        <div className="album">
          <img
            src={albumItem.albumCover}
            alt="Album-cover"
            className="album_img"
          />
          <p className="album-title">{albumItem.album}</p>
          <span className="album_artist">{albumItem.artist}</span>
        </div>
      }

      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>TITLE</th>
              <th>PLAYS</th>
              <th>ALBUM</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr>
                <ol>
                  <li>
                    <td>
                      <div>
                        <img src={song.simage} alt="song-cover" />
                      </div>

                      <div>
                        <h3>{song.sname}</h3>
                        <p>{song.artist}</p>
                      </div>
                    </td>
                    <td>{song.tdlays}</td>
                    <td>{song.albumName}</td>
                    <td>{song.duration}</td>
                  </li>
                </ol>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Songs;
