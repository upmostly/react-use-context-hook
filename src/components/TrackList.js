import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons";
function TrackList() {
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();
  return (
    <>
      {trackList.map((track, index) => (
        <div className="box">
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
          <div className="song-title">
            {track.name}
          </div>
        </div>
      ))}
    </>
  )
}

export default TrackList
