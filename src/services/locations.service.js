import http from './http.service';

export const LocationService = {
  async getAllLocations() {
    return http.get(`/location`);
  },
  async getLocation(locationId) {
    return http.get(`/location/${locationId}`);
  },
};
