import * as housesRepository from "../repositories/houses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export const getAllHouses = async (_request, response) => {
  const allHouses = await housesRepository.getAllHouses();
  response.status(200).json(allHouses);
};

export async function getSingleHouse(request, response) {
  const house = await housesRepository.getHouseById(request.params.id);
  if (!house) {
    throw new HTTPError(404, "House does not exist");
  }
  response.status(200).json(house);
}
