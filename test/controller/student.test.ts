import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";
import { Application } from "egg";

describe("test/controller/student.test.ts", () => {
  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  it("should GET /api/student/get", async () => {
    // make request
    const result = await createHttpRequest(app)
      .get("/api/student/get")
      .query({ id: 1 });
    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.message).toBe("OK");
  });
});
