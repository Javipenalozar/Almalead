const { execFileSync } = require("node:child_process");

const branch = process.env.BRANCH || "";
const context = process.env.CONTEXT || "";
const commitRef = process.env.COMMIT_REF || "HEAD";
const forceDeploy = process.env.NETLIFY_FORCE_DEPLOY === "true";
const deployPattern = /\[(deploy|production|publicar|preview)\]/i;

function readCommitMessage() {
  try {
    return execFileSync("git", ["log", "-1", "--pretty=%B", commitRef], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return "";
  }
}

if (forceDeploy) {
  console.log("NETLIFY_FORCE_DEPLOY=true. Build allowed.");
  process.exit(1);
}

const commitMessage = readCommitMessage();
const hasDeployApproval = deployPattern.test(commitMessage);
const isProductionMain = context === "production" && branch === "main";

if (isProductionMain && hasDeployApproval) {
  console.log("Deploy approval found in commit message. Build allowed.");
  process.exit(1);
}

console.log(
  [
    "Build skipped to protect the monthly Netlify deploy quota.",
    "To publish production, include [deploy], [production], or [publicar] in the commit message.",
    "Example: git commit --allow-empty -m \"Publish Almalead [deploy]\"",
  ].join("\n"),
);

process.exit(0);
