

const apiRoutes = {
      "/api/hello/:name": async (req) => {
        const name = req.params.name;
        return Response.json({
          message: `Hello, ${name}!`,
        });
      },
};

export default apiRoutes;