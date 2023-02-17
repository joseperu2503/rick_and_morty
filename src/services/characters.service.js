import http from './http.service';

export const CharacterService = {
  async getAllCharacters() {
    return http.get('/character');
  },
  async getCharacter(characterId) {
    return http.get(`/character/${characterId}`);
  },
  async getSomeCharacters() {
    return http.get('/character/1,2,3,4,5');
  },
};
