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
          <tr>
            <th>title</th>
            <th>videoCount</th>
            <th>duration</th>
          </tr>
          {songs.map((song) => (
            <tr>
              <td>{song.sname}</td>
              <td>{song.videoCount}</td>
              <td>{song.duration}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Songs;
