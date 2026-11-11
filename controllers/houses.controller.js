import * as housesRepository from "../repositories/houses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

export const getAllHouses = async (_req, res) => {
  const allHouses = await housesRepository.getAllHouses();
  res.status(200).json(allHouses);
};

export async function getSingleHouse(req, res) {
  const house = await housesRepository.getHouseById(req.params.id);
  if (!house) {
    throw new HTTPError(404, "House does not exist");
  }
  res.status(200).json(house);
}
