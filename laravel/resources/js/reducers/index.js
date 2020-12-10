import { combineReducers } from 'redux'

import tracks from '../reducers/tracks'
import playlists from '../reducers/playlists'
import filterTracks from '../reducers/filterTracks'

export default combineReducers({
  tracks,
  playlists,
  filterTracks
})