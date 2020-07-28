export class TrackerService {
  async getTrackerData() {
    const res = await fetch('data/track-data.json');
    const data = await res.json();
    return data.data;
  }
}
