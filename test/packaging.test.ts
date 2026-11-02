import { execSync } from "node:child_process";

describe("npm package contents", () => {
  it("ships the bundling Dockerfile in the tarball", () => {
    const json = execSync("npm pack --dry-run --json", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    const files: string[] = JSON.parse(json)[0].files.map(
      (file: { path: string }) => file.path,
    );
    expect(files).toContain("resources/Dockerfile");
  });
});
