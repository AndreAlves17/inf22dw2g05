const config = require("../configs/env");

const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "OAuth2.0_01",
    version: "1.0.0",
    description: "Example OAuth2.0 protected API",
    contact: { name: "inf-21-dw2-g02" },
  },
  servers: [{ url: "http://localhost:" + config.port }],
  security: [
    {
      OAuth2Security: [],
    },
  ],
  paths: {
    "/Albums/Count": {
      get: {
        tags: ["AlbumController"],
        summary: "Count Albums",
        operationId: "countAlbums",
        responses: {
          200: {
            description: "Number of Albums",
          },
        },
      },
    },
    "/Albums": {
      get: {
        tags: ["AlbumController"],
        summary: "Retrieve Albums",
        operationId: "retrieveAlbum",
        responses: {
          200: {
            description: "Array of Albums ",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Album",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "AlbumController",
      },
      post: {
        tags: ["AlbumController"],
        summary: "Create Album",
        operationId: "createAlbum",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Album",
              },
              examples: {
                AlbumInsert: {
                  $ref: "#/components/examples/AlbumInsert",
                },
                AlbumExample01: {
                  $ref: "#/components/examples/AlbumExample01",
                },
                AlbumExample02: {
                  $ref: "#/components/examples/AlbumExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Album",
              },
              examples: {
                AlbumExample01: {
                  $ref: "#/components/examples/AlbumExample01",
                },
                AlbumExample02: {
                  $ref: "#/components/examples/AlbumExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Album model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Album",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Album",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "AlbumController",
      },
    },
    "/Album/{id}": {
      get: {
        tags: ["AlbumController"],
        summary: "Retrieve Album",
        operationId: "retrieveAlbum",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Album id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Album id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Album",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Album",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "AlbumController",
      },
      put: {
        tags: ["AlbumController"],
        summary: "Update Album",
        operationId: "updateAlbum",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Album id 1",
                value: 1,
              },
              two: {
                summary: "Update Album id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Album",
              },
              examples: {
                AlbumUpdate: {
                  $ref: "#/components/examples/AlbumInsert",
                },
                AlbumExample01: {
                  $ref: "#/components/examples/AlbumExample01",
                },
                AlbumExample02: {
                  $ref: "#/components/examples/AlbumExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Album PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "AlbumController",
      },
      delete: {
        tags: ["AlbumController"],
        summary: "Delete Album",
        operationId: "deleteAlbum",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Album id 1",
                value: 1,
              },
              two: {
                summary: "Delete Album id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "AlbumController",
      },
    },























    "/Musicas/Count": {
      get: {
        tags: ["MusicasController"],
        summary: "Count Musicas",
        operationId: "countMusicas",
        responses: {
          200: {
            description: "Number of Musicas ",
          },
        },
      },
    },
    "/Musicas": {
      get: {
        tags: ["MusicasController"],
        summary: "Retrieve Musicas",
        operationId: "retrieveMusicas",
        responses: {
          200: {
            description: "Array of Musicas",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Musicas",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200_1",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "MusicasController",
      },
      post: {
        tags: ["MusicasController"],
        summary: "Create Musica",
        operationId: "createMusica",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Musicas",
              },
              examples: {
                MusicasInsert: {
                  $ref: "#/components/examples/MusicasInsert",
                },
                MusicasExample01: {
                  $ref: "#/components/examples/MusicasExample01",
                },
                MusicasExample02: {
                  $ref: "#/components/examples/MusicasExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Musicas",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create Musica",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Musicas",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Musicas",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "MusicasController",
      },
    },
    "/Musica/{id}": {
      get: {
        tags: ["MusicasController"],
        summary: "Retrieve Musica",
        operationId: "retrieveMusica",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Musica id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Musica id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Musicas",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Musicas",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "MusicasController",
      },
      put: {
        tags: ["MusicasController"],
        summary: "Update Musica",
        operationId: "updateMusica",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Musica id 1",
                value: 1,
              },
              two: {
                summary: "Update Musica id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Musicas",
              },
              examples: {
                MusicasUpdate: {
                  $ref: "#/components/examples/MusicasInsert",
                },
                MusicasExample01: {
                  $ref: "#/components/examples/MusicasExample01",
                },
                MusicasExample02: {
                  $ref: "#/components/examples/MusicasExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Musica PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "MusicasController",
      },
      delete: {
        tags: ["MusicasController"],
        summary: "Delete Musica",
        operationId: "deleteMusica",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Musica id 1",
                value: 1,
              },
              two: {
                summary: "Delete Musica id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "MusicasController",
      },
    },







    "/Artistas/Count": {
      get: {
        tags: ["ArtistaController"],
        summary: "Count Artista",
        operationId: "countArtista",
        responses: {
          200: {
            description: "Number of Artista ",
          },
        },
      },
    },
    "/Artistas": {
      get: {
        tags: ["ArtistaController"],
        summary: "Retrieve Artista",
        operationId: "retrieveArtista",
        responses: {
          200: {
            description: "Array of Artista ",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Artista",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "ArtistaController",
      },
      post: {
        tags: ["ArtistaController"],
        summary: "Create Artista",
        operationId: "createArtista",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Artista",
              },
              examples: {
                ArtistaInsert: {
                  $ref: "#/components/examples/ArtistaInsert",
                },
                ArtistaExample01: {
                  $ref: "#/components/examples/ArtistaExample01",
                },
                ArtistaExample02: {
                  $ref: "#/components/examples/ArtistaExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Artista",
              },
              examples: {
                ArtistaInsert: {
                  $ref: "#/components/examples/ArtistaInsert",
                },
                ArtistaExample01: {
                  $ref: "#/components/examples/ArtistaExample01",
                },
                ArtistaExample02: {
                  $ref: "#/components/examples/ArtistaExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Artista model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Artista",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Artista",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "ArtistaController",
      },
    },
    "/Artista/{id}": {
      get: {
        tags: ["ArtistaController"],
        summary: "Retrieve artista",
        operationId: "retrieveartista",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve artista id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve artista id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/artista",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/artista",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "ArtistaController",
      },
      put: {
        tags: ["ArtistaController"],
        summary: "Update artista",
        operationId: "updateArtista",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update artista id 1",
                value: 1,
              },
              two: {
                summary: "Update artista id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Artista",
              },
              examples: {
                ManufacturerUpdate: {
                  $ref: "#/components/examples/ArtistaInsert",
                },
                ManufacturerExample01: {
                  $ref: "#/components/examples/ArtistaExample01",
                },
                ManufacturerExample02: {
                  $ref: "#/components/examples/ArtistaExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Artista PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "ArtistaController",
      },
      delete: {
        tags: ["ArtistaController"],
        summary: "Delete artista",
        operationId: "deleteArtista",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete artista id 1",
                value: 1,
              },
              two: {
                summary: "Delete artista id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "ArtistaController",
      },
    },




    "/Artista/{id}/Album": {
      get: {
        tags: ["AlbumporArtistaController"],
        summary: "Album por Artista",
        operationId: "AlbumporArtista",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Artista id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Artista id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Array of Album",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Musicas",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "AlbumporArtistaController",
      },
    },



    "/Artista/{id}/Musica": {
      get: {
        tags: ["MusicasporArtistaController"],
        summary: "Musicas por Artista",
        operationId: "MusicasporArtista",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Artista id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Artista id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Array of Musicas",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Musicas",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "MusicasporArtistaController",
      },
    },





   
  },













  components: {
    schemas: {
      Musicas: {
        title: "Musica",
        required: [
          "nome",
          "genero",
          "idArtista",
          "datadelancamento",
          "idAlbum",
        ],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          nome: {
            type: "string",
          },
          genero: {
            type: "string",
          },
          idArtista: {
            type: "integer",
            format: "int64",
          },
          datadelancamento: {
            type: "integer",
            format: "int64",
          },
          idAlbum: {
            type: "integer",
            format: "int64",
          },
        },
        additionalProperties: true,
        example: {
          nome: "name",
          genero: "genero",
          idArtista: 0,
          datadelancamento: 0,
          idAlbum: 0,
        },
      },



      Album: {
        title: "Album",
        required: ["name","idArtista"],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          nome: {
            type: "string",
          },
         
          idArtista: {
            type: "integer",
            format: "int64",
          },
        },
        additionalProperties: false,
        example: {
          nome: "nome",
          idArtista: "1",
        },
      },




      Artista: {
        title: "Artista",
        required: ["nome", "pais"],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
          pais: {
            type: "string",
          },
        },
        additionalProperties: false,
        example: {
          id: 0,
          nome: "name",
          pais: "pais",
        },
      },
      
      inline_response_200: {
        type: "object",
        properties: {
          Album: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Album",
            },
          },
        },
        xml: {
          name: "Album",
        },
      },
      inline_response_200_1: {
        type: "object",
        properties: {
          Musica: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Musica",
            },
          },
        },
        xml: {
          name: "Musica",
        },
      },
    },
    examples: {
      MusicasExample01: {
        value: {
          id: 1,
          name: "Car 01",
          description: "Car 01 description",
          color: "Car 01 color",
        },
      },
      MusicasExample02: {
        value: {
          id: 2,
          name: "Car 02",
          description: "Car 02 description",
          color: "Car 02 color",
        },
      },
      MusicaInsert: {
        value: {
          nome: "Musica",
          genero: "genero",
          idArtista: 1,
          datadelancamento: 1,
          idAlbum: 1,
        },
      },
      AlbumExample01: {
        value: {
          id: 1,
          nome: "Almum 1",
          idArtista: 1,
          
        },
      },
      AlbumExample02: {
        value: {
          id: 1,
          nome: "Almum 2",
          idArtista: 2,
          
        },
      },
      AlbumInsert: {
        value: {
          nome: "Album",
          idArtista: 0,
          
        },
      },



      ArtistaExample01: {
        value: {
          id: 1,
          name: "Nome 1",
          pais: "Pais 2",
          
        },
      },
      ArtistaExample02: {
        value: {
          id: 2,
          nome: "NOME 2",
          pais: "pais 2",
          
        },
      },
      ArtistaInsert: {
        value: {
          nome: "Nome",
          pais: "Pais",
          
        },
      },
      
    },
    securitySchemes: {
      OAuth2Security: {
        type: "oauth2",
        flows: {
          authorizationCode: {
            authorizationUrl: "https://github.com/login/oauth/authorize",
            tokenUrl: "https://github.com/login/oauth/access_token",
            scopes: [],
          },
        },
      },
    },
  },
  security: [{ OAuth2Security: [] }],
};

const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
