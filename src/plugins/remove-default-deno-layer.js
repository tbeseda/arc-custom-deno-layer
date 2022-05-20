module.exports = {
  deploy: {
    start: ({ cloudformation }) => {
      for (const name in cloudformation.Resources) {
        const resource = cloudformation.Resources[name];

        if (resource.Type === "AWS::Serverless::Function") {
          resource.Properties.Layers.pop();
        }
      }

      return cloudformation;
    },
  },
};
