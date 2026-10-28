import * as housesRepository from "../repositories/houses.repository.js";

export const getAllHouses = async (req, res) => {
  try {
    const allHouses = await housesRepository.getAllHouses();
    res.json(allHouses);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
};

export async function getSingleHouse(request, response) {
  try {
    const house = await housesRepository.getHouseById(request.params.id);
    if (house) {
      response.status(200).json(house);
    } else {
      response.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: "Database error" });
  }
}
