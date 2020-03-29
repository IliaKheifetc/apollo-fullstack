const { RESTDataSource } = require("apollo-datasource-rest");

class RocketAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spacexdata.com/v3";
  }

  async getAllRockets() {
    const response = await this.get("rockets");
    return Array.isArray(response)
      ? response.map(r => this.rocketReducer(r))
      : [];
  }

  rocketReducer(rocket) {
    return {
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type
    };
  }

  getRocketById(id) {
    return this.get("rockets", { rocket_id: id });
  }
}

module.exports = RocketAPI;
