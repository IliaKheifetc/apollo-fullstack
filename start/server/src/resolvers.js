module.exports = {
  Query: {
    launches: (_, args, context, info) => {
      console.log("parent", _);
      console.log("args", args);
      console.log("context", context);
      console.log("info", info);

      return context.dataSources.launchAPI.getAllLaunches();
    },
    rockets: (_, __, context) => {
      return context.dataSources.rocketAPI.getAllRockets();
    },
    launch: (_, args, { dataSources }) => {
      console.log("args", args);
      return dataSources.launchAPI.getLaunchById({ launchId: args.id });
    },
    me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};
