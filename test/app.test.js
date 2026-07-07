const test = require("node:test");
const assert = require("node:assert/strict");
const { createApp } = require("../app");

test("GET /api/menu returns coffee items", async () => {
  const app = createApp();
  await new Promise((resolve) => app.listen(0, resolve));
  const { port } = app.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/menu`);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("content-type"), "application/json; charset=utf-8");

    const body = await response.json();
    assert.ok(Array.isArray(body.items));
    assert.equal(body.items.length, 3);
    assert.equal(body.items[0].name, "Kumbakonam Degree Coffee");
  } finally {
    app.close();
  }
});
