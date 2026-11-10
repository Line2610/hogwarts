import * as housesRepository from "../repositories/houses.repository.js";

export const getAllHouses = async (req, res) => {
  // try {
  const allHouses = await housesRepository.getAllHouses();
  res.json(allHouses);
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send("Database error");
  // }
};

export async function getSingleHouse(request, response) {
  // try {
  const house = await housesRepository.getHouseById(request.params.id);
  if (!house) {
    throw new Error("House does not exist");
    // response.status(404).json({ message: "House does not exist", error: "not found", statusCode: 404 });
  } else {
    response.sendStatus(200);
  }
  // } catch (err) {
  //   console.error(err);
  //   response.status(500).json(
  //     { message: "something went wrong", error: "internal server error", statusCode: 500 });
  // }
}
