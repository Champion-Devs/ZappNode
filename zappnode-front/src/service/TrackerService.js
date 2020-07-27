import axios from 'axios';

export class TrackerService {
  async getTrackerData() {
    const res = await axios.get('data/track-data.json');
    return res.data.data;
  }
}
